'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _auth = require('./../../../services/auth');

var _auth2 = _interopRequireDefault(_auth);

var _forms = require('./../../../utils/forms/forms');

var _forms2 = _interopRequireDefault(_forms);

var _form = require('./../../../components/form/form.vue');

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      form: new _forms2.default({
        email: {
          value: '',
          type: 'email',
          label: 'Email',
          placeholder: 'Email'
        },
        password: {
          value: '',
          type: 'password',
          label: 'Password',
          placeholder: 'Password'
        }
      })
    };
  },


  methods: {
    /**
     * Logs the user in
     */
    login: function login() {
      var _this = this;

      this.form.loading = true;
      _auth2.default.login(this.form.data()).catch(function (errors) {
        _this.form.loading = false;
        _this.form.recordErrors(errors);
      });
    }
  },

  components: {
    formv: _form2.default
  }
}; /* ============
    * Login User
    * ============
    *
    * This is the page for logging user in.
    */

//# sourceMappingURL=login-compiled.js.map