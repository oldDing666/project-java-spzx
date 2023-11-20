package com.atguigu.spzx.admin.service;

import com.atguigu.spzx.model.vo.system.SysMenuVo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MenuService {

    List<SysMenuVo> findSysMenusByUserId();
}
