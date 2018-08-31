<template>
  <div class="event">
    <div class="container">
      <h2 class="title">{{ title }}</h2>
      <div class="date">{{ date }}</div>
      <h3 class="subtitle">Доклады:</h3>

      <TopicsList :topics="topics"/>

      <h3 class="subtitle">Фото:</h3>
      <PhotosList :photos="photos" :event="event"/>
    </div>
  </div>
</template>

<script lang="ts">
  import PhotosList from "@/components/PhotosList.vue";
  import TopicsList from "@/components/TopicsList.vue";

  export default {
    components: {
      TopicsList,
      PhotosList
    },
    props: [
      'id',
      'title',
      'date',
      'topics',
      'photos',
    ],
    computed: {
      hasPhotos() {
        return this.photos.length > 0;
      },
      event() {
        return this.data;
      },
    },
  }
</script>

<style scoped>
  .title {
    margin-bottom: 1.5rem;
  }

  .subtitle {
    margin-bottom: 1rem;
  }

  .date {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
  }
</style>
