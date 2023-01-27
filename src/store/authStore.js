const mockapi=true;
import employees from './mockauth';
const authStore={
    state:{
        employee:{},
       employees
    },
    mutations:{
    setLogin(state,employee)
    {
        localStorage.setItem('employee',JSON.stringify(employee));
        state.employee=employee;
    },
    setLogout(state)
    {
      localStorage.removeItem('employee');
      state.employee={}
    }
    },
    actions:{
        AUTH_LOGIN({commit},{success,fail,data}){
            const {email,password}=data;
            let authemp;
            if(mockapi){
                authemp=employees.findIndex((emp)=>{
                    return emp.email=== email && emp.password==password
                });
                commit("setLogin",employees[authemp]);
                success(employees[authemp]);    
            }
            else{
                fail();
                commit("setLogin",employees[authemp]);
            }
           // commit("setLogin",employees[authemp]);
          },
         AUTH_LOGOUT({commit}){
              commit("setLogout");
          }
    },
    getters:{
        getEmployee(state){
            return state.user;
          },
    },
    namespaced:true
}

export default authStore;