import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Video from '@/components/Video'
import page from '@/components/page'

Vue.use(Router)

export default new Router({
    mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
      {
          path: '/video/:id?',
          name: 'Video',
          component: Video
      },
      {
          path: '/page/:id',
          name: 'page',
          component: page
      },

  ]
})
