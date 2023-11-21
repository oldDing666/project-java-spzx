package com.atguigu.spzx.admin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;

//@EnableLogAspect
@SpringBootApplication
//@ComponentScan(basePackages = {"com.atguigu.spzx.admin"})
//@EnableConfigurationProperties(value = {UserProperties.class, MinioProperties.class})
//@EnableScheduling
public class AdminApplication {
    public static void main(String[] args) {
        SpringApplication.run(AdminApplication.class, args);
    }
}
