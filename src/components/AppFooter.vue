<script>
import AppSocial from './AppSocial.vue';
import { state } from '../state.js';

export default {
    name: 'AppFooter',
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
    components: { AppSocial }
}
</script>

<template>
    <footer>
        <div class="container">

            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 pb-5">

                <div class="col">

                    <div class="contact_details d-flex flex-column gap-2">

                        <h6>Address</h6>

                        <div>382 NE 191st St # 87394 Miami,FL 33179-3899</div>

                        <div>+1 (305) 547-9909 (9am - 5pm,EST Monday - Friday)</div>

                        <div>support@maxcoach.com</div>

                        <AppSocial />
                    </div>
                </div>
                <!-- /.col -->

                <div class="col">

                    <div class="row">

                        <div class="col-6">
                            <h6>Explore</h6>
                            <ul class="list-unstyled p-0">
                                <li v-for="link in this.state.footerExplore"><a :href="link.href">{{ link.name }}</a></li>
                            </ul>
                        </div>

                        <div class="col-6">
                            <h6>Information</h6>
                            <ul class="list-unstyled p-0">
                                <li v-for="link in this.state.footerInformation"><a :href="link.href">{{ link.name }}</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <!-- /.row -->

                </div>
                <!-- /.col -->

                <div class="col">

                    <h6>Instagram <span>@maxcoach</span></h6>

                    <div class="row">

                        <div class="col-4">
                            <img :src="getImageUrl('../assets/img/artist-blog-03-480x356.jpeg')" alt="">
                        </div>
                        <!-- /.col -->

                        <div class="col-4">
                            <img :src="getImageUrl('../assets/img/artist-event-01-250x300.jpg')" alt="">
                        </div>
                        <!-- /.col -->

                        <div class="col-4">
                            <img :src="getImageUrl('../assets/img/artist-event-02-250x300.jpg')" alt="">
                        </div>
                        <!-- /.col -->

                    </div>
                    <!-- /.row -->

                </div>
                <!-- /.col -->

            </div>
            <!-- /.row -->

            <div class="copyrights pt-5 d-flex justify-content-center">
                &copy; 2020 Maxcoach. All Rights Reserved
            </div>

            <a class="go_up btn_warning" href="#header">
                <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 384 512">
                    <path
                        d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z" />
                </svg>
            </a>


        </div>
        <!-- /.container -->

    </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

footer {
    padding: 6rem 0;
    position: relative;

    h6 {
        font-weight: bold;
        color: black;

        span {
            color: $mc_warning;
            font-size: 0.8rem;
        }
    }


    img {
        width: 100%;
        aspect-ratio: 1/1;
    }

    .contact_details {
        font-size: 0.8rem;
        color: #808080;
    }

    li a {
        color: #808080;
        text-decoration: none;
        font-size: 0.8rem;

        &:hover {
            text-decoration: underline;
        }

    }

    .copyrights {
        color: #808080;
        font-weight: bold;
        font-size: 0.75rem;
    }

    .go_up {
        position: absolute;
        bottom: 2rem;
        right: 2rem;
        width: 3rem;
        aspect-ratio: 1/1;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(270deg) brightness(102%) contrast(102%);
        }
    }

}
</style>