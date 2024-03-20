module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "04f8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("2d00");
var fails = __webpack_require__("d039");
var global = __webpack_require__("da84");

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var call = __webpack_require__("c65b");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPropertyKey = __webpack_require__("a04b");
var hasOwn = __webpack_require__("1a2d");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "07fa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toLength = __webpack_require__("50c4");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ "0d51":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "13d2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var hasOwn = __webpack_require__("1a2d");
var DESCRIPTORS = __webpack_require__("83ab");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("5e77").CONFIGURABLE;
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "13d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $reduce = __webpack_require__("d58f").left;
var arrayMethodIsStrict = __webpack_require__("a640");
var CHROME_VERSION = __webpack_require__("2d00");
var IS_NODE = __webpack_require__("605d");

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: FORCED }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "14d9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");
var setArrayLength = __webpack_require__("3a34");
var doesNotExceedSafeInteger = __webpack_require__("3511");
var fails = __webpack_require__("d039");

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ }),

/***/ "1626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "1a2d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var toObject = __webpack_require__("7b0b");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isNullOrUndefined = __webpack_require__("7234");

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__("5926");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var defineBuiltIn = __webpack_require__("cb2d");
var defineGlobalProperty = __webpack_require__("6374");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = global[TARGET] && global[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "31fc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_DiscordPicker_vue_vue_type_style_index_0_id_4036fe64_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d638");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_DiscordPicker_vue_vue_type_style_index_0_id_4036fe64_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_DiscordPicker_vue_vue_type_style_index_0_id_4036fe64_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ "3511":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "3a34":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var isArray = __webpack_require__("e8b5");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ "3a9b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "40d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "485a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("c65b");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var toAbsoluteIndex = __webpack_require__("23cb");
var lengthOfArrayLike = __webpack_require__("07fa");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4e2f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*! tailwindcss v2.2.17 | MIT License | https://tailwindcss.com */\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */html{-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.15;-webkit-text-size-adjust:100%}button,input{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}p{margin:0}button{background-color:transparent;background-image:none}ul{list-style:none;margin:0;padding:0}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}*,:after,:before{box-sizing:border-box;border-width:0}*,:after,:before,img{border-style:solid}input::-moz-placeholder{opacity:1;color:#a1a1aa}input::placeholder{opacity:1;color:#a1a1aa}[role=button],button{cursor:pointer}:-moz-focusring{outline:auto}button,input{padding:0;line-height:inherit;color:inherit}img,svg{display:block;vertical-align:middle}img{max-width:100%;height:auto}[hidden]{display:none}*,:after,:before{border-color:currentColor}.vue3-emojipicker .pointer-events-none{pointer-events:none}.vue3-emojipicker .absolute{position:absolute}.vue3-emojipicker .relative{position:relative}.vue3-emojipicker .sticky{position:sticky}.vue3-emojipicker .top-0{top:0}.vue3-emojipicker .-top-4{top:-1rem}.vue3-emojipicker .right-0{right:0}.vue3-emojipicker .left-0{left:0}.vue3-emojipicker .mx-auto{margin-left:auto;margin-right:auto}.vue3-emojipicker .mt-2{margin-top:.5rem}.vue3-emojipicker .mt-4{margin-top:1rem}.vue3-emojipicker .mr-3{margin-right:.75rem}.vue3-emojipicker .mb-2{margin-bottom:.5rem}.vue3-emojipicker .mb-3{margin-bottom:.75rem}.vue3-emojipicker .ml-2{margin-left:.5rem}.vue3-emojipicker .ml-3{margin-left:.75rem}.vue3-emojipicker .ml-5{margin-left:1.25rem}.vue3-emojipicker .block{display:block}.vue3-emojipicker .flex{display:flex}.vue3-emojipicker .grid{display:grid}.vue3-emojipicker .hidden{display:none}.vue3-emojipicker .h-8{height:2rem}.vue3-emojipicker .h-9{height:2.25rem}.vue3-emojipicker .h-28{height:7rem}.vue3-emojipicker .h-auto{height:auto}.vue3-emojipicker .h-full{height:100%}.vue3-emojipicker .w-4{width:1rem}.vue3-emojipicker .w-5{width:1.25rem}.vue3-emojipicker .w-6{width:1.5rem}.vue3-emojipicker .w-8{width:2rem}.vue3-emojipicker .w-full{width:100%}.vue3-emojipicker .w-max{width:-moz-max-content;width:max-content}.vue3-emojipicker .max-w-max{max-width:-moz-max-content;max-width:max-content}.vue3-emojipicker .transform{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.vue3-emojipicker .-translate-y-full{--tw-translate-y:-100%}.vue3-emojipicker .hover\\:scale-110:hover{--tw-scale-x:1.1;--tw-scale-y:1.1}@keyframes spin{to{transform:rotate(1turn)}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes pulse{50%{opacity:.5}}@keyframes bounce{0%,to{transform:translateY(-25%);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,.2,1)}}.vue3-emojipicker .cursor-pointer{cursor:pointer}.vue3-emojipicker .grid-flow-row{grid-auto-flow:row}.vue3-emojipicker .auto-rows-auto{grid-auto-rows:auto}.vue3-emojipicker .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.vue3-emojipicker .flex-col{flex-direction:column}.vue3-emojipicker .flex-wrap{flex-wrap:wrap}.vue3-emojipicker .items-center{align-items:center}.vue3-emojipicker .justify-start{justify-content:flex-start}.vue3-emojipicker .justify-center{justify-content:center}.vue3-emojipicker .justify-between{justify-content:space-between}.vue3-emojipicker .gap-4{gap:1rem}.vue3-emojipicker .overflow-auto{overflow:auto}.vue3-emojipicker .overflow-hidden{overflow:hidden}.vue3-emojipicker .rounded-md{border-radius:.375rem}.vue3-emojipicker .rounded-lg{border-radius:.5rem}.vue3-emojipicker .rounded-xl{border-radius:.75rem}.vue3-emojipicker .border-2{border-width:2px}.vue3-emojipicker .border-t{border-top-width:1px}.vue3-emojipicker .border-transparent{border-color:transparent}.vue3-emojipicker .border-grey-600{--tw-border-opacity:1;border-color:rgba(33,34,36,var(--tw-border-opacity))}.vue3-emojipicker .hover\\:border-blue:hover{--tw-border-opacity:1;border-color:rgba(88,101,242,var(--tw-border-opacity))}.vue3-emojipicker .bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.vue3-emojipicker .bg-transparent{background-color:transparent}.vue3-emojipicker .bg-grey-300{--tw-bg-opacity:1;background-color:rgba(79,84,92,var(--tw-bg-opacity))}.vue3-emojipicker .bg-grey-400{--tw-bg-opacity:1;background-color:rgba(47,49,54,var(--tw-bg-opacity))}.vue3-emojipicker .bg-grey-600{--tw-bg-opacity:1;background-color:rgba(33,34,36,var(--tw-bg-opacity))}.vue3-emojipicker .bg-grey-700{--tw-bg-opacity:1;background-color:rgba(41,43,47,var(--tw-bg-opacity))}.vue3-emojipicker .hover\\:bg-grey-300:hover{--tw-bg-opacity:1;background-color:rgba(79,84,92,var(--tw-bg-opacity))}.vue3-emojipicker .bg-opacity-50{--tw-bg-opacity:0.5}.vue3-emojipicker .hover\\:bg-opacity-40:hover{--tw-bg-opacity:0.4}.vue3-emojipicker .hover\\:bg-opacity-50:hover{--tw-bg-opacity:0.5}.vue3-emojipicker .hover\\:bg-opacity-60:hover{--tw-bg-opacity:0.6}.vue3-emojipicker .hover\\:bg-opacity-100:hover{--tw-bg-opacity:1}.vue3-emojipicker .bg-cover{background-size:cover}.vue3-emojipicker .p-1{padding:.25rem}.vue3-emojipicker .p-4{padding:1rem}.vue3-emojipicker .px-2{padding-left:.5rem;padding-right:.5rem}.vue3-emojipicker .px-3{padding-left:.75rem;padding-right:.75rem}.vue3-emojipicker .px-4{padding-left:1rem;padding-right:1rem}.vue3-emojipicker .px-5{padding-left:1.25rem;padding-right:1.25rem}.vue3-emojipicker .py-1{padding-top:.25rem;padding-bottom:.25rem}.vue3-emojipicker .py-2{padding-top:.5rem;padding-bottom:.5rem}.vue3-emojipicker .py-3{padding-top:.75rem;padding-bottom:.75rem}.vue3-emojipicker .py-4{padding-top:1rem;padding-bottom:1rem}.vue3-emojipicker .pt-2{padding-top:.5rem}.vue3-emojipicker .pt-5{padding-top:1.25rem}.vue3-emojipicker .pr-4{padding-right:1rem}.vue3-emojipicker .pb-2{padding-bottom:.5rem}.vue3-emojipicker .pb-4{padding-bottom:1rem}.vue3-emojipicker .pb-5{padding-bottom:1.25rem}.vue3-emojipicker .text-center{text-align:center}.vue3-emojipicker .font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.vue3-emojipicker .text-xs{font-size:.75rem;line-height:1rem}.vue3-emojipicker .text-sm{font-size:.875rem;line-height:1.25rem}.vue3-emojipicker .text-base{font-size:1rem;line-height:1.5rem}.vue3-emojipicker .text-lg{font-size:1.125rem;line-height:1.75rem}.vue3-emojipicker .text-2xl{font-size:1.5rem;line-height:2rem}.vue3-emojipicker .text-3xl{font-size:1.875rem;line-height:2.25rem}.vue3-emojipicker .font-semibold{font-weight:600}.vue3-emojipicker .font-bold{font-weight:700}.vue3-emojipicker .uppercase{text-transform:uppercase}.vue3-emojipicker .text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.vue3-emojipicker .text-grey-100{--tw-text-opacity:1;color:rgba(185,187,190,var(--tw-text-opacity))}.vue3-emojipicker .placeholder-grey-200::-moz-placeholder{--tw-placeholder-opacity:1;color:rgba(113,119,125,var(--tw-placeholder-opacity))}.vue3-emojipicker .placeholder-grey-200::placeholder{--tw-placeholder-opacity:1;color:rgba(113,119,125,var(--tw-placeholder-opacity))}.vue3-emojipicker .opacity-0{opacity:0}.vue3-emojipicker .group:hover .group-hover\\:opacity-70{opacity:.7}*,:after,:before{--tw-shadow:0 0 transparent}.vue3-emojipicker .shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)}.vue3-emojipicker .shadow-lg,.vue3-emojipicker .shadow-xl{box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.vue3-emojipicker .shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)}.vue3-emojipicker .outline-none{outline:2px solid transparent;outline-offset:2px}*,:after,:before{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,0.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent}.vue3-emojipicker .filter{--tw-blur:var(--tw-empty,/*!*/ /*!*/);--tw-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-invert:var(--tw-empty,/*!*/ /*!*/);--tw-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.vue3-emojipicker .hover\\:filter-none:hover{filter:none}.vue3-emojipicker .hover\\:brightness-150:hover{--tw-brightness:brightness(1.5)}.vue3-emojipicker .grayscale{--tw-grayscale:grayscale(100%)}.vue3-emojipicker .transition{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.vue3-emojipicker .duration-200{transition-duration:.2s}.vue3-emojipicker .duration-300{transition-duration:.3s}.vue3-discord-emojipicker{height:454px;width:444px}@media (max-width:768px){.vue3-discord-emojipicker{width:300px;height:400px}}.vue3-discord-emojipicker__tabs{min-width:50px}.vue3-discord-emojipicker__tabs::-webkit-scrollbar{display:none!important}.vue3-discordpicker__container{height:calc(100% - 111px)}@media (max-width:768px){.vue3-discordpicker__container{height:100%}}.vue3-discordpicker__container ::-webkit-scrollbar{width:10px}.vue3-discordpicker__container ::-webkit-scrollbar-track{background:#2f3136;right:5px}.vue3-discordpicker__container ::-webkit-scrollbar-thumb{border-radius:100px;background:#212224}#vue3-discordpicker{scroll-behavior:smooth}.emojibutton__active .vue3-discord-emojipicker__emojibutton{width:28px}.vue3-discord-emojipicker__emojibutton{width:22px;height:22px;display:block}.-z-1{z-index:-1}.z-1{z-index:1}@media (min-width:768px){.vue3-emojipicker .md\\:block{display:block}.vue3-emojipicker .md\\:flex{display:flex}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__("5926");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var store = __webpack_require__("c6cd");

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var uncurryThis = __webpack_require__("e330");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5926":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var trunc = __webpack_require__("b42e");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "59ed":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__("1626");
var tryToString = __webpack_require__("0d51");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5e77":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var hasOwn = __webpack_require__("1a2d");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "605d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var classof = __webpack_require__("c6b6");

module.exports = classof(global.process) === 'process';


/***/ }),

