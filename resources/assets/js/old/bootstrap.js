
window._ = require('lodash');
import Vue from 'vue';

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    require('bootstrap-sass');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

// let token = document.head.querySelector('meta[name="csrf-token"]');
//
// if (token) {
//     window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
// } else {
//     console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
// }

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });
/* ============
 * Vuex Router Sync
 * ============
 *
 * Effortlessly keep vue-Router and vuex store in sync.
 *
 * https://github.com/vuejs/vuex-router-sync/blob/master/README.md
 */
// eslint-disable-next-line
import VuexRouterSync from 'vuex-router-sync';
// eslint-disable-next-line
import store from './app/store';

// store.dispatch('checkAuthentication');
// store.dispatch('getAccount', {});

/* ============
 * Vue Router
 * ============
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 *
 * http://router.vuejs.org/en/index.html
 */
// eslint-disable-next-line
import VueRouter from 'vue-router';
// eslint-disable-next-line
import routes from './app/routes';
// eslint-disable-next-line
// import routeMidlleware from './app/route-middleware';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes,
});

// router.beforeEach(routeMidlleware.beforeEach);

VuexRouterSync.sync(store,router);

Vue.router = router;

/* ============
 * Element User Interface
 * ============
 *
 * Vue.js UI components.
 *
 * http://element.eleme.io/#/en-US
 */
// eslint-disable-next-line
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
    router,
};