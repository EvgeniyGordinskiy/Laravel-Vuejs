'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _auth = require('./../../../services/auth');

var _auth2 = _interopRequireDefault(_auth);

var _forms = require('./../../../utils/forms/forms');

var _forms2 = _interopRequireDefault(_forms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ============
 * Reset password
 * ============
 *
 * This is the page for reseting the user password.
 */

exports.default = {
  data: function data() {
    return {
      form: new _forms2.default({
        email: {
          value: '',
          type: 'email'
        }
      })
    };
  },


  methods: {
    /**
     * Sends the reset password link.
     */
    send: function send() {
      var _this = this;

      this.form.loading = true;
      _auth2.default.resetPassword(this.form.data()).then(function () {
        _this.form.loading = false;
        _this.form.email = '';
        _this.form.successMessage = _this.$t('static.resetPassword.successMessage');
      }).catch(function (errors) {
        _this.form.loading = false;
        _this.form.recordErrors(errors);
      });
    }
  },

  components: {
    VForm: require('./../../../components/form/form.vue'),
    VLayout: require('./../../../layouts/user/user.vue')
  }
};

//# sourceMappingURL=resetPassword-compiled.js.map