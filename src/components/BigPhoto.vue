<template>
  <div class="overlay" @click="$emit('modalClose')">
    <div class="square image" :style="{ backgroundImage: 'url(' + photo + ')' }" @click="onImageClick(photo)"></div>
    <div class="close" @click="$emit('modalClose')">&times;</div>
  </div>
</template>

<script lang="ts">
  export default {
    props: [
      'photo',
    ]
  }
</script>

<style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.9);
    cursor: pointer;
  }

  .image {
    width: 90%;
    height: 90%;
    cursor: default;
    position: relative;
    background-size: cover;
    background-position: center;
  }

  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    font-size: 3rem;
    display: flex;
    color: #fff;
    opacity: 0.5;
    transition: all .15s ease-in-out;
  }

  .close:hover {
    opacity: 1;
  }
</style>
