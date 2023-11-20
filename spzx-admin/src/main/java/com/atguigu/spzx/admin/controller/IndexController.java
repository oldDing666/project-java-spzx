package com.atguigu.spzx.admin.controller;


import com.atguigu.spzx.admin.service.IndexService;
import com.atguigu.spzx.admin.service.MenuService;
import com.atguigu.spzx.model.dto.system.LoginDto;
import com.atguigu.spzx.model.entity.system.SysUser;
import com.atguigu.spzx.model.vo.common.Result;
import com.atguigu.spzx.model.vo.common.ResultCodeEnum;
import com.atguigu.spzx.model.vo.system.LoginVo;
import com.atguigu.spzx.model.vo.system.CaptchaVo;
import com.atguigu.spzx.model.vo.system.SysMenuVo;
import com.atguigu.spzx.utils.AuthContextUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/index")
@RequiredArgsConstructor
public class IndexController {

    private final IndexService indexService;

    private final MenuService menuService;

    @PostMapping("/login")
    public Result<LoginVo> Login(LoginDto loginDto) {
        LoginVo loginVo = indexService.login(loginDto);
        return Result.build(loginVo, ResultCodeEnum.SUCCESS);
    }

    @PostMapping("/captcha")
    public Result<CaptchaVo> captcha() {
        CaptchaVo captchaVo = indexService.generateCaptcha();
        return Result.build(captchaVo, ResultCodeEnum.SUCCESS);
    }

    @GetMapping("/currentUser")
    public Result<SysUser> currentUser() {
        return Result.build(AuthContextUtil.getAdminUser(), ResultCodeEnum.SUCCESS);
    }

    @PostMapping("/logout")
    public Result<Object> logout(@RequestHeader("token") String token) {
        indexService.logout(token);
        return Result.build(null, ResultCodeEnum.SUCCESS);
    }

    @GetMapping("/menus")
    public Result<List<SysMenuVo>> menus() {
        List<SysMenuVo> menus = menuService.findSysMenusByUserId();
        return Result.build(menus, ResultCodeEnum.SUCCESS);
    }
}
