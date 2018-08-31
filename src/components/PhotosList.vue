<template>
  <div class="photos">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4" v-for="photo in photos" :key="photo.id">
        <div  @click="onImageClick(photo)" class="photo square">
          <ImageContainer :src="photo.link" />

          <Overlay>Увеличить</Overlay>
        </div>
      </div>
    </div>

    <BigPhoto v-if="selectedPhoto" :photo="selectedPhoto.link" @modalClose="onModalClose" />
  </div>
</template>

<script lang="ts">
  import BigPhoto from '@/components/BigPhoto.vue';
  import ImageContainer from '@/components/ImageContainer.vue';
  import Overlay from '@/components/Overlay.vue';

  export default {
    components: {
      BigPhoto,
      ImageContainer,
      Overlay,
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
  .photo {
    display: block;
    margin-bottom: 1.5rem;
    position: relative;
  }
</style>