/***/ "6374":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__("cdce");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var hasOwn = __webpack_require__("1a2d");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6b0d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.default = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "7234":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "7839":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var requireObjectCoercible = __webpack_require__("1d80");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__("861d");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ "861d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__("1626");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var isCallable = __webpack_require__("1626");
var store = __webpack_require__("c6cd");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "90e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "94ee":
/***/ (function(module) {

module.exports = JSON.parse("{\"categories\":[\"people\",\"animals\",\"foods\",\"travel\",\"activities\",\"objects\",\"symbols\",\"flags\"],\"list\":[{\"emoji\":\"😀\",\"category\":0,\"name\":\"grinning face\",\"version\":\"1.0\"},{\"emoji\":\"😃\",\"category\":0,\"name\":\"grinning face with big eyes\",\"version\":\"1.0\"},{\"emoji\":\"😄\",\"category\":0,\"name\":\"grinning face with smiling eyes\",\"version\":\"1.0\"},{\"emoji\":\"😁\",\"category\":0,\"name\":\"beaming face with smiling eyes\",\"version\":\"1.0\"},{\"emoji\":\"😆\",\"category\":0,\"name\":\"grinning squinting face\",\"version\":\"1.0\"},{\"emoji\":\"😅\",\"category\":0,\"name\":\"grinning face with sweat\",\"version\":\"1.0\"},{\"emoji\":\"🤣\",\"category\":0,\"name\":\"rolling on the floor laughing\",\"version\":\"3.0\"},{\"emoji\":\"😂\",\"category\":0,\"name\":\"face with tears of joy\",\"version\":\"1.0\"},{\"emoji\":\"🙂\",\"category\":0,\"name\":\"slightly smiling face\",\"version\":\"1.0\"},{\"emoji\":\"🙃\",\"category\":0,\"name\":\"upside-down face\",\"version\":\"1.0\"},{\"emoji\":\"😉\",\"category\":0,\"name\":\"winking face\",\"version\":\"1.0\"},{\"emoji\":\"😊\",\"category\":0,\"name\":\"smiling face with smiling eyes\",\"version\":\"1.0\"},{\"emoji\":\"😇\",\"category\":0,\"name\":\"smiling face with halo\",\"version\":\"1.0\"},{\"emoji\":\"🥰\",\"category\":0,\"name\":\"smiling face with hearts\",\"version\":\"11.0\"},{\"emoji\":\"😍\",\"category\":0,\"name\":\"smiling face with heart-eyes\",\"version\":\"1.0\"},{\"emoji\":\"🤩\",\"category\":0,\"name\":\"star-struck\",\"version\":\"5.0\"},{\"emoji\":\"😘\",\"category\":0,\"name\":\"face blowing a kiss\",\"version\":\"1.0\"},{\"emoji\":\"😗\",\"category\":0,\"name\":\"kissing face\",\"version\":\"1.0\"},{\"emoji\":\"😚\",\"category\":0,\"name\":\"kissing face with closed eyes\",\"version\":\"1.0\"},{\"emoji\":\"😙\",\"category\":0,\"name\":\"kissing face with smiling eyes\",\"version\":\"1.0\"},{\"emoji\":\"🥲\",\"category\":0,\"name\":\"smiling face with tear\",\"version\":\"13.0\"},{\"emoji\":\"😋\",\"category\":0,\"name\":\"face savoring food\",\"version\":\"1.0\"},{\"emoji\":\"😛\",\"category\":0,\"name\":\"face with tongue\",\"version\":\"1.0\"},{\"emoji\":\"😜\",\"category\":0,\"name\":\"winking face with tongue\",\"version\":\"1.0\"},{\"emoji\":\"🤪\",\"category\":0,\"name\":\"zany face\",\"version\":\"5.0\"},{\"emoji\":\"😝\",\"category\":0,\"name\":\"squinting face with tongue\",\"version\":\"1.0\"},{\"emoji\":\"🤑\",\"category\":0,\"name\":\"money-mouth face\",\"version\":\"1.0\"},{\"emoji\":\"🤗\",\"category\":0,\"name\":\"hugging face\",\"version\":\"1.0\"},{\"emoji\":\"🤭\",\"category\":0,\"name\":\"face with hand over mouth\",\"version\":\"5.0\"},{\"emoji\":\"🤫\",\"category\":0,\"name\":\"shushing face\",\"version\":\"5.0\"},{\"emoji\":\"🤔\",\"category\":0,\"name\":\"thinking face\",\"version\":\"1.0\"},{\"emoji\":\"🤐\",\"category\":0,\"name\":\"zipper-mouth face\",\"version\":\"1.0\"},{\"emoji\":\"🤨\",\"category\":0,\"name\":\"face with raised eyebrow\",\"version\":\"5.0\"},{\"emoji\":\"😐\",\"category\":0,\"name\":\"neutral face\",\"version\":\"1.0\"},{\"emoji\":\"😑\",\"category\":0,\"name\":\"expressionless face\",\"version\":\"1.0\"},{\"emoji\":\"😶\",\"category\":0,\"name\":\"face without mouth\",\"version\":\"1.0\"},{\"emoji\":\"😏\",\"category\":0,\"name\":\"smirking face\",\"version\":\"1.0\"},{\"emoji\":\"😒\",\"category\":0,\"name\":\"unamused face\",\"version\":\"1.0\"},{\"emoji\":\"🙄\",\"category\":0,\"name\":\"face with rolling eyes\",\"version\":\"1.0\"},{\"emoji\":\"😬\",\"category\":0,\"name\":\"grimacing face\",\"version\":\"1.0\"},{\"emoji\":\"🤥\",\"category\":0,\"name\":\"lying face\",\"version\":\"3.0\"},{\"emoji\":\"😌\",\"category\":0,\"name\":\"relieved face\",\"version\":\"1.0\"},{\"emoji\":\"😔\",\"category\":0,\"name\":\"pensive face\",\"version\":\"1.0\"},{\"emoji\":\"😪\",\"category\":0,\"name\":\"sleepy face\",\"version\":\"1.0\"},{\"emoji\":\"🤤\",\"category\":0,\"name\":\"drooling face\",\"version\":\"3.0\"},{\"emoji\":\"😴\",\"category\":0,\"name\":\"sleeping face\",\"version\":\"1.0\"},{\"emoji\":\"😷\",\"category\":0,\"name\":\"face with medical mask\",\"version\":\"1.0\"},{\"emoji\":\"🤒\",\"category\":0,\"name\":\"face with thermometer\",\"version\":\"1.0\"},{\"emoji\":\"🤕\",\"category\":0,\"name\":\"face with head-bandage\",\"version\":\"1.0\"},{\"emoji\":\"🤢\",\"category\":0,\"name\":\"nauseated face\",\"version\":\"3.0\"},{\"emoji\":\"🤮\",\"category\":0,\"name\":\"face vomiting\",\"version\":\"5.0\"},{\"emoji\":\"🤧\",\"category\":0,\"name\":\"sneezing face\",\"version\":\"3.0\"},{\"emoji\":\"🥵\",\"category\":0,\"name\":\"hot face\",\"version\":\"11.0\"},{\"emoji\":\"🥶\",\"category\":0,\"name\":\"cold face\",\"version\":\"11.0\"},{\"emoji\":\"🥴\",\"category\":0,\"name\":\"woozy face\",\"version\":\"11.0\"},{\"emoji\":\"😵\",\"category\":0,\"name\":\"dizzy face\",\"version\":\"1.0\"},{\"emoji\":\"🤯\",\"category\":0,\"name\":\"exploding head\",\"version\":\"5.0\"},{\"emoji\":\"🤠\",\"category\":0,\"name\":\"cowboy hat face\",\"version\":\"3.0\"},{\"emoji\":\"🥳\",\"category\":0,\"name\":\"partying face\",\"version\":\"11.0\"},{\"emoji\":\"🥸\",\"category\":0,\"name\":\"disguised face\",\"version\":\"13.0\"},{\"emoji\":\"😎\",\"category\":0,\"name\":\"smiling face with sunglasses\",\"version\":\"1.0\"},{\"emoji\":\"🤓\",\"category\":0,\"name\":\"nerd face\",\"version\":\"1.0\"},{\"emoji\":\"🧐\",\"category\":0,\"name\":\"face with monocle\",\"version\":\"5.0\"},{\"emoji\":\"😕\",\"category\":0,\"name\":\"confused face\",\"version\":\"1.0\"},{\"emoji\":\"😟\",\"category\":0,\"name\":\"worried face\",\"version\":\"1.0\"},{\"emoji\":\"🙁\",\"category\":0,\"name\":\"slightly frowning face\",\"version\":\"1.0\"},{\"emoji\":\"😮\",\"category\":0,\"name\":\"face with open mouth\",\"version\":\"1.0\"},{\"emoji\":\"😯\",\"category\":0,\"name\":\"hushed face\",\"version\":\"1.0\"},{\"emoji\":\"😲\",\"category\":0,\"name\":\"astonished face\",\"version\":\"1.0\"},{\"emoji\":\"😳\",\"category\":0,\"name\":\"flushed face\",\"version\":\"1.0\"},{\"emoji\":\"🥺\",\"category\":0,\"name\":\"pleading face\",\"version\":\"11.0\"},{\"emoji\":\"😦\",\"category\":0,\"name\":\"frowning face with open mouth\",\"version\":\"1.0\"},{\"emoji\":\"😧\",\"category\":0,\"name\":\"anguished face\",\"version\":\"1.0\"},{\"emoji\":\"😨\",\"category\":0,\"name\":\"fearful face\",\"version\":\"1.0\"},{\"emoji\":\"😰\",\"category\":0,\"name\":\"anxious face with sweat\",\"version\":\"1.0\"},{\"emoji\":\"😥\",\"category\":0,\"name\":\"sad but relieved face\",\"version\":\"1.0\"},{\"emoji\":\"😢\",\"category\":0,\"name\":\"crying face\",\"version\":\"1.0\"},{\"emoji\":\"😭\",\"category\":0,\"name\":\"loudly crying face\",\"version\":\"1.0\"},{\"emoji\":\"😱\",\"category\":0,\"name\":\"face screaming in fear\",\"version\":\"1.0\"},{\"emoji\":\"😖\",\"category\":0,\"name\":\"confounded face\",\"version\":\"1.0\"},{\"emoji\":\"😣\",\"category\":0,\"name\":\"persevering face\",\"version\":\"1.0\"},{\"emoji\":\"😞\",\"category\":0,\"name\":\"disappointed face\",\"version\":\"1.0\"},{\"emoji\":\"😓\",\"category\":0,\"name\":\"downcast face with sweat\",\"version\":\"1.0\"},{\"emoji\":\"😩\",\"category\":0,\"name\":\"weary face\",\"version\":\"1.0\"},{\"emoji\":\"😫\",\"category\":0,\"name\":\"tired face\",\"version\":\"1.0\"},{\"emoji\":\"🥱\",\"category\":0,\"name\":\"yawning face\",\"version\":\"12.0\"},{\"emoji\":\"😤\",\"category\":0,\"name\":\"face with steam from nose\",\"version\":\"1.0\"},{\"emoji\":\"😡\",\"category\":0,\"name\":\"pouting face\",\"version\":\"1.0\"},{\"emoji\":\"😠\",\"category\":0,\"name\":\"angry face\",\"version\":\"1.0\"},{\"emoji\":\"🤬\",\"category\":0,\"name\":\"face with symbols on mouth\",\"version\":\"5.0\"},{\"emoji\":\"😈\",\"category\":0,\"name\":\"smiling face with horns\",\"version\":\"1.0\"},{\"emoji\":\"👿\",\"category\":0,\"name\":\"angry face with horns\",\"version\":\"1.0\"},{\"emoji\":\"💀\",\"category\":0,\"name\":\"skull\",\"version\":\"1.0\"},{\"emoji\":\"☠️\",\"category\":0,\"name\":\"skull and crossbones\",\"version\":\"1.0\"},{\"emoji\":\"💩\",\"category\":0,\"name\":\"pile of poo\",\"version\":\"1.0\"},{\"emoji\":\"🤡\",\"category\":0,\"name\":\"clown face\",\"version\":\"3.0\"},{\"emoji\":\"👹\",\"category\":0,\"name\":\"ogre\",\"version\":\"1.0\"},{\"emoji\":\"👺\",\"category\":0,\"name\":\"goblin\",\"version\":\"1.0\"},{\"emoji\":\"👻\",\"category\":0,\"name\":\"ghost\",\"version\":\"1.0\"},{\"emoji\":\"👽\",\"category\":0,\"name\":\"alien\",\"version\":\"1.0\"},{\"emoji\":\"👾\",\"category\":0,\"name\":\"alien monster\",\"version\":\"1.0\"},{\"emoji\":\"🤖\",\"category\":0,\"name\":\"robot\",\"version\":\"1.0\"},{\"emoji\":\"😺\",\"category\":0,\"name\":\"grinning cat\",\"version\":\"1.0\"},{\"emoji\":\"😸\",\"category\":0,\"name\":\"grinning cat with smiling eyes\",\"version\":\"1.0\"},{\"emoji\":\"😹\",\"category\":0,\"name\":\"cat with tears of joy\",\"version\":\"1.0\"},{\"emoji\":\"😻\",\"category\":0,\"name\":\"smiling cat with heart-eyes\",\"version\":\"1.0\"},{\"emoji\":\"😼\",\"category\":0,\"name\":\"cat with wry smile\",\"version\":\"1.0\"},{\"emoji\":\"😽\",\"category\":0,\"name\":\"kissing cat\",\"version\":\"1.0\"},{\"emoji\":\"🙀\",\"category\":0,\"name\":\"weary cat\",\"version\":\"1.0\"},{\"emoji\":\"😿\",\"category\":0,\"name\":\"crying cat\",\"version\":\"1.0\"},{\"emoji\":\"😾\",\"category\":0,\"name\":\"pouting cat\",\"version\":\"1.0\"},{\"emoji\":\"🙈\",\"category\":0,\"name\":\"see-no-evil monkey\",\"version\":\"1.0\"},{\"emoji\":\"🙉\",\"category\":0,\"name\":\"hear-no-evil monkey\",\"version\":\"1.0\"},{\"emoji\":\"🙊\",\"category\":0,\"name\":\"speak-no-evil monkey\",\"version\":\"1.0\"},{\"emoji\":\"💋\",\"category\":0,\"name\":\"kiss mark\",\"version\":\"1.0\"},{\"emoji\":\"💌\",\"category\":0,\"name\":\"love letter\",\"version\":\"1.0\"},{\"emoji\":\"💘\",\"category\":0,\"name\":\"heart with arrow\",\"version\":\"1.0\"},{\"emoji\":\"💝\",\"category\":0,\"name\":\"heart with ribbon\",\"version\":\"1.0\"},{\"emoji\":\"💖\",\"category\":0,\"name\":\"sparkling heart\",\"version\":\"1.0\"},{\"emoji\":\"💗\",\"category\":0,\"name\":\"growing heart\",\"version\":\"1.0\"},{\"emoji\":\"💓\",\"category\":0,\"name\":\"beating heart\",\"version\":\"1.0\"},{\"emoji\":\"💞\",\"category\":0,\"name\":\"revolving hearts\",\"version\":\"1.0\"},{\"emoji\":\"💕\",\"category\":0,\"name\":\"two hearts\",\"version\":\"1.0\"},{\"emoji\":\"💟\",\"category\":0,\"name\":\"heart decoration\",\"version\":\"1.0\"},{\"emoji\":\"❣️\",\"category\":0,\"name\":\"heart exclamation\",\"version\":\"1.0\"},{\"emoji\":\"💔\",\"category\":0,\"name\":\"broken heart\",\"version\":\"1.0\"},{\"emoji\":\"❤️\",\"category\":0,\"name\":\"red heart\",\"version\":\"1.0\"},{\"emoji\":\"🧡\",\"category\":0,\"name\":\"orange heart\",\"version\":\"5.0\"},{\"emoji\":\"💛\",\"category\":0,\"name\":\"yellow heart\",\"version\":\"1.0\"},{\"emoji\":\"💚\",\"category\":0,\"name\":\"green heart\",\"version\":\"1.0\"},{\"emoji\":\"💙\",\"category\":0,\"name\":\"blue heart\",\"version\":\"1.0\"},{\"emoji\":\"💜\",\"category\":0,\"name\":\"purple heart\",\"version\":\"1.0\"},{\"emoji\":\"🤎\",\"category\":0,\"name\":\"brown heart\",\"version\":\"12.0\"},{\"emoji\":\"🖤\",\"category\":0,\"name\":\"black heart\",\"version\":\"3.0\"},{\"emoji\":\"🤍\",\"category\":0,\"name\":\"white heart\",\"version\":\"12.0\"},{\"emoji\":\"💯\",\"category\":0,\"name\":\"hundred points\",\"version\":\"1.0\"},{\"emoji\":\"💢\",\"category\":0,\"name\":\"anger symbol\",\"version\":\"1.0\"},{\"emoji\":\"💥\",\"category\":0,\"name\":\"collision\",\"version\":\"1.0\"},{\"emoji\":\"💫\",\"category\":0,\"name\":\"dizzy\",\"version\":\"1.0\"},{\"emoji\":\"💦\",\"category\":0,\"name\":\"sweat droplets\",\"version\":\"1.0\"},{\"emoji\":\"💨\",\"category\":0,\"name\":\"dashing away\",\"version\":\"1.0\"},{\"emoji\":\"🕳️\",\"category\":0,\"name\":\"hole\",\"version\":\"1.0\"},{\"emoji\":\"💣\",\"category\":0,\"name\":\"bomb\",\"version\":\"1.0\"},{\"emoji\":\"💬\",\"category\":0,\"name\":\"speech balloon\",\"version\":\"1.0\"},{\"emoji\":\"👁️‍🗨️\",\"category\":0,\"name\":\"eye in speech bubble\",\"version\":\"2.0\"},{\"emoji\":\"🗨️\",\"category\":0,\"name\":\"left speech bubble\",\"version\":\"2.0\"},{\"emoji\":\"🗯️\",\"category\":0,\"name\":\"right anger bubble\",\"version\":\"1.0\"},{\"emoji\":\"💭\",\"category\":0,\"name\":\"thought balloon\",\"version\":\"1.0\"},{\"emoji\":\"💤\",\"category\":0,\"name\":\"zzz\",\"version\":\"1.0\"},{\"emoji\":\"👋\",\"category\":0,\"name\":\"waving hand\",\"variations\":[\"👋🏻\",\"👋🏼\",\"👋🏽\",\"👋🏾\",\"👋🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🤚\",\"category\":0,\"name\":\"raised back of hand\",\"variations\":[\"🤚🏻\",\"🤚🏼\",\"🤚🏽\",\"🤚🏾\",\"🤚🏿\"],\"version\":\"3.0\"},{\"emoji\":\"🖐️\",\"category\":0,\"name\":\"hand with fingers splayed\",\"variations\":[\"🖐🏻\",\"🖐🏼\",\"🖐🏽\",\"🖐🏾\",\"🖐🏿\"],\"version\":\"1.0\"},{\"emoji\":\"✋\",\"category\":0,\"name\":\"raised hand\",\"variations\":[\"✋🏻\",\"✋🏼\",\"✋🏽\",\"✋🏾\",\"✋🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🖖\",\"category\":0,\"name\":\"vulcan salute\",\"variations\":[\"🖖🏻\",\"🖖🏼\",\"🖖🏽\",\"🖖🏾\",\"🖖🏿\"],\"version\":\"1.0\"},{\"emoji\":\"👌\",\"category\":0,\"name\":\"OK hand\",\"variations\":[\"👌🏻\",\"👌🏼\",\"👌🏽\",\"👌🏾\",\"👌🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🤌\",\"category\":0,\"name\":\"pinched fingers\",\"variations\":[\"🤌🏻\",\"🤌🏼\",\"🤌🏽\",\"🤌🏾\",\"🤌🏿\"],\"version\":\"13.0\"},{\"emoji\":\"🤏\",\"category\":0,\"name\":\"pinching hand\",\"variations\":[\"🤏🏻\",\"🤏🏼\",\"🤏🏽\",\"🤏🏾\",\"🤏🏿\"],\"version\":\"12.0\"},{\"emoji\":\"✌️\",\"category\":0,\"name\":\"victory hand\",\"variations\":[\"✌🏻\",\"✌🏼\",\"✌🏽\",\"✌🏾\",\"✌🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🤞\",\"category\":0,\"name\":\"crossed fingers\",\"variations\":[\"🤞🏻\",\"🤞🏼\",\"🤞🏽\",\"🤞🏾\",\"🤞🏿\"],\"version\":\"3.0\"},{\"emoji\":\"🤟\",\"category\":0,\"name\":\"love-you gesture\",\"variations\":[\"🤟🏻\",\"🤟🏼\",\"🤟🏽\",\"🤟🏾\",\"🤟🏿\"],\"version\":\"5.0\"},{\"emoji\":\"🤘\",\"category\":0,\"name\":\"sign of the horns\",\"variations\":[\"🤘🏻\",\"🤘🏼\",\"🤘🏽\",\"🤘🏾\",\"🤘🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🤙\",\"category\":0,\"name\":\"call me hand\",\"variations\":[\"🤙🏻\",\"🤙🏼\",\"🤙🏽\",\"🤙🏾\",\"🤙🏿\"],\"version\":\"3.0\"},{\"emoji\":\"👈\",\"category\":0,\"name\":\"backhand index pointing left\",\"variations\":[\"👈🏻\",\"👈🏼\",\"👈🏽\",\"👈🏾\",\"👈🏿\"],\"version\":\"1.0\"},{\"emoji\":\"👉\",\"category\":0,\"name\":\"backhand index pointing right\",\"variations\":[\"👉🏻\",\"👉🏼\",\"👉🏽\",\"👉🏾\",\"👉🏿\"],\"version\":\"1.0\"},{\"emoji\":\"👆\",\"category\":0,\"name\":\"backhand index pointing up\",\"variations\":[\"👆🏻\",\"👆🏼\",\"👆🏽\",\"👆🏾\",\"👆🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🖕\",\"category\":0,\"name\":\"middle finger\",\"variations\":[\"🖕🏻\",\"🖕🏼\",\"🖕🏽\",\"🖕🏾\",\"🖕🏿\"],\"version\":\"1.0\"},{\"emoji\":\"👇\",\"category\":0,\"name\":\"backhand index pointing down\",\"variations\":[\"👇🏻\",\"👇🏼\",\"👇🏽\",\"👇🏾\",\"👇🏿\"],\"version\":\"1.0\"},{\"emoji\":\"☝️\",\"category\":0,\"name\":\"index pointing up\",\"variations\":[\"☝🏻\",\"☝🏼\",\"☝🏽\",\"☝🏾\",\"☝🏿\"],\"version\":\"1.0\"},{\"emoji\":\"👍\",\"category\":0,\"name\":\"thumbs up\",\"variations\":[\"👍🏻\",\"👍🏼\",\"👍🏽\",\"👍🏾\",\"👍🏿\"],\"version\":\"1.0\"},{\"emoji\":\"👎\",\"category\":0,\"name\":\"thumbs down\",\"variations\":[\"👎🏻\",\"👎🏼\",\"👎🏽\",\"👎🏾\",\"👎🏿\"],\"version\":\"1.0\"},{\"emoji\":\"✊\",\"category\":0,\"name\":\"raised fist\",\"variations\":[\"✊🏻\",\"✊🏼\",\"✊🏽\",\"✊🏾\",\"✊🏿\"],\"version\":\"1.0\"},{\"emoji\":\"👊\",\"category\":0,\"name\":\"oncoming fist\",\"variations\":[\"👊🏻\",\"👊🏼\",\"👊🏽\",\"👊🏾\",\"👊🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🤛\",\"category\":0,\"name\":\"left-facing fist\",\"variations\":[\"🤛🏻\",\"🤛🏼\",\"🤛🏽\",\"🤛🏾\",\"🤛🏿\"],\"version\":\"3.0\"},{\"emoji\":\"🤜\",\"category\":0,\"name\":\"right-facing fist\",\"variations\":[\"🤜🏻\",\"🤜🏼\",\"🤜🏽\",\"🤜🏾\",\"🤜🏿\"],\"version\":\"3.0\"},{\"emoji\":\"👏\",\"category\":0,\"name\":\"clapping hands\",\"variations\":[\"👏🏻\",\"👏🏼\",\"👏🏽\",\"👏🏾\",\"👏🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🙌\",\"category\":0,\"name\":\"raising hands\",\"variations\":[\"🙌🏻\",\"🙌🏼\",\"🙌🏽\",\"🙌🏾\",\"🙌🏿\"],\"version\":\"1.0\"},{\"emoji\":\"👐\",\"category\":0,\"name\":\"open hands\",\"variations\":[\"👐🏻\",\"👐🏼\",\"👐🏽\",\"👐🏾\",\"👐🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🤲\",\"category\":0,\"name\":\"palms up together\",\"variations\":[\"🤲🏻\",\"🤲🏼\",\"🤲🏽\",\"🤲🏾\",\"🤲🏿\"],\"version\":\"5.0\"},{\"emoji\":\"🤝\",\"category\":0,\"name\":\"handshake\",\"version\":\"3.0\"},{\"emoji\":\"🙏\",\"category\":0,\"name\":\"folded hands\",\"variations\":[\"🙏🏻\",\"🙏🏼\",\"🙏🏽\",\"🙏🏾\",\"🙏🏿\"],\"version\":\"1.0\"},{\"emoji\":\"✍️\",\"category\":0,\"name\":\"writing hand\",\"variations\":[\"✍🏻\",\"✍🏼\",\"✍🏽\",\"✍🏾\",\"✍🏿\"],\"version\":\"1.0\"},{\"emoji\":\"💅\",\"category\":0,\"name\":\"nail polish\",\"variations\":[\"💅🏻\",\"💅🏼\",\"💅🏽\",\"💅🏾\",\"💅🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🤳\",\"category\":0,\"name\":\"selfie\",\"variations\":[\"🤳🏻\",\"🤳🏼\",\"🤳🏽\",\"🤳🏾\",\"🤳🏿\"],\"version\":\"3.0\"},{\"emoji\":\"💪\",\"category\":0,\"name\":\"flexed biceps\",\"variations\":[\"💪🏻\",\"💪🏼\",\"💪🏽\",\"💪🏾\",\"💪🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🦾\",\"category\":0,\"name\":\"mechanical arm\",\"version\":\"12.0\"},{\"emoji\":\"🦿\",\"category\":0,\"name\":\"mechanical leg\",\"version\":\"12.0\"},{\"emoji\":\"🦵\",\"category\":0,\"name\":\"leg\",\"variations\":[\"🦵🏻\",\"🦵🏼\",\"🦵🏽\",\"🦵🏾\",\"🦵🏿\"],\"version\":\"11.0\"},{\"emoji\":\"🦶\",\"category\":0,\"name\":\"foot\",\"variations\":[\"🦶🏻\",\"🦶🏼\",\"🦶🏽\",\"🦶🏾\",\"🦶🏿\"],\"version\":\"11.0\"},{\"emoji\":\"👂\",\"category\":0,\"name\":\"ear\",\"variations\":[\"👂🏻\",\"👂🏼\",\"👂🏽\",\"👂🏾\",\"👂🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🦻\",\"category\":0,\"name\":\"ear with hearing aid\",\"variations\":[\"🦻🏻\",\"🦻🏼\",\"🦻🏽\",\"🦻🏾\",\"🦻🏿\"],\"version\":\"12.0\"},{\"emoji\":\"👃\",\"category\":0,\"name\":\"nose\",\"variations\":[\"👃🏻\",\"👃🏼\",\"👃🏽\",\"👃🏾\",\"👃🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🧠\",\"category\":0,\"name\":\"brain\",\"version\":\"5.0\"},{\"emoji\":\"🫀\",\"category\":0,\"name\":\"anatomical heart\",\"version\":\"13.0\"},{\"emoji\":\"🫁\",\"category\":0,\"name\":\"lungs\",\"version\":\"13.0\"},{\"emoji\":\"🦷\",\"category\":0,\"name\":\"tooth\",\"version\":\"11.0\"},{\"emoji\":\"🦴\",\"category\":0,\"name\":\"bone\",\"version\":\"11.0\"},{\"emoji\":\"👀\",\"category\":0,\"name\":\"eyes\",\"version\":\"1.0\"},{\"emoji\":\"👁️\",\"category\":0,\"name\":\"eye\",\"version\":\"1.0\"},{\"emoji\":\"👅\",\"category\":0,\"name\":\"tongue\",\"version\":\"1.0\"},{\"emoji\":\"👄\",\"category\":0,\"name\":\"mouth\",\"version\":\"1.0\"},{\"emoji\":\"👶\",\"category\":0,\"name\":\"baby\",\"variations\":[\"👶🏻\",\"👶🏼\",\"👶🏽\",\"👶🏾\",\"👶🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🧒\",\"category\":0,\"name\":\"child\",\"variations\":[\"🧒🏻\",\"🧒🏼\",\"🧒🏽\",\"🧒🏾\",\"🧒🏿\"],\"version\":\"5.0\"},{\"emoji\":\"👦\",\"category\":0,\"name\":\"boy\",\"variations\":[\"👦🏻\",\"👦🏼\",\"👦🏽\",\"👦🏾\",\"👦🏿\"],\"version\":\"1.0\"},{\"emoji\":\"👧\",\"category\":0,\"name\":\"girl\",\"variations\":[\"👧🏻\",\"👧🏼\",\"👧🏽\",\"👧🏾\",\"👧🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🧑\",\"category\":0,\"name\":\"person\",\"variations\":[\"🧑🏻\",\"🧑🏼\",\"🧑🏽\",\"🧑🏾\",\"🧑🏿\"],\"version\":\"5.0\"},{\"emoji\":\"👱\",\"category\":0,\"name\":\"person with blond hair\",\"variations\":[\"👱🏻\",\"👱🏼\",\"👱🏽\",\"👱🏾\",\"👱🏿\"],\"version\":\"1.0\"},{\"emoji\":\"👨\",\"category\":0,\"name\":\"man\",\"variations\":[\"👨🏻\",\"👨🏼\",\"👨🏽\",\"👨🏾\",\"👨🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🧔\",\"category\":0,\"name\":\"man with beard\",\"variations\":[\"🧔🏻\",\"🧔🏼\",\"🧔🏽\",\"🧔🏾\",\"🧔🏿\"],\"version\":\"5.0\"},{\"emoji\":\"👨‍🦰\",\"category\":0,\"name\":\"man with red hair\",\"variations\":[\"👨🏻‍🦰\",\"👨🏼‍🦰\",\"👨🏽‍🦰\",\"👨🏾‍🦰\",\"👨🏿‍🦰\"],\"version\":\"11.0\"},{\"emoji\":\"👨‍🦱\",\"category\":0,\"name\":\"man with curly hair\",\"variations\":[\"👨🏻‍🦱\",\"👨🏼‍🦱\",\"👨🏽‍🦱\",\"👨🏾‍🦱\",\"👨🏿‍🦱\"],\"version\":\"11.0\"},{\"emoji\":\"👨‍🦳\",\"category\":0,\"name\":\"man with white hair\",\"variations\":[\"👨🏻‍🦳\",\"👨🏼‍🦳\",\"👨🏽‍🦳\",\"👨🏾‍🦳\",\"👨🏿‍🦳\"],\"version\":\"11.0\"},{\"emoji\":\"👨‍🦲\",\"category\":0,\"name\":\"man with no hair\",\"variations\":[\"👨🏻‍🦲\",\"👨🏼‍🦲\",\"👨🏽‍🦲\",\"👨🏾‍🦲\",\"👨🏿‍🦲\"],\"version\":\"11.0\"},{\"emoji\":\"👩\",\"category\":0,\"name\":\"woman\",\"variations\":[\"👩🏻\",\"👩🏼\",\"👩🏽\",\"👩🏾\",\"👩🏿\"],\"version\":\"1.0\"},{\"emoji\":\"👩‍🦰\",\"category\":0,\"name\":\"woman with red hair\",\"variations\":[\"👩🏻‍🦰\",\"👩🏼‍🦰\",\"👩🏽‍🦰\",\"👩🏾‍🦰\",\"👩🏿‍🦰\"],\"version\":\"11.0\"},{\"emoji\":\"🧑‍🦰\",\"category\":0,\"name\":\"person with red hair\",\"variations\":[\"🧑🏻‍🦰\",\"🧑🏼‍🦰\",\"🧑🏽‍🦰\",\"🧑🏾‍🦰\",\"🧑🏿‍🦰\"],\"version\":\"12.1\"},{\"emoji\":\"👩‍🦱\",\"category\":0,\"name\":\"woman with curly hair\",\"variations\":[\"👩🏻‍🦱\",\"👩🏼‍🦱\",\"👩🏽‍🦱\",\"👩🏾‍🦱\",\"👩🏿‍🦱\"],\"version\":\"11.0\"},{\"emoji\":\"🧑‍🦱\",\"category\":0,\"name\":\"person with curly hair\",\"variations\":[\"🧑🏻‍🦱\",\"🧑🏼‍🦱\",\"🧑🏽‍🦱\",\"🧑🏾‍🦱\",\"🧑🏿‍🦱\"],\"version\":\"12.1\"},{\"emoji\":\"👩‍🦳\",\"category\":0,\"name\":\"woman with white hair\",\"variations\":[\"👩🏻‍🦳\",\"👩🏼‍🦳\",\"👩🏽‍🦳\",\"👩🏾‍🦳\",\"👩🏿‍🦳\"],\"version\":\"11.0\"},{\"emoji\":\"🧑‍🦳\",\"category\":0,\"name\":\"person with white hair\",\"variations\":[\"🧑🏻‍🦳\",\"🧑🏼‍🦳\",\"🧑🏽‍🦳\",\"🧑🏾‍🦳\",\"🧑🏿‍🦳\"],\"version\":\"12.1\"},{\"emoji\":\"👩‍🦲\",\"category\":0,\"name\":\"woman with no hair\",\"variations\":[\"👩🏻‍🦲\",\"👩🏼‍🦲\",\"👩🏽‍🦲\",\"👩🏾‍🦲\",\"👩🏿‍🦲\"],\"version\":\"11.0\"},{\"emoji\":\"🧑‍🦲\",\"category\":0,\"name\":\"person with no hair\",\"variations\":[\"🧑🏻‍🦲\",\"🧑🏼‍🦲\",\"🧑🏽‍🦲\",\"🧑🏾‍🦲\",\"🧑🏿‍🦲\"],\"version\":\"12.1\"},{\"emoji\":\"👱‍♀️\",\"category\":0,\"name\":\"woman with blond hair\",\"variations\":[\"👱🏻‍♀️\",\"👱🏼‍♀️\",\"👱🏽‍♀️\",\"👱🏾‍♀️\",\"👱🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"👱‍♂️\",\"category\":0,\"name\":\"man with blond hair\",\"variations\":[\"👱🏻‍♂️\",\"👱🏼‍♂️\",\"👱🏽‍♂️\",\"👱🏾‍♂️\",\"👱🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"🧓\",\"category\":0,\"name\":\"older person\",\"variations\":[\"🧓🏻\",\"🧓🏼\",\"🧓🏽\",\"🧓🏾\",\"🧓🏿\"],\"version\":\"5.0\"},{\"emoji\":\"👴\",\"category\":0,\"name\":\"old man\",\"variations\":[\"👴🏻\",\"👴🏼\",\"👴🏽\",\"👴🏾\",\"👴🏿\"],\"version\":\"1.0\"},{\"emoji\":\"👵\",\"category\":0,\"name\":\"old woman\",\"variations\":[\"👵🏻\",\"👵🏼\",\"👵🏽\",\"👵🏾\",\"👵🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🙍\",\"category\":0,\"name\":\"person frowning\",\"variations\":[\"🙍🏻\",\"🙍🏼\",\"🙍🏽\",\"🙍🏾\",\"🙍🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🙍‍♂️\",\"category\":0,\"name\":\"man frowning\",\"variations\":[\"🙍🏻‍♂️\",\"🙍🏼‍♂️\",\"🙍🏽‍♂️\",\"🙍🏾‍♂️\",\"🙍🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"🙍‍♀️\",\"category\":0,\"name\":\"woman frowning\",\"variations\":[\"🙍🏻‍♀️\",\"🙍🏼‍♀️\",\"🙍🏽‍♀️\",\"🙍🏾‍♀️\",\"🙍🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"🙎\",\"category\":0,\"name\":\"person pouting\",\"variations\":[\"🙎🏻\",\"🙎🏼\",\"🙎🏽\",\"🙎🏾\",\"🙎🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🙎‍♂️\",\"category\":0,\"name\":\"man pouting\",\"variations\":[\"🙎🏻‍♂️\",\"🙎🏼‍♂️\",\"🙎🏽‍♂️\",\"🙎🏾‍♂️\",\"🙎🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"🙎‍♀️\",\"category\":0,\"name\":\"woman pouting\",\"variations\":[\"🙎🏻‍♀️\",\"🙎🏼‍♀️\",\"🙎🏽‍♀️\",\"🙎🏾‍♀️\",\"🙎🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"🙅\",\"category\":0,\"name\":\"person gesturing NO\",\"variations\":[\"🙅🏻\",\"🙅🏼\",\"🙅🏽\",\"🙅🏾\",\"🙅🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🙅‍♂️\",\"category\":0,\"name\":\"man gesturing NO\",\"variations\":[\"🙅🏻‍♂️\",\"🙅🏼‍♂️\",\"🙅🏽‍♂️\",\"🙅🏾‍♂️\",\"🙅🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"🙅‍♀️\",\"category\":0,\"name\":\"woman gesturing NO\",\"variations\":[\"🙅🏻‍♀️\",\"🙅🏼‍♀️\",\"🙅🏽‍♀️\",\"🙅🏾‍♀️\",\"🙅🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"🙆\",\"category\":0,\"name\":\"person gesturing OK\",\"variations\":[\"🙆🏻\",\"🙆🏼\",\"🙆🏽\",\"🙆🏾\",\"🙆🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🙆‍♂️\",\"category\":0,\"name\":\"man gesturing OK\",\"variations\":[\"🙆🏻‍♂️\",\"🙆🏼‍♂️\",\"🙆🏽‍♂️\",\"🙆🏾‍♂️\",\"🙆🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"🙆‍♀️\",\"category\":0,\"name\":\"woman gesturing OK\",\"variations\":[\"🙆🏻‍♀️\",\"🙆🏼‍♀️\",\"🙆🏽‍♀️\",\"🙆🏾‍♀️\",\"🙆🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"💁\",\"category\":0,\"name\":\"person tipping hand\",\"variations\":[\"💁🏻\",\"💁🏼\",\"💁🏽\",\"💁🏾\",\"💁🏿\"],\"version\":\"1.0\"},{\"emoji\":\"💁‍♂️\",\"category\":0,\"name\":\"man tipping hand\",\"variations\":[\"💁🏻‍♂️\",\"💁🏼‍♂️\",\"💁🏽‍♂️\",\"💁🏾‍♂️\",\"💁🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"💁‍♀️\",\"category\":0,\"name\":\"woman tipping hand\",\"variations\":[\"💁🏻‍♀️\",\"💁🏼‍♀️\",\"💁🏽‍♀️\",\"💁🏾‍♀️\",\"💁🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"🙋\",\"category\":0,\"name\":\"person raising hand\",\"variations\":[\"🙋🏻\",\"🙋🏼\",\"🙋🏽\",\"🙋🏾\",\"🙋🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🙋‍♂️\",\"category\":0,\"name\":\"man raising hand\",\"variations\":[\"🙋🏻‍♂️\",\"🙋🏼‍♂️\",\"🙋🏽‍♂️\",\"🙋🏾‍♂️\",\"🙋🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"🙋‍♀️\",\"category\":0,\"name\":\"woman raising hand\",\"variations\":[\"🙋🏻‍♀️\",\"🙋🏼‍♀️\",\"🙋🏽‍♀️\",\"🙋🏾‍♀️\",\"🙋🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"🧏\",\"category\":0,\"name\":\"deaf person\",\"variations\":[\"🧏🏻\",\"🧏🏼\",\"🧏🏽\",\"🧏🏾\",\"🧏🏿\"],\"version\":\"12.0\"},{\"emoji\":\"🧏‍♂️\",\"category\":0,\"name\":\"deaf man\",\"variations\":[\"🧏🏻‍♂️\",\"🧏🏼‍♂️\",\"🧏🏽‍♂️\",\"🧏🏾‍♂️\",\"🧏🏿‍♂️\"],\"version\":\"12.0\"},{\"emoji\":\"🧏‍♀️\",\"category\":0,\"name\":\"deaf woman\",\"variations\":[\"🧏🏻‍♀️\",\"🧏🏼‍♀️\",\"🧏🏽‍♀️\",\"🧏🏾‍♀️\",\"🧏🏿‍♀️\"],\"version\":\"12.0\"},{\"emoji\":\"🙇\",\"category\":0,\"name\":\"person bowing\",\"variations\":[\"🙇🏻\",\"🙇🏼\",\"🙇🏽\",\"🙇🏾\",\"🙇🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🙇‍♂️\",\"category\":0,\"name\":\"man bowing\",\"variations\":[\"🙇🏻‍♂️\",\"🙇🏼‍♂️\",\"🙇🏽‍♂️\",\"🙇🏾‍♂️\",\"🙇🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"🙇‍♀️\",\"category\":0,\"name\":\"woman bowing\",\"variations\":[\"🙇🏻‍♀️\",\"🙇🏼‍♀️\",\"🙇🏽‍♀️\",\"🙇🏾‍♀️\",\"🙇🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"🤦\",\"category\":0,\"name\":\"person facepalming\",\"variations\":[\"🤦🏻\",\"🤦🏼\",\"🤦🏽\",\"🤦🏾\",\"🤦🏿\"],\"version\":\"3.0\"},{\"emoji\":\"🤦‍♂️\",\"category\":0,\"name\":\"man facepalming\",\"variations\":[\"🤦🏻‍♂️\",\"🤦🏼‍♂️\",\"🤦🏽‍♂️\",\"🤦🏾‍♂️\",\"🤦🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"🤦‍♀️\",\"category\":0,\"name\":\"woman facepalming\",\"variations\":[\"🤦🏻‍♀️\",\"🤦🏼‍♀️\",\"🤦🏽‍♀️\",\"🤦🏾‍♀️\",\"🤦🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"🤷\",\"category\":0,\"name\":\"person shrugging\",\"variations\":[\"🤷🏻\",\"🤷🏼\",\"🤷🏽\",\"🤷🏾\",\"🤷🏿\"],\"version\":\"3.0\"},{\"emoji\":\"🤷‍♂️\",\"category\":0,\"name\":\"man shrugging\",\"variations\":[\"🤷🏻‍♂️\",\"🤷🏼‍♂️\",\"🤷🏽‍♂️\",\"🤷🏾‍♂️\",\"🤷🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"🤷‍♀️\",\"category\":0,\"name\":\"woman shrugging\",\"variations\":[\"🤷🏻‍♀️\",\"🤷🏼‍♀️\",\"🤷🏽‍♀️\",\"🤷🏾‍♀️\",\"🤷🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"🧑‍⚕️\",\"category\":0,\"name\":\"health worker\",\"variations\":[\"🧑🏻‍⚕️\",\"🧑🏼‍⚕️\",\"🧑🏽‍⚕️\",\"🧑🏾‍⚕️\",\"🧑🏿‍⚕️\"],\"version\":\"12.1\"},{\"emoji\":\"👨‍⚕️\",\"category\":0,\"name\":\"man health worker\",\"variations\":[\"👨🏻‍⚕️\",\"👨🏼‍⚕️\",\"👨🏽‍⚕️\",\"👨🏾‍⚕️\",\"👨🏿‍⚕️\"],\"version\":\"4.0\"},{\"emoji\":\"👩‍⚕️\",\"category\":0,\"name\":\"woman health worker\",\"variations\":[\"👩🏻‍⚕️\",\"👩🏼‍⚕️\",\"👩🏽‍⚕️\",\"👩🏾‍⚕️\",\"👩🏿‍⚕️\"],\"version\":\"4.0\"},{\"emoji\":\"🧑‍🎓\",\"category\":0,\"name\":\"student\",\"variations\":[\"🧑🏻‍🎓\",\"🧑🏼‍🎓\",\"🧑🏽‍🎓\",\"🧑🏾‍🎓\",\"🧑🏿‍🎓\"],\"version\":\"12.1\"},{\"emoji\":\"👨‍🎓\",\"category\":0,\"name\":\"man student\",\"variations\":[\"👨🏻‍🎓\",\"👨🏼‍🎓\",\"👨🏽‍🎓\",\"👨🏾‍🎓\",\"👨🏿‍🎓\"],\"version\":\"4.0\"},{\"emoji\":\"👩‍🎓\",\"category\":0,\"name\":\"woman student\",\"variations\":[\"👩🏻‍🎓\",\"👩🏼‍🎓\",\"👩🏽‍🎓\",\"👩🏾‍🎓\",\"👩🏿‍🎓\"],\"version\":\"4.0\"},{\"emoji\":\"🧑‍🏫\",\"category\":0,\"name\":\"teacher\",\"variations\":[\"🧑🏻‍🏫\",\"🧑🏼‍🏫\",\"🧑🏽‍🏫\",\"🧑🏾‍🏫\",\"🧑🏿‍🏫\"],\"version\":\"12.1\"},{\"emoji\":\"👨‍🏫\",\"category\":0,\"name\":\"man teacher\",\"variations\":[\"👨🏻‍🏫\",\"👨🏼‍🏫\",\"👨🏽‍🏫\",\"👨🏾‍🏫\",\"👨🏿‍🏫\"],\"version\":\"4.0\"},{\"emoji\":\"👩‍🏫\",\"category\":0,\"name\":\"woman teacher\",\"variations\":[\"👩🏻‍🏫\",\"👩🏼‍🏫\",\"👩🏽‍🏫\",\"👩🏾‍🏫\",\"👩🏿‍🏫\"],\"version\":\"4.0\"},{\"emoji\":\"🧑‍⚖️\",\"category\":0,\"name\":\"judge\",\"variations\":[\"🧑🏻‍⚖️\",\"🧑🏼‍⚖️\",\"🧑🏽‍⚖️\",\"🧑🏾‍⚖️\",\"🧑🏿‍⚖️\"],\"version\":\"12.1\"},{\"emoji\":\"👨‍⚖️\",\"category\":0,\"name\":\"man judge\",\"variations\":[\"👨🏻‍⚖️\",\"👨🏼‍⚖️\",\"👨🏽‍⚖️\",\"👨🏾‍⚖️\",\"👨🏿‍⚖️\"],\"version\":\"4.0\"},{\"emoji\":\"👩‍⚖️\",\"category\":0,\"name\":\"woman judge\",\"variations\":[\"👩🏻‍⚖️\",\"👩🏼‍⚖️\",\"👩🏽‍⚖️\",\"👩🏾‍⚖️\",\"👩🏿‍⚖️\"],\"version\":\"4.0\"},{\"emoji\":\"🧑‍🌾\",\"category\":0,\"name\":\"farmer\",\"variations\":[\"🧑🏻‍🌾\",\"🧑🏼‍🌾\",\"🧑🏽‍🌾\",\"🧑🏾‍🌾\",\"🧑🏿‍🌾\"],\"version\":\"12.1\"},{\"emoji\":\"👨‍🌾\",\"category\":0,\"name\":\"man farmer\",\"variations\":[\"👨🏻‍🌾\",\"👨🏼‍🌾\",\"👨🏽‍🌾\",\"👨🏾‍🌾\",\"👨🏿‍🌾\"],\"version\":\"4.0\"},{\"emoji\":\"👩‍🌾\",\"category\":0,\"name\":\"woman farmer\",\"variations\":[\"👩🏻‍🌾\",\"👩🏼‍🌾\",\"👩🏽‍🌾\",\"👩🏾‍🌾\",\"👩🏿‍🌾\"],\"version\":\"4.0\"},{\"emoji\":\"🧑‍🍳\",\"category\":0,\"name\":\"cook\",\"variations\":[\"🧑🏻‍🍳\",\"🧑🏼‍🍳\",\"🧑🏽‍🍳\",\"🧑🏾‍🍳\",\"🧑🏿‍🍳\"],\"version\":\"12.1\"},{\"emoji\":\"👨‍🍳\",\"category\":0,\"name\":\"man cook\",\"variations\":[\"👨🏻‍🍳\",\"👨🏼‍🍳\",\"👨🏽‍🍳\",\"👨🏾‍🍳\",\"👨🏿‍🍳\"],\"version\":\"4.0\"},{\"emoji\":\"👩‍🍳\",\"category\":0,\"name\":\"woman cook\",\"variations\":[\"👩🏻‍🍳\",\"👩🏼‍🍳\",\"👩🏽‍🍳\",\"👩🏾‍🍳\",\"👩🏿‍🍳\"],\"version\":\"4.0\"},{\"emoji\":\"🧑‍🔧\",\"category\":0,\"name\":\"mechanic\",\"variations\":[\"🧑🏻‍🔧\",\"🧑🏼‍🔧\",\"🧑🏽‍🔧\",\"🧑🏾‍🔧\",\"🧑🏿‍🔧\"],\"version\":\"12.1\"},{\"emoji\":\"👨‍🔧\",\"category\":0,\"name\":\"man mechanic\",\"variations\":[\"👨🏻‍🔧\",\"👨🏼‍🔧\",\"👨🏽‍🔧\",\"👨🏾‍🔧\",\"👨🏿‍🔧\"],\"version\":\"4.0\"},{\"emoji\":\"👩‍🔧\",\"category\":0,\"name\":\"woman mechanic\",\"variations\":[\"👩🏻‍🔧\",\"👩🏼‍🔧\",\"👩🏽‍🔧\",\"👩🏾‍🔧\",\"👩🏿‍🔧\"],\"version\":\"4.0\"},{\"emoji\":\"🧑‍🏭\",\"category\":0,\"name\":\"factory worker\",\"variations\":[\"🧑🏻‍🏭\",\"🧑🏼‍🏭\",\"🧑🏽‍🏭\",\"🧑🏾‍🏭\",\"🧑🏿‍🏭\"],\"version\":\"12.1\"},{\"emoji\":\"👨‍🏭\",\"category\":0,\"name\":\"man factory worker\",\"variations\":[\"👨🏻‍🏭\",\"👨🏼‍🏭\",\"👨🏽‍🏭\",\"👨🏾‍🏭\",\"👨🏿‍🏭\"],\"version\":\"4.0\"},{\"emoji\":\"👩‍🏭\",\"category\":0,\"name\":\"woman factory worker\",\"variations\":[\"👩🏻‍🏭\",\"👩🏼‍🏭\",\"👩🏽‍🏭\",\"👩🏾‍🏭\",\"👩🏿‍🏭\"],\"version\":\"4.0\"},{\"emoji\":\"🧑‍💼\",\"category\":0,\"name\":\"office worker\",\"variations\":[\"🧑🏻‍💼\",\"🧑🏼‍💼\",\"🧑🏽‍💼\",\"🧑🏾‍💼\",\"🧑🏿‍💼\"],\"version\":\"12.1\"},{\"emoji\":\"👨‍💼\",\"category\":0,\"name\":\"man office worker\",\"variations\":[\"👨🏻‍💼\",\"👨🏼‍💼\",\"👨🏽‍💼\",\"👨🏾‍💼\",\"👨🏿‍💼\"],\"version\":\"4.0\"},{\"emoji\":\"👩‍💼\",\"category\":0,\"name\":\"woman office worker\",\"variations\":[\"👩🏻‍💼\",\"👩🏼‍💼\",\"👩🏽‍💼\",\"👩🏾‍💼\",\"👩🏿‍💼\"],\"version\":\"4.0\"},{\"emoji\":\"🧑‍🔬\",\"category\":0,\"name\":\"scientist\",\"variations\":[\"🧑🏻‍🔬\",\"🧑🏼‍🔬\",\"🧑🏽‍🔬\",\"🧑🏾‍🔬\",\"🧑🏿‍🔬\"],\"version\":\"12.1\"},{\"emoji\":\"👨‍🔬\",\"category\":0,\"name\":\"man scientist\",\"variations\":[\"👨🏻‍🔬\",\"👨🏼‍🔬\",\"👨🏽‍🔬\",\"👨🏾‍🔬\",\"👨🏿‍🔬\"],\"version\":\"4.0\"},{\"emoji\":\"👩‍🔬\",\"category\":0,\"name\":\"woman scientist\",\"variations\":[\"👩🏻‍🔬\",\"👩🏼‍🔬\",\"👩🏽‍🔬\",\"👩🏾‍🔬\",\"👩🏿‍🔬\"],\"version\":\"4.0\"},{\"emoji\":\"🧑‍💻\",\"category\":0,\"name\":\"technologist\",\"variations\":[\"🧑🏻‍💻\",\"🧑🏼‍💻\",\"🧑🏽‍💻\",\"🧑🏾‍💻\",\"🧑🏿‍💻\"],\"version\":\"12.1\"},{\"emoji\":\"👨‍💻\",\"category\":0,\"name\":\"man technologist\",\"variations\":[\"👨🏻‍💻\",\"👨🏼‍💻\",\"👨🏽‍💻\",\"👨🏾‍💻\",\"👨🏿‍💻\"],\"version\":\"4.0\"},{\"emoji\":\"👩‍💻\",\"category\":0,\"name\":\"woman technologist\",\"variations\":[\"👩🏻‍💻\",\"👩🏼‍💻\",\"👩🏽‍💻\",\"👩🏾‍💻\",\"👩🏿‍💻\"],\"version\":\"4.0\"},{\"emoji\":\"🧑‍🎤\",\"category\":0,\"name\":\"singer\",\"variations\":[\"🧑🏻‍🎤\",\"🧑🏼‍🎤\",\"🧑🏽‍🎤\",\"🧑🏾‍🎤\",\"🧑🏿‍🎤\"],\"version\":\"12.1\"},{\"emoji\":\"👨‍🎤\",\"category\":0,\"name\":\"man singer\",\"variations\":[\"👨🏻‍🎤\",\"👨🏼‍🎤\",\"👨🏽‍🎤\",\"👨🏾‍🎤\",\"👨🏿‍🎤\"],\"version\":\"4.0\"},{\"emoji\":\"👩‍🎤\",\"category\":0,\"name\":\"woman singer\",\"variations\":[\"👩🏻‍🎤\",\"👩🏼‍🎤\",\"👩🏽‍🎤\",\"👩🏾‍🎤\",\"👩🏿‍🎤\"],\"version\":\"4.0\"},{\"emoji\":\"🧑‍🎨\",\"category\":0,\"name\":\"artist\",\"variations\":[\"🧑🏻‍🎨\",\"🧑🏼‍🎨\",\"🧑🏽‍🎨\",\"🧑🏾‍🎨\",\"🧑🏿‍🎨\"],\"version\":\"12.1\"},{\"emoji\":\"👨‍🎨\",\"category\":0,\"name\":\"man artist\",\"variations\":[\"👨🏻‍🎨\",\"👨🏼‍🎨\",\"👨🏽‍🎨\",\"👨🏾‍🎨\",\"👨🏿‍🎨\"],\"version\":\"4.0\"},{\"emoji\":\"👩‍🎨\",\"category\":0,\"name\":\"woman artist\",\"variations\":[\"👩🏻‍🎨\",\"👩🏼‍🎨\",\"👩🏽‍🎨\",\"👩🏾‍🎨\",\"👩🏿‍🎨\"],\"version\":\"4.0\"},{\"emoji\":\"🧑‍✈️\",\"category\":0,\"name\":\"pilot\",\"variations\":[\"🧑🏻‍✈️\",\"🧑🏼‍✈️\",\"🧑🏽‍✈️\",\"🧑🏾‍✈️\",\"🧑🏿‍✈️\"],\"version\":\"12.1\"},{\"emoji\":\"👨‍✈️\",\"category\":0,\"name\":\"man pilot\",\"variations\":[\"👨🏻‍✈️\",\"👨🏼‍✈️\",\"👨🏽‍✈️\",\"👨🏾‍✈️\",\"👨🏿‍✈️\"],\"version\":\"4.0\"},{\"emoji\":\"👩‍✈️\",\"category\":0,\"name\":\"woman pilot\",\"variations\":[\"👩🏻‍✈️\",\"👩🏼‍✈️\",\"👩🏽‍✈️\",\"👩🏾‍✈️\",\"👩🏿‍✈️\"],\"version\":\"4.0\"},{\"emoji\":\"🧑‍🚀\",\"category\":0,\"name\":\"astronaut\",\"variations\":[\"🧑🏻‍🚀\",\"🧑🏼‍🚀\",\"🧑🏽‍🚀\",\"🧑🏾‍🚀\",\"🧑🏿‍🚀\"],\"version\":\"12.1\"},{\"emoji\":\"👨‍🚀\",\"category\":0,\"name\":\"man astronaut\",\"variations\":[\"👨🏻‍🚀\",\"👨🏼‍🚀\",\"👨🏽‍🚀\",\"👨🏾‍🚀\",\"👨🏿‍🚀\"],\"version\":\"4.0\"},{\"emoji\":\"👩‍🚀\",\"category\":0,\"name\":\"woman astronaut\",\"variations\":[\"👩🏻‍🚀\",\"👩🏼‍🚀\",\"👩🏽‍🚀\",\"👩🏾‍🚀\",\"👩🏿‍🚀\"],\"version\":\"4.0\"},{\"emoji\":\"🧑‍🚒\",\"category\":0,\"name\":\"firefighter\",\"variations\":[\"🧑🏻‍🚒\",\"🧑🏼‍🚒\",\"🧑🏽‍🚒\",\"🧑🏾‍🚒\",\"🧑🏿‍🚒\"],\"version\":\"12.1\"},{\"emoji\":\"👨‍🚒\",\"category\":0,\"name\":\"man firefighter\",\"variations\":[\"👨🏻‍🚒\",\"👨🏼‍🚒\",\"👨🏽‍🚒\",\"👨🏾‍🚒\",\"👨🏿‍🚒\"],\"version\":\"4.0\"},{\"emoji\":\"👩‍🚒\",\"category\":0,\"name\":\"woman firefighter\",\"variations\":[\"👩🏻‍🚒\",\"👩🏼‍🚒\",\"👩🏽‍🚒\",\"👩🏾‍🚒\",\"👩🏿‍🚒\"],\"version\":\"4.0\"},{\"emoji\":\"👮\",\"category\":0,\"name\":\"police officer\",\"variations\":[\"👮🏻\",\"👮🏼\",\"👮🏽\",\"👮🏾\",\"👮🏿\"],\"version\":\"1.0\"},{\"emoji\":\"👮‍♂️\",\"category\":0,\"name\":\"man police officer\",\"variations\":[\"👮🏻‍♂️\",\"👮🏼‍♂️\",\"👮🏽‍♂️\",\"👮🏾‍♂️\",\"👮🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"👮‍♀️\",\"category\":0,\"name\":\"woman police officer\",\"variations\":[\"👮🏻‍♀️\",\"👮🏼‍♀️\",\"👮🏽‍♀️\",\"👮🏾‍♀️\",\"👮🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"🕵️\",\"category\":0,\"name\":\"detective\",\"variations\":[\"🕵🏻\",\"🕵🏼\",\"🕵🏽\",\"🕵🏾\",\"🕵🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🕵️‍♂️\",\"category\":0,\"name\":\"man detective\",\"variations\":[\"🕵🏻‍♂️\",\"🕵🏼‍♂️\",\"🕵🏽‍♂️\",\"🕵🏾‍♂️\",\"🕵🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"🕵️‍♀️\",\"category\":0,\"name\":\"woman detective\",\"variations\":[\"🕵🏻‍♀️\",\"🕵🏼‍♀️\",\"🕵🏽‍♀️\",\"🕵🏾‍♀️\",\"🕵🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"💂\",\"category\":0,\"name\":\"guard\",\"variations\":[\"💂🏻\",\"💂🏼\",\"💂🏽\",\"💂🏾\",\"💂🏿\"],\"version\":\"1.0\"},{\"emoji\":\"💂‍♂️\",\"category\":0,\"name\":\"man guard\",\"variations\":[\"💂🏻‍♂️\",\"💂🏼‍♂️\",\"💂🏽‍♂️\",\"💂🏾‍♂️\",\"💂🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"💂‍♀️\",\"category\":0,\"name\":\"woman guard\",\"variations\":[\"💂🏻‍♀️\",\"💂🏼‍♀️\",\"💂🏽‍♀️\",\"💂🏾‍♀️\",\"💂🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"🥷\",\"category\":0,\"name\":\"ninja\",\"variations\":[\"🥷🏻\",\"🥷🏼\",\"🥷🏽\",\"🥷🏾\",\"🥷🏿\"],\"version\":\"13.0\"},{\"emoji\":\"👷\",\"category\":0,\"name\":\"construction worker\",\"variations\":[\"👷🏻\",\"👷🏼\",\"👷🏽\",\"👷🏾\",\"👷🏿\"],\"version\":\"1.0\"},{\"emoji\":\"👷‍♂️\",\"category\":0,\"name\":\"man construction worker\",\"variations\":[\"👷🏻‍♂️\",\"👷🏼‍♂️\",\"👷🏽‍♂️\",\"👷🏾‍♂️\",\"👷🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"👷‍♀️\",\"category\":0,\"name\":\"woman construction worker\",\"variations\":[\"👷🏻‍♀️\",\"👷🏼‍♀️\",\"👷🏽‍♀️\",\"👷🏾‍♀️\",\"👷🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"🤴\",\"category\":0,\"name\":\"prince\",\"variations\":[\"🤴🏻\",\"🤴🏼\",\"🤴🏽\",\"🤴🏾\",\"🤴🏿\"],\"version\":\"3.0\"},{\"emoji\":\"👸\",\"category\":0,\"name\":\"princess\",\"variations\":[\"👸🏻\",\"👸🏼\",\"👸🏽\",\"👸🏾\",\"👸🏿\"],\"version\":\"1.0\"},{\"emoji\":\"👳\",\"category\":0,\"name\":\"person wearing turban\",\"variations\":[\"👳🏻\",\"👳🏼\",\"👳🏽\",\"👳🏾\",\"👳🏿\"],\"version\":\"1.0\"},{\"emoji\":\"👳‍♂️\",\"category\":0,\"name\":\"man wearing turban\",\"variations\":[\"👳🏻‍♂️\",\"👳🏼‍♂️\",\"👳🏽‍♂️\",\"👳🏾‍♂️\",\"👳🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"👳‍♀️\",\"category\":0,\"name\":\"woman wearing turban\",\"variations\":[\"👳🏻‍♀️\",\"👳🏼‍♀️\",\"👳🏽‍♀️\",\"👳🏾‍♀️\",\"👳🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"👲\",\"category\":0,\"name\":\"person with skullcap\",\"variations\":[\"👲🏻\",\"👲🏼\",\"👲🏽\",\"👲🏾\",\"👲🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🧕\",\"category\":0,\"name\":\"woman with headscarf\",\"variations\":[\"🧕🏻\",\"🧕🏼\",\"🧕🏽\",\"🧕🏾\",\"🧕🏿\"],\"version\":\"5.0\"},{\"emoji\":\"🤵\",\"category\":0,\"name\":\"person in tuxedo\",\"variations\":[\"🤵🏻\",\"🤵🏼\",\"🤵🏽\",\"🤵🏾\",\"🤵🏿\"],\"version\":\"3.0\"},{\"emoji\":\"🤵‍♂️\",\"category\":0,\"name\":\"man in tuxedo\",\"variations\":[\"🤵🏻‍♂️\",\"🤵🏼‍♂️\",\"🤵🏽‍♂️\",\"🤵🏾‍♂️\",\"🤵🏿‍♂️\"],\"version\":\"13.0\"},{\"emoji\":\"🤵‍♀️\",\"category\":0,\"name\":\"woman in tuxedo\",\"variations\":[\"🤵🏻‍♀️\",\"🤵🏼‍♀️\",\"🤵🏽‍♀️\",\"🤵🏾‍♀️\",\"🤵🏿‍♀️\"],\"version\":\"13.0\"},{\"emoji\":\"👰\",\"category\":0,\"name\":\"person with veil\",\"variations\":[\"👰🏻\",\"👰🏼\",\"👰🏽\",\"👰🏾\",\"👰🏿\"],\"version\":\"1.0\"},{\"emoji\":\"👰‍♂️\",\"category\":0,\"name\":\"man with veil\",\"variations\":[\"👰🏻‍♂️\",\"👰🏼‍♂️\",\"👰🏽‍♂️\",\"👰🏾‍♂️\",\"👰🏿‍♂️\"],\"version\":\"13.0\"},{\"emoji\":\"👰‍♀️\",\"category\":0,\"name\":\"woman with veil\",\"variations\":[\"👰🏻‍♀️\",\"👰🏼‍♀️\",\"👰🏽‍♀️\",\"👰🏾‍♀️\",\"👰🏿‍♀️\"],\"version\":\"13.0\"},{\"emoji\":\"🤰\",\"category\":0,\"name\":\"pregnant woman\",\"variations\":[\"🤰🏻\",\"🤰🏼\",\"🤰🏽\",\"🤰🏾\",\"🤰🏿\"],\"version\":\"3.0\"},{\"emoji\":\"🤱\",\"category\":0,\"name\":\"breast-feeding\",\"variations\":[\"🤱🏻\",\"🤱🏼\",\"🤱🏽\",\"🤱🏾\",\"🤱🏿\"],\"version\":\"5.0\"},{\"emoji\":\"👩‍🍼\",\"category\":0,\"name\":\"woman feeding baby\",\"variations\":[\"👩🏻‍🍼\",\"👩🏼‍🍼\",\"👩🏽‍🍼\",\"👩🏾‍🍼\",\"👩🏿‍🍼\"],\"version\":\"13.0\"},{\"emoji\":\"👨‍🍼\",\"category\":0,\"name\":\"man feeding baby\",\"variations\":[\"👨🏻‍🍼\",\"👨🏼‍🍼\",\"👨🏽‍🍼\",\"👨🏾‍🍼\",\"👨🏿‍🍼\"],\"version\":\"13.0\"},{\"emoji\":\"🧑‍🍼\",\"category\":0,\"name\":\"person feeding baby\",\"variations\":[\"🧑🏻‍🍼\",\"🧑🏼‍🍼\",\"🧑🏽‍🍼\",\"🧑🏾‍🍼\",\"🧑🏿‍🍼\"],\"version\":\"13.0\"},{\"emoji\":\"👼\",\"category\":0,\"name\":\"baby angel\",\"variations\":[\"👼🏻\",\"👼🏼\",\"👼🏽\",\"👼🏾\",\"👼🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🎅\",\"category\":0,\"name\":\"Santa Claus\",\"variations\":[\"🎅🏻\",\"🎅🏼\",\"🎅🏽\",\"🎅🏾\",\"🎅🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🤶\",\"category\":0,\"name\":\"Mrs. Claus\",\"variations\":[\"🤶🏻\",\"🤶🏼\",\"🤶🏽\",\"🤶🏾\",\"🤶🏿\"],\"version\":\"3.0\"},{\"emoji\":\"🧑‍🎄\",\"category\":0,\"name\":\"mx claus\",\"variations\":[\"🧑🏻‍🎄\",\"🧑🏼‍🎄\",\"🧑🏽‍🎄\",\"🧑🏾‍🎄\",\"🧑🏿‍🎄\"],\"version\":\"13.0\"},{\"emoji\":\"🦸\",\"category\":0,\"name\":\"superhero\",\"variations\":[\"🦸🏻\",\"🦸🏼\",\"🦸🏽\",\"🦸🏾\",\"🦸🏿\"],\"version\":\"11.0\"},{\"emoji\":\"🦸‍♂️\",\"category\":0,\"name\":\"man superhero\",\"variations\":[\"🦸🏻‍♂️\",\"🦸🏼‍♂️\",\"🦸🏽‍♂️\",\"🦸🏾‍♂️\",\"🦸🏿‍♂️\"],\"version\":\"11.0\"},{\"emoji\":\"🦸‍♀️\",\"category\":0,\"name\":\"woman superhero\",\"variations\":[\"🦸🏻‍♀️\",\"🦸🏼‍♀️\",\"🦸🏽‍♀️\",\"🦸🏾‍♀️\",\"🦸🏿‍♀️\"],\"version\":\"11.0\"},{\"emoji\":\"🦹\",\"category\":0,\"name\":\"supervillain\",\"variations\":[\"🦹🏻\",\"🦹🏼\",\"🦹🏽\",\"🦹🏾\",\"🦹🏿\"],\"version\":\"11.0\"},{\"emoji\":\"🦹‍♂️\",\"category\":0,\"name\":\"man supervillain\",\"variations\":[\"🦹🏻‍♂️\",\"🦹🏼‍♂️\",\"🦹🏽‍♂️\",\"🦹🏾‍♂️\",\"🦹🏿‍♂️\"],\"version\":\"11.0\"},{\"emoji\":\"🦹‍♀️\",\"category\":0,\"name\":\"woman supervillain\",\"variations\":[\"🦹🏻‍♀️\",\"🦹🏼‍♀️\",\"🦹🏽‍♀️\",\"🦹🏾‍♀️\",\"🦹🏿‍♀️\"],\"version\":\"11.0\"},{\"emoji\":\"🧙\",\"category\":0,\"name\":\"mage\",\"variations\":[\"🧙🏻\",\"🧙🏼\",\"🧙🏽\",\"🧙🏾\",\"🧙🏿\"],\"version\":\"5.0\"},{\"emoji\":\"🧙‍♂️\",\"category\":0,\"name\":\"man mage\",\"variations\":[\"🧙🏻‍♂️\",\"🧙🏼‍♂️\",\"🧙🏽‍♂️\",\"🧙🏾‍♂️\",\"🧙🏿‍♂️\"],\"version\":\"5.0\"},{\"emoji\":\"🧙‍♀️\",\"category\":0,\"name\":\"woman mage\",\"variations\":[\"🧙🏻‍♀️\",\"🧙🏼‍♀️\",\"🧙🏽‍♀️\",\"🧙🏾‍♀️\",\"🧙🏿‍♀️\"],\"version\":\"5.0\"},{\"emoji\":\"🧚\",\"category\":0,\"name\":\"fairy\",\"variations\":[\"🧚🏻\",\"🧚🏼\",\"🧚🏽\",\"🧚🏾\",\"🧚🏿\"],\"version\":\"5.0\"},{\"emoji\":\"🧚‍♂️\",\"category\":0,\"name\":\"man fairy\",\"variations\":[\"🧚🏻‍♂️\",\"🧚🏼‍♂️\",\"🧚🏽‍♂️\",\"🧚🏾‍♂️\",\"🧚🏿‍♂️\"],\"version\":\"5.0\"},{\"emoji\":\"🧚‍♀️\",\"category\":0,\"name\":\"woman fairy\",\"variations\":[\"🧚🏻‍♀️\",\"🧚🏼‍♀️\",\"🧚🏽‍♀️\",\"🧚🏾‍♀️\",\"🧚🏿‍♀️\"],\"version\":\"5.0\"},{\"emoji\":\"🧛\",\"category\":0,\"name\":\"vampire\",\"variations\":[\"🧛🏻\",\"🧛🏼\",\"🧛🏽\",\"🧛🏾\",\"🧛🏿\"],\"version\":\"5.0\"},{\"emoji\":\"🧛‍♂️\",\"category\":0,\"name\":\"man vampire\",\"variations\":[\"🧛🏻‍♂️\",\"🧛🏼‍♂️\",\"🧛🏽‍♂️\",\"🧛🏾‍♂️\",\"🧛🏿‍♂️\"],\"version\":\"5.0\"},{\"emoji\":\"🧛‍♀️\",\"category\":0,\"name\":\"woman vampire\",\"variations\":[\"🧛🏻‍♀️\",\"🧛🏼‍♀️\",\"🧛🏽‍♀️\",\"🧛🏾‍♀️\",\"🧛🏿‍♀️\"],\"version\":\"5.0\"},{\"emoji\":\"🧜\",\"category\":0,\"name\":\"merperson\",\"variations\":[\"🧜🏻\",\"🧜🏼\",\"🧜🏽\",\"🧜🏾\",\"🧜🏿\"],\"version\":\"5.0\"},{\"emoji\":\"🧜‍♂️\",\"category\":0,\"name\":\"merman\",\"variations\":[\"🧜🏻‍♂️\",\"🧜🏼‍♂️\",\"🧜🏽‍♂️\",\"🧜🏾‍♂️\",\"🧜🏿‍♂️\"],\"version\":\"5.0\"},{\"emoji\":\"🧜‍♀️\",\"category\":0,\"name\":\"mermaid\",\"variations\":[\"🧜🏻‍♀️\",\"🧜🏼‍♀️\",\"🧜🏽‍♀️\",\"🧜🏾‍♀️\",\"🧜🏿‍♀️\"],\"version\":\"5.0\"},{\"emoji\":\"🧝\",\"category\":0,\"name\":\"elf\",\"variations\":[\"🧝🏻\",\"🧝🏼\",\"🧝🏽\",\"🧝🏾\",\"🧝🏿\"],\"version\":\"5.0\"},{\"emoji\":\"🧝‍♂️\",\"category\":0,\"name\":\"man elf\",\"variations\":[\"🧝🏻‍♂️\",\"🧝🏼‍♂️\",\"🧝🏽‍♂️\",\"🧝🏾‍♂️\",\"🧝🏿‍♂️\"],\"version\":\"5.0\"},{\"emoji\":\"🧝‍♀️\",\"category\":0,\"name\":\"woman elf\",\"variations\":[\"🧝🏻‍♀️\",\"🧝🏼‍♀️\",\"🧝🏽‍♀️\",\"🧝🏾‍♀️\",\"🧝🏿‍♀️\"],\"version\":\"5.0\"},{\"emoji\":\"🧞\",\"category\":0,\"name\":\"genie\",\"version\":\"5.0\"},{\"emoji\":\"🧞‍♂️\",\"category\":0,\"name\":\"man genie\",\"version\":\"5.0\"},{\"emoji\":\"🧞‍♀️\",\"category\":0,\"name\":\"woman genie\",\"version\":\"5.0\"},{\"emoji\":\"🧟\",\"category\":0,\"name\":\"zombie\",\"version\":\"5.0\"},{\"emoji\":\"🧟‍♂️\",\"category\":0,\"name\":\"man zombie\",\"version\":\"5.0\"},{\"emoji\":\"🧟‍♀️\",\"category\":0,\"name\":\"woman zombie\",\"version\":\"5.0\"},{\"emoji\":\"💆\",\"category\":0,\"name\":\"person getting massage\",\"variations\":[\"💆🏻\",\"💆🏼\",\"💆🏽\",\"💆🏾\",\"💆🏿\"],\"version\":\"1.0\"},{\"emoji\":\"💆‍♂️\",\"category\":0,\"name\":\"man getting massage\",\"variations\":[\"💆🏻‍♂️\",\"💆🏼‍♂️\",\"💆🏽‍♂️\",\"💆🏾‍♂️\",\"💆🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"💆‍♀️\",\"category\":0,\"name\":\"woman getting massage\",\"variations\":[\"💆🏻‍♀️\",\"💆🏼‍♀️\",\"💆🏽‍♀️\",\"💆🏾‍♀️\",\"💆🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"💇\",\"category\":0,\"name\":\"person getting haircut\",\"variations\":[\"💇🏻\",\"💇🏼\",\"💇🏽\",\"💇🏾\",\"💇🏿\"],\"version\":\"1.0\"},{\"emoji\":\"💇‍♂️\",\"category\":0,\"name\":\"man getting haircut\",\"variations\":[\"💇🏻‍♂️\",\"💇🏼‍♂️\",\"💇🏽‍♂️\",\"💇🏾‍♂️\",\"💇🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"💇‍♀️\",\"category\":0,\"name\":\"woman getting haircut\",\"variations\":[\"💇🏻‍♀️\",\"💇🏼‍♀️\",\"💇🏽‍♀️\",\"💇🏾‍♀️\",\"💇🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"🚶\",\"category\":0,\"name\":\"person walking\",\"variations\":[\"🚶🏻\",\"🚶🏼\",\"🚶🏽\",\"🚶🏾\",\"🚶🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🚶‍♂️\",\"category\":0,\"name\":\"man walking\",\"variations\":[\"🚶🏻‍♂️\",\"🚶🏼‍♂️\",\"🚶🏽‍♂️\",\"🚶🏾‍♂️\",\"🚶🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"🚶‍♀️\",\"category\":0,\"name\":\"woman walking\",\"variations\":[\"🚶🏻‍♀️\",\"🚶🏼‍♀️\",\"🚶🏽‍♀️\",\"🚶🏾‍♀️\",\"🚶🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"🧍\",\"category\":0,\"name\":\"person standing\",\"variations\":[\"🧍🏻\",\"🧍🏼\",\"🧍🏽\",\"🧍🏾\",\"🧍🏿\"],\"version\":\"12.0\"},{\"emoji\":\"🧍‍♂️\",\"category\":0,\"name\":\"man standing\",\"variations\":[\"🧍🏻‍♂️\",\"🧍🏼‍♂️\",\"🧍🏽‍♂️\",\"🧍🏾‍♂️\",\"🧍🏿‍♂️\"],\"version\":\"12.0\"},{\"emoji\":\"🧍‍♀️\",\"category\":0,\"name\":\"woman standing\",\"variations\":[\"🧍🏻‍♀️\",\"🧍🏼‍♀️\",\"🧍🏽‍♀️\",\"🧍🏾‍♀️\",\"🧍🏿‍♀️\"],\"version\":\"12.0\"},{\"emoji\":\"🧎\",\"category\":0,\"name\":\"person kneeling\",\"variations\":[\"🧎🏻\",\"🧎🏼\",\"🧎🏽\",\"🧎🏾\",\"🧎🏿\"],\"version\":\"12.0\"},{\"emoji\":\"🧎‍♂️\",\"category\":0,\"name\":\"man kneeling\",\"variations\":[\"🧎🏻‍♂️\",\"🧎🏼‍♂️\",\"🧎🏽‍♂️\",\"🧎🏾‍♂️\",\"🧎🏿‍♂️\"],\"version\":\"12.0\"},{\"emoji\":\"🧎‍♀️\",\"category\":0,\"name\":\"woman kneeling\",\"variations\":[\"🧎🏻‍♀️\",\"🧎🏼‍♀️\",\"🧎🏽‍♀️\",\"🧎🏾‍♀️\",\"🧎🏿‍♀️\"],\"version\":\"12.0\"},{\"emoji\":\"🧑‍🦯\",\"category\":0,\"name\":\"person with white cane\",\"variations\":[\"🧑🏻‍🦯\",\"🧑🏼‍🦯\",\"🧑🏽‍🦯\",\"🧑🏾‍🦯\",\"🧑🏿‍🦯\"],\"version\":\"12.1\"},{\"emoji\":\"👨‍🦯\",\"category\":0,\"name\":\"man with white cane\",\"variations\":[\"👨🏻‍🦯\",\"👨🏼‍🦯\",\"👨🏽‍🦯\",\"👨🏾‍🦯\",\"👨🏿‍🦯\"],\"version\":\"12.0\"},{\"emoji\":\"👩‍🦯\",\"category\":0,\"name\":\"woman with white cane\",\"variations\":[\"👩🏻‍🦯\",\"👩🏼‍🦯\",\"👩🏽‍🦯\",\"👩🏾‍🦯\",\"👩🏿‍🦯\"],\"version\":\"12.0\"},{\"emoji\":\"🧑‍🦼\",\"category\":0,\"name\":\"person in motorized wheelchair\",\"variations\":[\"🧑🏻‍🦼\",\"🧑🏼‍🦼\",\"🧑🏽‍🦼\",\"🧑🏾‍🦼\",\"🧑🏿‍🦼\"],\"version\":\"12.1\"},{\"emoji\":\"👨‍🦼\",\"category\":0,\"name\":\"man in motorized wheelchair\",\"variations\":[\"👨🏻‍🦼\",\"👨🏼‍🦼\",\"👨🏽‍🦼\",\"👨🏾‍🦼\",\"👨🏿‍🦼\"],\"version\":\"12.0\"},{\"emoji\":\"👩‍🦼\",\"category\":0,\"name\":\"woman in motorized wheelchair\",\"variations\":[\"👩🏻‍🦼\",\"👩🏼‍🦼\",\"👩🏽‍🦼\",\"👩🏾‍🦼\",\"👩🏿‍🦼\"],\"version\":\"12.0\"},{\"emoji\":\"🧑‍🦽\",\"category\":0,\"name\":\"person in manual wheelchair\",\"variations\":[\"🧑🏻‍🦽\",\"🧑🏼‍🦽\",\"🧑🏽‍🦽\",\"🧑🏾‍🦽\",\"🧑🏿‍🦽\"],\"version\":\"12.1\"},{\"emoji\":\"👨‍🦽\",\"category\":0,\"name\":\"man in manual wheelchair\",\"variations\":[\"👨🏻‍🦽\",\"👨🏼‍🦽\",\"👨🏽‍🦽\",\"👨🏾‍🦽\",\"👨🏿‍🦽\"],\"version\":\"12.0\"},{\"emoji\":\"👩‍🦽\",\"category\":0,\"name\":\"woman in manual wheelchair\",\"variations\":[\"👩🏻‍🦽\",\"👩🏼‍🦽\",\"👩🏽‍🦽\",\"👩🏾‍🦽\",\"👩🏿‍🦽\"],\"version\":\"12.0\"},{\"emoji\":\"🏃\",\"category\":0,\"name\":\"person running\",\"variations\":[\"🏃🏻\",\"🏃🏼\",\"🏃🏽\",\"🏃🏾\",\"🏃🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🏃‍♂️\",\"category\":0,\"name\":\"man running\",\"variations\":[\"🏃🏻‍♂️\",\"🏃🏼‍♂️\",\"🏃🏽‍♂️\",\"🏃🏾‍♂️\",\"🏃🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"🏃‍♀️\",\"category\":0,\"name\":\"woman running\",\"variations\":[\"🏃🏻‍♀️\",\"🏃🏼‍♀️\",\"🏃🏽‍♀️\",\"🏃🏾‍♀️\",\"🏃🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"💃\",\"category\":0,\"name\":\"woman dancing\",\"variations\":[\"💃🏻\",\"💃🏼\",\"💃🏽\",\"💃🏾\",\"💃🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🕺\",\"category\":0,\"name\":\"man dancing\",\"variations\":[\"🕺🏻\",\"🕺🏼\",\"🕺🏽\",\"🕺🏾\",\"🕺🏿\"],\"version\":\"3.0\"},{\"emoji\":\"🕴️\",\"category\":0,\"name\":\"person in suit levitating\",\"variations\":[\"🕴🏻\",\"🕴🏼\",\"🕴🏽\",\"🕴🏾\",\"🕴🏿\"],\"version\":\"1.0\"},{\"emoji\":\"👯\",\"category\":0,\"name\":\"people with bunny ears\",\"version\":\"1.0\"},{\"emoji\":\"👯‍♂️\",\"category\":0,\"name\":\"men with bunny ears\",\"version\":\"4.0\"},{\"emoji\":\"👯‍♀️\",\"category\":0,\"name\":\"women with bunny ears\",\"version\":\"4.0\"},{\"emoji\":\"🧖\",\"category\":0,\"name\":\"person in steamy room\",\"variations\":[\"🧖🏻\",\"🧖🏼\",\"🧖🏽\",\"🧖🏾\",\"🧖🏿\"],\"version\":\"5.0\"},{\"emoji\":\"🧖‍♂️\",\"category\":0,\"name\":\"man in steamy room\",\"variations\":[\"🧖🏻‍♂️\",\"🧖🏼‍♂️\",\"🧖🏽‍♂️\",\"🧖🏾‍♂️\",\"🧖🏿‍♂️\"],\"version\":\"5.0\"},{\"emoji\":\"🧖‍♀️\",\"category\":0,\"name\":\"woman in steamy room\",\"variations\":[\"🧖🏻‍♀️\",\"🧖🏼‍♀️\",\"🧖🏽‍♀️\",\"🧖🏾‍♀️\",\"🧖🏿‍♀️\"],\"version\":\"5.0\"},{\"emoji\":\"🧗\",\"category\":0,\"name\":\"person climbing\",\"variations\":[\"🧗🏻\",\"🧗🏼\",\"🧗🏽\",\"🧗🏾\",\"🧗🏿\"],\"version\":\"5.0\"},{\"emoji\":\"🧗‍♂️\",\"category\":0,\"name\":\"man climbing\",\"variations\":[\"🧗🏻‍♂️\",\"🧗🏼‍♂️\",\"🧗🏽‍♂️\",\"🧗🏾‍♂️\",\"🧗🏿‍♂️\"],\"version\":\"5.0\"},{\"emoji\":\"🧗‍♀️\",\"category\":0,\"name\":\"woman climbing\",\"variations\":[\"🧗🏻‍♀️\",\"🧗🏼‍♀️\",\"🧗🏽‍♀️\",\"🧗🏾‍♀️\",\"🧗🏿‍♀️\"],\"version\":\"5.0\"},{\"emoji\":\"🤺\",\"category\":0,\"name\":\"person fencing\",\"version\":\"3.0\"},{\"emoji\":\"🏇\",\"category\":0,\"name\":\"horse racing\",\"variations\":[\"🏇🏻\",\"🏇🏼\",\"🏇🏽\",\"🏇🏾\",\"🏇🏿\"],\"version\":\"1.0\"},{\"emoji\":\"⛷️\",\"category\":0,\"name\":\"skier\",\"version\":\"1.0\"},{\"emoji\":\"🏂\",\"category\":0,\"name\":\"snowboarder\",\"variations\":[\"🏂🏻\",\"🏂🏼\",\"🏂🏽\",\"🏂🏾\",\"🏂🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🏌️\",\"category\":0,\"name\":\"person golfing\",\"variations\":[\"🏌🏻\",\"🏌🏼\",\"🏌🏽\",\"🏌🏾\",\"🏌🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🏌️‍♂️\",\"category\":0,\"name\":\"man golfing\",\"variations\":[\"🏌🏻‍♂️\",\"🏌🏼‍♂️\",\"🏌🏽‍♂️\",\"🏌🏾‍♂️\",\"🏌🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"🏌️‍♀️\",\"category\":0,\"name\":\"woman golfing\",\"variations\":[\"🏌🏻‍♀️\",\"🏌🏼‍♀️\",\"🏌🏽‍♀️\",\"🏌🏾‍♀️\",\"🏌🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"🏄\",\"category\":0,\"name\":\"person surfing\",\"variations\":[\"🏄🏻\",\"🏄🏼\",\"🏄🏽\",\"🏄🏾\",\"🏄🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🏄‍♂️\",\"category\":0,\"name\":\"man surfing\",\"variations\":[\"🏄🏻‍♂️\",\"🏄🏼‍♂️\",\"🏄🏽‍♂️\",\"🏄🏾‍♂️\",\"🏄🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"🏄‍♀️\",\"category\":0,\"name\":\"woman surfing\",\"variations\":[\"🏄🏻‍♀️\",\"🏄🏼‍♀️\",\"🏄🏽‍♀️\",\"🏄🏾‍♀️\",\"🏄🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"🚣\",\"category\":0,\"name\":\"person rowing boat\",\"variations\":[\"🚣🏻\",\"🚣🏼\",\"🚣🏽\",\"🚣🏾\",\"🚣🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🚣‍♂️\",\"category\":0,\"name\":\"man rowing boat\",\"variations\":[\"🚣🏻‍♂️\",\"🚣🏼‍♂️\",\"🚣🏽‍♂️\",\"🚣🏾‍♂️\",\"🚣🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"🚣‍♀️\",\"category\":0,\"name\":\"woman rowing boat\",\"variations\":[\"🚣🏻‍♀️\",\"🚣🏼‍♀️\",\"🚣🏽‍♀️\",\"🚣🏾‍♀️\",\"🚣🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"🏊\",\"category\":0,\"name\":\"person swimming\",\"variations\":[\"🏊🏻\",\"🏊🏼\",\"🏊🏽\",\"🏊🏾\",\"🏊🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🏊‍♂️\",\"category\":0,\"name\":\"man swimming\",\"variations\":[\"🏊🏻‍♂️\",\"🏊🏼‍♂️\",\"🏊🏽‍♂️\",\"🏊🏾‍♂️\",\"🏊🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"🏊‍♀️\",\"category\":0,\"name\":\"woman swimming\",\"variations\":[\"🏊🏻‍♀️\",\"🏊🏼‍♀️\",\"🏊🏽‍♀️\",\"🏊🏾‍♀️\",\"🏊🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"⛹️\",\"category\":0,\"name\":\"person bouncing ball\",\"variations\":[\"⛹🏻\",\"⛹🏼\",\"⛹🏽\",\"⛹🏾\",\"⛹🏿\"],\"version\":\"1.0\"},{\"emoji\":\"⛹️‍♂️\",\"category\":0,\"name\":\"man bouncing ball\",\"variations\":[\"⛹🏻‍♂️\",\"⛹🏼‍♂️\",\"⛹🏽‍♂️\",\"⛹🏾‍♂️\",\"⛹🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"⛹️‍♀️\",\"category\":0,\"name\":\"woman bouncing ball\",\"variations\":[\"⛹🏻‍♀️\",\"⛹🏼‍♀️\",\"⛹🏽‍♀️\",\"⛹🏾‍♀️\",\"⛹🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"🏋️\",\"category\":0,\"name\":\"person lifting weights\",\"variations\":[\"🏋🏻\",\"🏋🏼\",\"🏋🏽\",\"🏋🏾\",\"🏋🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🏋️‍♂️\",\"category\":0,\"name\":\"man lifting weights\",\"variations\":[\"🏋🏻‍♂️\",\"🏋🏼‍♂️\",\"🏋🏽‍♂️\",\"🏋🏾‍♂️\",\"🏋🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"🏋️‍♀️\",\"category\":0,\"name\":\"woman lifting weights\",\"variations\":[\"🏋🏻‍♀️\",\"🏋🏼‍♀️\",\"🏋🏽‍♀️\",\"🏋🏾‍♀️\",\"🏋🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"🚴\",\"category\":0,\"name\":\"person biking\",\"variations\":[\"🚴🏻\",\"🚴🏼\",\"🚴🏽\",\"🚴🏾\",\"🚴🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🚴‍♂️\",\"category\":0,\"name\":\"man biking\",\"variations\":[\"🚴🏻‍♂️\",\"🚴🏼‍♂️\",\"🚴🏽‍♂️\",\"🚴🏾‍♂️\",\"🚴🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"🚴‍♀️\",\"category\":0,\"name\":\"woman biking\",\"variations\":[\"🚴🏻‍♀️\",\"🚴🏼‍♀️\",\"🚴🏽‍♀️\",\"🚴🏾‍♀️\",\"🚴🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"🚵\",\"category\":0,\"name\":\"person mountain biking\",\"variations\":[\"🚵🏻\",\"🚵🏼\",\"🚵🏽\",\"🚵🏾\",\"🚵🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🚵‍♂️\",\"category\":0,\"name\":\"man mountain biking\",\"variations\":[\"🚵🏻‍♂️\",\"🚵🏼‍♂️\",\"🚵🏽‍♂️\",\"🚵🏾‍♂️\",\"🚵🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"🚵‍♀️\",\"category\":0,\"name\":\"woman mountain biking\",\"variations\":[\"🚵🏻‍♀️\",\"🚵🏼‍♀️\",\"🚵🏽‍♀️\",\"🚵🏾‍♀️\",\"🚵🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"🤸\",\"category\":0,\"name\":\"person cartwheeling\",\"variations\":[\"🤸🏻\",\"🤸🏼\",\"🤸🏽\",\"🤸🏾\",\"🤸🏿\"],\"version\":\"3.0\"},{\"emoji\":\"🤸‍♂️\",\"category\":0,\"name\":\"man cartwheeling\",\"variations\":[\"🤸🏻‍♂️\",\"🤸🏼‍♂️\",\"🤸🏽‍♂️\",\"🤸🏾‍♂️\",\"🤸🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"🤸‍♀️\",\"category\":0,\"name\":\"woman cartwheeling\",\"variations\":[\"🤸🏻‍♀️\",\"🤸🏼‍♀️\",\"🤸🏽‍♀️\",\"🤸🏾‍♀️\",\"🤸🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"🤼\",\"category\":0,\"name\":\"people wrestling\",\"version\":\"3.0\"},{\"emoji\":\"🤼‍♂️\",\"category\":0,\"name\":\"men wrestling\",\"version\":\"4.0\"},{\"emoji\":\"🤼‍♀️\",\"category\":0,\"name\":\"women wrestling\",\"version\":\"4.0\"},{\"emoji\":\"🤽\",\"category\":0,\"name\":\"person playing water polo\",\"variations\":[\"🤽🏻\",\"🤽🏼\",\"🤽🏽\",\"🤽🏾\",\"🤽🏿\"],\"version\":\"3.0\"},{\"emoji\":\"🤽‍♂️\",\"category\":0,\"name\":\"man playing water polo\",\"variations\":[\"🤽🏻‍♂️\",\"🤽🏼‍♂️\",\"🤽🏽‍♂️\",\"🤽🏾‍♂️\",\"🤽🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"🤽‍♀️\",\"category\":0,\"name\":\"woman playing water polo\",\"variations\":[\"🤽🏻‍♀️\",\"🤽🏼‍♀️\",\"🤽🏽‍♀️\",\"🤽🏾‍♀️\",\"🤽🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"🤾\",\"category\":0,\"name\":\"person playing handball\",\"variations\":[\"🤾🏻\",\"🤾🏼\",\"🤾🏽\",\"🤾🏾\",\"🤾🏿\"],\"version\":\"3.0\"},{\"emoji\":\"🤾‍♂️\",\"category\":0,\"name\":\"man playing handball\",\"variations\":[\"🤾🏻‍♂️\",\"🤾🏼‍♂️\",\"🤾🏽‍♂️\",\"🤾🏾‍♂️\",\"🤾🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"🤾‍♀️\",\"category\":0,\"name\":\"woman playing handball\",\"variations\":[\"🤾🏻‍♀️\",\"🤾🏼‍♀️\",\"🤾🏽‍♀️\",\"🤾🏾‍♀️\",\"🤾🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"🤹\",\"category\":0,\"name\":\"person juggling\",\"variations\":[\"🤹🏻\",\"🤹🏼\",\"🤹🏽\",\"🤹🏾\",\"🤹🏿\"],\"version\":\"3.0\"},{\"emoji\":\"🤹‍♂️\",\"category\":0,\"name\":\"man juggling\",\"variations\":[\"🤹🏻‍♂️\",\"🤹🏼‍♂️\",\"🤹🏽‍♂️\",\"🤹🏾‍♂️\",\"🤹🏿‍♂️\"],\"version\":\"4.0\"},{\"emoji\":\"🤹‍♀️\",\"category\":0,\"name\":\"woman juggling\",\"variations\":[\"🤹🏻‍♀️\",\"🤹🏼‍♀️\",\"🤹🏽‍♀️\",\"🤹🏾‍♀️\",\"🤹🏿‍♀️\"],\"version\":\"4.0\"},{\"emoji\":\"🧘\",\"category\":0,\"name\":\"person in lotus position\",\"variations\":[\"🧘🏻\",\"🧘🏼\",\"🧘🏽\",\"🧘🏾\",\"🧘🏿\"],\"version\":\"5.0\"},{\"emoji\":\"🧘‍♂️\",\"category\":0,\"name\":\"man in lotus position\",\"variations\":[\"🧘🏻‍♂️\",\"🧘🏼‍♂️\",\"🧘🏽‍♂️\",\"🧘🏾‍♂️\",\"🧘🏿‍♂️\"],\"version\":\"5.0\"},{\"emoji\":\"🧘‍♀️\",\"category\":0,\"name\":\"woman in lotus position\",\"variations\":[\"🧘🏻‍♀️\",\"🧘🏼‍♀️\",\"🧘🏽‍♀️\",\"🧘🏾‍♀️\",\"🧘🏿‍♀️\"],\"version\":\"5.0\"},{\"emoji\":\"🛀\",\"category\":0,\"name\":\"person taking bath\",\"variations\":[\"🛀🏻\",\"🛀🏼\",\"🛀🏽\",\"🛀🏾\",\"🛀🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🛌\",\"category\":0,\"name\":\"person in bed\",\"variations\":[\"🛌🏻\",\"🛌🏼\",\"🛌🏽\",\"🛌🏾\",\"🛌🏿\"],\"version\":\"1.0\"},{\"emoji\":\"🧑‍🤝‍🧑\",\"category\":0,\"name\":\"people holding hands\",\"variations\":[\"🧑🏻‍🤝‍🧑🏻\",\"🧑🏻‍🤝‍🧑🏼\",\"🧑🏻‍🤝‍🧑🏽\",\"🧑🏻‍🤝‍🧑🏾\",\"🧑🏻‍🤝‍🧑🏿\",\"🧑🏼‍🤝‍🧑🏻\",\"🧑🏼‍🤝‍🧑🏼\",\"🧑🏼‍🤝‍🧑🏽\",\"🧑🏼‍🤝‍🧑🏾\",\"🧑🏼‍🤝‍🧑🏿\",\"🧑🏽‍🤝‍🧑🏻\",\"🧑🏽‍🤝‍🧑🏼\",\"🧑🏽‍🤝‍🧑🏽\",\"🧑🏽‍🤝‍🧑🏾\",\"🧑🏽‍🤝‍🧑🏿\",\"🧑🏾‍🤝‍🧑🏻\",\"🧑🏾‍🤝‍🧑🏼\",\"🧑🏾‍🤝‍🧑🏽\",\"🧑🏾‍🤝‍🧑🏾\",\"🧑🏾‍🤝‍🧑🏿\",\"🧑🏿‍🤝‍🧑🏻\",\"🧑🏿‍🤝‍🧑🏼\",\"🧑🏿‍🤝‍🧑🏽\",\"🧑🏿‍🤝‍🧑🏾\",\"🧑🏿‍🤝‍🧑🏿\"],\"version\":\"12.0\"},{\"emoji\":\"👭\",\"category\":0,\"name\":\"women holding hands\",\"variations\":[\"👭🏻\",\"👩🏻‍🤝‍👩🏼\",\"👩🏻‍🤝‍👩🏽\",\"👩🏻‍🤝‍👩🏾\",\"👩🏻‍🤝‍👩🏿\",\"👩🏼‍🤝‍👩🏻\",\"👭🏼\",\"👩🏼‍🤝‍👩🏽\",\"👩🏼‍🤝‍👩🏾\",\"👩🏼‍🤝‍👩🏿\",\"👩🏽‍🤝‍👩🏻\",\"👩🏽‍🤝‍👩🏼\",\"👭🏽\",\"👩🏽‍🤝‍👩🏾\",\"👩🏽‍🤝‍👩🏿\",\"👩🏾‍🤝‍👩🏻\",\"👩🏾‍🤝‍👩🏼\",\"👩🏾‍🤝‍👩🏽\",\"👭🏾\",\"👩🏾‍🤝‍👩🏿\",\"👩🏿‍🤝‍👩🏻\",\"👩🏿‍🤝‍👩🏼\",\"👩🏿‍🤝‍👩🏽\",\"👩🏿‍🤝‍👩🏾\",\"👭🏿\"],\"version\":\"1.0\"},{\"emoji\":\"👫\",\"category\":0,\"name\":\"woman and man holding hands\",\"variations\":[\"👫🏻\",\"👩🏻‍🤝‍👨🏼\",\"👩🏻‍🤝‍👨🏽\",\"👩🏻‍🤝‍👨🏾\",\"👩🏻‍🤝‍👨🏿\",\"👩🏼‍🤝‍👨🏻\",\"👫🏼\",\"👩🏼‍🤝‍👨🏽\",\"👩🏼‍🤝‍👨🏾\",\"👩🏼‍🤝‍👨🏿\",\"👩🏽‍🤝‍👨🏻\",\"👩🏽‍🤝‍👨🏼\",\"👫🏽\",\"👩🏽‍🤝‍👨🏾\",\"👩🏽‍🤝‍👨🏿\",\"👩🏾‍🤝‍👨🏻\",\"👩🏾‍🤝‍👨🏼\",\"👩🏾‍🤝‍👨🏽\",\"👫🏾\",\"👩🏾‍🤝‍👨🏿\",\"👩🏿‍🤝‍👨🏻\",\"👩🏿‍🤝‍👨🏼\",\"👩🏿‍🤝‍👨🏽\",\"👩🏿‍🤝‍👨🏾\",\"👫🏿\"],\"version\":\"1.0\"},{\"emoji\":\"👬\",\"category\":0,\"name\":\"men holding hands\",\"variations\":[\"👬🏻\",\"👨🏻‍🤝‍👨🏼\",\"👨🏻‍🤝‍👨🏽\",\"👨🏻‍🤝‍👨🏾\",\"👨🏻‍🤝‍👨🏿\",\"👨🏼‍🤝‍👨🏻\",\"👬🏼\",\"👨🏼‍🤝‍👨🏽\",\"👨🏼‍🤝‍👨🏾\",\"👨🏼‍🤝‍👨🏿\",\"👨🏽‍🤝‍👨🏻\",\"👨🏽‍🤝‍👨🏼\",\"👬🏽\",\"👨🏽‍🤝‍👨🏾\",\"👨🏽‍🤝‍👨🏿\",\"👨🏾‍🤝‍👨🏻\",\"👨🏾‍🤝‍👨🏼\",\"👨🏾‍🤝‍👨🏽\",\"👬🏾\",\"👨🏾‍🤝‍👨🏿\",\"👨🏿‍🤝‍👨🏻\",\"👨🏿‍🤝‍👨🏼\",\"👨🏿‍🤝‍👨🏽\",\"👨🏿‍🤝‍👨🏾\",\"👬🏿\"],\"version\":\"1.0\"},{\"emoji\":\"💏\",\"category\":0,\"name\":\"kiss\",\"variations\":[\"👩‍❤️‍💋‍👨\",\"👨‍❤️‍💋‍👨\",\"👩‍❤️‍💋‍👩\"],\"version\":\"1.0\"},{\"emoji\":\"💑\",\"category\":0,\"name\":\"couple with heart\",\"variations\":[\"👩‍❤️‍👨\",\"👨‍❤️‍👨\",\"👩‍❤️‍👩\"],\"version\":\"1.0\"},{\"emoji\":\"👪\",\"category\":0,\"name\":\"family\",\"version\":\"1.0\"},{\"emoji\":\"👨‍👩‍👦\",\"category\":0,\"name\":\"family: man, woman, boy\",\"version\":\"2.0\"},{\"emoji\":\"👨‍👩‍👧\",\"category\":0,\"name\":\"family: man, woman, girl\",\"version\":\"2.0\"},{\"emoji\":\"👨‍👩‍👧‍👦\",\"category\":0,\"name\":\"family: man, woman, girl, boy\",\"version\":\"2.0\"},{\"emoji\":\"👨‍👩‍👦‍👦\",\"category\":0,\"name\":\"family: man, woman, boy, boy\",\"version\":\"2.0\"},{\"emoji\":\"👨‍👩‍👧‍👧\",\"category\":0,\"name\":\"family: man, woman, girl, girl\",\"version\":\"2.0\"},{\"emoji\":\"👨‍👨‍👦\",\"category\":0,\"name\":\"family: man, man, boy\",\"version\":\"2.0\"},{\"emoji\":\"👨‍👨‍👧\",\"category\":0,\"name\":\"family: man, man, girl\",\"version\":\"2.0\"},{\"emoji\":\"👨‍👨‍👧‍👦\",\"category\":0,\"name\":\"family: man, man, girl, boy\",\"version\":\"2.0\"},{\"emoji\":\"👨‍👨‍👦‍👦\",\"category\":0,\"name\":\"family: man, man, boy, boy\",\"version\":\"2.0\"},{\"emoji\":\"👨‍👨‍👧‍👧\",\"category\":0,\"name\":\"family: man, man, girl, girl\",\"version\":\"2.0\"},{\"emoji\":\"👩‍👩‍👦\",\"category\":0,\"name\":\"family: woman, woman, boy\",\"version\":\"2.0\"},{\"emoji\":\"👩‍👩‍👧\",\"category\":0,\"name\":\"family: woman, woman, girl\",\"version\":\"2.0\"},{\"emoji\":\"👩‍👩‍👧‍👦\",\"category\":0,\"name\":\"family: woman, woman, girl, boy\",\"version\":\"2.0\"},{\"emoji\":\"👩‍👩‍👦‍👦\",\"category\":0,\"name\":\"family: woman, woman, boy, boy\",\"version\":\"2.0\"},{\"emoji\":\"👩‍👩‍👧‍👧\",\"category\":0,\"name\":\"family: woman, woman, girl, girl\",\"version\":\"2.0\"},{\"emoji\":\"👨‍👦\",\"category\":0,\"name\":\"family: man, boy\",\"version\":\"4.0\"},{\"emoji\":\"👨‍👦‍👦\",\"category\":0,\"name\":\"family: man, boy, boy\",\"version\":\"4.0\"},{\"emoji\":\"👨‍👧\",\"category\":0,\"name\":\"family: man, girl\",\"version\":\"4.0\"},{\"emoji\":\"👨‍👧‍👦\",\"category\":0,\"name\":\"family: man, girl, boy\",\"version\":\"4.0\"},{\"emoji\":\"👨‍👧‍👧\",\"category\":0,\"name\":\"family: man, girl, girl\",\"version\":\"4.0\"},{\"emoji\":\"👩‍👦\",\"category\":0,\"name\":\"family: woman, boy\",\"version\":\"4.0\"},{\"emoji\":\"👩‍👦‍👦\",\"category\":0,\"name\":\"family: woman, boy, boy\",\"version\":\"4.0\"},{\"emoji\":\"👩‍👧\",\"category\":0,\"name\":\"family: woman, girl\",\"version\":\"4.0\"},{\"emoji\":\"👩‍👧‍👦\",\"category\":0,\"name\":\"family: woman, girl, boy\",\"version\":\"4.0\"},{\"emoji\":\"👩‍👧‍👧\",\"category\":0,\"name\":\"family: woman, girl, girl\",\"version\":\"4.0\"},{\"emoji\":\"🗣️\",\"category\":0,\"name\":\"speaking head\",\"version\":\"1.0\"},{\"emoji\":\"👤\",\"category\":0,\"name\":\"bust in silhouette\",\"version\":\"1.0\"},{\"emoji\":\"👥\",\"category\":0,\"name\":\"busts in silhouette\",\"version\":\"1.0\"},{\"emoji\":\"🫂\",\"category\":0,\"name\":\"people hugging\",\"version\":\"13.0\"},{\"emoji\":\"👣\",\"category\":0,\"name\":\"footprints\",\"version\":\"1.0\"},{\"emoji\":\"🐵\",\"category\":1,\"name\":\"monkey face\",\"version\":\"1.0\"},{\"emoji\":\"🐒\",\"category\":1,\"name\":\"monkey\",\"version\":\"1.0\"},{\"emoji\":\"🦍\",\"category\":1,\"name\":\"gorilla\",\"version\":\"3.0\"},{\"emoji\":\"🦧\",\"category\":1,\"name\":\"orangutan\",\"version\":\"12.0\"},{\"emoji\":\"🐶\",\"category\":1,\"name\":\"dog face\",\"version\":\"1.0\"},{\"emoji\":\"🐕\",\"category\":1,\"name\":\"dog\",\"version\":\"1.0\"},{\"emoji\":\"🦮\",\"category\":1,\"name\":\"guide dog\",\"version\":\"12.0\"},{\"emoji\":\"🐕‍🦺\",\"category\":1,\"name\":\"service dog\",\"version\":\"12.0\"},{\"emoji\":\"🐩\",\"category\":1,\"name\":\"poodle\",\"version\":\"1.0\"},{\"emoji\":\"🐺\",\"category\":1,\"name\":\"wolf\",\"version\":\"1.0\"},{\"emoji\":\"🦊\",\"category\":1,\"name\":\"fox\",\"version\":\"3.0\"},{\"emoji\":\"🦝\",\"category\":1,\"name\":\"raccoon\",\"version\":\"11.0\"},{\"emoji\":\"🐱\",\"category\":1,\"name\":\"cat face\",\"version\":\"1.0\"},{\"emoji\":\"🐈\",\"category\":1,\"name\":\"cat\",\"version\":\"1.0\"},{\"emoji\":\"🐈‍⬛\",\"category\":1,\"name\":\"black cat\",\"version\":\"13.0\"},{\"emoji\":\"🦁\",\"category\":1,\"name\":\"lion\",\"version\":\"1.0\"},{\"emoji\":\"🐯\",\"category\":1,\"name\":\"tiger face\",\"version\":\"1.0\"},{\"emoji\":\"🐅\",\"category\":1,\"name\":\"tiger\",\"version\":\"1.0\"},{\"emoji\":\"🐆\",\"category\":1,\"name\":\"leopard\",\"version\":\"1.0\"},{\"emoji\":\"🐴\",\"category\":1,\"name\":\"horse face\",\"version\":\"1.0\"},{\"emoji\":\"🐎\",\"category\":1,\"name\":\"horse\",\"version\":\"1.0\"},{\"emoji\":\"🦄\",\"category\":1,\"name\":\"unicorn\",\"version\":\"1.0\"},{\"emoji\":\"🦓\",\"category\":1,\"name\":\"zebra\",\"version\":\"5.0\"},{\"emoji\":\"🦌\",\"category\":1,\"name\":\"deer\",\"version\":\"3.0\"},{\"emoji\":\"🦬\",\"category\":1,\"name\":\"bison\",\"version\":\"13.0\"},{\"emoji\":\"🐮\",\"category\":1,\"name\":\"cow face\",\"version\":\"1.0\"},{\"emoji\":\"🐂\",\"category\":1,\"name\":\"ox\",\"version\":\"1.0\"},{\"emoji\":\"🐃\",\"category\":1,\"name\":\"water buffalo\",\"version\":\"1.0\"},{\"emoji\":\"🐄\",\"category\":1,\"name\":\"cow\",\"version\":\"1.0\"},{\"emoji\":\"🐷\",\"category\":1,\"name\":\"pig face\",\"version\":\"1.0\"},{\"emoji\":\"🐖\",\"category\":1,\"name\":\"pig\",\"version\":\"1.0\"},{\"emoji\":\"🐗\",\"category\":1,\"name\":\"boar\",\"version\":\"1.0\"},{\"emoji\":\"🐽\",\"category\":1,\"name\":\"pig nose\",\"version\":\"1.0\"},{\"emoji\":\"🐏\",\"category\":1,\"name\":\"ram\",\"version\":\"1.0\"},{\"emoji\":\"🐑\",\"category\":1,\"name\":\"ewe\",\"version\":\"1.0\"},{\"emoji\":\"🐐\",\"category\":1,\"name\":\"goat\",\"version\":\"1.0\"},{\"emoji\":\"🐪\",\"category\":1,\"name\":\"camel\",\"version\":\"1.0\"},{\"emoji\":\"🐫\",\"category\":1,\"name\":\"two-hump camel\",\"version\":\"1.0\"},{\"emoji\":\"🦙\",\"category\":1,\"name\":\"llama\",\"version\":\"11.0\"},{\"emoji\":\"🦒\",\"category\":1,\"name\":\"giraffe\",\"version\":\"5.0\"},{\"emoji\":\"🐘\",\"category\":1,\"name\":\"elephant\",\"version\":\"1.0\"},{\"emoji\":\"🦣\",\"category\":1,\"name\":\"mammoth\",\"version\":\"13.0\"},{\"emoji\":\"🦏\",\"category\":1,\"name\":\"rhinoceros\",\"version\":\"3.0\"},{\"emoji\":\"🦛\",\"category\":1,\"name\":\"hippopotamus\",\"version\":\"11.0\"},{\"emoji\":\"🐭\",\"category\":1,\"name\":\"mouse face\",\"version\":\"1.0\"},{\"emoji\":\"🐁\",\"category\":1,\"name\":\"mouse\",\"version\":\"1.0\"},{\"emoji\":\"🐀\",\"category\":1,\"name\":\"rat\",\"version\":\"1.0\"},{\"emoji\":\"🐹\",\"category\":1,\"name\":\"hamster\",\"version\":\"1.0\"},{\"emoji\":\"🐰\",\"category\":1,\"name\":\"rabbit face\",\"version\":\"1.0\"},{\"emoji\":\"🐇\",\"category\":1,\"name\":\"rabbit\",\"version\":\"1.0\"},{\"emoji\":\"🐿️\",\"category\":1,\"name\":\"chipmunk\",\"version\":\"1.0\"},{\"emoji\":\"🦫\",\"category\":1,\"name\":\"beaver\",\"version\":\"13.0\"},{\"emoji\":\"🦔\",\"category\":1,\"name\":\"hedgehog\",\"version\":\"5.0\"},{\"emoji\":\"🦇\",\"category\":1,\"name\":\"bat\",\"version\":\"3.0\"},{\"emoji\":\"🐻\",\"category\":1,\"name\":\"bear\",\"version\":\"1.0\"},{\"emoji\":\"🐻‍❄️\",\"category\":1,\"name\":\"polar bear\",\"version\":\"13.0\"},{\"emoji\":\"🐨\",\"category\":1,\"name\":\"koala\",\"version\":\"1.0\"},{\"emoji\":\"🐼\",\"category\":1,\"name\":\"panda\",\"version\":\"1.0\"},{\"emoji\":\"🦥\",\"category\":1,\"name\":\"sloth\",\"version\":\"12.0\"},{\"emoji\":\"🦦\",\"category\":1,\"name\":\"otter\",\"version\":\"12.0\"},{\"emoji\":\"🦨\",\"category\":1,\"name\":\"skunk\",\"version\":\"12.0\"},{\"emoji\":\"🦘\",\"category\":1,\"name\":\"kangaroo\",\"version\":\"11.0\"},{\"emoji\":\"🦡\",\"category\":1,\"name\":\"badger\",\"version\":\"11.0\"},{\"emoji\":\"🐾\",\"category\":1,\"name\":\"paw prints\",\"version\":\"1.0\"},{\"emoji\":\"🦃\",\"category\":1,\"name\":\"turkey\",\"version\":\"1.0\"},{\"emoji\":\"🐔\",\"category\":1,\"name\":\"chicken\",\"version\":\"1.0\"},{\"emoji\":\"🐓\",\"category\":1,\"name\":\"rooster\",\"version\":\"1.0\"},{\"emoji\":\"🐣\",\"category\":1,\"name\":\"hatching chick\",\"version\":\"1.0\"},{\"emoji\":\"🐤\",\"category\":1,\"name\":\"baby chick\",\"version\":\"1.0\"},{\"emoji\":\"🐥\",\"category\":1,\"name\":\"front-facing baby chick\",\"version\":\"1.0\"},{\"emoji\":\"🐦\",\"category\":1,\"name\":\"bird\",\"version\":\"1.0\"},{\"emoji\":\"🐧\",\"category\":1,\"name\":\"penguin\",\"version\":\"1.0\"},{\"emoji\":\"🕊️\",\"category\":1,\"name\":\"dove\",\"version\":\"1.0\"},{\"emoji\":\"🦅\",\"category\":1,\"name\":\"eagle\",\"version\":\"3.0\"},{\"emoji\":\"🦆\",\"category\":1,\"name\":\"duck\",\"version\":\"3.0\"},{\"emoji\":\"🦢\",\"category\":1,\"name\":\"swan\",\"version\":\"11.0\"},{\"emoji\":\"🦉\",\"category\":1,\"name\":\"owl\",\"version\":\"3.0\"},{\"emoji\":\"🦤\",\"category\":1,\"name\":\"dodo\",\"version\":\"13.0\"},{\"emoji\":\"🪶\",\"category\":1,\"name\":\"feather\",\"version\":\"13.0\"},{\"emoji\":\"🦩\",\"category\":1,\"name\":\"flamingo\",\"version\":\"12.0\"},{\"emoji\":\"🦚\",\"category\":1,\"name\":\"peacock\",\"version\":\"11.0\"},{\"emoji\":\"🦜\",\"category\":1,\"name\":\"parrot\",\"version\":\"11.0\"},{\"emoji\":\"🐸\",\"category\":1,\"name\":\"frog\",\"version\":\"1.0\"},{\"emoji\":\"🐊\",\"category\":1,\"name\":\"crocodile\",\"version\":\"1.0\"},{\"emoji\":\"🐢\",\"category\":1,\"name\":\"turtle\",\"version\":\"1.0\"},{\"emoji\":\"🦎\",\"category\":1,\"name\":\"lizard\",\"version\":\"3.0\"},{\"emoji\":\"🐍\",\"category\":1,\"name\":\"snake\",\"version\":\"1.0\"},{\"emoji\":\"🐲\",\"category\":1,\"name\":\"dragon face\",\"version\":\"1.0\"},{\"emoji\":\"🐉\",\"category\":1,\"name\":\"dragon\",\"version\":\"1.0\"},{\"emoji\":\"🦕\",\"category\":1,\"name\":\"sauropod\",\"version\":\"5.0\"},{\"emoji\":\"🦖\",\"category\":1,\"name\":\"T-Rex\",\"version\":\"5.0\"},{\"emoji\":\"🐳\",\"category\":1,\"name\":\"spouting whale\",\"version\":\"1.0\"},{\"emoji\":\"🐋\",\"category\":1,\"name\":\"whale\",\"version\":\"1.0\"},{\"emoji\":\"🐬\",\"category\":1,\"name\":\"dolphin\",\"version\":\"1.0\"},{\"emoji\":\"🦭\",\"category\":1,\"name\":\"seal\",\"version\":\"13.0\"},{\"emoji\":\"🐟\",\"category\":1,\"name\":\"fish\",\"version\":\"1.0\"},{\"emoji\":\"🐠\",\"category\":1,\"name\":\"tropical fish\",\"version\":\"1.0\"},{\"emoji\":\"🐡\",\"category\":1,\"name\":\"blowfish\",\"version\":\"1.0\"},{\"emoji\":\"🦈\",\"category\":1,\"name\":\"shark\",\"version\":\"3.0\"},{\"emoji\":\"🐙\",\"category\":1,\"name\":\"octopus\",\"version\":\"1.0\"},{\"emoji\":\"🐚\",\"category\":1,\"name\":\"spiral shell\",\"version\":\"1.0\"},{\"emoji\":\"🐌\",\"category\":1,\"name\":\"snail\",\"version\":\"1.0\"},{\"emoji\":\"🦋\",\"category\":1,\"name\":\"butterfly\",\"version\":\"3.0\"},{\"emoji\":\"🐛\",\"category\":1,\"name\":\"bug\",\"version\":\"1.0\"},{\"emoji\":\"🐜\",\"category\":1,\"name\":\"ant\",\"version\":\"1.0\"},{\"emoji\":\"🐝\",\"category\":1,\"name\":\"honeybee\",\"version\":\"1.0\"},{\"emoji\":\"🪲\",\"category\":1,\"name\":\"beetle\",\"version\":\"13.0\"},{\"emoji\":\"🐞\",\"category\":1,\"name\":\"lady beetle\",\"version\":\"1.0\"},{\"emoji\":\"🦗\",\"category\":1,\"name\":\"cricket\",\"version\":\"5.0\"},{\"emoji\":\"🪳\",\"category\":1,\"name\":\"cockroach\",\"version\":\"13.0\"},{\"emoji\":\"🕷️\",\"category\":1,\"name\":\"spider\",\"version\":\"1.0\"},{\"emoji\":\"🕸️\",\"category\":1,\"name\":\"spider web\",\"version\":\"1.0\"},{\"emoji\":\"🦂\",\"category\":1,\"name\":\"scorpion\",\"version\":\"1.0\"},{\"emoji\":\"🦟\",\"category\":1,\"name\":\"mosquito\",\"version\":\"11.0\"},{\"emoji\":\"🪰\",\"category\":1,\"name\":\"fly\",\"version\":\"13.0\"},{\"emoji\":\"🪱\",\"category\":1,\"name\":\"worm\",\"version\":\"13.0\"},{\"emoji\":\"🦠\",\"category\":1,\"name\":\"microbe\",\"version\":\"11.0\"},{\"emoji\":\"💐\",\"category\":1,\"name\":\"bouquet\",\"version\":\"1.0\"},{\"emoji\":\"🌸\",\"category\":1,\"name\":\"cherry blossom\",\"version\":\"1.0\"},{\"emoji\":\"💮\",\"category\":1,\"name\":\"white flower\",\"version\":\"1.0\"},{\"emoji\":\"🏵️\",\"category\":1,\"name\":\"rosette\",\"version\":\"1.0\"},{\"emoji\":\"🌹\",\"category\":1,\"name\":\"rose\",\"version\":\"1.0\"},{\"emoji\":\"🥀\",\"category\":1,\"name\":\"wilted flower\",\"version\":\"3.0\"},{\"emoji\":\"🌺\",\"category\":1,\"name\":\"hibiscus\",\"version\":\"1.0\"},{\"emoji\":\"🌻\",\"category\":1,\"name\":\"sunflower\",\"version\":\"1.0\"},{\"emoji\":\"🌼\",\"category\":1,\"name\":\"blossom\",\"version\":\"1.0\"},{\"emoji\":\"🌷\",\"category\":1,\"name\":\"tulip\",\"version\":\"1.0\"},{\"emoji\":\"🌱\",\"category\":1,\"name\":\"seedling\",\"version\":\"1.0\"},{\"emoji\":\"🪴\",\"category\":1,\"name\":\"potted plant\",\"version\":\"13.0\"},{\"emoji\":\"🌲\",\"category\":1,\"name\":\"evergreen tree\",\"version\":\"1.0\"},{\"emoji\":\"🌳\",\"category\":1,\"name\":\"deciduous tree\",\"version\":\"1.0\"},{\"emoji\":\"🌴\",\"category\":1,\"name\":\"palm tree\",\"version\":\"1.0\"},{\"emoji\":\"🌵\",\"category\":1,\"name\":\"cactus\",\"version\":\"1.0\"},{\"emoji\":\"🌾\",\"category\":1,\"name\":\"sheaf of rice\",\"version\":\"1.0\"},{\"emoji\":\"🌿\",\"category\":1,\"name\":\"herb\",\"version\":\"1.0\"},{\"emoji\":\"☘️\",\"category\":1,\"name\":\"shamrock\",\"version\":\"1.0\"},{\"emoji\":\"🍀\",\"category\":1,\"name\":\"four leaf clover\",\"version\":\"1.0\"},{\"emoji\":\"🍁\",\"category\":1,\"name\":\"maple leaf\",\"version\":\"1.0\"},{\"emoji\":\"🍂\",\"category\":1,\"name\":\"fallen leaf\",\"version\":\"1.0\"},{\"emoji\":\"🍃\",\"category\":1,\"name\":\"leaf fluttering in wind\",\"version\":\"1.0\"},{\"emoji\":\"🍇\",\"category\":2,\"name\":\"grapes\",\"version\":\"1.0\"},{\"emoji\":\"🍈\",\"category\":2,\"name\":\"melon\",\"version\":\"1.0\"},{\"emoji\":\"🍉\",\"category\":2,\"name\":\"watermelon\",\"version\":\"1.0\"},{\"emoji\":\"🍊\",\"category\":2,\"name\":\"tangerine\",\"version\":\"1.0\"},{\"emoji\":\"🍋\",\"category\":2,\"name\":\"lemon\",\"version\":\"1.0\"},{\"emoji\":\"🍌\",\"category\":2,\"name\":\"banana\",\"version\":\"1.0\"},{\"emoji\":\"🍍\",\"category\":2,\"name\":\"pineapple\",\"version\":\"1.0\"},{\"emoji\":\"🥭\",\"category\":2,\"name\":\"mango\",\"version\":\"11.0\"},{\"emoji\":\"🍎\",\"category\":2,\"name\":\"red apple\",\"version\":\"1.0\"},{\"emoji\":\"🍏\",\"category\":2,\"name\":\"green apple\",\"version\":\"1.0\"},{\"emoji\":\"🍐\",\"category\":2,\"name\":\"pear\",\"version\":\"1.0\"},{\"emoji\":\"🍑\",\"category\":2,\"name\":\"peach\",\"version\":\"1.0\"},{\"emoji\":\"🍒\",\"category\":2,\"name\":\"cherries\",\"version\":\"1.0\"},{\"emoji\":\"🍓\",\"category\":2,\"name\":\"strawberry\",\"version\":\"1.0\"},{\"emoji\":\"🫐\",\"category\":2,\"name\":\"blueberries\",\"version\":\"13.0\"},{\"emoji\":\"🥝\",\"category\":2,\"name\":\"kiwi fruit\",\"version\":\"3.0\"},{\"emoji\":\"🍅\",\"category\":2,\"name\":\"tomato\",\"version\":\"1.0\"},{\"emoji\":\"🫒\",\"category\":2,\"name\":\"olive\",\"version\":\"13.0\"},{\"emoji\":\"🥥\",\"category\":2,\"name\":\"coconut\",\"version\":\"5.0\"},{\"emoji\":\"🥑\",\"category\":2,\"name\":\"avocado\",\"version\":\"3.0\"},{\"emoji\":\"🍆\",\"category\":2,\"name\":\"eggplant\",\"version\":\"1.0\"},{\"emoji\":\"🥔\",\"category\":2,\"name\":\"potato\",\"version\":\"3.0\"},{\"emoji\":\"🥕\",\"category\":2,\"name\":\"carrot\",\"version\":\"3.0\"},{\"emoji\":\"🌽\",\"category\":2,\"name\":\"ear of corn\",\"version\":\"1.0\"},{\"emoji\":\"🌶️\",\"category\":2,\"name\":\"hot pepper\",\"version\":\"1.0\"},{\"emoji\":\"🫑\",\"category\":2,\"name\":\"bell pepper\",\"version\":\"13.0\"},{\"emoji\":\"🥒\",\"category\":2,\"name\":\"cucumber\",\"version\":\"3.0\"},{\"emoji\":\"🥬\",\"category\":2,\"name\":\"leafy green\",\"version\":\"11.0\"},{\"emoji\":\"🥦\",\"category\":2,\"name\":\"broccoli\",\"version\":\"5.0\"},{\"emoji\":\"🧄\",\"category\":2,\"name\":\"garlic\",\"version\":\"12.0\"},{\"emoji\":\"🧅\",\"category\":2,\"name\":\"onion\",\"version\":\"12.0\"},{\"emoji\":\"🍄\",\"category\":2,\"name\":\"mushroom\",\"version\":\"1.0\"},{\"emoji\":\"🥜\",\"category\":2,\"name\":\"peanuts\",\"version\":\"3.0\"},{\"emoji\":\"🌰\",\"category\":2,\"name\":\"chestnut\",\"version\":\"1.0\"},{\"emoji\":\"🍞\",\"category\":2,\"name\":\"bread\",\"version\":\"1.0\"},{\"emoji\":\"🥐\",\"category\":2,\"name\":\"croissant\",\"version\":\"3.0\"},{\"emoji\":\"🥖\",\"category\":2,\"name\":\"baguette bread\",\"version\":\"3.0\"},{\"emoji\":\"🫓\",\"category\":2,\"name\":\"flatbread\",\"version\":\"13.0\"},{\"emoji\":\"🥨\",\"category\":2,\"name\":\"pretzel\",\"version\":\"5.0\"},{\"emoji\":\"🥯\",\"category\":2,\"name\":\"bagel\",\"version\":\"11.0\"},{\"emoji\":\"🥞\",\"category\":2,\"name\":\"pancakes\",\"version\":\"3.0\"},{\"emoji\":\"🧇\",\"category\":2,\"name\":\"waffle\",\"version\":\"12.0\"},{\"emoji\":\"🧀\",\"category\":2,\"name\":\"cheese wedge\",\"version\":\"1.0\"},{\"emoji\":\"🍖\",\"category\":2,\"name\":\"meat on bone\",\"version\":\"1.0\"},{\"emoji\":\"🍗\",\"category\":2,\"name\":\"poultry leg\",\"version\":\"1.0\"},{\"emoji\":\"🥩\",\"category\":2,\"name\":\"cut of meat\",\"version\":\"5.0\"},{\"emoji\":\"🥓\",\"category\":2,\"name\":\"bacon\",\"version\":\"3.0\"},{\"emoji\":\"🍔\",\"category\":2,\"name\":\"hamburger\",\"version\":\"1.0\"},{\"emoji\":\"🍟\",\"category\":2,\"name\":\"french fries\",\"version\":\"1.0\"},{\"emoji\":\"🍕\",\"category\":2,\"name\":\"pizza\",\"version\":\"1.0\"},{\"emoji\":\"🌭\",\"category\":2,\"name\":\"hot dog\",\"version\":\"1.0\"},{\"emoji\":\"🥪\",\"category\":2,\"name\":\"sandwich\",\"version\":\"5.0\"},{\"emoji\":\"🌮\",\"category\":2,\"name\":\"taco\",\"version\":\"1.0\"},{\"emoji\":\"🌯\",\"category\":2,\"name\":\"burrito\",\"version\":\"1.0\"},{\"emoji\":\"🫔\",\"category\":2,\"name\":\"tamale\",\"version\":\"13.0\"},{\"emoji\":\"🥙\",\"category\":2,\"name\":\"stuffed flatbread\",\"version\":\"3.0\"},{\"emoji\":\"🧆\",\"category\":2,\"name\":\"falafel\",\"version\":\"12.0\"},{\"emoji\":\"🥚\",\"category\":2,\"name\":\"egg\",\"version\":\"3.0\"},{\"emoji\":\"🍳\",\"category\":2,\"name\":\"cooking\",\"version\":\"1.0\"},{\"emoji\":\"🥘\",\"category\":2,\"name\":\"shallow pan of food\",\"version\":\"3.0\"},{\"emoji\":\"🍲\",\"category\":2,\"name\":\"pot of food\",\"version\":\"1.0\"},{\"emoji\":\"🫕\",\"category\":2,\"name\":\"fondue\",\"version\":\"13.0\"},{\"emoji\":\"🥣\",\"category\":2,\"name\":\"bowl with spoon\",\"version\":\"5.0\"},{\"emoji\":\"🥗\",\"category\":2,\"name\":\"green salad\",\"version\":\"3.0\"},{\"emoji\":\"🍿\",\"category\":2,\"name\":\"popcorn\",\"version\":\"1.0\"},{\"emoji\":\"🧈\",\"category\":2,\"name\":\"butter\",\"version\":\"12.0\"},{\"emoji\":\"🧂\",\"category\":2,\"name\":\"salt\",\"version\":\"11.0\"},{\"emoji\":\"🥫\",\"category\":2,\"name\":\"canned food\",\"version\":\"5.0\"},{\"emoji\":\"🍱\",\"category\":2,\"name\":\"bento box\",\"version\":\"1.0\"},{\"emoji\":\"🍘\",\"category\":2,\"name\":\"rice cracker\",\"version\":\"1.0\"},{\"emoji\":\"🍙\",\"category\":2,\"name\":\"rice ball\",\"version\":\"1.0\"},{\"emoji\":\"🍚\",\"category\":2,\"name\":\"cooked rice\",\"version\":\"1.0\"},{\"emoji\":\"🍛\",\"category\":2,\"name\":\"curry rice\",\"version\":\"1.0\"},{\"emoji\":\"🍜\",\"category\":2,\"name\":\"steaming bowl\",\"version\":\"1.0\"},{\"emoji\":\"🍝\",\"category\":2,\"name\":\"spaghetti\",\"version\":\"1.0\"},{\"emoji\":\"🍠\",\"category\":2,\"name\":\"roasted sweet potato\",\"version\":\"1.0\"},{\"emoji\":\"🍢\",\"category\":2,\"name\":\"oden\",\"version\":\"1.0\"},{\"emoji\":\"🍣\",\"category\":2,\"name\":\"sushi\",\"version\":\"1.0\"},{\"emoji\":\"🍤\",\"category\":2,\"name\":\"fried shrimp\",\"version\":\"1.0\"},{\"emoji\":\"🍥\",\"category\":2,\"name\":\"fish cake with swirl\",\"version\":\"1.0\"},{\"emoji\":\"🥮\",\"category\":2,\"name\":\"moon cake\",\"version\":\"11.0\"},{\"emoji\":\"🍡\",\"category\":2,\"name\":\"dango\",\"version\":\"1.0\"},{\"emoji\":\"🥟\",\"category\":2,\"name\":\"dumpling\",\"version\":\"5.0\"},{\"emoji\":\"🥠\",\"category\":2,\"name\":\"fortune cookie\",\"version\":\"5.0\"},{\"emoji\":\"🥡\",\"category\":2,\"name\":\"takeout box\",\"version\":\"5.0\"},{\"emoji\":\"🦀\",\"category\":2,\"name\":\"crab\",\"version\":\"1.0\"},{\"emoji\":\"🦞\",\"category\":2,\"name\":\"lobster\",\"version\":\"11.0\"},{\"emoji\":\"🦐\",\"category\":2,\"name\":\"shrimp\",\"version\":\"3.0\"},{\"emoji\":\"🦑\",\"category\":2,\"name\":\"squid\",\"version\":\"3.0\"},{\"emoji\":\"🦪\",\"category\":2,\"name\":\"oyster\",\"version\":\"12.0\"},{\"emoji\":\"🍦\",\"category\":2,\"name\":\"soft ice cream\",\"version\":\"1.0\"},{\"emoji\":\"🍧\",\"category\":2,\"name\":\"shaved ice\",\"version\":\"1.0\"},{\"emoji\":\"🍨\",\"category\":2,\"name\":\"ice cream\",\"version\":\"1.0\"},{\"emoji\":\"🍩\",\"category\":2,\"name\":\"doughnut\",\"version\":\"1.0\"},{\"emoji\":\"🍪\",\"category\":2,\"name\":\"cookie\",\"version\":\"1.0\"},{\"emoji\":\"🎂\",\"category\":2,\"name\":\"birthday cake\",\"version\":\"1.0\"},{\"emoji\":\"🍰\",\"category\":2,\"name\":\"shortcake\",\"version\":\"1.0\"},{\"emoji\":\"🧁\",\"category\":2,\"name\":\"cupcake\",\"version\":\"11.0\"},{\"emoji\":\"🥧\",\"category\":2,\"name\":\"pie\",\"version\":\"5.0\"},{\"emoji\":\"🍫\",\"category\":2,\"name\":\"chocolate bar\",\"version\":\"1.0\"},{\"emoji\":\"🍬\",\"category\":2,\"name\":\"candy\",\"version\":\"1.0\"},{\"emoji\":\"🍭\",\"category\":2,\"name\":\"lollipop\",\"version\":\"1.0\"},{\"emoji\":\"🍮\",\"category\":2,\"name\":\"custard\",\"version\":\"1.0\"},{\"emoji\":\"🍯\",\"category\":2,\"name\":\"honey pot\",\"version\":\"1.0\"},{\"emoji\":\"🍼\",\"category\":2,\"name\":\"baby bottle\",\"version\":\"1.0\"},{\"emoji\":\"🥛\",\"category\":2,\"name\":\"glass of milk\",\"version\":\"3.0\"},{\"emoji\":\"☕\",\"category\":2,\"name\":\"hot beverage\",\"version\":\"1.0\"},{\"emoji\":\"🫖\",\"category\":2,\"name\":\"teapot\",\"version\":\"13.0\"},{\"emoji\":\"🍵\",\"category\":2,\"name\":\"teacup without handle\",\"version\":\"1.0\"},{\"emoji\":\"🍶\",\"category\":2,\"name\":\"sake\",\"version\":\"1.0\"},{\"emoji\":\"🍾\",\"category\":2,\"name\":\"bottle with popping cork\",\"version\":\"1.0\"},{\"emoji\":\"🍷\",\"category\":2,\"name\":\"wine glass\",\"version\":\"1.0\"},{\"emoji\":\"🍸\",\"category\":2,\"name\":\"cocktail glass\",\"version\":\"1.0\"},{\"emoji\":\"🍹\",\"category\":2,\"name\":\"tropical drink\",\"version\":\"1.0\"},{\"emoji\":\"🍺\",\"category\":2,\"name\":\"beer mug\",\"version\":\"1.0\"},{\"emoji\":\"🍻\",\"category\":2,\"name\":\"clinking beer mugs\",\"version\":\"1.0\"},{\"emoji\":\"🥂\",\"category\":2,\"name\":\"clinking glasses\",\"version\":\"3.0\"},{\"emoji\":\"🥃\",\"category\":2,\"name\":\"tumbler glass\",\"version\":\"3.0\"},{\"emoji\":\"🥤\",\"category\":2,\"name\":\"cup with straw\",\"version\":\"5.0\"},{\"emoji\":\"🧋\",\"category\":2,\"name\":\"bubble tea\",\"version\":\"13.0\"},{\"emoji\":\"🧃\",\"category\":2,\"name\":\"beverage box\",\"version\":\"12.0\"},{\"emoji\":\"🧉\",\"category\":2,\"name\":\"mate\",\"version\":\"12.0\"},{\"emoji\":\"🧊\",\"category\":2,\"name\":\"ice\",\"version\":\"12.0\"},{\"emoji\":\"🥢\",\"category\":2,\"name\":\"chopsticks\",\"version\":\"5.0\"},{\"emoji\":\"🍽️\",\"category\":2,\"name\":\"fork and knife with plate\",\"version\":\"1.0\"},{\"emoji\":\"🍴\",\"category\":2,\"name\":\"fork and knife\",\"version\":\"1.0\"},{\"emoji\":\"🥄\",\"category\":2,\"name\":\"spoon\",\"version\":\"3.0\"},{\"emoji\":\"🔪\",\"category\":2,\"name\":\"kitchen knife\",\"version\":\"1.0\"},{\"emoji\":\"🏺\",\"category\":2,\"name\":\"amphora\",\"version\":\"1.0\"},{\"emoji\":\"🌍\",\"category\":3,\"name\":\"globe showing Europe-Africa\",\"version\":\"1.0\"},{\"emoji\":\"🌎\",\"category\":3,\"name\":\"globe showing Americas\",\"version\":\"1.0\"},{\"emoji\":\"🌏\",\"category\":3,\"name\":\"globe showing Asia-Australia\",\"version\":\"1.0\"},{\"emoji\":\"🌐\",\"category\":3,\"name\":\"globe with meridians\",\"version\":\"1.0\"},{\"emoji\":\"🗺️\",\"category\":3,\"name\":\"world map\",\"version\":\"1.0\"},{\"emoji\":\"🗾\",\"category\":3,\"name\":\"map of Japan\",\"version\":\"1.0\"},{\"emoji\":\"🧭\",\"category\":3,\"name\":\"compass\",\"version\":\"11.0\"},{\"emoji\":\"🏔️\",\"category\":3,\"name\":\"snow-capped mountain\",\"version\":\"1.0\"},{\"emoji\":\"⛰️\",\"category\":3,\"name\":\"mountain\",\"version\":\"1.0\"},{\"emoji\":\"🌋\",\"category\":3,\"name\":\"volcano\",\"version\":\"1.0\"},{\"emoji\":\"🗻\",\"category\":3,\"name\":\"mount fuji\",\"version\":\"1.0\"},{\"emoji\":\"🏕️\",\"category\":3,\"name\":\"camping\",\"version\":\"1.0\"},{\"emoji\":\"🏖️\",\"category\":3,\"name\":\"beach with umbrella\",\"version\":\"1.0\"},{\"emoji\":\"🏜️\",\"category\":3,\"name\":\"desert\",\"version\":\"1.0\"},{\"emoji\":\"🏝️\",\"category\":3,\"name\":\"desert island\",\"version\":\"1.0\"},{\"emoji\":\"🏞️\",\"category\":3,\"name\":\"national park\",\"version\":\"1.0\"},{\"emoji\":\"🏟️\",\"category\":3,\"name\":\"stadium\",\"version\":\"1.0\"},{\"emoji\":\"🏛️\",\"category\":3,\"name\":\"classical building\",\"version\":\"1.0\"},{\"emoji\":\"🏗️\",\"category\":3,\"name\":\"building construction\",\"version\":\"1.0\"},{\"emoji\":\"🧱\",\"category\":3,\"name\":\"brick\",\"version\":\"11.0\"},{\"emoji\":\"🪨\",\"category\":3,\"name\":\"rock\",\"version\":\"13.0\"},{\"emoji\":\"🪵\",\"category\":3,\"name\":\"wood\",\"version\":\"13.0\"},{\"emoji\":\"🛖\",\"category\":3,\"name\":\"hut\",\"version\":\"13.0\"},{\"emoji\":\"🏘️\",\"category\":3,\"name\":\"houses\",\"version\":\"1.0\"},{\"emoji\":\"🏚️\",\"category\":3,\"name\":\"derelict house\",\"version\":\"1.0\"},{\"emoji\":\"🏠\",\"category\":3,\"name\":\"house\",\"version\":\"1.0\"},{\"emoji\":\"🏡\",\"category\":3,\"name\":\"house with garden\",\"version\":\"1.0\"},{\"emoji\":\"🏢\",\"category\":3,\"name\":\"office building\",\"version\":\"1.0\"},{\"emoji\":\"🏣\",\"category\":3,\"name\":\"Japanese post office\",\"version\":\"1.0\"},{\"emoji\":\"🏤\",\"category\":3,\"name\":\"post office\",\"version\":\"1.0\"},{\"emoji\":\"🏥\",\"category\":3,\"name\":\"hospital\",\"version\":\"1.0\"},{\"emoji\":\"🏦\",\"category\":3,\"name\":\"bank\",\"version\":\"1.0\"},{\"emoji\":\"🏨\",\"category\":3,\"name\":\"hotel\",\"version\":\"1.0\"},{\"emoji\":\"🏩\",\"category\":3,\"name\":\"love hotel\",\"version\":\"1.0\"},{\"emoji\":\"🏪\",\"category\":3,\"name\":\"convenience store\",\"version\":\"1.0\"},{\"emoji\":\"🏫\",\"category\":3,\"name\":\"school\",\"version\":\"1.0\"},{\"emoji\":\"🏬\",\"category\":3,\"name\":\"department store\",\"version\":\"1.0\"},{\"emoji\":\"🏭\",\"category\":3,\"name\":\"factory\",\"version\":\"1.0\"},{\"emoji\":\"🏯\",\"category\":3,\"name\":\"Japanese castle\",\"version\":\"1.0\"},{\"emoji\":\"🏰\",\"category\":3,\"name\":\"castle\",\"version\":\"1.0\"},{\"emoji\":\"💒\",\"category\":3,\"name\":\"wedding\",\"version\":\"1.0\"},{\"emoji\":\"🗼\",\"category\":3,\"name\":\"Tokyo tower\",\"version\":\"1.0\"},{\"emoji\":\"🗽\",\"category\":3,\"name\":\"Statue of Liberty\",\"version\":\"1.0\"},{\"emoji\":\"⛪\",\"category\":3,\"name\":\"church\",\"version\":\"1.0\"},{\"emoji\":\"🕌\",\"category\":3,\"name\":\"mosque\",\"version\":\"1.0\"},{\"emoji\":\"🛕\",\"category\":3,\"name\":\"hindu temple\",\"version\":\"12.0\"},{\"emoji\":\"🕍\",\"category\":3,\"name\":\"synagogue\",\"version\":\"1.0\"},{\"emoji\":\"⛩️\",\"category\":3,\"name\":\"shinto shrine\",\"version\":\"1.0\"},{\"emoji\":\"🕋\",\"category\":3,\"name\":\"kaaba\",\"version\":\"1.0\"},{\"emoji\":\"⛲\",\"category\":3,\"name\":\"fountain\",\"version\":\"1.0\"},{\"emoji\":\"⛺\",\"category\":3,\"name\":\"tent\",\"version\":\"1.0\"},{\"emoji\":\"🌁\",\"category\":3,\"name\":\"foggy\",\"version\":\"1.0\"},{\"emoji\":\"🌃\",\"category\":3,\"name\":\"night with stars\",\"version\":\"1.0\"},{\"emoji\":\"🏙️\",\"category\":3,\"name\":\"cityscape\",\"version\":\"1.0\"},{\"emoji\":\"🌄\",\"category\":3,\"name\":\"sunrise over mountains\",\"version\":\"1.0\"},{\"emoji\":\"🌅\",\"category\":3,\"name\":\"sunrise\",\"version\":\"1.0\"},{\"emoji\":\"🌆\",\"category\":3,\"name\":\"cityscape at dusk\",\"version\":\"1.0\"},{\"emoji\":\"🌇\",\"category\":3,\"name\":\"sunset\",\"version\":\"1.0\"},{\"emoji\":\"🌉\",\"category\":3,\"name\":\"bridge at night\",\"version\":\"1.0\"},{\"emoji\":\"♨️\",\"category\":3,\"name\":\"hot springs\",\"version\":\"1.0\"},{\"emoji\":\"🎠\",\"category\":3,\"name\":\"carousel horse\",\"version\":\"1.0\"},{\"emoji\":\"🎡\",\"category\":3,\"name\":\"ferris wheel\",\"version\":\"1.0\"},{\"emoji\":\"🎢\",\"category\":3,\"name\":\"roller coaster\",\"version\":\"1.0\"},{\"emoji\":\"💈\",\"category\":3,\"name\":\"barber pole\",\"version\":\"1.0\"},{\"emoji\":\"🎪\",\"category\":3,\"name\":\"circus tent\",\"version\":\"1.0\"},{\"emoji\":\"🚂\",\"category\":3,\"name\":\"locomotive\",\"version\":\"1.0\"},{\"emoji\":\"🚃\",\"category\":3,\"name\":\"railway car\",\"version\":\"1.0\"},{\"emoji\":\"🚄\",\"category\":3,\"name\":\"high-speed train\",\"version\":\"1.0\"},{\"emoji\":\"🚅\",\"category\":3,\"name\":\"bullet train\",\"version\":\"1.0\"},{\"emoji\":\"🚆\",\"category\":3,\"name\":\"train\",\"version\":\"1.0\"},{\"emoji\":\"🚇\",\"category\":3,\"name\":\"metro\",\"version\":\"1.0\"},{\"emoji\":\"🚈\",\"category\":3,\"name\":\"light rail\",\"version\":\"1.0\"},{\"emoji\":\"🚉\",\"category\":3,\"name\":\"station\",\"version\":\"1.0\"},{\"emoji\":\"🚊\",\"category\":3,\"name\":\"tram\",\"version\":\"1.0\"},{\"emoji\":\"🚝\",\"category\":3,\"name\":\"monorail\",\"version\":\"1.0\"},{\"emoji\":\"🚞\",\"category\":3,\"name\":\"mountain railway\",\"version\":\"1.0\"},{\"emoji\":\"🚋\",\"category\":3,\"name\":\"tram car\",\"version\":\"1.0\"},{\"emoji\":\"🚌\",\"category\":3,\"name\":\"bus\",\"version\":\"1.0\"},{\"emoji\":\"🚍\",\"category\":3,\"name\":\"oncoming bus\",\"version\":\"1.0\"},{\"emoji\":\"🚎\",\"category\":3,\"name\":\"trolleybus\",\"version\":\"1.0\"},{\"emoji\":\"🚐\",\"category\":3,\"name\":\"minibus\",\"version\":\"1.0\"},{\"emoji\":\"🚑\",\"category\":3,\"name\":\"ambulance\",\"version\":\"1.0\"},{\"emoji\":\"🚒\",\"category\":3,\"name\":\"fire engine\",\"version\":\"1.0\"},{\"emoji\":\"🚓\",\"category\":3,\"name\":\"police car\",\"version\":\"1.0\"},{\"emoji\":\"🚔\",\"category\":3,\"name\":\"oncoming police car\",\"version\":\"1.0\"},{\"emoji\":\"🚕\",\"category\":3,\"name\":\"taxi\",\"version\":\"1.0\"},{\"emoji\":\"🚖\",\"category\":3,\"name\":\"oncoming taxi\",\"version\":\"1.0\"},{\"emoji\":\"🚗\",\"category\":3,\"name\":\"automobile\",\"version\":\"1.0\"},{\"emoji\":\"🚘\",\"category\":3,\"name\":\"oncoming automobile\",\"version\":\"1.0\"},{\"emoji\":\"🚙\",\"category\":3,\"name\":\"sport utility vehicle\",\"version\":\"1.0\"},{\"emoji\":\"🛻\",\"category\":3,\"name\":\"pickup truck\",\"version\":\"13.0\"},{\"emoji\":\"🚚\",\"category\":3,\"name\":\"delivery truck\",\"version\":\"1.0\"},{\"emoji\":\"🚛\",\"category\":3,\"name\":\"articulated lorry\",\"version\":\"1.0\"},{\"emoji\":\"🚜\",\"category\":3,\"name\":\"tractor\",\"version\":\"1.0\"},{\"emoji\":\"🏎️\",\"category\":3,\"name\":\"racing car\",\"version\":\"1.0\"},{\"emoji\":\"🏍️\",\"category\":3,\"name\":\"motorcycle\",\"version\":\"1.0\"},{\"emoji\":\"🛵\",\"category\":3,\"name\":\"motor scooter\",\"version\":\"3.0\"},{\"emoji\":\"🦽\",\"category\":3,\"name\":\"manual wheelchair\",\"version\":\"12.0\"},{\"emoji\":\"🦼\",\"category\":3,\"name\":\"motorized wheelchair\",\"version\":\"12.0\"},{\"emoji\":\"🛺\",\"category\":3,\"name\":\"auto rickshaw\",\"version\":\"12.0\"},{\"emoji\":\"🚲\",\"category\":3,\"name\":\"bicycle\",\"version\":\"1.0\"},{\"emoji\":\"🛴\",\"category\":3,\"name\":\"kick scooter\",\"version\":\"3.0\"},{\"emoji\":\"🛹\",\"category\":3,\"name\":\"skateboard\",\"version\":\"11.0\"},{\"emoji\":\"🛼\",\"category\":3,\"name\":\"roller skate\",\"version\":\"13.0\"},{\"emoji\":\"🚏\",\"category\":3,\"name\":\"bus stop\",\"version\":\"1.0\"},{\"emoji\":\"🛣️\",\"category\":3,\"name\":\"motorway\",\"version\":\"1.0\"},{\"emoji\":\"🛤️\",\"category\":3,\"name\":\"railway track\",\"version\":\"1.0\"},{\"emoji\":\"🛢️\",\"category\":3,\"name\":\"oil drum\",\"version\":\"1.0\"},{\"emoji\":\"⛽\",\"category\":3,\"name\":\"fuel pump\",\"version\":\"1.0\"},{\"emoji\":\"🚨\",\"category\":3,\"name\":\"police car light\",\"version\":\"1.0\"},{\"emoji\":\"🚥\",\"category\":3,\"name\":\"horizontal traffic light\",\"version\":\"1.0\"},{\"emoji\":\"🚦\",\"category\":3,\"name\":\"vertical traffic light\",\"version\":\"1.0\"},{\"emoji\":\"🛑\",\"category\":3,\"name\":\"stop sign\",\"version\":\"3.0\"},{\"emoji\":\"🚧\",\"category\":3,\"name\":\"construction\",\"version\":\"1.0\"},{\"emoji\":\"⚓\",\"category\":3,\"name\":\"anchor\",\"version\":\"1.0\"},{\"emoji\":\"⛵\",\"category\":3,\"name\":\"sailboat\",\"version\":\"1.0\"},{\"emoji\":\"🛶\",\"category\":3,\"name\":\"canoe\",\"version\":\"3.0\"},{\"emoji\":\"🚤\",\"category\":3,\"name\":\"speedboat\",\"version\":\"1.0\"},{\"emoji\":\"🛳️\",\"category\":3,\"name\":\"passenger ship\",\"version\":\"1.0\"},{\"emoji\":\"⛴️\",\"category\":3,\"name\":\"ferry\",\"version\":\"1.0\"},{\"emoji\":\"🛥️\",\"category\":3,\"name\":\"motor boat\",\"version\":\"1.0\"},{\"emoji\":\"🚢\",\"category\":3,\"name\":\"ship\",\"version\":\"1.0\"},{\"emoji\":\"✈️\",\"category\":3,\"name\":\"airplane\",\"version\":\"1.0\"},{\"emoji\":\"🛩️\",\"category\":3,\"name\":\"small airplane\",\"version\":\"1.0\"},{\"emoji\":\"🛫\",\"category\":3,\"name\":\"airplane departure\",\"version\":\"1.0\"},{\"emoji\":\"🛬\",\"category\":3,\"name\":\"airplane arrival\",\"version\":\"1.0\"},{\"emoji\":\"🪂\",\"category\":3,\"name\":\"parachute\",\"version\":\"12.0\"},{\"emoji\":\"💺\",\"category\":3,\"name\":\"seat\",\"version\":\"1.0\"},{\"emoji\":\"🚁\",\"category\":3,\"name\":\"helicopter\",\"version\":\"1.0\"},{\"emoji\":\"🚟\",\"category\":3,\"name\":\"suspension railway\",\"version\":\"1.0\"},{\"emoji\":\"🚠\",\"category\":3,\"name\":\"mountain cableway\",\"version\":\"1.0\"},{\"emoji\":\"🚡\",\"category\":3,\"name\":\"aerial tramway\",\"version\":\"1.0\"},{\"emoji\":\"🛰️\",\"category\":3,\"name\":\"satellite\",\"version\":\"1.0\"},{\"emoji\":\"🚀\",\"category\":3,\"name\":\"rocket\",\"version\":\"1.0\"},{\"emoji\":\"🛸\",\"category\":3,\"name\":\"flying saucer\",\"version\":\"5.0\"},{\"emoji\":\"🛎️\",\"category\":3,\"name\":\"bellhop bell\",\"version\":\"1.0\"},{\"emoji\":\"🧳\",\"category\":3,\"name\":\"luggage\",\"version\":\"11.0\"},{\"emoji\":\"⌛\",\"category\":3,\"name\":\"hourglass done\",\"version\":\"1.0\"},{\"emoji\":\"⏳\",\"category\":3,\"name\":\"hourglass not done\",\"version\":\"1.0\"},{\"emoji\":\"⌚\",\"category\":3,\"name\":\"watch\",\"version\":\"1.0\"},{\"emoji\":\"⏰\",\"category\":3,\"name\":\"alarm clock\",\"version\":\"1.0\"},{\"emoji\":\"⏱️\",\"category\":3,\"name\":\"stopwatch\",\"version\":\"1.0\"},{\"emoji\":\"⏲️\",\"category\":3,\"name\":\"timer clock\",\"version\":\"1.0\"},{\"emoji\":\"🕰️\",\"category\":3,\"name\":\"mantelpiece clock\",\"version\":\"1.0\"},{\"emoji\":\"🕛\",\"category\":3,\"name\":\"twelve o’clock\",\"version\":\"1.0\"},{\"emoji\":\"🕧\",\"category\":3,\"name\":\"twelve-thirty\",\"version\":\"1.0\"},{\"emoji\":\"🕐\",\"category\":3,\"name\":\"one o’clock\",\"version\":\"1.0\"},{\"emoji\":\"🕜\",\"category\":3,\"name\":\"one-thirty\",\"version\":\"1.0\"},{\"emoji\":\"🕑\",\"category\":3,\"name\":\"two o’clock\",\"version\":\"1.0\"},{\"emoji\":\"🕝\",\"category\":3,\"name\":\"two-thirty\",\"version\":\"1.0\"},{\"emoji\":\"🕒\",\"category\":3,\"name\":\"three o’clock\",\"version\":\"1.0\"},{\"emoji\":\"🕞\",\"category\":3,\"name\":\"three-thirty\",\"version\":\"1.0\"},{\"emoji\":\"🕓\",\"category\":3,\"name\":\"four o’clock\",\"version\":\"1.0\"},{\"emoji\":\"🕟\",\"category\":3,\"name\":\"four-thirty\",\"version\":\"1.0\"},{\"emoji\":\"🕔\",\"category\":3,\"name\":\"five o’clock\",\"version\":\"1.0\"},{\"emoji\":\"🕠\",\"category\":3,\"name\":\"five-thirty\",\"version\":\"1.0\"},{\"emoji\":\"🕕\",\"category\":3,\"name\":\"six o’clock\",\"version\":\"1.0\"},{\"emoji\":\"🕡\",\"category\":3,\"name\":\"six-thirty\",\"version\":\"1.0\"},{\"emoji\":\"🕖\",\"category\":3,\"name\":\"seven o’clock\",\"version\":\"1.0\"},{\"emoji\":\"🕢\",\"category\":3,\"name\":\"seven-thirty\",\"version\":\"1.0\"},{\"emoji\":\"🕗\",\"category\":3,\"name\":\"eight o’clock\",\"version\":\"1.0\"},{\"emoji\":\"🕣\",\"category\":3,\"name\":\"eight-thirty\",\"version\":\"1.0\"},{\"emoji\":\"🕘\",\"category\":3,\"name\":\"nine o’clock\",\"version\":\"1.0\"},{\"emoji\":\"🕤\",\"category\":3,\"name\":\"nine-thirty\",\"version\":\"1.0\"},{\"emoji\":\"🕙\",\"category\":3,\"name\":\"ten o’clock\",\"version\":\"1.0\"},{\"emoji\":\"🕥\",\"category\":3,\"name\":\"ten-thirty\",\"version\":\"1.0\"},{\"emoji\":\"🕚\",\"category\":3,\"name\":\"eleven o’clock\",\"version\":\"1.0\"},{\"emoji\":\"🕦\",\"category\":3,\"name\":\"eleven-thirty\",\"version\":\"1.0\"},{\"emoji\":\"🌑\",\"category\":3,\"name\":\"new moon\",\"version\":\"1.0\"},{\"emoji\":\"🌒\",\"category\":3,\"name\":\"waxing crescent moon\",\"version\":\"1.0\"},{\"emoji\":\"🌓\",\"category\":3,\"name\":\"first quarter moon\",\"version\":\"1.0\"},{\"emoji\":\"🌔\",\"category\":3,\"name\":\"waxing gibbous moon\",\"version\":\"1.0\"},{\"emoji\":\"🌕\",\"category\":3,\"name\":\"full moon\",\"version\":\"1.0\"},{\"emoji\":\"🌖\",\"category\":3,\"name\":\"waning gibbous moon\",\"version\":\"1.0\"},{\"emoji\":\"🌗\",\"category\":3,\"name\":\"last quarter moon\",\"version\":\"1.0\"},{\"emoji\":\"🌘\",\"category\":3,\"name\":\"waning crescent moon\",\"version\":\"1.0\"},{\"emoji\":\"🌙\",\"category\":3,\"name\":\"crescent moon\",\"version\":\"1.0\"},{\"emoji\":\"🌚\",\"category\":3,\"name\":\"new moon face\",\"version\":\"1.0\"},{\"emoji\":\"🌛\",\"category\":3,\"name\":\"first quarter moon face\",\"version\":\"1.0\"},{\"emoji\":\"🌜\",\"category\":3,\"name\":\"last quarter moon face\",\"version\":\"1.0\"},{\"emoji\":\"🌡️\",\"category\":3,\"name\":\"thermometer\",\"version\":\"1.0\"},{\"emoji\":\"☀️\",\"category\":3,\"name\":\"sun\",\"version\":\"1.0\"},{\"emoji\":\"🌝\",\"category\":3,\"name\":\"full moon face\",\"version\":\"1.0\"},{\"emoji\":\"🌞\",\"category\":3,\"name\":\"sun with face\",\"version\":\"1.0\"},{\"emoji\":\"🪐\",\"category\":3,\"name\":\"ringed planet\",\"version\":\"12.0\"},{\"emoji\":\"⭐\",\"category\":3,\"name\":\"star\",\"version\":\"1.0\"},{\"emoji\":\"🌟\",\"category\":3,\"name\":\"glowing star\",\"version\":\"1.0\"},{\"emoji\":\"🌠\",\"category\":3,\"name\":\"shooting star\",\"version\":\"1.0\"},{\"emoji\":\"🌌\",\"category\":3,\"name\":\"milky way\",\"version\":\"1.0\"},{\"emoji\":\"☁️\",\"category\":3,\"name\":\"cloud\",\"version\":\"1.0\"},{\"emoji\":\"⛅\",\"category\":3,\"name\":\"sun behind cloud\",\"version\":\"1.0\"},{\"emoji\":\"⛈️\",\"category\":3,\"name\":\"cloud with lightning and rain\",\"version\":\"1.0\"},{\"emoji\":\"🌤️\",\"category\":3,\"name\":\"sun behind small cloud\",\"version\":\"1.0\"},{\"emoji\":\"🌥️\",\"category\":3,\"name\":\"sun behind large cloud\",\"version\":\"1.0\"},{\"emoji\":\"🌦️\",\"category\":3,\"name\":\"sun behind rain cloud\",\"version\":\"1.0\"},{\"emoji\":\"🌧️\",\"category\":3,\"name\":\"cloud with rain\",\"version\":\"1.0\"},{\"emoji\":\"🌨️\",\"category\":3,\"name\":\"cloud with snow\",\"version\":\"1.0\"},{\"emoji\":\"🌩️\",\"category\":3,\"name\":\"cloud with lightning\",\"version\":\"1.0\"},{\"emoji\":\"🌪️\",\"category\":3,\"name\":\"tornado\",\"version\":\"1.0\"},{\"emoji\":\"🌫️\",\"category\":3,\"name\":\"fog\",\"version\":\"1.0\"},{\"emoji\":\"🌬️\",\"category\":3,\"name\":\"wind face\",\"version\":\"1.0\"},{\"emoji\":\"🌀\",\"category\":3,\"name\":\"cyclone\",\"version\":\"1.0\"},{\"emoji\":\"🌈\",\"category\":3,\"name\":\"rainbow\",\"version\":\"1.0\"},{\"emoji\":\"🌂\",\"category\":3,\"name\":\"closed umbrella\",\"version\":\"1.0\"},{\"emoji\":\"☂️\",\"category\":3,\"name\":\"umbrella\",\"version\":\"1.0\"},{\"emoji\":\"☔\",\"category\":3,\"name\":\"umbrella with rain drops\",\"version\":\"1.0\"},{\"emoji\":\"⛱️\",\"category\":3,\"name\":\"umbrella on ground\",\"version\":\"1.0\"},{\"emoji\":\"⚡\",\"category\":3,\"name\":\"high voltage\",\"version\":\"1.0\"},{\"emoji\":\"❄️\",\"category\":3,\"name\":\"snowflake\",\"version\":\"1.0\"},{\"emoji\":\"☃️\",\"category\":3,\"name\":\"snowman\",\"version\":\"1.0\"},{\"emoji\":\"⛄\",\"category\":3,\"name\":\"snowman without snow\",\"version\":\"1.0\"},{\"emoji\":\"☄️\",\"category\":3,\"name\":\"comet\",\"version\":\"1.0\"},{\"emoji\":\"🔥\",\"category\":3,\"name\":\"fire\",\"version\":\"1.0\"},{\"emoji\":\"💧\",\"category\":3,\"name\":\"droplet\",\"version\":\"1.0\"},{\"emoji\":\"🌊\",\"category\":3,\"name\":\"water wave\",\"version\":\"1.0\"},{\"emoji\":\"🎃\",\"category\":4,\"name\":\"jack-o-lantern\",\"version\":\"1.0\"},{\"emoji\":\"🎄\",\"category\":4,\"name\":\"Christmas tree\",\"version\":\"1.0\"},{\"emoji\":\"🎆\",\"category\":4,\"name\":\"fireworks\",\"version\":\"1.0\"},{\"emoji\":\"🎇\",\"category\":4,\"name\":\"sparkler\",\"version\":\"1.0\"},{\"emoji\":\"🧨\",\"category\":4,\"name\":\"firecracker\",\"version\":\"11.0\"},{\"emoji\":\"✨\",\"category\":4,\"name\":\"sparkles\",\"version\":\"1.0\"},{\"emoji\":\"🎈\",\"category\":4,\"name\":\"balloon\",\"version\":\"1.0\"},{\"emoji\":\"🎉\",\"category\":4,\"name\":\"party popper\",\"version\":\"1.0\"},{\"emoji\":\"🎊\",\"category\":4,\"name\":\"confetti ball\",\"version\":\"1.0\"},{\"emoji\":\"🎋\",\"category\":4,\"name\":\"tanabata tree\",\"version\":\"1.0\"},{\"emoji\":\"🎍\",\"category\":4,\"name\":\"pine decoration\",\"version\":\"1.0\"},{\"emoji\":\"🎎\",\"category\":4,\"name\":\"Japanese dolls\",\"version\":\"1.0\"},{\"emoji\":\"🎏\",\"category\":4,\"name\":\"carp streamer\",\"version\":\"1.0\"},{\"emoji\":\"🎐\",\"category\":4,\"name\":\"wind chime\",\"version\":\"1.0\"},{\"emoji\":\"🎑\",\"category\":4,\"name\":\"moon viewing ceremony\",\"version\":\"1.0\"},{\"emoji\":\"🧧\",\"category\":4,\"name\":\"red envelope\",\"version\":\"11.0\"},{\"emoji\":\"🎀\",\"category\":4,\"name\":\"ribbon\",\"version\":\"1.0\"},{\"emoji\":\"🎁\",\"category\":4,\"name\":\"wrapped gift\",\"version\":\"1.0\"},{\"emoji\":\"🎗️\",\"category\":4,\"name\":\"reminder ribbon\",\"version\":\"1.0\"},{\"emoji\":\"🎟️\",\"category\":4,\"name\":\"admission tickets\",\"version\":\"1.0\"},{\"emoji\":\"🎫\",\"category\":4,\"name\":\"ticket\",\"version\":\"1.0\"},{\"emoji\":\"🎖️\",\"category\":4,\"name\":\"military medal\",\"version\":\"1.0\"},{\"emoji\":\"🏆\",\"category\":4,\"name\":\"trophy\",\"version\":\"1.0\"},{\"emoji\":\"🏅\",\"category\":4,\"name\":\"sports medal\",\"version\":\"1.0\"},{\"emoji\":\"🥇\",\"category\":4,\"name\":\"1st place medal\",\"version\":\"3.0\"},{\"emoji\":\"🥈\",\"category\":4,\"name\":\"2nd place medal\",\"version\":\"3.0\"},{\"emoji\":\"🥉\",\"category\":4,\"name\":\"3rd place medal\",\"version\":\"3.0\"},{\"emoji\":\"⚽\",\"category\":4,\"name\":\"soccer ball\",\"version\":\"1.0\"},{\"emoji\":\"⚾\",\"category\":4,\"name\":\"baseball\",\"version\":\"1.0\"},{\"emoji\":\"🥎\",\"category\":4,\"name\":\"softball\",\"version\":\"11.0\"},{\"emoji\":\"🏀\",\"category\":4,\"name\":\"basketball\",\"version\":\"1.0\"},{\"emoji\":\"🏐\",\"category\":4,\"name\":\"volleyball\",\"version\":\"1.0\"},{\"emoji\":\"🏈\",\"category\":4,\"name\":\"american football\",\"version\":\"1.0\"},{\"emoji\":\"🏉\",\"category\":4,\"name\":\"rugby football\",\"version\":\"1.0\"},{\"emoji\":\"🎾\",\"category\":4,\"name\":\"tennis\",\"version\":\"1.0\"},{\"emoji\":\"🥏\",\"category\":4,\"name\":\"flying disc\",\"version\":\"11.0\"},{\"emoji\":\"🎳\",\"category\":4,\"name\":\"bowling\",\"version\":\"1.0\"},{\"emoji\":\"🏏\",\"category\":4,\"name\":\"cricket game\",\"version\":\"1.0\"},{\"emoji\":\"🏑\",\"category\":4,\"name\":\"field hockey\",\"version\":\"1.0\"},{\"emoji\":\"🏒\",\"category\":4,\"name\":\"ice hockey\",\"version\":\"1.0\"},{\"emoji\":\"🥍\",\"category\":4,\"name\":\"lacrosse\",\"version\":\"11.0\"},{\"emoji\":\"🏓\",\"category\":4,\"name\":\"ping pong\",\"version\":\"1.0\"},{\"emoji\":\"🏸\",\"category\":4,\"name\":\"badminton\",\"version\":\"1.0\"},{\"emoji\":\"🥊\",\"category\":4,\"name\":\"boxing glove\",\"version\":\"3.0\"},{\"emoji\":\"🥋\",\"category\":4,\"name\":\"martial arts uniform\",\"version\":\"3.0\"},{\"emoji\":\"🥅\",\"category\":4,\"name\":\"goal net\",\"version\":\"3.0\"},{\"emoji\":\"⛳\",\"category\":4,\"name\":\"flag in hole\",\"version\":\"1.0\"},{\"emoji\":\"⛸️\",\"category\":4,\"name\":\"ice skate\",\"version\":\"1.0\"},{\"emoji\":\"🎣\",\"category\":4,\"name\":\"fishing pole\",\"version\":\"1.0\"},{\"emoji\":\"🤿\",\"category\":4,\"name\":\"diving mask\",\"version\":\"12.0\"},{\"emoji\":\"🎽\",\"category\":4,\"name\":\"running shirt\",\"version\":\"1.0\"},{\"emoji\":\"🎿\",\"category\":4,\"name\":\"skis\",\"version\":\"1.0\"},{\"emoji\":\"🛷\",\"category\":4,\"name\":\"sled\",\"version\":\"5.0\"},{\"emoji\":\"🥌\",\"category\":4,\"name\":\"curling stone\",\"version\":\"5.0\"},{\"emoji\":\"🎯\",\"category\":4,\"name\":\"direct hit\",\"version\":\"1.0\"},{\"emoji\":\"🪀\",\"category\":4,\"name\":\"yo-yo\",\"version\":\"12.0\"},{\"emoji\":\"🪁\",\"category\":4,\"name\":\"kite\",\"version\":\"12.0\"},{\"emoji\":\"🎱\",\"category\":4,\"name\":\"pool 8 ball\",\"version\":\"1.0\"},{\"emoji\":\"🔮\",\"category\":4,\"name\":\"crystal ball\",\"version\":\"1.0\"},{\"emoji\":\"🪄\",\"category\":4,\"name\":\"magic wand\",\"version\":\"13.0\"},{\"emoji\":\"🧿\",\"category\":4,\"name\":\"nazar amulet\",\"version\":\"11.0\"},{\"emoji\":\"🎮\",\"category\":4,\"name\":\"video game\",\"version\":\"1.0\"},{\"emoji\":\"🕹️\",\"category\":4,\"name\":\"joystick\",\"version\":\"1.0\"},{\"emoji\":\"🎰\",\"category\":4,\"name\":\"slot machine\",\"version\":\"1.0\"},{\"emoji\":\"🎲\",\"category\":4,\"name\":\"game die\",\"version\":\"1.0\"},{\"emoji\":\"🧩\",\"category\":4,\"name\":\"puzzle piece\",\"version\":\"11.0\"},{\"emoji\":\"🧸\",\"category\":4,\"name\":\"teddy bear\",\"version\":\"11.0\"},{\"emoji\":\"🪅\",\"category\":4,\"name\":\"piñata\",\"version\":\"13.0\"},{\"emoji\":\"🪆\",\"category\":4,\"name\":\"nesting dolls\",\"version\":\"13.0\"},{\"emoji\":\"♠️\",\"category\":4,\"name\":\"spade suit\",\"version\":\"1.0\"},{\"emoji\":\"♥️\",\"category\":4,\"name\":\"heart suit\",\"version\":\"1.0\"},{\"emoji\":\"♦️\",\"category\":4,\"name\":\"diamond suit\",\"version\":\"1.0\"},{\"emoji\":\"♣️\",\"category\":4,\"name\":\"club suit\",\"version\":\"1.0\"},{\"emoji\":\"♟️\",\"category\":4,\"name\":\"chess pawn\",\"version\":\"11.0\"},{\"emoji\":\"🃏\",\"category\":4,\"name\":\"joker\",\"version\":\"1.0\"},{\"emoji\":\"🀄\",\"category\":4,\"name\":\"mahjong red dragon\",\"version\":\"1.0\"},{\"emoji\":\"🎴\",\"category\":4,\"name\":\"flower playing cards\",\"version\":\"1.0\"},{\"emoji\":\"🎭\",\"category\":4,\"name\":\"performing arts\",\"version\":\"1.0\"},{\"emoji\":\"🖼️\",\"category\":4,\"name\":\"framed picture\",\"version\":\"1.0\"},{\"emoji\":\"🎨\",\"category\":4,\"name\":\"artist palette\",\"version\":\"1.0\"},{\"emoji\":\"🧵\",\"category\":4,\"name\":\"thread\",\"version\":\"11.0\"},{\"emoji\":\"🪡\",\"category\":4,\"name\":\"sewing needle\",\"version\":\"13.0\"},{\"emoji\":\"🧶\",\"category\":4,\"name\":\"yarn\",\"version\":\"11.0\"},{\"emoji\":\"🪢\",\"category\":4,\"name\":\"knot\",\"version\":\"13.0\"},{\"emoji\":\"👓\",\"category\":5,\"name\":\"glasses\",\"version\":\"1.0\"},{\"emoji\":\"🕶️\",\"category\":5,\"name\":\"sunglasses\",\"version\":\"1.0\"},{\"emoji\":\"🥽\",\"category\":5,\"name\":\"goggles\",\"version\":\"11.0\"},{\"emoji\":\"🥼\",\"category\":5,\"name\":\"lab coat\",\"version\":\"11.0\"},{\"emoji\":\"🦺\",\"category\":5,\"name\":\"safety vest\",\"version\":\"12.0\"},{\"emoji\":\"👔\",\"category\":5,\"name\":\"necktie\",\"version\":\"1.0\"},{\"emoji\":\"👕\",\"category\":5,\"name\":\"t-shirt\",\"version\":\"1.0\"},{\"emoji\":\"👖\",\"category\":5,\"name\":\"jeans\",\"version\":\"1.0\"},{\"emoji\":\"🧣\",\"category\":5,\"name\":\"scarf\",\"version\":\"5.0\"},{\"emoji\":\"🧤\",\"category\":5,\"name\":\"gloves\",\"version\":\"5.0\"},{\"emoji\":\"🧥\",\"category\":5,\"name\":\"coat\",\"version\":\"5.0\"},{\"emoji\":\"🧦\",\"category\":5,\"name\":\"socks\",\"version\":\"5.0\"},{\"emoji\":\"👗\",\"category\":5,\"name\":\"dress\",\"version\":\"1.0\"},{\"emoji\":\"👘\",\"category\":5,\"name\":\"kimono\",\"version\":\"1.0\"},{\"emoji\":\"🥻\",\"category\":5,\"name\":\"sari\",\"version\":\"12.0\"},{\"emoji\":\"🩱\",\"category\":5,\"name\":\"one-piece swimsuit\",\"version\":\"12.0\"},{\"emoji\":\"🩲\",\"category\":5,\"name\":\"briefs\",\"version\":\"12.0\"},{\"emoji\":\"🩳\",\"category\":5,\"name\":\"shorts\",\"version\":\"12.0\"},{\"emoji\":\"👙\",\"category\":5,\"name\":\"bikini\",\"version\":\"1.0\"},{\"emoji\":\"👚\",\"category\":5,\"name\":\"woman’s clothes\",\"version\":\"1.0\"},{\"emoji\":\"👛\",\"category\":5,\"name\":\"purse\",\"version\":\"1.0\"},{\"emoji\":\"👜\",\"category\":5,\"name\":\"handbag\",\"version\":\"1.0\"},{\"emoji\":\"👝\",\"category\":5,\"name\":\"clutch bag\",\"version\":\"1.0\"},{\"emoji\":\"🛍️\",\"category\":5,\"name\":\"shopping bags\",\"version\":\"1.0\"},{\"emoji\":\"🎒\",\"category\":5,\"name\":\"backpack\",\"version\":\"1.0\"},{\"emoji\":\"🩴\",\"category\":5,\"name\":\"thong sandal\",\"version\":\"13.0\"},{\"emoji\":\"👞\",\"category\":5,\"name\":\"man’s shoe\",\"version\":\"1.0\"},{\"emoji\":\"👟\",\"category\":5,\"name\":\"running shoe\",\"version\":\"1.0\"},{\"emoji\":\"🥾\",\"category\":5,\"name\":\"hiking boot\",\"version\":\"11.0\"},{\"emoji\":\"🥿\",\"category\":5,\"name\":\"flat shoe\",\"version\":\"11.0\"},{\"emoji\":\"👠\",\"category\":5,\"name\":\"high-heeled shoe\",\"version\":\"1.0\"},{\"emoji\":\"👡\",\"category\":5,\"name\":\"woman’s sandal\",\"version\":\"1.0\"},{\"emoji\":\"🩰\",\"category\":5,\"name\":\"ballet shoes\",\"version\":\"12.0\"},{\"emoji\":\"👢\",\"category\":5,\"name\":\"woman’s boot\",\"version\":\"1.0\"},{\"emoji\":\"👑\",\"category\":5,\"name\":\"crown\",\"version\":\"1.0\"},{\"emoji\":\"👒\",\"category\":5,\"name\":\"woman’s hat\",\"version\":\"1.0\"},{\"emoji\":\"🎩\",\"category\":5,\"name\":\"top hat\",\"version\":\"1.0\"},{\"emoji\":\"🎓\",\"category\":5,\"name\":\"graduation cap\",\"version\":\"1.0\"},{\"emoji\":\"🧢\",\"category\":5,\"name\":\"billed cap\",\"version\":\"5.0\"},{\"emoji\":\"🪖\",\"category\":5,\"name\":\"military helmet\",\"version\":\"13.0\"},{\"emoji\":\"⛑️\",\"category\":5,\"name\":\"rescue worker’s helmet\",\"version\":\"1.0\"},{\"emoji\":\"📿\",\"category\":5,\"name\":\"prayer beads\",\"version\":\"1.0\"},{\"emoji\":\"💄\",\"category\":5,\"name\":\"lipstick\",\"version\":\"1.0\"},{\"emoji\":\"💍\",\"category\":5,\"name\":\"ring\",\"version\":\"1.0\"},{\"emoji\":\"💎\",\"category\":5,\"name\":\"gem stone\",\"version\":\"1.0\"},{\"emoji\":\"🔇\",\"category\":5,\"name\":\"muted speaker\",\"version\":\"1.0\"},{\"emoji\":\"🔈\",\"category\":5,\"name\":\"speaker low volume\",\"version\":\"1.0\"},{\"emoji\":\"🔉\",\"category\":5,\"name\":\"speaker medium volume\",\"version\":\"1.0\"},{\"emoji\":\"🔊\",\"category\":5,\"name\":\"speaker high volume\",\"version\":\"1.0\"},{\"emoji\":\"📢\",\"category\":5,\"name\":\"loudspeaker\",\"version\":\"1.0\"},{\"emoji\":\"📣\",\"category\":5,\"name\":\"megaphone\",\"version\":\"1.0\"},{\"emoji\":\"📯\",\"category\":5,\"name\":\"postal horn\",\"version\":\"1.0\"},{\"emoji\":\"🔔\",\"category\":5,\"name\":\"bell\",\"version\":\"1.0\"},{\"emoji\":\"🔕\",\"category\":5,\"name\":\"bell with slash\",\"version\":\"1.0\"},{\"emoji\":\"🎼\",\"category\":5,\"name\":\"musical score\",\"version\":\"1.0\"},{\"emoji\":\"🎵\",\"category\":5,\"name\":\"musical note\",\"version\":\"1.0\"},{\"emoji\":\"🎶\",\"category\":5,\"name\":\"musical notes\",\"version\":\"1.0\"},{\"emoji\":\"🎙️\",\"category\":5,\"name\":\"studio microphone\",\"version\":\"1.0\"},{\"emoji\":\"🎚️\",\"category\":5,\"name\":\"level slider\",\"version\":\"1.0\"},{\"emoji\":\"🎛️\",\"category\":5,\"name\":\"control knobs\",\"version\":\"1.0\"},{\"emoji\":\"🎤\",\"category\":5,\"name\":\"microphone\",\"version\":\"1.0\"},{\"emoji\":\"🎧\",\"category\":5,\"name\":\"headphone\",\"version\":\"1.0\"},{\"emoji\":\"📻\",\"category\":5,\"name\":\"radio\",\"version\":\"1.0\"},{\"emoji\":\"🎷\",\"category\":5,\"name\":\"saxophone\",\"version\":\"1.0\"},{\"emoji\":\"🪗\",\"category\":5,\"name\":\"accordion\",\"version\":\"13.0\"},{\"emoji\":\"🎸\",\"category\":5,\"name\":\"guitar\",\"version\":\"1.0\"},{\"emoji\":\"🎹\",\"category\":5,\"name\":\"musical keyboard\",\"version\":\"1.0\"},{\"emoji\":\"🎺\",\"category\":5,\"name\":\"trumpet\",\"version\":\"1.0\"},{\"emoji\":\"🎻\",\"category\":5,\"name\":\"violin\",\"version\":\"1.0\"},{\"emoji\":\"🪕\",\"category\":5,\"name\":\"banjo\",\"version\":\"12.0\"},{\"emoji\":\"🥁\",\"category\":5,\"name\":\"drum\",\"version\":\"3.0\"},{\"emoji\":\"🪘\",\"category\":5,\"name\":\"long drum\",\"version\":\"13.0\"},{\"emoji\":\"📱\",\"category\":5,\"name\":\"mobile phone\",\"version\":\"1.0\"},{\"emoji\":\"📲\",\"category\":5,\"name\":\"mobile phone with arrow\",\"version\":\"1.0\"},{\"emoji\":\"☎️\",\"category\":5,\"name\":\"telephone\",\"version\":\"1.0\"},{\"emoji\":\"📞\",\"category\":5,\"name\":\"telephone receiver\",\"version\":\"1.0\"},{\"emoji\":\"📟\",\"category\":5,\"name\":\"pager\",\"version\":\"1.0\"},{\"emoji\":\"📠\",\"category\":5,\"name\":\"fax machine\",\"version\":\"1.0\"},{\"emoji\":\"🔋\",\"category\":5,\"name\":\"battery\",\"version\":\"1.0\"},{\"emoji\":\"🔌\",\"category\":5,\"name\":\"electric plug\",\"version\":\"1.0\"},{\"emoji\":\"💻\",\"category\":5,\"name\":\"laptop\",\"version\":\"1.0\"},{\"emoji\":\"🖥️\",\"category\":5,\"name\":\"desktop computer\",\"version\":\"1.0\"},{\"emoji\":\"🖨️\",\"category\":5,\"name\":\"printer\",\"version\":\"1.0\"},{\"emoji\":\"⌨️\",\"category\":5,\"name\":\"keyboard\",\"version\":\"1.0\"},{\"emoji\":\"🖱️\",\"category\":5,\"name\":\"computer mouse\",\"version\":\"1.0\"},{\"emoji\":\"🖲️\",\"category\":5,\"name\":\"trackball\",\"version\":\"1.0\"},{\"emoji\":\"💽\",\"category\":5,\"name\":\"computer disk\",\"version\":\"1.0\"},{\"emoji\":\"💾\",\"category\":5,\"name\":\"floppy disk\",\"version\":\"1.0\"},{\"emoji\":\"💿\",\"category\":5,\"name\":\"optical disk\",\"version\":\"1.0\"},{\"emoji\":\"📀\",\"category\":5,\"name\":\"dvd\",\"version\":\"1.0\"},{\"emoji\":\"🧮\",\"category\":5,\"name\":\"abacus\",\"version\":\"11.0\"},{\"emoji\":\"🎥\",\"category\":5,\"name\":\"movie camera\",\"version\":\"1.0\"},{\"emoji\":\"🎞️\",\"category\":5,\"name\":\"film frames\",\"version\":\"1.0\"},{\"emoji\":\"📽️\",\"category\":5,\"name\":\"film projector\",\"version\":\"1.0\"},{\"emoji\":\"🎬\",\"category\":5,\"name\":\"clapper board\",\"version\":\"1.0\"},{\"emoji\":\"📺\",\"category\":5,\"name\":\"television\",\"version\":\"1.0\"},{\"emoji\":\"📷\",\"category\":5,\"name\":\"camera\",\"version\":\"1.0\"},{\"emoji\":\"📸\",\"category\":5,\"name\":\"camera with flash\",\"version\":\"1.0\"},{\"emoji\":\"📹\",\"category\":5,\"name\":\"video camera\",\"version\":\"1.0\"},{\"emoji\":\"📼\",\"category\":5,\"name\":\"videocassette\",\"version\":\"1.0\"},{\"emoji\":\"🔍\",\"category\":5,\"name\":\"magnifying glass tilted left\",\"version\":\"1.0\"},{\"emoji\":\"🔎\",\"category\":5,\"name\":\"magnifying glass tilted right\",\"version\":\"1.0\"},{\"emoji\":\"🕯️\",\"category\":5,\"name\":\"candle\",\"version\":\"1.0\"},{\"emoji\":\"💡\",\"category\":5,\"name\":\"light bulb\",\"version\":\"1.0\"},{\"emoji\":\"🔦\",\"category\":5,\"name\":\"flashlight\",\"version\":\"1.0\"},{\"emoji\":\"🏮\",\"category\":5,\"name\":\"red paper lantern\",\"version\":\"1.0\"},{\"emoji\":\"🪔\",\"category\":5,\"name\":\"diya lamp\",\"version\":\"12.0\"},{\"emoji\":\"📔\",\"category\":5,\"name\":\"notebook with decorative cover\",\"version\":\"1.0\"},{\"emoji\":\"📕\",\"category\":5,\"name\":\"closed book\",\"version\":\"1.0\"},{\"emoji\":\"📖\",\"category\":5,\"name\":\"open book\",\"version\":\"1.0\"},{\"emoji\":\"📗\",\"category\":5,\"name\":\"green book\",\"version\":\"1.0\"},{\"emoji\":\"📘\",\"category\":5,\"name\":\"blue book\",\"version\":\"1.0\"},{\"emoji\":\"📙\",\"category\":5,\"name\":\"orange book\",\"version\":\"1.0\"},{\"emoji\":\"📚\",\"category\":5,\"name\":\"books\",\"version\":\"1.0\"},{\"emoji\":\"📓\",\"category\":5,\"name\":\"notebook\",\"version\":\"1.0\"},{\"emoji\":\"📒\",\"category\":5,\"name\":\"ledger\",\"version\":\"1.0\"},{\"emoji\":\"📃\",\"category\":5,\"name\":\"page with curl\",\"version\":\"1.0\"},{\"emoji\":\"📜\",\"category\":5,\"name\":\"scroll\",\"version\":\"1.0\"},{\"emoji\":\"📄\",\"category\":5,\"name\":\"page facing up\",\"version\":\"1.0\"},{\"emoji\":\"📰\",\"category\":5,\"name\":\"newspaper\",\"version\":\"1.0\"},{\"emoji\":\"🗞️\",\"category\":5,\"name\":\"rolled-up newspaper\",\"version\":\"1.0\"},{\"emoji\":\"📑\",\"category\":5,\"name\":\"bookmark tabs\",\"version\":\"1.0\"},{\"emoji\":\"🔖\",\"category\":5,\"name\":\"bookmark\",\"version\":\"1.0\"},{\"emoji\":\"🏷️\",\"category\":5,\"name\":\"label\",\"version\":\"1.0\"},{\"emoji\":\"💰\",\"category\":5,\"name\":\"money bag\",\"version\":\"1.0\"},{\"emoji\":\"🪙\",\"category\":5,\"name\":\"coin\",\"version\":\"13.0\"},{\"emoji\":\"💴\",\"category\":5,\"name\":\"yen banknote\",\"version\":\"1.0\"},{\"emoji\":\"💵\",\"category\":5,\"name\":\"dollar banknote\",\"version\":\"1.0\"},{\"emoji\":\"💶\",\"category\":5,\"name\":\"euro banknote\",\"version\":\"1.0\"},{\"emoji\":\"💷\",\"category\":5,\"name\":\"pound banknote\",\"version\":\"1.0\"},{\"emoji\":\"💸\",\"category\":5,\"name\":\"money with wings\",\"version\":\"1.0\"},{\"emoji\":\"💳\",\"category\":5,\"name\":\"credit card\",\"version\":\"1.0\"},{\"emoji\":\"🧾\",\"category\":5,\"name\":\"receipt\",\"version\":\"11.0\"},{\"emoji\":\"💹\",\"category\":5,\"name\":\"chart increasing with yen\",\"version\":\"1.0\"},{\"emoji\":\"✉️\",\"category\":5,\"name\":\"envelope\",\"version\":\"1.0\"},{\"emoji\":\"📧\",\"category\":5,\"name\":\"e-mail\",\"version\":\"1.0\"},{\"emoji\":\"📨\",\"category\":5,\"name\":\"incoming envelope\",\"version\":\"1.0\"},{\"emoji\":\"📩\",\"category\":5,\"name\":\"envelope with arrow\",\"version\":\"1.0\"},{\"emoji\":\"📤\",\"category\":5,\"name\":\"outbox tray\",\"version\":\"1.0\"},{\"emoji\":\"📥\",\"category\":5,\"name\":\"inbox tray\",\"version\":\"1.0\"},{\"emoji\":\"📦\",\"category\":5,\"name\":\"package\",\"version\":\"1.0\"},{\"emoji\":\"📫\",\"category\":5,\"name\":\"closed mailbox with raised flag\",\"version\":\"1.0\"},{\"emoji\":\"📪\",\"category\":5,\"name\":\"closed mailbox with lowered flag\",\"version\":\"1.0\"},{\"emoji\":\"📬\",\"category\":5,\"name\":\"open mailbox with raised flag\",\"version\":\"1.0\"},{\"emoji\":\"📭\",\"category\":5,\"name\":\"open mailbox with lowered flag\",\"version\":\"1.0\"},{\"emoji\":\"📮\",\"category\":5,\"name\":\"postbox\",\"version\":\"1.0\"},{\"emoji\":\"🗳️\",\"category\":5,\"name\":\"ballot box with ballot\",\"version\":\"1.0\"},{\"emoji\":\"✏️\",\"category\":5,\"name\":\"pencil\",\"version\":\"1.0\"},{\"emoji\":\"✒️\",\"category\":5,\"name\":\"black nib\",\"version\":\"1.0\"},{\"emoji\":\"🖋️\",\"category\":5,\"name\":\"fountain pen\",\"version\":\"1.0\"},{\"emoji\":\"🖊️\",\"category\":5,\"name\":\"pen\",\"version\":\"1.0\"},{\"emoji\":\"🖌️\",\"category\":5,\"name\":\"paintbrush\",\"version\":\"1.0\"},{\"emoji\":\"🖍️\",\"category\":5,\"name\":\"crayon\",\"version\":\"1.0\"},{\"emoji\":\"📝\",\"category\":5,\"name\":\"memo\",\"version\":\"1.0\"},{\"emoji\":\"💼\",\"category\":5,\"name\":\"briefcase\",\"version\":\"1.0\"},{\"emoji\":\"📁\",\"category\":5,\"name\":\"file folder\",\"version\":\"1.0\"},{\"emoji\":\"📂\",\"category\":5,\"name\":\"open file folder\",\"version\":\"1.0\"},{\"emoji\":\"🗂️\",\"category\":5,\"name\":\"card index dividers\",\"version\":\"1.0\"},{\"emoji\":\"📅\",\"category\":5,\"name\":\"calendar\",\"version\":\"1.0\"},{\"emoji\":\"📆\",\"category\":5,\"name\":\"tear-off calendar\",\"version\":\"1.0\"},{\"emoji\":\"🗒️\",\"category\":5,\"name\":\"spiral notepad\",\"version\":\"1.0\"},{\"emoji\":\"🗓️\",\"category\":5,\"name\":\"spiral calendar\",\"version\":\"1.0\"},{\"emoji\":\"📇\",\"category\":5,\"name\":\"card index\",\"version\":\"1.0\"},{\"emoji\":\"📈\",\"category\":5,\"name\":\"chart increasing\",\"version\":\"1.0\"},{\"emoji\":\"📉\",\"category\":5,\"name\":\"chart decreasing\",\"version\":\"1.0\"},{\"emoji\":\"📊\",\"category\":5,\"name\":\"bar chart\",\"version\":\"1.0\"},{\"emoji\":\"📋\",\"category\":5,\"name\":\"clipboard\",\"version\":\"1.0\"},{\"emoji\":\"📌\",\"category\":5,\"name\":\"pushpin\",\"version\":\"1.0\"},{\"emoji\":\"📍\",\"category\":5,\"name\":\"round pushpin\",\"version\":\"1.0\"},{\"emoji\":\"📎\",\"category\":5,\"name\":\"paperclip\",\"version\":\"1.0\"},{\"emoji\":\"🖇️\",\"category\":5,\"name\":\"linked paperclips\",\"version\":\"1.0\"},{\"emoji\":\"📏\",\"category\":5,\"name\":\"straight ruler\",\"version\":\"1.0\"},{\"emoji\":\"📐\",\"category\":5,\"name\":\"triangular ruler\",\"version\":\"1.0\"},{\"emoji\":\"✂️\",\"category\":5,\"name\":\"scissors\",\"version\":\"1.0\"},{\"emoji\":\"🗃️\",\"category\":5,\"name\":\"card file box\",\"version\":\"1.0\"},{\"emoji\":\"🗄️\",\"category\":5,\"name\":\"file cabinet\",\"version\":\"1.0\"},{\"emoji\":\"🗑️\",\"category\":5,\"name\":\"wastebasket\",\"version\":\"1.0\"},{\"emoji\":\"🔒\",\"category\":5,\"name\":\"locked\",\"version\":\"1.0\"},{\"emoji\":\"🔓\",\"category\":5,\"name\":\"unlocked\",\"version\":\"1.0\"},{\"emoji\":\"🔏\",\"category\":5,\"name\":\"locked with pen\",\"version\":\"1.0\"},{\"emoji\":\"🔐\",\"category\":5,\"name\":\"locked with key\",\"version\":\"1.0\"},{\"emoji\":\"🔑\",\"category\":5,\"name\":\"key\",\"version\":\"1.0\"},{\"emoji\":\"🗝️\",\"category\":5,\"name\":\"old key\",\"version\":\"1.0\"},{\"emoji\":\"🔨\",\"category\":5,\"name\":\"hammer\",\"version\":\"1.0\"},{\"emoji\":\"🪓\",\"category\":5,\"name\":\"axe\",\"version\":\"12.0\"},{\"emoji\":\"⛏️\",\"category\":5,\"name\":\"pick\",\"version\":\"1.0\"},{\"emoji\":\"⚒️\",\"category\":5,\"name\":\"hammer and pick\",\"version\":\"1.0\"},{\"emoji\":\"🛠️\",\"category\":5,\"name\":\"hammer and wrench\",\"version\":\"1.0\"},{\"emoji\":\"🗡️\",\"category\":5,\"name\":\"dagger\",\"version\":\"1.0\"},{\"emoji\":\"⚔️\",\"category\":5,\"name\":\"crossed swords\",\"version\":\"1.0\"},{\"emoji\":\"🔫\",\"category\":5,\"name\":\"pistol\",\"version\":\"1.0\"},{\"emoji\":\"🪃\",\"category\":5,\"name\":\"boomerang\",\"version\":\"13.0\"},{\"emoji\":\"🏹\",\"category\":5,\"name\":\"bow and arrow\",\"version\":\"1.0\"},{\"emoji\":\"🛡️\",\"category\":5,\"name\":\"shield\",\"version\":\"1.0\"},{\"emoji\":\"🪚\",\"category\":5,\"name\":\"carpentry saw\",\"version\":\"13.0\"},{\"emoji\":\"🔧\",\"category\":5,\"name\":\"wrench\",\"version\":\"1.0\"},{\"emoji\":\"🪛\",\"category\":5,\"name\":\"screwdriver\",\"version\":\"13.0\"},{\"emoji\":\"🔩\",\"category\":5,\"name\":\"nut and bolt\",\"version\":\"1.0\"},{\"emoji\":\"⚙️\",\"category\":5,\"name\":\"gear\",\"version\":\"1.0\"},{\"emoji\":\"🗜️\",\"category\":5,\"name\":\"clamp\",\"version\":\"1.0\"},{\"emoji\":\"⚖️\",\"category\":5,\"name\":\"balance scale\",\"version\":\"1.0\"},{\"emoji\":\"🦯\",\"category\":5,\"name\":\"white cane\",\"version\":\"12.0\"},{\"emoji\":\"🔗\",\"category\":5,\"name\":\"link\",\"version\":\"1.0\"},{\"emoji\":\"⛓️\",\"category\":5,\"name\":\"chains\",\"version\":\"1.0\"},{\"emoji\":\"🪝\",\"category\":5,\"name\":\"hook\",\"version\":\"13.0\"},{\"emoji\":\"🧰\",\"category\":5,\"name\":\"toolbox\",\"version\":\"11.0\"},{\"emoji\":\"🧲\",\"category\":5,\"name\":\"magnet\",\"version\":\"11.0\"},{\"emoji\":\"🪜\",\"category\":5,\"name\":\"ladder\",\"version\":\"13.0\"},{\"emoji\":\"⚗️\",\"category\":5,\"name\":\"alembic\",\"version\":\"1.0\"},{\"emoji\":\"🧪\",\"category\":5,\"name\":\"test tube\",\"version\":\"11.0\"},{\"emoji\":\"🧫\",\"category\":5,\"name\":\"petri dish\",\"version\":\"11.0\"},{\"emoji\":\"🧬\",\"category\":5,\"name\":\"dna\",\"version\":\"11.0\"},{\"emoji\":\"🔬\",\"category\":5,\"name\":\"microscope\",\"version\":\"1.0\"},{\"emoji\":\"🔭\",\"category\":5,\"name\":\"telescope\",\"version\":\"1.0\"},{\"emoji\":\"📡\",\"category\":5,\"name\":\"satellite antenna\",\"version\":\"1.0\"},{\"emoji\":\"💉\",\"category\":5,\"name\":\"syringe\",\"version\":\"1.0\"},{\"emoji\":\"🩸\",\"category\":5,\"name\":\"drop of blood\",\"version\":\"12.0\"},{\"emoji\":\"💊\",\"category\":5,\"name\":\"pill\",\"version\":\"1.0\"},{\"emoji\":\"🩹\",\"category\":5,\"name\":\"adhesive bandage\",\"version\":\"12.0\"},{\"emoji\":\"🩺\",\"category\":5,\"name\":\"stethoscope\",\"version\":\"12.0\"},{\"emoji\":\"🚪\",\"category\":5,\"name\":\"door\",\"version\":\"1.0\"},{\"emoji\":\"🛗\",\"category\":5,\"name\":\"elevator\",\"version\":\"13.0\"},{\"emoji\":\"🪞\",\"category\":5,\"name\":\"mirror\",\"version\":\"13.0\"},{\"emoji\":\"🪟\",\"category\":5,\"name\":\"window\",\"version\":\"13.0\"},{\"emoji\":\"🛏️\",\"category\":5,\"name\":\"bed\",\"version\":\"1.0\"},{\"emoji\":\"🛋️\",\"category\":5,\"name\":\"couch and lamp\",\"version\":\"1.0\"},{\"emoji\":\"🪑\",\"category\":5,\"name\":\"chair\",\"version\":\"12.0\"},{\"emoji\":\"🚽\",\"category\":5,\"name\":\"toilet\",\"version\":\"1.0\"},{\"emoji\":\"🪠\",\"category\":5,\"name\":\"plunger\",\"version\":\"13.0\"},{\"emoji\":\"🚿\",\"category\":5,\"name\":\"shower\",\"version\":\"1.0\"},{\"emoji\":\"🛁\",\"category\":5,\"name\":\"bathtub\",\"version\":\"1.0\"},{\"emoji\":\"🪤\",\"category\":5,\"name\":\"mouse trap\",\"version\":\"13.0\"},{\"emoji\":\"🪒\",\"category\":5,\"name\":\"razor\",\"version\":\"12.0\"},{\"emoji\":\"🧴\",\"category\":5,\"name\":\"lotion bottle\",\"version\":\"11.0\"},{\"emoji\":\"🧷\",\"category\":5,\"name\":\"safety pin\",\"version\":\"11.0\"},{\"emoji\":\"🧹\",\"category\":5,\"name\":\"broom\",\"version\":\"11.0\"},{\"emoji\":\"🧺\",\"category\":5,\"name\":\"basket\",\"version\":\"11.0\"},{\"emoji\":\"🧻\",\"category\":5,\"name\":\"roll of paper\",\"version\":\"11.0\"},{\"emoji\":\"🪣\",\"category\":5,\"name\":\"bucket\",\"version\":\"13.0\"},{\"emoji\":\"🧼\",\"category\":5,\"name\":\"soap\",\"version\":\"11.0\"},{\"emoji\":\"🪥\",\"category\":5,\"name\":\"toothbrush\",\"version\":\"13.0\"},{\"emoji\":\"🧽\",\"category\":5,\"name\":\"sponge\",\"version\":\"11.0\"},{\"emoji\":\"🧯\",\"category\":5,\"name\":\"fire extinguisher\",\"version\":\"11.0\"},{\"emoji\":\"🛒\",\"category\":5,\"name\":\"shopping cart\",\"version\":\"3.0\"},{\"emoji\":\"🚬\",\"category\":5,\"name\":\"cigarette\",\"version\":\"1.0\"},{\"emoji\":\"⚰️\",\"category\":5,\"name\":\"coffin\",\"version\":\"1.0\"},{\"emoji\":\"🪦\",\"category\":5,\"name\":\"headstone\",\"version\":\"13.0\"},{\"emoji\":\"⚱️\",\"category\":5,\"name\":\"funeral urn\",\"version\":\"1.0\"},{\"emoji\":\"🗿\",\"category\":5,\"name\":\"moai\",\"version\":\"1.0\"},{\"emoji\":\"🪧\",\"category\":5,\"name\":\"placard\",\"version\":\"13.0\"},{\"emoji\":\"🏧\",\"category\":6,\"name\":\"ATM sign\",\"version\":\"1.0\"},{\"emoji\":\"🚮\",\"category\":6,\"name\":\"litter in bin sign\",\"version\":\"1.0\"},{\"emoji\":\"🚰\",\"category\":6,\"name\":\"potable water\",\"version\":\"1.0\"},{\"emoji\":\"♿\",\"category\":6,\"name\":\"wheelchair symbol\",\"version\":\"1.0\"},{\"emoji\":\"🚹\",\"category\":6,\"name\":\"men’s room\",\"version\":\"1.0\"},{\"emoji\":\"🚺\",\"category\":6,\"name\":\"women’s room\",\"version\":\"1.0\"},{\"emoji\":\"🚻\",\"category\":6,\"name\":\"restroom\",\"version\":\"1.0\"},{\"emoji\":\"🚼\",\"category\":6,\"name\":\"baby symbol\",\"version\":\"1.0\"},{\"emoji\":\"🚾\",\"category\":6,\"name\":\"water closet\",\"version\":\"1.0\"},{\"emoji\":\"🛂\",\"category\":6,\"name\":\"passport control\",\"version\":\"1.0\"},{\"emoji\":\"🛃\",\"category\":6,\"name\":\"customs\",\"version\":\"1.0\"},{\"emoji\":\"🛄\",\"category\":6,\"name\":\"baggage claim\",\"version\":\"1.0\"},{\"emoji\":\"🛅\",\"category\":6,\"name\":\"left luggage\",\"version\":\"1.0\"},{\"emoji\":\"⚠️\",\"category\":6,\"name\":\"warning\",\"version\":\"1.0\"},{\"emoji\":\"🚸\",\"category\":6,\"name\":\"children crossing\",\"version\":\"1.0\"},{\"emoji\":\"⛔\",\"category\":6,\"name\":\"no entry\",\"version\":\"1.0\"},{\"emoji\":\"🚫\",\"category\":6,\"name\":\"prohibited\",\"version\":\"1.0\"},{\"emoji\":\"🚳\",\"category\":6,\"name\":\"no bicycles\",\"version\":\"1.0\"},{\"emoji\":\"🚭\",\"category\":6,\"name\":\"no smoking\",\"version\":\"1.0\"},{\"emoji\":\"🚯\",\"category\":6,\"name\":\"no littering\",\"version\":\"1.0\"},{\"emoji\":\"🚱\",\"category\":6,\"name\":\"non-potable water\",\"version\":\"1.0\"},{\"emoji\":\"🚷\",\"category\":6,\"name\":\"no pedestrians\",\"version\":\"1.0\"},{\"emoji\":\"📵\",\"category\":6,\"name\":\"no mobile phones\",\"version\":\"1.0\"},{\"emoji\":\"🔞\",\"category\":6,\"name\":\"no one under eighteen\",\"version\":\"1.0\"},{\"emoji\":\"☢️\",\"category\":6,\"name\":\"radioactive\",\"version\":\"1.0\"},{\"emoji\":\"☣️\",\"category\":6,\"name\":\"biohazard\",\"version\":\"1.0\"},{\"emoji\":\"⬆️\",\"category\":6,\"name\":\"up arrow\",\"version\":\"1.0\"},{\"emoji\":\"↗️\",\"category\":6,\"name\":\"up-right arrow\",\"version\":\"1.0\"},{\"emoji\":\"➡️\",\"category\":6,\"name\":\"right arrow\",\"version\":\"1.0\"},{\"emoji\":\"↘️\",\"category\":6,\"name\":\"down-right arrow\",\"version\":\"1.0\"},{\"emoji\":\"⬇️\",\"category\":6,\"name\":\"down arrow\",\"version\":\"1.0\"},{\"emoji\":\"↙️\",\"category\":6,\"name\":\"down-left arrow\",\"version\":\"1.0\"},{\"emoji\":\"⬅️\",\"category\":6,\"name\":\"left arrow\",\"version\":\"1.0\"},{\"emoji\":\"↖️\",\"category\":6,\"name\":\"up-left arrow\",\"version\":\"1.0\"},{\"emoji\":\"↕️\",\"category\":6,\"name\":\"up-down arrow\",\"version\":\"1.0\"},{\"emoji\":\"↔️\",\"category\":6,\"name\":\"left-right arrow\",\"version\":\"1.0\"},{\"emoji\":\"↩️\",\"category\":6,\"name\":\"right arrow curving left\",\"version\":\"1.0\"},{\"emoji\":\"↪️\",\"category\":6,\"name\":\"left arrow curving right\",\"version\":\"1.0\"},{\"emoji\":\"⤴️\",\"category\":6,\"name\":\"right arrow curving up\",\"version\":\"1.0\"},{\"emoji\":\"⤵️\",\"category\":6,\"name\":\"right arrow curving down\",\"version\":\"1.0\"},{\"emoji\":\"🔃\",\"category\":6,\"name\":\"clockwise vertical arrows\",\"version\":\"1.0\"},{\"emoji\":\"🔄\",\"category\":6,\"name\":\"counterclockwise arrows button\",\"version\":\"1.0\"},{\"emoji\":\"🔙\",\"category\":6,\"name\":\"BACK arrow\",\"version\":\"1.0\"},{\"emoji\":\"🔚\",\"category\":6,\"name\":\"END arrow\",\"version\":\"1.0\"},{\"emoji\":\"🔛\",\"category\":6,\"name\":\"ON! arrow\",\"version\":\"1.0\"},{\"emoji\":\"🔜\",\"category\":6,\"name\":\"SOON arrow\",\"version\":\"1.0\"},{\"emoji\":\"🔝\",\"category\":6,\"name\":\"TOP arrow\",\"version\":\"1.0\"},{\"emoji\":\"🛐\",\"category\":6,\"name\":\"place of worship\",\"version\":\"1.0\"},{\"emoji\":\"⚛️\",\"category\":6,\"name\":\"atom symbol\",\"version\":\"1.0\"},{\"emoji\":\"🕉️\",\"category\":6,\"name\":\"om\",\"version\":\"1.0\"},{\"emoji\":\"✡️\",\"category\":6,\"name\":\"star of David\",\"version\":\"1.0\"},{\"emoji\":\"☸️\",\"category\":6,\"name\":\"wheel of dharma\",\"version\":\"1.0\"},{\"emoji\":\"☯️\",\"category\":6,\"name\":\"yin yang\",\"version\":\"1.0\"},{\"emoji\":\"✝️\",\"category\":6,\"name\":\"latin cross\",\"version\":\"1.0\"},{\"emoji\":\"☦️\",\"category\":6,\"name\":\"orthodox cross\",\"version\":\"1.0\"},{\"emoji\":\"☪️\",\"category\":6,\"name\":\"star and crescent\",\"version\":\"1.0\"},{\"emoji\":\"☮️\",\"category\":6,\"name\":\"peace symbol\",\"version\":\"1.0\"},{\"emoji\":\"🕎\",\"category\":6,\"name\":\"menorah\",\"version\":\"1.0\"},{\"emoji\":\"🔯\",\"category\":6,\"name\":\"dotted six-pointed star\",\"version\":\"1.0\"},{\"emoji\":\"♈\",\"category\":6,\"name\":\"Aries\",\"version\":\"1.0\"},{\"emoji\":\"♉\",\"category\":6,\"name\":\"Taurus\",\"version\":\"1.0\"},{\"emoji\":\"♊\",\"category\":6,\"name\":\"Gemini\",\"version\":\"1.0\"},{\"emoji\":\"♋\",\"category\":6,\"name\":\"Cancer\",\"version\":\"1.0\"},{\"emoji\":\"♌\",\"category\":6,\"name\":\"Leo\",\"version\":\"1.0\"},{\"emoji\":\"♍\",\"category\":6,\"name\":\"Virgo\",\"version\":\"1.0\"},{\"emoji\":\"♎\",\"category\":6,\"name\":\"Libra\",\"version\":\"1.0\"},{\"emoji\":\"♏\",\"category\":6,\"name\":\"Scorpio\",\"version\":\"1.0\"},{\"emoji\":\"♐\",\"category\":6,\"name\":\"Sagittarius\",\"version\":\"1.0\"},{\"emoji\":\"♑\",\"category\":6,\"name\":\"Capricorn\",\"version\":\"1.0\"},{\"emoji\":\"♒\",\"category\":6,\"name\":\"Aquarius\",\"version\":\"1.0\"},{\"emoji\":\"♓\",\"category\":6,\"name\":\"Pisces\",\"version\":\"1.0\"},{\"emoji\":\"⛎\",\"category\":6,\"name\":\"Ophiuchus\",\"version\":\"1.0\"},{\"emoji\":\"🔀\",\"category\":6,\"name\":\"shuffle tracks button\",\"version\":\"1.0\"},{\"emoji\":\"🔁\",\"category\":6,\"name\":\"repeat button\",\"version\":\"1.0\"},{\"emoji\":\"🔂\",\"category\":6,\"name\":\"repeat single button\",\"version\":\"1.0\"},{\"emoji\":\"▶️\",\"category\":6,\"name\":\"play button\",\"version\":\"1.0\"},{\"emoji\":\"⏩\",\"category\":6,\"name\":\"fast-forward button\",\"version\":\"1.0\"},{\"emoji\":\"⏭️\",\"category\":6,\"name\":\"next track button\",\"version\":\"1.0\"},{\"emoji\":\"⏯️\",\"category\":6,\"name\":\"play or pause button\",\"version\":\"1.0\"},{\"emoji\":\"◀️\",\"category\":6,\"name\":\"reverse button\",\"version\":\"1.0\"},{\"emoji\":\"⏪\",\"category\":6,\"name\":\"fast reverse button\",\"version\":\"1.0\"},{\"emoji\":\"⏮️\",\"category\":6,\"name\":\"last track button\",\"version\":\"1.0\"},{\"emoji\":\"🔼\",\"category\":6,\"name\":\"upwards button\",\"version\":\"1.0\"},{\"emoji\":\"⏫\",\"category\":6,\"name\":\"fast up button\",\"version\":\"1.0\"},{\"emoji\":\"🔽\",\"category\":6,\"name\":\"downwards button\",\"version\":\"1.0\"},{\"emoji\":\"⏬\",\"category\":6,\"name\":\"fast down button\",\"version\":\"1.0\"},{\"emoji\":\"⏸️\",\"category\":6,\"name\":\"pause button\",\"version\":\"1.0\"},{\"emoji\":\"⏹️\",\"category\":6,\"name\":\"stop button\",\"version\":\"1.0\"},{\"emoji\":\"⏺️\",\"category\":6,\"name\":\"record button\",\"version\":\"1.0\"},{\"emoji\":\"⏏️\",\"category\":6,\"name\":\"eject button\",\"version\":\"1.0\"},{\"emoji\":\"🎦\",\"category\":6,\"name\":\"cinema\",\"version\":\"1.0\"},{\"emoji\":\"🔅\",\"category\":6,\"name\":\"dim button\",\"version\":\"1.0\"},{\"emoji\":\"🔆\",\"category\":6,\"name\":\"bright button\",\"version\":\"1.0\"},{\"emoji\":\"📶\",\"category\":6,\"name\":\"antenna bars\",\"version\":\"1.0\"},{\"emoji\":\"📳\",\"category\":6,\"name\":\"vibration mode\",\"version\":\"1.0\"},{\"emoji\":\"📴\",\"category\":6,\"name\":\"mobile phone off\",\"version\":\"1.0\"},{\"emoji\":\"♀️\",\"category\":6,\"name\":\"female sign\",\"version\":\"4.0\"},{\"emoji\":\"♂️\",\"category\":6,\"name\":\"male sign\",\"version\":\"4.0\"},{\"emoji\":\"⚧️\",\"category\":6,\"name\":\"transgender symbol\",\"version\":\"13.0\"},{\"emoji\":\"✖️\",\"category\":6,\"name\":\"multiply\",\"version\":\"1.0\"},{\"emoji\":\"➕\",\"category\":6,\"name\":\"plus\",\"version\":\"1.0\"},{\"emoji\":\"➖\",\"category\":6,\"name\":\"minus\",\"version\":\"1.0\"},{\"emoji\":\"➗\",\"category\":6,\"name\":\"divide\",\"version\":\"1.0\"},{\"emoji\":\"♾️\",\"category\":6,\"name\":\"infinity\",\"version\":\"11.0\"},{\"emoji\":\"‼️\",\"category\":6,\"name\":\"double exclamation mark\",\"version\":\"1.0\"},{\"emoji\":\"⁉️\",\"category\":6,\"name\":\"exclamation question mark\",\"version\":\"1.0\"},{\"emoji\":\"❓\",\"category\":6,\"name\":\"question mark\",\"version\":\"1.0\"},{\"emoji\":\"❔\",\"category\":6,\"name\":\"white question mark\",\"version\":\"1.0\"},{\"emoji\":\"❕\",\"category\":6,\"name\":\"white exclamation mark\",\"version\":\"1.0\"},{\"emoji\":\"❗\",\"category\":6,\"name\":\"exclamation mark\",\"version\":\"1.0\"},{\"emoji\":\"〰️\",\"category\":6,\"name\":\"wavy dash\",\"version\":\"1.0\"},{\"emoji\":\"💱\",\"category\":6,\"name\":\"currency exchange\",\"version\":\"1.0\"},{\"emoji\":\"💲\",\"category\":6,\"name\":\"heavy dollar sign\",\"version\":\"1.0\"},{\"emoji\":\"⚕️\",\"category\":6,\"name\":\"medical symbol\",\"version\":\"4.0\"},{\"emoji\":\"♻️\",\"category\":6,\"name\":\"recycling symbol\",\"version\":\"1.0\"},{\"emoji\":\"⚜️\",\"category\":6,\"name\":\"fleur-de-lis\",\"version\":\"1.0\"},{\"emoji\":\"🔱\",\"category\":6,\"name\":\"trident emblem\",\"version\":\"1.0\"},{\"emoji\":\"📛\",\"category\":6,\"name\":\"name badge\",\"version\":\"1.0\"},{\"emoji\":\"🔰\",\"category\":6,\"name\":\"Japanese symbol for beginner\",\"version\":\"1.0\"},{\"emoji\":\"⭕\",\"category\":6,\"name\":\"hollow red circle\",\"version\":\"1.0\"},{\"emoji\":\"✅\",\"category\":6,\"name\":\"check mark button\",\"version\":\"1.0\"},{\"emoji\":\"☑️\",\"category\":6,\"name\":\"check box with check\",\"version\":\"1.0\"},{\"emoji\":\"✔️\",\"category\":6,\"name\":\"check mark\",\"version\":\"1.0\"},{\"emoji\":\"❌\",\"category\":6,\"name\":\"cross mark\",\"version\":\"1.0\"},{\"emoji\":\"❎\",\"category\":6,\"name\":\"cross mark button\",\"version\":\"1.0\"},{\"emoji\":\"➰\",\"category\":6,\"name\":\"curly loop\",\"version\":\"1.0\"},{\"emoji\":\"➿\",\"category\":6,\"name\":\"double curly loop\",\"version\":\"1.0\"},{\"emoji\":\"〽️\",\"category\":6,\"name\":\"part alternation mark\",\"version\":\"1.0\"},{\"emoji\":\"✳️\",\"category\":6,\"name\":\"eight-spoked asterisk\",\"version\":\"1.0\"},{\"emoji\":\"✴️\",\"category\":6,\"name\":\"eight-pointed star\",\"version\":\"1.0\"},{\"emoji\":\"❇️\",\"category\":6,\"name\":\"sparkle\",\"version\":\"1.0\"},{\"emoji\":\"©️\",\"category\":6,\"name\":\"copyright\",\"version\":\"1.0\"},{\"emoji\":\"®️\",\"category\":6,\"name\":\"registered\",\"version\":\"1.0\"},{\"emoji\":\"™️\",\"category\":6,\"name\":\"trade mark\",\"version\":\"1.0\"},{\"emoji\":\"#️⃣\",\"category\":6,\"name\":\"keycap: #\",\"version\":\"1.0\"},{\"emoji\":\"*️⃣\",\"category\":6,\"name\":\"keycap: *\",\"version\":\"2.0\"},{\"emoji\":\"0️⃣\",\"category\":6,\"name\":\"keycap: 0\",\"version\":\"1.0\"},{\"emoji\":\"1️⃣\",\"category\":6,\"name\":\"keycap: 1\",\"version\":\"1.0\"},{\"emoji\":\"2️⃣\",\"category\":6,\"name\":\"keycap: 2\",\"version\":\"1.0\"},{\"emoji\":\"3️⃣\",\"category\":6,\"name\":\"keycap: 3\",\"version\":\"1.0\"},{\"emoji\":\"4️⃣\",\"category\":6,\"name\":\"keycap: 4\",\"version\":\"1.0\"},{\"emoji\":\"5️⃣\",\"category\":6,\"name\":\"keycap: 5\",\"version\":\"1.0\"},{\"emoji\":\"6️⃣\",\"category\":6,\"name\":\"keycap: 6\",\"version\":\"1.0\"},{\"emoji\":\"7️⃣\",\"category\":6,\"name\":\"keycap: 7\",\"version\":\"1.0\"},{\"emoji\":\"8️⃣\",\"category\":6,\"name\":\"keycap: 8\",\"version\":\"1.0\"},{\"emoji\":\"9️⃣\",\"category\":6,\"name\":\"keycap: 9\",\"version\":\"1.0\"},{\"emoji\":\"🔟\",\"category\":6,\"name\":\"keycap: 10\",\"version\":\"1.0\"},{\"emoji\":\"🔠\",\"category\":6,\"name\":\"input latin uppercase\",\"version\":\"1.0\"},{\"emoji\":\"🔡\",\"category\":6,\"name\":\"input latin lowercase\",\"version\":\"1.0\"},{\"emoji\":\"🔢\",\"category\":6,\"name\":\"input numbers\",\"version\":\"1.0\"},{\"emoji\":\"🔣\",\"category\":6,\"name\":\"input symbols\",\"version\":\"1.0\"},{\"emoji\":\"🔤\",\"category\":6,\"name\":\"input latin letters\",\"version\":\"1.0\"},{\"emoji\":\"🅰️\",\"category\":6,\"name\":\"A button (blood type)\",\"version\":\"1.0\"},{\"emoji\":\"🆎\",\"category\":6,\"name\":\"AB button (blood type)\",\"version\":\"1.0\"},{\"emoji\":\"🅱️\",\"category\":6,\"name\":\"B button (blood type)\",\"version\":\"1.0\"},{\"emoji\":\"🆑\",\"category\":6,\"name\":\"CL button\",\"version\":\"1.0\"},{\"emoji\":\"🆒\",\"category\":6,\"name\":\"COOL button\",\"version\":\"1.0\"},{\"emoji\":\"🆓\",\"category\":6,\"name\":\"FREE button\",\"version\":\"1.0\"},{\"emoji\":\"ℹ️\",\"category\":6,\"name\":\"information\",\"version\":\"1.0\"},{\"emoji\":\"🆔\",\"category\":6,\"name\":\"ID button\",\"version\":\"1.0\"},{\"emoji\":\"Ⓜ️\",\"category\":6,\"name\":\"circled M\",\"version\":\"1.0\"},{\"emoji\":\"🆕\",\"category\":6,\"name\":\"NEW button\",\"version\":\"1.0\"},{\"emoji\":\"🆖\",\"category\":6,\"name\":\"NG button\",\"version\":\"1.0\"},{\"emoji\":\"🅾️\",\"category\":6,\"name\":\"O button (blood type)\",\"version\":\"1.0\"},{\"emoji\":\"🆗\",\"category\":6,\"name\":\"OK button\",\"version\":\"1.0\"},{\"emoji\":\"🅿️\",\"category\":6,\"name\":\"P button\",\"version\":\"1.0\"},{\"emoji\":\"🆘\",\"category\":6,\"name\":\"SOS button\",\"version\":\"1.0\"},{\"emoji\":\"🆙\",\"category\":6,\"name\":\"UP! button\",\"version\":\"1.0\"},{\"emoji\":\"🆚\",\"category\":6,\"name\":\"VS button\",\"version\":\"1.0\"},{\"emoji\":\"🈁\",\"category\":6,\"name\":\"Japanese “here” button\",\"version\":\"1.0\"},{\"emoji\":\"🈂️\",\"category\":6,\"name\":\"Japanese “service charge” button\",\"version\":\"1.0\"},{\"emoji\":\"🈷️\",\"category\":6,\"name\":\"Japanese “monthly amount” button\",\"version\":\"1.0\"},{\"emoji\":\"🈶\",\"category\":6,\"name\":\"Japanese “not free of charge” button\",\"version\":\"1.0\"},{\"emoji\":\"🈯\",\"category\":6,\"name\":\"Japanese “reserved” button\",\"version\":\"1.0\"},{\"emoji\":\"🉐\",\"category\":6,\"name\":\"Japanese “bargain” button\",\"version\":\"1.0\"},{\"emoji\":\"🈹\",\"category\":6,\"name\":\"Japanese “discount” button\",\"version\":\"1.0\"},{\"emoji\":\"🈚\",\"category\":6,\"name\":\"Japanese “free of charge” button\",\"version\":\"1.0\"},{\"emoji\":\"🈲\",\"category\":6,\"name\":\"Japanese “prohibited” button\",\"version\":\"1.0\"},{\"emoji\":\"🉑\",\"category\":6,\"name\":\"Japanese “acceptable” button\",\"version\":\"1.0\"},{\"emoji\":\"🈸\",\"category\":6,\"name\":\"Japanese “application” button\",\"version\":\"1.0\"},{\"emoji\":\"🈴\",\"category\":6,\"name\":\"Japanese “passing grade” button\",\"version\":\"1.0\"},{\"emoji\":\"🈳\",\"category\":6,\"name\":\"Japanese “vacancy” button\",\"version\":\"1.0\"},{\"emoji\":\"㊗️\",\"category\":6,\"name\":\"Japanese “congratulations” button\",\"version\":\"1.0\"},{\"emoji\":\"㊙️\",\"category\":6,\"name\":\"Japanese “secret” button\",\"version\":\"1.0\"},{\"emoji\":\"🈺\",\"category\":6,\"name\":\"Japanese “open for business” button\",\"version\":\"1.0\"},{\"emoji\":\"🈵\",\"category\":6,\"name\":\"Japanese “no vacancy” button\",\"version\":\"1.0\"},{\"emoji\":\"🔴\",\"category\":6,\"name\":\"red circle\",\"version\":\"1.0\"},{\"emoji\":\"🟠\",\"category\":6,\"name\":\"orange circle\",\"version\":\"12.0\"},{\"emoji\":\"🟡\",\"category\":6,\"name\":\"yellow circle\",\"version\":\"12.0\"},{\"emoji\":\"🟢\",\"category\":6,\"name\":\"green circle\",\"version\":\"12.0\"},{\"emoji\":\"🔵\",\"category\":6,\"name\":\"blue circle\",\"version\":\"1.0\"},{\"emoji\":\"🟣\",\"category\":6,\"name\":\"purple circle\",\"version\":\"12.0\"},{\"emoji\":\"🟤\",\"category\":6,\"name\":\"brown circle\",\"version\":\"12.0\"},{\"emoji\":\"⚫\",\"category\":6,\"name\":\"black circle\",\"version\":\"1.0\"},{\"emoji\":\"⚪\",\"category\":6,\"name\":\"white circle\",\"version\":\"1.0\"},{\"emoji\":\"🟥\",\"category\":6,\"name\":\"red square\",\"version\":\"12.0\"},{\"emoji\":\"🟧\",\"category\":6,\"name\":\"orange square\",\"version\":\"12.0\"},{\"emoji\":\"🟨\",\"category\":6,\"name\":\"yellow square\",\"version\":\"12.0\"},{\"emoji\":\"🟩\",\"category\":6,\"name\":\"green square\",\"version\":\"12.0\"},{\"emoji\":\"🟦\",\"category\":6,\"name\":\"blue square\",\"version\":\"12.0\"},{\"emoji\":\"🟪\",\"category\":6,\"name\":\"purple square\",\"version\":\"12.0\"},{\"emoji\":\"🟫\",\"category\":6,\"name\":\"brown square\",\"version\":\"12.0\"},{\"emoji\":\"⬛\",\"category\":6,\"name\":\"black large square\",\"version\":\"1.0\"},{\"emoji\":\"⬜\",\"category\":6,\"name\":\"white large square\",\"version\":\"1.0\"},{\"emoji\":\"◼️\",\"category\":6,\"name\":\"black medium square\",\"version\":\"1.0\"},{\"emoji\":\"◻️\",\"category\":6,\"name\":\"white medium square\",\"version\":\"1.0\"},{\"emoji\":\"◾\",\"category\":6,\"name\":\"black medium-small square\",\"version\":\"1.0\"},{\"emoji\":\"◽\",\"category\":6,\"name\":\"white medium-small square\",\"version\":\"1.0\"},{\"emoji\":\"▪️\",\"category\":6,\"name\":\"black small square\",\"version\":\"1.0\"},{\"emoji\":\"▫️\",\"category\":6,\"name\":\"white small square\",\"version\":\"1.0\"},{\"emoji\":\"🔶\",\"category\":6,\"name\":\"large orange diamond\",\"version\":\"1.0\"},{\"emoji\":\"🔷\",\"category\":6,\"name\":\"large blue diamond\",\"version\":\"1.0\"},{\"emoji\":\"🔸\",\"category\":6,\"name\":\"small orange diamond\",\"version\":\"1.0\"},{\"emoji\":\"🔹\",\"category\":6,\"name\":\"small blue diamond\",\"version\":\"1.0\"},{\"emoji\":\"🔺\",\"category\":6,\"name\":\"red triangle pointed up\",\"version\":\"1.0\"},{\"emoji\":\"🔻\",\"category\":6,\"name\":\"red triangle pointed down\",\"version\":\"1.0\"},{\"emoji\":\"💠\",\"category\":6,\"name\":\"diamond with a dot\",\"version\":\"1.0\"},{\"emoji\":\"🔘\",\"category\":6,\"name\":\"radio button\",\"version\":\"1.0\"},{\"emoji\":\"🔳\",\"category\":6,\"name\":\"white square button\",\"version\":\"1.0\"},{\"emoji\":\"🔲\",\"category\":6,\"name\":\"black square button\",\"version\":\"1.0\"},{\"emoji\":\"🏁\",\"category\":7,\"name\":\"chequered flag\",\"version\":\"1.0\"},{\"emoji\":\"🚩\",\"category\":7,\"name\":\"triangular flag\",\"version\":\"1.0\"},{\"emoji\":\"🎌\",\"category\":7,\"name\":\"crossed flags\",\"version\":\"1.0\"},{\"emoji\":\"🏴\",\"category\":7,\"name\":\"black flag\",\"version\":\"1.0\"},{\"emoji\":\"🏳️\",\"category\":7,\"name\":\"white flag\",\"version\":\"1.0\"},{\"emoji\":\"🏳️‍🌈\",\"category\":7,\"name\":\"rainbow flag\",\"version\":\"4.0\"},{\"emoji\":\"🏳️‍⚧️\",\"category\":7,\"name\":\"transgender flag\",\"version\":\"13.0\"},{\"emoji\":\"🏴‍☠️\",\"category\":7,\"name\":\"pirate flag\",\"version\":\"11.0\"},{\"emoji\":\"🇦🇨\",\"category\":7,\"name\":\"flag: Ascension Island\",\"version\":\"2.0\"},{\"emoji\":\"🇦🇩\",\"category\":7,\"name\":\"flag: Andorra\",\"version\":\"2.0\"},{\"emoji\":\"🇦🇪\",\"category\":7,\"name\":\"flag: United Arab Emirates\",\"version\":\"2.0\"},{\"emoji\":\"🇦🇫\",\"category\":7,\"name\":\"flag: Afghanistan\",\"version\":\"2.0\"},{\"emoji\":\"🇦🇬\",\"category\":7,\"name\":\"flag: Antigua & Barbuda\",\"version\":\"2.0\"},{\"emoji\":\"🇦🇮\",\"category\":7,\"name\":\"flag: Anguilla\",\"version\":\"2.0\"},{\"emoji\":\"🇦🇱\",\"category\":7,\"name\":\"flag: Albania\",\"version\":\"2.0\"},{\"emoji\":\"🇦🇲\",\"category\":7,\"name\":\"flag: Armenia\",\"version\":\"2.0\"},{\"emoji\":\"🇦🇴\",\"category\":7,\"name\":\"flag: Angola\",\"version\":\"2.0\"},{\"emoji\":\"🇦🇶\",\"category\":7,\"name\":\"flag: Antarctica\",\"version\":\"2.0\"},{\"emoji\":\"🇦🇷\",\"category\":7,\"name\":\"flag: Argentina\",\"version\":\"2.0\"},{\"emoji\":\"🇦🇸\",\"category\":7,\"name\":\"flag: American Samoa\",\"version\":\"2.0\"},{\"emoji\":\"🇦🇹\",\"category\":7,\"name\":\"flag: Austria\",\"version\":\"2.0\"},{\"emoji\":\"🇦🇺\",\"category\":7,\"name\":\"flag: Australia\",\"version\":\"2.0\"},{\"emoji\":\"🇦🇼\",\"category\":7,\"name\":\"flag: Aruba\",\"version\":\"2.0\"},{\"emoji\":\"🇦🇽\",\"category\":7,\"name\":\"flag: Åland Islands\",\"version\":\"2.0\"},{\"emoji\":\"🇦🇿\",\"category\":7,\"name\":\"flag: Azerbaijan\",\"version\":\"2.0\"},{\"emoji\":\"🇧🇦\",\"category\":7,\"name\":\"flag: Bosnia & Herzegovina\",\"version\":\"2.0\"},{\"emoji\":\"🇧🇧\",\"category\":7,\"name\":\"flag: Barbados\",\"version\":\"2.0\"},{\"emoji\":\"🇧🇩\",\"category\":7,\"name\":\"flag: Bangladesh\",\"version\":\"2.0\"},{\"emoji\":\"🇧🇪\",\"category\":7,\"name\":\"flag: Belgium\",\"version\":\"2.0\"},{\"emoji\":\"🇧🇫\",\"category\":7,\"name\":\"flag: Burkina Faso\",\"version\":\"2.0\"},{\"emoji\":\"🇧🇬\",\"category\":7,\"name\":\"flag: Bulgaria\",\"version\":\"2.0\"},{\"emoji\":\"🇧🇭\",\"category\":7,\"name\":\"flag: Bahrain\",\"version\":\"2.0\"},{\"emoji\":\"🇧🇮\",\"category\":7,\"name\":\"flag: Burundi\",\"version\":\"2.0\"},{\"emoji\":\"🇧🇯\",\"category\":7,\"name\":\"flag: Benin\",\"version\":\"2.0\"},{\"emoji\":\"🇧🇱\",\"category\":7,\"name\":\"flag: St. Barthélemy\",\"version\":\"2.0\"},{\"emoji\":\"🇧🇲\",\"category\":7,\"name\":\"flag: Bermuda\",\"version\":\"2.0\"},{\"emoji\":\"🇧🇳\",\"category\":7,\"name\":\"flag: Brunei\",\"version\":\"2.0\"},{\"emoji\":\"🇧🇴\",\"category\":7,\"name\":\"flag: Bolivia\",\"version\":\"2.0\"},{\"emoji\":\"🇧🇶\",\"category\":7,\"name\":\"flag: Caribbean Netherlands\",\"version\":\"2.0\"},{\"emoji\":\"🇧🇷\",\"category\":7,\"name\":\"flag: Brazil\",\"version\":\"2.0\"},{\"emoji\":\"🇧🇸\",\"category\":7,\"name\":\"flag: Bahamas\",\"version\":\"2.0\"},{\"emoji\":\"🇧🇹\",\"category\":7,\"name\":\"flag: Bhutan\",\"version\":\"2.0\"},{\"emoji\":\"🇧🇻\",\"category\":7,\"name\":\"flag: Bouvet Island\",\"version\":\"2.0\"},{\"emoji\":\"🇧🇼\",\"category\":7,\"name\":\"flag: Botswana\",\"version\":\"2.0\"},{\"emoji\":\"🇧🇾\",\"category\":7,\"name\":\"flag: Belarus\",\"version\":\"2.0\"},{\"emoji\":\"🇧🇿\",\"category\":7,\"name\":\"flag: Belize\",\"version\":\"2.0\"},{\"emoji\":\"🇨🇦\",\"category\":7,\"name\":\"flag: Canada\",\"version\":\"2.0\"},{\"emoji\":\"🇨🇨\",\"category\":7,\"name\":\"flag: Cocos (Keeling) Islands\",\"version\":\"2.0\"},{\"emoji\":\"🇨🇩\",\"category\":7,\"name\":\"flag: Congo - Kinshasa\",\"version\":\"2.0\"},{\"emoji\":\"🇨🇫\",\"category\":7,\"name\":\"flag: Central African Republic\",\"version\":\"2.0\"},{\"emoji\":\"🇨🇬\",\"category\":7,\"name\":\"flag: Congo - Brazzaville\",\"version\":\"2.0\"},{\"emoji\":\"🇨🇭\",\"category\":7,\"name\":\"flag: Switzerland\",\"version\":\"2.0\"},{\"emoji\":\"🇨🇮\",\"category\":7,\"name\":\"flag: Côte d’Ivoire\",\"version\":\"2.0\"},{\"emoji\":\"🇨🇰\",\"category\":7,\"name\":\"flag: Cook Islands\",\"version\":\"2.0\"},{\"emoji\":\"🇨🇱\",\"category\":7,\"name\":\"flag: Chile\",\"version\":\"2.0\"},{\"emoji\":\"🇨🇲\",\"category\":7,\"name\":\"flag: Cameroon\",\"version\":\"2.0\"},{\"emoji\":\"🇨🇳\",\"category\":7,\"name\":\"flag: China\",\"version\":\"1.0\"},{\"emoji\":\"🇨🇴\",\"category\":7,\"name\":\"flag: Colombia\",\"version\":\"2.0\"},{\"emoji\":\"🇨🇵\",\"category\":7,\"name\":\"flag: Clipperton Island\",\"version\":\"2.0\"},{\"emoji\":\"🇨🇷\",\"category\":7,\"name\":\"flag: Costa Rica\",\"version\":\"2.0\"},{\"emoji\":\"🇨🇺\",\"category\":7,\"name\":\"flag: Cuba\",\"version\":\"2.0\"},{\"emoji\":\"🇨🇻\",\"category\":7,\"name\":\"flag: Cape Verde\",\"version\":\"2.0\"},{\"emoji\":\"🇨🇼\",\"category\":7,\"name\":\"flag: Curaçao\",\"version\":\"2.0\"},{\"emoji\":\"🇨🇽\",\"category\":7,\"name\":\"flag: Christmas Island\",\"version\":\"2.0\"},{\"emoji\":\"🇨🇾\",\"category\":7,\"name\":\"flag: Cyprus\",\"version\":\"2.0\"},{\"emoji\":\"🇨🇿\",\"category\":7,\"name\":\"flag: Czechia\",\"version\":\"2.0\"},{\"emoji\":\"🇩🇪\",\"category\":7,\"name\":\"flag: Germany\",\"version\":\"1.0\"},{\"emoji\":\"🇩🇬\",\"category\":7,\"name\":\"flag: Diego Garcia\",\"version\":\"2.0\"},{\"emoji\":\"🇩🇯\",\"category\":7,\"name\":\"flag: Djibouti\",\"version\":\"2.0\"},{\"emoji\":\"🇩🇰\",\"category\":7,\"name\":\"flag: Denmark\",\"version\":\"2.0\"},{\"emoji\":\"🇩🇲\",\"category\":7,\"name\":\"flag: Dominica\",\"version\":\"2.0\"},{\"emoji\":\"🇩🇴\",\"category\":7,\"name\":\"flag: Dominican Republic\",\"version\":\"2.0\"},{\"emoji\":\"🇩🇿\",\"category\":7,\"name\":\"flag: Algeria\",\"version\":\"2.0\"},{\"emoji\":\"🇪🇦\",\"category\":7,\"name\":\"flag: Ceuta & Melilla\",\"version\":\"2.0\"},{\"emoji\":\"🇪🇨\",\"category\":7,\"name\":\"flag: Ecuador\",\"version\":\"2.0\"},{\"emoji\":\"🇪🇪\",\"category\":7,\"name\":\"flag: Estonia\",\"version\":\"2.0\"},{\"emoji\":\"🇪🇬\",\"category\":7,\"name\":\"flag: Egypt\",\"version\":\"2.0\"},{\"emoji\":\"🇪🇭\",\"category\":7,\"name\":\"flag: Western Sahara\",\"version\":\"2.0\"},{\"emoji\":\"🇪🇷\",\"category\":7,\"name\":\"flag: Eritrea\",\"version\":\"2.0\"},{\"emoji\":\"🇪🇸\",\"category\":7,\"name\":\"flag: Spain\",\"version\":\"1.0\"},{\"emoji\":\"🇪🇹\",\"category\":7,\"name\":\"flag: Ethiopia\",\"version\":\"2.0\"},{\"emoji\":\"🇪🇺\",\"category\":7,\"name\":\"flag: European Union\",\"version\":\"2.0\"},{\"emoji\":\"🇫🇮\",\"category\":7,\"name\":\"flag: Finland\",\"version\":\"2.0\"},{\"emoji\":\"🇫🇯\",\"category\":7,\"name\":\"flag: Fiji\",\"version\":\"2.0\"},{\"emoji\":\"🇫🇰\",\"category\":7,\"name\":\"flag: Falkland Islands\",\"version\":\"2.0\"},{\"emoji\":\"🇫🇲\",\"category\":7,\"name\":\"flag: Micronesia\",\"version\":\"2.0\"},{\"emoji\":\"🇫🇴\",\"category\":7,\"name\":\"flag: Faroe Islands\",\"version\":\"2.0\"},{\"emoji\":\"🇫🇷\",\"category\":7,\"name\":\"flag: France\",\"version\":\"1.0\"},{\"emoji\":\"🇬🇦\",\"category\":7,\"name\":\"flag: Gabon\",\"version\":\"2.0\"},{\"emoji\":\"🇬🇧\",\"category\":7,\"name\":\"flag: United Kingdom\",\"version\":\"1.0\"},{\"emoji\":\"🇬🇩\",\"category\":7,\"name\":\"flag: Grenada\",\"version\":\"2.0\"},{\"emoji\":\"🇬🇪\",\"category\":7,\"name\":\"flag: Georgia\",\"version\":\"2.0\"},{\"emoji\":\"🇬🇫\",\"category\":7,\"name\":\"flag: French Guiana\",\"version\":\"2.0\"},{\"emoji\":\"🇬🇬\",\"category\":7,\"name\":\"flag: Guernsey\",\"version\":\"2.0\"},{\"emoji\":\"🇬🇭\",\"category\":7,\"name\":\"flag: Ghana\",\"version\":\"2.0\"},{\"emoji\":\"🇬🇮\",\"category\":7,\"name\":\"flag: Gibraltar\",\"version\":\"2.0\"},{\"emoji\":\"🇬🇱\",\"category\":7,\"name\":\"flag: Greenland\",\"version\":\"2.0\"},{\"emoji\":\"🇬🇲\",\"category\":7,\"name\":\"flag: Gambia\",\"version\":\"2.0\"},{\"emoji\":\"🇬🇳\",\"category\":7,\"name\":\"flag: Guinea\",\"version\":\"2.0\"},{\"emoji\":\"🇬🇵\",\"category\":7,\"name\":\"flag: Guadeloupe\",\"version\":\"2.0\"},{\"emoji\":\"🇬🇶\",\"category\":7,\"name\":\"flag: Equatorial Guinea\",\"version\":\"2.0\"},{\"emoji\":\"🇬🇷\",\"category\":7,\"name\":\"flag: Greece\",\"version\":\"2.0\"},{\"emoji\":\"🇬🇸\",\"category\":7,\"name\":\"flag: South Georgia & South Sandwich Islands\",\"version\":\"2.0\"},{\"emoji\":\"🇬🇹\",\"category\":7,\"name\":\"flag: Guatemala\",\"version\":\"2.0\"},{\"emoji\":\"🇬🇺\",\"category\":7,\"name\":\"flag: Guam\",\"version\":\"2.0\"},{\"emoji\":\"🇬🇼\",\"category\":7,\"name\":\"flag: Guinea-Bissau\",\"version\":\"2.0\"},{\"emoji\":\"🇬🇾\",\"category\":7,\"name\":\"flag: Guyana\",\"version\":\"2.0\"},{\"emoji\":\"🇭🇰\",\"category\":7,\"name\":\"flag: Hong Kong SAR China\",\"version\":\"2.0\"},{\"emoji\":\"🇭🇲\",\"category\":7,\"name\":\"flag: Heard & McDonald Islands\",\"version\":\"2.0\"},{\"emoji\":\"🇭🇳\",\"category\":7,\"name\":\"flag: Honduras\",\"version\":\"2.0\"},{\"emoji\":\"🇭🇷\",\"category\":7,\"name\":\"flag: Croatia\",\"version\":\"2.0\"},{\"emoji\":\"🇭🇹\",\"category\":7,\"name\":\"flag: Haiti\",\"version\":\"2.0\"},{\"emoji\":\"🇭🇺\",\"category\":7,\"name\":\"flag: Hungary\",\"version\":\"2.0\"},{\"emoji\":\"🇮🇨\",\"category\":7,\"name\":\"flag: Canary Islands\",\"version\":\"2.0\"},{\"emoji\":\"🇮🇩\",\"category\":7,\"name\":\"flag: Indonesia\",\"version\":\"2.0\"},{\"emoji\":\"🇮🇪\",\"category\":7,\"name\":\"flag: Ireland\",\"version\":\"2.0\"},{\"emoji\":\"🇮🇱\",\"category\":7,\"name\":\"flag: Israel\",\"version\":\"2.0\"},{\"emoji\":\"🇮🇲\",\"category\":7,\"name\":\"flag: Isle of Man\",\"version\":\"2.0\"},{\"emoji\":\"🇮🇳\",\"category\":7,\"name\":\"flag: India\",\"version\":\"2.0\"},{\"emoji\":\"🇮🇴\",\"category\":7,\"name\":\"flag: British Indian Ocean Territory\",\"version\":\"2.0\"},{\"emoji\":\"🇮🇶\",\"category\":7,\"name\":\"flag: Iraq\",\"version\":\"2.0\"},{\"emoji\":\"🇮🇷\",\"category\":7,\"name\":\"flag: Iran\",\"version\":\"2.0\"},{\"emoji\":\"🇮🇸\",\"category\":7,\"name\":\"flag: Iceland\",\"version\":\"2.0\"},{\"emoji\":\"🇮🇹\",\"category\":7,\"name\":\"flag: Italy\",\"version\":\"1.0\"},{\"emoji\":\"🇯🇪\",\"category\":7,\"name\":\"flag: Jersey\",\"version\":\"2.0\"},{\"emoji\":\"🇯🇲\",\"category\":7,\"name\":\"flag: Jamaica\",\"version\":\"2.0\"},{\"emoji\":\"🇯🇴\",\"category\":7,\"name\":\"flag: Jordan\",\"version\":\"2.0\"},{\"emoji\":\"🇯🇵\",\"category\":7,\"name\":\"flag: Japan\",\"version\":\"1.0\"},{\"emoji\":\"🇰🇪\",\"category\":7,\"name\":\"flag: Kenya\",\"version\":\"2.0\"},{\"emoji\":\"🇰🇬\",\"category\":7,\"name\":\"flag: Kyrgyzstan\",\"version\":\"2.0\"},{\"emoji\":\"🇰🇭\",\"category\":7,\"name\":\"flag: Cambodia\",\"version\":\"2.0\"},{\"emoji\":\"🇰🇮\",\"category\":7,\"name\":\"flag: Kiribati\",\"version\":\"2.0\"},{\"emoji\":\"🇰🇲\",\"category\":7,\"name\":\"flag: Comoros\",\"version\":\"2.0\"},{\"emoji\":\"🇰🇳\",\"category\":7,\"name\":\"flag: St. Kitts & Nevis\",\"version\":\"2.0\"},{\"emoji\":\"🇰🇵\",\"category\":7,\"name\":\"flag: North Korea\",\"version\":\"2.0\"},{\"emoji\":\"🇰🇷\",\"category\":7,\"name\":\"flag: South Korea\",\"version\":\"1.0\"},{\"emoji\":\"🇰🇼\",\"category\":7,\"name\":\"flag: Kuwait\",\"version\":\"2.0\"},{\"emoji\":\"🇰🇾\",\"category\":7,\"name\":\"flag: Cayman Islands\",\"version\":\"2.0\"},{\"emoji\":\"🇰🇿\",\"category\":7,\"name\":\"flag: Kazakhstan\",\"version\":\"2.0\"},{\"emoji\":\"🇱🇦\",\"category\":7,\"name\":\"flag: Laos\",\"version\":\"2.0\"},{\"emoji\":\"🇱🇧\",\"category\":7,\"name\":\"flag: Lebanon\",\"version\":\"2.0\"},{\"emoji\":\"🇱🇨\",\"category\":7,\"name\":\"flag: St. Lucia\",\"version\":\"2.0\"},{\"emoji\":\"🇱🇮\",\"category\":7,\"name\":\"flag: Liechtenstein\",\"version\":\"2.0\"},{\"emoji\":\"🇱🇰\",\"category\":7,\"name\":\"flag: Sri Lanka\",\"version\":\"2.0\"},{\"emoji\":\"🇱🇷\",\"category\":7,\"name\":\"flag: Liberia\",\"version\":\"2.0\"},{\"emoji\":\"🇱🇸\",\"category\":7,\"name\":\"flag: Lesotho\",\"version\":\"2.0\"},{\"emoji\":\"🇱🇹\",\"category\":7,\"name\":\"flag: Lithuania\",\"version\":\"2.0\"},{\"emoji\":\"🇱🇺\",\"category\":7,\"name\":\"flag: Luxembourg\",\"version\":\"2.0\"},{\"emoji\":\"🇱🇻\",\"category\":7,\"name\":\"flag: Latvia\",\"version\":\"2.0\"},{\"emoji\":\"🇱🇾\",\"category\":7,\"name\":\"flag: Libya\",\"version\":\"2.0\"},{\"emoji\":\"🇲🇦\",\"category\":7,\"name\":\"flag: Morocco\",\"version\":\"2.0\"},{\"emoji\":\"🇲🇨\",\"category\":7,\"name\":\"flag: Monaco\",\"version\":\"2.0\"},{\"emoji\":\"🇲🇩\",\"category\":7,\"name\":\"flag: Moldova\",\"version\":\"2.0\"},{\"emoji\":\"🇲🇪\",\"category\":7,\"name\":\"flag: Montenegro\",\"version\":\"2.0\"},{\"emoji\":\"🇲🇫\",\"category\":7,\"name\":\"flag: St. Martin\",\"version\":\"2.0\"},{\"emoji\":\"🇲🇬\",\"category\":7,\"name\":\"flag: Madagascar\",\"version\":\"2.0\"},{\"emoji\":\"🇲🇭\",\"category\":7,\"name\":\"flag: Marshall Islands\",\"version\":\"2.0\"},{\"emoji\":\"🇲🇰\",\"category\":7,\"name\":\"flag: North Macedonia\",\"version\":\"2.0\"},{\"emoji\":\"🇲🇱\",\"category\":7,\"name\":\"flag: Mali\",\"version\":\"2.0\"},{\"emoji\":\"🇲🇲\",\"category\":7,\"name\":\"flag: Myanmar (Burma)\",\"version\":\"2.0\"},{\"emoji\":\"🇲🇳\",\"category\":7,\"name\":\"flag: Mongolia\",\"version\":\"2.0\"},{\"emoji\":\"🇲🇴\",\"category\":7,\"name\":\"flag: Macao SAR China\",\"version\":\"2.0\"},{\"emoji\":\"🇲🇵\",\"category\":7,\"name\":\"flag: Northern Mariana Islands\",\"version\":\"2.0\"},{\"emoji\":\"🇲🇶\",\"category\":7,\"name\":\"flag: Martinique\",\"version\":\"2.0\"},{\"emoji\":\"🇲🇷\",\"category\":7,\"name\":\"flag: Mauritania\",\"version\":\"2.0\"},{\"emoji\":\"🇲🇸\",\"category\":7,\"name\":\"flag: Montserrat\",\"version\":\"2.0\"},{\"emoji\":\"🇲🇹\",\"category\":7,\"name\":\"flag: Malta\",\"version\":\"2.0\"},{\"emoji\":\"🇲🇺\",\"category\":7,\"name\":\"flag: Mauritius\",\"version\":\"2.0\"},{\"emoji\":\"🇲🇻\",\"category\":7,\"name\":\"flag: Maldives\",\"version\":\"2.0\"},{\"emoji\":\"🇲🇼\",\"category\":7,\"name\":\"flag: Malawi\",\"version\":\"2.0\"},{\"emoji\":\"🇲🇽\",\"category\":7,\"name\":\"flag: Mexico\",\"version\":\"2.0\"},{\"emoji\":\"🇲🇾\",\"category\":7,\"name\":\"flag: Malaysia\",\"version\":\"2.0\"},{\"emoji\":\"🇲🇿\",\"category\":7,\"name\":\"flag: Mozambique\",\"version\":\"2.0\"},{\"emoji\":\"🇳🇦\",\"category\":7,\"name\":\"flag: Namibia\",\"version\":\"2.0\"},{\"emoji\":\"🇳🇨\",\"category\":7,\"name\":\"flag: New Caledonia\",\"version\":\"2.0\"},{\"emoji\":\"🇳🇪\",\"category\":7,\"name\":\"flag: Niger\",\"version\":\"2.0\"},{\"emoji\":\"🇳🇫\",\"category\":7,\"name\":\"flag: Norfolk Island\",\"version\":\"2.0\"},{\"emoji\":\"🇳🇬\",\"category\":7,\"name\":\"flag: Nigeria\",\"version\":\"2.0\"},{\"emoji\":\"🇳🇮\",\"category\":7,\"name\":\"flag: Nicaragua\",\"version\":\"2.0\"},{\"emoji\":\"🇳🇱\",\"category\":7,\"name\":\"flag: Netherlands\",\"version\":\"2.0\"},{\"emoji\":\"🇳🇴\",\"category\":7,\"name\":\"flag: Norway\",\"version\":\"2.0\"},{\"emoji\":\"🇳🇵\",\"category\":7,\"name\":\"flag: Nepal\",\"version\":\"2.0\"},{\"emoji\":\"🇳🇷\",\"category\":7,\"name\":\"flag: Nauru\",\"version\":\"2.0\"},{\"emoji\":\"🇳🇺\",\"category\":7,\"name\":\"flag: Niue\",\"version\":\"2.0\"},{\"emoji\":\"🇳🇿\",\"category\":7,\"name\":\"flag: New Zealand\",\"version\":\"2.0\"},{\"emoji\":\"🇴🇲\",\"category\":7,\"name\":\"flag: Oman\",\"version\":\"2.0\"},{\"emoji\":\"🇵🇦\",\"category\":7,\"name\":\"flag: Panama\",\"version\":\"2.0\"},{\"emoji\":\"🇵🇪\",\"category\":7,\"name\":\"flag: Peru\",\"version\":\"2.0\"},{\"emoji\":\"🇵🇫\",\"category\":7,\"name\":\"flag: French Polynesia\",\"version\":\"2.0\"},{\"emoji\":\"🇵🇬\",\"category\":7,\"name\":\"flag: Papua New Guinea\",\"version\":\"2.0\"},{\"emoji\":\"🇵🇭\",\"category\":7,\"name\":\"flag: Philippines\",\"version\":\"2.0\"},{\"emoji\":\"🇵🇰\",\"category\":7,\"name\":\"flag: Pakistan\",\"version\":\"2.0\"},{\"emoji\":\"🇵🇱\",\"category\":7,\"name\":\"flag: Poland\",\"version\":\"2.0\"},{\"emoji\":\"🇵🇲\",\"category\":7,\"name\":\"flag: St. Pierre & Miquelon\",\"version\":\"2.0\"},{\"emoji\":\"🇵🇳\",\"category\":7,\"name\":\"flag: Pitcairn Islands\",\"version\":\"2.0\"},{\"emoji\":\"🇵🇷\",\"category\":7,\"name\":\"flag: Puerto Rico\",\"version\":\"2.0\"},{\"emoji\":\"🇵🇸\",\"category\":7,\"name\":\"flag: Palestinian Territories\",\"version\":\"2.0\"},{\"emoji\":\"🇵🇹\",\"category\":7,\"name\":\"flag: Portugal\",\"version\":\"2.0\"},{\"emoji\":\"🇵🇼\",\"category\":7,\"name\":\"flag: Palau\",\"version\":\"2.0\"},{\"emoji\":\"🇵🇾\",\"category\":7,\"name\":\"flag: Paraguay\",\"version\":\"2.0\"},{\"emoji\":\"🇶🇦\",\"category\":7,\"name\":\"flag: Qatar\",\"version\":\"2.0\"},{\"emoji\":\"🇷🇪\",\"category\":7,\"name\":\"flag: Réunion\",\"version\":\"2.0\"},{\"emoji\":\"🇷🇴\",\"category\":7,\"name\":\"flag: Romania\",\"version\":\"2.0\"},{\"emoji\":\"🇷🇸\",\"category\":7,\"name\":\"flag: Serbia\",\"version\":\"2.0\"},{\"emoji\":\"🇷🇺\",\"category\":7,\"name\":\"flag: Russia\",\"version\":\"1.0\"},{\"emoji\":\"🇷🇼\",\"category\":7,\"name\":\"flag: Rwanda\",\"version\":\"2.0\"},{\"emoji\":\"🇸🇦\",\"category\":7,\"name\":\"flag: Saudi Arabia\",\"version\":\"2.0\"},{\"emoji\":\"🇸🇧\",\"category\":7,\"name\":\"flag: Solomon Islands\",\"version\":\"2.0\"},{\"emoji\":\"🇸🇨\",\"category\":7,\"name\":\"flag: Seychelles\",\"version\":\"2.0\"},{\"emoji\":\"🇸🇩\",\"category\":7,\"name\":\"flag: Sudan\",\"version\":\"2.0\"},{\"emoji\":\"🇸🇪\",\"category\":7,\"name\":\"flag: Sweden\",\"version\":\"2.0\"},{\"emoji\":\"🇸🇬\",\"category\":7,\"name\":\"flag: Singapore\",\"version\":\"2.0\"},{\"emoji\":\"🇸🇭\",\"category\":7,\"name\":\"flag: St. Helena\",\"version\":\"2.0\"},{\"emoji\":\"🇸🇮\",\"category\":7,\"name\":\"flag: Slovenia\",\"version\":\"2.0\"},{\"emoji\":\"🇸🇯\",\"category\":7,\"name\":\"flag: Svalbard & Jan Mayen\",\"version\":\"2.0\"},{\"emoji\":\"🇸🇰\",\"category\":7,\"name\":\"flag: Slovakia\",\"version\":\"2.0\"},{\"emoji\":\"🇸🇱\",\"category\":7,\"name\":\"flag: Sierra Leone\",\"version\":\"2.0\"},{\"emoji\":\"🇸🇲\",\"category\":7,\"name\":\"flag: San Marino\",\"version\":\"2.0\"},{\"emoji\":\"🇸🇳\",\"category\":7,\"name\":\"flag: Senegal\",\"version\":\"2.0\"},{\"emoji\":\"🇸🇴\",\"category\":7,\"name\":\"flag: Somalia\",\"version\":\"2.0\"},{\"emoji\":\"🇸🇷\",\"category\":7,\"name\":\"flag: Suriname\",\"version\":\"2.0\"},{\"emoji\":\"🇸🇸\",\"category\":7,\"name\":\"flag: South Sudan\",\"version\":\"2.0\"},{\"emoji\":\"🇸🇹\",\"category\":7,\"name\":\"flag: São Tomé & Príncipe\",\"version\":\"2.0\"},{\"emoji\":\"🇸🇻\",\"category\":7,\"name\":\"flag: El Salvador\",\"version\":\"2.0\"},{\"emoji\":\"🇸🇽\",\"category\":7,\"name\":\"flag: Sint Maarten\",\"version\":\"2.0\"},{\"emoji\":\"🇸🇾\",\"category\":7,\"name\":\"flag: Syria\",\"version\":\"2.0\"},{\"emoji\":\"🇸🇿\",\"category\":7,\"name\":\"flag: Eswatini\",\"version\":\"2.0\"},{\"emoji\":\"🇹🇦\",\"category\":7,\"name\":\"flag: Tristan da Cunha\",\"version\":\"2.0\"},{\"emoji\":\"🇹🇨\",\"category\":7,\"name\":\"flag: Turks & Caicos Islands\",\"version\":\"2.0\"},{\"emoji\":\"🇹🇩\",\"category\":7,\"name\":\"flag: Chad\",\"version\":\"2.0\"},{\"emoji\":\"🇹🇫\",\"category\":7,\"name\":\"flag: French Southern Territories\",\"version\":\"2.0\"},{\"emoji\":\"🇹🇬\",\"category\":7,\"name\":\"flag: Togo\",\"version\":\"2.0\"},{\"emoji\":\"🇹🇭\",\"category\":7,\"name\":\"flag: Thailand\",\"version\":\"2.0\"},{\"emoji\":\"🇹🇯\",\"category\":7,\"name\":\"flag: Tajikistan\",\"version\":\"2.0\"},{\"emoji\":\"🇹🇰\",\"category\":7,\"name\":\"flag: Tokelau\",\"version\":\"2.0\"},{\"emoji\":\"🇹🇱\",\"category\":7,\"name\":\"flag: Timor-Leste\",\"version\":\"2.0\"},{\"emoji\":\"🇹🇲\",\"category\":7,\"name\":\"flag: Turkmenistan\",\"version\":\"2.0\"},{\"emoji\":\"🇹🇳\",\"category\":7,\"name\":\"flag: Tunisia\",\"version\":\"2.0\"},{\"emoji\":\"🇹🇴\",\"category\":7,\"name\":\"flag: Tonga\",\"version\":\"2.0\"},{\"emoji\":\"🇹🇷\",\"category\":7,\"name\":\"flag: Turkey\",\"version\":\"2.0\"},{\"emoji\":\"🇹🇹\",\"category\":7,\"name\":\"flag: Trinidad & Tobago\",\"version\":\"2.0\"},{\"emoji\":\"🇹🇻\",\"category\":7,\"name\":\"flag: Tuvalu\",\"version\":\"2.0\"},{\"emoji\":\"🇹🇼\",\"category\":7,\"name\":\"flag: Taiwan\",\"version\":\"2.0\"},{\"emoji\":\"🇹🇿\",\"category\":7,\"name\":\"flag: Tanzania\",\"version\":\"2.0\"},{\"emoji\":\"🇺🇦\",\"category\":7,\"name\":\"flag: Ukraine\",\"version\":\"2.0\"},{\"emoji\":\"🇺🇬\",\"category\":7,\"name\":\"flag: Uganda\",\"version\":\"2.0\"},{\"emoji\":\"🇺🇲\",\"category\":7,\"name\":\"flag: U.S. Outlying Islands\",\"version\":\"2.0\"},{\"emoji\":\"🇺🇳\",\"category\":7,\"name\":\"flag: United Nations\",\"version\":\"4.0\"},{\"emoji\":\"🇺🇸\",\"category\":7,\"name\":\"flag: United States\",\"version\":\"1.0\"},{\"emoji\":\"🇺🇾\",\"category\":7,\"name\":\"flag: Uruguay\",\"version\":\"2.0\"},{\"emoji\":\"🇺🇿\",\"category\":7,\"name\":\"flag: Uzbekistan\",\"version\":\"2.0\"},{\"emoji\":\"🇻🇦\",\"category\":7,\"name\":\"flag: Vatican City\",\"version\":\"2.0\"},{\"emoji\":\"🇻🇨\",\"category\":7,\"name\":\"flag: St. Vincent & Grenadines\",\"version\":\"2.0\"},{\"emoji\":\"🇻🇪\",\"category\":7,\"name\":\"flag: Venezuela\",\"version\":\"2.0\"},{\"emoji\":\"🇻🇬\",\"category\":7,\"name\":\"flag: British Virgin Islands\",\"version\":\"2.0\"},{\"emoji\":\"🇻🇮\",\"category\":7,\"name\":\"flag: U.S. Virgin Islands\",\"version\":\"2.0\"},{\"emoji\":\"🇻🇳\",\"category\":7,\"name\":\"flag: Vietnam\",\"version\":\"2.0\"},{\"emoji\":\"🇻🇺\",\"category\":7,\"name\":\"flag: Vanuatu\",\"version\":\"2.0\"},{\"emoji\":\"🇼🇫\",\"category\":7,\"name\":\"flag: Wallis & Futuna\",\"version\":\"2.0\"},{\"emoji\":\"🇼🇸\",\"category\":7,\"name\":\"flag: Samoa\",\"version\":\"2.0\"},{\"emoji\":\"🇽🇰\",\"category\":7,\"name\":\"flag: Kosovo\",\"version\":\"2.0\"},{\"emoji\":\"🇾🇪\",\"category\":7,\"name\":\"flag: Yemen\",\"version\":\"2.0\"},{\"emoji\":\"🇾🇹\",\"category\":7,\"name\":\"flag: Mayotte\",\"version\":\"2.0\"},{\"emoji\":\"🇿🇦\",\"category\":7,\"name\":\"flag: South Africa\",\"version\":\"2.0\"},{\"emoji\":\"🇿🇲\",\"category\":7,\"name\":\"flag: Zambia\",\"version\":\"2.0\"},{\"emoji\":\"🇿🇼\",\"category\":7,\"name\":\"flag: Zimbabwe\",\"version\":\"2.0\"},{\"emoji\":\"🏴󠁧󠁢󠁥󠁮󠁧󠁿\",\"category\":7,\"name\":\"flag: England\",\"version\":\"5.0\"},{\"emoji\":\"🏴󠁧󠁢󠁳󠁣󠁴󠁿\",\"category\":7,\"name\":\"flag: Scotland\",\"version\":\"5.0\"},{\"emoji\":\"🏴󠁧󠁢󠁷󠁬󠁳󠁿\",\"category\":7,\"name\":\"flag: Wales\",\"version\":\"5.0\"}]}");

/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("aed9");
var anObject = __webpack_require__("825a");
var toPropertyKey = __webpack_require__("a04b");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "a04b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var isSymbol = __webpack_require__("d9b5");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "aed9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ "b42e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var hasOwn = __webpack_require__("1a2d");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("04f8");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("c65b");
var isObject = __webpack_require__("861d");
var isSymbol = __webpack_require__("d9b5");
var getMethod = __webpack_require__("dc4a");
var ordinaryToPrimitive = __webpack_require__("485a");
var wellKnownSymbol = __webpack_require__("b622");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = false;


/***/ }),

