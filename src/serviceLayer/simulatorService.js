import axios from 'axios'


const simulatorLogin=({success,fail,data})=>{
   // const {empCode,inTime,outTime}=data;

    axios.post(`timesheet/simulate/addSimulator`,data)
    .then((res)=>{
        if(res.status===200){
        success(res);
        }
    })
    .catch((err)=>{
        fail(err);
    })
}


export default {simulatorLogin}

