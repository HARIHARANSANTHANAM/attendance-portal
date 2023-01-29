import PaginationComponent from '../../components/PaginationComponent.vue'
import {summaryFields} from '../../SummaryData.js';
export default{
    name:'ApprovalRequestPage',
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