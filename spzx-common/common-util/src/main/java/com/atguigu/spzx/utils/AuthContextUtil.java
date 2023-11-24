package com.atguigu.spzx.utils;

import com.atguigu.spzx.model.entity.system.SysUser;
import com.atguigu.spzx.model.entity.user.UserInfo;

public class AuthContextUtil {

  private static final ThreadLocal<UserInfo> customerUserThreadLocal = new ThreadLocal<>();


  // 定义存储数据的静态方法
  public static void setCustomerUser(UserInfo userInfo) {
    customerUserThreadLocal.set(userInfo);
  }

  // 定义获取数据的方法
  public static UserInfo getCustomerUser() {
    return customerUserThreadLocal.get();
  }

  // 删除数据的方法
  public static void removeCustomerUser() {
    customerUserThreadLocal.remove();
  }


  //创建threadLocal对象
  private static final ThreadLocal<SysUser> adminUserThreadLocal = new ThreadLocal<>();

  //添加数据
  public static void setAdminUser(SysUser sysUser) {
    adminUserThreadLocal.set(sysUser);
  }

  //获取数据
  public static SysUser getAdminUser() {
    return adminUserThreadLocal.get();
  }

  //删除数据
  public static void removeAdminUser() {
    adminUserThreadLocal.remove();
  }
}
