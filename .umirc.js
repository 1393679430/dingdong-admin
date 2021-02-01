export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      redirect: '/index/',
    },
    {
      path: '/index',  //主页
      component: '../layouts/index',
      routes: [
        //首页
        {
          path: '/index/',
          component: '../pages/Home/HomeIndex/HomeIndex',
        },
        //数据分析
        {
          path: '/index/data/index',
          component: '../pages/Datas/DataIndex/DataIndex',
          srcPath: '12456',
        },
        //商品管理
        {
          path: '/index/product/shoping/index',
          component: '../pages/Product/Shoping/ShopIndex/ShopIndex',
        },
        //添加商品
        {
          path: '/index/product/shoping/add',
          component: '../pages/Product/Shoping/AddShop/AddShop',
        },
        //分类管理
        {
          path: '/index/product/class/index',
          component: '../pages/Product/Class/ClassIndex/ClassIndex',
        },
        //添加分类
        {
          path: '/index/product/class/add',
          component: '../pages/Product/Class/AddClass/AddClass',
        },
        //评论管理
        {
          path: '/index/product/comment/index',
          component: '../pages/Product/Comment/CommentIndex/CommentIndex',
        },
        //个人中心
        {
          path: '/index/set/personalcenter/index',
          component: '../pages/Set/PersonalCenter/PersonalCenter',
        },
        //个人设置
        {
          path: '/index/set/PersonalSettings/index',
          component: '../pages/Set/PersonalSettings/PersonalSettings',
        },
        //待退款列表
        {
          path: '/index/order/refund/index',
          component: '../pages/Order/Refund/RefundIndex/RefundIndex',
        },
        //退款详情
        {
          path: '/index/order/refund/details',
          component: '../pages/Order/Refund/RefundDetails/RefundDetails',
        },
        //待发货详情
        {
          path: '/index/order/shipped/index',
          component: '../pages/Order/Shipped/ShippedIndex/ShippedIndex',
        },
        //待发货详情
        {
          path: '/index/order/shipped/deliver',
          component: '../pages/Order/Shipped/ShippedDeliver/ShippedDeliver',
        },
        //布局控制 首页轮播 轮播列表
        {
          path: '/index/control/carousel/index',
          component: '../pages/Control/Carousel/CarouselIndex/CarouselIndex',
        },
        //布局控制 首页轮播 添加轮播图
        {
          path: '/index/control/carousel/add',
          component: '../pages/Control/Carousel/CarouselAdd/CarouselAdd',
        },
        //布局控制 搜索发现关键词 关键词列表
        {
          path: '/index/control/keyword/index',
          component: '../pages/Control/Keyword/KeywordIndex/KeywordIndex',
        },
        //营销控制 首页疯狂抢购 疯狂抢购列表
        {
          path: '/index/marketing/buy/index',
          component: '../pages/Marketing/Buy/BuyIndex/BuyIndex',
        },
        //营销控制 首页疯狂抢购 所有商品列表
        {
          path: '/index/marketing/buy/add',
          component: '../pages/Marketing/Buy/BuyAdd/BuyAdd',
        },
      ],
    },
    {
      path: '/login',  //登录页
      component: './Login/Login',
    },
  ],
  plugins: [
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
      'target': 'http://dingdong-api.nodebook.top/admin/',
      'changeOrigin': true,
      'pathRewrite': { '^/api': '' },
    },
  },
};
