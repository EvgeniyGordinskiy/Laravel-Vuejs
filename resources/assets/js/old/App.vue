<template>
    <router-view></router-view>
</template>
<script>
    import store from './app/store';
    import { router } from './bootstrap';

    export default {
    data() {
        return {
           loading: 'asd',
        };
    },

        /**
         * The Vuex store
         */
        store,

        /**
         * The router
         */
        router,

}
</script>