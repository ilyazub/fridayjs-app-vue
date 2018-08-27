<template>
    <div class="event">
        <h2>{{ title }}</h2>
        <h3>{{ date }}</h3>

        <ol class="topics">
            <li v-for="topic in topics">
                <figure>
                    <img src="https://scontent.fiev13-1.fna.fbcdn.net/v/t31.0-8/20863703_493288284342203_5842571835156030175_o.jpg?_nc_cat=0&oh=3ced930ebd9fbbfec4dfc1f8eb79fdd2&oe=5C003297"
                         alt="Проектирование React Native приложения">
                    <figcaption>{{ topic.title }}</figcaption>
                </figure>

                <section>
                    <span>Speaker:</span>&nbsp;<span>{{ topic.speaker }}</span>
                </section>

                <section>
                    <header>Resources</header>
                    <ul>
                        <li v-if="topic.slides"><a :href="topic.slides">Slides</a></li>
                        <li v-if="topic.video"><a :href="topic.video">Video</a></li>
                    </ul>
                </section>
            </li>
        </ol>

        <hr>

        <section class="bigPhoto">
            <router-link to="{ name: 'Photos' }">
                <img src="https://scontent.fiev13-1.fna.fbcdn.net/v/t31.0-8/20863703_493288284342203_5842571835156030175_o.jpg?_nc_cat=0&oh=3ced930ebd9fbbfec4dfc1f8eb79fdd2&oe=5C003297"
                     :alt="bigPhotoTitle">
            </router-link>
            <a href="#/events/1/photos" class="photo">

            </a>
        </section>
    </div>
</template>

<script lang="ts">
export default {
    props: [
        'title',
        'date',
        'topics'
    ],
}
</script>

<style scoped>
    .topics > li {
        display: block;
        margin: 50px 0;
    }

    .topics figure {
        margin: 0;
    }

    .topics img {
        width: 300px;
        height: 200px;
    }

    .topics section {
        margin: 10px 0;
    }

    .bigPhoto {
        display: flex;
        justify-content: center;
    }

    .photo {
        width: 50%;
        height: 50%;
    }

    .photo img {
        max-width: 100%;
        max-height: 100%;
    }
</style>
