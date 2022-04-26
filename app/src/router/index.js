import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {
            path:'/questionnaire',
            component:()=>import('../pages/questionnaire')
        },
        {
            path:'/dietResult',
            component:()=>import('../pages/dietResult'),
            beforeEnter: (to, from, next) => {
                if(from.path=='/diet'){
                    next()
                }else{
                    //停留在当前页
                    next(false);
                }
            }
        },
        {
            path:'/diet',
            component:()=>import('../pages/diet')
        },
        {
            path: '/',
            component: ()=>import('../pages/main')
          },
        {
            path:'/result',
            component:()=>import('../pages/result'),
            beforeEnter: (to, from, next) => {
                if(from.path=='/questionnaire'){
                    next()
                }else{
                    //停留在当前页
                    next(false);
                }
            }
        },

    ]
})