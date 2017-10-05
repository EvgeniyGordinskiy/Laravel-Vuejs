/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file
 */

import Login from './pages/auth/login/login.vue';

// const Login = (resolve) => {
//     require.ensure(['./pages/auth/login/login.vue'], () => {
//         resolve(require('./pages/auth/login/login.vue'));
//     }, 'login');
// };

export default[
    // Login
    {
        path: '/login',
        name: 'login',
        components: {
            default: Login,
        }
    }
]