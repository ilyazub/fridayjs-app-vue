<template>
  <div class="event">
    <div class="container">
      <h2 class="title">{{ event.title }}</h2>
      <div class="date">{{ event.date }}</div>
      <h3 class="subtitle">Доклады:</h3>

      <TopicsList :topics="event.topics"/>

      <h3 class="subtitle">Фото:</h3>
      <PhotosList :photos="event.photos" :event="event"/>

      <router-view :photos="event.photos" />
    </div>
  </div>
</template>

<script lang="ts">
  // import {getEvent} from '@/lib/getEvents.ts';
  import PhotosList from "@/components/PhotosList.vue";
  import TopicsList from "@/components/TopicsList.vue";

  export default {
    components: {
      TopicsList,
      PhotosList
    },
    props: [
      'id',
    ],
    data() {
      return {
        event: null,
      };
    },
    created() {
      // this.event = getEvent(this.id);
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
