<template>
  <div id="app">
    <nav class="header d-flex justify-content-between">
      <header class="container">
        <router-link to="/" class="logo"></router-link>
      </header>
    </nav>

    <div class="app">
      <router-view :events="events" />
    </div>
  </div>
</template>

<script lang="ts">
  import {getEvents} from '@/lib/getEvents.ts';

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

<style src="@/assets/main.css"></style>

<style scoped>
  .header {
    height: 60px;
    box-shadow: 0 2px 2px #eee;
    display: flex;
  }

  .logo {
    display: block;
    height: 100%;
    width: 150px;

    background-position: left center;
    background-image: url(~@/assets/fridayjs.png);
    background-repeat: no-repeat;
    background-size: contain;
  }

  .app {
    padding: 3rem 0;
  }
</style>


