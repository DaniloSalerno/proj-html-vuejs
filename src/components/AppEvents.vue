<script>
import AppCardEvent from './AppCardEvent.vue';
import { state } from '../state.js';

export default {
    name: 'AppEvents',
    data() {
        return {
            state
        }
    },
    components: { AppCardEvent }
}
</script>

<template>
    <section id="events">

        <div class="container_small">

            <div class="text-center py-5">

                <h2>Upcoming Events</h2>
                <h3 class="fw-bold">Let's Work Together</h3>

            </div>

            <div class="row row-cols-1 row-cols-xl-2 g-5 py-5">

                <AppCardEvent :card="card" v-for="card in this.state.cardEvent" />

            </div>
            <!-- /.row-->

        </div>
        <!-- /.container_small -->


    </section>
</template>

<style lang="scss" scoped></style>