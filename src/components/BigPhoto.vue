<template>
  <div>
    <div class="backdrop"></div>
    <div class="wrapper" ref="wrapper">
      <button class="close" @click="close">&times;</button>
      <div class="block" ref="block">
        <img :src="photo" alt="" class="image">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    props: [
      'photo',
    ],
    methods: {
      close() {
        this.$router.go(-1);
      },

      onClick({target}) {
        if (target === this.$refs.wrapper) {
          this.close();
        }
      },

      onKeydown({keyCode}) {
        if (keyCode === 27) {
          this.close();
        }
      },
    },

    mounted() {
      window.document.body.classList.add('modal-shown');
      document.addEventListener('click', this.onClick);
      document.addEventListener('keydown', this.onKeydown);
    },
    beforeDestroy() {
      window.document.body.classList.remove('modal-shown');
      document.removeEventListener('click', this.onClick);
      document.removeEventListener('keydown', this.onKeydown);
    },
  }
</script>

<style scoped>
  .image {
    width: 800px;
    max-width: 100%;
    height: auto;
  }


  .backdrop,
  .wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .backdrop {
    opacity: 0.75;
    background-color: #000;
  }

  .block {
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);
  }

  .close {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    cursor: pointer;

    width: 3rem;
    height: 3rem;

    padding: 0;
    margin: 0;
    font-size: 3rem;
    line-height: 2rem;

    font-weight: bold;
    color: #fff !important;
    background-color: transparent;
    border: none;
    opacity: 0.5;

  }

  .close:hover {
    opacity: 0.75;
  }

  .close :focus {
    outline: none;
  }
</style>
