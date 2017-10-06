import Vue from 'vue';
import accountTransformer from './../../transformers/custom/accountSetup';
import accountService from './../account';
import store from './../../store';

const success = (account, resolve) => {
  store.dispatch('login');
  //eslint-disable-next-line
  account = accountTransformer.fetch(account);
  store.dispatch('getAccount', account);
  Vue.router.push({
    name: 'users',
  });
  resolve(account);
};

const failed = (errors, reject) => {
  reject(accountTransformer.fetch(errors));
};

export default user => (
  new Promise((resolve, reject) => {
    Vue.$http
      .post('auth/register', user)
      .then((response) => {
        success(response.data, resolve);
      })
      .catch((error) => {
        failed(error.response.data, reject);
      });
  })
);
