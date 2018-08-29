<template>
  <div class="container-fluid">
    <h3 class="text-center mb-3">
      Наши события
    </h3>
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 mb-4" v-for="event in events" :key="event.id">
        <div class="square event-content w-100 h-100" :style="{ backgroundImage: 'url(' + bgImg(event) + ')' }">
          <div class="info">
            <div class="title">
              {{ event.title }}
            </div>
            <div class="date">
              {{ event.date }}
            </div>
          </div>

          <div class="show-more">
            <router-link :to="{ name: 'Event', params: event }" class="link">
              <span class="h-100 w-100 d-flex align-items-center justify-content-center">Подробнее</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    props: ['events'],
    methods: {
      bgImg(event) {
        if (event.photos) {
          return event.photos[0];
        }
      }
    },
  }
</script>

<style scoped>
  .event-content {
    cursor: pointer;
    position: relative;
    background-size: cover;
  }

  .image {
    width: 100%;
    height: 100%;
  }

  .info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15px;
    background-color: rgba(0,0,0, 0.5);
    color: #fff;
    text-shadow: 1px 1px 1px #000;
  }
  .title {
    font-size: 20px;
  }
  .date {
    font-size: 14px;
  }

  .show-more > .link {
    background-color: rgba(250,216,73, 0.9);
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: #fff;
    font-size: 18px;
    font-family: sans-serif;
    text-transform: uppercase;
    text-shadow: 1px 1px 1px #000;
    text-decoration: none;
  }

  .show-more > .link:hover {
    opacity: 1;
  }
</style>
