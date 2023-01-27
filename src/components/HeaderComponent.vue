<template>
 <div>
  <b-navbar toggleable="lg" type="light" variant="light">
  <b-navbar-nav >
    <b-navbar-brand href="#" style="display:flex;align-items:center" class="text-secondary">
     <img :src="require('@/assets/images.jpeg')" class="d-inline-block align-top ml-4" alt="Kitten" width="40" height="40">
      <b-nav-item href="#">Attendance portal</b-nav-item>
    </b-navbar-brand>
  </b-navbar-nav>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ms-auto">
        <b-nav-item-dropdown dropleft id="dropdown-dropleft">
          <!-- Using 'button-content' slot -->
          <template #button-content>
    <b-icon icon="person-circle" font-scale="1.5" class="ms-2"></b-icon>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
             <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item-button variant="info" @click="logout()">LogOut</b-dropdown-item-button>
          <b-button class="button" @click="$bvModal.show('modal-center')">Timesheet</b-button>
        </b-nav-item-dropdown>
        <b-nav-item>
      </b-nav-item>
      
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <b-modal id="modal-center" hide-footer no-close-on-backdrop>
    <TimesheetComponent/>
  </b-modal>
</div>
</template>
<script src="./js/header.js"/>

<style scoped>
.button{
    background:#11AFB6;
    color:white;
}
</style>

