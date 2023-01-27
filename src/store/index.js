import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
import authStore from './authStore';



const store=new Vuex.Store({
    modules:{
        authStore,
    }
});

export default store;