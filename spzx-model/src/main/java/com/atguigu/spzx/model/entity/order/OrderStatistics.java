package com.atguigu.spzx.model.entity.order;

import com.atguigu.spzx.model.entity.base.BaseEntity;
import java.math.BigDecimal;
import java.util.Date;
import lombok.Data;

@Data
public class OrderStatistics extends BaseEntity {

  private Date orderDate;
  private BigDecimal totalAmount;
  private Integer totalNum;

}
