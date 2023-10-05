<script>
import { state } from '../state.js';

export default {
    name: 'AppCardTestimonial',
    props: {
        card: Object
    },
    data() {
        return {
            state
        }
    },
    methods: {
        getImageUrl(path) {
            return new URL(path, import.meta.url).href;
        },
        slideCard() {
            if (this.state.activeTestimonial < 3) {
                this.state.activeTestimonial++
            } else {
                this.state.activeTestimonial = 0
            }
        }
    }/* ,
    mounted() {
        setInterval(this.slideCard, 2000)
    } */
}
</script>

<template>
    <div class="col" @click="this.slideCard()"
        :class="card.id == this.state.activeTestimonial ? 'active' : '', this.state.activeTestimonial == 1 && card.id == 3 || this.state.activeTestimonial == 2 && card.id == 0 || this.state.activeTestimonial == 3 && card.id == 1 || this.state.activeTestimonial == 0 && card.id == 2 ? 'd-none' : '', this.state.activeTestimonial == 0 && card.id == 3 ? 'order-first' : '' || card.id == 0 && this.state.activeTestimonial == 3 ? 'order-last' : ''">

        <div class="card border-0">

            <div class="card-body px-4">

                <h5 class="fw-bold">
                    {{ card.title }}
                </h5>

                <div class="py-4">
                    {{ card.content }}
                </div>

                <div class="d-flex">

                    <img class="avatar" width="60" :src="getImageUrl(`../assets/img/${card.avatarPath}`)" alt="">

                    <div class="ps-3">
                        <div class="fw-bold">{{ card.name }}</div>
                        <div class="text-secondary">{{ card.job }}</div>
                    </div>

                </div>

            </div>
            <!-- /.card-body -->

        </div>
        <!-- /.card -->

    </div>
    <!-- /.col -->
</template>

<style lang="scss" scoped>
.avatar {
    aspect-ratio: 1/1;
    border-radius: 50%;
}

.col {
    opacity: 0.2;
}

.col.active {
    opacity: 1;
}
</style>