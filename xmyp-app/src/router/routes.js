import XmypFooter from '@/components/XmypFooter'
import XmypHeader from '@/components/XmypHeader'

const Home = () => import('@/views/Home')
const Cart = () => import('@/views/Cart')
const Mall = () => import('@/views/Mall')
const Mine = () => import('@/views/Mine')
const CateList = () => import('@/views/CateList')
const Taste = () => import('@/views/Taste')
const List = () => import('@/views/List')
const Detail = () => import('@/views/Detail')
const Register = () => import('@/views/Register')
const Login = () => import('@/views/Login')
const Collection = () => import('@/views/Collection')
const Payment = () => import('@/views/Payment')
const MineAsset = () => import('@/views/MineAsset')
const MineGroup = () => import('@/views/MineGroup')
const MineCollect = () => import('@/views/MineCollect')
const MineAddr = () => import('@/views/MineAddr')
const MineCard = () => import('@/views/MineCard')
const MineRule = () => import('@/views/MineRule')
const MineHelps = () => import('@/views/MineHelps')

export default [
  {
    path: '/',
    redirect: '/home',
    meta: {}
  },
  {
    path: '/home',
    name: 'home',
    components: {
      default: Home,
      footer: XmypFooter
    },
    meta: {
      isTabbr: true,
      title: '首页',
      icon: '&#xe603;'
    }
  },
  {
    path: '/mall',
    name: 'mall',
    components: {
      default: Mall,
      footer: XmypFooter
    },
    meta: {
      isTabbr: true,
      title: '分类',
      icon: '&#xe602;'
    },
    children: [
      {
        path: ':cateId',
        name: 'catelist',
        component: CateList
      }
    ]
  },
  {
    path: '/taste',
    name: 'taste',
    components: {
      default: Taste,
      footer: XmypFooter,
      header: XmypHeader
    },
    meta: {
      isTabbr: true,
      title: '推荐',
      icon: '&#xe63f;'
    }
  },
  {
    path: '/cart',
    name: 'cart',
    components: {
      default: Cart,
      header: XmypHeader
    },
    meta: {
      isTabbr: true,
      title: '购物车',
      icon: '&#xe600;',
      isAuthRequired: true
    }
  },
  {
    path: '/mine',
    name: 'mine',
    components: {
      default: Mine,
      footer: XmypFooter
    },
    meta: {
      isTabbr: true,
      title: '我的',
      icon: '&#xe601;'
    }
  },
  {
    path: '/detail',
    name: 'detail',
    components: {
      default: Detail,
      header: XmypHeader
    },
    meta: {
      title: '详情'
    }
  },
  {
    path: '/list',
    name: 'list',
    components: {
      default: List,
      header: XmypHeader
    },
    meta: {
      title: '商品列表'
    }
  },
  {
    path: '/login',
    name: 'login',
    components: {
      default: Login,
      header: XmypHeader
    },
    meta: {
      isTabbar: false,
      isBackShow: true,
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      isTabbar: false,
      isBackShow: true,
      title: '注册'
    }
  },
  {
    path: '/collection',
    name: 'collection',
    component: Collection,
    meta: {
      isTabbar: false,
      isBackShow: true,
      title: '收藏'
    }
  },
  {
    path: '/payment',
    name: 'payment',
    components: {
      default: Payment,
      header: XmypHeader
    },
    meta: {
      isTabbar: false,
      isBackShow: true,
      title: '支付'
    }
  },
  {
    path: '/mineasset',
    name: 'mineasset',
    component: MineAsset,
    meta: {
      title: '我的资产'
    }
  },
  {
    path: '/mineaddr',
    name: 'mineaddr',
    component: MineAddr,
    meta: {
      title: '地址管理'
    }
  },
  {
    path: '/minecard',
    name: 'minecard',
    components: {
      default: MineCard,
      header: XmypHeader
    },
    meta: {
      title: '资质证照'
    }
  },
  {
    path: '/minecollect',
    name: 'minecollect',
    component: MineCollect,
    meta: {
      title: '我的收藏'
    }
  },
  {
    path: '/minegroup',
    name: 'minegroup',
    components: {
      default: MineGroup,
      header: XmypHeader
    },
    meta: {
      title: '拼团'
    }
  },
  {
    path: '/minerule',
    name: 'minerule',
    component: {
      default: MineRule,
      header: XmypHeader
    },
    meta: {
      title: '协议规则'
    }
  },
  {
    path: '/minehelps',
    name: 'minehelps',
    components: {
      default: MineHelps,
      header: XmypHeader
    },
    meta: {
      title: '帮助与反馈'
    }
  }
]
