import Vue from 'vue'
import Router from  'vue-router';
Vue.use(Router);
import Nprogress form 'nprogress';

Router.beforeEach ((to,from,next)=>{
       Nprogress.start()
})
Router.afterEach((to,from,next))=>{
       Nprogress.done();
}