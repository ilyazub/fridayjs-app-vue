<template>
  <div id="app">
    <nav class="header d-flex justify-content-between">
      <header class="container">
        <router-link to="/">
          <img src="~@/fridayjs.png" class="logo">
        </router-link>
      </header>
    </nav>

    <router-view :events="events"/>
  </div>
</template>

<script lang="ts">
  import events from './fridayjs.json';

  export default {
    data() {
      return {
        events: [],
      }
    },
    created() {
      this.events = events;
    },
  }
</script>

<style src="@/main.css"></style>

<style scoped>
  .header {
    height: 60px;
  }

  .logo {
    height: 100%;
  }
</style>


