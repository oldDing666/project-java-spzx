package com.atguigu.spzx.common.exception;

import com.atguigu.spzx.model.vo.common.ResultCodeEnum;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class GuiguException extends RuntimeException {

  private Integer code;
  private String message;
  private final ResultCodeEnum resultCodeEnum;
}
