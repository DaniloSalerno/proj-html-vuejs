<script>
import AppCardCoaching from './AppCardCoaching.vue';
import { state } from '../state.js';

export default {
    name: 'AppCoaching',
    data() {
        return {
            state
        }
    },
    components: { AppCardCoaching }
}
</script>

<template>
    <section id="artist_coaching">

        <div class="container_small pb-5">

            <div class="text-center">

                <h2>Artist coaching</h2>

                <div class="fs-3 fw-bold">

                    I understand what it takes to create. <br> I can help you with

                </div>

            </div>

            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">

                <AppCardCoaching :card="card" v-for="card in this.state.cardCoaching" />

            </div>
            <!-- /.row -->


        </div>
        <!-- /.container_small -->

    </section>
    <!-- /#artist_coaching -->
</template>

<style lang="scss" scoped>
#artist_coaching {
    height: 670px;
    background-image: url('../assets/img/maxcoach-shape-13.png'), url('../assets/img/maxcoach-shape-14.png'), url('../assets/img/artist-shape-01.png');
    background-position: right -40px center, left center, left top 50px;
    background-repeat: no-repeat;
    background-size: 10%, 100%, 30%;

    .container_small,
    .row {
        padding-top: 5rem;
    }

}
</style>