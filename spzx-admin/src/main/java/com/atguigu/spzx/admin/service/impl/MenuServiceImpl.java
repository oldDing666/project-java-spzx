package com.atguigu.spzx.admin.service.impl;


import com.atguigu.spzx.admin.repository.MenuRepository;
import com.atguigu.spzx.admin.service.MenuService;
import com.atguigu.spzx.admin.util.MenuHelper;
import com.atguigu.spzx.model.entity.system.SysMenu;
import com.atguigu.spzx.model.vo.system.SysMenuVo;
import com.atguigu.spzx.utils.AuthContextUtil;
import lombok.RequiredArgsConstructor;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MenuServiceImpl implements MenuService {
    private final MenuRepository menuRepository;

    @Override
    public List<SysMenuVo> findSysMenusByUserId() {
        Long userId = AuthContextUtil.getAdminUser().getId();
        List<SysMenu> menus = menuRepository.findSysMenusByUserId(userId);
        menus = MenuHelper.buildTree(menus);
        return buildMenus(menus);
    }

    private List<SysMenuVo> buildMenus(List<SysMenu> menus) {
        List<SysMenuVo> sysMenuVoList = new LinkedList<>();
        for (SysMenu sysMenu : menus) {
            SysMenuVo sysMenuVo = new SysMenuVo();
            sysMenuVo.setTitle(sysMenu.getTitle());
            sysMenuVo.setName(sysMenu.getComponent());
            List<SysMenu> children = sysMenu.getChildren();
            if (CollectionUtils.isNotEmpty(children)) {
                sysMenuVo.setChildren(buildMenus(children));
            }
            sysMenuVoList.add(sysMenuVo);
        }
        return sysMenuVoList;
    }
}
