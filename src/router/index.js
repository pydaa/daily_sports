import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Comment from '@/components/Comment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Comment',
      component: Comment
    }
  ]
})