/***/ "c65b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__("40d5");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IS_PURE = __webpack_require__("c430");
var globalThis = __webpack_require__("da84");
var defineGlobalProperty = __webpack_require__("6374");

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.36.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var hasOwn = __webpack_require__("1a2d");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "cb2d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__("1626");
var definePropertyModule = __webpack_require__("9bf2");
var makeBuiltIn = __webpack_require__("13d2");
var defineGlobalProperty = __webpack_require__("6374");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cdce":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ "d012":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "d58f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__("59ed");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");
var lengthOfArrayLike = __webpack_require__("07fa");

var $TypeError = TypeError;

var REDUCE_EMPTY = 'Reduce of empty array with no initial value';

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    aCallable(callbackfn);
    if (length === 0 && argumentsLength < 2) throw new $TypeError(REDUCE_EMPTY);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw new $TypeError(REDUCE_EMPTY);
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "d638":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("4e2f");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2ab6a9da", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "d9b5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var isCallable = __webpack_require__("1626");
var isPrototypeOf = __webpack_require__("3a9b");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dc4a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__("59ed");
var isNullOrUndefined = __webpack_require__("7234");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ "e330":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__("40d5");

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__("1a2d");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/DiscordPicker.vue?vue&type=template&id=4036fe64

const _hoisted_1 = {
  class: "bg-grey-400 px-5 pt-5 pb-2 shadow-lg relative z-1 flex items-center"
};
const _hoisted_2 = {
  class: "flex items-center justify-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gif_picker = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("gif-picker");
  const _component_emoji_picker = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("emoji-picker");
  const _component_upload_button = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("upload-button");
  const _component_Autocomplete = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Autocomplete");
  const _component_gif_button = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("gif-button");
  const _component_emoji_button = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("emoji-button");
  const _directive_click_outside = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("click-outside");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: "vue3-emojipicker",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.input ? 'width: 100%;' : 'max-width: max-content')
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(`relative ${_ctx.input ? 'w-full' : 'max-w-max'} font-sans`)
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'opacity-0 pointer-events-none': !_ctx.opened
    }, "vue3-discord-emojipicker rounded-xl shadow-lg overflow-hidden mx-auto absolute transition duration-200 -top-4 right-0 transform -translate-y-full"])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("header", _hoisted_1, [_ctx.apiKey ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("p", {
    key: 0,
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'hover:bg-opacity-100 hover:bg-grey-300 bg-grey-300': _ctx.active === 'gif'
    }, "font-bold text-white text-sm py-1 hover:bg-grey-300 hover:bg-opacity-40 px-2 rounded-md cursor-pointer w-max hidden md:block mr-3"]),
    onClick: _cache[0] || (_cache[0] = $event => _ctx.active = 'gif')
  }, " GIF ", 2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.showEmoji ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("p", {
    key: 1,
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'hover:bg-opacity-100 hover:bg-grey-300 bg-grey-300': _ctx.active === 'emoji'
    }, "font-bold text-white text-sm py-1 hover:bg-grey-300 hover:bg-opacity-40 px-2 rounded-md cursor-pointer w-max hidden md:block"]),
    onClick: _cache[1] || (_cache[1] = $event => _ctx.active = 'emoji')
  }, " Émoji ", 2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]), _ctx.active === 'gif' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_gif_picker, {
    key: 0,
    "api-key": _ctx.apiKey,
    sources: _ctx.$data.$sources,
    onSend: _cache[2] || (_cache[2] = ({
      url,
      send,
      type
    }) => this.send(url, send, type))
  }, null, 8, ["api-key", "sources"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.active === 'emoji' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_emoji_picker, {
    key: 1,
    categories: _ctx.categories,
    emojis: _ctx.emojis,
    sources: _ctx.$data.$sources,
    onSend: _cache[3] || (_cache[3] = ({
      emoji,
      send
    }) => this.send(emoji, send))
  }, null, 8, ["categories", "emojis", "sources"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 2)), [[_directive_click_outside, _ctx.close]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'bg-grey-400 rounded-xl justify-between pr-4 flex items-center emojibutton__active': _ctx.input
    }, "mt-4"])
  }, [_ctx.showUpload ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_upload_button, {
    key: 0,
    onClick: _cache[4] || (_cache[4] = $event => _ctx.$emit('upload'))
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.input ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Autocomplete, {
    key: 1,
    value: _ctx.value,
    placeholder: _ctx.placeholder,
    "opened-picker": _ctx.opened,
    emojis: _ctx.emojis.list,
    onChange: _cache[5] || (_cache[5] = e => _ctx.$emit('update:value', e)),
    onSend: _ctx.send,
    onClose: _ctx.close
  }, null, 8, ["value", "placeholder", "opened-picker", "emojis", "onSend", "onClose"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default"), _ctx.apiKey ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_gif_button, {
    key: 0,
    sources: _ctx.$data.$sources,
    onClick: _ctx.open
  }, null, 8, ["sources", "onClick"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.showEmoji ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_emoji_button, {
    key: 1,
    sources: _ctx.$data.$sources,
    class: "ml-3",
    onClick: _ctx.open
  }, null, 8, ["sources", "onClick"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])], 2)], 2)], 4);
}
// CONCATENATED MODULE: ./src/components/DiscordPicker.vue?vue&type=template&id=4036fe64

