<script>
export default {
    name: 'AppNavItem',
    props: ['link']
}
</script>

<template>
    <li class="nav-item">

        <a class="nav-link d-flex align-items-center gap-1" href="#">

            <span>{{ link }}</span>

            <svg class="chevron_link" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>

        </a>
        <!-- /.nav-link -->

    </li>
    <!-- /.nav-item -->
</template>

<style lang="scss" scoped>
nav {
    height: 80px;

    a {
        color: black
    }

    .chevron_link {
        font-size: 0.5rem;
        margin-top: 0.25rem;
    }


    svg {
        filter: invert(16%) sepia(2%) saturate(5%) hue-rotate(333deg) brightness(97%) contrast(88%);
    }
}
</style>