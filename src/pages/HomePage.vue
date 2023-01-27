<template>
    <div>
        <div class="container">
              <b-row class="my-1">
        <b-col sm="12" md="4" lg="3" class="mb-3">
        <select id="inputState" class="form-control">
            <option selected>Selected Employee Name</option>
            <option></option>
        </select>
        </b-col>
         <b-col sm="12" md="4" lg="3" class="mb-3">
        <b-form-input id="input-default" type="date"></b-form-input>
        </b-col>
        <b-col sm="12" md="4" lg="3" class="mb-3">
        <b-form-input id="input-default" type="date"></b-form-input>
        </b-col>

          <b-col sm="12" md="4" lg="3">
        <b-button class="button" style="width:100%">Generate Summary</b-button>
        </b-col>
        </b-row>

          <div class="mt-3">
            <b-pagination v-model="currentPage" :total-rows="rows" align="center" variant="danger"></b-pagination>
          </div>

    
        <PaginationComponent :fields="fields" :totalPages="10"/>

    
        </div>
    </div>
</template>

<script src="./js/home"/>

<style scoped>
.button{
    background:#11AFB6;
    color:white;
}
</style>