import { holidays } from '../../Data/holidays.js'

export default {
    name:'DatePicker',
  data() {
    return {
        date:'',
      disabledDates: holidays
    }
  },
  props:{
    required:false,
  },
  methods: {
    dateDisabled(ymd, date) {

    //  const weekday = date.getDay()
      //weekday===0 || weekday==6 ||
     return  holidays.some(holiday => {
        const match = holiday.toDateString() === date.toDateString();
        return match;
      });
    },
    selectedDate(value)
  {
    this.$emit('date-selected',value)
  }
  },
  
};