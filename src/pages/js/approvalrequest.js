import PaginationComponent from '../../components/PaginationComponent.vue'
import {summaryFields} from '../../SummaryData.js';
import approval from '../../Data/approval.js'
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
          fields:summaryFields,
          listItems:approval
        }
      },
      methods:{
        pageNo(page)
        {
          console.log(page)
        }
      }
}