// CONCATENATED MODULE: ./src/directives/click-outside.js
/* harmony default export */ var click_outside = ({
  beforeMount(el, binding) {
    el.clickOutsideEvent = function (event) {
      const classes = ['vue3-discord-emojipicker__gifimage', 'vue3-discord-emojipicker__pickvariation', 'vue3-discord-emojipicker__emojibutton', 'vue3-discord-emojipicker__gifbutton', 'vue3-discord-emojipicker__autocomplete', 'vue3-discord-emojipicker__input'];
      if (classes.find(classe => event.target.classList.contains(classe))) {
        return;
      }
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  }
});
// EXTERNAL MODULE: ./src/assets/emojis.json
var emojis = __webpack_require__("94ee");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/emojis/EmojiPicker.vue?vue&type=template&id=0e177e36

const EmojiPickervue_type_template_id_0e177e36_hoisted_1 = {
  style: {
    "height": "calc(100% - 10px)"
  }
};
const EmojiPickervue_type_template_id_0e177e36_hoisted_2 = {
  class: "bg-grey-400 px-5 pt-2 pb-5 shadow-lg relative z-1"
};
const _hoisted_3 = {
  class: "flex items-center justify-between w-full"
};
const _hoisted_4 = {
  class: "flex items-center justify-between w-full bg-grey-600 rounded-md overflow-hidden pr-4"
};
const _hoisted_5 = ["placeholder"];
const _hoisted_6 = ["src"];
const _hoisted_7 = {
  class: "vue3-discordpicker__container flex"
};
const _hoisted_8 = {
  class: "vue3-discord-emojipicker__tabs overflow-auto bg-grey-600 px-2 py-2 text-white h-auto hidden md:block"
};
const _hoisted_9 = ["src", "onClick"];
const _hoisted_10 = {
  class: "bg-grey-400 h-full w-full flex flex-col"
};
const _hoisted_11 = {
  id: "vue3-discordpicker",
  class: "overflow-auto relative pb-4 h-full w-full"
};
const _hoisted_12 = {
  class: "uppercase px-4 py-2 bg-grey-400 text-xs text-grey-100 font-semibold sticky top-0"
};
const _hoisted_13 = {
  class: "px-4 flex flex-items center justify-start flex-wrap"
};
const _hoisted_14 = ["onMouseenter", "onClick"];
const _hoisted_15 = {
  key: 1,
  class: "text-grey-100 text-center py-4"
};
const _hoisted_16 = {
  key: 0,
  class: "bg-grey-700 w-full px-5 py-2 border-t border-grey-600 items-center justify-start hidden md:flex"
};
const _hoisted_17 = {
  class: "text-3xl"
};
const _hoisted_18 = {
  class: "text-white font-semibold text-sm ml-2"
};
function EmojiPickervue_type_template_id_0e177e36_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", EmojiPickervue_type_template_id_0e177e36_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("header", EmojiPickervue_type_template_id_0e177e36_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.search = $event),
    class: "bg-grey-600 w-full text-sm py-2 px-3 text-white outline-none",
    placeholder: $data.selected && $data.selected.name ? `:${$data.selected.name.replace(/\s/g, '')}:` : 'Find the perfect emoji'
  }, null, 8, _hoisted_5), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], $data.search]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
    src: $props.sources.search,
    class: "w-4"
  }, null, 8, _hoisted_6)])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_8, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($props.categories, (category, c) => {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("img", {
      key: c,
      src: $options.formatUrlSources(category, $props.sources.category),
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
        'bg-grey-300 bg-opacity-50': c === $data.active
      }, "px-2 py-2 h-9 mb-2 w-full transition duration-200 hover:bg-grey-300 hover:bg-opacity-50 rounded-lg cursor-pointer"]),
      onClick: $event => $options.goToCategory(c)
    }, null, 10, _hoisted_9);
  }), 128))]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_10, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_11, [$props.categories.length > 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
    key: 0
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($props.categories, (category, c) => {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [_ctx.$data[category] && _ctx.$data[category].length > 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
      key: `category_${c}`,
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
        'mt-2': c > 0
      }, "vue3-discordpicker__observer"])
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_12, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(category), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_13, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.$data[category], (emoji, e) => {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
        key: `emoji_${e}`,
        class: "text-2xl cursor-pointer p-1 transition duration-200 hover:bg-grey-300 hover:bg-opacity-50 rounded-md w-8 h-8 flex items-center justify-center",
        onMouseenter: $event => $data.selected = {
          ...emoji
        },
        onClick: $event => _ctx.$emit('send', {
          emoji,
          send: true
        })
      }, [emoji.variations && $data.variation > 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
        key: 0
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(emoji.variations[$data.variation]), 1)], 64)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
        key: 1
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(emoji.emoji), 1)], 64))], 40, _hoisted_14);
    }), 128))])], 2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 64);
  }), 256)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("p", _hoisted_15, "No results found :-("))]), $data.selected ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_16, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", _hoisted_17, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($data.selected.emoji), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", _hoisted_18, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(`:${$data.selected.name.replace(/\s/g, '')}:`), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])])]);
}
// CONCATENATED MODULE: ./src/components/emojis/EmojiPicker.vue?vue&type=template&id=0e177e36

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("13d5");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/emojis/EmojiPicker.vue?vue&type=script&lang=js


