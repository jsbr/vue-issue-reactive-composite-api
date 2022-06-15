(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["test-lib"] = factory(require("vue"));
	else
		root["test-lib"] = factory(root["vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__748__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 744:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 748:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__748__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CompApiTest": function() { return /* reexport */ src_CompApiTest; },
  "CompApiTestV2": function() { return /* reexport */ src_CompApiTestV2; },
  "OptionApiTest": function() { return /* reexport */ src_OptionApiTest; },
  "OptionApiTestV2": function() { return /* reexport */ src_OptionApiTestV2; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
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

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(748);
;// CONCATENATED MODULE: ./src/helper.ts
function interval(data) {
    setInterval(function () { return data.count++; }, 1000);
}

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/CompApiTest.vue?vue&type=script&setup=true&lang=ts




/* harmony default export */ var CompApiTestvue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,external_vue_.defineComponent)({
    __name: 'CompApiTest',
    setup: function (__props) {
        var data = (0,external_vue_.reactive)({
            count: 0
        });
        interval(data);
        return function (_ctx, _cache) {
            return ((0,external_vue_.openBlock)(), (0,external_vue_.createElementBlock)("h3", null, "Composite Api (setup): " + (0,external_vue_.toDisplayString)(data.count), 1));
        };
    }
}));

;// CONCATENATED MODULE: ./src/components/CompApiTest.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./src/components/CompApiTest.vue



const __exports__ = CompApiTestvue_type_script_setup_true_lang_ts;

/* harmony default export */ var CompApiTest = (__exports__);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/CompApiTestV2.vue?vue&type=script&setup=true&lang=ts




/* harmony default export */ var CompApiTestV2vue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,external_vue_.defineComponent)({
    __name: 'CompApiTestV2',
    setup: function (__props) {
        var count = (0,external_vue_.ref)(0);
        var data = (0,external_vue_.reactive)({
            count: count
        });
        var instance = (0,external_vue_.getCurrentInstance)();
        var data2 = new Proxy({ count: count }, {
            set: function (target, p, value, receiver) {
                var _a;
                console.log(value);
                target[p].value = value;
                (_a = instance === null || instance === void 0 ? void 0 : instance.proxy) === null || _a === void 0 ? void 0 : _a.$forceUpdate();
                return true;
            },
            get: function (target, p) {
                return target[p].value;
            }
        });
        console.log(instance);
        interval(data2);
        return function (_ctx, _cache) {
            return ((0,external_vue_.openBlock)(), (0,external_vue_.createElementBlock)("h3", null, "Composite Api (setup) V2: " + (0,external_vue_.toDisplayString)(count.value), 1));
        };
    }
}));

;// CONCATENATED MODULE: ./src/components/CompApiTestV2.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./src/components/CompApiTestV2.vue



const CompApiTestV2_exports_ = CompApiTestV2vue_type_script_setup_true_lang_ts;

/* harmony default export */ var CompApiTestV2 = (CompApiTestV2_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OptionApiTest.vue?vue&type=template&id=30213d77&ts=true

function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,external_vue_.openBlock)(), (0,external_vue_.createElementBlock)("h3", null, "Option Api: " + (0,external_vue_.toDisplayString)(_ctx.count), 1));
}

;// CONCATENATED MODULE: ./src/components/OptionApiTest.vue?vue&type=template&id=30213d77&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OptionApiTest.vue?vue&type=script&lang=ts


/* harmony default export */ var OptionApiTestvue_type_script_lang_ts = ((0,external_vue_.defineComponent)({
    data: function () {
        return {
            count: 0
        };
    },
    mounted: function () {
        interval(this.$data);
    }
}));

;// CONCATENATED MODULE: ./src/components/OptionApiTest.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./src/components/OptionApiTest.vue




;
const OptionApiTest_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(OptionApiTestvue_type_script_lang_ts, [['render',render]])

/* harmony default export */ var OptionApiTest = (OptionApiTest_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OptionApiTestV2.vue?vue&type=template&id=7aae2177&ts=true

function OptionApiTestV2vue_type_template_id_7aae2177_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,external_vue_.openBlock)(), (0,external_vue_.createElementBlock)("h3", null, "Option Api V2: " + (0,external_vue_.toDisplayString)(_ctx.data.count), 1));
}

;// CONCATENATED MODULE: ./src/components/OptionApiTestV2.vue?vue&type=template&id=7aae2177&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OptionApiTestV2.vue?vue&type=script&lang=ts


/* harmony default export */ var OptionApiTestV2vue_type_script_lang_ts = ((0,external_vue_.defineComponent)({
    data: function () {
        return {
            data: {
                count: 0
            }
        };
    },
    mounted: function () {
        interval(this.data);
    }
}));

;// CONCATENATED MODULE: ./src/components/OptionApiTestV2.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/components/OptionApiTestV2.vue




;
const OptionApiTestV2_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(OptionApiTestV2vue_type_script_lang_ts, [['render',OptionApiTestV2vue_type_template_id_7aae2177_ts_true_render]])

/* harmony default export */ var OptionApiTestV2 = (OptionApiTestV2_exports_);
;// CONCATENATED MODULE: ./src/index.ts




var src_CompApiTest = CompApiTest;
var src_CompApiTestV2 = CompApiTestV2;
var src_OptionApiTest = OptionApiTest;
var src_OptionApiTestV2 = OptionApiTestV2;

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js



}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=test-lib.umd.js.map