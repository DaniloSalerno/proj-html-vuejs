import { reactive } from "vue";

export const state = reactive({

    nav_links: ['Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop'],

    cardCoaching: [
        {
            title: 'Online Coures',
            content: ' Online art coasching now offers you s very powerful way to redesign you artist mind.',
            imgPath: 'artist-box-image-01.png',
            id: 1
        },
        {
            title: 'One to One',
            content: 'Gettin the necessary clarity about the current state to help you imrove your ability.',
            imgPath: 'artist-box-image-02.png',
            id: 2
        },
        {
            title: 'Anywhere',
            content: 'Access to valurable and portable program which allow you to setup and live anywhere you want.',
            imgPath: 'artist-box-image-03.png',
            id: 3
        },
        {
            title: 'On Time',
            content: "Punctually is our top priority because it's an essential criteria to assess a program quality.",
            imgPath: 'artist-box-image-04.png',
            id: 4
        },
    ]
})