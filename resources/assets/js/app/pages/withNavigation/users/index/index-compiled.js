'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _vuex = require('vuex');

var _store = require('./../../../../store');

var _store2 = _interopRequireDefault(_store);

var _users = require('./../../../../services/users');

var _users2 = _interopRequireDefault(_users);

var _forms = require('./../../../../utils/forms/forms');

var _forms2 = _interopRequireDefault(_forms);

var _form = require('./../../../../components/form/form.vue');

var _form2 = _interopRequireDefault(_form);

var _card = require('./../../../../components/card/card.vue');

var _card2 = _interopRequireDefault(_card);

var _modalForm = require('./../../../../components/modalForm/modalForm.vue');

var _modalForm2 = _interopRequireDefault(_modalForm);

var _timeZones = require('./../../../../mixins/timeZones');

var _timeZones2 = _interopRequireDefault(_timeZones);

var _accountSetup = require('./../../../../transformers/custom/accountSetup');

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
            }),
            editForm: new _forms2.default({
                firstName: {
                    value: '',
                    type: 'text',
                    placeholder: 'First Name'
                },
                lastName: {
                    value: '',
                    type: 'text',
                    placeholder: 'Last Name'
                },
                email: {
                    value: '',
                    type: 'email',
                    placeholder: 'Email'
                },
                timeZone: {
                    value: '',
                    type: 'select'
                }
            }),
            loading: false,
            showModalEdit: false,
            showModalCreate: true,
            user: {},
            titleEdit: 'Edit User',
            titleCreate: 'Create User',
            dialogFormVisible: false
        };
    },


    methods: {
        currentUser: function currentUser(user) {
            return user.userId === this.account.userId;
        },
        openFormEdit: function openFormEdit(user) {
            this.user = user;
            this.showModalEdit = true;
            this.editForm.resetFields();
            this.editForm.assignData(user);
        },
        cancelFormCreate: function cancelFormCreate() {
            this.showModalCreate = false;
        },
        cancelFormEdit: function cancelFormEdit() {
            this.showModalEdit = false;
        },
        openFormCreate: function openFormCreate() {
            this.showModalCreate = true;
            console.log(this.showModalCreate);
        },
        all: function all(page, limit) {
            var _this = this;

            if (!this.loading) {
                this.loading = true;
                // eslint-disable-next-line
                _users2.default.items(page, limit).then(function (users) {
                    _this.loading = false;
                }).catch(function () {
                    _this.loading = true;
                });
            };
        },

        /**
         * This method will be called when saving the form.
         */
        register: function register() {
            var _this2 = this;

            this.form.loading = true;
            var user = _accountSetup2.default.send(this.form.data());
            _users2.default.store(user).then(function () {
                _this2.showModalCreate = false;
                _this2.form.resetFields();
                _this2.all(1, 50);
                _this2.loading = false;
            }).catch(function (errors) {
                _this2.form.loading = true;
                _this2.form.recordErrors(errors);
            });
        },


        /**
         * This method will be called to delete the user.
         */
        update: function update() {
            var _this3 = this;

            this.loading = false;
            this.form.loading = true;
            var userEdit = _accountSetup2.default.send(this.editForm.data());
            _users2.default.update(this.user.userId, userEdit).then(function () {
                _this3.showModalEdit = false;
                _this3.all(1, 50);
                _this3.loading = false;
            }).catch(function (errors) {
                _this3.editForm.loading = true;
                _this3.editForm.recordErrors(errors);
            });
        },
        openConfirm: function openConfirm(user) {
            this.dialogFormVisible = true;
            this.user = user;
        },


        /**
         * This method will be called to delete the user.
         */
        destroy: function destroy() {
            var _this4 = this;

            this.loading = false;
            this.dialogFormVisible = false;
            console.log(this.$confirm);
            _users2.default.destroy(this.user.userId).then(function () {
                _this4.all(1, 50);
                _this4.loading = false;
            }).catch(function (errors) {
                console.log(errors);
            });
        }
    },

    computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)({
        users: 'users',
        account: 'account'
    })),

    created: function created() {

        this.editForm.setOptions('timeZone', this.timeZones);
        this.form.setOptions('timeZone', this.timeZones);
    },
    mounted: function mounted() {
        this.all(1, 50);
    },
    destroyed: function destroyed() {
        _store2.default.dispatch('resetUsers');
    },


    components: {
        cardv: _card2.default,
        modalFormv: _modalForm2.default,
        formv: _form2.default
    },

    mixins: [_timeZones2.default]

}; /* ============
    * Home Index
    * ============
    *
    * This is the home page.
    */

//# sourceMappingURL=index-compiled.js.map