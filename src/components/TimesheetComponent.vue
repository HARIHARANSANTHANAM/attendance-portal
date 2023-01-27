<template>
    <div>
        <center><h5>TimeSheet Submission</h5></center>
        <b-form-input id="input-default" type="date" placeholder="Working Date"></b-form-input><br/>
        <input type="checkbox" value="Work from home" v-model="checkWFH"><label class="ms-2">Work from home</label>
         <b-row class="my-1" v-if="checkWFH">
        <b-col sm="12" md="6">
        <b-form-input id="input-default" type="datetime-local" placeholder="CheckIn"></b-form-input>
        </b-col>
         <b-col sm="12" md="6">
        <b-form-input id="input-default" type="datetime-local" placeholder="CheckOut"></b-form-input>
        </b-col>
        </b-row>

         <b-row class="my-1" v-if="checkWFH">
        <b-col sm="12" md="12">
        <b-form-input id="input-default" type="Number" placeholder="Productive Hours" min=9></b-form-input>
        </b-col>
        </b-row>

        <b-row class="my-1" v-if="checkWFH">
        <b-col sm="12" md="6">
         <label for="inputState">Leave Type</label>
        <select id="inputState" class="form-control">
            <option>Half day</option>
            <option>Full day</option>
        </select>
        </b-col>
         <b-col sm="12" md="6">
            <label for="inputState">Period</label>
        <select id="inputState" class="form-control">
            <option selected>first half</option>
            <option>second half</option>
        </select>
        </b-col>
        </b-row>
         
    </div>
</template>

<script src="./js/timesheet.js"/>