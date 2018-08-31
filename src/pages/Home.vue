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
            <div class="show-more">Подробнее</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import ImageContainer from "@/components/ImageContainer.vue";

  export default {
    components: {
      ImageContainer,
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
