<template>
  <div>
    <ul>
      <li v-for="(photo, index) in photos" :key="index">
        <img :src="photo" :alt="index" class="image" @click="onImageClick(photo)">
      </li>
    </ul>

    <BigPhoto v-if="selectedPhoto" :photo="selectedPhoto" @modalClose="onModalClose" />
  </div>
</template>

<script lang="ts">
  import BigPhoto from '@/components/BigPhoto.vue';

  export default {
    components: {
      BigPhoto,
    },
    props: {
      photos: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        selectedPhoto: null,
      }
    },
    methods: {
      onImageClick(photo) {
        this.selectedPhoto = photo;
      },
      onModalClose() {
        this.selectedPhoto = null;
      },
    },
  }
</script>

<style scoped>
  .photos li {
    display: inline-block;
    height: 200px;
    margin: 0 10px 20px;
  }

  .image {
    max-width: 100%;
    max-height: 100%;
    opacity: 1;

    transform: opacity 250ms;
  }

  .image:hover {
    opacity: 0.5;
  }
</style>