/* harmony default export */ var EmojiPickervue_type_script_lang_js = ({
  props: {
    categories: {
      type: Array,
      required: true
    },
    emojis: {
      type: Object,
      required: true
    },
    sources: {
      type: Object,
      required: true
    }
  },
  emit: ['send'],
  data() {
    return {
      hovered: false,
      search: null,
      variation: 0,
      active: 0,
      selected: null,
      offsetTop: [],
      ...this.categories.map(cat => this[`$${cat}`] = [])
    };
  },
  created() {
    this.categories.forEach(category => {
      const index = this.emojis.categories.findIndex(cat => cat === category);
      if (index >= 0) {
        this.$data[category] = this.emojis.list.filter(emoji => emoji.category === index);
      }
    });
  },
  mounted() {
    this.createScrollEvent();
    this.eachCategoriesHTML();
  },
  // unmounted () {
  //   const container_emojis = document.getElementById('vue3-discordpicker')
  //   container_emojis.removeEventListener('scroll', this.scrollEvent)
  // },
  watch: {
    search: 'onSearch',
    variation: 'onSearch'
  },
  methods: {
    createScrollEvent() {
      const container_emojis = document.getElementById('vue3-discordpicker');
      if (container_emojis) {
        container_emojis.addEventListener('scroll', this.scrollEvent);
      }
    },
    onSearch() {
      this.categories.forEach(category => {
        const index = this.emojis.categories.findIndex(cat => cat === category);
        if (index >= 0) {
          this.$data[category] = this.emojis.list.filter(emoji => this.search ? emoji.category === index && emoji.name.includes(this.search) : emoji.category === index);
          this.$nextTick(() => {
            this.eachCategoriesHTML();
            this.createScrollEvent();
          });
        }
      });
    },
    eachCategoriesHTML() {
      this.offsetTop = [];
      const categories = document.querySelectorAll('.vue3-discordpicker__observer');
      categories.forEach(category => {
        this.offsetTop.push(category.offsetTop);
      });
    },
    scrollEvent({
      target
    }) {
      const {
        scrollTop
      } = target;
      const item = this.getClosest(scrollTop);
      const index = this.offsetTop.findIndex(o => o === item);
      if (index >= 0) {
        this.active = index;
      }
    },
    setVariation(index) {
      this.variation = index;
      this.hovered = false;
    },
    goToCategory(index) {
      const container_emojis = document.getElementById('vue3-discordpicker');
      const categories = document.querySelectorAll('.vue3-discordpicker__observer');
      container_emojis.scrollTop = categories[index].offsetTop;
    },
    getClosest(goal) {
      const closest = this.offsetTop.reduce(function (prev, curr) {
        return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
      });
      return closest;
    },
    formatUrlSources(slug, url) {
      return url.replace('%REPLACE%', slug);
    }
  }
});
// CONCATENATED MODULE: ./src/components/emojis/EmojiPicker.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/emojis/EmojiPicker.vue





