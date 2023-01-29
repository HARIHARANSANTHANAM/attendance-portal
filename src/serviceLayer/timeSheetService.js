import axios from 'axios'


const timeSheetSubmission=({success,fail,data})=>{
   // const {empCode,inTime,outTime}=data;

    axios.post(`timesheet/time/addTimesheet`,data)
    .then((res)=>{
        if(res.status===200){
        success(res);
        }
    })
    .catch((err)=>{
        fail(err);
    })
}

const fetchSummary=({success,fail,data})=>{
    const {offset}=data;
    axios.get(`https://api.example.com/items?offset=${offset}`)
    .then(res => {
        if(res.status===200){
            success(res);
            }
    })
    .catch((err)=>{
        fail(err)
    })
}

const calculatedHours=({success,fail,data})=>{
     const {empCode,workingDate}=data;
    
     axios.get(`https://1603-49-249-56-118.ap.ngrok.io/time/calculateHours?empCode=${empCode}&workingDate=${workingDate}`,data)
     .then((res)=>{
         if(res.status===200){
         success(res);
         }
     })
     .catch((err)=>{
         fail(err);
     })
 }


export default {timeSheetSubmission,calculatedHours,fetchSummary}

