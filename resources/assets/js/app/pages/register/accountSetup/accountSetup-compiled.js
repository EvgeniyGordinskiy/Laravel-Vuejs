'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _forms = require('./../../../utils/forms/forms');

var _forms2 = _interopRequireDefault(_forms);

var _form = require('./../../../components/form/form.vue');

var _form2 = _interopRequireDefault(_form);

var _auth = require('./../../../services/auth');

var _auth2 = _interopRequireDefault(_auth);

var _timeZones = require('./../../../mixins/timeZones');

var _timeZones2 = _interopRequireDefault(_timeZones);

var _accountSetup = require('./../../../transformers/custom/accountSetup');

var _accountSetup2 = _interopRequireDefault(_accountSetup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      form: new _forms2.default({
        firstName: {
          value: '',
          type: 'text',
          label: 'First Name',
          placeholder: 'First Name'
        },
        lastName: {
          value: '',
          type: 'text',
          label: 'Last Name',
          placeholder: 'Last Name'
        },
        email: {
          value: '',
          type: 'email',
          label: 'Email',
          placeholder: 'Email'
        },
        timeZone: {
          value: '',
          type: 'select',
          label: 'Time Zone',
          placeholder: 'select time zone'
        },
        password: {
          value: '',
          type: 'password',
          label: 'Password',
          placeholder: 'Password'
        },
        passwordConfirmation: {
          value: '',
          type: 'password',
          label: 'Confirm password',
          placeholder: 'Confirm password'
        }
      })
    };
  },


  methods: {

    /**
     * This method will be called when saving the form.
     */
    register: function register() {
      var _this = this;

      this.form.loading = true;
      var account = _accountSetup2.default.send(this.form.data());
      console.log(account);
      _auth2.default.register(account).catch(function (errors) {
        _this.form.loading = false;
        _this.form.recordErrors(errors);
      });
    }
  },

  created: function created() {
    this.form.setOptions('timeZone', this.timeZones);
  },


  components: {
    formv: _form2.default
  },
  mixins: [_timeZones2.default]
}; /* ============
    * Account Setup
    * ============
    *
    * This is the page for registering basic info.
    */

//# sourceMappingURL=accountSetup-compiled.js.map