const __exports__ = /*#__PURE__*/exportHelper_default()(EmojiPickervue_type_script_lang_js, [['render',EmojiPickervue_type_template_id_0e177e36_render]])

/* harmony default export */ var EmojiPicker = (__exports__);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/gif/GifPicker.vue?vue&type=template&id=58f17070

const GifPickervue_type_template_id_58f17070_hoisted_1 = {
  style: {
    "height": "calc(100% - 9px)"
  }
};
const GifPickervue_type_template_id_58f17070_hoisted_2 = {
  class: "bg-grey-400 px-5 pt-2 pb-5 shadow-lg relative z-1"
};
const GifPickervue_type_template_id_58f17070_hoisted_3 = {
  class: "flex items-center justify-between w-full"
};
const GifPickervue_type_template_id_58f17070_hoisted_4 = {
  class: "flex items-center justify-between w-full bg-grey-600 rounded-md overflow-hidden pr-4"
};
const GifPickervue_type_template_id_58f17070_hoisted_5 = ["src"];
const GifPickervue_type_template_id_58f17070_hoisted_6 = {
  class: "vue3-discordpicker__container flex"
};
const GifPickervue_type_template_id_58f17070_hoisted_7 = {
  class: "bg-grey-400 h-full w-full flex flex-col"
};
const GifPickervue_type_template_id_58f17070_hoisted_8 = {
  class: "overflow-auto relative p-4 h-full w-full"
};
const GifPickervue_type_template_id_58f17070_hoisted_9 = {
  key: 0,
  class: "grid grid-cols-2 grid-flow-row auto-rows-auto gap-4"
};
const GifPickervue_type_template_id_58f17070_hoisted_10 = ["onClick"];
const GifPickervue_type_template_id_58f17070_hoisted_11 = {
  key: 1,
  class: "grid grid-cols-2 grid-flow-row auto-rows-auto gap-4"
};
const GifPickervue_type_template_id_58f17070_hoisted_12 = ["onClick"];
const GifPickervue_type_template_id_58f17070_hoisted_13 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "vue3-discord-emojipicker__gifimage h-full absolute top-0 left-0 bg-black opacity-0 group-hover:opacity-70 transition duration-300 w-full -z-1"
}, null, -1);
function GifPickervue_type_template_id_58f17070_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", GifPickervue_type_template_id_58f17070_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("header", GifPickervue_type_template_id_58f17070_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", GifPickervue_type_template_id_58f17070_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", GifPickervue_type_template_id_58f17070_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.search = $event),
    class: "bg-grey-600 w-full text-sm py-2 px-3 text-white outline-none",
    placeholder: "Find the perfect gif"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], $data.search]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
    src: $props.sources.search,
    class: "w-4"
  }, null, 8, GifPickervue_type_template_id_58f17070_hoisted_5)])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", GifPickervue_type_template_id_58f17070_hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", GifPickervue_type_template_id_58f17070_hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", GifPickervue_type_template_id_58f17070_hoisted_8, [$data.search !== '' && $data.results && $data.results.length ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", GifPickervue_type_template_id_58f17070_hoisted_9, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($data.results, (result, r) => {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
      key: r,
      class: "h-28 rounded-lg bg-cover text-white flex items-center justify-center relative font-semibold font-xl border-2 border-transparent hover:border-blue transition duration-300 cursor-pointer group z-1 overflow-hidden",
      style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(`background-image: url(${$options.renderSmallGif(result.media[0])})`),
      onClick: $event => $options.send(result.media[0])
    }, null, 12, GifPickervue_type_template_id_58f17070_hoisted_10);
  }), 128))])) : $data.tags && $data.tags.length ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", GifPickervue_type_template_id_58f17070_hoisted_11, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($data.tags, (tag, t) => {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
      key: t,
      class: "vue3-discord-emojipicker__gifimage h-28 rounded-lg bg-cover text-white flex items-center justify-center relative font-semibold font-xl border-2 border-transparent hover:border-blue transition duration-300 cursor-pointer group z-1 overflow-hidden",
      style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(`background-image: url(${tag.image})`),
      onClick: $event => $data.search = tag.searchterm
    }, [GifPickervue_type_template_id_58f17070_hoisted_13, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(tag.searchterm), 1)], 12, GifPickervue_type_template_id_58f17070_hoisted_12);
  }), 128))])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])])])]);
}
// CONCATENATED MODULE: ./src/components/gif/GifPicker.vue?vue&type=template&id=58f17070

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/gif/GifPicker.vue?vue&type=script&lang=js
/* harmony default export */ var GifPickervue_type_script_lang_js = ({
  props: {
    apiKey: {
      type: String,
      required: true
    },
    sources: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      search: null,
      results: [],
      tags: []
    };
  },
  mounted() {
    fetch(`https://g.tenor.com/v1/categories?key=${this.apiKey}`).then(res => res.json()).then(({
      tags
    }) => this.tags = tags);
  },
  watch: {
    search: 'onSearch'
  },
  methods: {
    onSearch(key) {
      this.get(`search?q=${key}&limit=32`, 'results');
    },
    renderSmallGif({
      tinygif
    }) {
      return tinygif.url;
    },
    renderHugeGif({
      mediumgif
    }) {
      return mediumgif.url;
    },
    get(query, key) {
      fetch(`https://g.tenor.com/v1/${query}&key=${this.apiKey}`).then(res => res.json()).then(data => this[key] = data[key]);
    },
    send(url) {
      this.$emit('send', {
        url: this.renderHugeGif(url),
        send: true,
        type: 'gif'
      });
      this.search = null;
    }
  }
});
// CONCATENATED MODULE: ./src/components/gif/GifPicker.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/gif/GifPicker.vue





