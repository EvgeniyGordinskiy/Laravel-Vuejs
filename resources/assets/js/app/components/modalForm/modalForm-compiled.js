'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = require('./../form/form.vue');

var _form2 = _interopRequireDefault(_form);

var _timeZones = require('./../../mixins/timeZones');

var _timeZones2 = _interopRequireDefault(_timeZones);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {};
  },

  props: {
    form: {
      type: Object,
      required: false
    },
    show: {
      type: Boolean,
      required: true,
      default: false
    },
    cancelForm: {
      type: Function
    },
    submit: {
      type: Function
    },
    title: {
      type: String,
      required: false
    }
  },

  methods: {
    onSubmit: function onSubmit() {
      console.log('submit');
    }
  },

  watch: {
    /**
     * Watches state update to inject on Forms class.
     *
     * @param  {Object} deposits    The all deposits list.
     */
    timeZones: function timeZones(deposits) {}
  },

  components: {
    formv: _form2.default
  },

  mixins: [_timeZones2.default]
};

//# sourceMappingURL=modalForm-compiled.js.map