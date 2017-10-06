import Vue from 'vue';
import accountTransformer from './../../transformers/account';
import store from './../../store';

/**
 * When the request succeeds
 */
const success = (account, resolve) => {
    store.dispatch('login');
    //eslint-disable-next-line
    account = accountTransformer.fetch(account);
    store.dispatch('getAccount', account);
    console.log(account);
    Vue.router.push({
        name: 'users',
    });
    resolve(account);
};

/**
 * When the request fails
 */
const failed = (error, reject) => {
  if (error.response === undefined) {
    return reject({ error: ['Invalid credentials'] });
  }
  return reject(error.response.data);
};

export default user => (
  new Promise((resolve, reject) => {
    Vue.$http.post('/auth', user)
             .then((response) => {
               success(response.data, resolve);
             })
             .catch((error) => {
                 failed(error, reject);
             });
  })
);
