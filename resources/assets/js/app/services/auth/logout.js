import Vue from 'vue';
import store from './../../store';

/**
 * When the request fails
 */
const failed = (error, reject) => {
  if (error.response === undefined) {
    return reject({ error: ['Invalid credentials'] });
  }
  return reject(error.response.data);
};


export default () => {
  new Promise((resolve, reject) => {
    Vue.$http.post('/auth/logout')
        .then((response) => {
        })
        .catch((error) => {
          console.log(error);
          failed(error, reject);
        });
  })
  store.dispatch('logout');
  Vue.router.push({
    name: 'home',
  });
};
