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

        <div class="row">
          <div style="border: 1px solid yellow;height: 100%;position: absolute;"
               class="h-100 d-none d-sm-block d-md-none"></div>

          <div class="col-12">
            <div v-for="topic in topics" class="row" :key="topic.id">
              <div class="image-container d-none d-sm-block">
                <div class="image square" :style="{ backgroundImage: 'url(' + topic.speakerPhoto + ')' }"></div>
              </div>
              <div class="col-12 col-sm-8 col-md-6 mb-6">
                <div class="topic-info">
                  <h5 class="">{{ topic.title }}</h5>

                  <section>
                    <span>Докладчики:</span>&nbsp;<span>{{ topic.speaker }}</span>
                  </section>

                  <section v-if="showLinks(topic)">
                    <span v-if="topic.slides">
                      <a :href="topic.slides" target="_blank">Слайды</a>&nbsp;&middot;
                    </span>
                    <a v-if="topic.video" :href="topic.video" target="_blank">Видео</a>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="hasPhotos" class="photos">
      <h4>
        Фото:
      </h4>
      <photos :photos="photos" :event="event"/>
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
      },
    },
    methods: {
      showLinks(topic) {
        return topic.slides || topic.video;
      },
    },
  }
</script>

<style scoped>
  .image-container {
    width: 125px;
    height: 125px;
    margin-right: 1rem;
    flex-shrink: 0;
    background-color: #efefef;
  }

  .image {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .info section {
    margin: 10px 0;
  }

  .photos {
    text-align: center;
  }
</style>
