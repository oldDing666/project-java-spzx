package com.atguigu.spzx.model.dto.system;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Schema(description = "用户登录请求参数")
@NoArgsConstructor
@AllArgsConstructor
public class LoginDto {

  @Schema(description = "用户名")
  @NotBlank
  private String userName;

  @Schema(description = "密码")
  @NotBlank
  private String password;

  @Schema(description = "提交验证码")
  @NotBlank
  private String captcha;

  @Schema(description = "验证码key")
  @NotBlank
  private String codeKey;

}
