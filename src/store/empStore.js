const mockapi=true;
import employees from './mockauth';

const empStore={
    state:{
        employee:{},
       employees
    },
    mutations:{
    setEmployee(state,employee)
    {
        localStorage.setItem('employee',JSON.stringify(employee));
        state.employee=employee;
    },
    deleteEmp(state)
    {
        localStorage.removeItem('employee');
        state.employee="";
    }
    },
    actions:{
        SET_EMPLOYEE({commit},{success,fail,data}){
            const {empCode}=data;
            let authemp;
            if(mockapi){
                authemp=employees.findIndex((emp)=>{
                    return emp.empCode=== empCode
                });
                commit("setEmployee",employees[authemp]);
                success(employees[authemp]);    
            }
            else{
                fail("error");
                // EmployeeService.authUser({data,
                //     success:(res)=>{
                //         commit("setLogin",res.data);
                //         success(res.data)
                        
                //     },
                //     fail:(err)=>{
                //         fail(err)
                //     }})
            }
          },
         DELETE_EMPLOYEE({commit},{data}){
              commit("deleteEmp",data);
          }
    },
    getters:{
        getEmployee(state){
            return state.employee;
        },
    },
    namespaced:true
}

export default empStore;