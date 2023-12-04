package com.atguigu.spzx.feign.cart;

import com.atguigu.spzx.model.entity.h5.CartInfo;
import com.atguigu.spzx.model.vo.common.Result;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@FeignClient(value = "service-cart")
public interface CartFeignClient {

  @GetMapping("/api/order/cart/auth/deleteChecked")
  Result<?> deleteChecked();

  @GetMapping(value = "/api/order/cart/auth/getAllCkecked")
  List<CartInfo> getAllChecked();
}
