<template>
  <div class="image-container square">
    <div class="image square" :style="{ backgroundImage: 'url(' + src + ')' }"></div>
  </div>
</template>

<script lang="ts">
  export default {
    props: [
      'src'
    ],
  }
</script>

<style scoped>
  .image-container {
    background-color: #efefef;
  }

  .square {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }

  .image {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
</style>
