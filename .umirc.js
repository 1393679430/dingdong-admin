/* @Author: 崔国强
 * @Date: 2019-12-02 09:09:09
 * @LastEditTime: 2019-12-14 16:35:24
 * @LastEditors: Please set LastEditors
 * @Description: 路由
 * @FilePath: \umi-admin\.umirc.js
 */

// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',  //重定向到主页
      redirect: '/index/',
    },
    {
      path: '/index',  //主页
      component: '../layouts/index',
      // Routes: ['./routes/Login.js'] , //这里是相对根目录(非pages)的，文件名后缀不能少
      routes: [
        // { path: '/index/', component: '../pages/index' },
        { path: '/index/', component: '../pages/Home/HomeIndex/HomeIndex' },  //首页
        { path: '/index/data/index', component: '../pages/Datas/DataIndex/DataIndex', srcPath: '12456' }, //数据分析
        { path: '/index/product/shoping/index', component: '../pages/Product/Shoping/ShopIndex/ShopIndex' }, //商品管理
        { path: '/index/product/shoping/add', component: '../pages/Product/Shoping/AddShop/AddShop' }, //添加商品
        { path: '/index/product/class/index', component: '../pages/Product/Class/ClassIndex/ClassIndex' }, //分类管理
        { path: '/index/product/class/add', component: '../pages/Product/Class/AddClass/AddClass' }, //添加分类
        { path: '/index/product/comment/index', component: '../pages/Product/Comment/CommentIndex/CommentIndex' }, //评论管理
        { path: '/index/set/personalcenter/index', component: '../pages/Set/PersonalCenter/PersonalCenter' }, //个人中心
        { path: '/index/set/PersonalSettings/index', component: '../pages/Set/PersonalSettings/PersonalSettings' }, //个人设置
        { path: '/index/order/refund/index', component: '../pages/Order/Refund/RefundIndex/RefundIndex' },  //待退款列表
        { path: '/index/order/refund/details', component: '../pages/Order/Refund/RefundDetails/RefundDetails' },   //退款详情
        { path: '/index/order/shipped/index', component: '../pages/Order/Shipped/ShippedIndex/ShippedIndex' },  //待发货详情
        { path: '/index/order/shipped/deliver', component: '../pages/Order/Shipped/ShippedDeliver/ShippedDeliver' },  //待发货详情
        { path: '/index/control/carousel/index', component: '../pages/Control/Carousel/CarouselIndex/CarouselIndex' },  //布局控制 首页轮播 轮播列表
        { path: '/index/control/carousel/add', component: '../pages/Control/Carousel/CarouselAdd/CarouselAdd' },  //布局控制 首页轮播 添加轮播图
        { path: '/index/control/keyword/index', component: '../pages/Control/Keyword/KeywordIndex/KeywordIndex' },   //布局控制 搜索发现关键词 关键词列表
        { path: '/index/marketing/buy/index', component: '../pages/Marketing/Buy/BuyIndex/BuyIndex' },   //营销控制 首页疯狂抢购 疯狂抢购列表
        { path: '/index/marketing/buy/add', component: '../pages/Marketing/Buy/BuyAdd/BuyAdd' },   //营销控制 首页疯狂抢购 所有商品列表

      ],
    },
    {
      path: '/login',  //登录页
      component: './Login/Login',
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: '商城管理系统',
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  'proxy': {
    '/api': {
      'target': 'http://dingdong-api.nodebook.top/admin/',  //http://192.168.188.200:5005/admin/
      'changeOrigin': true,
      'pathRewrite': { '^/api': '' },
    },
  },
};
