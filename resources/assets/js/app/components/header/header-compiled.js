'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _auth = require('./../../services/auth');

var _auth2 = _interopRequireDefault(_auth);

var _vuex = require('vuex');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ============
 * Dashboard menu
 * ============
 *
 * This is the header component.
 */

exports.default = {

  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)({
    account: 'account'
  }), {
    username: function username() {
      if (this.account.firstName !== undefined) {
        return this.account.firstName + ' ' + this.account.lastName;
      }
      return '';
    },
    email: function email() {
      if (this.account.email !== undefined) {
        return '' + this.account.email;
      }
      return '';
    },
    avatar: function avatar() {
      var avatar = this.account.avatar;
      if (avatar !== undefined && avatar.url !== undefined) {
        return avatar.url;
      }
      return false;
    }
  }),

  mounted: function mounted() {},


  methods: {
    /**
     * This method will logout the user.
     */
    logout: function logout() {
      _auth2.default.logout();
    }
  }
};

//# sourceMappingURL=header-compiled.js.map