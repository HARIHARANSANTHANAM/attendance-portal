export default{
    name:'PaginationComponent',
    props:{
        recordsPerPage:{
            type:Number,
            default:10
        },
        totalPages:{
            type:Number,
            default:0
        },
        currentPage:{
            type:Number,
            default:1
        },
        isLoading:{
            type:Boolean,
            default:false
        },
        fields:{
            type:[],
            required:true
        }
    },
    data(){
        return{
            listItems: [],
        }
    },
    watch: {
        currentPage: {
          handler: function (value) {
            this.emit("pageNo",value)
          },
        },
    }
}