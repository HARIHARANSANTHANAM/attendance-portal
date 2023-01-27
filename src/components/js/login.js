import {mapActions} from 'vuex'
export default{
    name:'LoginComponent',
    data(){
        return{
        email:'',
        password:''
        }
    },
    methods:{
        ...mapActions('authStore',['AUTH_LOGIN']),
        validator(){
            if(this.username=="" || this.password=="")
                return true;
            return false;
        },
        signin(e){
            e.preventDefault();
            this.AUTH_LOGIN({
                success:this.handlesuccessLogin,
                fail:this.handlefailLogin,
                data:{
                    email:this.email,
                    password:this.password
                }
            })
        },
        handlesuccessLogin(data){
            console.log(data);
            this.$router.push({path:'/home'})
        },
        handlefailLogin(err)
        {
            console.log(err);
        }
    }
}