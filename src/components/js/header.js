import SearchComponent from './search';
import TimesheetComponent from '../TimesheetComponent.vue'
import { mapActions} from "vuex";

export default{
    name:'HeaderComponent',
    components:{
        SearchComponent,
        TimesheetComponent
    },
    data(){
            return{}
    },
    methods:{
        ...mapActions('authStore',['AUTH_LOGOUT']),
    logout(){
        alert("Logged Out!!")
        this.AUTH_LOGOUT();
        this.$router.push('/')
    }
    }
}