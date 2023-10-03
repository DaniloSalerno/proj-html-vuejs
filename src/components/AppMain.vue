<script>
import AppJumbotron from './AppJumbotron.vue';
import AppCoaching from './AppCoaching.vue';


export default {
    name: 'AppMain',
    components: {
        AppJumbotron,
        AppCoaching
    }
}
</script>

<template>
    <AppJumbotron />
    <AppCoaching />
</template>

<style lang="scss" scoped></style>