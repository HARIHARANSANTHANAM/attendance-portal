import axios from 'axios'


const AuthUser=({success,fail,data})=>{
    const {email,password}=data;
    axios.get(`https://63d2770c06556a0fdd3ce4c0.mockapi.io/${email}/${password}`)
    .then((data)=>{
        success(data);
    })
    .catch((err)=>{
        fail(err);
    })
}