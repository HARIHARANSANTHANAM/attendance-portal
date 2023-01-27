import PaginationComponent from '../../components/PaginationComponent.vue'
import {summaryFields} from '../../SummaryData.js';

export default{
    name:'HomePage',
    components:{
      PaginationComponent
    },
    data() {
        return {
          rows: 100,
          perPage: 1,
          currentPage: 5,
          fields:summaryFields
        }
      }
}

