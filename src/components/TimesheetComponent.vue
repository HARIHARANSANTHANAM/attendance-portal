<template>
    <div>
        <form @submit.prevent="getInfo">
        <DatePicker @date-selected="getSelectedDate" required="true"/><br/>
        <div >
        <input type="checkbox" class="ms-2" value="Work from home" v-model="WFH"><label class="ms-2">Work from home</label>
        </div>
        <p class="text-warning" v-if="isHalfDay()">Your Working Hour is less than 6hours</p>
        <p class="text-danger" v-else-if="isFullfDay()">Your Working Hour is less than 3hours and Considered to be leave</p>
         <b-row class="my-1" v-if="isWFH() || isCalculatedHours()">
        <b-col sm="12" md="12">
         <label for="inputState" class="mb-2 mt-2">Productive Hours</label>
        <b-form-input id="input-default" type="number" placeholder="Productive Hours"  v-model="productiveHours" min="0" :max="calculatedHours"></b-form-input>
        </b-col>
        </b-row>
        <b-row class="my-1" v-if="isLeave()">
        <b-col sm="12" md="6" >
         <label for="inputState" class="mb-2 mt-2">Leave Type</label>
        <select id="inputState" class="form-control" v-model="leaveType" required>
            <option v-if="productiveHours>3 && productiveHours<6">Halfday</option>
             <option v-if="productiveHours<=3">Fullday</option>
        </select>
        </b-col>
         <b-col sm="12" md="6" v-if=" leaveType==='Halfday' && isHalfDay()">
            <label for="inputState" class="mb-2 mt-2">Period</label>
        <select id="inputState" class="form-control" required v-model="period">
            <option selected>first-half</option>
            <option>second-half</option>
        </select>
        </b-col>
        </b-row>
        <button type="submit" class="btn button">Submit</button>
        </form>
    </div>
</template>

<script src="./js/timesheet.js"/>
<style scoped>
.button{
    background:#11AFB6;
    color:white;
}
.close{
     background:#11AFB6;
    color:white;
}
</style>