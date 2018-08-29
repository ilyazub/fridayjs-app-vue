<template>
  <div class="event container">
    <div class="row">
      <div class="col-12 mb-3">
        <h3>{{ title }}</h3>
      </div>
      <div class="col-12 mb-3">
        <h4>{{ date }}</h4>
      </div>

      <div class="col-12 mb-3">
        <div class="mb-3">Темы:</div>

        <div>
          <div v-for="topic in topics" class="row" :key="topic.id">
            <div class="d-sm-none d-md-block col-12 col-sm-6 col-md-4 mb-4">
              <div class="square" :style="{ backgroundImage: 'url(' + topic.photo + ')' }"></div>
            </div>
            <div class="col-12 col-sm-8 col-md-6 mb-6">
              <div class="topic-info">
                <h5 class="">{{ topic.title }}</h5>

                <section>
                  <span>Докладчики:</span>&nbsp;<span>{{ topic.speaker }}</span>
                </section>

                <section>
                  <a v-if="topic.slides" :href="topic.slides">Слайды</a>&nbsp;&middot;&nbsp;<a v-if="topic.video" :href="topic.video">Видео</a>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="hasPhotos" class="photos" >
      <h4>
        Фото:
      </h4>
      <photos :photos="photos" :event="event" />
    </div>
  </div>
</template>

<script lang="ts">
  import Photos from "@/components/Photos.vue";

  export default {
    components: {Photos},
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
        return this.data
      }
    },
  }
</script>

<style scoped>
  .info section {
    margin: 10px 0;
  }

  .photos {
    text-align: center;
  }
</style>
