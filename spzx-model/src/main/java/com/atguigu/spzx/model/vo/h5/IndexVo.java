package com.atguigu.spzx.model.vo.h5;

import com.atguigu.spzx.model.entity.product.Category;
import com.atguigu.spzx.model.entity.product.ProductSku;
import java.util.List;
import lombok.Data;

@Data
public class IndexVo {

  private List<Category> categoryList;       // 一级分类的类别数据
  private List<ProductSku> productSkuList;   // 畅销商品列表数据

}
