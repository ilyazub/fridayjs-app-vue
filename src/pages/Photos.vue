<template>
    <ul class="photos">
        <li v-for="photo in photos">
            <img :src="photo" :alt="photo" @click="showImage(photo)">
        </li>
    </ul>
</template>

<script lang="ts">
    export default {
        props: [
            'photos',
        ],
        methods: {
            showImage(photo) {
                // TODO: Show modal
                console.log(photo)
            }
        },
    }
</script>

<style scoped>
.photos {
    text-align: center;
}
.photos li {
    display: inline-block;
    width: 400px;
    margin: 0 10px 20px;
}

.photos li img {
    max-width: 100%;
    max-height: 100%;
}
</style>
