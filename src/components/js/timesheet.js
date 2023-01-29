
import DatePicker from "../DatePicker.vue";
import TimesheetService from '../../serviceLayer/timeSheetService';
import { mapGetters } from "vuex";

export default{
    data(){
        return {
            WFH:"",
            checkIn:'',
            checkOut:'',
            productiveHours:'',
            workingDate:'',
            calculatedHours:'',
            leaveType:'',
            period:'',
            inType:{
                "Halfday":0.5,
                "Fullday":1
              }
        }
    },
    components:{
        DatePicker
    },
    methods:{
       
          getSelectedDate(date)
          {
            const user=this.getUser
            alert(date)
            console.log("date: "+date)
            this.workingDate=date;
            this.checkIn=new Date(date);
            TimesheetService.calculatedHours({
              success:(res)=>{
                this.calculatedHours=res.data
                  console.log(res);
              },
              fail:(err)=>{
                console.log(err)
              },
              data:{
                empCode:user?.empCode,
                workingDate:this.workingDate
              }
            })
          },
        getInfo(){
            console.log(this.getUser)
            let daycount=1;
           if(this.$data.leaveType==="Halfday")
           {
                daycount=0.5;
           }
           else if(this.$data.leaveType==="Fullday"){
            daycount=1;
           }

          const data={
            empCode: this.getUser?.empCode,
            managerId: this.getUser?.managerId,
            workingDate: this.$data.workingDate,
            hours: this.$data.productiveHours,
            inType: this.$data.WFH?"WORK_FROM_HOME":"OFFICE",
            dayCount: daycount,
            period: this.period !== ''?this.$data.period==="first-half"?"FIRST_HALF":"SECOND_HALF":null,
          }
            if(confirm("Are you sure want to submit the sheet?")){
            console.log(data)
            TimesheetService.timeSheetSubmission({
              success:(res)=>{
                  console.log(res);
              },
              fail:(err)=>{
                console.log(err)
              },
              data
            })
            }

            
        },

        
    },
    computed:{
      ...mapGetters('authStore',['getUser']),
        getCheckIn(){
            return this.checkIn;
    },
        calculateTimeDifference(){
            console.log("timedifference")
            let start = new Date(this.checkIn);
            let end = new Date(this.checkOut);
            let diff = end.getTime() - start.getTime();
            let diffInDecimal = (diff / 3600000).toFixed(2);
            console.log(diffInDecimal)
            this.calculatedHours=diffInDecimal;
            return diffInDecimal;
          }
    },
        watch: {
            checkIn: function() {
              this.calculateTimeDifference;
            },
            checkOut: function() {
              this.calculateTimeDifference;
            }
          }
   
}