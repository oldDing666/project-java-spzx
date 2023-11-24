package com.atguigu.spzx.manager.controller;

import com.atguigu.spzx.manager.service.SysMenuService;
import com.atguigu.spzx.model.entity.system.SysMenu;
import com.atguigu.spzx.model.vo.common.Result;
import com.atguigu.spzx.model.vo.common.ResultCodeEnum;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/admin/system/sysMenu")
public class SysMenuController {

  @Autowired
  private SysMenuService sysMenuService;

  //菜单删除
  @DeleteMapping("removeById/{id}")
  public Result<?> removeById(@PathVariable("id") Long id) {
    sysMenuService.removeById(id);
    return Result.build(null, ResultCodeEnum.SUCCESS);
  }

  //菜单修改
  @PutMapping("/update")
  public Result<?> update(@RequestBody SysMenu sysMenu) {
    sysMenuService.update(sysMenu);
    return Result.build(null, ResultCodeEnum.SUCCESS);
  }

  //菜单添加
  @PostMapping("/save")
  public Result<?> save(@RequestBody SysMenu sysMenu) {
    sysMenuService.save(sysMenu);
    return Result.build(null, ResultCodeEnum.SUCCESS);
  }

  //菜单列表
  @GetMapping("/findNodes")
  public Result<List<SysMenu>> findNodes() {
    List<SysMenu> list = sysMenuService.findNodes();
    return Result.build(list, ResultCodeEnum.SUCCESS);
  }
}
