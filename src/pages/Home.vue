<template>
  <div class="events-list">
    <div class="container-fluid">
      <h3 class="text-center mb-3">
        Наши мероприятия
      </h3>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4" v-for="event in events" :key="event.id">
          <router-link :to="{ name: 'Event', params: event }" class="event square">
            <ImageContainer :src="bgImg(event)" />

            <div class="info">
              <div class="title">{{ event.title }}</div>
              <div class="date">{{ event.date }}</div>
            </div>
            <Overlay>Подробнее</Overlay>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import ImageContainer from "@/components/ImageContainer.vue";
  import Overlay from '@/components/Overlay.vue';

  export default {
    components: {
      ImageContainer,
      Overlay,
    },
    props: ['events'],
    methods: {
      bgImg(event) {
        if (event.photos) {
          return event.photos[0].link;
        }
      }
    },
  }
</script>

<style scoped>
  .info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    text-shadow: 1px 1px 1px #000;
  }

  .event {
    margin-bottom: 1.5rem;
    display: block;
    position: relative;
  }

  .title {
    font-size: 1.25rem;
  }

  .date {
    font-size: 0.875rem;
  }
</style>
