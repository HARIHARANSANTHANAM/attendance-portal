import HomePage from './pages/HomePage.vue';
import LoginComponent from './components/LoginComponent.vue';
import VueRouter from 'vue-router';

const routerconfig=new VueRouter({
    mode:'history',
    routes:[ 
        {
            path:'/home',
            name:'HomePage',
            component:HomePage,
        },
        {
            path:'/',
            name:'LoginComponent',
            component:LoginComponent
        },
   ]
})




routerconfig.beforeEach((to, from, next) => {
    // check if user is logged in
    const isLoggedIn = localStorage.getItem('employee');
  
    if (to.path === '/' && isLoggedIn) {
      next('/home');
    } 
    else if(to.path === '/home' && !isLoggedIn){
        next({ path: '/' });    
    }
    else {
      next();

    }
  });

export default routerconfig;