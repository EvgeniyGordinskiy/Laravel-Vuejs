"use strict";

var _keys3 = require("babel-runtime/core-js/object/keys");

var _keys4 = _interopRequireDefault2(_keys3);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

webpackJsonp([0], {

  /***/230:
  /***/function _(module, exports, __webpack_require__) {

    var disposed = false;
    var normalizeComponent = __webpack_require__(17);
    /* script */
    var __vue_script__ = __webpack_require__(409);
    /* template */
    var __vue_template__ = __webpack_require__(429);
    /* styles */
    var __vue_styles__ = null;
    /* scopeId */
    var __vue_scopeId__ = null;
    /* moduleIdentifier (server only) */
    var __vue_module_identifier__ = null;
    var Component = normalizeComponent(__vue_script__, __vue_template__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
    Component.options.__file = "resources/assets/js/app/pages/withNavigation/users/index/index.vue";
    if (Component.esModule && (0, _keys4.default)(Component.esModule).some(function (key) {
      return key !== "default" && key.substr(0, 2) !== "__";
    })) {
      console.error("named exports are not supported in *.vue files.");
    }
    if (Component.options.functional) {
      console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.");
    }

    /* hot reload */
    if (false) {
      (function () {
        var hotAPI = require("vue-hot-reload-api");
        hotAPI.install(require("vue"), false);
        if (!hotAPI.compatible) return;
        module.hot.accept();
        if (!module.hot.data) {
          hotAPI.createRecord("data-v-702d3486", Component.options);
        } else {
          hotAPI.reload("data-v-702d3486", Component.options);
        }
        module.hot.dispose(function (data) {
          disposed = true;
        });
      })();
    }

    module.exports = Component.exports;

    /***/
  },

  /***/231:
  /***/function _(module, exports, __webpack_require__) {

    var disposed = false;
    var normalizeComponent = __webpack_require__(17);
    /* script */
    var __vue_script__ = __webpack_require__(430);
    /* template */
    var __vue_template__ = __webpack_require__(442);
    /* styles */
    var __vue_styles__ = null;
    /* scopeId */
    var __vue_scopeId__ = null;
    /* moduleIdentifier (server only) */
    var __vue_module_identifier__ = null;
    var Component = normalizeComponent(__vue_script__, __vue_template__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
    Component.options.__file = "resources/assets/js/app/pages/withNavigation/navigation.vue";
    if (Component.esModule && (0, _keys4.default)(Component.esModule).some(function (key) {
      return key !== "default" && key.substr(0, 2) !== "__";
    })) {
      console.error("named exports are not supported in *.vue files.");
    }
    if (Component.options.functional) {
      console.error("[vue-loader] navigation.vue: functional components are not supported with templates, they should use render functions.");
    }

    /* hot reload */
    if (false) {
      (function () {
        var hotAPI = require("vue-hot-reload-api");
        hotAPI.install(require("vue"), false);
        if (!hotAPI.compatible) return;
        module.hot.accept();
        if (!module.hot.data) {
          hotAPI.createRecord("data-v-af220796", Component.options);
        } else {
          hotAPI.reload("data-v-af220796", Component.options);
        }
        module.hot.dispose(function (data) {
          disposed = true;
        });
      })();
    }

    module.exports = Component.exports;

    /***/
  },

  /***/409:
  /***/function _(module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _extends2 = __webpack_require__(228);

    var _extends3 = _interopRequireDefault(_extends2);

    var _vuex = __webpack_require__(64);

    var _store = __webpack_require__(13);

    var _store2 = _interopRequireDefault(_store);

    var _users = __webpack_require__(410);

    var _users2 = _interopRequireDefault(_users);

    var _forms = __webpack_require__(73);

    var _forms2 = _interopRequireDefault(_forms);

    var _form = __webpack_require__(66);

    var _form2 = _interopRequireDefault(_form);

    var _card = __webpack_require__(418);

    var _card2 = _interopRequireDefault(_card);

    var _modalForm = __webpack_require__(424);

    var _modalForm2 = _interopRequireDefault(_modalForm);

    var _timeZones = __webpack_require__(229);

    var _timeZones2 = _interopRequireDefault(_timeZones);

    var _accountSetup = __webpack_require__(72);

    var _accountSetup2 = _interopRequireDefault(_accountSetup);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

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

    /***/
  },

  /***/410:
  /***/function _(module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _all = __webpack_require__(411);

    var _all2 = _interopRequireDefault(_all);

    var _destroy = __webpack_require__(412);

    var _destroy2 = _interopRequireDefault(_destroy);

    var _store = __webpack_require__(413);

    var _store2 = _interopRequireDefault(_store);

    var _update = __webpack_require__(414);

    var _update2 = _interopRequireDefault(_update);

    var _show = __webpack_require__(415);

    var _show2 = _interopRequireDefault(_show);

    var _items = __webpack_require__(416);

    var _items2 = _interopRequireDefault(_items);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

    exports.default = {
      all: _all2.default,
      destroy: _destroy2.default,
      store: _store2.default,
      update: _update2.default,
      show: _show2.default,
      items: _items2.default
    };

    /***/
  },

  /***/411:
  /***/function _(module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _promise = __webpack_require__(18);

    var _promise2 = _interopRequireDefault(_promise);

    var _vue = __webpack_require__(1);

    var _vue2 = _interopRequireDefault(_vue);

    var _store = __webpack_require__(13);

    var _store2 = _interopRequireDefault(_store);

    var _account = __webpack_require__(227);

    var _account2 = _interopRequireDefault(_account);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

    var success = function success(_ref, resolve) {
      var data = _ref.data;

      var clients = _account2.default.fetchCollection(data.data);

      _store2.default.dispatch('fetchAllClients', clients);
      resolve(clients);
    };

    var failed = function failed(error, reject) {
      return reject(error);
    };

    exports.default = function () {
      return new _promise2.default(function (resolve, reject) {
        _vue2.default.$http.get('/users').then(function (response) {
          success(response, resolve);
        }).catch(function (error) {
          failed(error, reject);
        });
      });
    };

    /***/
  },

  /***/412:
  /***/function _(module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _promise = __webpack_require__(18);

    var _promise2 = _interopRequireDefault(_promise);

    var _vue = __webpack_require__(1);

    var _vue2 = _interopRequireDefault(_vue);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

    var success = function success(response, resolve) {
      resolve(response);
    };

    var failed = function failed(error, reject) {
      reject(error);
    };

    exports.default = function (id) {
      return new _promise2.default(function (resolve, reject) {
        _vue2.default.$http.delete('/users/' + id).then(function (response) {
          success(response, resolve);
        }).catch(function (error) {
          failed(error, reject);
        });
      });
    };

    /***/
  },

  /***/413:
  /***/function _(module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _promise = __webpack_require__(18);

    var _promise2 = _interopRequireDefault(_promise);

    var _keys = __webpack_require__(23);

    var _keys2 = _interopRequireDefault(_keys);

    var _vue = __webpack_require__(1);

    var _vue2 = _interopRequireDefault(_vue);

    var _account = __webpack_require__(227);

    var _account2 = _interopRequireDefault(_account);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

    var success = function success(resolve) {
      _vue2.default.router.push({
        name: 'users'
      });
      resolve();
    };

    var failed = function failed(errors, reject) {
      reject(_account2.default.fetch(errors));
    };

    exports.default = function (user) {
      var data = new FormData();
      (0, _keys2.default)(user).map(function (k) {
        data.append(k, user[k]);
        return null;
      });

      return new _promise2.default(function (resolve, reject) {
        _vue2.default.$http.request({
          url: 'users',
          data: data,
          method: 'post',
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(function () {
          success(resolve);
        }).catch(function (error) {
          failed(error.response.data, reject);
        });
      });
    };

    /***/
  },

  /***/414:
  /***/function _(module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _promise = __webpack_require__(18);

    var _promise2 = _interopRequireDefault(_promise);

    var _keys = __webpack_require__(23);

    var _keys2 = _interopRequireDefault(_keys);

    var _vue = __webpack_require__(1);

    var _vue2 = _interopRequireDefault(_vue);

    var _account = __webpack_require__(227);

    var _account2 = _interopRequireDefault(_account);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

    var success = function success(client, resolve) {
      resolve(_account2.default.fetch(client));
    };

    var failed = function failed(errors, reject) {
      reject(_account2.default.fetch(errors));
    };

    exports.default = function (id, client) {
      var data = new FormData();
      (0, _keys2.default)(client).map(function (k) {
        data.append(k, client[k]);
        return null;
      });
      return new _promise2.default(function (resolve, reject) {
        _vue2.default.$http.request({
          url: '/users/' + id,
          data: data,
          method: 'post',
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(function (response) {
          success(response.data, resolve);
        }).catch(function (error) {
          failed(error.response.data, reject);
        });
      });
    };

    /***/
  },

  /***/415:
  /***/function _(module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _promise = __webpack_require__(18);

    var _promise2 = _interopRequireDefault(_promise);

    var _vue = __webpack_require__(1);

    var _vue2 = _interopRequireDefault(_vue);

    var _account = __webpack_require__(227);

    var _account2 = _interopRequireDefault(_account);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

    var success = function success(_ref, resolve) {
      var data = _ref.data;
      return resolve(_account2.default.fetch(data));
    };

    var failed = function failed() {};

    exports.default = function (id) {
      return new _promise2.default(function (resolve, reject) {
        _vue2.default.$http.get('/users/' + id).then(function (response) {
          success(response, resolve);
        }).catch(function (error) {
          failed(error, reject);
        });
      });
    };

    /***/
  },

  /***/416:
  /***/function _(module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _promise = __webpack_require__(18);

    var _promise2 = _interopRequireDefault(_promise);

    var _vue = __webpack_require__(1);

    var _vue2 = _interopRequireDefault(_vue);

    var _store = __webpack_require__(13);

    var _store2 = _interopRequireDefault(_store);

    var _account = __webpack_require__(227);

    var _account2 = _interopRequireDefault(_account);

    var _pagination = __webpack_require__(417);

    var _pagination2 = _interopRequireDefault(_pagination);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

    /* eslint no-console: ["error", { allow: ["log", "error"] }] */
    var success = function success(_ref, resolve) {
      var data = _ref.data;

      var users = _account2.default.fetchCollection(data.data);
      var pagination = _pagination2.default.fetch(data.pagination);
      _store2.default.dispatch('fetchUsers', { users: users, pagination: pagination });
      resolve({ users: users, pagination: pagination });
    };

    var failed = function failed(error, reject) {
      return reject(error);
    };

    exports.default = function () {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

      var url = '/users?page=' + page + '&limit=' + limit;

      return new _promise2.default(function (resolve, reject) {
        _vue2.default.$http.get(url).then(function (response) {
          success(response, resolve);
        }).catch(function (error) {
          failed(error, reject);
        });
      });
    };

    /***/
  },

  /***/417:
  /***/function _(module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _getPrototypeOf = __webpack_require__(68);

    var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

    var _classCallCheck2 = __webpack_require__(24);

    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

    var _createClass2 = __webpack_require__(25);

    var _createClass3 = _interopRequireDefault(_createClass2);

    var _possibleConstructorReturn2 = __webpack_require__(69);

    var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

    var _inherits2 = __webpack_require__(70);

    var _inherits3 = _interopRequireDefault(_inherits2);

    var _transformer = __webpack_require__(71);

    var _transformer2 = _interopRequireDefault(_transformer);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

    var PaginationTransformer = function (_Transformer) {
      (0, _inherits3.default)(PaginationTransformer, _Transformer);

      function PaginationTransformer() {
        (0, _classCallCheck3.default)(this, PaginationTransformer);
        return (0, _possibleConstructorReturn3.default)(this, (PaginationTransformer.__proto__ || (0, _getPrototypeOf2.default)(PaginationTransformer)).apply(this, arguments));
      }

      (0, _createClass3.default)(PaginationTransformer, null, [{
        key: 'fetch',

        /**
        * Method used to transform the fetched pagination
        *
        * @param pagination The fetched pagination
        *
        * @returns {Object} The transformed pagination
        */
        value: function fetch(pagination) {
          return {
            currentPage: pagination.current_page,
            lastPage: pagination.last_page,
            limit: pagination.limit,
            totalCount: pagination.total_count,
            counters: pagination.counters
          };
        }

        /**
        * Method used to transform the pagination which will be send
        *
        * @param pagination The pagination to be send
        *
        * @returns {Object} The transformed pagination
        */

      }, {
        key: 'send',
        value: function send(pagination) {
          return {
            current_page: pagination.currentPage,
            last_page: pagination.lastPage,
            limit: pagination.limit,
            total_count: pagination.totalCount
          };
        }
      }]);
      return PaginationTransformer;
    }(_transformer2.default); /* ============
                               * Pagination Transformer
                               * ============
                               *
                               * The transformer for the pagination.
                               */

    exports.default = PaginationTransformer;

    /***/
  },

  /***/418:
  /***/function _(module, exports, __webpack_require__) {

    var disposed = false;
    function injectStyle(ssrContext) {
      if (disposed) return;
      __webpack_require__(419);
    }
    var normalizeComponent = __webpack_require__(17);
    /* script */
    var __vue_script__ = __webpack_require__(422);
    /* template */
    var __vue_template__ = __webpack_require__(423);
    /* styles */
    var __vue_styles__ = injectStyle;
    /* scopeId */
    var __vue_scopeId__ = null;
    /* moduleIdentifier (server only) */
    var __vue_module_identifier__ = null;
    var Component = normalizeComponent(__vue_script__, __vue_template__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
    Component.options.__file = "resources/assets/js/app/components/card/card.vue";
    if (Component.esModule && (0, _keys4.default)(Component.esModule).some(function (key) {
      return key !== "default" && key.substr(0, 2) !== "__";
    })) {
      console.error("named exports are not supported in *.vue files.");
    }
    if (Component.options.functional) {
      console.error("[vue-loader] card.vue: functional components are not supported with templates, they should use render functions.");
    }

    /* hot reload */
    if (false) {
      (function () {
        var hotAPI = require("vue-hot-reload-api");
        hotAPI.install(require("vue"), false);
        if (!hotAPI.compatible) return;
        module.hot.accept();
        if (!module.hot.data) {
          hotAPI.createRecord("data-v-de3526e2", Component.options);
        } else {
          hotAPI.reload("data-v-de3526e2", Component.options);
        }
        module.hot.dispose(function (data) {
          disposed = true;
        });
      })();
    }

    module.exports = Component.exports;

    /***/
  },

  /***/419:
  /***/function _(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag

    // load the styles
    var content = __webpack_require__(420);
    if (typeof content === 'string') content = [[module.i, content, '']];
    if (content.locals) module.exports = content.locals;
    // add the styles to the DOM
    var update = __webpack_require__(41)("171c6e66", content, false);
    // Hot Module Replacement
    if (false) {
      // When the styles change, update the <style> tags
      if (!content.locals) {
        module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-de3526e2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/stylus-loader/index.js!./card.styl", function () {
          var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-de3526e2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/stylus-loader/index.js!./card.styl");
          if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
          update(newContent);
        });
      }
      // When the module is disposed, remove the <style> tags
      module.hot.dispose(function () {
        update();
      });
    }

    /***/
  },

  /***/420:
  /***/function _(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(30)(undefined);
    // imports


    // module
    exports.push([module.i, "\n.el-card {\n  background: transparent url(" + __webpack_require__(421) + ");\n  border: 0px;\n  box-shadow: none;\n  cursor: pointer;\n  color: #4c4c4c;\n  margin: 2.5px;\n  width: 100%;\n  -webkit-transition-property: all; /* Safari */\n  -webkit-transition-duration: 0.5s; /* Safari */\n  transition-property: all;\n  transition-duration: 0.5s;\n}\n.el-card:hover {\n  background: #0b5570;\n  background-image: none;\n  color: #fff;\n}\n.el-card:hover .cardTitle {\n  color: #fff;\n}\n.el-card:hover .cardinnerBox {\n  background-color: #0a4960;\n}\n.el-card hr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccdcd6;\n  margin: 0 0 2rem 0;\n  padding: 0;\n  background: none;\n}\n.cardTitle {\n  font-size: 1.79rem;\n  margin-top: 0px;\n  margin-bottom: 5px;\n  font-family: 'robotolight', sans-serif;\n  word-break: break-word;\n}\n.cardLabel {\n  font-size: 1.143rem;\n}\n.cardLabel.cardLabel--small {\n  font-size: 1rem;\n}\n.cardContent {\n  font-size: 1.57rem;\n  font-family: 'robotobold', sans-serif;\n}\n.cardContent.cardContent--small {\n  font-size: 1rem;\n}\n.cardBadge {\n  margin-left: 10px;\n  font-size: 0.71rem;\n  color: #fff;\n  text-transform: uppercase;\n  text-align: center;\n  padding: 0.14rem 1.07rem;\n  border-radius: 3px;\n  background: #1bbc9b;\n}\n.cardinnerBox {\n  background: #ccdcd6;\n  padding: 10px 15px;\n  border-radius: 3px;\n  margin-top: 10px;\n}\n.cardinnerBox>* {\n  margin-bottom: 10px;\n}\n.cardinnerBox>*:last-child {\n  margin-bottom: 0;\n}\n.cardinnerBox i,\n.optionBox i {\n  display: inline-block;\n  width: 1.07rem;\n  text-align: center;\n  font-size: 1.143rem;\n}\n.card-yellow {\n  background-color: #fed833;\n}\n.card-red {\n  background-color: #fb7245;\n}\n.card-green {\n  background-color: #a4ce62;\n}\n@media (min-width: 768px) {\n.el-card {\n    width: calc(50% - (2.5px * 2));\n}\n}\n@media (min-width: 1248px) {\n.el-card {\n    width: calc(25% - (2.5px * 2));\n}\n}\n", ""]);

    // exports


    /***/
  },

  /***/421:
  /***/function _(module, exports) {

    module.exports = "/images/cardbg.png?48e7372cb2603c983c2c8337f5e12185";

    /***/
  },

  /***/422:
  /***/function _(module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = {};

    /***/
  },

  /***/423:
  /***/function _(module, exports, __webpack_require__) {

    var render = function render() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("el-card", { staticClass: "box-card" }, [_vm._t("default")], 2);
    };
    var staticRenderFns = [];
    render._withStripped = true;
    module.exports = { render: render, staticRenderFns: staticRenderFns };
    if (false) {
      module.hot.accept();
      if (module.hot.data) {
        require("vue-hot-reload-api").rerender("data-v-de3526e2", module.exports);
      }
    }

    /***/
  },

  /***/424:
  /***/function _(module, exports, __webpack_require__) {

    var disposed = false;
    function injectStyle(ssrContext) {
      if (disposed) return;
      __webpack_require__(425);
    }
    var normalizeComponent = __webpack_require__(17);
    /* script */
    var __vue_script__ = __webpack_require__(427);
    /* template */
    var __vue_template__ = __webpack_require__(428);
    /* styles */
    var __vue_styles__ = injectStyle;
    /* scopeId */
    var __vue_scopeId__ = "data-v-3fcae373";
    /* moduleIdentifier (server only) */
    var __vue_module_identifier__ = null;
    var Component = normalizeComponent(__vue_script__, __vue_template__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
    Component.options.__file = "resources/assets/js/app/components/modalForm/modalForm.vue";
    if (Component.esModule && (0, _keys4.default)(Component.esModule).some(function (key) {
      return key !== "default" && key.substr(0, 2) !== "__";
    })) {
      console.error("named exports are not supported in *.vue files.");
    }
    if (Component.options.functional) {
      console.error("[vue-loader] modalForm.vue: functional components are not supported with templates, they should use render functions.");
    }

    /* hot reload */
    if (false) {
      (function () {
        var hotAPI = require("vue-hot-reload-api");
        hotAPI.install(require("vue"), false);
        if (!hotAPI.compatible) return;
        module.hot.accept();
        if (!module.hot.data) {
          hotAPI.createRecord("data-v-3fcae373", Component.options);
        } else {
          hotAPI.reload("data-v-3fcae373", Component.options);
        }
        module.hot.dispose(function (data) {
          disposed = true;
        });
      })();
    }

    module.exports = Component.exports;

    /***/
  },

  /***/425:
  /***/function _(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag

    // load the styles
    var content = __webpack_require__(426);
    if (typeof content === 'string') content = [[module.i, content, '']];
    if (content.locals) module.exports = content.locals;
    // add the styles to the DOM
    var update = __webpack_require__(41)("002ba22a", content, false);
    // Hot Module Replacement
    if (false) {
      // When the styles change, update the <style> tags
      if (!content.locals) {
        module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3fcae373\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/stylus-loader/index.js!./modalForm.styl", function () {
          var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3fcae373\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/stylus-loader/index.js!./modalForm.styl");
          if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
          update(newContent);
        });
      }
      // When the module is disposed, remove the <style> tags
      module.hot.dispose(function () {
        update();
      });
    }

    /***/
  },

  /***/426:
  /***/function _(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(30)(undefined);
    // imports


    // module
    exports.push([module.i, "\n.el-input-number[data-v-3fcae373] {\n  width: 100%;\n}\n.el-button+.el-button[data-v-3fcae373] {\n  margin-left: 0;\n}\n.el-button[data-v-3fcae373] {\n  margin-left: 4px;\n}\n", ""]);

    // exports


    /***/
  },

  /***/427:
  /***/function _(module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _form = __webpack_require__(66);

    var _form2 = _interopRequireDefault(_form);

    var _timeZones = __webpack_require__(229);

    var _timeZones2 = _interopRequireDefault(_timeZones);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

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

    /***/
  },

  /***/428:
  /***/function _(module, exports, __webpack_require__) {

    var render = function render() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("el-dialog", {
        attrs: {
          title: _vm.title,
          visible: _vm.show,
          size: "tiny",
          "before-close": _vm.cancelForm
        },
        on: {
          "update:visible": function updateVisible($event) {
            _vm.show = $event;
          }
        }
      }, [_c("formv", {
        attrs: { save: _vm.submit, form: _vm.form, "btn-text": "Save" }
      }), _vm._v(" "), _c("span", {
        staticClass: "dialog-footer",
        attrs: { slot: "footer" },
        slot: "footer"
      })], 1);
    };
    var staticRenderFns = [];
    render._withStripped = true;
    module.exports = { render: render, staticRenderFns: staticRenderFns };
    if (false) {
      module.hot.accept();
      if (module.hot.data) {
        require("vue-hot-reload-api").rerender("data-v-3fcae373", module.exports);
      }
    }

    /***/
  },

  /***/429:
  /***/function _(module, exports, __webpack_require__) {

    var render = function render() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "main-body" }, [_c("el-row", { attrs: { gutter: 10 } }, [_c("el-col", { attrs: { xs: 24, sm: 24, md: 8, lg: 8 } }, [_c("h1", { staticClass: "pageTitle" }, [_c("i", {
        staticClass: "fa fa-users",
        attrs: { "aria-hidden": "true" }
      }), _vm._v("Users")])]), _vm._v(" "), _c("el-col", { attrs: { xs: 24, sm: 24, md: 16, lg: 16 } }, [_c("div", { staticClass: "listOptions pull-right" }, [_c("el-button", {
        attrs: { size: "small" },
        on: { click: _vm.openFormCreate }
      }, [_c("span", { staticClass: "fa fa-sign-out" }), _vm._v("Create User")])], 1)])], 1), _vm._v(" "), _vm.loading ? _c("div", [_c("br"), _c("br")]) : _c("div", { staticClass: "flex stretch wrap" }, [_vm._l(_vm.users.items, function (user) {
        return _c("cardv", { key: user.id }, [!_vm.currentUser(user) ? _c("el-row", { staticClass: "pull-right" }, [_c("el-button", {
          attrs: { icon: "edit" },
          on: {
            click: function click($event) {
              _vm.openFormEdit(user);
            }
          }
        }), _vm._v(" "), _c("el-button", {
          attrs: { icon: "delete" },
          on: {
            click: function click($event) {
              _vm.openConfirm(user);
            }
          }
        })], 1) : _vm._e(), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("h2", { staticClass: "cardTitle" }, [_vm._v(" " + _vm._s(user.firstName) + " " + _vm._s(user.lastName) + " ")]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("label", { staticClass: "cardLabel" }, [_vm._v("Email: ")]), _c("span", { staticClass: "cardContent" }, [_vm._v(_vm._s(user.email))]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("label", { staticClass: "cardLabel" }, [_vm._v("TimeZone: ")]), _c("span", { staticClass: "cardContent" }, [_vm._v(_vm._s(user.timeZone))])], 1);
      }), _vm._v(" "), _c("modalFormv", {
        attrs: {
          show: _vm.showModalEdit,
          form: _vm.editForm,
          "cancel-form": _vm.cancelFormEdit,
          submit: _vm.update,
          title: _vm.titleEdit
        },
        on: {
          "update:form": function updateForm($event) {
            _vm.editForm = $event;
          }
        }
      }), _vm._v(" "), _c("modalFormv", {
        attrs: {
          show: _vm.showModalCreate,
          form: _vm.form,
          "cancel-form": _vm.cancelFormCreate,
          submit: _vm.register,
          title: _vm.titleCreate
        },
        on: {
          "update:form": function updateForm($event) {
            _vm.form = $event;
          }
        }
      }), _vm._v(" "), _c("el-dialog", {
        attrs: { visible: _vm.showModalCreate, size: "tiny" },
        on: {
          "update:visible": function updateVisible($event) {
            _vm.showModalCreate = $event;
          }
        }
      }, [_vm._v("\n      Are you sure to delete the user?\n  "), _c("span", {
        staticClass: "dialog-footer",
        attrs: { slot: "footer" },
        slot: "footer"
      }, [_c("el-button", {
        on: {
          click: function click($event) {
            _vm.dialogFormVisible = false;
          }
        }
      }, [_vm._v("Cancel")]), _vm._v(" "), _c("el-button", {
        attrs: { type: "primary" },
        on: { click: _vm.destroy }
      }, [_vm._v("Confirm")])], 1)])], 2)], 1);
    };
    var staticRenderFns = [];
    render._withStripped = true;
    module.exports = { render: render, staticRenderFns: staticRenderFns };
    if (false) {
      module.hot.accept();
      if (module.hot.data) {
        require("vue-hot-reload-api").rerender("data-v-702d3486", module.exports);
      }
    }

    /***/
  },

  /***/430:
  /***/function _(module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _user = __webpack_require__(431);

    var _user2 = _interopRequireDefault(_user);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

    exports.default = {
      components: {
        layoutv: _user2.default
      }
    }; /* ============
        * Navigation wrapper component.
        * ============
        *
        * This is the navigation wrapper component.
        */

    /***/
  },

  /***/431:
  /***/function _(module, exports, __webpack_require__) {

    var disposed = false;
    function injectStyle(ssrContext) {
      if (disposed) return;
      __webpack_require__(432);
    }
    var normalizeComponent = __webpack_require__(17);
    /* script */
    var __vue_script__ = __webpack_require__(434);
    /* template */
    var __vue_template__ = __webpack_require__(441);
    /* styles */
    var __vue_styles__ = injectStyle;
    /* scopeId */
    var __vue_scopeId__ = null;
    /* moduleIdentifier (server only) */
    var __vue_module_identifier__ = null;
    var Component = normalizeComponent(__vue_script__, __vue_template__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
    Component.options.__file = "resources/assets/js/app/layouts/user/user.vue";
    if (Component.esModule && (0, _keys4.default)(Component.esModule).some(function (key) {
      return key !== "default" && key.substr(0, 2) !== "__";
    })) {
      console.error("named exports are not supported in *.vue files.");
    }
    if (Component.options.functional) {
      console.error("[vue-loader] user.vue: functional components are not supported with templates, they should use render functions.");
    }

    /* hot reload */
    if (false) {
      (function () {
        var hotAPI = require("vue-hot-reload-api");
        hotAPI.install(require("vue"), false);
        if (!hotAPI.compatible) return;
        module.hot.accept();
        if (!module.hot.data) {
          hotAPI.createRecord("data-v-6f5f9180", Component.options);
        } else {
          hotAPI.reload("data-v-6f5f9180", Component.options);
        }
        module.hot.dispose(function (data) {
          disposed = true;
        });
      })();
    }

    module.exports = Component.exports;

    /***/
  },

  /***/432:
  /***/function _(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag

    // load the styles
    var content = __webpack_require__(433);
    if (typeof content === 'string') content = [[module.i, content, '']];
    if (content.locals) module.exports = content.locals;
    // add the styles to the DOM
    var update = __webpack_require__(41)("79ef635e", content, false);
    // Hot Module Replacement
    if (false) {
      // When the styles change, update the <style> tags
      if (!content.locals) {
        module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6f5f9180\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/stylus-loader/index.js!./user.styl", function () {
          var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6f5f9180\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/stylus-loader/index.js!./user.styl");
          if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
          update(newContent);
        });
      }
      // When the module is disposed, remove the <style> tags
      module.hot.dispose(function () {
        update();
      });
    }

    /***/
  },

  /***/433:
  /***/function _(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(30)(undefined);
    // imports


    // module
    exports.push([module.i, "\n.user-layout-wrapper {\n  height: 100vh;\n  overflow: hidden;\n}\n.main {\n  height: 100%;\n  overflow-y: auto;\n  width: calc(100% - 60px);\n  -webkit-transition-property: all; /* Safari */\n  -webkit-transition-duration: 0.5s; /* Safari */\n  transition-property: all;\n  transition-duration: 0.5s;\n}\n.expanded .main {\n  width: calc(100% - (60px + calc(80% - 60px)));\n}\n.main-content {\n  margin-right: 15px;\n  margin-left: 15px;\n}\n.main-content hr {\n  margin: 30px 0;\n  display: block;\n}\n.main-content h1,\n.main-content h3 {\n  font-family: 'roboto', sans-serif, sans-serif;\n  margin-top: 0px;\n  font-weight: 300;\n}\n.main-content h1 {\n  font-size: 30px;\n}\n.main-content h3 {\n  font-size: 20px;\n}\n.main-content h1.pageTitle {\n  font-size: 30px;\n  color: #fff;\n  text-shadow: 0px 1px 2px #3e3e3e;\n  font-family: 'robotolight', sans-serif;\n  font-weight: normal;\n  text-transform: uppercase;\n  margin-top: 0px;\n}\n.main-content .notification,\n.main-content .notification-error,\n.main-content .el-alert--error {\n  border: 1px solid #fcb322;\n  color: #c48405;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 12px;\n  display: inline-block;\n  background: #ffe8bb;\n  margin-bottom: 15px;\n  width: 100%;\n}\n.main-content .notification a,\n.main-content .notification-error a,\n.main-content .el-alert--error a {\n  text-decoration: none;\n  font-weight: bold;\n  color: #88b643;\n}\n.main-content .notification-error,\n.main-content .el-alert--error {\n  background: #ffd2ce;\n  border: 1px solid #ff6c60;\n  color: #bd1f13;\n}\n@media (min-width: 768px) {\n.main {\n    width: calc(100% - 80px);\n}\n.expanded .main {\n    width: calc(100% - (80px + 270px));\n}\n}\n", ""]);

    // exports


    /***/
  },

  /***/434:
  /***/function _(module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _vuex = __webpack_require__(64);

    var _auth = __webpack_require__(65);

    var _auth2 = _interopRequireDefault(_auth);

    var _header = __webpack_require__(435);

    var _header2 = _interopRequireDefault(_header);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

    exports.default = {
      data: function data() {
        return {};
      },

      methods: {
        logout: function logout() {
          _auth2.default.logout();
        }
      },
      components: {
        headerv: _header2.default
      }
    }; /* ============
        * User Layout
        * ============
        *
        * This is the layout for the authenticated user.
        */

    /***/
  },

  /***/435:
  /***/function _(module, exports, __webpack_require__) {

    var disposed = false;
    function injectStyle(ssrContext) {
      if (disposed) return;
      __webpack_require__(436);
    }
    var normalizeComponent = __webpack_require__(17);
    /* script */
    var __vue_script__ = __webpack_require__(438);
    /* template */
    var __vue_template__ = __webpack_require__(439);
    /* styles */
    var __vue_styles__ = injectStyle;
    /* scopeId */
    var __vue_scopeId__ = null;
    /* moduleIdentifier (server only) */
    var __vue_module_identifier__ = null;
    var Component = normalizeComponent(__vue_script__, __vue_template__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
    Component.options.__file = "resources/assets/js/app/components/header/header.vue";
    if (Component.esModule && (0, _keys4.default)(Component.esModule).some(function (key) {
      return key !== "default" && key.substr(0, 2) !== "__";
    })) {
      console.error("named exports are not supported in *.vue files.");
    }
    if (Component.options.functional) {
      console.error("[vue-loader] header.vue: functional components are not supported with templates, they should use render functions.");
    }

    /* hot reload */
    if (false) {
      (function () {
        var hotAPI = require("vue-hot-reload-api");
        hotAPI.install(require("vue"), false);
        if (!hotAPI.compatible) return;
        module.hot.accept();
        if (!module.hot.data) {
          hotAPI.createRecord("data-v-4928962f", Component.options);
        } else {
          hotAPI.reload("data-v-4928962f", Component.options);
        }
        module.hot.dispose(function (data) {
          disposed = true;
        });
      })();
    }

    module.exports = Component.exports;

    /***/
  },

  /***/436:
  /***/function _(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag

    // load the styles
    var content = __webpack_require__(437);
    if (typeof content === 'string') content = [[module.i, content, '']];
    if (content.locals) module.exports = content.locals;
    // add the styles to the DOM
    var update = __webpack_require__(41)("1d8e5baa", content, false);
    // Hot Module Replacement
    if (false) {
      // When the styles change, update the <style> tags
      if (!content.locals) {
        module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4928962f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/stylus-loader/index.js!./header.styl", function () {
          var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4928962f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/stylus-loader/index.js!./header.styl");
          if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
          update(newContent);
        });
      }
      // When the module is disposed, remove the <style> tags
      module.hot.dispose(function () {
        update();
      });
    }

    /***/
  },

  /***/437:
  /***/function _(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(30)(undefined);
    // imports


    // module
    exports.push([module.i, "\n.top-header {\n  background: #0b5570 none repeat scroll 0 0;\n  color: #fff;\n  padding: 1.07rem;\n  width: 100%;\n  z-index: 1;\n  justify-content: space-between;\n}\n.user-details,\n.top-menu {\n  width: 100%;\n}\n.top-menu {\n  text-align: center;\n  background: #3c7d87;\n}\n.top-menu .lang_ {\n  width: 110px;\n}\n.top-menu .top-menu_item {\n  font-size: 1.14rem;\n  border-left: 1px solid #0b5570;\n  padding: 0.7rem;\n}\n.top-menu .top-menu_item.lang_ {\n  padding: 0.2rem;\n}\n.top-menu a {\n  color: #fff;\n  text-decoration: none;\n}\n.top-menu ahover {\n  color: #1bbc9b;\n}\n.top-menu .el-select input {\n  background: none;\n  border: 0px;\n  color: #fff;\n  font-size: 1.14rem;\n}\n.top-menu .el-select input::-webkit-input-placeholder {\n/* Chrome/Opera/Safari */\n  color: #fff;\n}\n.top-menu .el-select input::-moz-placeholder {\n/* Firefox 19+ */\n  color: #fff;\n}\n.top-menu .el-select input:-ms-input-placeholder {\n/* IE 10+ */\n  color: #fff;\n}\n.top-menu .el-select input:-moz-placeholder {\n/* Firefox 18- */\n  color: #fff;\n}\n.user-details {\n  padding-bottom: 1.5rem;\n}\n.user-details .user-avatar {\n  border-radius: 50%;\n  display: inline-block;\n  height: 48px;\n  overflow: hidden;\n  width: 48px;\n  float: left;\n  margin-right: 25px;\n  margin-left: 25px;\n}\n.user-details .user-avatar img {\n  width: 50px;\n}\n.user-details .username {\n  font-size: 1.43rem;\n  text-transform: uppercase;\n  float: left;\n  line-height: 1.43rem;\n  font-family: 'robotoregular', sans-serif;\n  margin-top: 4px;\n  margin-right: 10px;\n}\n.user-details .username em {\n  font-style: normal !important;\n  font-size: 0.93rem;\n  padding-top: 6px;\n  text-transform: none;\n  display: block;\n  font-family: 'robotolight', sans-serif;\n  color: #92a8b3;\n  line-height: 1rem;\n}\n.user-details .userType {\n  float: left;\n  margin-top: 10px;\n}\n.userType {\n  text-transform: uppercase;\n  font-size: 0.93rem;\n  color: #fff;\n  line-height: 0.8rem;\n  padding: 5px 10px;\n  background: #ff6c60;\n  border-radius: 3px;\n}\n.logoutBtn {\n  margin-top: 10px;\n  padding: 8px;\n}\n@media (min-width: 768px) {\n.top-header {\n    padding: 1.07rem 0;\n}\n.user-details,\n  .top-menu {\n    width: auto;\n}\n.top-menu {\n    background: transparent;\n}\n.top-menu .top-menu_item {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.user-details {\n    padding-bottom: 0;\n}\n}\n", ""]);

    // exports


    /***/
  },

  /***/438:
  /***/function _(module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _extends2 = __webpack_require__(228);

    var _extends3 = _interopRequireDefault(_extends2);

    var _auth = __webpack_require__(65);

    var _auth2 = _interopRequireDefault(_auth);

    var _vuex = __webpack_require__(64);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

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

    /***/
  },

  /***/439:
  /***/function _(module, exports, __webpack_require__) {

    var render = function render() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("header", { staticClass: "flex wrap top-header" }, [_c("div", { staticClass: "user-details" }, [_c("div", { staticClass: "clearfix" }, [_vm._m(0), _vm._v(" "), _c("span", { staticClass: "username" }, [_vm._v(_vm._s(_vm.username)), _c("em", [_vm._v(_vm._s(_vm.email))])])])]), _vm._v(" "), _c("div", { staticClass: "flex justify-end stretch top-menu" }, [_c("el-button", {
        attrs: { size: "small" },
        on: {
          click: function click($event) {
            $event.preventDefault();
            _vm.logout($event);
          }
        }
      }, [_c("span", { staticClass: "fa fa-sign-out" }), _vm._v("Logout")])], 1)]);
    };
    var staticRenderFns = [function () {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("span", { staticClass: "user-avatar" }, [_c("img", {
        attrs: { src: __webpack_require__(440), alt: "" }
      })]);
    }];
    render._withStripped = true;
    module.exports = { render: render, staticRenderFns: staticRenderFns };
    if (false) {
      module.hot.accept();
      if (module.hot.data) {
        require("vue-hot-reload-api").rerender("data-v-4928962f", module.exports);
      }
    }

    /***/
  },

  /***/440:
  /***/function _(module, exports) {

    module.exports = "/images/avatar.jpg?effac02861947c47073fc57a6b563085";

    /***/
  },

  /***/441:
  /***/function _(module, exports, __webpack_require__) {

    var render = function render() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "flex user-layout-wrapper" }, [_c("main", { staticClass: "main" }, [_c("headerv"), _vm._v(" "), _c("div", { staticClass: "main-content" }, [_vm._t("default")], 2), _vm._v(" "), _c("footer", [_c("div", { staticClass: "footer-content" }, [_c("center", [_c("div", { staticClass: "logo" }, [_c("img", {
        attrs: {
          src: __webpack_require__(67),
          width: "130px"
        }
      })]), _vm._v("\n          © 2017 Test work about vue.\n          ")])], 1)])], 1)]);
    };
    var staticRenderFns = [];
    render._withStripped = true;
    module.exports = { render: render, staticRenderFns: staticRenderFns };
    if (false) {
      module.hot.accept();
      if (module.hot.data) {
        require("vue-hot-reload-api").rerender("data-v-6f5f9180", module.exports);
      }
    }

    /***/
  },

  /***/442:
  /***/function _(module, exports, __webpack_require__) {

    var render = function render() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("layoutv", [_c("router-view")], 1);
    };
    var staticRenderFns = [];
    render._withStripped = true;
    module.exports = { render: render, staticRenderFns: staticRenderFns };
    if (false) {
      module.hot.accept();
      if (module.hot.data) {
        require("vue-hot-reload-api").rerender("data-v-af220796", module.exports);
      }
    }

    /***/
  }

});

//# sourceMappingURL=users-compiled.js.map