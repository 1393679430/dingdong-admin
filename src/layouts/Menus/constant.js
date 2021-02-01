export const MENU = [
  {
    subMenu: false,
    menus: [
      {
        key: '/index/',
        to: '/index/',
        icon: 'home',
        name: '首页',
      },
    ],
  }, {
    subMenu: false,
    menus: [
      {
        key: '/index/data/index',
        to: '/index/data/index',
        icon: 'heat-map',
        name: '数据分析',
      },
    ],
  }, {
    subMenu: {
      key: 'sub1',
      title: {
        icon: 'appstore',
        name: '产品管理',
      },
    },
    menus: [
      {
        key: '/index/product/shoping/index',
        to: '/index/product/shoping/index',
        icon: null,
        name: '商品管理',
      }, {
        key: '/index/product/class/index',
        to: '/index/product/class/index',
        icon: null,
        name: '分类管理',
      }, {
        key: '/index/product/comment/index',
        to: '/index/product/comment/index',
        icon: null,
        name: '评论管理',
      },
    ],
  }, {
    subMenu: {
      key: 'sub2',
      title: {
        icon: 'layout',
        name: '布局控制',
      },
    },
    menus: [
      {
        key: '/index/control/carousel/index',
        to: '/index/control/carousel/index',
        icon: null,
        name: '首页轮播',
      }, {
        key: '/index/control/keyword/index',
        to: '/index/control/keyword/index',
        icon: null,
        name: '搜索发现关键词',
      },
    ],
  }, {
    subMenu: {
      key: 'sub3',
      title: {
        icon: 'tags',
        name: '营销管控',
      },
    },
    menus: [
      {
        key: '/index/marketing/buy/index',
        to: '/index/marketing/buy/index',
        icon: null,
        name: '首页疯狂抢购',
      },
    ],
  }, {
    subMenu: {
      key: 'sub4',
      title: {
        icon: 'solution',
        name: '订单管理',
      },
    },
    menus: [
      {
        key: '订单列表',
        to: '订单列表',
        icon: null,
        name: '订单列表',
      }, {
        key: '/index/order/shipped/index',
        to: '/index/order/shipped/index',
        icon: null,
        name: '待发货',
      }, {
        key: '/index/order/refund/index',
        to: '/index/order/refund/index',
        icon: null,
        name: '待退款',
      },
    ],
  }, {
    subMenu: {
      key: 'sub5',
      title: {
        icon: 'shake',
        name: '卡券管理',
      },
    },
    menus: [
      {
        key: '优惠券',
        to: '优惠券',
        icon: null,
        name: '优惠券',
      }, {
        key: '限时券',
        to: '限时券',
        icon: null,
        name: '限时券',
      }, {
        key: '新人券',
        to: '新人券',
        icon: null,
        name: '新人券',
      }, {
        key: '兑换码',
        to: '兑换码',
        icon: null,
        name: '兑换码',
      },
    ],
  }, {
    subMenu: {
      key: 'sub6',
      title: {
        icon: 'bars',
        name: '绿卡活动',
      },
    },
    menus: [],
  }, {
    subMenu: {
      key: 'sub7',
      title: {
        icon: 'usergroup-delete',
        name: '用户管理',
      },
    },
    menus: [],
  }, {
    subMenu: {
      key: 'sub8',
      title: {
        icon: 'setting',
        name: '设置',
      },
    },
    menus: [
      {
        key: '/index/set/personalcenter/index',
        to: '/index/set/personalcenter/index',
        icon: null,
        name: '个人中心',
      }, {
        key: '/index/set/PersonalSettings/index',
        to: '/index/set/PersonalSettings/index',
        icon: null,
        name: '个人设置',
      }, {
        key: '新人券',
        to: '新人券',
        icon: null,
        name: '新人券',
      }, {
        key: '兑换码',
        to: '兑换码',
        icon: null,
        name: '兑换码',
      },
    ],
  }, {
    subMenu: {
      key: 'sub9',
      title: {
        icon: 'desktop',
        name: '控制台',
      },
    },
    menus: [],
  },
];
