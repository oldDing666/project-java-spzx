package com.atguigu.spzx.product.controller;

import com.atguigu.spzx.model.entity.product.Category;
import com.atguigu.spzx.model.vo.common.Result;
import com.atguigu.spzx.model.vo.common.ResultCodeEnum;
import com.atguigu.spzx.product.service.CategoryService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/product/category")
public class CategoryController {

  @Autowired
  private CategoryService categoryService;

  @Operation(summary = "查询所有分类，树形封装")
  @GetMapping("/findCategoryTree")
  public Result<List<Category>> findCategoryTree() {
    List<Category> list = categoryService.findCategoryTree();
    return Result.build(list, ResultCodeEnum.SUCCESS);
  }
}
