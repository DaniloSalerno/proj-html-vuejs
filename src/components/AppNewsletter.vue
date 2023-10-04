<script>
export default {
    name: 'AppNewsletter'
}
</script>

<template>
    <div id="newsletter">

        <div class="container_small h-100">

            <div class="d-flex justify-content-center align-items-center h-100 gap-5 text-white">

                <div class="px-5">
                    <h5 class="fs-2 text-end">
                        Newsletter to get <br> in touch
                    </h5>
                </div>

                <div class="form-floating flex-grow-1">
                    <input type="search" class="form-control bg-transparent rounded-0" id="email" placeholder="">
                    <label for="email" class="text-white fs-5">
                        <span>Your e-mail</span>
                    </label>

                    <svg xmlns="http://www.w3.org/2000/svg" height="1.25em"
                        viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                    </svg>
                </div>

            </div>

        </div>
        <!-- /.container_small -->

    </div>
    <!-- /#newloetter -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

#newsletter {
    height: 200px;
    background-color: $mc_primary;

    background-image: url('../assets/img/artist-shape-color-paint-bottom-right.png'), url('../assets/img/artist-shape-color-paint-top-left.png');
    background-position: bottom right, top left;
    background-repeat: no-repeat;

    input {
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 2px solid #9c9c9ccd;
    }

    .form-floating>label:after {
        background-color: transparent;
    }

    .form-floating {
        position: relative;

        svg {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);

            filter: invert(100%) sepia(23%) saturate(0%) hue-rotate(317deg) brightness(100%) contrast(103%);
        }
    }
}
</style>