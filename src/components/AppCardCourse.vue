<script>
export default {
    name: 'AppCardCourse',
    props: {
        card: Object
    },
    methods: {
        getImageUrl(path) {
            return new URL(path, import.meta.url).href
        }
    }
}
</script>

<template>
    <div class="col">

        <div class="card border-0">

            <img width="300" :src="getImageUrl(`../assets/img/${card.imgPath}`)" alt="">

            <div class="card-body">

                <div class="price">
                    {{ card.price }}
                </div>
                <!-- /.price -->

                <a href="##" class="d-inline-block py-3">{{ card.title }}</a>

                <div class="course_info d-flex align-items-center gap-4">

                    <div class="d-flex align-items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                            <path
                                d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                        </svg>

                        <div class="lessons">{{ card.lessons }}</div>

                    </div>

                    <div class="d-flex align-items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                            <path
                                d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                        </svg>

                        <div class="students">{{ card.students }}</div>

                    </div>

                </div>
                <!-- /.course_info -->

            </div>
            <!-- /.card-body -->

        </div>
        <!-- /.card -->

    </div>
    <!-- /.col -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.card-body a {
    font-size: 1.25em;
    text-decoration: none;
    font-size: bold;
    color: black;

    &:hover {
        text-decoration: underline;
    }
}

.price {
    color: $mc_warning;
    font-size: 1.15rem;
    font-weight: bold;
}

.course_info {
    color: #808080;
    font-size: 0.8rem;

    svg {
        filter: invert(55%) sepia(0%) saturate(69%) hue-rotate(225deg) brightness(91%) contrast(86%);
    }
}


.card:hover {
    .card-body {
        border: 2px solid $mc_warning;
        margin-top: -2rem;
        background-color: white;
    }
}
</style>