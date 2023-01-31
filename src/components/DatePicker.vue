<template>
<div>
  <b-form-datepicker
    v-model="date"
    @input="selectedDate" 
    :date-disabled-fn="dateDisabled"
   :aria-required="required"
   :max="max"
  />
  </div>
</template>
<script src="./js/DatePicker.js"/>