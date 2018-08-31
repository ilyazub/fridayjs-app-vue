<template>
  <div>
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 mb-4" v-for="photo in photos" :key="photo.id">
        <div class="square image" :style="{ backgroundImage: 'url(' + photo.link + ')' }" @click="onImageClick(photo)"></div>
      </div>
    </div>

    <BigPhoto v-if="selectedPhoto" :photo="selectedPhoto.link" @modalClose="onModalClose" />
  </div>
</template>

<script lang="ts">
  import BigPhoto from '@/components/BigPhoto.vue';

  export default {
    components: {
      BigPhoto,
    },
    props: [
      'photos',
    ],
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
  .image {
    opacity: 1;

    cursor: pointer;

    transform: opacity 250ms;
  }

  .image:hover {
    opacity: 0.5;
  }
</style>
