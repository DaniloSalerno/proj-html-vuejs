<script>
import AppNavItem from './AppNavItem.vue';
import { state } from '../state'
import AppSocial from './AppSocial.vue';

export default {
    name: 'AppHeader',
    components: { AppNavItem, AppSocial },
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <header id="header">

        <div v-if="this.state.eventTimer" id="event_timer" class="d-flex align-items-center justify-content-center gap-4">

            <div class="event_description">
                Starts <span>tomorrow!</span> Our biggest event of the year...
            </div>
            <!-- /.event_description -->

            <div class="countdown d-flex align-items-center gap-2">

                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <path
                        d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>

                <span class="timer">
                    00 : 00 : 00 : 00
                </span>

            </div>
            <!-- /.countdown -->

            <a href="##" class="btn btn_warning">
                Get ticket
            </a>
            <!-- /.btn -->

        </div>
        <!-- /#event_timer -->

        <nav class="container navbar navbar-expand navbar-light justify-content-between">

            <img width="160" src="../assets/img/dark-logo.png" alt="">

            <ul class="nav navbar-nav gap-3">

                <AppNavItem :link="link" v-for="link in this.state.nav_links" />

            </ul>
            <!-- /.nav -->

            <AppSocial />

        </nav>
        <!-- /.navbar -->

    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

header {


    #event_timer {
        height: 50px;
        background-color: $mc_light;

        .event_description {
            color: grey;
            font-size: 0.85rem;
        }

        .timer {
            font-weight: 600;
            color: $mc_dark;
        }

        .btn_warning {
            padding: 0.1rem 2.25rem;
        }
    }
}
</style>