import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Question2 from './views/Question2.vue'
import Question3 from './views/Question3.vue'
import Result from './views/Result.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

      {
          path: '/',
          name: 'index',
          component: Index
      },
      {
          path: '/question2',
          name: 'question2',
          component: Question2
      },
      {
          path: '/question3',
          name: 'question3',
          component: Question3
      },
      {
          path: '/result',
          name: 'result',
          component: Result
      },
  ]
})
