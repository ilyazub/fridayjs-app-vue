<template>
  <div class="image-container square">
    <div class="image square" ref="image"></div>
  </div>
</template>

<script lang="ts">
  export default {
    props: [
      'src'
    ],
    mounted() {
      const src = this.src;
      const image = new Image(src);

      image.onload = () => {
        this.$refs.image.style.backgroundImage = `url(${src})`;
        this.$refs.image.style.opacity = 1;
      };

      image.src = src;
    }
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

    opacity: 0;
    transition: opacity 250ms ease-out;
  }
</style>