const GifPicker_exports_ = /*#__PURE__*/exportHelper_default()(GifPickervue_type_script_lang_js, [['render',GifPickervue_type_template_id_58f17070_render]])

/* harmony default export */ var GifPicker = (GifPicker_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/emojis/Button.vue?vue&type=template&id=178a3930

function Buttonvue_type_template_id_178a3930_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(`background-image: url(${_ctx.sources.emoji});`),
    class: "vue3-discord-emojipicker__emojibutton filter grayscale hover:filter-none transform transition duration-200 cursor-pointer hover:scale-110",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.$emit('click', 'emoji'))
  }, null, 4);
}
// CONCATENATED MODULE: ./src/components/emojis/Button.vue?vue&type=template&id=178a3930

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/emojis/Button.vue?vue&type=script&lang=js

/* harmony default export */ var Buttonvue_type_script_lang_js = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  emits: ['click'],
  props: {
    sources: {
      type: Object,
      required: true
    }
  }
}));
// CONCATENATED MODULE: ./src/components/emojis/Button.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/emojis/Button.vue





const Button_exports_ = /*#__PURE__*/exportHelper_default()(Buttonvue_type_script_lang_js, [['render',Buttonvue_type_template_id_178a3930_render]])

/* harmony default export */ var Button = (Button_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/gif/Button.vue?vue&type=template&id=1b7fdb3b

const Buttonvue_type_template_id_1b7fdb3b_hoisted_1 = ["src"];
function Buttonvue_type_template_id_1b7fdb3b_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("img", {
    src: _ctx.sources.gif,
    alt: "Gif button",
    width: "10",
    height: "10",
    class: "vue3-discord-emojipicker__gifbutton w-6 transition duration-200 filter hover:brightness-150 cursor-pointer transform hover:scale-110",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.$emit('click', 'gif'))
  }, null, 8, Buttonvue_type_template_id_1b7fdb3b_hoisted_1);
}
// CONCATENATED MODULE: ./src/components/gif/Button.vue?vue&type=template&id=1b7fdb3b

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/gif/Button.vue?vue&type=script&lang=js

