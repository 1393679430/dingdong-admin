在原始项目（http://dingdong-admin.nodebook.top/）  基础上优化


<!--
 * @Author: 崔国强
 * @Date: 2019-12-02 17:25:40
 * @LastEditTime: 2019-12-02 17:28:42
 * @LastEditors: Please set LastEditors
 * @Description: 说明文档
 * @FilePath: \umi-admin\README.md
 -->
# 商家管理系统
预览地址: http://dingdong-admin.nodebook.top/


公共接口配置:  请访问 src/models/UserRedux.js 配置公共接口

# 前台展示(移动端)
预览地址: http://dingdong.nodebook.top/

接口源码: https://github.com/cgq001/dingdong-node

接口文档: http://www.docway.net/project/1RegDIiCClF/1RegN4RuBJA


## 初始化
```
cnpm install
```

### 运行
```
yarn strat
```

### 打包
```
yarn run build
```
### CSS隐藏滚动条但还可以滚动
```css
.MenusBoxList{
    width: 100%;
    height: calc(100% - 64px);
    overflow-x: hidden;
    overflow-y: auto;
    -ms-overflow-style: none; 
    overflow: '-moz-scrollbars-none';
    scrollbar-width: none;  /*  火狐   */
}
.MenusBoxList::-webkit-scrollbar {
    display: none;  /*  Chrome  */
    width: 0 !important ; /*  Chrome  */
  }
```
