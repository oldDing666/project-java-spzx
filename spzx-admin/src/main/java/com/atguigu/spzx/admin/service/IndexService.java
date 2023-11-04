package com.atguigu.spzx.admin.service;

import com.atguigu.spzx.model.dto.system.LoginDto;
import com.atguigu.spzx.model.vo.system.CaptchaVo;
import com.atguigu.spzx.model.vo.system.LoginVo;
import org.springframework.stereotype.Service;

@Service
public interface IndexService {

  LoginVo login(LoginDto loginDto);

  CaptchaVo generateCaptcha();
}
