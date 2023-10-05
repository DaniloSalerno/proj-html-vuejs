<script>
import AppCardTestimonial from './AppCardTestimonial.vue';
import { state } from '../state.js';

export default {
    name: 'AppTestimonials',
    data() {
        return {
            state
        }
    },
    methods: {
        getImageUrl(path) {
            return new URL(path, import.meta.url).href;
        }
    },
    components: { AppCardTestimonial }
}
</script>

<template>
    <section id="testimonials">

        <div class="text-center py-5">
            <h2>Testimonials</h2>
            <h3 class="fw-bold">Why do people love me?</h3>
        </div>

        <div class="px-5">

            <div class="row row-cols-3">

                <AppCardTestimonial :card="card" v-for="card in this.state.cardTestimonial" />

            </div>
            <!-- /.row row-cols-3 -->

            <div class="pages d-flex justify-content-center align-items-center">
                <button class="btn" :class="this.state.activeTestimonial == 0 ? 'active' : ''"
                    @click="this.state.activeTestimonial = 0">
                </button>
                <button class="btn" :class="this.state.activeTestimonial == 1 ? 'active' : ''"
                    @click="this.state.activeTestimonial = 1">
                </button>
                <button class="btn" :class="this.state.activeTestimonial == 2 ? 'active' : ''"
                    @click="this.state.activeTestimonial = 2">
                </button>
                <button class="btn" :class="this.state.activeTestimonial == 3 ? 'active' : ''"
                    @click="this.state.activeTestimonial = 3">
                </button>
            </div>
            <!-- /.pages -->

        </div>

    </section>
    <!-- /#testimonials -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

#testimonials {
    height: 740px;
    background-color: $mc_light;


    .col {
        opacity: 0.2;
    }

    .col.active {
        opacity: 1;
    }

    .pages {
        padding: 5rem 0;

        button {
            display: flex;
            align-content: center;
            border: none;
            padding: 1rem;
        }
    }

    .pages>button:before {

        content: '';
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: grey;

    }

    .pages>button.active:before {

        content: '';
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: $mc_dark;

    }
}
</style>