package com.atguigu.spzx.model.vo.system;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Schema(description = "登录成功响应结果实体类")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoginVo {

  @Schema(description = "令牌")
  private String token;

  @Schema(description = "刷新令牌,可以为空")
  private String refresh_token;

}
