package com.atguigu.spzx.admin.repository;

import com.atguigu.spzx.model.entity.system.SysUser;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IndexRepository extends JpaRepository<SysUser, Long> {

  Optional<SysUser> findByUserName(String userName);
}
