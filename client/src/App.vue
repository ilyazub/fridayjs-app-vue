<template>
  <div id="app">
    <nav class="header d-flex justify-content-between">
      <header class="container">
        <router-link to="/" class="logo"></router-link>
      </header>
    </nav>

    <div class="app">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
  export default {
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


