<template>
    <div>
      <b-table
        striped
        hover
        :items="listItems"
        :fields="fields"
        :current-page="currentPage"
        :per-page="0"
      >
      </b-table>
      <b-pagination
        v-model="currentPage"
        :total-rows="totalPages"
        :per-page="recordsPerPage"
      >
      </b-pagination>
    </div>
</template>

<script src="./js/pagination.js"/>