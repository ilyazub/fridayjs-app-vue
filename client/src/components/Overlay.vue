<template>
  <div class="show-more">
    <slot></slot>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .show-more {
    background-color: rgba(250, 216, 73, 0.9);
    transition: opacity 0.25s ease-in-out;
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: #fff;
    font-size: 18px;
    text-transform: uppercase;
    text-shadow: 1px 1px 1px #000;
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .show-more:hover {
    opacity: 1;
  }
</style>
