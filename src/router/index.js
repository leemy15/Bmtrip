import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from 'pages/layout'

import index from 'pages/index/index.vue'
        import indexMain from 'pages/index/index/indexMain.vue'
        import happyChildren from 'pages/index/happyChildren/happyChildrenIndex.vue'
        import superTourGroup from 'pages/index/superTourGroup/superTourGroup.vue'
        import Japan from 'pages/index/Japan/Japan.vue'
        import dreamSiam from 'pages/index/dreamSiam/dreamSiam.vue'
        import europe from 'pages/index/europe/europe.vue'
        import africa from 'pages/index/africa/africa.vue'
        import america from 'pages/index/america/america.vue'
        import china from 'pages/index/china/china.vue'

import destination from 'pages/destination/destination.vue'

import customized from 'pages/customized/customized.vue'

import find from 'pages/find/find.vue'
        import all from 'pages/find/all.vue'
        import knowledge from 'pages/find/knowledge.vue'
        import world from 'pages/find/world.vue'
        import said from 'pages/find/said.vue'
        import welfare from 'pages/find/welfare.vue'

import article from 'pages/find/article.vue'

import my from 'pages/my/my.vue'
import myCollect from 'pages/my/myCollect.vue'


import search from 'pages/search/search.vue'
        import searchDetail from 'pages/search/searchdetail.vue'
        
import cityList from 'pages/cityList.vue'

import BMdetail from 'pages/detail/BMdetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout',
  },
  {
    path: '/CityJing/:keyworlds',
    name: 'CityKuang',
    component: cityList,
  },
  {
    path: '/search',
    name: 'search',
    component: search,
    children: [
      {
        name: 'searchDetail',
        path: ':keyworlds',
        component: searchDetail,
      }
    ]
  },
  {
    path: '/layout',
    name: 'layout',
    component: layout,
    redirect: '/layout/index',
    children:[
      {
        path: 'index',
        name: 'index',
        component: index,
        redirect: '/layout/index/indexMain',
        children:[
          {
            path: 'indexMain',
            name: '首页',
            component: indexMain,

          },
          {
            path: 'happyChildren',
            name: '欢淘亲子',
            component: happyChildren,
          },
          {
            path: 'superTourGroup',
            name: '超级旅行团',
            component: superTourGroup,
          },
          {
            path: 'Japan',
            name: '和风东瀛',
            component: Japan,
          },
          {
            path: 'dreamSiam',
            name: '梦幻暹罗',
            component: dreamSiam,
          },
          {
            path: 'europe',
            name: '诗画欧洲',
            component: europe,
          },
          {
            path: 'africa',
            name: '小众中东非',
            component: africa,
          },
          {
            path: 'america',
            name: '美洲澳新',
            component: america,
          },
          {
            path: 'china',
            name: '祖国最美',
            component: china,
          },
        ]
      },
      {
        path: 'destination',
        name: 'destination',
        component: destination,
      },
      {
        path: 'customized',
        name: 'customized',
        component: customized,
      },
      {
        path: 'find',
        name: 'find',
        component: find,
        redirect: '/layout/find/all',
        children:[
          {
            path: 'all',
            name: '全部',
            component: all,
          },
          {
            path: 'knowledge',
            name: '涨知识',
            component: knowledge,
          },
          {
            path: 'world',
            name: '看世界',
            component: world,
          },
          {
            path: 'said',
            name: '达人说',
            component: said,
          },
          {
            path: 'welfare',
            name: '有福利',
            component: welfare,
          },
        ]
      },
      {
        path: 'my',
        name: 'my',
        component: my,
      }
    ]
  },
  {
    path: '/BMdetail/:id',
    name: 'BMdetail',
    component: BMdetail,
  },{
    path:'/myCollect',
    name: 'myCollect',
    component: myCollect,
  },
  ,{
    path:'/article/:id',
    name: 'article',
    component: article,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
