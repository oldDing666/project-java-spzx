package com.atguigu.spzx.common.exception;


import com.atguigu.spzx.model.vo.common.Result;
import com.atguigu.spzx.model.vo.common.ResultCodeEnum;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
@ResponseBody
public class GlobalExceptionHandler {

  @ExceptionHandler(Exception.class)
  public Result<ResultCodeEnum> error(Exception e) {
    e.printStackTrace();
    return Result.build(null, ResultCodeEnum.SYSTEM_ERROR);
  }

  @ExceptionHandler(AdminException.class)
  public Result<AdminException> error(AdminException e) {
    return Result.build(null, e.getResultCodeEnum());
  }
}
