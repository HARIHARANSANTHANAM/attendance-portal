import PaginationComponent from '../../components/PaginationComponent.vue'
import {summaryFields} from '../../SummaryData.js';
import Summary from '../../Data/summary.js';

export default{
    name:'Summary',
    components:{
      PaginationComponent,
    },
    methods:{
      pageNo(value)
      {
        console.log(value)
      },
      fetchSummary(){
      
      }
    },
    data() {
        return {
          rows: 5,
          perPage: 5,
          currentPage: 1,
          fields:summaryFields,
          listItems:Summary
        }
     },
    
}

