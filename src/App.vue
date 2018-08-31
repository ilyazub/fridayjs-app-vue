<template>
  <div id="app">
    <nav class="header d-flex justify-content-between">
      <header class="container">
        <router-link to="/">
          <img src="~@/static/fridayjs.png" class="logo">
        </router-link>
      </header>
    </nav>

    <router-view :events="events"/>
  </div>
</template>

<script lang="ts">
  import { getEvents } from '@/util/getEvents.ts';

  export default {
    data() {
      return {
        events: [],
      }
    },
    created() {
      this.events = getEvents();
    },
  }
</script>

<style src="@/static/main.css"></style>

<style scoped>
  .header {
    height: 60px;
  }

  .logo {
    height: 100%;
  }
</style>


