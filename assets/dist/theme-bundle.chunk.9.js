(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./assets/js/theme/account.js":
/*!************************************!*\
  !*** ./assets/js/theme/account.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Account; });
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _common_payment_method__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/payment-method */ "./assets/js/theme/common/payment-method.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");







function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Account = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Account, _PageManager);

  function Account(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.$state = $('[data-field-type="State"]');
    _this.$body = $('body');
    return _this;
  }

  var _proto = Account.prototype;

  _proto.onReady = function onReady() {
    var $editAccountForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_11__["classifyForm"])('form[data-edit-account-form]');
    var $addressForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_11__["classifyForm"])('form[data-address-form]');
    var $inboxForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_11__["classifyForm"])('form[data-inbox-form]');
    var $accountReturnForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_11__["classifyForm"])('[data-account-return-form]');
    var $paymentMethodForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_11__["classifyForm"])('form[data-payment-method-form]');
    var $reorderForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_11__["classifyForm"])('[data-account-reorder-form]');
    var $invoiceButton = $('[data-print-invoice]'); // Injected via template

    this.passwordRequirements = this.context.passwordRequirements; // Instantiates wish list JS

    _wishlist__WEBPACK_IMPORTED_MODULE_8__["default"].load(this.context);

    if ($editAccountForm.length) {
      this.registerEditAccountValidation($editAccountForm);

      if (this.$state.is('input')) {
        Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_11__["insertStateHiddenField"])(this.$state);
      }
    }

    if ($invoiceButton.length) {
      $invoiceButton.on('click', function () {
        var left = window.screen.availWidth / 2 - 450;
        var top = window.screen.availHeight / 2 - 320;
        var url = $invoiceButton.data('printInvoice');
        window.open(url, 'orderInvoice', "width=900,height=650,left=" + left + ",top=" + top + ",scrollbars=1");
      });
    }

    if ($addressForm.length) {
      this.initAddressFormValidation($addressForm);

      if (this.$state.is('input')) {
        Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_11__["insertStateHiddenField"])(this.$state);
      }
    }

    if ($inboxForm.length) {
      this.registerInboxValidation($inboxForm);
    }

    if ($accountReturnForm.length) {
      this.initAccountReturnFormValidation($accountReturnForm);
    }

    if ($paymentMethodForm.length) {
      this.initPaymentMethodFormValidation($paymentMethodForm);
    }

    if ($reorderForm.length) {
      this.initReorderForm($reorderForm);
    }

    this.bindDeleteAddress();
    this.bindDeletePaymentMethod();
  }
  /**
   * Binds a submit hook to ensure the customer receives a confirmation dialog before deleting an address
   */
  ;

  _proto.bindDeleteAddress = function bindDeleteAddress() {
    $('[data-delete-address]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deleteAddress');

      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };

  _proto.bindDeletePaymentMethod = function bindDeletePaymentMethod() {
    $('[data-delete-payment-method]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deletePaymentMethod');

      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };

  _proto.initReorderForm = function initReorderForm($reorderForm) {
    var _this2 = this;

    $reorderForm.on('submit', function (event) {
      var $productReorderCheckboxes = $('.account-listItem .form-checkbox:checked');
      var submitForm = false;
      $reorderForm.find('[name^="reorderitem"]').remove();
      $productReorderCheckboxes.each(function (index, productCheckbox) {
        var productId = $(productCheckbox).val();
        var $input = $('<input>', {
          type: 'hidden',
          name: "reorderitem[" + productId + "]",
          value: '1'
        });
        submitForm = true;
        $reorderForm.append($input);
      });

      if (!submitForm) {
        event.preventDefault();
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
          text: _this2.context.selectItem,
          type: 'error'
        });
      }
    });
  };

  _proto.initAddressFormValidation = function initAddressFormValidation($addressForm) {
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_9__["default"])($addressForm);
    var stateSelector = 'form[data-address-form] [data-field-type="State"]';
    var $stateElement = $(stateSelector);
    var addressValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_7__["default"])({
      submit: 'form[data-address-form] input[type="submit"]'
    });
    addressValidator.add(validationModel);

    if ($stateElement) {
      var $last; // Requests the states for a country with AJAX

      Object(_common_state_country__WEBPACK_IMPORTED_MODULE_10__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }

        var $field = $(field);

        if (addressValidator.getStatus($stateElement) !== 'undefined') {
          addressValidator.remove($stateElement);
        }

        if ($last) {
          addressValidator.remove($last);
        }

        if ($field.is('select')) {
          $last = field;
          _common_form_utils__WEBPACK_IMPORTED_MODULE_11__["Validators"].setStateCountryValidation(addressValidator, field);
        } else {
          _common_form_utils__WEBPACK_IMPORTED_MODULE_11__["Validators"].cleanUpStateValidation(field);
        }
      });
    }

    $addressForm.on('submit', function (event) {
      addressValidator.performCheck();

      if (addressValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  _proto.initAccountReturnFormValidation = function initAccountReturnFormValidation($accountReturnForm) {
    var errorMessage = $accountReturnForm.data('accountReturnFormError');
    $accountReturnForm.on('submit', function (event) {
      var formSubmit = false; // Iterate until we find a non-zero value in the dropdown for quantity

      $('[name^="return_qty"]', $accountReturnForm).each(function (i, ele) {
        if (parseInt($(ele).val(), 10) !== 0) {
          formSubmit = true; // Exit out of loop if we found at least one return

          return true;
        }
      });

      if (formSubmit) {
        return true;
      }

      Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
        text: errorMessage,
        type: 'error'
      });
      return event.preventDefault();
    });
  };

  _proto.initPaymentMethodFormValidation = function initPaymentMethodFormValidation($paymentMethodForm) {
    var _this3 = this;

    // Inject validations into form fields before validation runs
    $paymentMethodForm.find('#first_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.firstNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#last_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.lastNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#company.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.companyLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#phone.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.phoneLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address1.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address1Label + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address2.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address2Label + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#city.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.cityLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#country.form-field').attr('data-validation', "{ \"type\": \"singleselect\", \"label\": \"" + this.context.countryLabel + "\", \"required\": true, prefix: \"" + this.context.chooseCountryLabel + "\" }");
    $paymentMethodForm.find('#state.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.stateLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#postal_code.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.postalCodeLabel + "\", \"required\": true, \"maxlength\": 0 }");
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_9__["default"])($paymentMethodForm);
    var paymentMethodSelector = 'form[data-payment-method-form]';
    var paymentMethodValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_7__["default"])({
      submit: paymentMethodSelector + " input[type=\"submit\"]"
    });
    var $stateElement = $(paymentMethodSelector + " [data-field-type=\"State\"]");
    var $last; // Requests the states for a country with AJAX

    Object(_common_state_country__WEBPACK_IMPORTED_MODULE_10__["default"])($stateElement, this.context, function (err, field) {
      if (err) {
        throw new Error(err);
      }

      var $field = $(field);

      if (paymentMethodValidator.getStatus($stateElement) !== 'undefined') {
        paymentMethodValidator.remove($stateElement);
      }

      if ($last) {
        paymentMethodValidator.remove($last);
      }

      if ($field.is('select')) {
        $last = field;
        _common_form_utils__WEBPACK_IMPORTED_MODULE_11__["Validators"].setStateCountryValidation(paymentMethodValidator, field);
      } else {
        _common_form_utils__WEBPACK_IMPORTED_MODULE_11__["Validators"].cleanUpStateValidation(field);
      }
    }); // Use credit card number input listener to highlight credit card type

    var cardType;
    $(paymentMethodSelector + " input[name=\"credit_card_number\"]").on('keyup', function (_ref) {
      var target = _ref.target;
      cardType = Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_12__["creditCardType"])(target.value);

      if (cardType) {
        $(paymentMethodSelector + " img[alt=\"" + cardType + "\"").siblings().css('opacity', '.2');
      } else {
        $(paymentMethodSelector + " img").css('opacity', '1');
      }
    }); // Set of credit card validation

    _common_payment_method__WEBPACK_IMPORTED_MODULE_12__["Validators"].setCreditCardNumberValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"credit_card_number\"]", this.context.creditCardNumber);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_12__["Validators"].setExpirationValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"expiration\"]", this.context.expiration);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_12__["Validators"].setNameOnCardValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"name_on_card\"]", this.context.nameOnCard);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_12__["Validators"].setCvvValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"cvv\"]", this.context.cvv, function () {
      return cardType;
    }); // Set of credit card format

    _common_payment_method__WEBPACK_IMPORTED_MODULE_12__["Formatters"].setCreditCardNumberFormat(paymentMethodSelector + " input[name=\"credit_card_number\"]");
    _common_payment_method__WEBPACK_IMPORTED_MODULE_12__["Formatters"].setExpirationFormat(paymentMethodSelector + " input[name=\"expiration\""); // Billing address validation

    paymentMethodValidator.add(validationModel);
    $paymentMethodForm.on('submit', function (event) {
      event.preventDefault(); // Perform final form validation

      paymentMethodValidator.performCheck();

      if (paymentMethodValidator.areAll('valid')) {
        // Serialize form data and reduce it to object
        var data = lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default()($paymentMethodForm.serializeArray(), function (obj, item) {
          var refObj = obj;
          refObj[item.name] = item.value;
          return refObj;
        }, {}); // Assign country and state code


        var country = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(_this3.context.countries, function (_ref2) {
          var value = _ref2.value;
          return value === data.country;
        });

        var state = country && lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(country.states, function (_ref3) {
          var value = _ref3.value;
          return value === data.state;
        });

        data.country_code = country ? country.code : data.country;
        data.state_or_province_code = state ? state.code : data.state; // Default Instrument

        data.default_instrument = !!data.default_instrument; // Store credit card

        Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_12__["storeInstrument"])(_this3.context, data, function () {
          window.location.href = _this3.context.paymentMethodsUrl;
        }, function () {
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
            text: _this3.context.generic_error,
            type: 'error'
          });
        });
      }
    });
  };

  _proto.registerEditAccountValidation = function registerEditAccountValidation($editAccountForm) {
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_9__["default"])($editAccountForm);
    var formEditSelector = 'form[data-edit-account-form]';
    var editValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_7__["default"])({
      submit: '${formEditSelector} input[type="submit"]'
    });
    var emailSelector = formEditSelector + " [data-field-type=\"EmailAddress\"]";
    var $emailElement = $(emailSelector);
    var passwordSelector = formEditSelector + " [data-field-type=\"Password\"]";
    var $passwordElement = $(passwordSelector);
    var password2Selector = formEditSelector + " [data-field-type=\"ConfirmPassword\"]";
    var $password2Element = $(password2Selector);
    var currentPasswordSelector = formEditSelector + " [data-field-type=\"CurrentPassword\"]";
    var $currentPassword = $(currentPasswordSelector); // This only handles the custom fields, standard fields are added below

    editValidator.add(validationModel);

    if ($emailElement) {
      editValidator.remove(emailSelector);
      _common_form_utils__WEBPACK_IMPORTED_MODULE_11__["Validators"].setEmailValidation(editValidator, emailSelector);
    }

    if ($passwordElement && $password2Element) {
      editValidator.remove(passwordSelector);
      editValidator.remove(password2Selector);
      _common_form_utils__WEBPACK_IMPORTED_MODULE_11__["Validators"].setPasswordValidation(editValidator, passwordSelector, password2Selector, this.passwordRequirements, true);
    }

    if ($currentPassword) {
      editValidator.add({
        selector: currentPasswordSelector,
        validate: function validate(cb, val) {
          var result = true;

          if (val === '' && $passwordElement.val() !== '') {
            result = false;
          }

          cb(result);
        },
        errorMessage: this.context.currentPassword
      });
    }

    editValidator.add([{
      selector: formEditSelector + " input[name='account_firstname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.firstName
    }, {
      selector: formEditSelector + " input[name='account_lastname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.lastName
    }]);
    $editAccountForm.on('submit', function (event) {
      editValidator.performCheck();

      if (editValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  _proto.registerInboxValidation = function registerInboxValidation($inboxForm) {
    var inboxValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_7__["default"])({
      submit: 'form[data-inbox-form] input[type="submit"]'
    });
    inboxValidator.add([{
      selector: 'form[data-inbox-form] select[name="message_order_id"]',
      validate: function validate(cb, val) {
        var result = Number(val) !== 0;
        cb(result);
      },
      errorMessage: this.context.enterOrderNum
    }, {
      selector: 'form[data-inbox-form] input[name="message_subject"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterSubject
    }, {
      selector: 'form[data-inbox-form] textarea[name="message_content"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterMessage
    }]);
    $inboxForm.on('submit', function (event) {
      inboxValidator.performCheck();

      if (inboxValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  return Account;
}(_page_manager__WEBPACK_IMPORTED_MODULE_6__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/form-validation.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/form-validation.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__);





/**
 * Validate that the given date for the day/month/year select inputs is within potential range
 * @param $formField
 * @param validation
 * @returns {{selector: string, triggeredBy: string, validate: Function, errorMessage: string}}
 */
function buildDateValidation($formField, validation) {
  // No date range restriction, skip
  if (validation.min_date && validation.max_date) {
    var invalidMessage = "Your chosen date must fall between " + validation.min_date + " and " + validation.max_date + ".";
    var formElementId = $formField.attr('id');
    var minSplit = validation.min_date.split('-');
    var maxSplit = validation.max_date.split('-');
    var minDate = new Date(minSplit[0], minSplit[1] - 1, minSplit[2]);
    var maxDate = new Date(maxSplit[0], maxSplit[1] - 1, maxSplit[2]);
    return {
      selector: "#" + formElementId + " select[data-label=\"year\"]",
      triggeredBy: "#" + formElementId + " select:not([data-label=\"year\"])",
      validate: function validate(cb, val) {
        var day = Number($formField.find('select[data-label="day"]').val());
        var month = Number($formField.find('select[data-label="month"]').val()) - 1;
        var year = Number(val);
        var chosenDate = new Date(year, month, day);
        cb(chosenDate >= minDate && chosenDate <= maxDate);
      },
      errorMessage: invalidMessage
    };
  }
}
/**
 * We validate checkboxes separately from single input fields, as they must have at least one checked option
 * from many different inputs
 * @param $formField
 * @param validation
 */


function buildRequiredCheckboxValidation($formField, validation) {
  var formFieldId = $formField.attr('id');
  var primarySelector = "#" + formFieldId + " input:first-of-type";
  var secondarySelector = "#" + formFieldId + " input";
  return {
    selector: primarySelector,
    triggeredBy: secondarySelector,
    validate: function validate(cb) {
      var result = false;
      $(secondarySelector).each(function (index, checkbox) {
        if (checkbox.checked) {
          result = true;
          return false;
        }
      });
      cb(result);
    },
    errorMessage: "The '" + validation.label + "' field cannot be blank."
  };
}

function buildRequiredValidation(validation, selector) {
  return {
    selector: selector,
    validate: function validate(cb, val) {
      cb(val.length > 0);
    },
    errorMessage: "The '" + validation.label + "' field cannot be blank."
  };
}

function buildNumberRangeValidation(validation, formFieldSelector) {
  var invalidMessage = "The value for " + validation.label + " must be between " + validation.min + " and " + validation.max + ".";
  var min = Number(validation.min);
  var max = Number(validation.max);
  return {
    selector: formFieldSelector + " input[name=\"" + validation.name + "\"]",
    validate: function validate(cb, val) {
      var numberVal = Number(val);
      cb(numberVal >= min && numberVal <= max);
    },
    errorMessage: invalidMessage
  };
}

function buildValidation($validateableElement) {
  var validation = $validateableElement.data('validation');
  var fieldValidations = [];
  var formFieldSelector = "#" + $validateableElement.attr('id');

  if (validation.type === 'datechooser') {
    var dateValidation = buildDateValidation($validateableElement, validation);

    if (dateValidation) {
      fieldValidations.push(dateValidation);
    }
  } else if (validation.required && (validation.type === 'checkboxselect' || validation.type === 'radioselect')) {
    fieldValidations.push(buildRequiredCheckboxValidation($validateableElement, validation));
  } else {
    $validateableElement.find('input, select, textarea').each(function (index, element) {
      var $inputElement = $(element);
      var tagName = $inputElement.get(0).tagName;
      var inputName = $inputElement.attr('name');
      var elementSelector = formFieldSelector + " " + tagName + "[name=\"" + inputName + "\"]";

      if (validation.type === 'numberonly') {
        fieldValidations.push(buildNumberRangeValidation(validation, formFieldSelector));
      }

      if (validation.required) {
        fieldValidations.push(buildRequiredValidation(validation, elementSelector));
      }
    });
  }

  return fieldValidations;
}
/**
 * Builds the validation model for dynamic forms
 * @param $form
 * @returns {Array}
 */


/* harmony default export */ __webpack_exports__["default"] = (function ($form) {
  var validationsToPerform = [];
  $form.find('[data-validation]').each(function (index, input) {
    validationsToPerform = validationsToPerform.concat(buildValidation($(input)));
  });
  return validationsToPerform;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/payment-method.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/payment-method.js ***!
  \**************************************************/
/*! exports provided: creditCardType, storeInstrument, Formatters, Validators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creditCardType", function() { return creditCardType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeInstrument", function() { return storeInstrument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Formatters", function() { return Formatters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.slice.js */ "./node_modules/core-js/modules/es6.array.slice.js");
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! creditcards */ "./node_modules/creditcards/index.js");
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(creditcards__WEBPACK_IMPORTED_MODULE_3__);




/**
 * Omit null or empty string properties of object
 * @param {Object} object
 * @returns {Object}
 */

var omitNullString = function omitNullString(obj) {
  var refObj = obj;
  $.each(refObj, function (key, value) {
    if (value === null || value === '') {
      delete refObj[key];
    }
  });
  return refObj;
};
/**
 * Get credit card type from credit card number
 * @param {string} value
 */


var creditCardType = function creditCardType(value) {
  return creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.card.type(creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.card.parse(value), true);
};
/**
 * Wrapper for ajax request to store a new instrument in bigpay
 * @param {object} Representing the data needed for the header
 * @param {object} Representing the data needed for the body
 * @param {function} done Function to execute on a successful response
 * @param {function} fail Function to execute on a unsuccessful response
 */

var storeInstrument = function storeInstrument(_ref, _ref2, done, fail) {
  var paymentsUrl = _ref.paymentsUrl,
      shopperId = _ref.shopperId,
      storeHash = _ref.storeHash,
      vaultToken = _ref.vaultToken;
  var provider_id = _ref2.provider_id,
      currency_code = _ref2.currency_code,
      credit_card_number = _ref2.credit_card_number,
      expiration = _ref2.expiration,
      name_on_card = _ref2.name_on_card,
      cvv = _ref2.cvv,
      default_instrument = _ref2.default_instrument,
      address1 = _ref2.address1,
      address2 = _ref2.address2,
      city = _ref2.city,
      postal_code = _ref2.postal_code,
      state_or_province_code = _ref2.state_or_province_code,
      country_code = _ref2.country_code,
      company = _ref2.company,
      first_name = _ref2.first_name,
      last_name = _ref2.last_name,
      email = _ref2.email,
      phone = _ref2.phone;
  var expiry = expiration.split('/');
  $.ajax({
    url: paymentsUrl + "/stores/" + storeHash + "/customers/" + shopperId + "/stored_instruments",
    dataType: 'json',
    method: 'POST',
    cache: false,
    headers: {
      Authorization: vaultToken,
      Accept: 'application/vnd.bc.v1+json',
      'Content-Type': 'application/vnd.bc.v1+json'
    },
    data: JSON.stringify({
      instrument: {
        type: 'card',
        cardholder_name: name_on_card,
        number: creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.card.parse(credit_card_number),
        expiry_month: creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.expiration.month.parse(expiry[0]),
        expiry_year: creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.expiration.year.parse(expiry[1], true),
        verification_value: cvv
      },
      billing_address: omitNullString({
        address1: address1,
        address2: address2,
        city: city,
        postal_code: postal_code,
        state_or_province_code: state_or_province_code,
        country_code: country_code,
        company: company,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone
      }),
      provider_id: provider_id,
      default_instrument: default_instrument,
      currency_code: currency_code
    })
  }).done(done).fail(fail);
};
var Formatters = {
  /**
   * Sets up a format for credit card number
   * @param field
   */
  setCreditCardNumberFormat: function setCreditCardNumberFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref3) {
        var target = _ref3.target;
        var refTarget = target;
        refTarget.value = creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.card.format(creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.card.parse(target.value));
      });
    }
  },

  /**
   * Sets up a format for expiration date
   * @param field
   */
  setExpirationFormat: function setExpirationFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref4) {
        var target = _ref4.target,
            which = _ref4.which;
        var refTarget = target;

        if (which === 8 && /.*(\/)$/.test(target.value)) {
          refTarget.value = target.value.slice(0, -1);
        } else if (target.value.length > 4) {
          refTarget.value = target.value.slice(0, 5);
        } else if (which !== 8) {
          refTarget.value = target.value.replace(/^([1-9]\/|[2-9])$/g, '0$1/').replace(/^(0[1-9]|1[0-2])$/g, '$1/').replace(/^([0-1])([3-9])$/g, '0$1/$2').replace(/^(0[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2').replace(/^([0]+)\/|[0]+$/g, '0').replace(/[^\d\/]|^[\/]*$/g, '').replace(/\/\//g, '/');
        }
      });
    }
  }
};
var Validators = {
  /**
   * Sets up a validation for credit card number
   * @param validator
   * @param field
   * @param errorMessage
   */
  setCreditCardNumberValidation: function setCreditCardNumberValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.card.isValid(creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.card.parse(val));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for expiration date
   * @param validator
   * @param field
   * @param errorMessage
   */
  setExpirationValidation: function setExpirationValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var expiry = val.split('/');
          var result = val.length && /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(val);
          result = result && !creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.expiration.isPast(creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.expiration.month.parse(expiry[0]), creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.expiration.year.parse(expiry[1], true));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for name on card
   * @param validator
   * @param field
   * @param errorMessage
   */
  setNameOnCardValidation: function setNameOnCardValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = !!val.length;
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for cvv
   * @param validator
   * @param field
   * @param errorMessage
   * @param {any} cardType The credit card number type
   */
  setCvvValidation: function setCvvValidation(validator, field, errorMessage, cardType) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var type = typeof cardType === 'function' ? cardType() : cardType;
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.cvc.isValid(val, type);
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/global/sweet-alert.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/global/sweet-alert.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
 // Set defaults for sweetalert2 popup boxes

sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.setDefaults({
  buttonsStyling: false,
  confirmButtonClass: 'button',
  cancelButtonClass: 'button'
}); // Re-export

/* harmony default export */ __webpack_exports__["default"] = (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3BheW1lbnQtbWV0aG9kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvc3dlZXQtYWxlcnQuanMiXSwibmFtZXMiOlsiQWNjb3VudCIsImNvbnRleHQiLCIkc3RhdGUiLCIkIiwiJGJvZHkiLCJvblJlYWR5IiwiJGVkaXRBY2NvdW50Rm9ybSIsImNsYXNzaWZ5Rm9ybSIsIiRhZGRyZXNzRm9ybSIsIiRpbmJveEZvcm0iLCIkYWNjb3VudFJldHVybkZvcm0iLCIkcGF5bWVudE1ldGhvZEZvcm0iLCIkcmVvcmRlckZvcm0iLCIkaW52b2ljZUJ1dHRvbiIsInBhc3N3b3JkUmVxdWlyZW1lbnRzIiwiV2lzaGxpc3QiLCJsb2FkIiwibGVuZ3RoIiwicmVnaXN0ZXJFZGl0QWNjb3VudFZhbGlkYXRpb24iLCJpcyIsImluc2VydFN0YXRlSGlkZGVuRmllbGQiLCJvbiIsImxlZnQiLCJ3aW5kb3ciLCJzY3JlZW4iLCJhdmFpbFdpZHRoIiwidG9wIiwiYXZhaWxIZWlnaHQiLCJ1cmwiLCJkYXRhIiwib3BlbiIsImluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24iLCJyZWdpc3RlckluYm94VmFsaWRhdGlvbiIsImluaXRBY2NvdW50UmV0dXJuRm9ybVZhbGlkYXRpb24iLCJpbml0UGF5bWVudE1ldGhvZEZvcm1WYWxpZGF0aW9uIiwiaW5pdFJlb3JkZXJGb3JtIiwiYmluZERlbGV0ZUFkZHJlc3MiLCJiaW5kRGVsZXRlUGF5bWVudE1ldGhvZCIsImV2ZW50IiwibWVzc2FnZSIsImN1cnJlbnRUYXJnZXQiLCJjb25maXJtIiwicHJldmVudERlZmF1bHQiLCIkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzIiwic3VibWl0Rm9ybSIsImZpbmQiLCJyZW1vdmUiLCJlYWNoIiwiaW5kZXgiLCJwcm9kdWN0Q2hlY2tib3giLCJwcm9kdWN0SWQiLCJ2YWwiLCIkaW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYXBwZW5kIiwic3dhbCIsInRleHQiLCJzZWxlY3RJdGVtIiwidmFsaWRhdGlvbk1vZGVsIiwidmFsaWRhdGlvbiIsInN0YXRlU2VsZWN0b3IiLCIkc3RhdGVFbGVtZW50IiwiYWRkcmVzc1ZhbGlkYXRvciIsIm5vZCIsInN1Ym1pdCIsImFkZCIsIiRsYXN0Iiwic3RhdGVDb3VudHJ5IiwiZXJyIiwiZmllbGQiLCJFcnJvciIsIiRmaWVsZCIsImdldFN0YXR1cyIsIlZhbGlkYXRvcnMiLCJzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uIiwiY2xlYW5VcFN0YXRlVmFsaWRhdGlvbiIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsImVycm9yTWVzc2FnZSIsImZvcm1TdWJtaXQiLCJpIiwiZWxlIiwicGFyc2VJbnQiLCJhdHRyIiwiZmlyc3ROYW1lTGFiZWwiLCJsYXN0TmFtZUxhYmVsIiwiY29tcGFueUxhYmVsIiwicGhvbmVMYWJlbCIsImFkZHJlc3MxTGFiZWwiLCJhZGRyZXNzMkxhYmVsIiwiY2l0eUxhYmVsIiwiY291bnRyeUxhYmVsIiwiY2hvb3NlQ291bnRyeUxhYmVsIiwic3RhdGVMYWJlbCIsInBvc3RhbENvZGVMYWJlbCIsInBheW1lbnRNZXRob2RTZWxlY3RvciIsInBheW1lbnRNZXRob2RWYWxpZGF0b3IiLCJjYXJkVHlwZSIsInRhcmdldCIsImNyZWRpdENhcmRUeXBlIiwic2libGluZ3MiLCJjc3MiLCJDQ1ZhbGlkYXRvcnMiLCJzZXRDcmVkaXRDYXJkTnVtYmVyVmFsaWRhdGlvbiIsImNyZWRpdENhcmROdW1iZXIiLCJzZXRFeHBpcmF0aW9uVmFsaWRhdGlvbiIsImV4cGlyYXRpb24iLCJzZXROYW1lT25DYXJkVmFsaWRhdGlvbiIsIm5hbWVPbkNhcmQiLCJzZXRDdnZWYWxpZGF0aW9uIiwiY3Z2IiwiQ0NGb3JtYXR0ZXJzIiwic2V0Q3JlZGl0Q2FyZE51bWJlckZvcm1hdCIsInNldEV4cGlyYXRpb25Gb3JtYXQiLCJzZXJpYWxpemVBcnJheSIsIm9iaiIsIml0ZW0iLCJyZWZPYmoiLCJjb3VudHJ5IiwiY291bnRyaWVzIiwic3RhdGUiLCJzdGF0ZXMiLCJjb3VudHJ5X2NvZGUiLCJjb2RlIiwic3RhdGVfb3JfcHJvdmluY2VfY29kZSIsImRlZmF1bHRfaW5zdHJ1bWVudCIsInN0b3JlSW5zdHJ1bWVudCIsImxvY2F0aW9uIiwiaHJlZiIsInBheW1lbnRNZXRob2RzVXJsIiwiZ2VuZXJpY19lcnJvciIsImZvcm1FZGl0U2VsZWN0b3IiLCJlZGl0VmFsaWRhdG9yIiwiZW1haWxTZWxlY3RvciIsIiRlbWFpbEVsZW1lbnQiLCJwYXNzd29yZFNlbGVjdG9yIiwiJHBhc3N3b3JkRWxlbWVudCIsInBhc3N3b3JkMlNlbGVjdG9yIiwiJHBhc3N3b3JkMkVsZW1lbnQiLCJjdXJyZW50UGFzc3dvcmRTZWxlY3RvciIsIiRjdXJyZW50UGFzc3dvcmQiLCJzZXRFbWFpbFZhbGlkYXRpb24iLCJzZXRQYXNzd29yZFZhbGlkYXRpb24iLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJyZXN1bHQiLCJjdXJyZW50UGFzc3dvcmQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImluYm94VmFsaWRhdG9yIiwiTnVtYmVyIiwiZW50ZXJPcmRlck51bSIsImVudGVyU3ViamVjdCIsImVudGVyTWVzc2FnZSIsIlBhZ2VNYW5hZ2VyIiwiYnVpbGREYXRlVmFsaWRhdGlvbiIsIiRmb3JtRmllbGQiLCJtaW5fZGF0ZSIsIm1heF9kYXRlIiwiaW52YWxpZE1lc3NhZ2UiLCJmb3JtRWxlbWVudElkIiwibWluU3BsaXQiLCJzcGxpdCIsIm1heFNwbGl0IiwibWluRGF0ZSIsIkRhdGUiLCJtYXhEYXRlIiwidHJpZ2dlcmVkQnkiLCJkYXkiLCJtb250aCIsInllYXIiLCJjaG9zZW5EYXRlIiwiYnVpbGRSZXF1aXJlZENoZWNrYm94VmFsaWRhdGlvbiIsImZvcm1GaWVsZElkIiwicHJpbWFyeVNlbGVjdG9yIiwic2Vjb25kYXJ5U2VsZWN0b3IiLCJjaGVja2JveCIsImNoZWNrZWQiLCJsYWJlbCIsImJ1aWxkUmVxdWlyZWRWYWxpZGF0aW9uIiwiYnVpbGROdW1iZXJSYW5nZVZhbGlkYXRpb24iLCJmb3JtRmllbGRTZWxlY3RvciIsIm1pbiIsIm1heCIsIm51bWJlclZhbCIsImJ1aWxkVmFsaWRhdGlvbiIsIiR2YWxpZGF0ZWFibGVFbGVtZW50IiwiZmllbGRWYWxpZGF0aW9ucyIsImRhdGVWYWxpZGF0aW9uIiwicHVzaCIsInJlcXVpcmVkIiwiZWxlbWVudCIsIiRpbnB1dEVsZW1lbnQiLCJ0YWdOYW1lIiwiZ2V0IiwiaW5wdXROYW1lIiwiZWxlbWVudFNlbGVjdG9yIiwiJGZvcm0iLCJ2YWxpZGF0aW9uc1RvUGVyZm9ybSIsImlucHV0IiwiY29uY2F0Iiwib21pdE51bGxTdHJpbmciLCJrZXkiLCJjcmVkaXRjYXJkcyIsImNhcmQiLCJwYXJzZSIsImRvbmUiLCJmYWlsIiwicGF5bWVudHNVcmwiLCJzaG9wcGVySWQiLCJzdG9yZUhhc2giLCJ2YXVsdFRva2VuIiwicHJvdmlkZXJfaWQiLCJjdXJyZW5jeV9jb2RlIiwiY3JlZGl0X2NhcmRfbnVtYmVyIiwibmFtZV9vbl9jYXJkIiwiYWRkcmVzczEiLCJhZGRyZXNzMiIsImNpdHkiLCJwb3N0YWxfY29kZSIsImNvbXBhbnkiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwaG9uZSIsImV4cGlyeSIsImFqYXgiLCJkYXRhVHlwZSIsIm1ldGhvZCIsImNhY2hlIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJBY2NlcHQiLCJKU09OIiwic3RyaW5naWZ5IiwiaW5zdHJ1bWVudCIsImNhcmRob2xkZXJfbmFtZSIsIm51bWJlciIsImV4cGlyeV9tb250aCIsImV4cGlyeV95ZWFyIiwidmVyaWZpY2F0aW9uX3ZhbHVlIiwiYmlsbGluZ19hZGRyZXNzIiwiRm9ybWF0dGVycyIsInJlZlRhcmdldCIsImZvcm1hdCIsIndoaWNoIiwidGVzdCIsInNsaWNlIiwicmVwbGFjZSIsInZhbGlkYXRvciIsImlzVmFsaWQiLCJpc1Bhc3QiLCJjdmMiLCJzd2VldEFsZXJ0Iiwic2V0RGVmYXVsdHMiLCJidXR0b25zU3R5bGluZyIsImNvbmZpcm1CdXR0b25DbGFzcyIsImNhbmNlbEJ1dHRvbkNsYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLE87OztBQUNqQixtQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNqQixvQ0FBTUEsT0FBTjtBQUVBLFVBQUtDLE1BQUwsR0FBY0MsQ0FBQyxDQUFDLDJCQUFELENBQWY7QUFDQSxVQUFLQyxLQUFMLEdBQWFELENBQUMsQ0FBQyxNQUFELENBQWQ7QUFKaUI7QUFLcEI7Ozs7U0FFREUsTyxHQUFBLG1CQUFVO0FBQ04sUUFBTUMsZ0JBQWdCLEdBQUdDLHdFQUFZLENBQUMsOEJBQUQsQ0FBckM7QUFDQSxRQUFNQyxZQUFZLEdBQUdELHdFQUFZLENBQUMseUJBQUQsQ0FBakM7QUFDQSxRQUFNRSxVQUFVLEdBQUdGLHdFQUFZLENBQUMsdUJBQUQsQ0FBL0I7QUFDQSxRQUFNRyxrQkFBa0IsR0FBR0gsd0VBQVksQ0FBQyw0QkFBRCxDQUF2QztBQUNBLFFBQU1JLGtCQUFrQixHQUFHSix3RUFBWSxDQUFDLGdDQUFELENBQXZDO0FBQ0EsUUFBTUssWUFBWSxHQUFHTCx3RUFBWSxDQUFDLDZCQUFELENBQWpDO0FBQ0EsUUFBTU0sY0FBYyxHQUFHVixDQUFDLENBQUMsc0JBQUQsQ0FBeEIsQ0FQTSxDQVNOOztBQUNBLFNBQUtXLG9CQUFMLEdBQTRCLEtBQUtiLE9BQUwsQ0FBYWEsb0JBQXpDLENBVk0sQ0FZTjs7QUFDQUMscURBQVEsQ0FBQ0MsSUFBVCxDQUFjLEtBQUtmLE9BQW5COztBQUVBLFFBQUlLLGdC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OEMsUUFBUCxLQUFvQixVQUFwQixHQUFpQ0EsUUFBUSxFQUF6QyxHQUE4Q0EsUUFBM0Q7QUFDQSxjQUFNaUQsTUFBTSxHQUFHakcsR0FBRyxDQUFDbEMsTUFBSixJQUFjNkwsa0RBQVcsQ0FBQ2lELEdBQVosQ0FBZ0JGLE9BQWhCLENBQXdCMU0sR0FBeEIsRUFBNkJFLElBQTdCLENBQTdCO0FBRUE4RixZQUFFLENBQUNDLE1BQUQsQ0FBRjtBQUNILFNBUFM7QUFRVnBFLG9CQUFZLEVBQVpBO0FBUlUsT0FBZDtBQVVIO0FBQ0o7QUFuRnFCLENBQW5CLEM7Ozs7Ozs7Ozs7Ozs7QUNySlA7QUFBQTtBQUFBO0NBRUE7O0FBQ0FnTCxrREFBVSxDQUFDQyxXQUFYLENBQXVCO0FBQ25CQyxnQkFBYyxFQUFFLEtBREc7QUFFbkJDLG9CQUFrQixFQUFFLFFBRkQ7QUFHbkJDLG1CQUFpQixFQUFFO0FBSEEsQ0FBdkIsRSxDQU1BOztBQUNlSixpSEFBZixFIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay45LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgV2lzaGxpc3QgZnJvbSAnLi93aXNobGlzdCc7XG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tICcuL2NvbW1vbi9mb3JtLXZhbGlkYXRpb24nO1xuaW1wb3J0IHN0YXRlQ291bnRyeSBmcm9tICcuL2NvbW1vbi9zdGF0ZS1jb3VudHJ5JztcbmltcG9ydCB7IGNsYXNzaWZ5Rm9ybSwgVmFsaWRhdG9ycywgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9IGZyb20gJy4vY29tbW9uL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IHsgY3JlZGl0Q2FyZFR5cGUsIHN0b3JlSW5zdHJ1bWVudCwgVmFsaWRhdG9ycyBhcyBDQ1ZhbGlkYXRvcnMsIEZvcm1hdHRlcnMgYXMgQ0NGb3JtYXR0ZXJzIH0gZnJvbSAnLi9jb21tb24vcGF5bWVudC1tZXRob2QnO1xuaW1wb3J0IHN3YWwgZnJvbSAnLi9nbG9iYWwvc3dlZXQtYWxlcnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy4kc3RhdGUgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nKTtcbiAgICAgICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCAkZWRpdEFjY291bnRGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtZWRpdC1hY2NvdW50LWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRhZGRyZXNzRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnZm9ybVtkYXRhLWFkZHJlc3MtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGluYm94Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnZm9ybVtkYXRhLWluYm94LWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRhY2NvdW50UmV0dXJuRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnW2RhdGEtYWNjb3VudC1yZXR1cm4tZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJHBheW1lbnRNZXRob2RGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtcGF5bWVudC1tZXRob2QtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJHJlb3JkZXJGb3JtID0gY2xhc3NpZnlGb3JtKCdbZGF0YS1hY2NvdW50LXJlb3JkZXItZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGludm9pY2VCdXR0b24gPSAkKCdbZGF0YS1wcmludC1pbnZvaWNlXScpO1xuXG4gICAgICAgIC8vIEluamVjdGVkIHZpYSB0ZW1wbGF0ZVxuICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzID0gdGhpcy5jb250ZXh0LnBhc3N3b3JkUmVxdWlyZW1lbnRzO1xuXG4gICAgICAgIC8vIEluc3RhbnRpYXRlcyB3aXNoIGxpc3QgSlNcbiAgICAgICAgV2lzaGxpc3QubG9hZCh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIGlmICgkZWRpdEFjY291bnRGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckVkaXRBY2NvdW50VmFsaWRhdGlvbigkZWRpdEFjY291bnRGb3JtKTtcbiAgICAgICAgICAgIGlmICh0aGlzLiRzdGF0ZS5pcygnaW5wdXQnKSkge1xuICAgICAgICAgICAgICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQodGhpcy4kc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRpbnZvaWNlQnV0dG9uLmxlbmd0aCkge1xuICAgICAgICAgICAgJGludm9pY2VCdXR0b24ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnQgPSB3aW5kb3cuc2NyZWVuLmF2YWlsV2lkdGggLyAyIC0gNDUwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvcCA9IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQgLyAyIC0gMzIwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9ICRpbnZvaWNlQnV0dG9uLmRhdGEoJ3ByaW50SW52b2ljZScpO1xuXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4odXJsLCAnb3JkZXJJbnZvaWNlJywgYHdpZHRoPTkwMCxoZWlnaHQ9NjUwLGxlZnQ9JHtsZWZ0fSx0b3A9JHt0b3B9LHNjcm9sbGJhcnM9MWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGFkZHJlc3NGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0QWRkcmVzc0Zvcm1WYWxpZGF0aW9uKCRhZGRyZXNzRm9ybSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiRzdGF0ZS5pcygnaW5wdXQnKSkge1xuICAgICAgICAgICAgICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQodGhpcy4kc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRpbmJveEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVySW5ib3hWYWxpZGF0aW9uKCRpbmJveEZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRhY2NvdW50UmV0dXJuRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEFjY291bnRSZXR1cm5Gb3JtVmFsaWRhdGlvbigkYWNjb3VudFJldHVybkZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwYXltZW50TWV0aG9kRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFBheW1lbnRNZXRob2RGb3JtVmFsaWRhdGlvbigkcGF5bWVudE1ldGhvZEZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRyZW9yZGVyRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFJlb3JkZXJGb3JtKCRyZW9yZGVyRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJpbmREZWxldGVBZGRyZXNzKCk7XG4gICAgICAgIHRoaXMuYmluZERlbGV0ZVBheW1lbnRNZXRob2QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBhIHN1Ym1pdCBob29rIHRvIGVuc3VyZSB0aGUgY3VzdG9tZXIgcmVjZWl2ZXMgYSBjb25maXJtYXRpb24gZGlhbG9nIGJlZm9yZSBkZWxldGluZyBhbiBhZGRyZXNzXG4gICAgICovXG4gICAgYmluZERlbGV0ZUFkZHJlc3MoKSB7XG4gICAgICAgICQoJ1tkYXRhLWRlbGV0ZS1hZGRyZXNzXScpLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdkZWxldGVBZGRyZXNzJyk7XG5cbiAgICAgICAgICAgIGlmICghd2luZG93LmNvbmZpcm0obWVzc2FnZSkpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kRGVsZXRlUGF5bWVudE1ldGhvZCgpIHtcbiAgICAgICAgJCgnW2RhdGEtZGVsZXRlLXBheW1lbnQtbWV0aG9kXScpLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdkZWxldGVQYXltZW50TWV0aG9kJyk7XG5cbiAgICAgICAgICAgIGlmICghd2luZG93LmNvbmZpcm0obWVzc2FnZSkpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0UmVvcmRlckZvcm0oJHJlb3JkZXJGb3JtKSB7XG4gICAgICAgICRyZW9yZGVyRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RSZW9yZGVyQ2hlY2tib3hlcyA9ICQoJy5hY2NvdW50LWxpc3RJdGVtIC5mb3JtLWNoZWNrYm94OmNoZWNrZWQnKTtcbiAgICAgICAgICAgIGxldCBzdWJtaXRGb3JtID0gZmFsc2U7XG5cbiAgICAgICAgICAgICRyZW9yZGVyRm9ybS5maW5kKCdbbmFtZV49XCJyZW9yZGVyaXRlbVwiXScpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzLmVhY2goKGluZGV4LCBwcm9kdWN0Q2hlY2tib3gpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkKHByb2R1Y3RDaGVja2JveCkudmFsKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gJCgnPGlucHV0PicsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGByZW9yZGVyaXRlbVske3Byb2R1Y3RJZH1dYCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcxJyxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm0gPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgJHJlb3JkZXJGb3JtLmFwcGVuZCgkaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghc3VibWl0Rm9ybSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuY29udGV4dC5zZWxlY3RJdGVtLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0QWRkcmVzc0Zvcm1WYWxpZGF0aW9uKCRhZGRyZXNzRm9ybSkge1xuICAgICAgICBjb25zdCB2YWxpZGF0aW9uTW9kZWwgPSB2YWxpZGF0aW9uKCRhZGRyZXNzRm9ybSk7XG4gICAgICAgIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAnZm9ybVtkYXRhLWFkZHJlc3MtZm9ybV0gW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJztcbiAgICAgICAgY29uc3QgJHN0YXRlRWxlbWVudCA9ICQoc3RhdGVTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IGFkZHJlc3NWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAnZm9ybVtkYXRhLWFkZHJlc3MtZm9ybV0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFkZHJlc3NWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XG5cbiAgICAgICAgaWYgKCRzdGF0ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCAkbGFzdDtcblxuICAgICAgICAgICAgLy8gUmVxdWVzdHMgdGhlIHN0YXRlcyBmb3IgYSBjb3VudHJ5IHdpdGggQUpBWFxuICAgICAgICAgICAgc3RhdGVDb3VudHJ5KCRzdGF0ZUVsZW1lbnQsIHRoaXMuY29udGV4dCwgKGVyciwgZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFkZHJlc3NWYWxpZGF0b3IuZ2V0U3RhdHVzKCRzdGF0ZUVsZW1lbnQpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnJlbW92ZSgkc3RhdGVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJGxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkZmllbGQuaXMoJ3NlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbihhZGRyZXNzVmFsaWRhdG9yLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jbGVhblVwU3RhdGVWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICRhZGRyZXNzRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKGFkZHJlc3NWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0QWNjb3VudFJldHVybkZvcm1WYWxpZGF0aW9uKCRhY2NvdW50UmV0dXJuRm9ybSkge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAkYWNjb3VudFJldHVybkZvcm0uZGF0YSgnYWNjb3VudFJldHVybkZvcm1FcnJvcicpO1xuXG4gICAgICAgICRhY2NvdW50UmV0dXJuRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgbGV0IGZvcm1TdWJtaXQgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gSXRlcmF0ZSB1bnRpbCB3ZSBmaW5kIGEgbm9uLXplcm8gdmFsdWUgaW4gdGhlIGRyb3Bkb3duIGZvciBxdWFudGl0eVxuICAgICAgICAgICAgJCgnW25hbWVePVwicmV0dXJuX3F0eVwiXScsICRhY2NvdW50UmV0dXJuRm9ybSkuZWFjaCgoaSwgZWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KCQoZWxlKS52YWwoKSwgMTApICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1TdWJtaXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEV4aXQgb3V0IG9mIGxvb3AgaWYgd2UgZm91bmQgYXQgbGVhc3Qgb25lIHJldHVyblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGZvcm1TdWJtaXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRQYXltZW50TWV0aG9kRm9ybVZhbGlkYXRpb24oJHBheW1lbnRNZXRob2RGb3JtKSB7XG4gICAgICAgIC8vIEluamVjdCB2YWxpZGF0aW9ucyBpbnRvIGZvcm0gZmllbGRzIGJlZm9yZSB2YWxpZGF0aW9uIHJ1bnNcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNmaXJzdF9uYW1lLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5maXJzdE5hbWVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNsYXN0X25hbWUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0Lmxhc3ROYW1lTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjY29tcGFueS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY29tcGFueUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNwaG9uZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQucGhvbmVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjYWRkcmVzczEuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmFkZHJlc3MxTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjYWRkcmVzczIuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmFkZHJlc3MyTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2NpdHkuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmNpdHlMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNjb3VudHJ5LmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVzZWxlY3RcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmNvdW50cnlMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBwcmVmaXg6IFwiJHt0aGlzLmNvbnRleHQuY2hvb3NlQ291bnRyeUxhYmVsfVwiIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNzdGF0ZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuc3RhdGVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNwb3N0YWxfY29kZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQucG9zdGFsQ29kZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJHBheW1lbnRNZXRob2RGb3JtKTtcbiAgICAgICAgY29uc3QgcGF5bWVudE1ldGhvZFNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1wYXltZW50LW1ldGhvZC1mb3JtXSc7XG4gICAgICAgIGNvbnN0IHBheW1lbnRNZXRob2RWYWxpZGF0b3IgPSBub2QoeyBzdWJtaXQ6IGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXWAgfSk7XG4gICAgICAgIGNvbnN0ICRzdGF0ZUVsZW1lbnQgPSAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdYCk7XG5cbiAgICAgICAgbGV0ICRsYXN0O1xuICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXG4gICAgICAgIHN0YXRlQ291bnRyeSgkc3RhdGVFbGVtZW50LCB0aGlzLmNvbnRleHQsIChlcnIsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICBpZiAocGF5bWVudE1ldGhvZFZhbGlkYXRvci5nZXRTdGF0dXMoJHN0YXRlRWxlbWVudCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5yZW1vdmUoJHN0YXRlRWxlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkbGFzdCkge1xuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IucmVtb3ZlKCRsYXN0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRmaWVsZC5pcygnc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICAkbGFzdCA9IGZpZWxkO1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBmaWVsZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFVzZSBjcmVkaXQgY2FyZCBudW1iZXIgaW5wdXQgbGlzdGVuZXIgdG8gaGlnaGxpZ2h0IGNyZWRpdCBjYXJkIHR5cGVcbiAgICAgICAgbGV0IGNhcmRUeXBlO1xuICAgICAgICAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImNyZWRpdF9jYXJkX251bWJlclwiXWApLm9uKCdrZXl1cCcsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICBjYXJkVHlwZSA9IGNyZWRpdENhcmRUeXBlKHRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICBpZiAoY2FyZFR5cGUpIHtcbiAgICAgICAgICAgICAgICAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW1nW2FsdD1cIiR7Y2FyZFR5cGV9XCJgKS5zaWJsaW5ncygpLmNzcygnb3BhY2l0eScsICcuMicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW1nYCkuY3NzKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2V0IG9mIGNyZWRpdCBjYXJkIHZhbGlkYXRpb25cbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldENyZWRpdENhcmROdW1iZXJWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImNyZWRpdF9jYXJkX251bWJlclwiXWAsIHRoaXMuY29udGV4dC5jcmVkaXRDYXJkTnVtYmVyKTtcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldEV4cGlyYXRpb25WYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImV4cGlyYXRpb25cIl1gLCB0aGlzLmNvbnRleHQuZXhwaXJhdGlvbik7XG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXROYW1lT25DYXJkVmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJuYW1lX29uX2NhcmRcIl1gLCB0aGlzLmNvbnRleHQubmFtZU9uQ2FyZCk7XG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXRDdnZWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImN2dlwiXWAsIHRoaXMuY29udGV4dC5jdnYsICgpID0+IGNhcmRUeXBlKTtcblxuICAgICAgICAvLyBTZXQgb2YgY3JlZGl0IGNhcmQgZm9ybWF0XG4gICAgICAgIENDRm9ybWF0dGVycy5zZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0KGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImNyZWRpdF9jYXJkX251bWJlclwiXWApO1xuICAgICAgICBDQ0Zvcm1hdHRlcnMuc2V0RXhwaXJhdGlvbkZvcm1hdChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJleHBpcmF0aW9uXCJgKTtcblxuICAgICAgICAvLyBCaWxsaW5nIGFkZHJlc3MgdmFsaWRhdGlvblxuICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xuXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIFBlcmZvcm0gZmluYWwgZm9ybSB2YWxpZGF0aW9uXG4gICAgICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgaWYgKHBheW1lbnRNZXRob2RWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgLy8gU2VyaWFsaXplIGZvcm0gZGF0YSBhbmQgcmVkdWNlIGl0IHRvIG9iamVjdFxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBfLnJlZHVjZSgkcGF5bWVudE1ldGhvZEZvcm0uc2VyaWFsaXplQXJyYXkoKSwgKG9iaiwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZPYmogPSBvYmo7XG4gICAgICAgICAgICAgICAgICAgIHJlZk9ialtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZk9iajtcbiAgICAgICAgICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gY291bnRyeSBhbmQgc3RhdGUgY29kZVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50cnkgPSBfLmZpbmQodGhpcy5jb250ZXh0LmNvdW50cmllcywgKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IGRhdGEuY291bnRyeSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBjb3VudHJ5ICYmIF8uZmluZChjb3VudHJ5LnN0YXRlcywgKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IGRhdGEuc3RhdGUpO1xuICAgICAgICAgICAgICAgIGRhdGEuY291bnRyeV9jb2RlID0gY291bnRyeSA/IGNvdW50cnkuY29kZSA6IGRhdGEuY291bnRyeTtcbiAgICAgICAgICAgICAgICBkYXRhLnN0YXRlX29yX3Byb3ZpbmNlX2NvZGUgPSBzdGF0ZSA/IHN0YXRlLmNvZGUgOiBkYXRhLnN0YXRlO1xuXG4gICAgICAgICAgICAgICAgLy8gRGVmYXVsdCBJbnN0cnVtZW50XG4gICAgICAgICAgICAgICAgZGF0YS5kZWZhdWx0X2luc3RydW1lbnQgPSAhIWRhdGEuZGVmYXVsdF9pbnN0cnVtZW50O1xuXG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgY3JlZGl0IGNhcmRcbiAgICAgICAgICAgICAgICBzdG9yZUluc3RydW1lbnQodGhpcy5jb250ZXh0LCBkYXRhLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5jb250ZXh0LnBheW1lbnRNZXRob2RzVXJsO1xuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNvbnRleHQuZ2VuZXJpY19lcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RlckVkaXRBY2NvdW50VmFsaWRhdGlvbigkZWRpdEFjY291bnRGb3JtKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJGVkaXRBY2NvdW50Rm9ybSk7XG4gICAgICAgIGNvbnN0IGZvcm1FZGl0U2VsZWN0b3IgPSAnZm9ybVtkYXRhLWVkaXQtYWNjb3VudC1mb3JtXSc7XG4gICAgICAgIGNvbnN0IGVkaXRWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAnJHtmb3JtRWRpdFNlbGVjdG9yfSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGVtYWlsU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiRW1haWxBZGRyZXNzXCJdYDtcbiAgICAgICAgY29uc3QgJGVtYWlsRWxlbWVudCA9ICQoZW1haWxTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiUGFzc3dvcmRcIl1gO1xuICAgICAgICBjb25zdCAkcGFzc3dvcmRFbGVtZW50ID0gJChwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmQyU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiQ29uZmlybVBhc3N3b3JkXCJdYDtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkMkVsZW1lbnQgPSAkKHBhc3N3b3JkMlNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgY3VycmVudFBhc3N3b3JkU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiQ3VycmVudFBhc3N3b3JkXCJdYDtcbiAgICAgICAgY29uc3QgJGN1cnJlbnRQYXNzd29yZCA9ICQoY3VycmVudFBhc3N3b3JkU2VsZWN0b3IpO1xuXG4gICAgICAgIC8vIFRoaXMgb25seSBoYW5kbGVzIHRoZSBjdXN0b20gZmllbGRzLCBzdGFuZGFyZCBmaWVsZHMgYXJlIGFkZGVkIGJlbG93XG4gICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XG5cbiAgICAgICAgaWYgKCRlbWFpbEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucmVtb3ZlKGVtYWlsU2VsZWN0b3IpO1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRFbWFpbFZhbGlkYXRpb24oZWRpdFZhbGlkYXRvciwgZW1haWxTZWxlY3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHBhc3N3b3JkRWxlbWVudCAmJiAkcGFzc3dvcmQyRWxlbWVudCkge1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5yZW1vdmUocGFzc3dvcmRTZWxlY3Rvcik7XG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnJlbW92ZShwYXNzd29yZDJTZWxlY3Rvcik7XG4gICAgICAgICAgICBWYWxpZGF0b3JzLnNldFBhc3N3b3JkVmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICBlZGl0VmFsaWRhdG9yLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkY3VycmVudFBhc3N3b3JkKSB7XG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGN1cnJlbnRQYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSAnJyAmJiAkcGFzc3dvcmRFbGVtZW50LnZhbCgpICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuY3VycmVudFBhc3N3b3JkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBlZGl0VmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W25hbWU9J2FjY291bnRfZmlyc3RuYW1lJ11gLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5maXJzdE5hbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHtmb3JtRWRpdFNlbGVjdG9yfSBpbnB1dFtuYW1lPSdhY2NvdW50X2xhc3RuYW1lJ11gLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5sYXN0TmFtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRlZGl0QWNjb3VudEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmIChlZGl0VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJJbmJveFZhbGlkYXRpb24oJGluYm94Rm9ybSkge1xuICAgICAgICBjb25zdCBpbmJveFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGluYm94VmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gc2VsZWN0W25hbWU9XCJtZXNzYWdlX29yZGVyX2lkXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gTnVtYmVyKHZhbCkgIT09IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyT3JkZXJOdW0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIGlucHV0W25hbWU9XCJtZXNzYWdlX3N1YmplY3RcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlclN1YmplY3QsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIHRleHRhcmVhW25hbWU9XCJtZXNzYWdlX2NvbnRlbnRcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlck1lc3NhZ2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcblxuICAgICAgICAkaW5ib3hGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpbmJveFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKGluYm94VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBWYWxpZGF0ZSB0aGF0IHRoZSBnaXZlbiBkYXRlIGZvciB0aGUgZGF5L21vbnRoL3llYXIgc2VsZWN0IGlucHV0cyBpcyB3aXRoaW4gcG90ZW50aWFsIHJhbmdlXG4gKiBAcGFyYW0gJGZvcm1GaWVsZFxuICogQHBhcmFtIHZhbGlkYXRpb25cbiAqIEByZXR1cm5zIHt7c2VsZWN0b3I6IHN0cmluZywgdHJpZ2dlcmVkQnk6IHN0cmluZywgdmFsaWRhdGU6IEZ1bmN0aW9uLCBlcnJvck1lc3NhZ2U6IHN0cmluZ319XG4gKi9cbmZ1bmN0aW9uIGJ1aWxkRGF0ZVZhbGlkYXRpb24oJGZvcm1GaWVsZCwgdmFsaWRhdGlvbikge1xuICAgIC8vIE5vIGRhdGUgcmFuZ2UgcmVzdHJpY3Rpb24sIHNraXBcbiAgICBpZiAodmFsaWRhdGlvbi5taW5fZGF0ZSAmJiB2YWxpZGF0aW9uLm1heF9kYXRlKSB7XG4gICAgICAgIGNvbnN0IGludmFsaWRNZXNzYWdlID0gYFlvdXIgY2hvc2VuIGRhdGUgbXVzdCBmYWxsIGJldHdlZW4gJHt2YWxpZGF0aW9uLm1pbl9kYXRlfSBhbmQgJHt2YWxpZGF0aW9uLm1heF9kYXRlfS5gO1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudElkID0gJGZvcm1GaWVsZC5hdHRyKCdpZCcpO1xuICAgICAgICBjb25zdCBtaW5TcGxpdCA9IHZhbGlkYXRpb24ubWluX2RhdGUuc3BsaXQoJy0nKTtcbiAgICAgICAgY29uc3QgbWF4U3BsaXQgPSB2YWxpZGF0aW9uLm1heF9kYXRlLnNwbGl0KCctJyk7XG4gICAgICAgIGNvbnN0IG1pbkRhdGUgPSBuZXcgRGF0ZShtaW5TcGxpdFswXSwgbWluU3BsaXRbMV0gLSAxLCBtaW5TcGxpdFsyXSk7XG4gICAgICAgIGNvbnN0IG1heERhdGUgPSBuZXcgRGF0ZShtYXhTcGxpdFswXSwgbWF4U3BsaXRbMV0gLSAxLCBtYXhTcGxpdFsyXSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBgIyR7Zm9ybUVsZW1lbnRJZH0gc2VsZWN0W2RhdGEtbGFiZWw9XCJ5ZWFyXCJdYCxcbiAgICAgICAgICAgIHRyaWdnZXJlZEJ5OiBgIyR7Zm9ybUVsZW1lbnRJZH0gc2VsZWN0Om5vdChbZGF0YS1sYWJlbD1cInllYXJcIl0pYCxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRheSA9IE51bWJlcigkZm9ybUZpZWxkLmZpbmQoJ3NlbGVjdFtkYXRhLWxhYmVsPVwiZGF5XCJdJykudmFsKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gTnVtYmVyKCRmb3JtRmllbGQuZmluZCgnc2VsZWN0W2RhdGEtbGFiZWw9XCJtb250aFwiXScpLnZhbCgpKSAtIDE7XG4gICAgICAgICAgICAgICAgY29uc3QgeWVhciA9IE51bWJlcih2YWwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNob3NlbkRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcblxuICAgICAgICAgICAgICAgIGNiKGNob3NlbkRhdGUgPj0gbWluRGF0ZSAmJiBjaG9zZW5EYXRlIDw9IG1heERhdGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogaW52YWxpZE1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxufVxuXG4vKipcbiAqIFdlIHZhbGlkYXRlIGNoZWNrYm94ZXMgc2VwYXJhdGVseSBmcm9tIHNpbmdsZSBpbnB1dCBmaWVsZHMsIGFzIHRoZXkgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBjaGVja2VkIG9wdGlvblxuICogZnJvbSBtYW55IGRpZmZlcmVudCBpbnB1dHNcbiAqIEBwYXJhbSAkZm9ybUZpZWxkXG4gKiBAcGFyYW0gdmFsaWRhdGlvblxuICovXG5mdW5jdGlvbiBidWlsZFJlcXVpcmVkQ2hlY2tib3hWYWxpZGF0aW9uKCRmb3JtRmllbGQsIHZhbGlkYXRpb24pIHtcbiAgICBjb25zdCBmb3JtRmllbGRJZCA9ICRmb3JtRmllbGQuYXR0cignaWQnKTtcbiAgICBjb25zdCBwcmltYXJ5U2VsZWN0b3IgPSBgIyR7Zm9ybUZpZWxkSWR9IGlucHV0OmZpcnN0LW9mLXR5cGVgO1xuICAgIGNvbnN0IHNlY29uZGFyeVNlbGVjdG9yID0gYCMke2Zvcm1GaWVsZElkfSBpbnB1dGA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcjogcHJpbWFyeVNlbGVjdG9yLFxuICAgICAgICB0cmlnZ2VyZWRCeTogc2Vjb25kYXJ5U2VsZWN0b3IsXG4gICAgICAgIHZhbGlkYXRlOiAoY2IpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICAgICAgICAgICAgJChzZWNvbmRhcnlTZWxlY3RvcikuZWFjaCgoaW5kZXgsIGNoZWNrYm94KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yTWVzc2FnZTogYFRoZSAnJHt2YWxpZGF0aW9uLmxhYmVsfScgZmllbGQgY2Fubm90IGJlIGJsYW5rLmAsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRSZXF1aXJlZFZhbGlkYXRpb24odmFsaWRhdGlvbiwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgdmFsaWRhdGUoY2IsIHZhbCkge1xuICAgICAgICAgICAgY2IodmFsLmxlbmd0aCA+IDApO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvck1lc3NhZ2U6IGBUaGUgJyR7dmFsaWRhdGlvbi5sYWJlbH0nIGZpZWxkIGNhbm5vdCBiZSBibGFuay5gLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTnVtYmVyUmFuZ2VWYWxpZGF0aW9uKHZhbGlkYXRpb24sIGZvcm1GaWVsZFNlbGVjdG9yKSB7XG4gICAgY29uc3QgaW52YWxpZE1lc3NhZ2UgPSBgVGhlIHZhbHVlIGZvciAke3ZhbGlkYXRpb24ubGFiZWx9IG11c3QgYmUgYmV0d2VlbiAke3ZhbGlkYXRpb24ubWlufSBhbmQgJHt2YWxpZGF0aW9uLm1heH0uYDtcbiAgICBjb25zdCBtaW4gPSBOdW1iZXIodmFsaWRhdGlvbi5taW4pO1xuICAgIGNvbnN0IG1heCA9IE51bWJlcih2YWxpZGF0aW9uLm1heCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybUZpZWxkU2VsZWN0b3J9IGlucHV0W25hbWU9XCIke3ZhbGlkYXRpb24ubmFtZX1cIl1gLFxuICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlclZhbCA9IE51bWJlcih2YWwpO1xuXG4gICAgICAgICAgICBjYihudW1iZXJWYWwgPj0gbWluICYmIG51bWJlclZhbCA8PSBtYXgpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvck1lc3NhZ2U6IGludmFsaWRNZXNzYWdlLFxuICAgIH07XG59XG5cblxuZnVuY3Rpb24gYnVpbGRWYWxpZGF0aW9uKCR2YWxpZGF0ZWFibGVFbGVtZW50KSB7XG4gICAgY29uc3QgdmFsaWRhdGlvbiA9ICR2YWxpZGF0ZWFibGVFbGVtZW50LmRhdGEoJ3ZhbGlkYXRpb24nKTtcbiAgICBjb25zdCBmaWVsZFZhbGlkYXRpb25zID0gW107XG4gICAgY29uc3QgZm9ybUZpZWxkU2VsZWN0b3IgPSBgIyR7JHZhbGlkYXRlYWJsZUVsZW1lbnQuYXR0cignaWQnKX1gO1xuXG4gICAgaWYgKHZhbGlkYXRpb24udHlwZSA9PT0gJ2RhdGVjaG9vc2VyJykge1xuICAgICAgICBjb25zdCBkYXRlVmFsaWRhdGlvbiA9IGJ1aWxkRGF0ZVZhbGlkYXRpb24oJHZhbGlkYXRlYWJsZUVsZW1lbnQsIHZhbGlkYXRpb24pO1xuXG4gICAgICAgIGlmIChkYXRlVmFsaWRhdGlvbikge1xuICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGRhdGVWYWxpZGF0aW9uKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFsaWRhdGlvbi5yZXF1aXJlZCAmJiAodmFsaWRhdGlvbi50eXBlID09PSAnY2hlY2tib3hzZWxlY3QnIHx8IHZhbGlkYXRpb24udHlwZSA9PT0gJ3JhZGlvc2VsZWN0JykpIHtcbiAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGJ1aWxkUmVxdWlyZWRDaGVja2JveFZhbGlkYXRpb24oJHZhbGlkYXRlYWJsZUVsZW1lbnQsIHZhbGlkYXRpb24pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkdmFsaWRhdGVhYmxlRWxlbWVudC5maW5kKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXRFbGVtZW50ID0gJChlbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSAkaW5wdXRFbGVtZW50LmdldCgwKS50YWdOYW1lO1xuICAgICAgICAgICAgY29uc3QgaW5wdXROYW1lID0gJGlucHV0RWxlbWVudC5hdHRyKCduYW1lJyk7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50U2VsZWN0b3IgPSBgJHtmb3JtRmllbGRTZWxlY3Rvcn0gJHt0YWdOYW1lfVtuYW1lPVwiJHtpbnB1dE5hbWV9XCJdYDtcblxuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24udHlwZSA9PT0gJ251bWJlcm9ubHknKSB7XG4gICAgICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGJ1aWxkTnVtYmVyUmFuZ2VWYWxpZGF0aW9uKHZhbGlkYXRpb24sIGZvcm1GaWVsZFNlbGVjdG9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbi5yZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIGZpZWxkVmFsaWRhdGlvbnMucHVzaChidWlsZFJlcXVpcmVkVmFsaWRhdGlvbih2YWxpZGF0aW9uLCBlbGVtZW50U2VsZWN0b3IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpZWxkVmFsaWRhdGlvbnM7XG59XG5cbi8qKlxuICogQnVpbGRzIHRoZSB2YWxpZGF0aW9uIG1vZGVsIGZvciBkeW5hbWljIGZvcm1zXG4gKiBAcGFyYW0gJGZvcm1cbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCRmb3JtKSB7XG4gICAgbGV0IHZhbGlkYXRpb25zVG9QZXJmb3JtID0gW107XG5cbiAgICAkZm9ybS5maW5kKCdbZGF0YS12YWxpZGF0aW9uXScpLmVhY2goKGluZGV4LCBpbnB1dCkgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uc1RvUGVyZm9ybSA9IHZhbGlkYXRpb25zVG9QZXJmb3JtLmNvbmNhdChidWlsZFZhbGlkYXRpb24oJChpbnB1dCkpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB2YWxpZGF0aW9uc1RvUGVyZm9ybTtcbn1cbiIsImltcG9ydCBjcmVkaXRjYXJkcyBmcm9tICdjcmVkaXRjYXJkcyc7XG5cbi8qKlxuICogT21pdCBudWxsIG9yIGVtcHR5IHN0cmluZyBwcm9wZXJ0aWVzIG9mIG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuY29uc3Qgb21pdE51bGxTdHJpbmcgPSBvYmogPT4ge1xuICAgIGNvbnN0IHJlZk9iaiA9IG9iajtcblxuICAgICQuZWFjaChyZWZPYmosIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIGRlbGV0ZSByZWZPYmpba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlZk9iajtcbn07XG5cbi8qKlxuICogR2V0IGNyZWRpdCBjYXJkIHR5cGUgZnJvbSBjcmVkaXQgY2FyZCBudW1iZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICovXG5leHBvcnQgY29uc3QgY3JlZGl0Q2FyZFR5cGUgPSB2YWx1ZSA9PiBjcmVkaXRjYXJkcy5jYXJkLnR5cGUoY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZSh2YWx1ZSksIHRydWUpO1xuXG4vKipcbiAqIFdyYXBwZXIgZm9yIGFqYXggcmVxdWVzdCB0byBzdG9yZSBhIG5ldyBpbnN0cnVtZW50IGluIGJpZ3BheVxuICogQHBhcmFtIHtvYmplY3R9IFJlcHJlc2VudGluZyB0aGUgZGF0YSBuZWVkZWQgZm9yIHRoZSBoZWFkZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBSZXByZXNlbnRpbmcgdGhlIGRhdGEgbmVlZGVkIGZvciB0aGUgYm9keVxuICogQHBhcmFtIHtmdW5jdGlvbn0gZG9uZSBGdW5jdGlvbiB0byBleGVjdXRlIG9uIGEgc3VjY2Vzc2Z1bCByZXNwb25zZVxuICogQHBhcmFtIHtmdW5jdGlvbn0gZmFpbCBGdW5jdGlvbiB0byBleGVjdXRlIG9uIGEgdW5zdWNjZXNzZnVsIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBjb25zdCBzdG9yZUluc3RydW1lbnQgPSAoe1xuICAgIC8vIEhvc3RuYW1lLCBJZHMgJiBUb2tlblxuICAgIHBheW1lbnRzVXJsLFxuICAgIHNob3BwZXJJZCxcbiAgICBzdG9yZUhhc2gsXG4gICAgdmF1bHRUb2tlbixcbn0sIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgIC8vIFByb3ZpZGVyIEluZm9cbiAgICBwcm92aWRlcl9pZCxcbiAgICBjdXJyZW5jeV9jb2RlLFxuXG4gICAgLy8gSW5zdHJ1bWVudCBEZXRhaWxzXG4gICAgY3JlZGl0X2NhcmRfbnVtYmVyLFxuICAgIGV4cGlyYXRpb24sXG4gICAgbmFtZV9vbl9jYXJkLFxuICAgIGN2dixcbiAgICBkZWZhdWx0X2luc3RydW1lbnQsXG5cbiAgICAvLyBCaWxsaW5nIEFkZHJlc3NcbiAgICBhZGRyZXNzMSxcbiAgICBhZGRyZXNzMixcbiAgICBjaXR5LFxuICAgIHBvc3RhbF9jb2RlLFxuICAgIHN0YXRlX29yX3Byb3ZpbmNlX2NvZGUsXG4gICAgY291bnRyeV9jb2RlLFxuICAgIGNvbXBhbnksXG4gICAgZmlyc3RfbmFtZSxcbiAgICBsYXN0X25hbWUsXG4gICAgZW1haWwsXG4gICAgcGhvbmUsXG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xufSwgZG9uZSwgZmFpbCkgPT4ge1xuICAgIGNvbnN0IGV4cGlyeSA9IGV4cGlyYXRpb24uc3BsaXQoJy8nKTtcblxuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogYCR7cGF5bWVudHNVcmx9L3N0b3Jlcy8ke3N0b3JlSGFzaH0vY3VzdG9tZXJzLyR7c2hvcHBlcklkfS9zdG9yZWRfaW5zdHJ1bWVudHNgLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiB2YXVsdFRva2VuLFxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLmJjLnYxK2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi92bmQuYmMudjEranNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGluc3RydW1lbnQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2FyZCcsXG4gICAgICAgICAgICAgICAgY2FyZGhvbGRlcl9uYW1lOiBuYW1lX29uX2NhcmQsXG4gICAgICAgICAgICAgICAgbnVtYmVyOiBjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKGNyZWRpdF9jYXJkX251bWJlciksXG4gICAgICAgICAgICAgICAgZXhwaXJ5X21vbnRoOiBjcmVkaXRjYXJkcy5leHBpcmF0aW9uLm1vbnRoLnBhcnNlKGV4cGlyeVswXSksXG4gICAgICAgICAgICAgICAgZXhwaXJ5X3llYXI6IGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ueWVhci5wYXJzZShleHBpcnlbMV0sIHRydWUpLFxuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvbl92YWx1ZTogY3Z2LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbGxpbmdfYWRkcmVzczogb21pdE51bGxTdHJpbmcoe1xuICAgICAgICAgICAgICAgIGFkZHJlc3MxLFxuICAgICAgICAgICAgICAgIGFkZHJlc3MyLFxuICAgICAgICAgICAgICAgIGNpdHksXG4gICAgICAgICAgICAgICAgcG9zdGFsX2NvZGUsXG4gICAgICAgICAgICAgICAgc3RhdGVfb3JfcHJvdmluY2VfY29kZSxcbiAgICAgICAgICAgICAgICBjb3VudHJ5X2NvZGUsXG4gICAgICAgICAgICAgICAgY29tcGFueSxcbiAgICAgICAgICAgICAgICBmaXJzdF9uYW1lLFxuICAgICAgICAgICAgICAgIGxhc3RfbmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICBwaG9uZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcHJvdmlkZXJfaWQsXG4gICAgICAgICAgICBkZWZhdWx0X2luc3RydW1lbnQsXG4gICAgICAgICAgICBjdXJyZW5jeV9jb2RlLFxuICAgICAgICB9KSxcbiAgICB9KVxuICAgICAgICAuZG9uZShkb25lKVxuICAgICAgICAuZmFpbChmYWlsKTtcbn07XG5cbmV4cG9ydCBjb25zdCBGb3JtYXR0ZXJzID0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBmb3JtYXQgZm9yIGNyZWRpdCBjYXJkIG51bWJlclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIHNldENyZWRpdENhcmROdW1iZXJGb3JtYXQ6IGZpZWxkID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICAkKGZpZWxkKS5vbigna2V5dXAnLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZlRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSBjcmVkaXRjYXJkcy5jYXJkLmZvcm1hdChjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKHRhcmdldC52YWx1ZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIGZvcm1hdCBmb3IgZXhwaXJhdGlvbiBkYXRlXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0RXhwaXJhdGlvbkZvcm1hdDogZmllbGQgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgICQoZmllbGQpLm9uKCdrZXl1cCcsICh7IHRhcmdldCwgd2hpY2ggfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZlRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICBpZiAod2hpY2ggPT09IDggJiYgLy4qKFxcLykkLy50ZXN0KHRhcmdldC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gdGFyZ2V0LnZhbHVlLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC52YWx1ZS5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZS5zbGljZSgwLCA1KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHdoaWNoICE9PSA4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oWzEtOV1cXC98WzItOV0pJC9nLCAnMCQxLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXigwWzEtOV18MVswLTJdKSQvZywgJyQxLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXihbMC0xXSkoWzMtOV0pJC9nLCAnMCQxLyQyJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKDBbMS05XXwxWzAtMl0pKFswLTldezJ9KSQvZywgJyQxLyQyJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKFswXSspXFwvfFswXSskL2csICcwJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXlxcZFxcL118XltcXC9dKiQvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwvL2csICcvJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IFZhbGlkYXRvcnMgPSB7XG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIGNyZWRpdCBjYXJkIG51bWJlclxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXG4gICAgICovXG4gICAgc2V0Q3JlZGl0Q2FyZE51bWJlclZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGggJiYgY3JlZGl0Y2FyZHMuY2FyZC5pc1ZhbGlkKGNyZWRpdGNhcmRzLmNhcmQucGFyc2UodmFsKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBleHBpcmF0aW9uIGRhdGVcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxuICAgICAqL1xuICAgIHNldEV4cGlyYXRpb25WYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBleHBpcnkgPSB2YWwuc3BsaXQoJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHZhbC5sZW5ndGggJiYgL14oMFsxLTldfDFbMC0yXSlcXC8oWzAtOV17Mn0pJC8udGVzdCh2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgIWNyZWRpdGNhcmRzLmV4cGlyYXRpb24uaXNQYXN0KGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ubW9udGgucGFyc2UoZXhwaXJ5WzBdKSwgY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi55ZWFyLnBhcnNlKGV4cGlyeVsxXSwgdHJ1ZSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgbmFtZSBvbiBjYXJkXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcbiAgICAgKi9cbiAgICBzZXROYW1lT25DYXJkVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gISF2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgY3Z2XG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge2FueX0gY2FyZFR5cGUgVGhlIGNyZWRpdCBjYXJkIG51bWJlciB0eXBlXG4gICAgICovXG4gICAgc2V0Q3Z2VmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSwgY2FyZFR5cGUpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgY2FyZFR5cGUgPT09ICdmdW5jdGlvbicgPyBjYXJkVHlwZSgpIDogY2FyZFR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGggJiYgY3JlZGl0Y2FyZHMuY3ZjLmlzVmFsaWQodmFsLCB0eXBlKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxufTtcbiIsImltcG9ydCBzd2VldEFsZXJ0IGZyb20gJ3N3ZWV0YWxlcnQyJztcblxuLy8gU2V0IGRlZmF1bHRzIGZvciBzd2VldGFsZXJ0MiBwb3B1cCBib3hlc1xuc3dlZXRBbGVydC5zZXREZWZhdWx0cyh7XG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgIGNvbmZpcm1CdXR0b25DbGFzczogJ2J1dHRvbicsXG4gICAgY2FuY2VsQnV0dG9uQ2xhc3M6ICdidXR0b24nLFxufSk7XG5cbi8vIFJlLWV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgc3dlZXRBbGVydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=