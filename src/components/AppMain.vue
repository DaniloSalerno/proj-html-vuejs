<script>
import AppJumbotron from './AppJumbotron.vue';
import AppCoaching from './AppCoaching.vue';
import AppMentor from './AppMentor.vue';


export default {
    name: 'AppMain',
    components: {
        AppJumbotron,
        AppCoaching,
        AppMentor
    }
}
</script>

<template>
    <AppJumbotron />
    <AppCoaching />
    <AppMentor />
</template>

<style lang="scss" scoped></style>