(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-createOrder"],{1781:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-60c4bc50]{background:#f8f8f8;padding-bottom:%?100?%}body.?%PAGE?%[data-v-60c4bc50]{background:#f8f8f8}.address-section[data-v-60c4bc50]{padding:%?30?% 0;background:#fff;position:relative}.address-section .order-content[data-v-60c4bc50]{display:flex;align-items:center}.address-section .icon-shouhuodizhi[data-v-60c4bc50]{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:%?90?%;color:#888;font-size:%?44?%}.address-section .cen[data-v-60c4bc50]{display:flex;flex-direction:column;flex:1;font-size:%?28?%;color:#303133}.address-section .name[data-v-60c4bc50]{font-size:%?34?%;margin-right:%?24?%}.address-section .address[data-v-60c4bc50]{margin-top:%?16?%;margin-right:%?20?%;color:#909399}.address-section .icon-you[data-v-60c4bc50]{font-size:%?32?%;color:#909399;margin-right:%?30?%}.address-section .a-bg[data-v-60c4bc50]{position:absolute;left:0;bottom:0;display:block;width:100%;height:%?5?%}.goods-section[data-v-60c4bc50]{margin-top:%?16?%;background:#fff;padding-bottom:1px}.goods-section .g-header[data-v-60c4bc50]{display:flex;align-items:center;height:%?84?%;padding:0 %?30?%;position:relative}.goods-section .logo[data-v-60c4bc50]{display:block;width:%?50?%;height:%?50?%;border-radius:100px}.goods-section .name[data-v-60c4bc50]{font-size:%?30?%;color:#606266;margin-left:%?24?%}.goods-section .g-item[data-v-60c4bc50]{display:flex;margin:%?20?% %?30?%}.goods-section .g-item uni-image[data-v-60c4bc50]{flex-shrink:0;display:block;width:%?140?%;height:%?140?%;border-radius:%?4?%}.goods-section .g-item .right[data-v-60c4bc50]{flex:1;padding-left:%?24?%;overflow:hidden}.goods-section .g-item .title[data-v-60c4bc50]{font-size:%?30?%;color:#303133}.goods-section .g-item .spec[data-v-60c4bc50]{font-size:%?26?%;color:#909399}.goods-section .g-item .price-box[data-v-60c4bc50]{display:flex;align-items:center;font-size:%?32?%;color:#303133;padding-top:%?10?%}.goods-section .g-item .price-box .price[data-v-60c4bc50]{margin-bottom:%?4?%}.goods-section .g-item .price-box .number[data-v-60c4bc50]{font-size:%?26?%;color:#606266;margin-left:%?20?%}.goods-section .g-item .step-box[data-v-60c4bc50]{position:relative}.yt-list[data-v-60c4bc50]{margin-top:%?16?%;background:#fff}.yt-list-cell[data-v-60c4bc50]{display:flex;align-items:center;padding:%?10?% %?30?% %?10?% %?40?%;line-height:%?70?%;position:relative}.yt-list-cell.cell-hover[data-v-60c4bc50]{background:#fafafa}.yt-list-cell.b-b[data-v-60c4bc50]:after{left:%?30?%}.yt-list-cell .cell-icon[data-v-60c4bc50]{height:%?32?%;width:%?32?%;font-size:%?22?%;color:#fff;text-align:center;line-height:%?32?%;background:#f85e52;border-radius:%?4?%;margin-right:%?12?%}.yt-list-cell .cell-icon.hb[data-v-60c4bc50]{background:#ffaa0e}.yt-list-cell .cell-icon.lpk[data-v-60c4bc50]{background:#3ab54a}.yt-list-cell .cell-more[data-v-60c4bc50]{align-self:center;font-size:%?24?%;color:#909399;margin-left:%?8?%;margin-right:%?-10?%}.yt-list-cell .cell-tit[data-v-60c4bc50]{flex:1;font-size:%?26?%;color:#909399;margin-right:%?10?%}.yt-list-cell .cell-tip[data-v-60c4bc50]{font-size:%?26?%;color:#303133}.yt-list-cell .cell-tip.disabled[data-v-60c4bc50]{color:#909399}.yt-list-cell .cell-tip.active[data-v-60c4bc50]{color:#fa436a}.yt-list-cell .cell-tip.red[data-v-60c4bc50]{color:#fa436a}.yt-list-cell.desc-cell .cell-tit[data-v-60c4bc50]{max-width:%?90?%}.yt-list-cell .desc[data-v-60c4bc50]{flex:1;font-size:%?28?%;color:#303133}\n/* 支付列表 */.pay-list[data-v-60c4bc50]{padding-left:%?40?%;margin-top:%?16?%;background:#fff}.pay-list .pay-item[data-v-60c4bc50]{display:flex;align-items:center;padding-right:%?20?%;line-height:1;height:%?110?%;position:relative}.pay-list .icon-weixinzhifu[data-v-60c4bc50]{width:%?80?%;font-size:%?40?%;color:#6bcc03}.pay-list .icon-alipay[data-v-60c4bc50]{width:%?80?%;font-size:%?40?%;color:#06b4fd}.pay-list .icon-xuanzhong2[data-v-60c4bc50]{display:flex;align-items:center;justify-content:center;width:%?60?%;height:%?60?%;font-size:%?40?%;color:#fa436a}.pay-list .tit[data-v-60c4bc50]{font-size:%?32?%;color:#303133;flex:1}.footer[data-v-60c4bc50]{position:fixed;left:0;bottom:0;z-index:995;display:flex;align-items:center;width:100%;height:%?90?%;justify-content:space-between;font-size:%?30?%;background-color:#fff;z-index:998;color:#606266;box-shadow:0 -1px 5px rgba(0,0,0,.1)}.footer .price-content[data-v-60c4bc50]{padding-left:%?30?%}.footer .price-tip[data-v-60c4bc50]{color:#fa436a;margin-left:%?8?%}.footer .price[data-v-60c4bc50]{font-size:%?36?%;color:#fa436a}.footer .submit[data-v-60c4bc50]{display:flex;align-items:center;justify-content:center;width:%?280?%;height:100%;color:#fff;font-size:%?32?%;background-color:#fa436a}\n/* 优惠券面板 */.mask[data-v-60c4bc50]{display:flex;align-items:flex-end;position:fixed;left:0;top:var(--window-top);bottom:0;width:100%;background:transparent;z-index:9995;transition:.3s}.mask .mask-content[data-v-60c4bc50]{width:100%;min-height:30vh;max-height:70vh;background:#f3f3f3;-webkit-transform:translateY(100%);transform:translateY(100%);transition:.3s;overflow-y:scroll}.mask.none[data-v-60c4bc50]{display:none}.mask.show[data-v-60c4bc50]{background:rgba(0,0,0,.4)}.mask.show .mask-content[data-v-60c4bc50]{-webkit-transform:translateY(0);transform:translateY(0)}\n/* 优惠券列表 */.coupon-item[data-v-60c4bc50]{display:flex;flex-direction:column;margin:%?20?% %?24?%;background:#fff}.coupon-item .con[data-v-60c4bc50]{display:flex;align-items:center;position:relative;height:%?120?%;padding:0 %?30?%}.coupon-item .con[data-v-60c4bc50]:after{position:absolute;left:0;bottom:0;content:"";width:100%;height:0;border-bottom:1px dashed #f3f3f3;-webkit-transform:scaleY(50%);transform:scaleY(50%)}.coupon-item .left[data-v-60c4bc50]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden;height:%?100?%}.coupon-item .title[data-v-60c4bc50]{font-size:%?32?%;color:#303133;margin-bottom:%?10?%}.coupon-item .time[data-v-60c4bc50]{font-size:%?24?%;color:#909399}.coupon-item .right[data-v-60c4bc50]{display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:%?26?%;color:#606266;height:%?100?%}.coupon-item .price[data-v-60c4bc50]{font-size:%?44?%;color:#fa436a}.coupon-item .price[data-v-60c4bc50]:before{content:"￥";font-size:%?34?%}.coupon-item .tips[data-v-60c4bc50]{font-size:%?24?%;color:#909399;line-height:%?60?%;padding-left:%?30?%}.coupon-item .circle[data-v-60c4bc50]{position:absolute;left:%?-6?%;bottom:%?-10?%;z-index:10;width:%?20?%;height:%?20?%;background:#f3f3f3;border-radius:100px}.coupon-item .circle.r[data-v-60c4bc50]{left:auto;right:%?-6?%}',""]),t.exports=e},1888:function(t,e,i){"use strict";i.r(e);var a=i("61e5"),n=i("f4bc");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("1f97");var o=i("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"60c4bc50",null,!1,a["a"],void 0);e["default"]=c.exports},"1da1":function(t,e,i){"use strict";function a(t,e,i,a,n,r,o){try{var c=t[r](o),s=c.value}catch(l){return void i(l)}c.done?e(s):Promise.resolve(s).then(a,n)}i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,i=arguments;return new Promise((function(n,r){var o=t.apply(e,i);function c(t){a(o,n,r,c,s,"next",t)}function s(t){a(o,n,r,c,s,"throw",t)}c(void 0)}))}},i("d3b7")},"1f97":function(t,e,i){"use strict";var a=i("33db"),n=i.n(a);n.a},"33db":function(t,e,i){var a=i("1781");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("5900ff2f",a,!0,{sourceMap:!1,shadowMode:!1})},3827:function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e25e"),i("d3b7"),i("159b");var n=a(i("c7eb")),r=a(i("1da1")),o={data:function(){return{maskState:0,remark:"",payType:2,couponList:[{title:"新用户专享优惠券",price:5},{title:"庆五一发一波优惠券",price:10},{title:"优惠券优惠券优惠券优惠券",price:15}],addressData:{name:"",phone:"",tagName:"",fullAddress:""},userAddressList:[],orderItemList:[],tradeNo:null,totalAmount:0,totalCount:0,skuId:0}},onLoad:function(t){this.skuId=t.skuId,this.loadData(),this.findUserAddress()},methods:{loadData:function(){var t=this;return(0,r.default)((0,n.default)().mark((function e(){var i,a;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i={},!t.skuId){e.next=8;break}return a=parseInt(t.skuId),e.next=5,t.$request({url:"/api/order/orderInfo/auth/buy/"+a,method:"get"});case 5:i=e.sent,e.next=11;break;case 8:return e.next=10,t.$request({url:"/api/order/orderInfo/auth/trade",method:"get",data:{}});case 10:i=e.sent;case 11:t.orderItemList=i.data.orderItemList,t.totalAmount=i.data.totalAmount,t.totalCount=i.data.totalCount;case 14:case"end":return e.stop()}}),e)})))()},findUserAddress:function(){var t=this;return(0,r.default)((0,n.default)().mark((function e(){var i;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$request({url:"/api/user/userAddress/auth/findUserAddressList",method:"get",data:{}});case 2:i=e.sent,t.userAddressList=i.data,t.userAddressList.length>0&&(t.addressData=t.userAddressList[0]),t.userAddressList.forEach((function(e){1==e.isDefault&&(t.addressData=e)}));case 6:case"end":return e.stop()}}),e)})))()},toggleMask:function(t){var e=this,i="show"===t?10:300,a="show"===t?1:0;this.maskState=2,setTimeout((function(){e.maskState=a}),i)},numberChange:function(t){this.number=t.number},changePayType:function(t){this.payType=t},submit:function(){var t=this;return(0,r.default)((0,n.default)().mark((function e(){var i,a;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.addressData.id){e.next=3;break}return t.$api.msg("请添加地址信息"),e.abrupt("return");case 3:return i={orderItemList:t.orderItemList,userAddressId:t.addressData.id,feightFee:0,remark:t.remark},console.log(i),e.next=7,t.$request({url:"/api/order/orderInfo/auth/submitOrder",method:"post",data:i});case 7:a=e.sent,uni.redirectTo({url:"/pages/money/pay?orderId="+a.data});case 9:case"end":return e.stop()}}),e)})))()},stopPrevent:function(){}}};e.default=o},"61e5":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-navigator",{staticClass:"address-section",attrs:{url:"/pages/address/address?source=1"}},[i("v-uni-view",{staticClass:"order-content"},[i("v-uni-text",{staticClass:"yticon icon-shouhuodizhi"}),i("v-uni-view",{staticClass:"cen"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-text",{staticClass:"name"},[t._v(t._s(t.addressData.name))]),i("v-uni-text",{staticClass:"mobile"},[t._v(t._s(t.addressData.phone))])],1),i("v-uni-text",{staticClass:"address"},[t._v("【"+t._s(t.addressData.tagName)+"】 "+t._s(t.addressData.fullAddress))])],1),i("v-uni-text",{staticClass:"yticon icon-you"})],1),i("v-uni-image",{staticClass:"a-bg",attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAAFCAYAAAAaAWmiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Rjk3RjkzMjM2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Rjk3RjkzMjQ2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOTdGOTMyMTY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOTdGOTMyMjY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrEOZlQAAAiuSURBVHjazJp7bFvVHce/1/deXzuJHSdOM+fhpKMllI2SkTZpV6ULYrCHQGwrf41p/LENVk3QTipSWujKoyot1aQN0FYQQxtsMCS2SVuqsfFYHxBKYQNGV9ouZdA8nDipH4mT+HFf+51rO0pN0japrw9HreLe3Pqc3/me3+f3uFdIvfVuDIAPix1C9oceicFRVQWlvRWCkL1omqb1Of9z9rXZY65rhcO6x5ove19oWkX/RAaSMLOEkg+2Zt0wEcvoWOZzYZnXeWEbzmP7XPs11//LnOiDEY9DkGRwGw5a59QUTM2As+1qiD5v0TUvvC9Bc52KpmDSnju4ic7+CIinNVQoElYtcUM8jx2L1bzwPn14DOrHZ0hzEdxOPJtW16FH45CvuBzyZU22aH7Od9LnU/E0xpMqJG6iZ309qeqYNoA1gTJ4ZdF2zY2pJNSTfYCmkb85+GnO1hIbh+DzQVndaiHYTs3ZGJpifE/DyVnzi+X7pWqen8/i+8kPYUSjEORPCd9XtUKs9Fi+KMxjVzE0n9ZNnIgkYXwK+B5LafC4JKyudcMxD2+LqblGfNcY30VxJsfhcOCJ7xr02ATkluXE96DtmrPvPxFLIUH7zY3vOc0Z39O0oGtqy1DlFIuu+Zx8P/Ffa8/hEBey4rh0uuPWS6S6CRUhyGjG0hcfOWex+c9zXSsE5HmFzseP3H294Sl847VBRGJJQHTwy9wJNKAE7otLfXi2K3hRgeB81+bar8IDEPvFMxi6cxebnMx2cjrnDmiIwUAGDTvugX9de9E1L7R9NK1jc+8gnj8dy2rOKY/JRhgV8Cr405ea0HEBOxajeaHtySPvYvD2bUgdP0lmuzkl7oLl6Wn0wX/Dd1D/xG5bNc/f+7NjY9jyzghlM5QxS/ySOGt+Wlt3WwDXBz22a86gHrqjG7Hnekhz5uciN9NVDEBxXYng87vgEoqveZ7y+XsPE99vOTyAs1SkU+bOT3NKIJHUsIb4/rsL8L0YmrMRffQ3GNn8c6L7BOnu4pW10/xR4nsK9T+5FzWda2fXcEXTfLbtYUrc7joSwguno9kilZfsLNmgtaBcxv7rmudN2i9Fc8YRlsvkr6aOvoeBHxDf//MBzVfGke9p8vVhVN2wAQ1P7rFdczYeO34Wm4+Gsr4mcqzWMqQ5IX5rex3W1pUXX/PCRlwkjpEtDyLy9B8sPxcgLWzFpy7rWlTH3eq66AbUj0fh7lyJhn27oFzVck41mTdgdnU5+3fzbczsqqVwQ14aSuCrhwZoo3UEqCLW6biZJZZZom0e0UhlSiY3rvBjd0cdfLJjTrsXYvN8e5TvPEZ2PYbw9l9CrKqAWFNB+2+W/oiTc2l9BFefC/WPdqPyuxts1/zMlIrbqVB7OZSgaSWrC2eUWHUGcLa2MVrLyho3ftvVhNYq1ye6J8XUnI3JFw8idNdOaB+GIS+vsZhf6gMvsP1OJKGFx1H9o1sQeOSBXOcfc9pQDM3Z2PGvEeykxJ0l7AGaTyux4YKVLpOvs0BO/v0UQf17LdUzwdcskuaFHRo1NIrQxq1I9ByEc2kj+ZwDZsk1z/H9I+L7us+j4fHdUFa2FF3zQtv3DyTwrTcGoVFxXOeWKZEoPeNm+E66b7zSj71r6+ERHXN21C5V85nPmo7I3scRvncfxOoyiP7y0vNdyMZ17X9xmGR+43MPwvvtm23XnPH9h68P4u8U2yuJ7wonvmu0pigValf73XhmfRCt1S5bNbd6QK/0ov+2bhjDE8T3aj58p5hujCehjsZQs+lWLNl5N0RvuS2a5z/T8cLOd8K4/72wxdaAXHq+syGT7sOM7xLxvaOe+F5lu+bqYBjDd25H4s+vQ26ugSBL1lsEC+m4C8fQvMhXZXTa/CR8N96MekrapWCdvc1t+rvn32PY3juYrc7cEjjonFuMYQm97QsBPLSq1v7pKJAPbbwHZ3ueoqCyhJIJStqto8/BdMTh8q1A8PcPo+xrXbbP97ehSXydFWpjU0CZzO8xInM+CqSdTV688OVmBBT7O6DRh/dhYOt20nqSdK+f1RIqdRMqRXgrR90Dm+Dfsdn2+QYpeH7/8CBe+mAsq7nIsevKEjivgv1dQdzYUGH7dMlXe3FmwxZMTRyFgiZkW48mF0/XMYWqm75JfH8IUmPA1tlUMnHv+8T3N3J8d3Hkey6I3re6Djvaam1v/urhswjdsQ2jf/kVJRI1xHdPrh1lltzTWUxXai5H07N74P7KettnPDQyjWtf/ohglyJfl7jz/drP+vDrzgYsLZdtP2PRnz6B/u4t9I+U9cYCH81hddoFuBG4bxNq7v9xSfh+G/H9wKkIwF5JkR38fF3VLb73dDXhpsYS8P0Vxve7MZ14E04EkX2SumDj40Lkjz2LS9x1nZVqcK1rh1L/GaiZDB1GYwGPRi9+sA4r63odGEjAoKTZS0mTwUtoS2sTPioc1jd64KJqNZXRP9EtLFrLT5KQOd6H1JtvQ/SUQ1CUC1Z/tjp5MgXn51bAfc1VpAUVb6pqi+bsqRlrOB0ITSI0kUa1IvF7JcribPbxZnt9BYIeBZm0ap1BO2yHLMOIxjH111chmDocXg9XzZFR4fD74e5cA9GtQEulbLGbfaNMvv4+BfG3hiet9wxlUeDGdDPn68uqXVgVKKezbiBN/HHYoTnrqlORkDx0BHr/ABzVVbknbZysZ3wnRVyda6HU1UIjvpt28p2C+T+GEtYeeEh3jqcdKjl2BcWY65q9UAQb+c6+k3iePnaS+P5Pq8spOJ38fJ09RVI1OFuWo6xtJXSD+J6xh++OHN8PEt8HxtNY4pbAczC+m2Rnh8V3J9Q0Fa4LeG97YQdehj4aoSL9NZiZNMTKStp6g5/x5NsW37vWQaS1WXzPHvjihzYS/lgshbeJ75WySHm7wNXXk8SbK/xutOX4ntHtYRxE0eJn6uARaGf6ie++7GPNxVkf/78AAwCn1+RYqusbZQAAAABJRU5ErkJggg=="}})],1),i("v-uni-view",{staticClass:"goods-section"},[i("v-uni-view",{staticClass:"g-header b-b"},[i("v-uni-image",{staticClass:"logo",attrs:{src:"http://duoduo.qibukj.cn/./Upload/Images/20190321/201903211727515.png"}}),i("v-uni-text",{staticClass:"name"},[t._v("尚品汇店铺")])],1),t._l(t.orderItemList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"g-item"},[i("v-uni-image",{attrs:{src:e.thumbImg}}),i("v-uni-view",{staticClass:"right"},[i("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(e.skuName))]),i("v-uni-view",{staticClass:"price-box"},[i("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(e.orderPrice))]),i("v-uni-text",{staticClass:"number"},[t._v("x "+t._s(e.skuNum))])],1)],1)],1)}))],2),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-view",{staticClass:"cell-icon"},[t._v("券")]),i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("优惠券")]),i("v-uni-text",{staticClass:"cell-tip active"},[t._v("选择优惠券")]),i("v-uni-text",{staticClass:"cell-more wanjia wanjia-gengduo-d"})],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-view",{staticClass:"cell-icon hb"},[t._v("减")]),i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("商家促销")]),i("v-uni-text",{staticClass:"cell-tip disabled"},[t._v("暂无可用优惠")])],1)],1),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("商品金额")]),i("v-uni-text",{staticClass:"cell-tip"},[t._v("￥"+t._s(t.totalAmount))])],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("优惠金额")]),i("v-uni-text",{staticClass:"cell-tip red"},[t._v("-￥0")])],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("运费")]),i("v-uni-text",{staticClass:"cell-tip"},[t._v("免运费")])],1),i("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("备注")]),i("v-uni-input",{staticClass:"desc",attrs:{type:"text",placeholder:"请填写备注信息","placeholder-class":"placeholder"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)],1),i("v-uni-view",{staticClass:"footer"},[i("v-uni-view",{staticClass:"price-content"},[i("v-uni-text",[t._v("实付款")]),i("v-uni-text",{staticClass:"price-tip"},[t._v("￥")]),i("v-uni-text",{staticClass:"price"},[t._v(t._s(t.totalAmount))])],1),i("v-uni-text",{staticClass:"submit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交订单")])],1),i("v-uni-view",{staticClass:"mask",class:0===t.maskState?"none":1===t.maskState?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleMask.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"mask-content",on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},t._l(t.couponList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"coupon-item"},[i("v-uni-view",{staticClass:"con"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-text",{staticClass:"title"},[t._v(t._s(e.title))]),i("v-uni-text",{staticClass:"time"},[t._v("有效期至2019-06-30")])],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-text",{staticClass:"price"},[t._v(t._s(e.price))]),i("v-uni-text",[t._v("满30可用")])],1),i("v-uni-view",{staticClass:"circle l"}),i("v-uni-view",{staticClass:"circle r"})],1),i("v-uni-text",{staticClass:"tips"},[t._v("限新用户使用")])],1)})),1)],1)],1)},n=[]},b636:function(t,e,i){var a=i("e065");a("asyncIterator")},c7eb:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
e.default=function(){return t};var t={},i=Object.prototype,n=i.hasOwnProperty,r=Object.defineProperty||function(t,e,i){t[e]=i.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function d(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(O){d=function(t,e,i){return t[e]=i}}function u(t,e,i,a){var n=e&&e.prototype instanceof h?e:h,o=Object.create(n.prototype),c=new A(a||[]);return r(o,"_invoke",{value:C(t,i,c)}),o}function f(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(O){return{type:"throw",arg:O}}}t.wrap=u;var v={};function h(){}function p(){}function b(){}var g={};d(g,c,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(G([])));y&&y!==i&&n.call(y,c)&&(g=y);var x=b.prototype=h.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){var i;r(this,"_invoke",{value:function(r,o){function c(){return new e((function(i,c){(function i(r,o,c,s){var l=f(t[r],t,o);if("throw"!==l.type){var d=l.arg,u=d.value;return u&&"object"==(0,a.default)(u)&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){i("next",t,c,s)}),(function(t){i("throw",t,c,s)})):e.resolve(u).then((function(t){d.value=t,c(d)}),(function(t){return i("throw",t,c,s)}))}s(l.arg)})(r,o,i,c)}))}return i=i?i.then(c,c):c()}})}function C(t,e,i){var a="suspendedStart";return function(n,r){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw r;return E()}for(i.method=n,i.arg=r;;){var o=i.delegate;if(o){var c=L(o,i);if(c){if(c===v)continue;return c}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if("suspendedStart"===a)throw a="completed",i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);a="executing";var s=f(t,e,i);if("normal"===s.type){if(a=i.done?"completed":"suspendedYield",s.arg===v)continue;return{value:s.arg,done:i.done}}"throw"===s.type&&(a="completed",i.method="throw",i.arg=s.arg)}}}function L(t,e){var i=e.method,a=t.iterator[i];if(void 0===a)return e.delegate=null,"throw"===i&&t.iterator["return"]&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==i&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+i+"' method")),v;var n=f(a,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,v;var r=n.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(z,this),this.reset(!0)}function G(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function e(){for(;++i<t.length;)if(n.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=b,r(x,"constructor",{value:b,configurable:!0}),r(b,"constructor",{value:p,configurable:!0}),p.displayName=d(b,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,d(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(k.prototype),d(k.prototype,s,(function(){return this})),t.AsyncIterator=k,t.async=function(e,i,a,n,r){void 0===r&&(r=Promise);var o=new k(u(e,i,a,n),r);return t.isGeneratorFunction(i)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},w(x),d(x,l,"Generator"),d(x,c,(function(){return this})),d(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),i=[];for(var a in e)i.push(a);return i.reverse(),function t(){for(;i.length;){var a=i.pop();if(a in e)return t.value=a,t.done=!1,t}return t.done=!0,t}},t.values=G,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,a){return o.type="throw",o.arg=t,e.next=i,a&&(e.method="next",e.arg=void 0),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a],o=r.completion;if("root"===r.tryLoc)return i("end");if(r.tryLoc<=this.prev){var c=n.call(r,"catchLoc"),s=n.call(r,"finallyLoc");if(c&&s){if(this.prev<r.catchLoc)return i(r.catchLoc,!0);if(this.prev<r.finallyLoc)return i(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return i(r.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return i(r.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var r=a;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=t,o.arg=e,r?(this.method="next",this.next=r.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),j(i),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var a=i.completion;if("throw"===a.type){var n=a.arg;j(i)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:G(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=void 0),v}},t},i("7a82"),i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("b636"),i("944a"),i("0c47"),i("23dc"),i("3410"),i("d9e2"),i("d401"),i("14d9"),i("159b"),i("131a"),i("26e9"),i("fb6a");var a=function(t){return t&&t.__esModule?t:{default:t}}(i("53ca"))},f4bc:function(t,e,i){"use strict";i.r(e);var a=i("3827"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a}}]);