/* harmony default export */ var gif_Buttonvue_type_script_lang_js = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  emits: ['click'],
  props: {
    sources: {
      type: Object,
      required: true
    }
  },
  methods: {
    newEmoji({
      target
    }) {
      const column = Math.floor(Math.random() * 11) * -22;
      const row = Math.floor(Math.random() * 4) * -22;
      target.style.backgroundPosition = `${column}px ${row}px`;
    }
  }
}));
// CONCATENATED MODULE: ./src/components/gif/Button.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/gif/Button.vue





const gif_Button_exports_ = /*#__PURE__*/exportHelper_default()(gif_Buttonvue_type_script_lang_js, [['render',Buttonvue_type_template_id_1b7fdb3b_render]])

/* harmony default export */ var gif_Button = (gif_Button_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/upload/Button.vue?vue&type=template&id=ab5b3b90

function Buttonvue_type_template_id_ab5b3b90_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("img", {
    src: "https://raw.githubusercontent.com/dexterpedro/vue3-emojipicker/master/public/imgs/upload.svg",
    alt: "Gif button",
    width: "10",
    height: "10",
    class: "ml-5 w-5 transition duration-200 filter hover:brightness-150 cursor-pointer transform hover:scale-110",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.$emit('click'))
  });
}
// CONCATENATED MODULE: ./src/components/upload/Button.vue?vue&type=template&id=ab5b3b90

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/upload/Button.vue?vue&type=script&lang=js

/* harmony default export */ var upload_Buttonvue_type_script_lang_js = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  emits: ['click']
}));
// CONCATENATED MODULE: ./src/components/upload/Button.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/upload/Button.vue





const upload_Button_exports_ = /*#__PURE__*/exportHelper_default()(upload_Buttonvue_type_script_lang_js, [['render',Buttonvue_type_template_id_ab5b3b90_render]])

/* harmony default export */ var upload_Button = (upload_Button_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/emojis/Autocomplete.vue?vue&type=template&id=3b8daa06

const Autocompletevue_type_template_id_3b8daa06_hoisted_1 = {
  class: "w-full"
};
const Autocompletevue_type_template_id_3b8daa06_hoisted_2 = {
  class: "w-full bg-grey-400 py-3 rounded-xl shadow-xl"
};
const Autocompletevue_type_template_id_3b8daa06_hoisted_3 = {
  class: "text-grey-100 font-semibold uppercase text-sm px-5 mb-3"
};
const Autocompletevue_type_template_id_3b8daa06_hoisted_4 = {
  class: "px-3"
};
const Autocompletevue_type_template_id_3b8daa06_hoisted_5 = ["onClick"];
const Autocompletevue_type_template_id_3b8daa06_hoisted_6 = {
  class: "text-lg"
};
const Autocompletevue_type_template_id_3b8daa06_hoisted_7 = {
  class: "text-white font-semibold text-sm ml-2"
};
const Autocompletevue_type_template_id_3b8daa06_hoisted_8 = {
  class: "w-full relative"
};
const Autocompletevue_type_template_id_3b8daa06_hoisted_9 = ["placeholder"];
function Autocompletevue_type_template_id_3b8daa06_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_click_outside = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("click-outside");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", Autocompletevue_type_template_id_3b8daa06_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'opacity-0 pointer-events-none': !_ctx.autocomplete.show
    }, "vue3-discord-emojipicker__autocomplete w-full absolute transform -translate-y-full left-0 -top-4 transition duration-200"])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Autocompletevue_type_template_id_3b8daa06_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", Autocompletevue_type_template_id_3b8daa06_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.autocomplete.results.length) + " results", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", Autocompletevue_type_template_id_3b8daa06_hoisted_4, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.autocomplete.results.slice(0, 8), (result, r) => {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", {
      key: r,
      class: "flex items-center justify-start hover:bg-grey-300 hover:bg-opacity-60 rounded-md px-2 py-1 cursor-pointer",
      onClick: $event => _ctx.onClick(result)
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", Autocompletevue_type_template_id_3b8daa06_hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(result.emoji), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", Autocompletevue_type_template_id_3b8daa06_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(`:${result.name.replace(/\s/g, '')}:`), 1)], 8, Autocompletevue_type_template_id_3b8daa06_hoisted_5);
  }), 128))])])], 2)), [[_directive_click_outside, _ctx.onClose]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Autocompletevue_type_template_id_3b8daa06_hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    ref: "input",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.content = $event),
    type: "text",
    class: "w-full vue3-discord-emojipicker__input bg-transparent px-5 py-3 text-white outline-none text-base placeholder-grey-200",
    placeholder: _ctx.placeholder,
    onInput: _cache[1] || (_cache[1] = (...args) => _ctx.onComplete && _ctx.onComplete(...args))
  }, null, 40, Autocompletevue_type_template_id_3b8daa06_hoisted_9), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.content]])])]);
}
// CONCATENATED MODULE: ./src/components/emojis/Autocomplete.vue?vue&type=template&id=3b8daa06

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/emojis/Autocomplete.vue?vue&type=script&lang=js


/* harmony default export */ var Autocompletevue_type_script_lang_js = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    placeholder: {
      type: String
    },
    emojis: {
      type: Array,
      required: true
    },
    openedPicker: {
      type: Boolean,
      required: true
    }
  },
  emits: ['close', 'change', 'send'],
  directives: {
    clickOutside: click_outside
  },
  data() {
    return {
      autocomplete: {
        show: false,
        results: []
      },
      content: this.value || null
    };
  },
  watch: {
    value(value) {
      this.content = value;
    },
    openedPicker(value) {
      if (value) {
        this.autocomplete.show = false;
      }
    }
  },
  methods: {
    onClose() {
      if (this.autocomplete.show) {
        this.autocomplete.show = false;
      }
    },
    onComplete({
      target
    }) {
      const {
        value
      } = target;
      const lastWord = value.split(' ').pop().toLowerCase();
      if (lastWord.startsWith(':') && lastWord.length > 3) {
        this.autocomplete = {
          results: this.emojis.filter(({
            name
          }) => name.replace(/\s/g, '').toLowerCase().includes(lastWord.replace(/:/g, ''))),
          show: true
        };
        this.$emit('close');
      } else {
        this.autocomplete = {
          results: [],
          show: false
        };
      }
      this.$emit('change', value);
    },
    onClick(emoji) {
      let value = this.content;
      value = value.split(' ');
      value.pop();
      this.$emit('change', `${value.join(' ')} ${emoji.emoji}`);
      this.$emit('send', emoji);
      this.autocomplete.show = false;
      this.$refs.input.focus();
    }
  }
}));
// CONCATENATED MODULE: ./src/components/emojis/Autocomplete.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/emojis/Autocomplete.vue





const Autocomplete_exports_ = /*#__PURE__*/exportHelper_default()(Autocompletevue_type_script_lang_js, [['render',Autocompletevue_type_template_id_3b8daa06_render]])

/* harmony default export */ var Autocomplete = (Autocomplete_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/DiscordPicker.vue?vue&type=script&lang=js









/* harmony default export */ var DiscordPickervue_type_script_lang_js = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  components: {
    EmojiButton: Button,
    Autocomplete: Autocomplete,
    GifButton: gif_Button,
    GifPicker: GifPicker,
    EmojiPicker: EmojiPicker,
    UploadButton: upload_Button
  },
  directives: {
    clickOutside: click_outside
  },
  emits: ['update:value', 'emoji', 'gif', 'upload'],
  props: {
    categories: {
      type: Array,
      default() {
        return ['people', 'animals', 'foods', 'travel', 'activities', 'objects', 'symbols', 'flags'];
      }
    },
    placeholder: {
      type: String,
      default: 'Type your message'
    },
    input: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: null
    },
    gifFormat: {
      type: String
    },
    apiKey: {
      type: String
    },
    showUpload: {
      type: Boolean,
      default: false
    },
    showEmoji: {
      type: Boolean,
      default: true
    },
    sources: {
      type: Object
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      opened: false,
      emojis: emojis,
      active: 'gif',
      $sources: {
        search: 'https://raw.githubusercontent.com/dexterpedro/vue3-emojipicker/master/public/imgs/search.svg',
        gif: 'https://raw.githubusercontent.com/dexterpedro/vue3-emojipicker/master/public/imgs/gif.svg',
        category: 'https://raw.githubusercontent.com/dexterpedro/vue3-emojipicker/master/public/imgs/%REPLACE%.svg',
        variation: 'https://raw.githubusercontent.com/dexterpedro/vue3-emojipicker/master/public/imgs/variation_%REPLACE%.svg',
        emoji: 'https://raw.githubusercontent.com/dexterpedro/vue3-emojipicker/master/public/imgs/emoji.png'
      }
    };
  },
  created() {
    this.$data.$sources = {
      ...this.$data.$sources,
      ...this.sources
    };
  },
  methods: {
    close() {
      if (this.opened) {
        this.opened = false;
      }
    },
    send(value, send = false, type = 'emoji') {
      if (type === 'gif') {
        value = this.formatGif(value);
        this.$emit('gif', value);
      }
      if (type === 'emoji') {
        value = value.variations && this.variation > 0 ? value.variations[this.variation] : value.emoji;
        this.$emit('emoji', value);
        if (this.input && send) {
          this.$emit('update:value', `${this.value} ${value}`);
        }
      }
      if (!this.multiple || type === 'gif') {
        this.opened = false;
      }
    },
    formatGif(url) {
      if (this.gifFormat === 'md') {
        url = `!(alt)[${url}]`;
      }
      if (this.gifFormat === 'html') {
        url = `<img src="${url}" />`;
      }
      return url;
    },
    open(item = 'emoji') {
      if (this.active !== item) {
        this.active = item;
        this.opened = true;
        return;
      }
      this.opened = !this.opened;
    }
  }
}));
// CONCATENATED MODULE: ./src/components/DiscordPicker.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/DiscordPicker.vue?vue&type=style&index=0&id=4036fe64&lang=css
var DiscordPickervue_type_style_index_0_id_4036fe64_lang_css = __webpack_require__("31fc");

// CONCATENATED MODULE: ./src/components/DiscordPicker.vue







const DiscordPicker_exports_ = /*#__PURE__*/exportHelper_default()(DiscordPickervue_type_script_lang_js, [['render',render]])

/* harmony default export */ var DiscordPicker = (DiscordPicker_exports_);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (DiscordPicker);



/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("04f8");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ })["default"];
//# sourceMappingURL=discordpicker.common.js.map