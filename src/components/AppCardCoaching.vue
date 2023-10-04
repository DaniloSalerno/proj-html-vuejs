<script>
export default {
    name: 'AppCardCoaching',
    props: {
        card: Object
    },

    methods: {
        getImageUrl(path) {
            return new URL(path, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div :class="card.id % 2 ? 'col' : 'col even_col'">
        <img :src="getImageUrl(`../assets/img/${card.imgPath}`)" alt="">
        <h5>{{ card.name }}</h5>
        <div>
            {{ card.content }}
        </div>
    </div>
    <!-- /.col -->
</template>

<style lang="scss" scoped>
.even_col {
    padding-top: 4.5rem;
}

h5 {
    padding: 1rem 0;
}
</style>