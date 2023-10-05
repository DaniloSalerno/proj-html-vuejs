<script>
export default {
    name: 'AppCardEvent',
    props: {
        card: Object
    },
    methods: {
        getImageUrl(path) {
            return new URL(path, import.meta.url).href;
        }
    }

}
</script>

<template>
    <div class="col">

        <div class="card border-0 d-flex flex-row" :class="card.text_position === 'left' ? 'flex-row-reverse' : ''">

            <div>
                <img :src="getImageUrl(`../assets/img/${card.imgPath}`)" alt="">
            </div>

            <div class="card-body d-flex flex-column justify-content-center"
                :class="card.text_position === 'left' ? 'text-end' : ''">

                <div class="date">
                    {{ card.date }}
                </div>
                <!-- /.date -->

                <a href="##" class="fw-bold py-3 text-black d-inline-block">
                    {{ card.title }}
                </a>

                <div class="location d-flex align-items-center gap-4"
                    :class="card.text_position === 'left' ? 'align-self-end' : ''">

                    <div class="d-flex align-items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path
                                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>

                        <div class="lessons">{{ card.location }}</div>

                    </div>

                </div>
                <!-- /.location -->

            </div>
            <!-- /.card-body -->

        </div>
        <!-- /.card -->

    </div>
    <!-- /.col -->
</template>

<style lang="scss" scoped>
.card-body {

    a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    .date {
        font-weight: bold;
        font-size: 0.85rem;
        color: #808080;
        text-transform: uppercase;
    }

    .location {
        color: #808080;
        font-size: 0.75rem;

        svg {
            filter: invert(55%) sepia(0%) saturate(69%) hue-rotate(225deg) brightness(91%) contrast(86%);
        }
    }
}
</style>