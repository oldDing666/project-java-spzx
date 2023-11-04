package com.atguigu.spzx.admin.service.impl;

import com.alibaba.fastjson2.JSON;
import com.atguigu.spzx.admin.repository.IndexRepository;
import com.atguigu.spzx.admin.service.IndexService;
import com.atguigu.spzx.common.exception.AdminException;
import com.atguigu.spzx.model.dto.system.LoginDto;
import com.atguigu.spzx.model.entity.system.SysUser;
import com.atguigu.spzx.model.vo.common.ResultCodeEnum;
import com.atguigu.spzx.model.vo.system.LoginVo;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.TimeUnit;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

@Service
@RequiredArgsConstructor
public class IndexServiceImpl implements IndexService {

  private final IndexRepository indexRepository;
  private final RedisTemplate<String, String> redisTemplate;

  @Override
  public LoginVo login(LoginDto loginDto) {
    //1 获取输入验证码和存储到redis的key名称  loginDto获取到
    String captcha = loginDto.getCaptcha();
    String codeKey = loginDto.getCodeKey();

    //2 根据获取的redis里面key ，查询redis里面存储验证码
    String redisCaptcha = redisTemplate.opsForValue().get("user:validate" + codeKey);

    //3 比较输入的验证码和 redis存储验证码是否一致
    if (StringUtils.isEmpty(captcha) || StringUtils.isEmpty(redisCaptcha) || !StringUtils.equalsIgnoreCase(captcha,
        redisCaptcha)) {
      //4 如果不一致，提示用户，校验失败
      throw new AdminException(ResultCodeEnum.VALIDATE_CODE_ERROR);
    }
    //5 如果一致，删除redis里面验证码
    redisTemplate.delete("user:validate" + codeKey);

    //1 获取提交用户名，loginDto获取到
    String userName = loginDto.getUserName();

    //2 根据用户名查询数据库表 sys_user表
    Optional<SysUser> optionalSysUser = indexRepository.findByUserName(userName);
    //3 如果根据用户名查不到对应信息，用户不存在，返回错误信息
    if (optionalSysUser.isEmpty()) {
      throw new AdminException(ResultCodeEnum.LOGIN_ERROR);
    }

    //4 如果根据用户名查询到用户信息，用户存在
    SysUser sysUser = optionalSysUser.get();

    //5 获取输入的密码，比较输入的密码和数据库密码是否一致
    if (!StringUtils.equals(sysUser.getPassword(), DigestUtils.md5DigestAsHex(loginDto.getPassword().getBytes()))) {
      //6 如果密码一致，登录成功，如果密码不一致登录失败
      throw new AdminException(ResultCodeEnum.LOGIN_ERROR);
    }

    //7 登录成功，生成用户唯一标识token
    String token = UUID.randomUUID().toString().replaceAll("-", "");

    //8 把登录成功用户信息放到redis里面
    redisTemplate.opsForValue().set("user:login" + token, JSON.toJSONString(sysUser), 7, TimeUnit.DAYS);

    //9 返回loginvo对象
    return LoginVo.builder().token(token).build();
  }
}
