package com.atguigu.spzx.admin.repository;

import com.atguigu.spzx.model.entity.system.SysMenu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenuRepository extends JpaRepository<SysMenu, Long> {

    @Query(value = """
            SELECT DISTINCT m.*
                    FROM sys_menu m
                             INNER JOIN sys_role_menu srm ON m.id=srm.menu_id
                             INNER JOIN sys_user_role sur ON srm.role_id=sur.role_id
                    WHERE sur.user_id=:userId AND m.is_deleted=0
            """, nativeQuery = true)
    List<SysMenu> findSysMenusByUserId(@Param("userId") Long userId);
}
