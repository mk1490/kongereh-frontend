<template>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'TheLayoutFooter',
    components: {},
    data: () => ({
        icons: [
            'mdi-home',
            'mdi-email',
            'mdi-calendar',
            'ri-close-line',
        ],
    }),
    computed: {
        ...mapGetters([
            'footerShow',
        ]),
    },
    methods: {},
};
</script>
