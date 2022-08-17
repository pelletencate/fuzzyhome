
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __assign = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (callback, module) => () => {
  if (!module) {
    module = {exports: {}};
    callback(module.exports, module);
  }
  return module.exports;
};
var __exportStar = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module) => {
  return __exportStar(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
};

// node_modules/lodash/lodash.js
var require_lodash = __commonJS((exports, module) => {
  /**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */
  (function() {
    var undefined2;
    var VERSION2 = "4.17.21";
    var LARGE_ARRAY_SIZE = 200;
    var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var MAX_MEMOIZE_SIZE = 500;
    var PLACEHOLDER = "__lodash_placeholder__";
    var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
    var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
    var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
    var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
    var HOT_COUNT = 800, HOT_SPAN = 16;
    var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
    var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
    var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
    var wrapFlags = [
      ["ary", WRAP_ARY_FLAG],
      ["bind", WRAP_BIND_FLAG],
      ["bindKey", WRAP_BIND_KEY_FLAG],
      ["curry", WRAP_CURRY_FLAG],
      ["curryRight", WRAP_CURRY_RIGHT_FLAG],
      ["flip", WRAP_FLIP_FLAG],
      ["partial", WRAP_PARTIAL_FLAG],
      ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
      ["rearg", WRAP_REARG_FLAG]
    ];
    var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
    var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
    var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
    var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
    var reTrimStart = /^\s+/;
    var reWhitespace = /\s/;
    var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
    var reEscapeChar = /\\(\\)?/g;
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    var reFlags = /\w*$/;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsOctal = /^0o[0-7]+$/i;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var reNoMatch = /($^)/;
    var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
    var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
    var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reApos = RegExp(rsApos, "g");
    var reComboMark = RegExp(rsCombo, "g");
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reUnicodeWord = RegExp([
      rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
      rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
      rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
      rsUpper + "+" + rsOptContrUpper,
      rsOrdUpper,
      rsOrdLower,
      rsDigits,
      rsEmoji
    ].join("|"), "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var contextProps = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ];
    var templateCounter = -1;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    var deburredLetters = {
      \u00C0: "A",
      \u00C1: "A",
      \u00C2: "A",
      \u00C3: "A",
      \u00C4: "A",
      \u00C5: "A",
      \u00E0: "a",
      \u00E1: "a",
      \u00E2: "a",
      \u00E3: "a",
      \u00E4: "a",
      \u00E5: "a",
      \u00C7: "C",
      \u00E7: "c",
      \u00D0: "D",
      \u00F0: "d",
      \u00C8: "E",
      \u00C9: "E",
      \u00CA: "E",
      \u00CB: "E",
      \u00E8: "e",
      \u00E9: "e",
      \u00EA: "e",
      \u00EB: "e",
      \u00CC: "I",
      \u00CD: "I",
      \u00CE: "I",
      \u00CF: "I",
      \u00EC: "i",
      \u00ED: "i",
      \u00EE: "i",
      \u00EF: "i",
      \u00D1: "N",
      \u00F1: "n",
      \u00D2: "O",
      \u00D3: "O",
      \u00D4: "O",
      \u00D5: "O",
      \u00D6: "O",
      \u00D8: "O",
      \u00F2: "o",
      \u00F3: "o",
      \u00F4: "o",
      \u00F5: "o",
      \u00F6: "o",
      \u00F8: "o",
      \u00D9: "U",
      \u00DA: "U",
      \u00DB: "U",
      \u00DC: "U",
      \u00F9: "u",
      \u00FA: "u",
      \u00FB: "u",
      \u00FC: "u",
      \u00DD: "Y",
      \u00FD: "y",
      \u00FF: "y",
      \u00C6: "Ae",
      \u00E6: "ae",
      \u00DE: "Th",
      \u00FE: "th",
      \u00DF: "ss",
      \u0100: "A",
      \u0102: "A",
      \u0104: "A",
      \u0101: "a",
      \u0103: "a",
      \u0105: "a",
      \u0106: "C",
      \u0108: "C",
      \u010A: "C",
      \u010C: "C",
      \u0107: "c",
      \u0109: "c",
      \u010B: "c",
      \u010D: "c",
      \u010E: "D",
      \u0110: "D",
      \u010F: "d",
      \u0111: "d",
      \u0112: "E",
      \u0114: "E",
      \u0116: "E",
      \u0118: "E",
      \u011A: "E",
      \u0113: "e",
      \u0115: "e",
      \u0117: "e",
      \u0119: "e",
      \u011B: "e",
      \u011C: "G",
      \u011E: "G",
      \u0120: "G",
      \u0122: "G",
      \u011D: "g",
      \u011F: "g",
      \u0121: "g",
      \u0123: "g",
      \u0124: "H",
      \u0126: "H",
      \u0125: "h",
      \u0127: "h",
      \u0128: "I",
      \u012A: "I",
      \u012C: "I",
      \u012E: "I",
      \u0130: "I",
      \u0129: "i",
      \u012B: "i",
      \u012D: "i",
      \u012F: "i",
      \u0131: "i",
      \u0134: "J",
      \u0135: "j",
      \u0136: "K",
      \u0137: "k",
      \u0138: "k",
      \u0139: "L",
      \u013B: "L",
      \u013D: "L",
      \u013F: "L",
      \u0141: "L",
      \u013A: "l",
      \u013C: "l",
      \u013E: "l",
      \u0140: "l",
      \u0142: "l",
      \u0143: "N",
      \u0145: "N",
      \u0147: "N",
      \u014A: "N",
      \u0144: "n",
      \u0146: "n",
      \u0148: "n",
      \u014B: "n",
      \u014C: "O",
      \u014E: "O",
      \u0150: "O",
      \u014D: "o",
      \u014F: "o",
      \u0151: "o",
      \u0154: "R",
      \u0156: "R",
      \u0158: "R",
      \u0155: "r",
      \u0157: "r",
      \u0159: "r",
      \u015A: "S",
      \u015C: "S",
      \u015E: "S",
      \u0160: "S",
      \u015B: "s",
      \u015D: "s",
      \u015F: "s",
      \u0161: "s",
      \u0162: "T",
      \u0164: "T",
      \u0166: "T",
      \u0163: "t",
      \u0165: "t",
      \u0167: "t",
      \u0168: "U",
      \u016A: "U",
      \u016C: "U",
      \u016E: "U",
      \u0170: "U",
      \u0172: "U",
      \u0169: "u",
      \u016B: "u",
      \u016D: "u",
      \u016F: "u",
      \u0171: "u",
      \u0173: "u",
      \u0174: "W",
      \u0175: "w",
      \u0176: "Y",
      \u0177: "y",
      \u0178: "Y",
      \u0179: "Z",
      \u017B: "Z",
      \u017D: "Z",
      \u017A: "z",
      \u017C: "z",
      \u017E: "z",
      \u0132: "IJ",
      \u0133: "ij",
      \u0152: "Oe",
      \u0153: "oe",
      \u0149: "'n",
      \u017F: "s"
    };
    var htmlEscapes = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    var htmlUnescapes = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    };
    var stringEscapes = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    };
    var freeParseFloat = parseFloat, freeParseInt = parseInt;
    var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function arrayAggregator(array, setter, iteratee, accumulator) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        var value = array[index];
        setter(accumulator, value, iteratee(value), array);
      }
      return accumulator;
    }
    function arrayEach(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEachRight(array, iteratee) {
      var length = array == null ? 0 : array.length;
      while (length--) {
        if (iteratee(array[length], length, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEvery(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (!predicate(array[index], index, array)) {
          return false;
        }
      }
      return true;
    }
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    function arrayIncludesWith(array, value, comparator) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (comparator(value, array[index])) {
          return true;
        }
      }
      return false;
    }
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1, length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    function arrayReduceRight(array, iteratee, accumulator, initAccum) {
      var length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[--length];
      }
      while (length--) {
        accumulator = iteratee(accumulator, array[length], length, array);
      }
      return accumulator;
    }
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    var asciiSize = baseProperty("length");
    function asciiToArray(string) {
      return string.split("");
    }
    function asciiWords(string) {
      return string.match(reAsciiWord) || [];
    }
    function baseFindKey(collection, predicate, eachFunc) {
      var result;
      eachFunc(collection, function(value, key, collection2) {
        if (predicate(value, key, collection2)) {
          result = key;
          return false;
        }
      });
      return result;
    }
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    function baseIndexOf(array, value, fromIndex) {
      return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    function baseIndexOfWith(array, value, fromIndex, comparator) {
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (comparator(array[index], value)) {
          return index;
        }
      }
      return -1;
    }
    function baseIsNaN(value) {
      return value !== value;
    }
    function baseMean(array, iteratee) {
      var length = array == null ? 0 : array.length;
      return length ? baseSum(array, iteratee) / length : NAN;
    }
    function baseProperty(key) {
      return function(object) {
        return object == null ? undefined2 : object[key];
      };
    }
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? undefined2 : object[key];
      };
    }
    function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
      eachFunc(collection, function(value, index, collection2) {
        accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
      });
      return accumulator;
    }
    function baseSortBy(array, comparer) {
      var length = array.length;
      array.sort(comparer);
      while (length--) {
        array[length] = array[length].value;
      }
      return array;
    }
    function baseSum(array, iteratee) {
      var result, index = -1, length = array.length;
      while (++index < length) {
        var current = iteratee(array[index]);
        if (current !== undefined2) {
          result = result === undefined2 ? current : result + current;
        }
      }
      return result;
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseToPairs(object, props2) {
      return arrayMap(props2, function(key) {
        return [key, object[key]];
      });
    }
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function baseValues(object, props2) {
      return arrayMap(props2, function(key) {
        return object[key];
      });
    }
    function cacheHas(cache2, key) {
      return cache2.has(key);
    }
    function charsStartIndex(strSymbols, chrSymbols) {
      var index = -1, length = strSymbols.length;
      while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
      }
      return index;
    }
    function charsEndIndex(strSymbols, chrSymbols) {
      var index = strSymbols.length;
      while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
      }
      return index;
    }
    function countHolders(array, placeholder) {
      var length = array.length, result = 0;
      while (length--) {
        if (array[length] === placeholder) {
          ++result;
        }
      }
      return result;
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    var escapeHtmlChar = basePropertyOf(htmlEscapes);
    function escapeStringChar(chr) {
      return "\\" + stringEscapes[chr];
    }
    function getValue(object, key) {
      return object == null ? undefined2 : object[key];
    }
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string);
    }
    function iteratorToArray(iterator) {
      var data, result = [];
      while (!(data = iterator.next()).done) {
        result.push(data.value);
      }
      return result;
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function replaceHolders(array, placeholder) {
      var index = -1, length = array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (value === placeholder || value === PLACEHOLDER) {
          array[index] = PLACEHOLDER;
          result[resIndex++] = index;
        }
      }
      return result;
    }
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    function setToPairs(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = [value, value];
      });
      return result;
    }
    function strictIndexOf(array, value, fromIndex) {
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    function strictLastIndexOf(array, value, fromIndex) {
      var index = fromIndex + 1;
      while (index--) {
        if (array[index] === value) {
          return index;
        }
      }
      return index;
    }
    function stringSize(string) {
      return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
    }
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
    function unicodeSize(string) {
      var result = reUnicode.lastIndex = 0;
      while (reUnicode.test(string)) {
        ++result;
      }
      return result;
    }
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || [];
    }
    var runInContext = function runInContext2(context) {
      context = context == null ? root : _2.defaults(root.Object(), context, _2.pick(root, contextProps));
      var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
      var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
      var coreJsData = context["__core-js_shared__"];
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var idCounter = 0;
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      var nativeObjectToString = objectProto.toString;
      var objectCtorString = funcToString.call(Object2);
      var oldDash = root._;
      var reIsNative = RegExp2("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      var Buffer3 = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe2 = Buffer3 ? Buffer3.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
      var defineProperty2 = function() {
        try {
          var func = getNative(Object2, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
      var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer3 ? Buffer3.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
      var DataView2 = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap2 = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
      var metaMap = WeakMap2 && new WeakMap2();
      var realNames = {};
      var dataViewCtorString = toSource(DataView2), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
      var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
      function lodash(value) {
        if (isObjectLike(value) && !isArray3(value) && !(value instanceof LazyWrapper)) {
          if (value instanceof LodashWrapper) {
            return value;
          }
          if (hasOwnProperty.call(value, "__wrapped__")) {
            return wrapperClone(value);
          }
        }
        return new LodashWrapper(value);
      }
      var baseCreate = function() {
        function object() {
        }
        return function(proto) {
          if (!isObject(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result2 = new object();
          object.prototype = undefined2;
          return result2;
        };
      }();
      function baseLodash() {
      }
      function LodashWrapper(value, chainAll) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
        this.__index__ = 0;
        this.__values__ = undefined2;
      }
      lodash.templateSettings = {
        escape: reEscape,
        evaluate: reEvaluate,
        interpolate: reInterpolate,
        variable: "",
        imports: {
          _: lodash
        }
      };
      lodash.prototype = baseLodash.prototype;
      lodash.prototype.constructor = lodash;
      LodashWrapper.prototype = baseCreate(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
      function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = MAX_ARRAY_LENGTH;
        this.__views__ = [];
      }
      function lazyClone() {
        var result2 = new LazyWrapper(this.__wrapped__);
        result2.__actions__ = copyArray(this.__actions__);
        result2.__dir__ = this.__dir__;
        result2.__filtered__ = this.__filtered__;
        result2.__iteratees__ = copyArray(this.__iteratees__);
        result2.__takeCount__ = this.__takeCount__;
        result2.__views__ = copyArray(this.__views__);
        return result2;
      }
      function lazyReverse() {
        if (this.__filtered__) {
          var result2 = new LazyWrapper(this);
          result2.__dir__ = -1;
          result2.__filtered__ = true;
        } else {
          result2 = this.clone();
          result2.__dir__ *= -1;
        }
        return result2;
      }
      function lazyValue() {
        var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray3(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
        if (!isArr || !isRight && arrLength == length && takeCount == length) {
          return baseWrapperValue(array, this.__actions__);
        }
        var result2 = [];
        outer:
          while (length-- && resIndex < takeCount) {
            index += dir;
            var iterIndex = -1, value = array[index];
            while (++iterIndex < iterLength) {
              var data = iteratees[iterIndex], iteratee2 = data.iteratee, type2 = data.type, computed = iteratee2(value);
              if (type2 == LAZY_MAP_FLAG) {
                value = computed;
              } else if (!computed) {
                if (type2 == LAZY_FILTER_FLAG) {
                  continue outer;
                } else {
                  break outer;
                }
              }
            }
            result2[resIndex++] = value;
          }
        return result2;
      }
      LazyWrapper.prototype = baseCreate(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      function hashDelete(key) {
        var result2 = this.has(key) && delete this.__data__[key];
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result2 = data[key];
          return result2 === HASH_UNDEFINED ? undefined2 : result2;
        }
        return hasOwnProperty.call(data, key) ? data[key] : undefined2;
      }
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
      }
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
        return this;
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? undefined2 : data[index][1];
      }
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          hash: new Hash(),
          map: new (Map2 || ListCache)(),
          string: new Hash()
        };
      }
      function mapCacheDelete(key) {
        var result2 = getMapData(this, key)["delete"](key);
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size2 = data.size;
        data.set(key, value);
        this.size += data.size == size2 ? 0 : 1;
        return this;
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      function SetCache(values2) {
        var index = -1, length = values2 == null ? 0 : values2.length;
        this.__data__ = new MapCache();
        while (++index < length) {
          this.add(values2[index]);
        }
      }
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      function stackDelete(key) {
        var data = this.__data__, result2 = data["delete"](key);
        this.size = data.size;
        return result2;
      }
      function stackGet(key) {
        return this.__data__.get(key);
      }
      function stackHas(key) {
        return this.__data__.has(key);
      }
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray3(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer2(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function arraySample(array) {
        var length = array.length;
        return length ? array[baseRandom(0, length - 1)] : undefined2;
      }
      function arraySampleSize(array, n) {
        return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
      }
      function arrayShuffle(array) {
        return shuffleSelf(copyArray(array));
      }
      function assignMergeValue(object, key, value) {
        if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      function baseAggregator(collection, setter, iteratee2, accumulator) {
        baseEach(collection, function(value, key, collection2) {
          setter(accumulator, value, iteratee2(value), collection2);
        });
        return accumulator;
      }
      function baseAssign(object, source) {
        return object && copyObject(source, keys2(source), object);
      }
      function baseAssignIn(object, source) {
        return object && copyObject(source, keysIn(source), object);
      }
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty2) {
          defineProperty2(object, key, {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        } else {
          object[key] = value;
        }
      }
      function baseAt(object, paths) {
        var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
        while (++index < length) {
          result2[index] = skip ? undefined2 : get(object, paths[index]);
        }
        return result2;
      }
      function baseClamp(number, lower, upper) {
        if (number === number) {
          if (upper !== undefined2) {
            number = number <= upper ? number : upper;
          }
          if (lower !== undefined2) {
            number = number >= lower ? number : lower;
          }
        }
        return number;
      }
      function baseClone(value, bitmask, customizer, key, object, stack) {
        var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
        if (customizer) {
          result2 = object ? customizer(value, key, object, stack) : customizer(value);
        }
        if (result2 !== undefined2) {
          return result2;
        }
        if (!isObject(value)) {
          return value;
        }
        var isArr = isArray3(value);
        if (isArr) {
          result2 = initCloneArray(value);
          if (!isDeep) {
            return copyArray(value, result2);
          }
        } else {
          var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
          if (isBuffer2(value)) {
            return cloneBuffer(value, isDeep);
          }
          if (tag == objectTag || tag == argsTag || isFunc && !object) {
            result2 = isFlat || isFunc ? {} : initCloneObject(value);
            if (!isDeep) {
              return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
            }
          } else {
            if (!cloneableTags[tag]) {
              return object ? value : {};
            }
            result2 = initCloneByTag(value, tag, isDeep);
          }
        }
        stack || (stack = new Stack());
        var stacked = stack.get(value);
        if (stacked) {
          return stacked;
        }
        stack.set(value, result2);
        if (isSet(value)) {
          value.forEach(function(subValue) {
            result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
          });
        } else if (isMap(value)) {
          value.forEach(function(subValue, key2) {
            result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
        }
        var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys2;
        var props2 = isArr ? undefined2 : keysFunc(value);
        arrayEach(props2 || value, function(subValue, key2) {
          if (props2) {
            key2 = subValue;
            subValue = value[key2];
          }
          assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
        return result2;
      }
      function baseConforms(source) {
        var props2 = keys2(source);
        return function(object) {
          return baseConformsTo(object, source, props2);
        };
      }
      function baseConformsTo(object, source, props2) {
        var length = props2.length;
        if (object == null) {
          return !length;
        }
        object = Object2(object);
        while (length--) {
          var key = props2[length], predicate = source[key], value = object[key];
          if (value === undefined2 && !(key in object) || !predicate(value)) {
            return false;
          }
        }
        return true;
      }
      function baseDelay(func, wait, args) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        return setTimeout3(function() {
          func.apply(undefined2, args);
        }, wait);
      }
      function baseDifference(array, values2, iteratee2, comparator) {
        var index = -1, includes3 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
        if (!length) {
          return result2;
        }
        if (iteratee2) {
          values2 = arrayMap(values2, baseUnary(iteratee2));
        }
        if (comparator) {
          includes3 = arrayIncludesWith;
          isCommon = false;
        } else if (values2.length >= LARGE_ARRAY_SIZE) {
          includes3 = cacheHas;
          isCommon = false;
          values2 = new SetCache(values2);
        }
        outer:
          while (++index < length) {
            var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed === computed) {
              var valuesIndex = valuesLength;
              while (valuesIndex--) {
                if (values2[valuesIndex] === computed) {
                  continue outer;
                }
              }
              result2.push(value);
            } else if (!includes3(values2, computed, comparator)) {
              result2.push(value);
            }
          }
        return result2;
      }
      var baseEach = createBaseEach(baseForOwn);
      var baseEachRight = createBaseEach(baseForOwnRight, true);
      function baseEvery(collection, predicate) {
        var result2 = true;
        baseEach(collection, function(value, index, collection2) {
          result2 = !!predicate(value, index, collection2);
          return result2;
        });
        return result2;
      }
      function baseExtremum(array, iteratee2, comparator) {
        var index = -1, length = array.length;
        while (++index < length) {
          var value = array[index], current = iteratee2(value);
          if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
            var computed = current, result2 = value;
          }
        }
        return result2;
      }
      function baseFill(array, value, start, end) {
        var length = array.length;
        start = toInteger(start);
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end === undefined2 || end > length ? length : toInteger(end);
        if (end < 0) {
          end += length;
        }
        end = start > end ? 0 : toLength(end);
        while (start < end) {
          array[start++] = value;
        }
        return array;
      }
      function baseFilter(collection, predicate) {
        var result2 = [];
        baseEach(collection, function(value, index, collection2) {
          if (predicate(value, index, collection2)) {
            result2.push(value);
          }
        });
        return result2;
      }
      function baseFlatten(array, depth, predicate, isStrict, result2) {
        var index = -1, length = array.length;
        predicate || (predicate = isFlattenable);
        result2 || (result2 = []);
        while (++index < length) {
          var value = array[index];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten(value, depth - 1, predicate, isStrict, result2);
            } else {
              arrayPush(result2, value);
            }
          } else if (!isStrict) {
            result2[result2.length] = value;
          }
        }
        return result2;
      }
      var baseFor = createBaseFor();
      var baseForRight = createBaseFor(true);
      function baseForOwn(object, iteratee2) {
        return object && baseFor(object, iteratee2, keys2);
      }
      function baseForOwnRight(object, iteratee2) {
        return object && baseForRight(object, iteratee2, keys2);
      }
      function baseFunctions(object, props2) {
        return arrayFilter(props2, function(key) {
          return isFunction(object[key]);
        });
      }
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return index && index == length ? object : undefined2;
      }
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result2 = keysFunc(object);
        return isArray3(object) ? result2 : arrayPush(result2, symbolsFunc(object));
      }
      function baseGetTag(value) {
        if (value == null) {
          return value === undefined2 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
      }
      function baseGt(value, other) {
        return value > other;
      }
      function baseHas(object, key) {
        return object != null && hasOwnProperty.call(object, key);
      }
      function baseHasIn(object, key) {
        return object != null && key in Object2(object);
      }
      function baseInRange(number, start, end) {
        return number >= nativeMin(start, end) && number < nativeMax(start, end);
      }
      function baseIntersection(arrays, iteratee2, comparator) {
        var includes3 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
        while (othIndex--) {
          var array = arrays[othIndex];
          if (othIndex && iteratee2) {
            array = arrayMap(array, baseUnary(iteratee2));
          }
          maxLength = nativeMin(array.length, maxLength);
          caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
        }
        array = arrays[0];
        var index = -1, seen = caches[0];
        outer:
          while (++index < length && result2.length < maxLength) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (!(seen ? cacheHas(seen, computed) : includes3(result2, computed, comparator))) {
              othIndex = othLength;
              while (--othIndex) {
                var cache2 = caches[othIndex];
                if (!(cache2 ? cacheHas(cache2, computed) : includes3(arrays[othIndex], computed, comparator))) {
                  continue outer;
                }
              }
              if (seen) {
                seen.push(computed);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseInverter(object, setter, iteratee2, accumulator) {
        baseForOwn(object, function(value, key, object2) {
          setter(accumulator, iteratee2(value), key, object2);
        });
        return accumulator;
      }
      function baseInvoke(object, path, args) {
        path = castPath(path, object);
        object = parent(object, path);
        var func = object == null ? object : object[toKey(last(path))];
        return func == null ? undefined2 : apply(func, object, args);
      }
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      function baseIsArrayBuffer(value) {
        return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
      }
      function baseIsDate(value) {
        return isObjectLike(value) && baseGetTag(value) == dateTag;
      }
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray3(object), othIsArr = isArray3(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer2(object)) {
          if (!isBuffer2(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      function baseIsMap(value) {
        return isObjectLike(value) && getTag(value) == mapTag;
      }
      function baseIsMatch(object, source, matchData, customizer) {
        var index = matchData.length, length = index, noCustomizer = !customizer;
        if (object == null) {
          return !length;
        }
        object = Object2(object);
        while (index--) {
          var data = matchData[index];
          if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index < length) {
          data = matchData[index];
          var key = data[0], objValue = object[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === undefined2 && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack();
            if (customizer) {
              var result2 = customizer(objValue, srcValue, key, object, source, stack);
            }
            if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
              return false;
            }
          }
        }
        return true;
      }
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function baseIsRegExp(value) {
        return isObjectLike(value) && baseGetTag(value) == regexpTag;
      }
      function baseIsSet(value) {
        return isObjectLike(value) && getTag(value) == setTag;
      }
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      function baseIteratee(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity;
        }
        if (typeof value == "object") {
          return isArray3(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result2 = [];
        for (var key in Object2(object)) {
          if (hasOwnProperty.call(object, key) && key != "constructor") {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseKeysIn(object) {
        if (!isObject(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result2 = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseLt(value, other) {
        return value < other;
      }
      function baseMap(collection, iteratee2) {
        var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value, key, collection2) {
          result2[++index] = iteratee2(value, key, collection2);
        });
        return result2;
      }
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source || baseIsMatch(object, source, matchData);
        };
      }
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object) {
          var objValue = get(object, path);
          return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      function baseMerge(object, source, srcIndex, customizer, stack) {
        if (object === source) {
          return;
        }
        baseFor(source, function(srcValue, key) {
          stack || (stack = new Stack());
          if (isObject(srcValue)) {
            baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
          } else {
            var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
            if (newValue === undefined2) {
              newValue = srcValue;
            }
            assignMergeValue(object, key, newValue);
          }
        }, keysIn);
      }
      function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
        if (stacked) {
          assignMergeValue(object, key, stacked);
          return;
        }
        var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
        var isCommon = newValue === undefined2;
        if (isCommon) {
          var isArr = isArray3(srcValue), isBuff = !isArr && isBuffer2(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
          newValue = srcValue;
          if (isArr || isBuff || isTyped) {
            if (isArray3(objValue)) {
              newValue = objValue;
            } else if (isArrayLikeObject(objValue)) {
              newValue = copyArray(objValue);
            } else if (isBuff) {
              isCommon = false;
              newValue = cloneBuffer(srcValue, true);
            } else if (isTyped) {
              isCommon = false;
              newValue = cloneTypedArray(srcValue, true);
            } else {
              newValue = [];
            }
          } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
            newValue = objValue;
            if (isArguments(objValue)) {
              newValue = toPlainObject(objValue);
            } else if (!isObject(objValue) || isFunction(objValue)) {
              newValue = initCloneObject(srcValue);
            }
          } else {
            isCommon = false;
          }
        }
        if (isCommon) {
          stack.set(srcValue, newValue);
          mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          stack["delete"](srcValue);
        }
        assignMergeValue(object, key, newValue);
      }
      function baseNth(array, n) {
        var length = array.length;
        if (!length) {
          return;
        }
        n += n < 0 ? length : 0;
        return isIndex(n, length) ? array[n] : undefined2;
      }
      function baseOrderBy(collection, iteratees, orders) {
        if (iteratees.length) {
          iteratees = arrayMap(iteratees, function(iteratee2) {
            if (isArray3(iteratee2)) {
              return function(value) {
                return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
              };
            }
            return iteratee2;
          });
        } else {
          iteratees = [identity];
        }
        var index = -1;
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        var result2 = baseMap(collection, function(value, key, collection2) {
          var criteria = arrayMap(iteratees, function(iteratee2) {
            return iteratee2(value);
          });
          return {criteria, index: ++index, value};
        });
        return baseSortBy(result2, function(object, other) {
          return compareMultiple(object, other, orders);
        });
      }
      function basePick(object, paths) {
        return basePickBy(object, paths, function(value, path) {
          return hasIn(object, path);
        });
      }
      function basePickBy(object, paths, predicate) {
        var index = -1, length = paths.length, result2 = {};
        while (++index < length) {
          var path = paths[index], value = baseGet(object, path);
          if (predicate(value, path)) {
            baseSet(result2, castPath(path, object), value);
          }
        }
        return result2;
      }
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      function basePullAll(array, values2, iteratee2, comparator) {
        var indexOf3 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
        if (array === values2) {
          values2 = copyArray(values2);
        }
        if (iteratee2) {
          seen = arrayMap(array, baseUnary(iteratee2));
        }
        while (++index < length) {
          var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
          while ((fromIndex = indexOf3(seen, computed, fromIndex, comparator)) > -1) {
            if (seen !== array) {
              splice.call(seen, fromIndex, 1);
            }
            splice.call(array, fromIndex, 1);
          }
        }
        return array;
      }
      function basePullAt(array, indexes) {
        var length = array ? indexes.length : 0, lastIndex = length - 1;
        while (length--) {
          var index = indexes[length];
          if (length == lastIndex || index !== previous) {
            var previous = index;
            if (isIndex(index)) {
              splice.call(array, index, 1);
            } else {
              baseUnset(array, index);
            }
          }
        }
        return array;
      }
      function baseRandom(lower, upper) {
        return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
      }
      function baseRange(start, end, step, fromRight) {
        var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
        while (length--) {
          result2[fromRight ? length : ++index] = start;
          start += step;
        }
        return result2;
      }
      function baseRepeat(string, n) {
        var result2 = "";
        if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
          return result2;
        }
        do {
          if (n % 2) {
            result2 += string;
          }
          n = nativeFloor(n / 2);
          if (n) {
            string += string;
          }
        } while (n);
        return result2;
      }
      function baseRest(func, start) {
        return setToString(overRest(func, start, identity), func + "");
      }
      function baseSample(collection) {
        return arraySample(values(collection));
      }
      function baseSampleSize(collection, n) {
        var array = values(collection);
        return shuffleSelf(array, baseClamp(n, 0, array.length));
      }
      function baseSet(object, path, value, customizer) {
        if (!isObject(object)) {
          return object;
        }
        path = castPath(path, object);
        var index = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index < length) {
          var key = toKey(path[index]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object;
          }
          if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined2;
            if (newValue === undefined2) {
              newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      var baseSetData = !metaMap ? identity : function(func, data) {
        metaMap.set(func, data);
        return func;
      };
      var baseSetToString = !defineProperty2 ? identity : function(func, string) {
        return defineProperty2(func, "toString", {
          configurable: true,
          enumerable: false,
          value: constant(string),
          writable: true
        });
      };
      function baseShuffle(collection) {
        return shuffleSelf(values(collection));
      }
      function baseSlice(array, start, end) {
        var index = -1, length = array.length;
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end > length ? length : end;
        if (end < 0) {
          end += length;
        }
        length = start > end ? 0 : end - start >>> 0;
        start >>>= 0;
        var result2 = Array2(length);
        while (++index < length) {
          result2[index] = array[index + start];
        }
        return result2;
      }
      function baseSome(collection, predicate) {
        var result2;
        baseEach(collection, function(value, index, collection2) {
          result2 = predicate(value, index, collection2);
          return !result2;
        });
        return !!result2;
      }
      function baseSortedIndex(array, value, retHighest) {
        var low = 0, high = array == null ? low : array.length;
        if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
          while (low < high) {
            var mid = low + high >>> 1, computed = array[mid];
            if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return high;
        }
        return baseSortedIndexBy(array, value, identity, retHighest);
      }
      function baseSortedIndexBy(array, value, iteratee2, retHighest) {
        var low = 0, high = array == null ? 0 : array.length;
        if (high === 0) {
          return 0;
        }
        value = iteratee2(value);
        var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
        while (low < high) {
          var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
          if (valIsNaN) {
            var setLow = retHighest || othIsReflexive;
          } else if (valIsUndefined) {
            setLow = othIsReflexive && (retHighest || othIsDefined);
          } else if (valIsNull) {
            setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
          } else if (valIsSymbol) {
            setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
          } else if (othIsNull || othIsSymbol) {
            setLow = false;
          } else {
            setLow = retHighest ? computed <= value : computed < value;
          }
          if (setLow) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return nativeMin(high, MAX_ARRAY_INDEX);
      }
      function baseSortedUniq(array, iteratee2) {
        var index = -1, length = array.length, resIndex = 0, result2 = [];
        while (++index < length) {
          var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
          if (!index || !eq(computed, seen)) {
            var seen = computed;
            result2[resIndex++] = value === 0 ? 0 : value;
          }
        }
        return result2;
      }
      function baseToNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        return +value;
      }
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray3(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
      }
      function baseUniq(array, iteratee2, comparator) {
        var index = -1, includes3 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
        if (comparator) {
          isCommon = false;
          includes3 = arrayIncludesWith;
        } else if (length >= LARGE_ARRAY_SIZE) {
          var set2 = iteratee2 ? null : createSet(array);
          if (set2) {
            return setToArray(set2);
          }
          isCommon = false;
          includes3 = cacheHas;
          seen = new SetCache();
        } else {
          seen = iteratee2 ? [] : result2;
        }
        outer:
          while (++index < length) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed === computed) {
              var seenIndex = seen.length;
              while (seenIndex--) {
                if (seen[seenIndex] === computed) {
                  continue outer;
                }
              }
              if (iteratee2) {
                seen.push(computed);
              }
              result2.push(value);
            } else if (!includes3(seen, computed, comparator)) {
              if (seen !== result2) {
                seen.push(computed);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseUnset(object, path) {
        path = castPath(path, object);
        object = parent(object, path);
        return object == null || delete object[toKey(last(path))];
      }
      function baseUpdate(object, path, updater, customizer) {
        return baseSet(object, path, updater(baseGet(object, path)), customizer);
      }
      function baseWhile(array, predicate, isDrop, fromRight) {
        var length = array.length, index = fromRight ? length : -1;
        while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
        }
        return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
      }
      function baseWrapperValue(value, actions) {
        var result2 = value;
        if (result2 instanceof LazyWrapper) {
          result2 = result2.value();
        }
        return arrayReduce(actions, function(result3, action) {
          return action.func.apply(action.thisArg, arrayPush([result3], action.args));
        }, result2);
      }
      function baseXor(arrays, iteratee2, comparator) {
        var length = arrays.length;
        if (length < 2) {
          return length ? baseUniq(arrays[0]) : [];
        }
        var index = -1, result2 = Array2(length);
        while (++index < length) {
          var array = arrays[index], othIndex = -1;
          while (++othIndex < length) {
            if (othIndex != index) {
              result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
            }
          }
        }
        return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
      }
      function baseZipObject(props2, values2, assignFunc) {
        var index = -1, length = props2.length, valsLength = values2.length, result2 = {};
        while (++index < length) {
          var value = index < valsLength ? values2[index] : undefined2;
          assignFunc(result2, props2[index], value);
        }
        return result2;
      }
      function castArrayLikeObject(value) {
        return isArrayLikeObject(value) ? value : [];
      }
      function castFunction(value) {
        return typeof value == "function" ? value : identity;
      }
      function castPath(value, object) {
        if (isArray3(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString4(value));
      }
      var castRest = baseRest;
      function castSlice(array, start, end) {
        var length = array.length;
        end = end === undefined2 ? length : end;
        return !start && end >= length ? array : baseSlice(array, start, end);
      }
      var clearTimeout3 = ctxClearTimeout || function(id) {
        return root.clearTimeout(id);
      };
      function cloneBuffer(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length, result2 = allocUnsafe2 ? allocUnsafe2(length) : new buffer.constructor(length);
        buffer.copy(result2);
        return result2;
      }
      function cloneArrayBuffer(arrayBuffer2) {
        var result2 = new arrayBuffer2.constructor(arrayBuffer2.byteLength);
        new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer2));
        return result2;
      }
      function cloneDataView(dataView, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
        return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
      }
      function cloneRegExp(regexp) {
        var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
        result2.lastIndex = regexp.lastIndex;
        return result2;
      }
      function cloneSymbol(symbol) {
        return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
      }
      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      function compareAscending(value, other) {
        if (value !== other) {
          var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
          var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
          if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
            return 1;
          }
          if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
            return -1;
          }
        }
        return 0;
      }
      function compareMultiple(object, other, orders) {
        var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
        while (++index < length) {
          var result2 = compareAscending(objCriteria[index], othCriteria[index]);
          if (result2) {
            if (index >= ordersLength) {
              return result2;
            }
            var order = orders[index];
            return result2 * (order == "desc" ? -1 : 1);
          }
        }
        return object.index - other.index;
      }
      function composeArgs(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
        while (++leftIndex < leftLength) {
          result2[leftIndex] = partials[leftIndex];
        }
        while (++argsIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[holders[argsIndex]] = args[argsIndex];
          }
        }
        while (rangeLength--) {
          result2[leftIndex++] = args[argsIndex++];
        }
        return result2;
      }
      function composeArgsRight(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
        while (++argsIndex < rangeLength) {
          result2[argsIndex] = args[argsIndex];
        }
        var offset = argsIndex;
        while (++rightIndex < rightLength) {
          result2[offset + rightIndex] = partials[rightIndex];
        }
        while (++holdersIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[offset + holders[holdersIndex]] = args[argsIndex++];
          }
        }
        return result2;
      }
      function copyArray(source, array) {
        var index = -1, length = source.length;
        array || (array = Array2(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
      function copyObject(source, props2, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index = -1, length = props2.length;
        while (++index < length) {
          var key = props2[index];
          var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
          if (newValue === undefined2) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue(object, key, newValue);
          } else {
            assignValue(object, key, newValue);
          }
        }
        return object;
      }
      function copySymbols(source, object) {
        return copyObject(source, getSymbols(source), object);
      }
      function copySymbolsIn(source, object) {
        return copyObject(source, getSymbolsIn(source), object);
      }
      function createAggregator(setter, initializer) {
        return function(collection, iteratee2) {
          var func = isArray3(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
          return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
        };
      }
      function createAssigner(assigner) {
        return baseRest(function(object, sources) {
          var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
          customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined2 : customizer;
            length = 1;
          }
          object = Object2(object);
          while (++index < length) {
            var source = sources[index];
            if (source) {
              assigner(object, source, index, customizer);
            }
          }
          return object;
        });
      }
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee2) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike(collection)) {
            return eachFunc(collection, iteratee2);
          }
          var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
          while (fromRight ? index-- : ++index < length) {
            if (iteratee2(iterable[index], index, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      function createBaseFor(fromRight) {
        return function(object, iteratee2, keysFunc) {
          var index = -1, iterable = Object2(object), props2 = keysFunc(object), length = props2.length;
          while (length--) {
            var key = props2[fromRight ? length : ++index];
            if (iteratee2(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      function createBind(func, bitmask, thisArg) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          return fn.apply(isBind ? thisArg : this, arguments);
        }
        return wrapper;
      }
      function createCaseFirst(methodName) {
        return function(string) {
          string = toString4(string);
          var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
          var chr = strSymbols ? strSymbols[0] : string.charAt(0);
          var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
          return chr[methodName]() + trailing;
        };
      }
      function createCompounder(callback) {
        return function(string) {
          return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
        };
      }
      function createCtor(Ctor) {
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return new Ctor();
            case 1:
              return new Ctor(args[0]);
            case 2:
              return new Ctor(args[0], args[1]);
            case 3:
              return new Ctor(args[0], args[1], args[2]);
            case 4:
              return new Ctor(args[0], args[1], args[2], args[3]);
            case 5:
              return new Ctor(args[0], args[1], args[2], args[3], args[4]);
            case 6:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
            case 7:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
          }
          var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
          return isObject(result2) ? result2 : thisBinding;
        };
      }
      function createCurry(func, bitmask, arity) {
        var Ctor = createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
          while (index--) {
            args[index] = arguments[index];
          }
          var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
          length -= holders.length;
          if (length < arity) {
            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined2, args, holders, undefined2, undefined2, arity - length);
          }
          var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          return apply(fn, this, args);
        }
        return wrapper;
      }
      function createFind(findIndexFunc) {
        return function(collection, predicate, fromIndex) {
          var iterable = Object2(collection);
          if (!isArrayLike(collection)) {
            var iteratee2 = getIteratee(predicate, 3);
            collection = keys2(collection);
            predicate = function(key) {
              return iteratee2(iterable[key], key, iterable);
            };
          }
          var index = findIndexFunc(collection, predicate, fromIndex);
          return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
        };
      }
      function createFlow(fromRight) {
        return flatRest(function(funcs) {
          var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
          if (fromRight) {
            funcs.reverse();
          }
          while (index--) {
            var func = funcs[index];
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            if (prereq && !wrapper && getFuncName(func) == "wrapper") {
              var wrapper = new LodashWrapper([], true);
            }
          }
          index = wrapper ? index : length;
          while (++index < length) {
            func = funcs[index];
            var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
            if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
              wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            } else {
              wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
            }
          }
          return function() {
            var args = arguments, value = args[0];
            if (wrapper && args.length == 1 && isArray3(value)) {
              return wrapper.plant(value).value();
            }
            var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
            while (++index2 < length) {
              result2 = funcs[index2].call(this, result2);
            }
            return result2;
          };
        });
      }
      function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
        var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index = length;
          while (index--) {
            args[index] = arguments[index];
          }
          if (isCurried) {
            var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
          }
          if (partials) {
            args = composeArgs(args, partials, holders, isCurried);
          }
          if (partialsRight) {
            args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
          }
          length -= holdersCount;
          if (isCurried && length < arity) {
            var newHolders = replaceHolders(args, placeholder);
            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary2, arity - length);
          }
          var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
          length = args.length;
          if (argPos) {
            args = reorder(args, argPos);
          } else if (isFlip && length > 1) {
            args.reverse();
          }
          if (isAry && ary2 < length) {
            args.length = ary2;
          }
          if (this && this !== root && this instanceof wrapper) {
            fn = Ctor || createCtor(fn);
          }
          return fn.apply(thisBinding, args);
        }
        return wrapper;
      }
      function createInverter(setter, toIteratee) {
        return function(object, iteratee2) {
          return baseInverter(object, setter, toIteratee(iteratee2), {});
        };
      }
      function createMathOperation(operator, defaultValue) {
        return function(value, other) {
          var result2;
          if (value === undefined2 && other === undefined2) {
            return defaultValue;
          }
          if (value !== undefined2) {
            result2 = value;
          }
          if (other !== undefined2) {
            if (result2 === undefined2) {
              return other;
            }
            if (typeof value == "string" || typeof other == "string") {
              value = baseToString(value);
              other = baseToString(other);
            } else {
              value = baseToNumber(value);
              other = baseToNumber(other);
            }
            result2 = operator(value, other);
          }
          return result2;
        };
      }
      function createOver(arrayFunc) {
        return flatRest(function(iteratees) {
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          return baseRest(function(args) {
            var thisArg = this;
            return arrayFunc(iteratees, function(iteratee2) {
              return apply(iteratee2, thisArg, args);
            });
          });
        });
      }
      function createPadding(length, chars2) {
        chars2 = chars2 === undefined2 ? " " : baseToString(chars2);
        var charsLength = chars2.length;
        if (charsLength < 2) {
          return charsLength ? baseRepeat(chars2, length) : chars2;
        }
        var result2 = baseRepeat(chars2, nativeCeil(length / stringSize(chars2)));
        return hasUnicode(chars2) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
      }
      function createPartial(func, bitmask, thisArg, partials) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          while (++leftIndex < leftLength) {
            args[leftIndex] = partials[leftIndex];
          }
          while (argsLength--) {
            args[leftIndex++] = arguments[++argsIndex];
          }
          return apply(fn, isBind ? thisArg : this, args);
        }
        return wrapper;
      }
      function createRange2(fromRight) {
        return function(start, end, step) {
          if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
            end = step = undefined2;
          }
          start = toFinite(start);
          if (end === undefined2) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
          return baseRange(start, end, step, fromRight);
        };
      }
      function createRelationalOperation(operator) {
        return function(value, other) {
          if (!(typeof value == "string" && typeof other == "string")) {
            value = toNumber(value);
            other = toNumber(other);
          }
          return operator(value, other);
        };
      }
      function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
        var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
        bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
        bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
        if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
          bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
        }
        var newData = [
          func,
          bitmask,
          thisArg,
          newPartials,
          newHolders,
          newPartialsRight,
          newHoldersRight,
          argPos,
          ary2,
          arity
        ];
        var result2 = wrapFunc.apply(undefined2, newData);
        if (isLaziable(func)) {
          setData(result2, newData);
        }
        result2.placeholder = placeholder;
        return setWrapToString(result2, func, bitmask);
      }
      function createRound(methodName) {
        var func = Math2[methodName];
        return function(number, precision) {
          number = toNumber(number);
          precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
          if (precision && nativeIsFinite(number)) {
            var pair = (toString4(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
            pair = (toString4(value) + "e").split("e");
            return +(pair[0] + "e" + (+pair[1] - precision));
          }
          return func(number);
        };
      }
      var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
        return new Set2(values2);
      };
      function createToPairs(keysFunc) {
        return function(object) {
          var tag = getTag(object);
          if (tag == mapTag) {
            return mapToArray(object);
          }
          if (tag == setTag) {
            return setToPairs(object);
          }
          return baseToPairs(object, keysFunc(object));
        };
      }
      function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
        var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
        if (!isBindKey && typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        var length = partials ? partials.length : 0;
        if (!length) {
          bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
          partials = holders = undefined2;
        }
        ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
        arity = arity === undefined2 ? arity : toInteger(arity);
        length -= holders ? holders.length : 0;
        if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
          var partialsRight = partials, holdersRight = holders;
          partials = holders = undefined2;
        }
        var data = isBindKey ? undefined2 : getData(func);
        var newData = [
          func,
          bitmask,
          thisArg,
          partials,
          holders,
          partialsRight,
          holdersRight,
          argPos,
          ary2,
          arity
        ];
        if (data) {
          mergeData(newData, data);
        }
        func = newData[0];
        bitmask = newData[1];
        thisArg = newData[2];
        partials = newData[3];
        holders = newData[4];
        arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
        if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
          bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
        }
        if (!bitmask || bitmask == WRAP_BIND_FLAG) {
          var result2 = createBind(func, bitmask, thisArg);
        } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
          result2 = createCurry(func, bitmask, arity);
        } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
          result2 = createPartial(func, bitmask, thisArg, partials);
        } else {
          result2 = createHybrid.apply(undefined2, newData);
        }
        var setter = data ? baseSetData : setData;
        return setWrapToString(setter(result2, newData), func, bitmask);
      }
      function customDefaultsAssignIn(objValue, srcValue, key, object) {
        if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
          return srcValue;
        }
        return objValue;
      }
      function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
        if (isObject(objValue) && isObject(srcValue)) {
          stack.set(srcValue, objValue);
          baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
          stack["delete"](srcValue);
        }
        return objValue;
      }
      function customOmitClone(value) {
        return isPlainObject(value) ? undefined2 : value;
      }
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
        stack.set(array, other);
        stack.set(other, array);
        while (++index < arrLength) {
          var arrValue = array[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
          }
          if (compared !== undefined2) {
            if (compared) {
              continue;
            }
            result2 = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result2 = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result2 = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result2;
      }
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result2;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result2 = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result2 = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result2 && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result2 = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result2;
      }
      function flatRest(func) {
        return setToString(overRest(func, undefined2, flatten2), func + "");
      }
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys2, getSymbols);
      }
      function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn, getSymbolsIn);
      }
      var getData = !metaMap ? noop : function(func) {
        return metaMap.get(func);
      };
      function getFuncName(func) {
        var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
        while (length--) {
          var data = array[length], otherFunc = data.func;
          if (otherFunc == null || otherFunc == func) {
            return data.name;
          }
        }
        return result2;
      }
      function getHolder(func) {
        var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
        return object.placeholder;
      }
      function getIteratee() {
        var result2 = lodash.iteratee || iteratee;
        result2 = result2 === iteratee ? baseIteratee : result2;
        return arguments.length ? result2(arguments[0], arguments[1]) : result2;
      }
      function getMapData(map2, key) {
        var data = map2.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      function getMatchData(object) {
        var result2 = keys2(object), length = result2.length;
        while (length--) {
          var key = result2[length], value = object[key];
          result2[length] = [key, value, isStrictComparable(value)];
        }
        return result2;
      }
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : undefined2;
      }
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = undefined2;
          var unmasked = true;
        } catch (e) {
        }
        var result2 = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result2;
      }
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object2(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
        var result2 = [];
        while (object) {
          arrayPush(result2, getSymbols(object));
          object = getPrototype(object);
        }
        return result2;
      };
      var getTag = baseGetTag;
      if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
        getTag = function(value) {
          var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result2;
        };
      }
      function getView(start, end, transforms) {
        var index = -1, length = transforms.length;
        while (++index < length) {
          var data = transforms[index], size2 = data.size;
          switch (data.type) {
            case "drop":
              start += size2;
              break;
            case "dropRight":
              end -= size2;
              break;
            case "take":
              end = nativeMin(end, start + size2);
              break;
            case "takeRight":
              start = nativeMax(start, end - size2);
              break;
          }
        }
        return {start, end};
      }
      function getWrapDetails(source) {
        var match = source.match(reWrapDetails);
        return match ? match[1].split(reSplitDetails) : [];
      }
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index = -1, length = path.length, result2 = false;
        while (++index < length) {
          var key = toKey(path[index]);
          if (!(result2 = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result2 || ++index != length) {
          return result2;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray3(object) || isArguments(object));
      }
      function initCloneArray(array) {
        var length = array.length, result2 = new array.constructor(length);
        if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
          result2.index = array.index;
          result2.input = array.input;
        }
        return result2;
      }
      function initCloneObject(object) {
        return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
      }
      function initCloneByTag(object, tag, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
          case arrayBufferTag:
            return cloneArrayBuffer(object);
          case boolTag:
          case dateTag:
            return new Ctor(+object);
          case dataViewTag:
            return cloneDataView(object, isDeep);
          case float32Tag:
          case float64Tag:
          case int8Tag:
          case int16Tag:
          case int32Tag:
          case uint8Tag:
          case uint8ClampedTag:
          case uint16Tag:
          case uint32Tag:
            return cloneTypedArray(object, isDeep);
          case mapTag:
            return new Ctor();
          case numberTag:
          case stringTag:
            return new Ctor(object);
          case regexpTag:
            return cloneRegExp(object);
          case setTag:
            return new Ctor();
          case symbolTag:
            return cloneSymbol(object);
        }
      }
      function insertWrapDetails(source, details) {
        var length = details.length;
        if (!length) {
          return source;
        }
        var lastIndex = length - 1;
        details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
        details = details.join(length > 2 ? ", " : " ");
        return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
      }
      function isFlattenable(value) {
        return isArray3(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      function isIndex(value, length) {
        var type2 = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type2 == "number" || type2 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function isIterateeCall(value, index, object) {
        if (!isObject(object)) {
          return false;
        }
        var type2 = typeof index;
        if (type2 == "number" ? isArrayLike(object) && isIndex(index, object.length) : type2 == "string" && index in object) {
          return eq(object[index], value);
        }
        return false;
      }
      function isKey(value, object) {
        if (isArray3(value)) {
          return false;
        }
        var type2 = typeof value;
        if (type2 == "number" || type2 == "symbol" || type2 == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
      }
      function isKeyable(value) {
        var type2 = typeof value;
        return type2 == "string" || type2 == "number" || type2 == "symbol" || type2 == "boolean" ? value !== "__proto__" : value === null;
      }
      function isLaziable(func) {
        var funcName = getFuncName(func), other = lodash[funcName];
        if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
          return false;
        }
        if (func === other) {
          return true;
        }
        var data = getData(other);
        return !!data && func === data[0];
      }
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      var isMaskable = coreJsData ? isFunction : stubFalse;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      function isStrictComparable(value) {
        return value === value && !isObject(value);
      }
      function matchesStrictComparable(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
        };
      }
      function memoizeCapped(func) {
        var result2 = memoize(func, function(key) {
          if (cache2.size === MAX_MEMOIZE_SIZE) {
            cache2.clear();
          }
          return key;
        });
        var cache2 = result2.cache;
        return result2;
      }
      function mergeData(data, source) {
        var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
        var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
        if (!(isCommon || isCombo)) {
          return data;
        }
        if (srcBitmask & WRAP_BIND_FLAG) {
          data[2] = source[2];
          newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
        }
        var value = source[3];
        if (value) {
          var partials = data[3];
          data[3] = partials ? composeArgs(partials, value, source[4]) : value;
          data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
        }
        value = source[5];
        if (value) {
          partials = data[5];
          data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
          data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
        }
        value = source[7];
        if (value) {
          data[7] = value;
        }
        if (srcBitmask & WRAP_ARY_FLAG) {
          data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
        }
        if (data[9] == null) {
          data[9] = source[9];
        }
        data[0] = source[0];
        data[1] = newBitmask;
        return data;
      }
      function nativeKeysIn(object) {
        var result2 = [];
        if (object != null) {
          for (var key in Object2(object)) {
            result2.push(key);
          }
        }
        return result2;
      }
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      function overRest(func, start, transform2) {
        start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
          while (++index < length) {
            array[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array2(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform2(array);
          return apply(func, this, otherArgs);
        };
      }
      function parent(object, path) {
        return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
      }
      function reorder(array, indexes) {
        var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
        while (length--) {
          var index = indexes[length];
          array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
        }
        return array;
      }
      function safeGet(object, key) {
        if (key === "constructor" && typeof object[key] === "function") {
          return;
        }
        if (key == "__proto__") {
          return;
        }
        return object[key];
      }
      var setData = shortOut(baseSetData);
      var setTimeout3 = ctxSetTimeout || function(func, wait) {
        return root.setTimeout(func, wait);
      };
      var setToString = shortOut(baseSetToString);
      function setWrapToString(wrapper, reference, bitmask) {
        var source = reference + "";
        return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
      }
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(undefined2, arguments);
        };
      }
      function shuffleSelf(array, size2) {
        var index = -1, length = array.length, lastIndex = length - 1;
        size2 = size2 === undefined2 ? length : size2;
        while (++index < size2) {
          var rand = baseRandom(index, lastIndex), value = array[rand];
          array[rand] = array[index];
          array[index] = value;
        }
        array.length = size2;
        return array;
      }
      var stringToPath = memoizeCapped(function(string) {
        var result2 = [];
        if (string.charCodeAt(0) === 46) {
          result2.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result2;
      });
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
      }
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      function updateWrapDetails(details, bitmask) {
        arrayEach(wrapFlags, function(pair) {
          var value = "_." + pair[0];
          if (bitmask & pair[1] && !arrayIncludes(details, value)) {
            details.push(value);
          }
        });
        return details.sort();
      }
      function wrapperClone(wrapper) {
        if (wrapper instanceof LazyWrapper) {
          return wrapper.clone();
        }
        var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result2.__actions__ = copyArray(wrapper.__actions__);
        result2.__index__ = wrapper.__index__;
        result2.__values__ = wrapper.__values__;
        return result2;
      }
      function chunk(array, size2, guard) {
        if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
          size2 = 1;
        } else {
          size2 = nativeMax(toInteger(size2), 0);
        }
        var length = array == null ? 0 : array.length;
        if (!length || size2 < 1) {
          return [];
        }
        var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
        while (index < length) {
          result2[resIndex++] = baseSlice(array, index, index += size2);
        }
        return result2;
      }
      function compact(array) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
        while (++index < length) {
          var value = array[index];
          if (value) {
            result2[resIndex++] = value;
          }
        }
        return result2;
      }
      function concat3() {
        var length = arguments.length;
        if (!length) {
          return [];
        }
        var args = Array2(length - 1), array = arguments[0], index = length;
        while (index--) {
          args[index - 1] = arguments[index];
        }
        return arrayPush(isArray3(array) ? copyArray(array) : [array], baseFlatten(args, 1));
      }
      var difference = baseRest(function(array, values2) {
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
      });
      var differenceBy = baseRest(function(array, values2) {
        var iteratee2 = last(values2);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined2;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
      });
      var differenceWith = baseRest(function(array, values2) {
        var comparator = last(values2);
        if (isArrayLikeObject(comparator)) {
          comparator = undefined2;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
      });
      function drop(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined2 ? 1 : toInteger(n);
        return baseSlice(array, n < 0 ? 0 : n, length);
      }
      function dropRight(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined2 ? 1 : toInteger(n);
        n = length - n;
        return baseSlice(array, 0, n < 0 ? 0 : n);
      }
      function dropRightWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
      }
      function dropWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
      }
      function fill2(array, value, start, end) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
          start = 0;
          end = length;
        }
        return baseFill(array, value, start, end);
      }
      function findIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax(length + index, 0);
        }
        return baseFindIndex(array, getIteratee(predicate, 3), index);
      }
      function findLastIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = length - 1;
        if (fromIndex !== undefined2) {
          index = toInteger(fromIndex);
          index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
        }
        return baseFindIndex(array, getIteratee(predicate, 3), index, true);
      }
      function flatten2(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, 1) : [];
      }
      function flattenDeep(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, INFINITY) : [];
      }
      function flattenDepth(array, depth) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        depth = depth === undefined2 ? 1 : toInteger(depth);
        return baseFlatten(array, depth);
      }
      function fromPairs(pairs) {
        var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
        while (++index < length) {
          var pair = pairs[index];
          result2[pair[0]] = pair[1];
        }
        return result2;
      }
      function head(array) {
        return array && array.length ? array[0] : undefined2;
      }
      function indexOf2(array, value, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax(length + index, 0);
        }
        return baseIndexOf(array, value, index);
      }
      function initial(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseSlice(array, 0, -1) : [];
      }
      var intersection = baseRest(function(arrays) {
        var mapped = arrayMap(arrays, castArrayLikeObject);
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
      });
      var intersectionBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
        if (iteratee2 === last(mapped)) {
          iteratee2 = undefined2;
        } else {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
      });
      var intersectionWith = baseRest(function(arrays) {
        var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
        comparator = typeof comparator == "function" ? comparator : undefined2;
        if (comparator) {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
      });
      function join(array, separator) {
        return array == null ? "" : nativeJoin.call(array, separator);
      }
      function last(array) {
        var length = array == null ? 0 : array.length;
        return length ? array[length - 1] : undefined2;
      }
      function lastIndexOf2(array, value, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = length;
        if (fromIndex !== undefined2) {
          index = toInteger(fromIndex);
          index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
        }
        return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
      }
      function nth(array, n) {
        return array && array.length ? baseNth(array, toInteger(n)) : undefined2;
      }
      var pull = baseRest(pullAll);
      function pullAll(array, values2) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
      }
      function pullAllBy(array, values2, iteratee2) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
      }
      function pullAllWith(array, values2, comparator) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
      }
      var pullAt = flatRest(function(array, indexes) {
        var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
        basePullAt(array, arrayMap(indexes, function(index) {
          return isIndex(index, length) ? +index : index;
        }).sort(compareAscending));
        return result2;
      });
      function remove(array, predicate) {
        var result2 = [];
        if (!(array && array.length)) {
          return result2;
        }
        var index = -1, indexes = [], length = array.length;
        predicate = getIteratee(predicate, 3);
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result2.push(value);
            indexes.push(index);
          }
        }
        basePullAt(array, indexes);
        return result2;
      }
      function reverse(array) {
        return array == null ? array : nativeReverse.call(array);
      }
      function slice3(array, start, end) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
          start = 0;
          end = length;
        } else {
          start = start == null ? 0 : toInteger(start);
          end = end === undefined2 ? length : toInteger(end);
        }
        return baseSlice(array, start, end);
      }
      function sortedIndex(array, value) {
        return baseSortedIndex(array, value);
      }
      function sortedIndexBy(array, value, iteratee2) {
        return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
      }
      function sortedIndexOf(array, value) {
        var length = array == null ? 0 : array.length;
        if (length) {
          var index = baseSortedIndex(array, value);
          if (index < length && eq(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function sortedLastIndex(array, value) {
        return baseSortedIndex(array, value, true);
      }
      function sortedLastIndexBy(array, value, iteratee2) {
        return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
      }
      function sortedLastIndexOf(array, value) {
        var length = array == null ? 0 : array.length;
        if (length) {
          var index = baseSortedIndex(array, value, true) - 1;
          if (eq(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function sortedUniq(array) {
        return array && array.length ? baseSortedUniq(array) : [];
      }
      function sortedUniqBy(array, iteratee2) {
        return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
      }
      function tail(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseSlice(array, 1, length) : [];
      }
      function take(array, n, guard) {
        if (!(array && array.length)) {
          return [];
        }
        n = guard || n === undefined2 ? 1 : toInteger(n);
        return baseSlice(array, 0, n < 0 ? 0 : n);
      }
      function takeRight(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined2 ? 1 : toInteger(n);
        n = length - n;
        return baseSlice(array, n < 0 ? 0 : n, length);
      }
      function takeRightWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
      }
      function takeWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
      }
      var union = baseRest(function(arrays) {
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
      });
      var unionBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined2;
        }
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
      });
      var unionWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined2;
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
      });
      function uniq(array) {
        return array && array.length ? baseUniq(array) : [];
      }
      function uniqBy(array, iteratee2) {
        return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
      }
      function uniqWith(array, comparator) {
        comparator = typeof comparator == "function" ? comparator : undefined2;
        return array && array.length ? baseUniq(array, undefined2, comparator) : [];
      }
      function unzip(array) {
        if (!(array && array.length)) {
          return [];
        }
        var length = 0;
        array = arrayFilter(array, function(group) {
          if (isArrayLikeObject(group)) {
            length = nativeMax(group.length, length);
            return true;
          }
        });
        return baseTimes(length, function(index) {
          return arrayMap(array, baseProperty(index));
        });
      }
      function unzipWith(array, iteratee2) {
        if (!(array && array.length)) {
          return [];
        }
        var result2 = unzip(array);
        if (iteratee2 == null) {
          return result2;
        }
        return arrayMap(result2, function(group) {
          return apply(iteratee2, undefined2, group);
        });
      }
      var without = baseRest(function(array, values2) {
        return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
      });
      var xor = baseRest(function(arrays) {
        return baseXor(arrayFilter(arrays, isArrayLikeObject));
      });
      var xorBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined2;
        }
        return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
      });
      var xorWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined2;
        return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
      });
      var zip = baseRest(unzip);
      function zipObject(props2, values2) {
        return baseZipObject(props2 || [], values2 || [], assignValue);
      }
      function zipObjectDeep(props2, values2) {
        return baseZipObject(props2 || [], values2 || [], baseSet);
      }
      var zipWith = baseRest(function(arrays) {
        var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
        iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
        return unzipWith(arrays, iteratee2);
      });
      function chain(value) {
        var result2 = lodash(value);
        result2.__chain__ = true;
        return result2;
      }
      function tap(value, interceptor) {
        interceptor(value);
        return value;
      }
      function thru(value, interceptor) {
        return interceptor(value);
      }
      var wrapperAt = flatRest(function(paths) {
        var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
          return baseAt(object, paths);
        };
        if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
          return this.thru(interceptor);
        }
        value = value.slice(start, +start + (length ? 1 : 0));
        value.__actions__.push({
          func: thru,
          args: [interceptor],
          thisArg: undefined2
        });
        return new LodashWrapper(value, this.__chain__).thru(function(array) {
          if (length && !array.length) {
            array.push(undefined2);
          }
          return array;
        });
      });
      function wrapperChain() {
        return chain(this);
      }
      function wrapperCommit() {
        return new LodashWrapper(this.value(), this.__chain__);
      }
      function wrapperNext() {
        if (this.__values__ === undefined2) {
          this.__values__ = toArray(this.value());
        }
        var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
        return {done, value};
      }
      function wrapperToIterator() {
        return this;
      }
      function wrapperPlant(value) {
        var result2, parent2 = this;
        while (parent2 instanceof baseLodash) {
          var clone2 = wrapperClone(parent2);
          clone2.__index__ = 0;
          clone2.__values__ = undefined2;
          if (result2) {
            previous.__wrapped__ = clone2;
          } else {
            result2 = clone2;
          }
          var previous = clone2;
          parent2 = parent2.__wrapped__;
        }
        previous.__wrapped__ = value;
        return result2;
      }
      function wrapperReverse() {
        var value = this.__wrapped__;
        if (value instanceof LazyWrapper) {
          var wrapped = value;
          if (this.__actions__.length) {
            wrapped = new LazyWrapper(this);
          }
          wrapped = wrapped.reverse();
          wrapped.__actions__.push({
            func: thru,
            args: [reverse],
            thisArg: undefined2
          });
          return new LodashWrapper(wrapped, this.__chain__);
        }
        return this.thru(reverse);
      }
      function wrapperValue() {
        return baseWrapperValue(this.__wrapped__, this.__actions__);
      }
      var countBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty.call(result2, key)) {
          ++result2[key];
        } else {
          baseAssignValue(result2, key, 1);
        }
      });
      function every(collection, predicate, guard) {
        var func = isArray3(collection) ? arrayEvery : baseEvery;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined2;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      function filter(collection, predicate) {
        var func = isArray3(collection) ? arrayFilter : baseFilter;
        return func(collection, getIteratee(predicate, 3));
      }
      var find = createFind(findIndex);
      var findLast = createFind(findLastIndex);
      function flatMap(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), 1);
      }
      function flatMapDeep(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), INFINITY);
      }
      function flatMapDepth(collection, iteratee2, depth) {
        depth = depth === undefined2 ? 1 : toInteger(depth);
        return baseFlatten(map(collection, iteratee2), depth);
      }
      function forEach(collection, iteratee2) {
        var func = isArray3(collection) ? arrayEach : baseEach;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function forEachRight(collection, iteratee2) {
        var func = isArray3(collection) ? arrayEachRight : baseEachRight;
        return func(collection, getIteratee(iteratee2, 3));
      }
      var groupBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty.call(result2, key)) {
          result2[key].push(value);
        } else {
          baseAssignValue(result2, key, [value]);
        }
      });
      function includes2(collection, value, fromIndex, guard) {
        collection = isArrayLike(collection) ? collection : values(collection);
        fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
        var length = collection.length;
        if (fromIndex < 0) {
          fromIndex = nativeMax(length + fromIndex, 0);
        }
        return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
      }
      var invokeMap = baseRest(function(collection, path, args) {
        var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value) {
          result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
        });
        return result2;
      });
      var keyBy = createAggregator(function(result2, value, key) {
        baseAssignValue(result2, key, value);
      });
      function map(collection, iteratee2) {
        var func = isArray3(collection) ? arrayMap : baseMap;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function orderBy2(collection, iteratees, orders, guard) {
        if (collection == null) {
          return [];
        }
        if (!isArray3(iteratees)) {
          iteratees = iteratees == null ? [] : [iteratees];
        }
        orders = guard ? undefined2 : orders;
        if (!isArray3(orders)) {
          orders = orders == null ? [] : [orders];
        }
        return baseOrderBy(collection, iteratees, orders);
      }
      var partition = createAggregator(function(result2, value, key) {
        result2[key ? 0 : 1].push(value);
      }, function() {
        return [[], []];
      });
      function reduce(collection, iteratee2, accumulator) {
        var func = isArray3(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
      }
      function reduceRight(collection, iteratee2, accumulator) {
        var func = isArray3(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
      }
      function reject(collection, predicate) {
        var func = isArray3(collection) ? arrayFilter : baseFilter;
        return func(collection, negate(getIteratee(predicate, 3)));
      }
      function sample(collection) {
        var func = isArray3(collection) ? arraySample : baseSample;
        return func(collection);
      }
      function sampleSize(collection, n, guard) {
        if (guard ? isIterateeCall(collection, n, guard) : n === undefined2) {
          n = 1;
        } else {
          n = toInteger(n);
        }
        var func = isArray3(collection) ? arraySampleSize : baseSampleSize;
        return func(collection, n);
      }
      function shuffle(collection) {
        var func = isArray3(collection) ? arrayShuffle : baseShuffle;
        return func(collection);
      }
      function size(collection) {
        if (collection == null) {
          return 0;
        }
        if (isArrayLike(collection)) {
          return isString(collection) ? stringSize(collection) : collection.length;
        }
        var tag = getTag(collection);
        if (tag == mapTag || tag == setTag) {
          return collection.size;
        }
        return baseKeys(collection).length;
      }
      function some(collection, predicate, guard) {
        var func = isArray3(collection) ? arraySome : baseSome;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined2;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      var sortBy = baseRest(function(collection, iteratees) {
        if (collection == null) {
          return [];
        }
        var length = iteratees.length;
        if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
          iteratees = [];
        } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
          iteratees = [iteratees[0]];
        }
        return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
      });
      var now = ctxNow || function() {
        return root.Date.now();
      };
      function after(n, func) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        n = toInteger(n);
        return function() {
          if (--n < 1) {
            return func.apply(this, arguments);
          }
        };
      }
      function ary(func, n, guard) {
        n = guard ? undefined2 : n;
        n = func && n == null ? func.length : n;
        return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n);
      }
      function before(n, func) {
        var result2;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        n = toInteger(n);
        return function() {
          if (--n > 0) {
            result2 = func.apply(this, arguments);
          }
          if (n <= 1) {
            func = undefined2;
          }
          return result2;
        };
      }
      var bind = baseRest(function(func, thisArg, partials) {
        var bitmask = WRAP_BIND_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bind));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(func, bitmask, thisArg, partials, holders);
      });
      var bindKey = baseRest(function(object, key, partials) {
        var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bindKey));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(key, bitmask, object, partials, holders);
      });
      function curry(func, arity, guard) {
        arity = guard ? undefined2 : arity;
        var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
        result2.placeholder = curry.placeholder;
        return result2;
      }
      function curryRight(func, arity, guard) {
        arity = guard ? undefined2 : arity;
        var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
        result2.placeholder = curryRight.placeholder;
        return result2;
      }
      function debounce(func, wait, options) {
        var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = undefined2;
          lastInvokeTime = time;
          result2 = func.apply(thisArg, args);
          return result2;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout3(timerExpired, wait);
          return leading ? invokeFunc(time) : result2;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout3(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = undefined2;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = undefined2;
          return result2;
        }
        function cancel() {
          if (timerId !== undefined2) {
            clearTimeout3(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = undefined2;
        }
        function flush() {
          return timerId === undefined2 ? result2 : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === undefined2) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout3(timerId);
              timerId = setTimeout3(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === undefined2) {
            timerId = setTimeout3(timerExpired, wait);
          }
          return result2;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      var defer = baseRest(function(func, args) {
        return baseDelay(func, 1, args);
      });
      var delay = baseRest(function(func, wait, args) {
        return baseDelay(func, toNumber(wait) || 0, args);
      });
      function flip(func) {
        return createWrap(func, WRAP_FLIP_FLAG);
      }
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache2 = memoized.cache;
          if (cache2.has(key)) {
            return cache2.get(key);
          }
          var result2 = func.apply(this, args);
          memoized.cache = cache2.set(key, result2) || cache2;
          return result2;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      function negate(predicate) {
        if (typeof predicate != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return !predicate.call(this);
            case 1:
              return !predicate.call(this, args[0]);
            case 2:
              return !predicate.call(this, args[0], args[1]);
            case 3:
              return !predicate.call(this, args[0], args[1], args[2]);
          }
          return !predicate.apply(this, args);
        };
      }
      function once2(func) {
        return before(2, func);
      }
      var overArgs = castRest(function(func, transforms) {
        transforms = transforms.length == 1 && isArray3(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
        var funcsLength = transforms.length;
        return baseRest(function(args) {
          var index = -1, length = nativeMin(args.length, funcsLength);
          while (++index < length) {
            args[index] = transforms[index].call(this, args[index]);
          }
          return apply(func, this, args);
        });
      });
      var partial = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partial));
        return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
      });
      var partialRight = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partialRight));
        return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
      });
      var rearg = flatRest(function(func, indexes) {
        return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
      });
      function rest(func, start) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        start = start === undefined2 ? start : toInteger(start);
        return baseRest(func, start);
      }
      function spread(func, start) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        start = start == null ? 0 : nativeMax(toInteger(start), 0);
        return baseRest(function(args) {
          var array = args[start], otherArgs = castSlice(args, 0, start);
          if (array) {
            arrayPush(otherArgs, array);
          }
          return apply(func, this, otherArgs);
        });
      }
      function throttle(func, wait, options) {
        var leading = true, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        if (isObject(options)) {
          leading = "leading" in options ? !!options.leading : leading;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        return debounce(func, wait, {
          leading,
          maxWait: wait,
          trailing
        });
      }
      function unary(func) {
        return ary(func, 1);
      }
      function wrap2(value, wrapper) {
        return partial(castFunction(wrapper), value);
      }
      function castArray() {
        if (!arguments.length) {
          return [];
        }
        var value = arguments[0];
        return isArray3(value) ? value : [value];
      }
      function clone(value) {
        return baseClone(value, CLONE_SYMBOLS_FLAG);
      }
      function cloneWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined2;
        return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
      }
      function cloneDeep(value) {
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
      }
      function cloneDeepWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined2;
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
      }
      function conformsTo(object, source) {
        return source == null || baseConformsTo(object, source, keys2(source));
      }
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      var gt = createRelationalOperation(baseGt);
      var gte = createRelationalOperation(function(value, other) {
        return value >= other;
      });
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      var isArray3 = Array2.isArray;
      var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }
      function isBoolean(value) {
        return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
      }
      var isBuffer2 = nativeIsBuffer || stubFalse;
      var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
      function isElement(value) {
        return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
      }
      function isEmpty(value) {
        if (value == null) {
          return true;
        }
        if (isArrayLike(value) && (isArray3(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer2(value) || isTypedArray(value) || isArguments(value))) {
          return !value.length;
        }
        var tag = getTag(value);
        if (tag == mapTag || tag == setTag) {
          return !value.size;
        }
        if (isPrototype(value)) {
          return !baseKeys(value).length;
        }
        for (var key in value) {
          if (hasOwnProperty.call(value, key)) {
            return false;
          }
        }
        return true;
      }
      function isEqual(value, other) {
        return baseIsEqual(value, other);
      }
      function isEqualWith(value, other, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined2;
        var result2 = customizer ? customizer(value, other) : undefined2;
        return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
      }
      function isError(value) {
        if (!isObjectLike(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
      }
      function isFinite2(value) {
        return typeof value == "number" && nativeIsFinite(value);
      }
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      function isInteger(value) {
        return typeof value == "number" && value == toInteger(value);
      }
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      function isObject(value) {
        var type2 = typeof value;
        return value != null && (type2 == "object" || type2 == "function");
      }
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
      function isMatch(object, source) {
        return object === source || baseIsMatch(object, source, getMatchData(source));
      }
      function isMatchWith(object, source, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined2;
        return baseIsMatch(object, source, getMatchData(source), customizer);
      }
      function isNaN2(value) {
        return isNumber(value) && value != +value;
      }
      function isNative(value) {
        if (isMaskable(value)) {
          throw new Error2(CORE_ERROR_TEXT);
        }
        return baseIsNative(value);
      }
      function isNull(value) {
        return value === null;
      }
      function isNil(value) {
        return value == null;
      }
      function isNumber(value) {
        return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
      }
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
      function isSafeInteger(value) {
        return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
      }
      var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
      function isString(value) {
        return typeof value == "string" || !isArray3(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      function isUndefined(value) {
        return value === undefined2;
      }
      function isWeakMap(value) {
        return isObjectLike(value) && getTag(value) == weakMapTag;
      }
      function isWeakSet(value) {
        return isObjectLike(value) && baseGetTag(value) == weakSetTag;
      }
      var lt = createRelationalOperation(baseLt);
      var lte = createRelationalOperation(function(value, other) {
        return value <= other;
      });
      function toArray(value) {
        if (!value) {
          return [];
        }
        if (isArrayLike(value)) {
          return isString(value) ? stringToArray(value) : copyArray(value);
        }
        if (symIterator && value[symIterator]) {
          return iteratorToArray(value[symIterator]());
        }
        var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
        return func(value);
      }
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }
      function toInteger(value) {
        var result2 = toFinite(value), remainder = result2 % 1;
        return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
      }
      function toLength(value) {
        return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
      }
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      function toPlainObject(value) {
        return copyObject(value, keysIn(value));
      }
      function toSafeInteger(value) {
        return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
      }
      function toString4(value) {
        return value == null ? "" : baseToString(value);
      }
      var assign = createAssigner(function(object, source) {
        if (isPrototype(source) || isArrayLike(source)) {
          copyObject(source, keys2(source), object);
          return;
        }
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            assignValue(object, key, source[key]);
          }
        }
      });
      var assignIn = createAssigner(function(object, source) {
        copyObject(source, keysIn(source), object);
      });
      var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
        copyObject(source, keysIn(source), object, customizer);
      });
      var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
        copyObject(source, keys2(source), object, customizer);
      });
      var at = flatRest(baseAt);
      function create(prototype, properties) {
        var result2 = baseCreate(prototype);
        return properties == null ? result2 : baseAssign(result2, properties);
      }
      var defaults = baseRest(function(object, sources) {
        object = Object2(object);
        var index = -1;
        var length = sources.length;
        var guard = length > 2 ? sources[2] : undefined2;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          length = 1;
        }
        while (++index < length) {
          var source = sources[index];
          var props2 = keysIn(source);
          var propsIndex = -1;
          var propsLength = props2.length;
          while (++propsIndex < propsLength) {
            var key = props2[propsIndex];
            var value = object[key];
            if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
              object[key] = source[key];
            }
          }
        }
        return object;
      });
      var defaultsDeep = baseRest(function(args) {
        args.push(undefined2, customDefaultsMerge);
        return apply(mergeWith, undefined2, args);
      });
      function findKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
      }
      function findLastKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
      }
      function forIn(object, iteratee2) {
        return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
      }
      function forInRight(object, iteratee2) {
        return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
      }
      function forOwn(object, iteratee2) {
        return object && baseForOwn(object, getIteratee(iteratee2, 3));
      }
      function forOwnRight(object, iteratee2) {
        return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
      }
      function functions(object) {
        return object == null ? [] : baseFunctions(object, keys2(object));
      }
      function functionsIn(object) {
        return object == null ? [] : baseFunctions(object, keysIn(object));
      }
      function get(object, path, defaultValue) {
        var result2 = object == null ? undefined2 : baseGet(object, path);
        return result2 === undefined2 ? defaultValue : result2;
      }
      function has(object, path) {
        return object != null && hasPath(object, path, baseHas);
      }
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      var invert = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString.call(value);
        }
        result2[value] = key;
      }, constant(identity));
      var invertBy = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString.call(value);
        }
        if (hasOwnProperty.call(result2, value)) {
          result2[value].push(key);
        } else {
          result2[value] = [key];
        }
      }, getIteratee);
      var invoke = baseRest(baseInvoke);
      function keys2(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      function mapKeys(object, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue(result2, iteratee2(value, key, object2), value);
        });
        return result2;
      }
      function mapValues(object, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue(result2, key, iteratee2(value, key, object2));
        });
        return result2;
      }
      var merge = createAssigner(function(object, source, srcIndex) {
        baseMerge(object, source, srcIndex);
      });
      var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
        baseMerge(object, source, srcIndex, customizer);
      });
      var omit = flatRest(function(object, paths) {
        var result2 = {};
        if (object == null) {
          return result2;
        }
        var isDeep = false;
        paths = arrayMap(paths, function(path) {
          path = castPath(path, object);
          isDeep || (isDeep = path.length > 1);
          return path;
        });
        copyObject(object, getAllKeysIn(object), result2);
        if (isDeep) {
          result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
        }
        var length = paths.length;
        while (length--) {
          baseUnset(result2, paths[length]);
        }
        return result2;
      });
      function omitBy(object, predicate) {
        return pickBy(object, negate(getIteratee(predicate)));
      }
      var pick = flatRest(function(object, paths) {
        return object == null ? {} : basePick(object, paths);
      });
      function pickBy(object, predicate) {
        if (object == null) {
          return {};
        }
        var props2 = arrayMap(getAllKeysIn(object), function(prop) {
          return [prop];
        });
        predicate = getIteratee(predicate);
        return basePickBy(object, props2, function(value, path) {
          return predicate(value, path[0]);
        });
      }
      function result(object, path, defaultValue) {
        path = castPath(path, object);
        var index = -1, length = path.length;
        if (!length) {
          length = 1;
          object = undefined2;
        }
        while (++index < length) {
          var value = object == null ? undefined2 : object[toKey(path[index])];
          if (value === undefined2) {
            index = length;
            value = defaultValue;
          }
          object = isFunction(value) ? value.call(object) : value;
        }
        return object;
      }
      function set(object, path, value) {
        return object == null ? object : baseSet(object, path, value);
      }
      function setWith(object, path, value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined2;
        return object == null ? object : baseSet(object, path, value, customizer);
      }
      var toPairs = createToPairs(keys2);
      var toPairsIn = createToPairs(keysIn);
      function transform(object, iteratee2, accumulator) {
        var isArr = isArray3(object), isArrLike = isArr || isBuffer2(object) || isTypedArray(object);
        iteratee2 = getIteratee(iteratee2, 4);
        if (accumulator == null) {
          var Ctor = object && object.constructor;
          if (isArrLike) {
            accumulator = isArr ? new Ctor() : [];
          } else if (isObject(object)) {
            accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
          } else {
            accumulator = {};
          }
        }
        (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
          return iteratee2(accumulator, value, index, object2);
        });
        return accumulator;
      }
      function unset(object, path) {
        return object == null ? true : baseUnset(object, path);
      }
      function update(object, path, updater) {
        return object == null ? object : baseUpdate(object, path, castFunction(updater));
      }
      function updateWith(object, path, updater, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined2;
        return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
      }
      function values(object) {
        return object == null ? [] : baseValues(object, keys2(object));
      }
      function valuesIn(object) {
        return object == null ? [] : baseValues(object, keysIn(object));
      }
      function clamp(number, lower, upper) {
        if (upper === undefined2) {
          upper = lower;
          lower = undefined2;
        }
        if (upper !== undefined2) {
          upper = toNumber(upper);
          upper = upper === upper ? upper : 0;
        }
        if (lower !== undefined2) {
          lower = toNumber(lower);
          lower = lower === lower ? lower : 0;
        }
        return baseClamp(toNumber(number), lower, upper);
      }
      function inRange(number, start, end) {
        start = toFinite(start);
        if (end === undefined2) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        number = toNumber(number);
        return baseInRange(number, start, end);
      }
      function random(lower, upper, floating) {
        if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
          upper = floating = undefined2;
        }
        if (floating === undefined2) {
          if (typeof upper == "boolean") {
            floating = upper;
            upper = undefined2;
          } else if (typeof lower == "boolean") {
            floating = lower;
            lower = undefined2;
          }
        }
        if (lower === undefined2 && upper === undefined2) {
          lower = 0;
          upper = 1;
        } else {
          lower = toFinite(lower);
          if (upper === undefined2) {
            upper = lower;
            lower = 0;
          } else {
            upper = toFinite(upper);
          }
        }
        if (lower > upper) {
          var temp = lower;
          lower = upper;
          upper = temp;
        }
        if (floating || lower % 1 || upper % 1) {
          var rand = nativeRandom();
          return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
        }
        return baseRandom(lower, upper);
      }
      var camelCase = createCompounder(function(result2, word, index) {
        word = word.toLowerCase();
        return result2 + (index ? capitalize(word) : word);
      });
      function capitalize(string) {
        return upperFirst(toString4(string).toLowerCase());
      }
      function deburr(string) {
        string = toString4(string);
        return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
      }
      function endsWith(string, target, position) {
        string = toString4(string);
        target = baseToString(target);
        var length = string.length;
        position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
        var end = position;
        position -= target.length;
        return position >= 0 && string.slice(position, end) == target;
      }
      function escape(string) {
        string = toString4(string);
        return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
      }
      function escapeRegExp(string) {
        string = toString4(string);
        return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
      }
      var kebabCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? "-" : "") + word.toLowerCase();
      });
      var lowerCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? " " : "") + word.toLowerCase();
      });
      var lowerFirst = createCaseFirst("toLowerCase");
      function pad2(string, length, chars2) {
        string = toString4(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        if (!length || strLength >= length) {
          return string;
        }
        var mid = (length - strLength) / 2;
        return createPadding(nativeFloor(mid), chars2) + string + createPadding(nativeCeil(mid), chars2);
      }
      function padEnd(string, length, chars2) {
        string = toString4(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        return length && strLength < length ? string + createPadding(length - strLength, chars2) : string;
      }
      function padStart(string, length, chars2) {
        string = toString4(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        return length && strLength < length ? createPadding(length - strLength, chars2) + string : string;
      }
      function parseInt2(string, radix, guard) {
        if (guard || radix == null) {
          radix = 0;
        } else if (radix) {
          radix = +radix;
        }
        return nativeParseInt(toString4(string).replace(reTrimStart, ""), radix || 0);
      }
      function repeat(string, n, guard) {
        if (guard ? isIterateeCall(string, n, guard) : n === undefined2) {
          n = 1;
        } else {
          n = toInteger(n);
        }
        return baseRepeat(toString4(string), n);
      }
      function replace() {
        var args = arguments, string = toString4(args[0]);
        return args.length < 3 ? string : string.replace(args[1], args[2]);
      }
      var snakeCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? "_" : "") + word.toLowerCase();
      });
      function split(string, separator, limit) {
        if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
          separator = limit = undefined2;
        }
        limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
        if (!limit) {
          return [];
        }
        string = toString4(string);
        if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
          separator = baseToString(separator);
          if (!separator && hasUnicode(string)) {
            return castSlice(stringToArray(string), 0, limit);
          }
        }
        return string.split(separator, limit);
      }
      var startCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? " " : "") + upperFirst(word);
      });
      function startsWith(string, target, position) {
        string = toString4(string);
        position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
        target = baseToString(target);
        return string.slice(position, position + target.length) == target;
      }
      function template(string, options, guard) {
        var settings = lodash.templateSettings;
        if (guard && isIterateeCall(string, options, guard)) {
          options = undefined2;
        }
        string = toString4(string);
        options = assignInWith({}, options, settings, customDefaultsAssignIn);
        var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys2(imports), importsValues = baseValues(imports, importsKeys);
        var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
        var reDelimiters = RegExp2((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
        var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
        string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
          interpolateValue || (interpolateValue = esTemplateValue);
          source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
          if (escapeValue) {
            isEscaping = true;
            source += "' +\n__e(" + escapeValue + ") +\n'";
          }
          if (evaluateValue) {
            isEvaluating = true;
            source += "';\n" + evaluateValue + ";\n__p += '";
          }
          if (interpolateValue) {
            source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
          }
          index = offset + match.length;
          return match;
        });
        source += "';\n";
        var variable = hasOwnProperty.call(options, "variable") && options.variable;
        if (!variable) {
          source = "with (obj) {\n" + source + "\n}\n";
        } else if (reForbiddenIdentifierChars.test(variable)) {
          throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
        }
        source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
        source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
        var result2 = attempt(function() {
          return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
        });
        result2.source = source;
        if (isError(result2)) {
          throw result2;
        }
        return result2;
      }
      function toLower(value) {
        return toString4(value).toLowerCase();
      }
      function toUpper(value) {
        return toString4(value).toUpperCase();
      }
      function trim(string, chars2, guard) {
        string = toString4(string);
        if (string && (guard || chars2 === undefined2)) {
          return baseTrim(string);
        }
        if (!string || !(chars2 = baseToString(chars2))) {
          return string;
        }
        var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars2), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
        return castSlice(strSymbols, start, end).join("");
      }
      function trimEnd(string, chars2, guard) {
        string = toString4(string);
        if (string && (guard || chars2 === undefined2)) {
          return string.slice(0, trimmedEndIndex(string) + 1);
        }
        if (!string || !(chars2 = baseToString(chars2))) {
          return string;
        }
        var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars2)) + 1;
        return castSlice(strSymbols, 0, end).join("");
      }
      function trimStart(string, chars2, guard) {
        string = toString4(string);
        if (string && (guard || chars2 === undefined2)) {
          return string.replace(reTrimStart, "");
        }
        if (!string || !(chars2 = baseToString(chars2))) {
          return string;
        }
        var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars2));
        return castSlice(strSymbols, start).join("");
      }
      function truncate(string, options) {
        var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
        if (isObject(options)) {
          var separator = "separator" in options ? options.separator : separator;
          length = "length" in options ? toInteger(options.length) : length;
          omission = "omission" in options ? baseToString(options.omission) : omission;
        }
        string = toString4(string);
        var strLength = string.length;
        if (hasUnicode(string)) {
          var strSymbols = stringToArray(string);
          strLength = strSymbols.length;
        }
        if (length >= strLength) {
          return string;
        }
        var end = length - stringSize(omission);
        if (end < 1) {
          return omission;
        }
        var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
        if (separator === undefined2) {
          return result2 + omission;
        }
        if (strSymbols) {
          end += result2.length - end;
        }
        if (isRegExp(separator)) {
          if (string.slice(end).search(separator)) {
            var match, substring = result2;
            if (!separator.global) {
              separator = RegExp2(separator.source, toString4(reFlags.exec(separator)) + "g");
            }
            separator.lastIndex = 0;
            while (match = separator.exec(substring)) {
              var newEnd = match.index;
            }
            result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
          }
        } else if (string.indexOf(baseToString(separator), end) != end) {
          var index = result2.lastIndexOf(separator);
          if (index > -1) {
            result2 = result2.slice(0, index);
          }
        }
        return result2 + omission;
      }
      function unescape(string) {
        string = toString4(string);
        return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
      }
      var upperCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? " " : "") + word.toUpperCase();
      });
      var upperFirst = createCaseFirst("toUpperCase");
      function words(string, pattern, guard) {
        string = toString4(string);
        pattern = guard ? undefined2 : pattern;
        if (pattern === undefined2) {
          return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
        }
        return string.match(pattern) || [];
      }
      var attempt = baseRest(function(func, args) {
        try {
          return apply(func, undefined2, args);
        } catch (e) {
          return isError(e) ? e : new Error2(e);
        }
      });
      var bindAll = flatRest(function(object, methodNames) {
        arrayEach(methodNames, function(key) {
          key = toKey(key);
          baseAssignValue(object, key, bind(object[key], object));
        });
        return object;
      });
      function cond(pairs) {
        var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
        pairs = !length ? [] : arrayMap(pairs, function(pair) {
          if (typeof pair[1] != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return [toIteratee(pair[0]), pair[1]];
        });
        return baseRest(function(args) {
          var index = -1;
          while (++index < length) {
            var pair = pairs[index];
            if (apply(pair[0], this, args)) {
              return apply(pair[1], this, args);
            }
          }
        });
      }
      function conforms(source) {
        return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
      }
      function constant(value) {
        return function() {
          return value;
        };
      }
      function defaultTo(value, defaultValue) {
        return value == null || value !== value ? defaultValue : value;
      }
      var flow = createFlow();
      var flowRight = createFlow(true);
      function identity(value) {
        return value;
      }
      function iteratee(func) {
        return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
      }
      function matches(source) {
        return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
      }
      function matchesProperty(path, srcValue) {
        return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
      }
      var method = baseRest(function(path, args) {
        return function(object) {
          return baseInvoke(object, path, args);
        };
      });
      var methodOf = baseRest(function(object, args) {
        return function(path) {
          return baseInvoke(object, path, args);
        };
      });
      function mixin(object, source, options) {
        var props2 = keys2(source), methodNames = baseFunctions(source, props2);
        if (options == null && !(isObject(source) && (methodNames.length || !props2.length))) {
          options = source;
          source = object;
          object = this;
          methodNames = baseFunctions(source, keys2(source));
        }
        var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
        arrayEach(methodNames, function(methodName) {
          var func = source[methodName];
          object[methodName] = func;
          if (isFunc) {
            object.prototype[methodName] = function() {
              var chainAll = this.__chain__;
              if (chain2 || chainAll) {
                var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                actions.push({func, args: arguments, thisArg: object});
                result2.__chain__ = chainAll;
                return result2;
              }
              return func.apply(object, arrayPush([this.value()], arguments));
            };
          }
        });
        return object;
      }
      function noConflict() {
        if (root._ === this) {
          root._ = oldDash;
        }
        return this;
      }
      function noop() {
      }
      function nthArg(n) {
        n = toInteger(n);
        return baseRest(function(args) {
          return baseNth(args, n);
        });
      }
      var over = createOver(arrayMap);
      var overEvery = createOver(arrayEvery);
      var overSome = createOver(arraySome);
      function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      function propertyOf(object) {
        return function(path) {
          return object == null ? undefined2 : baseGet(object, path);
        };
      }
      var range = createRange2();
      var rangeRight = createRange2(true);
      function stubArray() {
        return [];
      }
      function stubFalse() {
        return false;
      }
      function stubObject() {
        return {};
      }
      function stubString() {
        return "";
      }
      function stubTrue() {
        return true;
      }
      function times(n, iteratee2) {
        n = toInteger(n);
        if (n < 1 || n > MAX_SAFE_INTEGER) {
          return [];
        }
        var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
        iteratee2 = getIteratee(iteratee2);
        n -= MAX_ARRAY_LENGTH;
        var result2 = baseTimes(length, iteratee2);
        while (++index < n) {
          iteratee2(index);
        }
        return result2;
      }
      function toPath(value) {
        if (isArray3(value)) {
          return arrayMap(value, toKey);
        }
        return isSymbol(value) ? [value] : copyArray(stringToPath(toString4(value)));
      }
      function uniqueId(prefix) {
        var id = ++idCounter;
        return toString4(prefix) + id;
      }
      var add = createMathOperation(function(augend, addend) {
        return augend + addend;
      }, 0);
      var ceil = createRound("ceil");
      var divide = createMathOperation(function(dividend, divisor) {
        return dividend / divisor;
      }, 1);
      var floor = createRound("floor");
      function max(array) {
        return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
      }
      function maxBy(array, iteratee2) {
        return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
      }
      function mean(array) {
        return baseMean(array, identity);
      }
      function meanBy(array, iteratee2) {
        return baseMean(array, getIteratee(iteratee2, 2));
      }
      function min(array) {
        return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
      }
      function minBy(array, iteratee2) {
        return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
      }
      var multiply = createMathOperation(function(multiplier, multiplicand) {
        return multiplier * multiplicand;
      }, 1);
      var round = createRound("round");
      var subtract = createMathOperation(function(minuend, subtrahend) {
        return minuend - subtrahend;
      }, 0);
      function sum(array) {
        return array && array.length ? baseSum(array, identity) : 0;
      }
      function sumBy(array, iteratee2) {
        return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
      }
      lodash.after = after;
      lodash.ary = ary;
      lodash.assign = assign;
      lodash.assignIn = assignIn;
      lodash.assignInWith = assignInWith;
      lodash.assignWith = assignWith;
      lodash.at = at;
      lodash.before = before;
      lodash.bind = bind;
      lodash.bindAll = bindAll;
      lodash.bindKey = bindKey;
      lodash.castArray = castArray;
      lodash.chain = chain;
      lodash.chunk = chunk;
      lodash.compact = compact;
      lodash.concat = concat3;
      lodash.cond = cond;
      lodash.conforms = conforms;
      lodash.constant = constant;
      lodash.countBy = countBy;
      lodash.create = create;
      lodash.curry = curry;
      lodash.curryRight = curryRight;
      lodash.debounce = debounce;
      lodash.defaults = defaults;
      lodash.defaultsDeep = defaultsDeep;
      lodash.defer = defer;
      lodash.delay = delay;
      lodash.difference = difference;
      lodash.differenceBy = differenceBy;
      lodash.differenceWith = differenceWith;
      lodash.drop = drop;
      lodash.dropRight = dropRight;
      lodash.dropRightWhile = dropRightWhile;
      lodash.dropWhile = dropWhile;
      lodash.fill = fill2;
      lodash.filter = filter;
      lodash.flatMap = flatMap;
      lodash.flatMapDeep = flatMapDeep;
      lodash.flatMapDepth = flatMapDepth;
      lodash.flatten = flatten2;
      lodash.flattenDeep = flattenDeep;
      lodash.flattenDepth = flattenDepth;
      lodash.flip = flip;
      lodash.flow = flow;
      lodash.flowRight = flowRight;
      lodash.fromPairs = fromPairs;
      lodash.functions = functions;
      lodash.functionsIn = functionsIn;
      lodash.groupBy = groupBy;
      lodash.initial = initial;
      lodash.intersection = intersection;
      lodash.intersectionBy = intersectionBy;
      lodash.intersectionWith = intersectionWith;
      lodash.invert = invert;
      lodash.invertBy = invertBy;
      lodash.invokeMap = invokeMap;
      lodash.iteratee = iteratee;
      lodash.keyBy = keyBy;
      lodash.keys = keys2;
      lodash.keysIn = keysIn;
      lodash.map = map;
      lodash.mapKeys = mapKeys;
      lodash.mapValues = mapValues;
      lodash.matches = matches;
      lodash.matchesProperty = matchesProperty;
      lodash.memoize = memoize;
      lodash.merge = merge;
      lodash.mergeWith = mergeWith;
      lodash.method = method;
      lodash.methodOf = methodOf;
      lodash.mixin = mixin;
      lodash.negate = negate;
      lodash.nthArg = nthArg;
      lodash.omit = omit;
      lodash.omitBy = omitBy;
      lodash.once = once2;
      lodash.orderBy = orderBy2;
      lodash.over = over;
      lodash.overArgs = overArgs;
      lodash.overEvery = overEvery;
      lodash.overSome = overSome;
      lodash.partial = partial;
      lodash.partialRight = partialRight;
      lodash.partition = partition;
      lodash.pick = pick;
      lodash.pickBy = pickBy;
      lodash.property = property;
      lodash.propertyOf = propertyOf;
      lodash.pull = pull;
      lodash.pullAll = pullAll;
      lodash.pullAllBy = pullAllBy;
      lodash.pullAllWith = pullAllWith;
      lodash.pullAt = pullAt;
      lodash.range = range;
      lodash.rangeRight = rangeRight;
      lodash.rearg = rearg;
      lodash.reject = reject;
      lodash.remove = remove;
      lodash.rest = rest;
      lodash.reverse = reverse;
      lodash.sampleSize = sampleSize;
      lodash.set = set;
      lodash.setWith = setWith;
      lodash.shuffle = shuffle;
      lodash.slice = slice3;
      lodash.sortBy = sortBy;
      lodash.sortedUniq = sortedUniq;
      lodash.sortedUniqBy = sortedUniqBy;
      lodash.split = split;
      lodash.spread = spread;
      lodash.tail = tail;
      lodash.take = take;
      lodash.takeRight = takeRight;
      lodash.takeRightWhile = takeRightWhile;
      lodash.takeWhile = takeWhile;
      lodash.tap = tap;
      lodash.throttle = throttle;
      lodash.thru = thru;
      lodash.toArray = toArray;
      lodash.toPairs = toPairs;
      lodash.toPairsIn = toPairsIn;
      lodash.toPath = toPath;
      lodash.toPlainObject = toPlainObject;
      lodash.transform = transform;
      lodash.unary = unary;
      lodash.union = union;
      lodash.unionBy = unionBy;
      lodash.unionWith = unionWith;
      lodash.uniq = uniq;
      lodash.uniqBy = uniqBy;
      lodash.uniqWith = uniqWith;
      lodash.unset = unset;
      lodash.unzip = unzip;
      lodash.unzipWith = unzipWith;
      lodash.update = update;
      lodash.updateWith = updateWith;
      lodash.values = values;
      lodash.valuesIn = valuesIn;
      lodash.without = without;
      lodash.words = words;
      lodash.wrap = wrap2;
      lodash.xor = xor;
      lodash.xorBy = xorBy;
      lodash.xorWith = xorWith;
      lodash.zip = zip;
      lodash.zipObject = zipObject;
      lodash.zipObjectDeep = zipObjectDeep;
      lodash.zipWith = zipWith;
      lodash.entries = toPairs;
      lodash.entriesIn = toPairsIn;
      lodash.extend = assignIn;
      lodash.extendWith = assignInWith;
      mixin(lodash, lodash);
      lodash.add = add;
      lodash.attempt = attempt;
      lodash.camelCase = camelCase;
      lodash.capitalize = capitalize;
      lodash.ceil = ceil;
      lodash.clamp = clamp;
      lodash.clone = clone;
      lodash.cloneDeep = cloneDeep;
      lodash.cloneDeepWith = cloneDeepWith;
      lodash.cloneWith = cloneWith;
      lodash.conformsTo = conformsTo;
      lodash.deburr = deburr;
      lodash.defaultTo = defaultTo;
      lodash.divide = divide;
      lodash.endsWith = endsWith;
      lodash.eq = eq;
      lodash.escape = escape;
      lodash.escapeRegExp = escapeRegExp;
      lodash.every = every;
      lodash.find = find;
      lodash.findIndex = findIndex;
      lodash.findKey = findKey;
      lodash.findLast = findLast;
      lodash.findLastIndex = findLastIndex;
      lodash.findLastKey = findLastKey;
      lodash.floor = floor;
      lodash.forEach = forEach;
      lodash.forEachRight = forEachRight;
      lodash.forIn = forIn;
      lodash.forInRight = forInRight;
      lodash.forOwn = forOwn;
      lodash.forOwnRight = forOwnRight;
      lodash.get = get;
      lodash.gt = gt;
      lodash.gte = gte;
      lodash.has = has;
      lodash.hasIn = hasIn;
      lodash.head = head;
      lodash.identity = identity;
      lodash.includes = includes2;
      lodash.indexOf = indexOf2;
      lodash.inRange = inRange;
      lodash.invoke = invoke;
      lodash.isArguments = isArguments;
      lodash.isArray = isArray3;
      lodash.isArrayBuffer = isArrayBuffer;
      lodash.isArrayLike = isArrayLike;
      lodash.isArrayLikeObject = isArrayLikeObject;
      lodash.isBoolean = isBoolean;
      lodash.isBuffer = isBuffer2;
      lodash.isDate = isDate;
      lodash.isElement = isElement;
      lodash.isEmpty = isEmpty;
      lodash.isEqual = isEqual;
      lodash.isEqualWith = isEqualWith;
      lodash.isError = isError;
      lodash.isFinite = isFinite2;
      lodash.isFunction = isFunction;
      lodash.isInteger = isInteger;
      lodash.isLength = isLength;
      lodash.isMap = isMap;
      lodash.isMatch = isMatch;
      lodash.isMatchWith = isMatchWith;
      lodash.isNaN = isNaN2;
      lodash.isNative = isNative;
      lodash.isNil = isNil;
      lodash.isNull = isNull;
      lodash.isNumber = isNumber;
      lodash.isObject = isObject;
      lodash.isObjectLike = isObjectLike;
      lodash.isPlainObject = isPlainObject;
      lodash.isRegExp = isRegExp;
      lodash.isSafeInteger = isSafeInteger;
      lodash.isSet = isSet;
      lodash.isString = isString;
      lodash.isSymbol = isSymbol;
      lodash.isTypedArray = isTypedArray;
      lodash.isUndefined = isUndefined;
      lodash.isWeakMap = isWeakMap;
      lodash.isWeakSet = isWeakSet;
      lodash.join = join;
      lodash.kebabCase = kebabCase;
      lodash.last = last;
      lodash.lastIndexOf = lastIndexOf2;
      lodash.lowerCase = lowerCase;
      lodash.lowerFirst = lowerFirst;
      lodash.lt = lt;
      lodash.lte = lte;
      lodash.max = max;
      lodash.maxBy = maxBy;
      lodash.mean = mean;
      lodash.meanBy = meanBy;
      lodash.min = min;
      lodash.minBy = minBy;
      lodash.stubArray = stubArray;
      lodash.stubFalse = stubFalse;
      lodash.stubObject = stubObject;
      lodash.stubString = stubString;
      lodash.stubTrue = stubTrue;
      lodash.multiply = multiply;
      lodash.nth = nth;
      lodash.noConflict = noConflict;
      lodash.noop = noop;
      lodash.now = now;
      lodash.pad = pad2;
      lodash.padEnd = padEnd;
      lodash.padStart = padStart;
      lodash.parseInt = parseInt2;
      lodash.random = random;
      lodash.reduce = reduce;
      lodash.reduceRight = reduceRight;
      lodash.repeat = repeat;
      lodash.replace = replace;
      lodash.result = result;
      lodash.round = round;
      lodash.runInContext = runInContext2;
      lodash.sample = sample;
      lodash.size = size;
      lodash.snakeCase = snakeCase;
      lodash.some = some;
      lodash.sortedIndex = sortedIndex;
      lodash.sortedIndexBy = sortedIndexBy;
      lodash.sortedIndexOf = sortedIndexOf;
      lodash.sortedLastIndex = sortedLastIndex;
      lodash.sortedLastIndexBy = sortedLastIndexBy;
      lodash.sortedLastIndexOf = sortedLastIndexOf;
      lodash.startCase = startCase;
      lodash.startsWith = startsWith;
      lodash.subtract = subtract;
      lodash.sum = sum;
      lodash.sumBy = sumBy;
      lodash.template = template;
      lodash.times = times;
      lodash.toFinite = toFinite;
      lodash.toInteger = toInteger;
      lodash.toLength = toLength;
      lodash.toLower = toLower;
      lodash.toNumber = toNumber;
      lodash.toSafeInteger = toSafeInteger;
      lodash.toString = toString4;
      lodash.toUpper = toUpper;
      lodash.trim = trim;
      lodash.trimEnd = trimEnd;
      lodash.trimStart = trimStart;
      lodash.truncate = truncate;
      lodash.unescape = unescape;
      lodash.uniqueId = uniqueId;
      lodash.upperCase = upperCase;
      lodash.upperFirst = upperFirst;
      lodash.each = forEach;
      lodash.eachRight = forEachRight;
      lodash.first = head;
      mixin(lodash, function() {
        var source = {};
        baseForOwn(lodash, function(func, methodName) {
          if (!hasOwnProperty.call(lodash.prototype, methodName)) {
            source[methodName] = func;
          }
        });
        return source;
      }(), {chain: false});
      lodash.VERSION = VERSION2;
      arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
        lodash[methodName].placeholder = lodash;
      });
      arrayEach(["drop", "take"], function(methodName, index) {
        LazyWrapper.prototype[methodName] = function(n) {
          n = n === undefined2 ? 1 : nativeMax(toInteger(n), 0);
          var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
          if (result2.__filtered__) {
            result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
          } else {
            result2.__views__.push({
              size: nativeMin(n, MAX_ARRAY_LENGTH),
              type: methodName + (result2.__dir__ < 0 ? "Right" : "")
            });
          }
          return result2;
        };
        LazyWrapper.prototype[methodName + "Right"] = function(n) {
          return this.reverse()[methodName](n).reverse();
        };
      });
      arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
        var type2 = index + 1, isFilter = type2 == LAZY_FILTER_FLAG || type2 == LAZY_WHILE_FLAG;
        LazyWrapper.prototype[methodName] = function(iteratee2) {
          var result2 = this.clone();
          result2.__iteratees__.push({
            iteratee: getIteratee(iteratee2, 3),
            type: type2
          });
          result2.__filtered__ = result2.__filtered__ || isFilter;
          return result2;
        };
      });
      arrayEach(["head", "last"], function(methodName, index) {
        var takeName = "take" + (index ? "Right" : "");
        LazyWrapper.prototype[methodName] = function() {
          return this[takeName](1).value()[0];
        };
      });
      arrayEach(["initial", "tail"], function(methodName, index) {
        var dropName = "drop" + (index ? "" : "Right");
        LazyWrapper.prototype[methodName] = function() {
          return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
        };
      });
      LazyWrapper.prototype.compact = function() {
        return this.filter(identity);
      };
      LazyWrapper.prototype.find = function(predicate) {
        return this.filter(predicate).head();
      };
      LazyWrapper.prototype.findLast = function(predicate) {
        return this.reverse().find(predicate);
      };
      LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
        if (typeof path == "function") {
          return new LazyWrapper(this);
        }
        return this.map(function(value) {
          return baseInvoke(value, path, args);
        });
      });
      LazyWrapper.prototype.reject = function(predicate) {
        return this.filter(negate(getIteratee(predicate)));
      };
      LazyWrapper.prototype.slice = function(start, end) {
        start = toInteger(start);
        var result2 = this;
        if (result2.__filtered__ && (start > 0 || end < 0)) {
          return new LazyWrapper(result2);
        }
        if (start < 0) {
          result2 = result2.takeRight(-start);
        } else if (start) {
          result2 = result2.drop(start);
        }
        if (end !== undefined2) {
          end = toInteger(end);
          result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
        }
        return result2;
      };
      LazyWrapper.prototype.takeRightWhile = function(predicate) {
        return this.reverse().takeWhile(predicate).reverse();
      };
      LazyWrapper.prototype.toArray = function() {
        return this.take(MAX_ARRAY_LENGTH);
      };
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
        if (!lodashFunc) {
          return;
        }
        lodash.prototype[methodName] = function() {
          var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray3(value);
          var interceptor = function(value2) {
            var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
            return isTaker && chainAll ? result3[0] : result3;
          };
          if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
            isLazy = useLazy = false;
          }
          var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
          if (!retUnwrapped && useLazy) {
            value = onlyLazy ? value : new LazyWrapper(this);
            var result2 = func.apply(value, args);
            result2.__actions__.push({func: thru, args: [interceptor], thisArg: undefined2});
            return new LodashWrapper(result2, chainAll);
          }
          if (isUnwrapped && onlyLazy) {
            return func.apply(this, args);
          }
          result2 = this.thru(interceptor);
          return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
        };
      });
      arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
        var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
        lodash.prototype[methodName] = function() {
          var args = arguments;
          if (retUnwrapped && !this.__chain__) {
            var value = this.value();
            return func.apply(isArray3(value) ? value : [], args);
          }
          return this[chainName](function(value2) {
            return func.apply(isArray3(value2) ? value2 : [], args);
          });
        };
      });
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var lodashFunc = lodash[methodName];
        if (lodashFunc) {
          var key = lodashFunc.name + "";
          if (!hasOwnProperty.call(realNames, key)) {
            realNames[key] = [];
          }
          realNames[key].push({name: methodName, func: lodashFunc});
        }
      });
      realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
        name: "wrapper",
        func: undefined2
      }];
      LazyWrapper.prototype.clone = lazyClone;
      LazyWrapper.prototype.reverse = lazyReverse;
      LazyWrapper.prototype.value = lazyValue;
      lodash.prototype.at = wrapperAt;
      lodash.prototype.chain = wrapperChain;
      lodash.prototype.commit = wrapperCommit;
      lodash.prototype.next = wrapperNext;
      lodash.prototype.plant = wrapperPlant;
      lodash.prototype.reverse = wrapperReverse;
      lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
      lodash.prototype.first = lodash.prototype.head;
      if (symIterator) {
        lodash.prototype[symIterator] = wrapperToIterator;
      }
      return lodash;
    };
    var _2 = runInContext();
    if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
      root._ = _2;
      define(function() {
        return _2;
      });
    } else if (freeModule) {
      (freeModule.exports = _2)._ = _2;
      freeExports._ = _2;
    } else {
      root._ = _2;
    }
  }).call(exports);
});

// node_modules/downloadjs/download.js
var require_download = __commonJS((exports, module) => {
  (function(root, factory) {
    if (typeof define === "function" && define.amd) {
      define([], factory);
    } else if (typeof exports === "object") {
      module.exports = factory();
    } else {
      root.download = factory();
    }
  })(exports, function() {
    return function download2(data, strFileName, strMimeType) {
      var self2 = window, defaultMime = "application/octet-stream", mimeType = strMimeType || defaultMime, payload = data, url = !strFileName && !strMimeType && payload, anchor = document.createElement("a"), toString4 = function(a) {
        return String(a);
      }, myBlob = self2.Blob || self2.MozBlob || self2.WebKitBlob || toString4, fileName = strFileName || "download", blob, reader;
      myBlob = myBlob.call ? myBlob.bind(self2) : Blob;
      if (String(this) === "true") {
        payload = [payload, mimeType];
        mimeType = payload[0];
        payload = payload[1];
      }
      if (url && url.length < 2048) {
        fileName = url.split("/").pop().split("?")[0];
        anchor.href = url;
        if (anchor.href.indexOf(url) !== -1) {
          var ajax = new XMLHttpRequest();
          ajax.open("GET", url, true);
          ajax.responseType = "blob";
          ajax.onload = function(e) {
            download2(e.target.response, fileName, defaultMime);
          };
          setTimeout(function() {
            ajax.send();
          }, 0);
          return ajax;
        }
      }
      if (/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(payload)) {
        if (payload.length > 1024 * 1024 * 1.999 && myBlob !== toString4) {
          payload = dataUrlToBlob(payload);
          mimeType = payload.type || defaultMime;
        } else {
          return navigator.msSaveBlob ? navigator.msSaveBlob(dataUrlToBlob(payload), fileName) : saver(payload);
        }
      } else {
        if (/([\x80-\xff])/.test(payload)) {
          var i = 0, tempUiArr = new Uint8Array(payload.length), mx = tempUiArr.length;
          for (i; i < mx; ++i)
            tempUiArr[i] = payload.charCodeAt(i);
          payload = new myBlob([tempUiArr], {type: mimeType});
        }
      }
      blob = payload instanceof myBlob ? payload : new myBlob([payload], {type: mimeType});
      function dataUrlToBlob(strUrl) {
        var parts = strUrl.split(/[:;,]/), type2 = parts[1], decoder = parts[2] == "base64" ? atob : decodeURIComponent, binData = decoder(parts.pop()), mx2 = binData.length, i2 = 0, uiArr = new Uint8Array(mx2);
        for (i2; i2 < mx2; ++i2)
          uiArr[i2] = binData.charCodeAt(i2);
        return new myBlob([uiArr], {type: type2});
      }
      function saver(url2, winMode) {
        if ("download" in anchor) {
          anchor.href = url2;
          anchor.setAttribute("download", fileName);
          anchor.className = "download-js-link";
          anchor.innerHTML = "downloading...";
          anchor.style.display = "none";
          document.body.appendChild(anchor);
          setTimeout(function() {
            anchor.click();
            document.body.removeChild(anchor);
            if (winMode === true) {
              setTimeout(function() {
                self2.URL.revokeObjectURL(anchor.href);
              }, 250);
            }
          }, 66);
          return true;
        }
        if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
          if (/^data:/.test(url2))
            url2 = "data:" + url2.replace(/^data:([\w\/\-\+]+)/, defaultMime);
          if (!window.open(url2)) {
            if (confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")) {
              location.href = url2;
            }
          }
          return true;
        }
        var f = document.createElement("iframe");
        document.body.appendChild(f);
        if (!winMode && /^data:/.test(url2)) {
          url2 = "data:" + url2.replace(/^data:([\w\/\-\+]+)/, defaultMime);
        }
        f.src = url2;
        setTimeout(function() {
          document.body.removeChild(f);
        }, 333);
      }
      if (navigator.msSaveBlob) {
        return navigator.msSaveBlob(blob, fileName);
      }
      if (self2.URL) {
        saver(self2.URL.createObjectURL(blob), true);
      } else {
        if (typeof blob === "string" || blob.constructor === toString4) {
          try {
            return saver("data:" + mimeType + ";base64," + self2.btoa(blob));
          } catch (y) {
            return saver("data:" + mimeType + "," + encodeURIComponent(blob));
          }
        }
        reader = new FileReader();
        reader.onload = function(e) {
          saver(this.result);
        };
        reader.readAsDataURL(blob);
      }
      return true;
    };
  });
});

// <define:process.env>
var NODE_ENV = "production";
var define_process_env_default = {NODE_ENV};

// node_modules/imba/polyfills/buffer/index.js
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var inited = false;
function init() {
  inited = true;
  var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }
  revLookup["-".charCodeAt(0)] = 62;
  revLookup["_".charCodeAt(0)] = 63;
}
function toByteArray(b64) {
  if (!inited) {
    init();
  }
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  placeHolders = b64[len - 2] === "=" ? 2 : b64[len - 1] === "=" ? 1 : 0;
  arr = new Arr(len * 3 / 4 - placeHolders);
  l = placeHolders > 0 ? len - 4 : len;
  var L = 0;
  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = tmp >> 16 & 255;
    arr[L++] = tmp >> 8 & 255;
    arr[L++] = tmp & 255;
  }
  if (placeHolders === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[L++] = tmp & 255;
  } else if (placeHolders === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[L++] = tmp >> 8 & 255;
    arr[L++] = tmp & 255;
  }
  return arr;
}
function tripletToBase64(num) {
  return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
    output.push(tripletToBase64(tmp));
  }
  return output.join("");
}
function fromByteArray(uint8) {
  if (!inited) {
    init();
  }
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3;
  var output = "";
  var parts = [];
  var maxChunkLength = 16383;
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[tmp << 4 & 63];
    output += "==";
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    output += lookup[tmp >> 10];
    output += lookup[tmp >> 4 & 63];
    output += lookup[tmp << 2 & 63];
    output += "=";
  }
  parts.push(output);
  return parts.join("");
}
function read(buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
  }
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
  }
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
}
function write(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);
  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
  }
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
  }
  buffer[offset + i - d] |= s * 128;
}
var toString = {}.toString;
var isArray = Array.isArray || function(arr) {
  return toString.call(arr) == "[object Array]";
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var INSPECT_MAX_BYTES = 50;
Buffer2.TYPED_ARRAY_SUPPORT = globalThis.TYPED_ARRAY_SUPPORT !== void 0 ? globalThis.TYPED_ARRAY_SUPPORT : true;
var _kMaxLength = kMaxLength();
function kMaxLength() {
  return Buffer2.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError("Invalid typed array length");
  }
  if (Buffer2.TYPED_ARRAY_SUPPORT) {
    that = new Uint8Array(length);
    that.__proto__ = Buffer2.prototype;
  } else {
    if (that === null) {
      that = new Buffer2(length);
    }
    that.length = length;
  }
  return that;
}
function Buffer2(arg, encodingOrOffset, length) {
  if (!Buffer2.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer2)) {
    return new Buffer2(arg, encodingOrOffset, length);
  }
  if (typeof arg === "number") {
    if (typeof encodingOrOffset === "string") {
      throw new Error("If encoding is specified then the first argument must be a string");
    }
    return allocUnsafe(this, arg);
  }
  return from(this, arg, encodingOrOffset, length);
}
Buffer2.poolSize = 8192;
Buffer2._augment = function(arr) {
  arr.__proto__ = Buffer2.prototype;
  return arr;
};
function from(that, value, encodingOrOffset, length) {
  if (typeof value === "number") {
    throw new TypeError('"value" argument must not be a number');
  }
  if (typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }
  if (typeof value === "string") {
    return fromString(that, value, encodingOrOffset);
  }
  return fromObject(that, value);
}
Buffer2.from = function(value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};
if (Buffer2.TYPED_ARRAY_SUPPORT) {
  Buffer2.prototype.__proto__ = Uint8Array.prototype;
  Buffer2.__proto__ = Uint8Array;
}
function assertSize(size) {
  if (typeof size !== "number") {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}
function alloc(that, size, fill2, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size);
  }
  if (fill2 !== void 0) {
    return typeof encoding === "string" ? createBuffer(that, size).fill(fill2, encoding) : createBuffer(that, size).fill(fill2);
  }
  return createBuffer(that, size);
}
Buffer2.alloc = function(size, fill2, encoding) {
  return alloc(null, size, fill2, encoding);
};
function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer2.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that;
}
Buffer2.allocUnsafe = function(size) {
  return allocUnsafe(null, size);
};
Buffer2.allocUnsafeSlow = function(size) {
  return allocUnsafe(null, size);
};
function fromString(that, string, encoding) {
  if (typeof encoding !== "string" || encoding === "") {
    encoding = "utf8";
  }
  if (!Buffer2.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }
  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);
  if (actual !== length) {
    that = that.slice(0, actual);
  }
  return that;
}
function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that;
}
function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength;
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError("'offset' is out of bounds");
  }
  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError("'length' is out of bounds");
  }
  if (byteOffset === void 0 && length === void 0) {
    array = new Uint8Array(array);
  } else if (length === void 0) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }
  if (Buffer2.TYPED_ARRAY_SUPPORT) {
    that = array;
    that.__proto__ = Buffer2.prototype;
  } else {
    that = fromArrayLike(that, array);
  }
  return that;
}
function fromObject(that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);
    if (that.length === 0) {
      return that;
    }
    obj.copy(that, 0, 0, len);
    return that;
  }
  if (obj) {
    if (typeof ArrayBuffer !== "undefined" && obj.buffer instanceof ArrayBuffer || "length" in obj) {
      if (typeof obj.length !== "number" || isnan(obj.length)) {
        return createBuffer(that, 0);
      }
      return fromArrayLike(that, obj);
    }
    if (obj.type === "Buffer" && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function checked(length) {
  if (length >= kMaxLength()) {
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
  }
  return length | 0;
}
Buffer2.isBuffer = isBuffer;
function internalIsBuffer(b) {
  return !!(b != null && b._isBuffer);
}
Buffer2.compare = function compare(a, b) {
  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
    throw new TypeError("Arguments must be Buffers");
  }
  if (a === b)
    return 0;
  var x = a.length;
  var y = b.length;
  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }
  if (x < y)
    return -1;
  if (y < x)
    return 1;
  return 0;
};
Buffer2.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return true;
    default:
      return false;
  }
};
Buffer2.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }
  if (list.length === 0) {
    return Buffer2.alloc(0);
  }
  var i;
  if (length === void 0) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }
  var buffer = Buffer2.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!internalIsBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer;
};
function byteLength(string, encoding) {
  if (internalIsBuffer(string)) {
    return string.length;
  }
  if (typeof ArrayBuffer !== "undefined" && typeof ArrayBuffer.isView === "function" && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== "string") {
    string = "" + string;
  }
  var len = string.length;
  if (len === 0)
    return 0;
  var loweredCase = false;
  for (; ; ) {
    switch (encoding) {
      case "ascii":
      case "latin1":
      case "binary":
        return len;
      case "utf8":
      case "utf-8":
      case void 0:
        return utf8ToBytes(string).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return len * 2;
      case "hex":
        return len >>> 1;
      case "base64":
        return base64ToBytes(string).length;
      default:
        if (loweredCase)
          return utf8ToBytes(string).length;
        encoding = ("" + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer2.byteLength = byteLength;
function slowToString(encoding, start, end) {
  var loweredCase = false;
  if (start === void 0 || start < 0) {
    start = 0;
  }
  if (start > this.length) {
    return "";
  }
  if (end === void 0 || end > this.length) {
    end = this.length;
  }
  if (end <= 0) {
    return "";
  }
  end >>>= 0;
  start >>>= 0;
  if (end <= start) {
    return "";
  }
  if (!encoding)
    encoding = "utf8";
  while (true) {
    switch (encoding) {
      case "hex":
        return hexSlice(this, start, end);
      case "utf8":
      case "utf-8":
        return utf8Slice(this, start, end);
      case "ascii":
        return asciiSlice(this, start, end);
      case "latin1":
      case "binary":
        return latin1Slice(this, start, end);
      case "base64":
        return base64Slice(this, start, end);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return utf16leSlice(this, start, end);
      default:
        if (loweredCase)
          throw new TypeError("Unknown encoding: " + encoding);
        encoding = (encoding + "").toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer2.prototype._isBuffer = true;
function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}
Buffer2.prototype.swap16 = function swap16() {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError("Buffer size must be a multiple of 16-bits");
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this;
};
Buffer2.prototype.swap32 = function swap32() {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError("Buffer size must be a multiple of 32-bits");
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this;
};
Buffer2.prototype.swap64 = function swap64() {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError("Buffer size must be a multiple of 64-bits");
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this;
};
Buffer2.prototype.toString = function toString2() {
  var length = this.length | 0;
  if (length === 0)
    return "";
  if (arguments.length === 0)
    return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};
Buffer2.prototype.equals = function equals(b) {
  if (!internalIsBuffer(b))
    throw new TypeError("Argument must be a Buffer");
  if (this === b)
    return true;
  return Buffer2.compare(this, b) === 0;
};
Buffer2.prototype.inspect = function inspect() {
  var str = "";
  var max = INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
    if (this.length > max)
      str += " ... ";
  }
  return "<Buffer " + str + ">";
};
Buffer2.prototype.compare = function compare2(target, start, end, thisStart, thisEnd) {
  if (!internalIsBuffer(target)) {
    throw new TypeError("Argument must be a Buffer");
  }
  if (start === void 0) {
    start = 0;
  }
  if (end === void 0) {
    end = target ? target.length : 0;
  }
  if (thisStart === void 0) {
    thisStart = 0;
  }
  if (thisEnd === void 0) {
    thisEnd = this.length;
  }
  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError("out of range index");
  }
  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }
  if (thisStart >= thisEnd) {
    return -1;
  }
  if (start >= end) {
    return 1;
  }
  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target)
    return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);
  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }
  if (x < y)
    return -1;
  if (y < x)
    return 1;
  return 0;
};
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  if (buffer.length === 0)
    return -1;
  if (typeof byteOffset === "string") {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 2147483647) {
    byteOffset = 2147483647;
  } else if (byteOffset < -2147483648) {
    byteOffset = -2147483648;
  }
  byteOffset = +byteOffset;
  if (isNaN(byteOffset)) {
    byteOffset = dir ? 0 : buffer.length - 1;
  }
  if (byteOffset < 0)
    byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir)
      return -1;
    else
      byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir)
      byteOffset = 0;
    else
      return -1;
  }
  if (typeof val === "string") {
    val = Buffer2.from(val, encoding);
  }
  if (internalIsBuffer(val)) {
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === "number") {
    val = val & 255;
    if (Buffer2.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === "function") {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }
  throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;
  if (encoding !== void 0) {
    encoding = String(encoding).toLowerCase();
    if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }
  function read2(buf, i2) {
    if (indexSize === 1) {
      return buf[i2];
    } else {
      return buf.readUInt16BE(i2 * indexSize);
    }
  }
  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read2(arr, i) === read2(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1)
          foundIndex = i;
        if (i - foundIndex + 1 === valLength)
          return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1)
          i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength)
      byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read2(arr, i + j) !== read2(val, j)) {
          found = false;
          break;
        }
      }
      if (found)
        return i;
    }
  }
  return -1;
}
Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }
  var strLen = string.length;
  if (strLen % 2 !== 0)
    throw new TypeError("Invalid hex string");
  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed))
      return i;
    buf[offset + i] = parsed;
  }
  return i;
}
function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}
function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer2.prototype.write = function write2(string, offset, length, encoding) {
  if (offset === void 0) {
    encoding = "utf8";
    length = this.length;
    offset = 0;
  } else if (length === void 0 && typeof offset === "string") {
    encoding = offset;
    length = this.length;
    offset = 0;
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === void 0)
        encoding = "utf8";
    } else {
      encoding = length;
      length = void 0;
    }
  } else {
    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
  }
  var remaining = this.length - offset;
  if (length === void 0 || length > remaining)
    length = remaining;
  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError("Attempt to write outside buffer bounds");
  }
  if (!encoding)
    encoding = "utf8";
  var loweredCase = false;
  for (; ; ) {
    switch (encoding) {
      case "hex":
        return hexWrite(this, string, offset, length);
      case "utf8":
      case "utf-8":
        return utf8Write(this, string, offset, length);
      case "ascii":
        return asciiWrite(this, string, offset, length);
      case "latin1":
      case "binary":
        return latin1Write(this, string, offset, length);
      case "base64":
        return base64Write(this, string, offset, length);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return ucs2Write(this, string, offset, length);
      default:
        if (loweredCase)
          throw new TypeError("Unknown encoding: " + encoding);
        encoding = ("" + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};
Buffer2.prototype.toJSON = function toJSON() {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return fromByteArray(buf);
  } else {
    return fromByteArray(buf.slice(start, end));
  }
}
function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;
      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 128) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 192) === 128) {
            tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
            if (tempCodePoint > 127) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
            if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
            if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
              codePoint = tempCodePoint;
            }
          }
      }
    }
    if (codePoint === null) {
      codePoint = 65533;
      bytesPerSequence = 1;
    } else if (codePoint > 65535) {
      codePoint -= 65536;
      res.push(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    res.push(codePoint);
    i += bytesPerSequence;
  }
  return decodeCodePointsArray(res);
}
var MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints);
  }
  var res = "";
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}
function asciiSlice(buf, start, end) {
  var ret = "";
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 127);
  }
  return ret;
}
function latin1Slice(buf, start, end) {
  var ret = "";
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}
function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0)
    start = 0;
  if (!end || end < 0 || end > len)
    end = len;
  var out = "";
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out;
}
function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = "";
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}
Buffer2.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === void 0 ? len : ~~end;
  if (start < 0) {
    start += len;
    if (start < 0)
      start = 0;
  } else if (start > len) {
    start = len;
  }
  if (end < 0) {
    end += len;
    if (end < 0)
      end = 0;
  } else if (end > len) {
    end = len;
  }
  if (end < start)
    end = start;
  var newBuf;
  if (Buffer2.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer2.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer2(sliceLen, void 0);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }
  return newBuf;
};
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0)
    throw new RangeError("offset is not uint");
  if (offset + ext > length)
    throw new RangeError("Trying to access beyond buffer length");
}
Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
  offset = offset | 0;
  byteLength2 = byteLength2 | 0;
  if (!noAssert)
    checkOffset(offset, byteLength2, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength2 && (mul *= 256)) {
    val += this[offset + i] * mul;
  }
  return val;
};
Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
  offset = offset | 0;
  byteLength2 = byteLength2 | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength2, this.length);
  }
  var val = this[offset + --byteLength2];
  var mul = 1;
  while (byteLength2 > 0 && (mul *= 256)) {
    val += this[offset + --byteLength2] * mul;
  }
  return val;
};
Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 1, this.length);
  return this[offset];
};
Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};
Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};
Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
};
Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length);
  return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
  offset = offset | 0;
  byteLength2 = byteLength2 | 0;
  if (!noAssert)
    checkOffset(offset, byteLength2, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength2 && (mul *= 256)) {
    val += this[offset + i] * mul;
  }
  mul *= 128;
  if (val >= mul)
    val -= Math.pow(2, 8 * byteLength2);
  return val;
};
Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
  offset = offset | 0;
  byteLength2 = byteLength2 | 0;
  if (!noAssert)
    checkOffset(offset, byteLength2, this.length);
  var i = byteLength2;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 256)) {
    val += this[offset + --i] * mul;
  }
  mul *= 128;
  if (val >= mul)
    val -= Math.pow(2, 8 * byteLength2);
  return val;
};
Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 1, this.length);
  if (!(this[offset] & 128))
    return this[offset];
  return (255 - this[offset] + 1) * -1;
};
Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 32768 ? val | 4294901760 : val;
};
Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 32768 ? val | 4294901760 : val;
};
Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length);
  return read(this, offset, true, 23, 4);
};
Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length);
  return read(this, offset, false, 23, 4);
};
Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 8, this.length);
  return read(this, offset, true, 52, 8);
};
Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 8, this.length);
  return read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min)
    throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length)
    throw new RangeError("Index out of range");
}
Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength2 = byteLength2 | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
    checkInt(this, value, offset, byteLength2, maxBytes, 0);
  }
  var mul = 1;
  var i = 0;
  this[offset] = value & 255;
  while (++i < byteLength2 && (mul *= 256)) {
    this[offset + i] = value / mul & 255;
  }
  return offset + byteLength2;
};
Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength2 = byteLength2 | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
    checkInt(this, value, offset, byteLength2, maxBytes, 0);
  }
  var i = byteLength2 - 1;
  var mul = 1;
  this[offset + i] = value & 255;
  while (--i >= 0 && (mul *= 256)) {
    this[offset + i] = value / mul & 255;
  }
  return offset + byteLength2;
};
Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert)
    checkInt(this, value, offset, 1, 255, 0);
  if (!Buffer2.TYPED_ARRAY_SUPPORT)
    value = Math.floor(value);
  this[offset] = value & 255;
  return offset + 1;
};
function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0)
    value = 65535 + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}
Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert)
    checkInt(this, value, offset, 2, 65535, 0);
  if (Buffer2.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};
Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert)
    checkInt(this, value, offset, 2, 65535, 0);
  if (Buffer2.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};
function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0)
    value = 4294967295 + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 255;
  }
}
Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert)
    checkInt(this, value, offset, 4, 4294967295, 0);
  if (Buffer2.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};
Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert)
    checkInt(this, value, offset, 4, 4294967295, 0);
  if (Buffer2.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};
Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength2 - 1);
    checkInt(this, value, offset, byteLength2, limit - 1, -limit);
  }
  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 255;
  while (++i < byteLength2 && (mul *= 256)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 255;
  }
  return offset + byteLength2;
};
Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength2 - 1);
    checkInt(this, value, offset, byteLength2, limit - 1, -limit);
  }
  var i = byteLength2 - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 255;
  while (--i >= 0 && (mul *= 256)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 255;
  }
  return offset + byteLength2;
};
Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert)
    checkInt(this, value, offset, 1, 127, -128);
  if (!Buffer2.TYPED_ARRAY_SUPPORT)
    value = Math.floor(value);
  if (value < 0)
    value = 255 + value + 1;
  this[offset] = value & 255;
  return offset + 1;
};
Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert)
    checkInt(this, value, offset, 2, 32767, -32768);
  if (Buffer2.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};
Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert)
    checkInt(this, value, offset, 2, 32767, -32768);
  if (Buffer2.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};
Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert)
    checkInt(this, value, offset, 4, 2147483647, -2147483648);
  if (Buffer2.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};
Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert)
    checkInt(this, value, offset, 4, 2147483647, -2147483648);
  if (value < 0)
    value = 4294967295 + value + 1;
  if (Buffer2.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length)
    throw new RangeError("Index out of range");
  if (offset < 0)
    throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4);
  }
  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}
Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};
Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8);
  }
  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}
Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};
Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
};
Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start)
    start = 0;
  if (!end && end !== 0)
    end = this.length;
  if (targetStart >= target.length)
    targetStart = target.length;
  if (!targetStart)
    targetStart = 0;
  if (end > 0 && end < start)
    end = start;
  if (end === start)
    return 0;
  if (target.length === 0 || this.length === 0)
    return 0;
  if (targetStart < 0) {
    throw new RangeError("targetStart out of bounds");
  }
  if (start < 0 || start >= this.length)
    throw new RangeError("sourceStart out of bounds");
  if (end < 0)
    throw new RangeError("sourceEnd out of bounds");
  if (end > this.length)
    end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }
  var len = end - start;
  var i;
  if (this === target && start < targetStart && targetStart < end) {
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1e3 || !Buffer2.TYPED_ARRAY_SUPPORT) {
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }
  return len;
};
Buffer2.prototype.fill = function fill(val, start, end, encoding) {
  if (typeof val === "string") {
    if (typeof start === "string") {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === "string") {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== void 0 && typeof encoding !== "string") {
      throw new TypeError("encoding must be a string");
    }
    if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
      throw new TypeError("Unknown encoding: " + encoding);
    }
  } else if (typeof val === "number") {
    val = val & 255;
  }
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError("Out of range index");
  }
  if (end <= start) {
    return this;
  }
  start = start >>> 0;
  end = end === void 0 ? this.length : end >>> 0;
  if (!val)
    val = 0;
  var i;
  if (typeof val === "number") {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = internalIsBuffer(val) ? val : utf8ToBytes(new Buffer2(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }
  return this;
};
var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
function base64clean(str) {
  str = stringtrim(str).replace(INVALID_BASE64_RE, "");
  if (str.length < 2)
    return "";
  while (str.length % 4 !== 0) {
    str = str + "=";
  }
  return str;
}
function stringtrim(str) {
  if (str.trim)
    return str.trim();
  return str.replace(/^\s+|\s+$/g, "");
}
function toHex(n) {
  if (n < 16)
    return "0" + n.toString(16);
  return n.toString(16);
}
function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];
  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);
    if (codePoint > 55295 && codePoint < 57344) {
      if (!leadSurrogate) {
        if (codePoint > 56319) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          continue;
        } else if (i + 1 === length) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          continue;
        }
        leadSurrogate = codePoint;
        continue;
      }
      if (codePoint < 56320) {
        if ((units -= 3) > -1)
          bytes.push(239, 191, 189);
        leadSurrogate = codePoint;
        continue;
      }
      codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
    } else if (leadSurrogate) {
      if ((units -= 3) > -1)
        bytes.push(239, 191, 189);
    }
    leadSurrogate = null;
    if (codePoint < 128) {
      if ((units -= 1) < 0)
        break;
      bytes.push(codePoint);
    } else if (codePoint < 2048) {
      if ((units -= 2) < 0)
        break;
      bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
    } else if (codePoint < 65536) {
      if ((units -= 3) < 0)
        break;
      bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else if (codePoint < 1114112) {
      if ((units -= 4) < 0)
        break;
      bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else {
      throw new Error("Invalid code point");
    }
  }
  return bytes;
}
function asciiToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    byteArray.push(str.charCodeAt(i) & 255);
  }
  return byteArray;
}
function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0)
      break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }
  return byteArray;
}
function base64ToBytes(str) {
  return toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length)
      break;
    dst[i + offset] = src[i];
  }
  return i;
}
function isnan(val) {
  return val !== val;
}
function isBuffer(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj));
}
function isFastBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
}
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isFastBuffer(obj.slice(0, 0));
}

// node_modules/imba/src/imba/utils.imba
var $23 = Symbol.for("#__initor__");
var $24 = Symbol.for("#__inited__");
var $1 = Symbol.for("#__hooks__");
var $2 = Symbol.for("#type");
var $21 = Symbol.for("#__listeners__");
function parseTime(value) {
  let typ = typeof value;
  if (typ == "number") {
    return value;
  }
  ;
  if (typ == "string") {
    if (/^\d+fps$/.test(value)) {
      return 1e3 / parseFloat(value);
    } else if (/^([-+]?[\d\.]+)s$/.test(value)) {
      return parseFloat(value) * 1e3;
    } else if (/^([-+]?[\d\.]+)ms$/.test(value)) {
      return parseFloat(value);
    }
    ;
  }
  ;
  return null;
}
function getDeepPropertyDescriptor(item, key, stop) {
  if (!item) {
    return void 0;
  }
  ;
  let desc = Object.getOwnPropertyDescriptor(item, key);
  if (desc || item == stop) {
    return desc || void 0;
  }
  ;
  return getDeepPropertyDescriptor(Reflect.getPrototypeOf(item), key, stop);
}
var emit__ = function(event, args, node) {
  let prev;
  let cb;
  let ret;
  while ((prev = node) && (node = node.next)) {
    if (cb = node.listener) {
      if (node.path && cb[node.path]) {
        ret = args ? cb[node.path].apply(cb, args) : cb[node.path]();
      } else {
        ret = args ? cb.apply(node, args) : cb.call(node);
      }
      ;
    }
    ;
    if (node.times && --node.times <= 0) {
      prev.next = node.next;
      node.listener = null;
    }
    ;
  }
  ;
  return;
};
function listen(obj, event, listener, path) {
  var $226;
  let cbs;
  let list;
  let tail;
  cbs = obj[$21] || (obj[$21] = {});
  list = cbs[event] || (cbs[event] = {});
  tail = list.tail || (list.tail = list.next = {});
  tail.listener = listener;
  tail.path = path;
  list.tail = tail.next = {};
  return tail;
}
function once(obj, event, listener) {
  let tail = listen(obj, event, listener);
  tail.times = 1;
  return tail;
}
function unlisten(obj, event, cb, meth) {
  let node;
  let prev;
  let meta = obj[$21];
  if (!meta) {
    return;
  }
  ;
  if (node = meta[event]) {
    while ((prev = node) && (node = node.next)) {
      if (node == cb || node.listener == cb) {
        prev.next = node.next;
        node.listener = null;
        break;
      }
      ;
    }
    ;
  }
  ;
  return;
}
function emit(obj, event, params) {
  let cb;
  if (cb = obj[$21]) {
    if (cb[event]) {
      emit__(event, params, cb[event]);
    }
    ;
    if (cb.all) {
      emit__(event, [event, params], cb.all);
    }
    ;
  }
  ;
  return;
}

// node_modules/imba/src/imba/scheduler.imba
function iter$__(a) {
  let v;
  return a ? (v = a.toIterable) ? v.call(a) : a : a;
}
var $12 = Symbol.for("#__init__");
var $22 = Symbol.for("#__patch__");
var $19 = Symbol.for("#__initor__");
var $20 = Symbol.for("#__inited__");
var $3 = Symbol.for("#__hooks__");
var $4 = Symbol.for("#schedule");
var $7 = Symbol.for("#frames");
var $8 = Symbol.for("#interval");
var $9 = Symbol.for("#stage");
var $10 = Symbol.for("#scheduled");
var $11 = Symbol.for("#version");
var $122 = Symbol.for("#fps");
var $13 = Symbol.for("#ticker");
var rAF = globalThis.requestAnimationFrame || function(blk) {
  return globalThis.setTimeout(blk, 1e3 / 60);
};
var SPF = 1 / 60;
var Scheduled = class {
  [$22]($$ = {}) {
    var $59;
    ($59 = $$.owner) !== void 0 && (this.owner = $59);
    ($59 = $$.target) !== void 0 && (this.target = $59);
    ($59 = $$.active) !== void 0 && (this.active = $59);
    ($59 = $$.value) !== void 0 && (this.value = $59);
    ($59 = $$.skip) !== void 0 && (this.skip = $59);
    ($59 = $$.last) !== void 0 && (this.last = $59);
  }
  constructor($$ = null) {
    this[$12]($$);
  }
  [$12]($$ = null) {
    var $610;
    this.owner = $$ && ($610 = $$.owner) !== void 0 ? $610 : null;
    this.target = $$ && ($610 = $$.target) !== void 0 ? $610 : null;
    this.active = $$ && ($610 = $$.active) !== void 0 ? $610 : false;
    this.value = $$ && ($610 = $$.value) !== void 0 ? $610 : void 0;
    this.skip = $$ && ($610 = $$.skip) !== void 0 ? $610 : 0;
    this.last = $$ && ($610 = $$.last) !== void 0 ? $610 : 0;
  }
  tick(scheduler2, source) {
    this.last = this.owner[$7];
    this.target.tick(this, source);
    return 1;
  }
  update(o, activate\u03A6) {
    let on = this.active;
    let val = o.value;
    let changed = this.value != val;
    if (changed) {
      this.deactivate();
      this.value = val;
    }
    ;
    if (this.value || on || activate\u03A6) {
      this.activate();
    }
    ;
    return this;
  }
  queue() {
    this.owner.add(this);
    return;
  }
  activate() {
    if (this.value === true) {
      this.owner.on("commit", this);
    } else if (this.value === false) {
      true;
    } else if (typeof this.value == "number") {
      let tock = this.value / (1e3 / 60);
      if (tock <= 2) {
        this.owner.on("raf", this);
      } else {
        this[$8] = globalThis.setInterval(this.queue.bind(this), this.value);
      }
      ;
    }
    ;
    this.active = true;
    return this;
  }
  deactivate() {
    if (this.value === true) {
      this.owner.un("commit", this);
    }
    ;
    this.owner.un("raf", this);
    if (this[$8]) {
      globalThis.clearInterval(this[$8]);
      this[$8] = null;
    }
    ;
    this.active = false;
    return this;
  }
};
var Scheduler = class {
  constructor() {
    var self2 = this;
    this.id = Symbol();
    this.queue = [];
    this.stage = -1;
    this[$9] = -1;
    this[$7] = 0;
    this[$10] = false;
    this[$11] = 0;
    this.listeners = {};
    this.intervals = {};
    self2.commit = function() {
      self2.add("commit");
      return self2;
    };
    this[$122] = 0;
    self2.$promise = null;
    self2.$resolve = null;
    this[$13] = function(e) {
      self2[$10] = false;
      return self2.tick(e);
    };
    self2;
  }
  touch() {
    return this[$11]++;
  }
  get version() {
    return this[$11];
  }
  add(item, force) {
    if (force || this.queue.indexOf(item) == -1) {
      this.queue.push(item);
    }
    ;
    if (!this[$10]) {
      this[$4]();
    }
    ;
    return this;
  }
  get committing\u03A6() {
    return this.queue.indexOf("commit") >= 0;
  }
  get syncing\u03A6() {
    return this[$9] == 1;
  }
  listen(ns, item) {
    let set = this.listeners[ns];
    let first = !set;
    set || (set = this.listeners[ns] = new Set());
    set.add(item);
    if (ns == "raf" && first) {
      this.add("raf");
    }
    ;
    return this;
  }
  unlisten(ns, item) {
    var $147;
    let set = this.listeners[ns];
    set && set.delete(item);
    if (ns == "raf" && set && set.size == 0) {
      $147 = this.listeners.raf, delete this.listeners.raf, $147;
    }
    ;
    return this;
  }
  on(ns, item) {
    return this.listen(ns, item);
  }
  un(ns, item) {
    return this.unlisten(ns, item);
  }
  get promise() {
    var self2 = this;
    return self2.$promise || (self2.$promise = new Promise(function(resolve) {
      return self2.$resolve = resolve;
    }));
  }
  tick(timestamp) {
    var self2 = this;
    let items = this.queue;
    let frame = this[$7]++;
    if (!this.ts) {
      this.ts = timestamp;
    }
    ;
    this.dt = timestamp - this.ts;
    this.ts = timestamp;
    this.queue = [];
    this[$9] = 1;
    this[$11]++;
    if (items.length) {
      for (let i = 0, $159 = iter$__(items), $165 = $159.length; i < $165; i++) {
        let item = $159[i];
        if (typeof item === "string" && this.listeners[item]) {
          self2.listeners[item].forEach(function(listener) {
            if (listener.tick instanceof Function) {
              return listener.tick(self2, item);
            } else if (listener instanceof Function) {
              return listener(self2, item);
            }
            ;
          });
        } else if (item instanceof Function) {
          item(self2.dt, self2);
        } else if (item.tick) {
          item.tick(self2.dt, self2);
        }
        ;
      }
      ;
    }
    ;
    this[$9] = this[$10] ? 0 : -1;
    if (self2.$promise) {
      self2.$resolve(self2);
      self2.$promise = self2.$resolve = null;
    }
    ;
    if (self2.listeners.raf && true) {
      self2.add("raf");
    }
    ;
    return self2;
  }
  [$4]() {
    if (!this[$10]) {
      this[$10] = true;
      if (this[$9] == -1) {
        this[$9] = 0;
      }
      ;
      rAF(this[$13]);
    }
    ;
    return this;
  }
  schedule(item, o) {
    var $173, $185;
    o || (o = item[$173 = this.id] || (item[$173] = {value: true}));
    let state2 = o[$185 = this.id] || (o[$185] = new Scheduled({owner: this, target: item}));
    return state2.update(o, true);
  }
  unschedule(item, o = {}) {
    o || (o = item[this.id]);
    let state2 = o && o[this.id];
    if (state2 && state2.active) {
      state2.deactivate();
    }
    ;
    return this;
  }
};
var scheduler = new Scheduler();
function commit() {
  return scheduler.add("commit").promise;
}
function setTimeout2(fn, ms) {
  return globalThis.setTimeout(function() {
    fn();
    commit();
    return;
  }, ms);
}
function setInterval2(fn, ms) {
  return globalThis.setInterval(function() {
    fn();
    commit();
    return;
  }, ms);
}
var clearInterval2 = globalThis.clearInterval;
var clearTimeout2 = globalThis.clearTimeout;
var instance = globalThis.imba || (globalThis.imba = {});
instance.commit = commit;
instance.setTimeout = setTimeout2;
instance.setInterval = setInterval2;
instance.clearInterval = clearInterval2;
instance.clearTimeout = clearTimeout2;

// node_modules/imba/src/imba/dom/flags.imba
var $14 = Symbol.for("#toStringDeopt");
var $72 = Symbol.for("#__initor__");
var $82 = Symbol.for("#__inited__");
var $25 = Symbol.for("#__hooks__");
var $32 = Symbol.for("#symbols");
var $42 = Symbol.for("#batches");
var $5 = Symbol.for("#extras");
var $6 = Symbol.for("#stacks");
var Flags = class {
  constructor(dom) {
    this.dom = dom;
    this.string = "";
  }
  contains(ref) {
    return this.dom.classList.contains(ref);
  }
  add(ref) {
    if (this.contains(ref)) {
      return this;
    }
    ;
    this.string += (this.string ? " " : "") + ref;
    this.dom.classList.add(ref);
    return this;
  }
  remove(ref) {
    if (!this.contains(ref)) {
      return this;
    }
    ;
    let regex = new RegExp("(^|\\s)" + ref + "(?=\\s|$)", "g");
    this.string = this.string.replace(regex, "");
    this.dom.classList.remove(ref);
    return this;
  }
  toggle(ref, bool) {
    if (bool === void 0) {
      bool = !this.contains(ref);
    }
    ;
    return bool ? this.add(ref) : this.remove(ref);
  }
  incr(ref, duration = 0) {
    var self2 = this;
    let m = this.stacks;
    let c = m[ref] || 0;
    if (c < 1) {
      this.add(ref);
    }
    ;
    if (duration > 0) {
      setTimeout(function() {
        return self2.decr(ref);
      }, duration);
    }
    ;
    return m[ref] = Math.max(c, 0) + 1;
  }
  decr(ref) {
    let m = this.stacks;
    let c = m[ref] || 0;
    if (c == 1) {
      this.remove(ref);
    }
    ;
    return m[ref] = Math.max(c, 1) - 1;
  }
  reconcile(sym, str) {
    let syms = this[$32];
    let vals = this[$42];
    let dirty = true;
    if (!syms) {
      syms = this[$32] = [sym];
      vals = this[$42] = [str || ""];
      this.toString = this.valueOf = this[$14];
    } else {
      let idx = syms.indexOf(sym);
      let val = str || "";
      if (idx == -1) {
        syms.push(sym);
        vals.push(val);
      } else if (vals[idx] != val) {
        vals[idx] = val;
      } else {
        dirty = false;
      }
      ;
    }
    ;
    if (dirty) {
      this[$5] = " " + vals.join(" ");
      this.sync();
    }
    ;
    return;
  }
  valueOf() {
    return this.string;
  }
  toString() {
    return this.string;
  }
  [$14]() {
    return this.string + (this[$5] || "");
  }
  sync() {
    return this.dom.flagSync$();
  }
  get stacks() {
    return this[$6] || (this[$6] = {});
  }
};

// node_modules/imba/src/imba/dom/context.imba
var $15 = Symbol.for("#__init__");
var $26 = Symbol.for("#__patch__");
var $73 = Symbol.for("#__initor__");
var $83 = Symbol.for("#__inited__");
var $33 = Symbol.for("#__hooks__");
var $43 = Symbol.for("#getRenderContext");
var $52 = Symbol.for("#getDynamicContext");
var $62 = Symbol();
var renderContext = {
  context: null
};
var Renderer = class {
  [$26]($$ = {}) {
    var $97;
    ($97 = $$.stack) !== void 0 && (this.stack = $97);
  }
  constructor($$ = null) {
    this[$15]($$);
  }
  [$15]($$ = null) {
    var $106;
    this.stack = $$ && ($106 = $$.stack) !== void 0 ? $106 : [];
  }
  push(el) {
    return this.stack.push(el);
  }
  pop(el) {
    return this.stack.pop();
  }
};
var renderer = new Renderer();
var RenderContext = class extends Map {
  static [$15]() {
    this.prototype[$73] = $62;
    return this;
  }
  constructor(parent, sym = null) {
    super();
    this._ = parent;
    this.sym = sym;
    this[$73] === $62 && (this[$33] && this[$33].inited(this), this[$83] && this[$83]());
  }
  pop() {
    return renderContext.context = null;
  }
  [$43](sym) {
    let out = this.get(sym);
    out || this.set(sym, out = new RenderContext(this._, sym));
    return renderContext.context = out;
  }
  [$52](sym, key) {
    return this[$43](sym)[$43](key);
  }
  run(value) {
    this.value = value;
    if (renderContext.context == this) {
      renderContext.context = null;
    }
    ;
    return this.get(value);
  }
  cache(val) {
    this.set(this.value, val);
    return val;
  }
};
RenderContext[$15]();
function createRenderContext(cache2, key = Symbol(), up = cache2) {
  return renderContext.context = cache2[key] || (cache2[key] = new RenderContext(up, key));
}
function getRenderContext() {
  let ctx = renderContext.context;
  let res = ctx || new RenderContext(null);
  if (true) {
    if (!ctx && renderer.stack.length > 0) {
      console.warn("detected unmemoized nodes in", renderer.stack, "see https://imba.io", res);
    }
    ;
  }
  ;
  if (ctx) {
    renderContext.context = null;
  }
  ;
  return res;
}

// node_modules/imba/src/imba/dom/core.web.imba
function extend$__(target, ext) {
  const descriptors = Object.getOwnPropertyDescriptors(ext);
  delete descriptors.constructor;
  Object.defineProperties(target, descriptors);
  return target;
}
function iter$__2(a) {
  let v;
  return a ? (v = a.toIterable) ? v.call(a) : a : a;
}
var $16 = Symbol.for("#parent");
var $27 = Symbol.for("#closestNode");
var $34 = Symbol.for("#parentNode");
var $44 = Symbol.for("#context");
var $53 = Symbol.for("#__init__");
var $63 = Symbol.for("##inited");
var $74 = Symbol.for("#getRenderContext");
var $84 = Symbol.for("#getDynamicContext");
var $92 = Symbol.for("#insertChild");
var $102 = Symbol.for("#appendChild");
var $112 = Symbol.for("#replaceChild");
var $123 = Symbol.for("#removeChild");
var $132 = Symbol.for("#insertInto");
var $142 = Symbol.for("#insertIntoDeopt");
var $152 = Symbol.for("#removeFrom");
var $162 = Symbol.for("#removeFromDeopt");
var $17 = Symbol.for("#replaceWith");
var $18 = Symbol.for("#replaceWithDeopt");
var $192 = Symbol.for("#placeholderNode");
var $202 = Symbol.for("#attachToParent");
var $212 = Symbol.for("#detachFromParent");
var $222 = Symbol.for("#placeChild");
var $232 = Symbol.for("#beforeReconcile");
var $242 = Symbol.for("#afterReconcile");
var $252 = Symbol.for("#afterVisit");
var $262 = Symbol.for("##parent");
var $272 = Symbol.for("##up");
var $28 = Symbol.for("##context");
var $29 = Symbol.for("#domNode");
var $30 = Symbol.for("##placeholderNode");
var $31 = Symbol.for("#domDeopt");
var $322 = Symbol.for("#isRichElement");
var $342 = Symbol.for("#src");
var $422 = Symbol.for("#htmlNodeName");
var $432 = Symbol.for("#getSlot");
var $442 = Symbol.for("#ImbaElement");
var $45 = Symbol.for("#cssns");
var $46 = Symbol.for("#cssid");
var {
  Event,
  UIEvent,
  MouseEvent,
  PointerEvent,
  KeyboardEvent,
  CustomEvent: CustomEvent2,
  Node,
  Comment,
  Text,
  Element,
  HTMLElement,
  HTMLHtmlElement,
  HTMLSelectElement,
  HTMLInputElement,
  HTMLTextAreaElement,
  HTMLButtonElement,
  HTMLOptionElement,
  HTMLScriptElement,
  SVGElement,
  DocumentFragment,
  ShadowRoot,
  Document,
  Window,
  customElements
} = globalThis.window;
var descriptorCache = {};
function getDescriptor(item, key, cache2) {
  if (!item) {
    return cache2[key] = null;
  }
  ;
  if (cache2[key] !== void 0) {
    return cache2[key];
  }
  ;
  let desc = Object.getOwnPropertyDescriptor(item, key);
  if (desc !== void 0 || item == SVGElement) {
    return cache2[key] = desc || null;
  }
  ;
  return getDescriptor(Reflect.getPrototypeOf(item), key, cache2);
}
var CustomTagConstructors = {};
var CustomTagToElementNames = {};
var TYPES = {};
var CUSTOM_TYPES = {};
var contextHandler = {
  get(target, name) {
    let ctx = target;
    let val = void 0;
    while (ctx && val == void 0) {
      if (ctx = ctx[$16]) {
        val = ctx[name];
      }
      ;
    }
    ;
    return val;
  },
  set(target, name, value) {
    let ctx = target;
    let val = void 0;
    while (ctx && val == void 0) {
      let desc = getDeepPropertyDescriptor(ctx, name, Element);
      if (desc) {
        ctx[name] = value;
        return true;
      } else {
        ctx = ctx[$16];
      }
      ;
    }
    ;
    return true;
  }
};
var Extend$Document$af = class {
  get flags() {
    return this.documentElement.flags;
  }
};
extend$__(Document.prototype, Extend$Document$af.prototype);
var Extend$Node$ag = class {
  get [$16]() {
    return this[$262] || this.parentNode || this[$272];
  }
  get [$27]() {
    return this;
  }
  get [$34]() {
    return this[$16][$27];
  }
  get [$44]() {
    return this[$28] || (this[$28] = new Proxy(this, contextHandler));
  }
  [$53]() {
    return this;
  }
  [$63]() {
    return this;
  }
  [$74](sym) {
    return createRenderContext(this, sym);
  }
  [$84](sym, key) {
    return this[$74](sym)[$74](key);
  }
  [$92](newnode, refnode) {
    return newnode[$132](this, refnode);
  }
  [$102](newnode) {
    return newnode[$132](this, null);
  }
  [$112](newnode, oldnode) {
    let res = this[$92](newnode, oldnode);
    this[$123](oldnode);
    return res;
  }
  [$123](node) {
    return node[$152](this);
  }
  [$132](parent, before = null) {
    if (before) {
      parent.insertBefore(this, before);
    } else {
      parent.appendChild(this);
    }
    ;
    return this;
  }
  [$142](parent, before) {
    if (before) {
      parent.insertBefore(this[$29] || this, before);
    } else {
      parent.appendChild(this[$29] || this);
    }
    ;
    return this;
  }
  [$152](parent) {
    return parent.removeChild(this);
  }
  [$162](parent) {
    return parent.removeChild(this[$29] || this);
  }
  [$17](other, parent) {
    return parent[$112](other, this);
  }
  [$18](other, parent) {
    return parent[$112](other, this[$29] || this);
  }
  get [$192]() {
    return this[$30] || (this[$30] = globalThis.document.createComment("placeholder"));
  }
  set [$192](value) {
    let prev = this[$30];
    this[$30] = value;
    if (prev && prev != value && prev.parentNode) {
      prev[$17](value);
    }
    ;
  }
  [$202]() {
    let ph = this[$29];
    let par = ph && ph.parentNode;
    if (ph && par && ph != this) {
      this[$29] = null;
      this[$132](par, ph);
      ph[$152](par);
    }
    ;
    return this;
  }
  [$212]() {
    if (this[$31] != true ? (this[$31] = true, true) : false) {
      this[$17] = this[$18];
      this[$152] = this[$162];
      this[$132] = this[$142];
    }
    ;
    let ph = this[$192];
    if (this.parentNode && ph != this) {
      ph[$132](this.parentNode, this);
      this[$152](this.parentNode);
    }
    ;
    this[$29] = ph;
    return this;
  }
  [$222](item, f, prev) {
    let type2 = typeof item;
    if (type2 === "undefined" || item === null) {
      if (prev && prev instanceof Comment) {
        return prev;
      }
      ;
      let el = globalThis.document.createComment("");
      return prev ? prev[$17](el, this) : el[$132](this, null);
    }
    ;
    if (item === prev) {
      return item;
    } else if (type2 !== "object") {
      let res;
      let txt = item;
      if (f & 128 && f & 256 && false) {
        this.textContent = txt;
        return;
      }
      ;
      if (prev) {
        if (prev instanceof Text) {
          prev.textContent = txt;
          return prev;
        } else {
          res = globalThis.document.createTextNode(txt);
          prev[$17](res, this);
          return res;
        }
        ;
      } else {
        this.appendChild(res = globalThis.document.createTextNode(txt));
        return res;
      }
      ;
    } else {
      if (true) {
        if (!item[$132]) {
          console.warn("Tried to insert", item, "into", this);
          throw new TypeError("Only DOM Nodes can be inserted into DOM");
        }
        ;
      }
      ;
      return prev ? prev[$17](item, this) : item[$132](this, null);
    }
    ;
    return;
  }
};
extend$__(Node.prototype, Extend$Node$ag.prototype);
var Extend$Element$ah = class {
  log(...params) {
    console.log(...params);
    return this;
  }
  emit(name, detail, o = {bubbles: true, cancelable: true}) {
    if (detail != void 0) {
      o.detail = detail;
    }
    ;
    let event = new CustomEvent2(name, o);
    let res = this.dispatchEvent(event);
    return event;
  }
  text$(item) {
    this.textContent = item;
    return this;
  }
  [$232]() {
    return this;
  }
  [$242]() {
    return this;
  }
  [$252]() {
    if (this.render) {
      this.render();
    }
    ;
    return;
  }
  get flags() {
    if (!this.$flags) {
      this.$flags = new Flags(this);
      if (this.flag$ == Element.prototype.flag$) {
        this.flags$ext = this.className;
      }
      ;
      this.flagDeopt$();
    }
    ;
    return this.$flags;
  }
  flag$(str) {
    let ns = this.flags$ns;
    this.className = ns ? ns + (this.flags$ext = str) : this.flags$ext = str;
    return;
  }
  flagDeopt$() {
    var self2 = this;
    this.flag$ = this.flagExt$;
    self2.flagSelf$ = function(str) {
      return self2.flagSync$(self2.flags$own = str);
    };
    return;
  }
  flagExt$(str) {
    return this.flagSync$(this.flags$ext = str);
  }
  flagSelf$(str) {
    this.flagDeopt$();
    return this.flagSelf$(str);
  }
  flagSync$() {
    return this.className = (this.flags$ns || "") + (this.flags$ext || "") + " " + (this.flags$own || "") + " " + (this.$flags || "");
  }
  set$(key, value) {
    let desc = getDeepPropertyDescriptor(this, key, Element);
    if (!desc || !desc.set) {
      this.setAttribute(key, value);
    } else {
      this[key] = value;
    }
    ;
    return;
  }
  get richValue() {
    return this.value;
  }
  set richValue(value) {
    this.value = value;
  }
};
extend$__(Element.prototype, Extend$Element$ah.prototype);
Element.prototype.setns$ = Element.prototype.setAttributeNS;
Element.prototype[$322] = true;
function createElement(name, parent, flags, text) {
  let el = globalThis.document.createElement(name);
  if (flags) {
    el.className = flags;
  }
  ;
  if (text !== null) {
    el.text$(text);
  }
  ;
  if (parent && parent[$102]) {
    parent[$102](el);
  }
  ;
  return el;
}
var Extend$SVGElement$ai = class {
  set$(key, value) {
    var $332;
    let cache2 = descriptorCache[$332 = this.nodeName] || (descriptorCache[$332] = {});
    let desc = getDescriptor(this, key, cache2);
    if (!desc || !desc.set) {
      this.setAttribute(key, value);
    } else {
      this[key] = value;
    }
    ;
    return;
  }
  flag$(str) {
    let ns = this.flags$ns;
    this.setAttribute("class", ns ? ns + (this.flags$ext = str) : this.flags$ext = str);
    return;
  }
  flagSelf$(str) {
    var self2 = this;
    self2.flag$ = function(str2) {
      return self2.flagSync$(self2.flags$ext = str2);
    };
    self2.flagSelf$ = function(str2) {
      return self2.flagSync$(self2.flags$own = str2);
    };
    return self2.flagSelf$(str);
  }
  flagSync$() {
    return this.setAttribute("class", (this.flags$ns || "") + (this.flags$ext || "") + " " + (this.flags$own || "") + " " + (this.$flags || ""));
  }
};
extend$__(SVGElement.prototype, Extend$SVGElement$ai.prototype);
var Extend$SVGSVGElement$aj = class {
  set src(value) {
    if (this[$342] != value ? (this[$342] = value, true) : false) {
      if (value) {
        if (value.adoptNode) {
          value.adoptNode(this);
        } else if (value.content) {
          for (let $373 = value.attributes, $352 = 0, $362 = Object.keys($373), $382 = $362.length, k, v; $352 < $382; $352++) {
            k = $362[$352];
            v = $373[k];
            this.setAttribute(k, v);
          }
          ;
          this.innerHTML = value.content;
        }
        ;
      }
      ;
    }
    ;
    return;
  }
};
extend$__(SVGSVGElement.prototype, Extend$SVGSVGElement$aj.prototype);
function createComment(text) {
  return globalThis.document.createComment(text);
}
function createTextNode(text) {
  return globalThis.document.createTextNode(text);
}
var navigator2 = globalThis.navigator;
var vendor = navigator2 && navigator2.vendor || "";
var ua = navigator2 && navigator2.userAgent || "";
var isSafari = vendor.indexOf("Apple") > -1 || ua.indexOf("CriOS") >= 0 || ua.indexOf("FxiOS") >= 0;
var supportsCustomizedBuiltInElements = !isSafari;
var CustomDescriptorCache = new Map();
var CustomHook = class extends HTMLElement {
  connectedCallback() {
    if (supportsCustomizedBuiltInElements) {
      return this.parentNode.removeChild(this);
    } else {
      return this.parentNode.connectedCallback();
    }
    ;
  }
  disconnectedCallback() {
    if (!supportsCustomizedBuiltInElements) {
      return this.parentNode.disconnectedCallback();
    }
    ;
  }
};
window.customElements.define("i-hook", CustomHook);
function getCustomDescriptors(el, klass) {
  let props2 = CustomDescriptorCache.get(klass);
  if (!props2) {
    props2 = {};
    let proto = klass.prototype;
    let protos = [proto];
    while (proto = proto && Object.getPrototypeOf(proto)) {
      if (proto.constructor == el.constructor) {
        break;
      }
      ;
      protos.unshift(proto);
    }
    ;
    for (let $392 = 0, $402 = iter$__2(protos), $41 = $402.length; $392 < $41; $392++) {
      let item = $402[$392];
      let desc = Object.getOwnPropertyDescriptors(item);
      Object.assign(props2, desc);
    }
    ;
    CustomDescriptorCache.set(klass, props2);
  }
  ;
  return props2;
}
function createComponent(name, parent, flags, text, ctx) {
  let el;
  if (typeof name != "string") {
    if (name && name.nodeName) {
      name = name.nodeName;
    }
    ;
  }
  ;
  let cmpname = CustomTagToElementNames[name] || name;
  if (CustomTagConstructors[name]) {
    let cls = CustomTagConstructors[name];
    let typ = cls.prototype[$422];
    if (typ && supportsCustomizedBuiltInElements) {
      el = globalThis.document.createElement(typ, {is: name});
    } else if (cls.create$ && typ) {
      el = globalThis.document.createElement(typ);
      el.setAttribute("is", cmpname);
      let props2 = getCustomDescriptors(el, cls);
      Object.defineProperties(el, props2);
      el.__slots = {};
      el.appendChild(globalThis.document.createElement("i-hook"));
    } else if (cls.create$) {
      el = cls.create$(el);
      el.__slots = {};
    } else {
      console.warn("could not create tag " + name);
    }
    ;
  } else {
    el = globalThis.document.createElement(CustomTagToElementNames[name] || name);
  }
  ;
  el[$262] = parent;
  el[$53]();
  el[$63]();
  if (text !== null) {
    el[$432]("__").text$(text);
  }
  ;
  if (flags || el.flags$ns) {
    el.flag$(flags || "");
  }
  ;
  return el;
}
function defineTag(name, klass, options = {}) {
  TYPES[name] = CUSTOM_TYPES[name] = klass;
  klass.nodeName = name;
  let componentName = name;
  let proto = klass.prototype;
  if (name.indexOf("-") == -1) {
    componentName = "" + name + "-tag";
    CustomTagToElementNames[name] = componentName;
  }
  ;
  if (options.cssns) {
    let ns = (proto._ns_ || proto[$45] || "") + " " + (options.cssns || "");
    proto._ns_ = ns.trim() + " ";
    proto[$45] = options.cssns;
  }
  ;
  if (options.cssid) {
    let ids = (proto.flags$ns || "") + " " + options.cssid;
    proto[$46] = options.cssid;
    proto.flags$ns = ids.trim() + " ";
  }
  ;
  if (proto[$422] && !options.extends) {
    options.extends = proto[$422];
  }
  ;
  if (options.extends) {
    proto[$422] = options.extends;
    CustomTagConstructors[name] = klass;
    if (supportsCustomizedBuiltInElements) {
      window.customElements.define(componentName, klass, {extends: options.extends});
    }
    ;
  } else {
    window.customElements.define(componentName, klass);
  }
  ;
  return klass;
}
var instance2 = globalThis.imba || (globalThis.imba = {});
instance2.document = globalThis.document;

// node_modules/imba/src/imba/dom/fragment.imba
function iter$__3(a) {
  let v;
  return a ? (v = a.toIterable) ? v.call(a) : a : a;
}
function extend$__2(target, ext) {
  const descriptors = Object.getOwnPropertyDescriptors(ext);
  delete descriptors.constructor;
  Object.defineProperties(target, descriptors);
  return target;
}
var $110 = Symbol.for("#parent");
var $210 = Symbol.for("#closestNode");
var $35 = Symbol.for("#isRichElement");
var $47 = Symbol.for("#afterVisit");
var $153 = Symbol.for("#__initor__");
var $163 = Symbol.for("#__inited__");
var $54 = Symbol.for("#__hooks__");
var $64 = Symbol.for("#appendChild");
var $75 = Symbol.for("#removeChild");
var $85 = Symbol.for("#insertInto");
var $93 = Symbol.for("#replaceWith");
var $103 = Symbol.for("#insertChild");
var $113 = Symbol.for("#removeFrom");
var $124 = Symbol.for("#placeChild");
var $143 = Symbol.for("#__init__");
var $172 = Symbol.for("#registerFunctionalSlot");
var $182 = Symbol.for("#getFunctionalSlot");
var $193 = Symbol.for("#getSlot");
var $203 = Symbol.for("##parent");
var $213 = Symbol.for("##up");
var $223 = Symbol.for("##flags");
var $233 = Symbol.for("#domFlags");
var $243 = Symbol.for("#end");
var $253 = Symbol.for("#textContent");
var $292 = Symbol.for("#textNode");
var $36 = Symbol.for("#functionalSlots");
var $133 = Symbol();
var Fragment = class {
  constructor() {
    this.childNodes = [];
  }
  log(...params) {
    return;
  }
  hasChildNodes() {
    return false;
  }
  set [$110](value) {
    this[$203] = value;
  }
  get [$110]() {
    return this[$203] || this[$213];
  }
  get [$210]() {
    return this[$110][$210];
  }
  get [$35]() {
    return true;
  }
  get flags() {
    return this[$223] || (this[$223] = new Flags(this));
  }
  flagSync$() {
    return this;
  }
  [$47]() {
    return this;
  }
};
var counter = 0;
var VirtualFragment = class extends Fragment {
  static [$143]() {
    this.prototype[$153] = $133;
    return this;
  }
  constructor(flags, parent) {
    super(...arguments);
    this[$213] = parent;
    this.parentNode = null;
    this[$233] = flags;
    this.childNodes = [];
    this[$243] = createComment("slot" + counter++);
    if (parent) {
      parent[$64](this);
    }
    ;
    this[$153] === $133 && (this[$54] && this[$54].inited(this), this[$163] && this[$163]());
  }
  get [$110]() {
    return this[$203] || this.parentNode || this[$213];
  }
  set textContent(text) {
    this[$253] = text;
  }
  get textContent() {
    return this[$253];
  }
  hasChildNodes() {
    for (let $265 = 0, $273 = iter$__3(this.childNodes), $282 = $273.length; $265 < $282; $265++) {
      let item = $273[$265];
      if (item instanceof Fragment) {
        if (item.hasChildNodes()) {
          return true;
        }
        ;
      }
      ;
      if (item instanceof Comment) {
        true;
      } else if (item instanceof Node) {
        return true;
      }
      ;
    }
    ;
    return false;
  }
  text$(item) {
    if (!this[$292]) {
      this[$292] = this[$124](item);
    } else {
      this[$292].textContent = item;
    }
    ;
    return this[$292];
  }
  appendChild(child) {
    if (this.parentNode) {
      child[$85](this.parentNode, this[$243]);
    }
    ;
    return this.childNodes.push(child);
  }
  [$64](child) {
    if (this.parentNode) {
      child[$85](this.parentNode, this[$243]);
    }
    ;
    return this.childNodes.push(child);
  }
  insertBefore(node, refnode) {
    if (this.parentNode) {
      this.parentNode[$103](node, refnode);
    }
    ;
    let idx = this.childNodes.indexOf(refnode);
    if (idx >= 0) {
      this.childNodes.splice(idx, 0, node);
    }
    ;
    return node;
  }
  [$75](node) {
    if (this.parentNode) {
      this.parentNode[$75](node);
    }
    ;
    let idx = this.childNodes.indexOf(node);
    if (idx >= 0) {
      this.childNodes.splice(idx, 1);
    }
    ;
    return;
  }
  [$85](parent, before) {
    let prev = this.parentNode;
    if (this.parentNode != parent ? (this.parentNode = parent, true) : false) {
      if (this[$243]) {
        before = this[$243][$85](parent, before);
      }
      ;
      for (let $304 = 0, $312 = iter$__3(this.childNodes), $324 = $312.length; $304 < $324; $304++) {
        let item = $312[$304];
        item[$85](parent, before);
      }
      ;
    }
    ;
    return this;
  }
  [$93](node, parent) {
    let res = node[$85](parent, this[$243]);
    this[$113](parent);
    return res;
  }
  [$103](node, refnode) {
    if (this.parentNode) {
      this.insertBefore(node, refnode || this[$243]);
    }
    ;
    if (refnode) {
      let idx = this.childNodes.indexOf(refnode);
      if (idx >= 0) {
        this.childNodes.splice(idx, 0, node);
      }
      ;
    } else {
      this.childNodes.push(node);
    }
    ;
    return node;
  }
  [$113](parent) {
    for (let $332 = 0, $344 = iter$__3(this.childNodes), $352 = $344.length; $332 < $352; $332++) {
      let item = $344[$332];
      item[$113](parent);
    }
    ;
    if (this[$243]) {
      this[$243][$113](parent);
    }
    ;
    this.parentNode = null;
    return this;
  }
  [$124](item, f, prev) {
    let par = this.parentNode;
    let type2 = typeof item;
    if (type2 === "undefined" || item === null) {
      if (prev && prev instanceof Comment) {
        return prev;
      }
      ;
      let el = createComment("");
      if (prev) {
        let idx = this.childNodes.indexOf(prev);
        this.childNodes.splice(idx, 1, el);
        if (par) {
          prev[$93](el, par);
        }
        ;
        return el;
      }
      ;
      this.childNodes.push(el);
      if (par) {
        el[$85](par, this[$243]);
      }
      ;
      return el;
    }
    ;
    if (item === prev) {
      return item;
    }
    ;
    if (type2 !== "object") {
      let res;
      let txt = item;
      if (prev) {
        if (prev instanceof Text) {
          prev.textContent = txt;
          return prev;
        } else {
          res = createTextNode(txt);
          let idx = this.childNodes.indexOf(prev);
          this.childNodes.splice(idx, 1, res);
          if (par) {
            prev[$93](res, par);
          }
          ;
          return res;
        }
        ;
      } else {
        this.childNodes.push(res = createTextNode(txt));
        if (par) {
          res[$85](par, this[$243]);
        }
        ;
        return res;
      }
      ;
    } else if (prev) {
      let idx = this.childNodes.indexOf(prev);
      this.childNodes.splice(idx, 1, item);
      if (par) {
        prev[$93](item, par);
      }
      ;
      return item;
    } else {
      this.childNodes.push(item);
      if (par) {
        item[$85](par, this[$243]);
      }
      ;
      return item;
    }
    ;
  }
};
VirtualFragment[$143]();
function createSlot(bitflags, par) {
  const el = new VirtualFragment(bitflags, null);
  el[$213] = par;
  return el;
}
var Extend$Node$af = class {
  [$172](name) {
    let map = this[$36] || (this[$36] = {});
    return map[name] || (map[name] = createSlot(0, this));
  }
  [$182](name, context) {
    let map = this[$36];
    return map && map[name] || this[$193](name, context);
  }
  [$193](name, context) {
    var $373;
    if (name == "__" && !this.render) {
      return this;
    }
    ;
    return ($373 = this.__slots)[name] || ($373[name] = createSlot(0, this));
  }
};
extend$__2(Node.prototype, Extend$Node$af.prototype);

// node_modules/imba/src/imba/dom/indexed-list.imba
function iter$__4(a) {
  let v;
  return a ? (v = a.toIterable) ? v.call(a) : a : a;
}
var $111 = Symbol.for("#afterVisit");
var $211 = Symbol.for("#insertInto");
var $37 = Symbol.for("#appendChild");
var $48 = Symbol.for("#replaceWith");
var $55 = Symbol.for("#removeFrom");
var $94 = Symbol.for("#__initor__");
var $104 = Symbol.for("#__inited__");
var $65 = Symbol.for("#__hooks__");
var $86 = Symbol.for("#__init__");
var $114 = Symbol.for("#domFlags");
var $125 = Symbol.for("##parent");
var $134 = Symbol.for("#end");
var $144 = Symbol.for("#removeChild");
var $154 = Symbol.for("#insertChild");
var $76 = Symbol();
var IndexedTagFragment = class extends Fragment {
  static [$86]() {
    this.prototype[$94] = $76;
    return this;
  }
  constructor(f, parent) {
    super(...arguments);
    this[$114] = f;
    this[$125] = parent;
    if (!(f & 256)) {
      this[$134] = createComment("list");
    }
    ;
    this.$ = this.childNodes;
    this.length = 0;
    if (parent) {
      parent[$37](this);
    }
    ;
    this[$94] === $76 && (this[$65] && this[$65].inited(this), this[$104] && this[$104]());
  }
  hasChildNodes() {
    if (this.length == 0) {
      return false;
    }
    ;
    return true;
  }
  [$111](len) {
    let from2 = this.length;
    this.length = len;
    if (from2 == len) {
      return;
    }
    ;
    let par = this.parentNode;
    if (!par) {
      return;
    }
    ;
    let array = this.childNodes;
    let end = this[$134];
    if (from2 > len) {
      while (from2 > len) {
        par[$144](array[--from2]);
      }
      ;
    } else if (len > from2) {
      while (len > from2) {
        par[$154](array[from2++], end);
      }
      ;
    }
    ;
    this.length = len;
    return;
  }
  [$211](parent, before) {
    this.parentNode = parent;
    if (this[$134]) {
      this[$134][$211](parent, before);
    }
    ;
    before = this[$134];
    for (let i = 0, $165 = iter$__4(this.childNodes), $173 = $165.length; i < $173; i++) {
      let item = $165[i];
      if (i == this.length) {
        break;
      }
      ;
      item[$211](parent, before);
    }
    ;
    return this;
  }
  [$37](item) {
    return;
  }
  [$48](rel, parent) {
    let res = rel[$211](parent, this[$134]);
    this[$55](parent);
    return res;
  }
  [$55](parent) {
    let i = this.length;
    while (i > 0) {
      let el = this.childNodes[--i];
      el[$55](parent);
    }
    ;
    if (this[$134]) {
      parent.removeChild(this[$134]);
    }
    ;
    this.parentNode = null;
    return;
  }
};
IndexedTagFragment[$86]();
function createIndexedList(bitflags, parent) {
  return new IndexedTagFragment(bitflags, parent);
}

// node_modules/imba/src/imba/dom/component.imba
function iter$__5(a) {
  let v;
  return a ? (v = a.toIterable) ? v.call(a) : a : a;
}
var $115 = Symbol.for("#__init__");
var $214 = Symbol.for("#__patch__");
var $38 = Symbol.for("##inited");
var $49 = Symbol.for("#afterVisit");
var $56 = Symbol.for("#beforeReconcile");
var $66 = Symbol.for("#afterReconcile");
var $116 = Symbol.for("#count");
var $155 = Symbol.for("#__hooks__");
var $164 = Symbol.for("#autorender");
var hydrator = new class {
  [$214]($$ = {}) {
    var $710;
    ($710 = $$.items) !== void 0 && (this.items = $710);
    ($710 = $$.current) !== void 0 && (this.current = $710);
    ($710 = $$.lastQueued) !== void 0 && (this.lastQueued = $710);
    ($710 = $$.tests) !== void 0 && (this.tests = $710);
  }
  constructor($$ = null) {
    this[$115]($$);
  }
  [$115]($$ = null) {
    var $810;
    this.items = $$ && ($810 = $$.items) !== void 0 ? $810 : [];
    this.current = $$ && ($810 = $$.current) !== void 0 ? $810 : null;
    this.lastQueued = $$ && ($810 = $$.lastQueued) !== void 0 ? $810 : null;
    this.tests = $$ && ($810 = $$.tests) !== void 0 ? $810 : 0;
  }
  flush() {
    let item = null;
    if (false) {
    }
    ;
    while (item = this.items.shift()) {
      if (!item.parentNode || item.hydrated\u03A6) {
        continue;
      }
      ;
      let prev = this.current;
      this.current = item;
      item.__F |= 1024;
      item.connectedCallback();
      this.current = prev;
    }
    ;
    return;
  }
  queue(item) {
    var self2 = this;
    let len = this.items.length;
    let idx = 0;
    let prev = this.lastQueued;
    this.lastQueued = item;
    let BEFORE = Node.DOCUMENT_POSITION_PRECEDING;
    let AFTER = Node.DOCUMENT_POSITION_FOLLOWING;
    if (len) {
      let prevIndex = this.items.indexOf(prev);
      let index = prevIndex;
      let compare3 = function(a, b) {
        self2.tests++;
        return a.compareDocumentPosition(b);
      };
      if (prevIndex == -1 || prev.nodeName != item.nodeName) {
        index = prevIndex = 0;
      }
      ;
      let curr = self2.items[index];
      while (curr && compare3(curr, item) & AFTER) {
        curr = self2.items[++index];
      }
      ;
      if (index != prevIndex) {
        curr ? self2.items.splice(index, 0, item) : self2.items.push(item);
      } else {
        while (curr && compare3(curr, item) & BEFORE) {
          curr = self2.items[--index];
        }
        ;
        if (index != prevIndex) {
          curr ? self2.items.splice(index + 1, 0, item) : self2.items.unshift(item);
        }
        ;
      }
      ;
    } else {
      self2.items.push(item);
      if (!self2.current) {
        globalThis.queueMicrotask(self2.flush.bind(self2));
      }
      ;
    }
    ;
    return;
  }
  run(item) {
    var $147, $127;
    if (this.active) {
      return;
    }
    ;
    this.active = true;
    let all = globalThis.document.querySelectorAll(".__ssr");
    console.log("running hydrator", item, all.length, Array.from(all));
    for (let $97 = 0, $106 = iter$__5(all), $138 = $106.length; $97 < $138; $97++) {
      let item2 = $106[$97];
      item2[$116] || (item2[$116] = 1);
      item2[$116]++;
      let name = item2.nodeName;
      let typ = ($127 = this.map)[name] || ($127[name] = globalThis.window.customElements.get(name.toLowerCase()) || HTMLElement);
      console.log("item type", name, typ, !!CUSTOM_TYPES[name.toLowerCase()]);
      if (!item2.connectedCallback || !item2.parentNode || item2.hydrated\u03A6) {
        continue;
      }
      ;
      console.log("hydrate", item2);
    }
    ;
    return this.active = false;
  }
}();
var Component = class extends HTMLElement {
  constructor() {
    super();
    if (this.flags$ns) {
      this.flag$ = this.flagExt$;
    }
    ;
    this.setup$();
    this.build();
  }
  setup$() {
    this.__slots = {};
    return this.__F = 0;
  }
  [$115]() {
    this.__F |= 1 | 2;
    return this;
  }
  [$38]() {
    if (this[$155]) {
      return this[$155].inited(this);
    }
    ;
  }
  flag$(str) {
    this.className = this.flags$ext = str;
    return;
  }
  build() {
    return this;
  }
  awaken() {
    return this;
  }
  mount() {
    return this;
  }
  unmount() {
    return this;
  }
  rendered() {
    return this;
  }
  dehydrate() {
    return this;
  }
  hydrate() {
    this.autoschedule = true;
    return this;
  }
  tick() {
    return this.commit();
  }
  visit() {
    return this.commit();
  }
  commit() {
    if (!this.render\u03A6) {
      this.__F |= 8192;
      return this;
    }
    ;
    this.__F |= 256;
    this.render && this.render();
    this.rendered();
    return this.__F = (this.__F | 512) & ~256 & ~8192;
  }
  get autoschedule() {
    return (this.__F & 64) != 0;
  }
  set autoschedule(value) {
    value ? this.__F |= 64 : this.__F &= ~64;
  }
  set autorender(value) {
    let o = this[$164] || (this[$164] = {});
    o.value = value;
    if (this.mounted\u03A6) {
      scheduler.schedule(this, o);
    }
    ;
    return;
  }
  get render\u03A6() {
    return !this.suspended\u03A6;
  }
  get mounting\u03A6() {
    return (this.__F & 16) != 0;
  }
  get mounted\u03A6() {
    return (this.__F & 32) != 0;
  }
  get awakened\u03A6() {
    return (this.__F & 8) != 0;
  }
  get rendered\u03A6() {
    return (this.__F & 512) != 0;
  }
  get suspended\u03A6() {
    return (this.__F & 4096) != 0;
  }
  get rendering\u03A6() {
    return (this.__F & 256) != 0;
  }
  get scheduled\u03A6() {
    return (this.__F & 128) != 0;
  }
  get hydrated\u03A6() {
    return (this.__F & 2) != 0;
  }
  get ssr\u03A6() {
    return (this.__F & 1024) != 0;
  }
  schedule() {
    scheduler.on("commit", this);
    this.__F |= 128;
    return this;
  }
  unschedule() {
    scheduler.un("commit", this);
    this.__F &= ~128;
    return this;
  }
  async suspend(cb = null) {
    let val = this.flags.incr("_suspended_");
    this.__F |= 4096;
    if (cb instanceof Function) {
      await cb();
      this.unsuspend();
    }
    ;
    return this;
  }
  unsuspend() {
    let val = this.flags.decr("_suspended_");
    if (val == 0) {
      this.__F &= ~4096;
      this.commit();
      ;
    }
    ;
    return this;
  }
  [$49]() {
    return this.visit();
  }
  [$56]() {
    if (this.__F & 1024) {
      this.__F = this.__F & ~1024;
      this.classList.remove("_ssr_");
      if (this.flags$ext && this.flags$ext.indexOf("_ssr_") == 0) {
        this.flags$ext = this.flags$ext.slice(5);
      }
      ;
      if (!(this.__F & 512)) {
        this.innerHTML = "";
      }
      ;
    }
    ;
    if (true) {
      renderer.push(this);
    }
    ;
    return this;
  }
  [$66]() {
    if (true) {
      renderer.pop(this);
    }
    ;
    return this;
  }
  connectedCallback() {
    let flags = this.__F;
    let inited2 = flags & 1;
    let awakened = flags & 8;
    if (!inited2 && !(flags & 1024)) {
      hydrator.queue(this);
      return;
    }
    ;
    if (flags & (16 | 32)) {
      return;
    }
    ;
    this.__F |= 16;
    if (!inited2) {
      this[$115]();
    }
    ;
    if (!(flags & 2)) {
      this.flags$ext = this.className;
      this.__F |= 2;
      this.hydrate();
      this.commit();
    }
    ;
    if (!awakened) {
      this.awaken();
      this.__F |= 8;
    }
    ;
    emit(this, "mount");
    let res = this.mount();
    if (res && res.then instanceof Function) {
      res.then(scheduler.commit);
    }
    ;
    flags = this.__F = (this.__F | 32) & ~16;
    if (flags & 64) {
      this.schedule();
    }
    ;
    if (this[$164]) {
      scheduler.schedule(this, this[$164]);
    }
    ;
    return this;
  }
  disconnectedCallback() {
    this.__F = this.__F & (~32 & ~16);
    if (this.__F & 128) {
      this.unschedule();
    }
    ;
    emit(this, "unmount");
    this.unmount();
    if (this[$164]) {
      return scheduler.unschedule(this, this[$164]);
    }
    ;
  }
};

// node_modules/imba/src/imba/dom/mount.imba
var $117 = Symbol.for("#insertInto");
var $215 = Symbol.for("#removeFrom");
function mount(mountable, into) {
  if (false) {
  }
  ;
  let parent = into || globalThis.document.body;
  let element = mountable;
  if (mountable instanceof Function) {
    let ctx = new RenderContext(parent, null);
    let tick = function() {
      let prev = renderContext.context;
      renderContext.context = ctx;
      let res = mountable(ctx);
      if (renderContext.context == ctx) {
        renderContext.context = prev;
      }
      ;
      return res;
    };
    element = tick();
    scheduler.listen("commit", tick);
  } else {
    element.__F |= 64;
  }
  ;
  element[$117](parent);
  return element;
}
function unmount(el) {
  if (el && el[$215]) {
    el[$215](el.parentNode);
  }
  ;
  return el;
}
var instance3 = globalThis.imba || (globalThis.imba = {});
instance3.mount = mount;
instance3.unmount = unmount;

// node_modules/imba/src/imba/dom/bind.imba
function extend$__3(target, ext) {
  const descriptors = Object.getOwnPropertyDescriptors(ext);
  delete descriptors.constructor;
  Object.defineProperties(target, descriptors);
  return target;
}
function iter$__6(a) {
  let v;
  return a ? (v = a.toIterable) ? v.call(a) : a : a;
}
var $118 = Symbol.for("#afterVisit");
function use_dom_bind() {
  return true;
}
var toBind = {
  INPUT: true,
  SELECT: true,
  TEXTAREA: true,
  BUTTON: true
};
var isGroup = function(obj) {
  return obj instanceof Array || obj && obj.has instanceof Function;
};
var bindHas = function(object, value) {
  if (object == value) {
    return true;
  } else if (object instanceof Array) {
    return object.indexOf(value) >= 0;
  } else if (object && object.has instanceof Function) {
    return object.has(value);
  } else if (object && object.contains instanceof Function) {
    return object.contains(value);
  } else {
    return false;
  }
  ;
};
var bindAdd = function(object, value) {
  if (object instanceof Array) {
    return object.push(value);
  } else if (object && object.add instanceof Function) {
    return object.add(value);
  }
  ;
};
var bindRemove = function(object, value) {
  if (object instanceof Array) {
    let idx = object.indexOf(value);
    if (idx >= 0) {
      return object.splice(idx, 1);
    }
    ;
  } else if (object && object.delete instanceof Function) {
    return object.delete(value);
  }
  ;
};
function createProxyProperty(target) {
  function getter() {
    return target[0] ? target[0][target[1]] : void 0;
  }
  ;
  function setter(v) {
    return target[0] ? target[0][target[1]] = v : null;
  }
  ;
  return {
    get: getter,
    set: setter
  };
}
var Extend$Element$af = class {
  getRichValue() {
    return this.value;
  }
  setRichValue(value) {
    return this.value = value;
  }
  bind$(key, value) {
    let o = value || [];
    if (key == "data" && !this.$$bound && toBind[this.nodeName]) {
      this.$$bound = true;
      if (this.change$) {
        this.addEventListener("change", this.change$ = this.change$.bind(this));
      }
      ;
      if (this.input$) {
        this.addEventListener("input", this.input$ = this.input$.bind(this), {capture: true});
      }
      ;
      if (this.click$) {
        this.addEventListener("click", this.click$ = this.click$.bind(this), {capture: true});
      }
      ;
    }
    ;
    Object.defineProperty(this, key, o instanceof Array ? createProxyProperty(o) : o);
    return o;
  }
};
extend$__3(Element.prototype, Extend$Element$af.prototype);
Object.defineProperty(Element.prototype, "richValue", {
  get: function() {
    return this.getRichValue();
  },
  set: function(v) {
    return this.setRichValue(v);
  }
});
var Extend$HTMLSelectElement$ag = class {
  change$(e) {
    let model = this.data;
    let prev = this.$$value;
    this.$$value = void 0;
    let values = this.getRichValue();
    if (this.multiple) {
      if (prev) {
        for (let $220 = 0, $312 = iter$__6(prev), $412 = $312.length; $220 < $412; $220++) {
          let value = $312[$220];
          if (values.indexOf(value) != -1) {
            continue;
          }
          ;
          bindRemove(model, value);
        }
        ;
      }
      ;
      for (let $59 = 0, $610 = iter$__6(values), $710 = $610.length; $59 < $710; $59++) {
        let value = $610[$59];
        if (!prev || prev.indexOf(value) == -1) {
          bindAdd(model, value);
        }
        ;
      }
      ;
    } else {
      this.data = values[0];
    }
    ;
    commit();
    return this;
  }
  getRichValue() {
    var $810;
    if (this.$$value) {
      return this.$$value;
    }
    ;
    $810 = [];
    for (let $97 = 0, $106 = iter$__6(this.selectedOptions), $1110 = $106.length; $97 < $1110; $97++) {
      let o = $106[$97];
      $810.push(o.richValue);
    }
    ;
    return this.$$value = $810;
  }
  syncValue() {
    let model = this.data;
    if (this.multiple) {
      let vals = [];
      for (let i = 0, $127 = iter$__6(this.options), $138 = $127.length; i < $138; i++) {
        let option = $127[i];
        let val = option.richValue;
        let sel = bindHas(model, val);
        option.selected = sel;
        if (sel) {
          vals.push(val);
        }
        ;
      }
      ;
      this.$$value = vals;
    } else {
      for (let i = 0, $147 = iter$__6(this.options), $159 = $147.length; i < $159; i++) {
        let option = $147[i];
        let val = option.richValue;
        if (val == model) {
          this.$$value = [val];
          this.selectedIndex = i;
          break;
        }
        ;
      }
      ;
    }
    ;
    return;
  }
  [$118]() {
    return this.syncValue();
  }
};
extend$__3(HTMLSelectElement.prototype, Extend$HTMLSelectElement$ag.prototype);
var Extend$HTMLOptionElement$ah = class {
  setRichValue(value) {
    this.$$value = value;
    return this.value = value;
  }
  getRichValue() {
    if (this.$$value !== void 0) {
      return this.$$value;
    }
    ;
    return this.value;
  }
};
extend$__3(HTMLOptionElement.prototype, Extend$HTMLOptionElement$ah.prototype);
var Extend$HTMLTextAreaElement$ai = class {
  setRichValue(value) {
    this.$$value = value;
    return this.value = value;
  }
  getRichValue() {
    if (this.$$value !== void 0) {
      return this.$$value;
    }
    ;
    return this.value;
  }
  input$(e) {
    this.data = this.value;
    return commit();
  }
  [$118]() {
    let val = this.data;
    if (val === null || val === void 0) {
      val = "";
    }
    ;
    if (this.$$bound && this.value != val) {
      return this.value = val;
    }
    ;
  }
};
extend$__3(HTMLTextAreaElement.prototype, Extend$HTMLTextAreaElement$ai.prototype);
var Extend$HTMLInputElement$aj = class {
  input$(e) {
    let typ = this.type;
    if (typ == "checkbox" || typ == "radio") {
      return;
    }
    ;
    this.$$value = void 0;
    this.data = this.richValue;
    return commit();
  }
  change$(e) {
    let model = this.data;
    let val = this.richValue;
    if (this.type == "checkbox" || this.type == "radio") {
      let checked2 = this.checked;
      if (isGroup(model)) {
        checked2 ? bindAdd(model, val) : bindRemove(model, val);
      } else {
        this.data = checked2 ? val : false;
      }
      ;
    }
    ;
    return commit();
  }
  setRichValue(value) {
    if (this.$$value !== value) {
      this.$$value = value;
      if (this.value !== value) {
        this.value = value;
      }
      ;
    }
    ;
    return;
  }
  getRichValue() {
    if (this.$$value !== void 0) {
      return this.$$value;
    }
    ;
    let value = this.value;
    let typ = this.type;
    if (typ == "range" || typ == "number") {
      value = this.valueAsNumber;
      if (Number.isNaN(value)) {
        value = null;
      }
      ;
    } else if (typ == "checkbox") {
      if (value == void 0 || value === "on") {
        value = true;
      }
      ;
    }
    ;
    return value;
  }
  [$118]() {
    if (this.$$bound) {
      let typ = this.type;
      if (typ == "checkbox" || typ == "radio") {
        let val = this.data;
        if (val === true || val === false || val == null) {
          this.checked = !!val;
        } else {
          this.checked = bindHas(val, this.richValue);
        }
        ;
      } else {
        this.richValue = this.data;
      }
      ;
    }
    ;
    return;
  }
};
extend$__3(HTMLInputElement.prototype, Extend$HTMLInputElement$aj.prototype);
var Extend$HTMLButtonElement$ak = class {
  get checked() {
    return this.$checked;
  }
  set checked(val) {
    if (val != this.$checked) {
      this.$checked = val;
      this.flags.toggle("checked", !!val);
    }
    ;
  }
  setRichValue(value) {
    this.$$value = value;
    return this.value = value;
  }
  getRichValue() {
    if (this.$$value !== void 0) {
      return this.$$value;
    }
    ;
    return this.value;
  }
  click$(e) {
    let data = this.data;
    let toggled = this.checked;
    let val = this.richValue;
    if (isGroup(data)) {
      toggled ? bindRemove(data, val) : bindAdd(data, val);
    } else if (this.$$value == void 0) {
      this.data = toggled ? false : true;
    } else {
      this.data = toggled ? null : val;
    }
    ;
    this[$118]();
    return commit();
  }
  [$118]() {
    if (this.$$bound) {
      let data = this.data;
      let val = this.$$value == void 0 ? true : this.$$value;
      if (isGroup(data)) {
        this.checked = bindHas(data, val);
      } else {
        this.checked = data == val;
      }
      ;
    }
    ;
    return;
  }
};
extend$__3(HTMLButtonElement.prototype, Extend$HTMLButtonElement$ak.prototype);

// node_modules/imba/src/imba/events/keyboard.imba
function extend$__4(target, ext) {
  const descriptors = Object.getOwnPropertyDescriptors(ext);
  delete descriptors.constructor;
  Object.defineProperties(target, descriptors);
  return target;
}
function use_events_keyboard() {
  return true;
}
var Extend$KeyboardEvent$af = class {
  \u03B1esc() {
    return this.keyCode == 27;
  }
  \u03B1tab() {
    return this.keyCode == 9;
  }
  \u03B1enter() {
    return this.keyCode == 13;
  }
  \u03B1space() {
    return this.keyCode == 32;
  }
  \u03B1up() {
    return this.keyCode == 38;
  }
  \u03B1down() {
    return this.keyCode == 40;
  }
  \u03B1left() {
    return this.keyCode == 37;
  }
  \u03B1right() {
    return this.keyCode == 39;
  }
  \u03B1del() {
    return this.keyCode == 8 || this.keyCode == 46;
  }
  \u03B1key(code) {
    if (typeof code == "string") {
      return this.key == code;
    } else if (typeof code == "number") {
      return this.keyCode == code;
    }
    ;
  }
};
extend$__4(KeyboardEvent.prototype, Extend$KeyboardEvent$af.prototype);

// node_modules/imba/src/imba/events/mouse.imba
function extend$__5(target, ext) {
  const descriptors = Object.getOwnPropertyDescriptors(ext);
  delete descriptors.constructor;
  Object.defineProperties(target, descriptors);
  return target;
}
function use_events_mouse() {
  return true;
}
var Extend$MouseEvent$af = class {
  \u03B1left() {
    return this.button == 0;
  }
  \u03B1middle() {
    return this.button == 1;
  }
  \u03B1right() {
    return this.button == 2;
  }
  \u03B1shift() {
    return !!this.shiftKey;
  }
  \u03B1alt() {
    return !!this.altKey;
  }
  \u03B1ctrl() {
    return !!this.ctrlKey;
  }
  \u03B1meta() {
    return !!this.metaKey;
  }
  \u03B1mod() {
    let nav = globalThis.navigator.platform;
    return /^(Mac|iPhone|iPad|iPod)/.test(nav || "") ? !!this.metaKey : !!this.ctrlKey;
  }
};
extend$__5(MouseEvent.prototype, Extend$MouseEvent$af.prototype);

// node_modules/imba/src/imba/events/core.imba
function extend$__6(target, ext) {
  const descriptors = Object.getOwnPropertyDescriptors(ext);
  delete descriptors.constructor;
  Object.defineProperties(target, descriptors);
  return target;
}
function iter$__7(a) {
  let v;
  return a ? (v = a.toIterable) ? v.call(a) : a : a;
}
var $119 = Symbol.for("#extendType");
var $216 = Symbol.for("#modifierState");
var $39 = Symbol.for("#sharedModifierState");
var $410 = Symbol.for("#onceHandlerEnd");
var $254 = Symbol.for("#__initor__");
var $263 = Symbol.for("#__inited__");
var $57 = Symbol.for("#__hooks__");
var $67 = Symbol.for("#extendDescriptors");
var $95 = Symbol.for("#context");
var $145 = Symbol.for("#self");
var $156 = Symbol.for("#target");
var $224 = Symbol.for("#stopPropagation");
var $234 = Symbol.for("#defaultPrevented");
use_events_keyboard();
use_events_mouse();
var Extend$CustomEvent$af = class {
  [$119](kls) {
    var $810, desc, $710;
    let ext = kls[$67] || (kls[$67] = (desc = Object.getOwnPropertyDescriptors(kls.prototype), $710 = desc.constructor, delete desc.constructor, $710, desc));
    return Object.defineProperties(this, ext);
  }
};
extend$__6(CustomEvent2.prototype, Extend$CustomEvent$af.prototype);
var Extend$Event$ag = class {
  get [$216]() {
    var $1110, $106;
    return ($1110 = this[$95])[$106 = this[$95].step] || ($1110[$106] = {});
  }
  get [$39]() {
    var $138, $127;
    return ($138 = this[$95].handler)[$127 = this[$95].step] || ($138[$127] = {});
  }
  [$410](cb) {
    return once(this[$95], "end", cb);
  }
  \u03B1sel(selector) {
    return !!this.target.matches(String(selector));
  }
  \u03B1closest(selector) {
    return !!this.target.closest(String(selector));
  }
  \u03B1log(...params) {
    console.info(...params);
    return true;
  }
  \u03B1trusted() {
    return !!this.isTrusted;
  }
  \u03B1if(expr) {
    return !!expr;
  }
  \u03B1wait(time = 250) {
    return new Promise(function(_0) {
      return setTimeout(_0, parseTime(time));
    });
  }
  \u03B1self() {
    return this.target == this[$95].element;
  }
  \u03B1cooldown(time = 250) {
    let o = this[$39];
    if (o.active) {
      return false;
    }
    ;
    o.active = true;
    o.target = this[$95].element;
    o.target.flags.incr("cooldown");
    this[$410](function() {
      return setTimeout(function() {
        o.target.flags.decr("cooldown");
        return o.active = false;
      }, parseTime(time));
    });
    return true;
  }
  \u03B1throttle(time = 250) {
    let o = this[$39];
    if (o.active) {
      if (o.next) {
        o.next(false);
      }
      ;
      return new Promise(function(r) {
        return o.next = function(val) {
          o.next = null;
          return r(val);
        };
      });
    }
    ;
    o.active = true;
    o.el || (o.el = this[$95].element);
    o.el.flags.incr("throttled");
    once(this[$95], "end", function() {
      let delay = parseTime(time);
      return o.interval = setInterval(function() {
        if (o.next) {
          o.next(true);
        } else {
          clearInterval(o.interval);
          o.el.flags.decr("throttled");
          o.active = false;
        }
        ;
        return;
      }, delay);
    });
    return true;
  }
  \u03B1debounce(time = 250) {
    let o = this[$39];
    let e = this;
    o.queue || (o.queue = []);
    o.queue.push(o.last = e);
    return new Promise(function(resolve) {
      return setTimeout(function() {
        if (o.last == e) {
          e.debounced = o.queue;
          o.last = null;
          o.queue = [];
          return resolve(true);
        } else {
          return resolve(false);
        }
        ;
      }, parseTime(time));
    });
  }
  \u03B1flag(name, sel) {
    const {element, step, state: state2, id, current} = this[$95];
    let el = sel instanceof Element ? sel : sel ? element.closest(sel) : element;
    if (!el) {
      return true;
    }
    ;
    this[$95].commit = true;
    state2[step] = id;
    el.flags.incr(name);
    let ts = Date.now();
    once(current, "end", function() {
      let elapsed = Date.now() - ts;
      let delay = Math.max(250 - elapsed, 0);
      return setTimeout(function() {
        return el.flags.decr(name);
      }, delay);
    });
    return true;
  }
  \u03B1busy(sel) {
    return this["\u03B1flag"]("busy", sel);
  }
  \u03B1mod(name) {
    return this["\u03B1flag"]("mod-" + name, globalThis.document.documentElement);
  }
  \u03B1outside() {
    const {handler} = this[$95];
    if (handler && handler[$145]) {
      return !handler[$145].parentNode.contains(this.target);
    }
    ;
  }
};
extend$__6(Event.prototype, Extend$Event$ag.prototype);
function use_events() {
  return true;
}
var EventHandler = class {
  constructor(params, closure) {
    this.params = params;
    this.closure = closure;
  }
  getHandlerForMethod(el, name) {
    if (!el) {
      return null;
    }
    ;
    return el[name] ? el : this.getHandlerForMethod(el.parentNode, name);
  }
  emit(name, ...params) {
    return emit(this, name, params);
  }
  on(name, ...params) {
    return listen(this, name, ...params);
  }
  once(name, ...params) {
    return once(this, name, ...params);
  }
  un(name, ...params) {
    return unlisten(this, name, ...params);
  }
  get passive\u03A6() {
    return this.params.passive;
  }
  get capture\u03A6() {
    return this.params.capture;
  }
  get silent\u03A6() {
    return this.params.silent;
  }
  get global\u03A6() {
    return this.params.global;
  }
  async handleEvent(event) {
    let element = this[$156] || event.currentTarget;
    let mods = this.params;
    let error = null;
    let silence = mods.silence || mods.silent;
    this.count || (this.count = 0);
    this.state || (this.state = {});
    let state2 = {
      element,
      event,
      modifiers: mods,
      handler: this,
      id: ++this.count,
      step: -1,
      state: this.state,
      commit: null,
      current: null
    };
    state2.current = state2;
    if (event.handle$mod) {
      if (event.handle$mod.apply(state2, mods.options || []) == false) {
        return;
      }
      ;
    }
    ;
    let guard = Event[this.type + "$handle"] || Event[event.type + "$handle"] || event.handle$mod;
    if (guard && guard.apply(state2, mods.options || []) == false) {
      return;
    }
    ;
    this.currentEvents || (this.currentEvents = new Set());
    this.currentEvents.add(event);
    for (let $165 = 0, $173 = Object.keys(mods), $245 = $173.length, handler, val; $165 < $245; $165++) {
      handler = $173[$165];
      val = mods[handler];
      state2.step++;
      if (handler[0] == "_") {
        continue;
      }
      ;
      if (handler.indexOf("~") > 0) {
        handler = handler.split("~")[0];
      }
      ;
      let modargs = null;
      let args = [event, state2];
      let res = void 0;
      let context = null;
      let m;
      let negated = false;
      let isstring = typeof handler == "string";
      if (handler[0] == "$" && handler[1] == "_" && val[0] instanceof Function) {
        handler = val[0];
        if (!handler.passive) {
          state2.commit = true;
        }
        ;
        args = [event, state2].concat(val.slice(1));
        context = element;
      } else if (val instanceof Array) {
        args = val.slice();
        modargs = args;
        for (let i = 0, $185 = iter$__7(args), $2111 = $185.length; i < $2111; i++) {
          let par = $185[i];
          if (typeof par == "string" && par[0] == "~" && par[1] == "$") {
            let name = par.slice(2);
            let chain = name.split(".");
            let value = state2[chain.shift()] || event;
            for (let i2 = 0, $198 = iter$__7(chain), $208 = $198.length; i2 < $208; i2++) {
              let part = $198[i2];
              value = value ? value[part] : void 0;
            }
            ;
            args[i] = value;
          }
          ;
        }
        ;
      }
      ;
      if (typeof handler == "string" && (m = handler.match(/^(emit|flag|mod|moved|pin|fit|refit|map|remap|css)-(.+)$/))) {
        if (!modargs) {
          modargs = args = [];
        }
        ;
        args.unshift(m[2]);
        handler = m[1];
      }
      ;
      if (handler == "trap") {
        event[$224] = true;
        event.stopImmediatePropagation();
        event[$234] = true;
        event.preventDefault();
      } else if (handler == "stop") {
        event[$224] = true;
        event.stopImmediatePropagation();
      } else if (handler == "prevent") {
        event[$234] = true;
        event.preventDefault();
      } else if (handler == "commit") {
        state2.commit = true;
      } else if (handler == "once") {
        element.removeEventListener(event.type, this);
      } else if (handler == "options" || handler == "silence" || handler == "silent") {
        continue;
      } else if (handler == "emit") {
        let name = args[0];
        let detail = args[1];
        let e = new CustomEvent2(name, {bubbles: true, detail});
        e.originalEvent = event;
        let customRes = element.dispatchEvent(e);
      } else if (typeof handler == "string") {
        if (handler[0] == "!") {
          negated = true;
          handler = handler.slice(1);
        }
        ;
        let path = "\u03B1" + handler;
        let fn = event[path];
        fn || (fn = this.type && Event[this.type + "$" + handler + "$mod"]);
        fn || (fn = event[handler + "$mod"] || Event[event.type + "$" + handler] || Event[handler + "$mod"]);
        if (fn instanceof Function) {
          handler = fn;
          context = state2;
          args = modargs || [];
          if (event[path]) {
            context = event;
            event[$95] = state2;
          }
          ;
        } else if (handler[0] == "_") {
          handler = handler.slice(1);
          context = this.closure;
        } else {
          context = this.getHandlerForMethod(element, handler);
        }
        ;
      }
      ;
      try {
        if (handler instanceof Function) {
          res = handler.apply(context || element, args);
        } else if (context) {
          res = context[handler].apply(context, args);
        }
        ;
        if (res && res.then instanceof Function && res != scheduler.$promise) {
          if (state2.commit && !silence) {
            scheduler.commit();
          }
          ;
          res = await res;
        }
        ;
      } catch (e) {
        error = e;
        break;
      }
      ;
      if (negated && res === true) {
        break;
      }
      ;
      if (!negated && res === false) {
        break;
      }
      ;
      state2.value = res;
    }
    ;
    emit(state2, "end", state2);
    if (state2.commit && !silence) {
      scheduler.commit();
    }
    ;
    this.currentEvents.delete(event);
    if (this.currentEvents.size == 0) {
      this.emit("idle");
    }
    ;
    if (error) {
      throw error;
    }
    ;
    return;
  }
};
var Extend$Element$ah2 = class {
  on$(type2, mods, scope) {
    let check = "on$" + type2;
    let handler;
    handler = new EventHandler(mods, scope);
    let capture = mods.capture || false;
    let passive = mods.passive;
    let o = capture;
    if (passive) {
      o = {passive, capture};
    }
    ;
    if (this[check] instanceof Function) {
      handler = this[check](mods, scope, handler, o);
    } else {
      this.addEventListener(type2, handler, o);
    }
    ;
    return handler;
  }
};
extend$__6(Element.prototype, Extend$Element$ah2.prototype);

// node_modules/imba/src/imba/events/pointer.imba
function extend$__7(target, ext) {
  const descriptors = Object.getOwnPropertyDescriptors(ext);
  delete descriptors.constructor;
  Object.defineProperties(target, descriptors);
  return target;
}
use_events_mouse();
function use_events_pointer() {
  return true;
}
var Extend$PointerEvent$af = class {
  \u03B1primary() {
    return !!this.isPrimary;
  }
  \u03B1mouse() {
    return this.pointerType == "mouse";
  }
  \u03B1pen() {
    return this.pointerType == "pen";
  }
  \u03B1touch() {
    return this.pointerType == "touch";
  }
  \u03B1pressure(threshold = 0.5) {
    return this.pressure >= threshold;
  }
  \u03B1lock() {
    return true;
  }
};
extend$__7(PointerEvent.prototype, Extend$PointerEvent$af.prototype);

// node_modules/imba/src/imba/events/hotkey.shared.imba
var $120 = Symbol.for("#string");
var $310 = Symbol.for("#html");
var cfg = {
  win: {
    sep: "+",
    name: "win",
    order: ["meta", "ctrl", "mod", "alt", "option", "shift"].reverse(),
    labels: {
      option: "alt",
      mod: "ctrl",
      meta: "win"
    }
  },
  mac: {
    sep: "",
    name: "mac",
    order: ["ctrl", "alt", "option", "shift", "mod", "command"].reverse(),
    labels: {
      left: "\u2192",
      up: "\u2191",
      down: "\u2193",
      right: "\u2190",
      plus: "+",
      tab: "\u21E5",
      meta: "\u2318",
      mod: "\u2318",
      ctrl: "\u2303",
      option: "\u2325",
      alt: "\u2325",
      del: "\u2326",
      shift: "\u21E7",
      enter: "\u21A9",
      esc: "\u238B",
      backspace: "\u232B"
    }
  }
};
cfg.auto = cfg.win;
if ((globalThis.navigator.platform || "").match(/iPhone|iPod|iPad|Mac/)) {
  cfg.auto = cfg.mac;
}
var cache = {};
function format(combo, platform = "auto") {
  let key = "" + combo + ":" + platform;
  if (cache[key]) {
    return cache[key];
  }
  ;
  let o = cfg[platform] || cfg.win;
  let combos = combo.split(" ").map(function(_0) {
    let keys2 = _0.split("+");
    let items = keys2.sort(function(_02, _1) {
      return o.order.indexOf(_1) - o.order.indexOf(_02);
    });
    let strings = items.map(function(_02) {
      let lbl = o.labels[_02] || _02;
      return lbl = lbl[0].toUpperCase() + (lbl.slice(1) || "");
    });
    return strings;
  });
  return cache[key] = combos;
}
function humanize(combo, platform) {
  var $220;
  let arr = format(combo, platform);
  let o = cfg[platform] || cfg.win;
  return arr[$120] || (arr[$120] = arr.map(function(_0) {
    return _0.join(o.sep);
  }).join(" "));
}
function htmlify(combo, platform) {
  var $412;
  let arr = format(combo, platform);
  let o = cfg[platform] || cfg.win;
  return arr[$310] || (arr[$310] = arr.map(function(_0) {
    return "<kbd>" + _0.map(function(_02) {
      return "<kbd>" + _02 + "</kbd>";
    }).join("") + "</kbd>";
  }).join(" "));
}

// node_modules/imba/src/imba/events/mousetrap.mjs
var _MAP = {
  8: "backspace",
  9: "tab",
  13: "enter",
  16: "shift",
  17: "ctrl",
  18: "alt",
  20: "capslock",
  27: "esc",
  32: "space",
  33: "pageup",
  34: "pagedown",
  35: "end",
  36: "home",
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  45: "ins",
  46: "del",
  91: "meta",
  93: "meta",
  224: "meta"
};
var _KEYCODE_MAP = {
  106: "*",
  107: "+",
  109: "-",
  110: ".",
  111: "/",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
};
var _SHIFT_MAP = {
  "~": "`",
  "!": "1",
  "@": "2",
  "#": "3",
  $: "4",
  "%": "5",
  "^": "6",
  "&": "7",
  "*": "8",
  "(": "9",
  ")": "0",
  _: "-",
  "+": "=",
  ":": ";",
  '"': "'",
  "<": ",",
  ">": ".",
  "?": "/",
  "|": "\\"
};
var _SPECIAL_ALIASES = {
  option: "alt",
  command: "meta",
  return: "enter",
  escape: "esc",
  plus: "+",
  mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
};
var _REVERSE_MAP;
for (var i = 1; i < 20; ++i) {
  _MAP[111 + i] = "f" + i;
}
for (i = 0; i <= 9; ++i) {
  _MAP[i + 96] = i.toString();
}
function _addEvent(object, type2, callback) {
  if (object.addEventListener) {
    object.addEventListener(type2, callback, false);
    return;
  }
  object.attachEvent("on" + type2, callback);
}
function _removeEvent(object, type2, callback) {
  if (object.removeEventListener) {
    object.removeEventListener(type2, callback, false);
    return;
  }
  object.detachEvent("on" + type2, callback);
}
function _characterFromEvent(e) {
  if (e.type == "keypress") {
    var character = String.fromCharCode(e.which);
    if (!e.shiftKey) {
      character = character.toLowerCase();
    }
    return character;
  }
  if (_MAP[e.which]) {
    return _MAP[e.which];
  }
  if (_KEYCODE_MAP[e.which]) {
    return _KEYCODE_MAP[e.which];
  }
  return String.fromCharCode(e.which).toLowerCase();
}
function _modifiersMatch(modifiers1, modifiers2) {
  return modifiers1.sort().join(",") === modifiers2.sort().join(",");
}
function _eventModifiers(e) {
  var modifiers = [];
  if (e.shiftKey) {
    modifiers.push("shift");
  }
  if (e.altKey) {
    modifiers.push("alt");
  }
  if (e.ctrlKey) {
    modifiers.push("ctrl");
  }
  if (e.metaKey) {
    modifiers.push("meta");
  }
  return modifiers;
}
function _preventDefault(e) {
  if (e.preventDefault) {
    e.preventDefault();
    return;
  }
  e.returnValue = false;
}
function _stopPropagation(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
    return;
  }
  e.cancelBubble = true;
}
function _isModifier(key) {
  return key == "shift" || key == "ctrl" || key == "alt" || key == "meta";
}
function _getReverseMap() {
  if (!_REVERSE_MAP) {
    _REVERSE_MAP = {};
    for (var key in _MAP) {
      if (key > 95 && key < 112) {
        continue;
      }
      if (_MAP.hasOwnProperty(key)) {
        _REVERSE_MAP[_MAP[key]] = key;
      }
    }
  }
  return _REVERSE_MAP;
}
function _pickBestAction(key, modifiers, action) {
  if (!action) {
    action = _getReverseMap()[key] ? "keydown" : "keypress";
  }
  if (action == "keypress" && modifiers.length) {
    action = "keydown";
  }
  return action;
}
function _keysFromString(combination) {
  if (combination === "+") {
    return ["+"];
  }
  combination = combination.replace(/\+{2}/g, "+plus");
  return combination.split("+");
}
function _getKeyInfo(combination, action) {
  var keys2;
  var key;
  var i;
  var modifiers = [];
  keys2 = _keysFromString(combination);
  for (i = 0; i < keys2.length; ++i) {
    key = keys2[i];
    if (_SPECIAL_ALIASES[key]) {
      key = _SPECIAL_ALIASES[key];
    }
    if (action && action != "keypress" && _SHIFT_MAP[key]) {
      key = _SHIFT_MAP[key];
      modifiers.push("shift");
    }
    if (_isModifier(key)) {
      modifiers.push(key);
    }
  }
  action = _pickBestAction(key, modifiers, action);
  return {
    key,
    modifiers,
    action
  };
}
function _belongsTo(element, ancestor) {
  if (element === null || element === document) {
    return false;
  }
  if (element === ancestor) {
    return true;
  }
  return _belongsTo(element.parentNode, ancestor);
}
function Mousetrap(targetElement) {
  var self2 = this;
  targetElement = targetElement || document;
  if (!(self2 instanceof Mousetrap)) {
    return new Mousetrap(targetElement);
  }
  self2.target = targetElement;
  self2._callbacks = {};
  self2._directMap = {};
  var _sequenceLevels = {};
  var _resetTimer;
  var _ignoreNextKeyup = false;
  var _ignoreNextKeypress = false;
  var _nextExpectedAction = false;
  function _resetSequences(doNotReset) {
    doNotReset = doNotReset || {};
    var activeSequences = false, key;
    for (key in _sequenceLevels) {
      if (doNotReset[key]) {
        activeSequences = true;
        continue;
      }
      _sequenceLevels[key] = 0;
    }
    if (!activeSequences) {
      _nextExpectedAction = false;
    }
  }
  function _getMatches(character, modifiers, e, sequenceName, combination, level) {
    var i;
    var callback;
    var matches = [];
    var action = e.type;
    if (!self2._callbacks[character]) {
      return [];
    }
    if (action == "keyup" && _isModifier(character)) {
      modifiers = [character];
    }
    for (i = 0; i < self2._callbacks[character].length; ++i) {
      callback = self2._callbacks[character][i];
      if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
        continue;
      }
      if (action != callback.action) {
        continue;
      }
      if (action == "keypress" && !e.metaKey && !e.ctrlKey || _modifiersMatch(modifiers, callback.modifiers)) {
        var deleteCombo = !sequenceName && callback.combo == combination;
        var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
        if (deleteCombo || deleteSequence) {
          self2._callbacks[character].splice(i, 1);
        }
        matches.push(callback);
      }
    }
    return matches;
  }
  function _fireCallback(callback, e, combo, sequence) {
    if (self2.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
      return;
    }
    if (callback(e, combo) === false) {
      _preventDefault(e);
      _stopPropagation(e);
    }
  }
  self2._handleKey = function(character, modifiers, e) {
    var callbacks = _getMatches(character, modifiers, e);
    var i;
    var doNotReset = {};
    var maxLevel = 0;
    var processedSequenceCallback = false;
    for (i = 0; i < callbacks.length; ++i) {
      if (callbacks[i].seq) {
        maxLevel = Math.max(maxLevel, callbacks[i].level);
      }
    }
    for (i = 0; i < callbacks.length; ++i) {
      if (callbacks[i].seq) {
        if (callbacks[i].level != maxLevel) {
          continue;
        }
        processedSequenceCallback = true;
        doNotReset[callbacks[i].seq] = 1;
        _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
        continue;
      }
      if (!processedSequenceCallback) {
        _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
      }
    }
    var ignoreThisKeypress = e.type == "keypress" && _ignoreNextKeypress;
    if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
      _resetSequences(doNotReset);
    }
    _ignoreNextKeypress = processedSequenceCallback && e.type == "keydown";
  };
  function _handleKeyEvent(e) {
    if (typeof e.which !== "number") {
      e.which = e.keyCode;
    }
    var character = _characterFromEvent(e);
    if (!character) {
      return;
    }
    if (e.type == "keyup" && _ignoreNextKeyup === character) {
      _ignoreNextKeyup = false;
      return;
    }
    self2.handleKey(character, _eventModifiers(e), e);
  }
  function _resetSequenceTimer() {
    clearTimeout(_resetTimer);
    _resetTimer = setTimeout(_resetSequences, 1e3);
  }
  function _bindSequence(combo, keys2, callback, action) {
    _sequenceLevels[combo] = 0;
    function _increaseSequence(nextAction) {
      return function() {
        _nextExpectedAction = nextAction;
        ++_sequenceLevels[combo];
        _resetSequenceTimer();
      };
    }
    function _callbackAndReset(e) {
      _fireCallback(callback, e, combo);
      if (action !== "keyup") {
        _ignoreNextKeyup = _characterFromEvent(e);
      }
      setTimeout(_resetSequences, 10);
    }
    for (var i = 0; i < keys2.length; ++i) {
      var isFinal = i + 1 === keys2.length;
      var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys2[i + 1]).action);
      _bindSingle(keys2[i], wrappedCallback, action, combo, i);
    }
  }
  function _bindSingle(combination, callback, action, sequenceName, level) {
    self2._directMap[combination + ":" + action] = callback;
    combination = combination.replace(/\s+/g, " ");
    var sequence = combination.split(" ");
    var info;
    if (sequence.length > 1) {
      _bindSequence(combination, sequence, callback, action);
      return;
    }
    info = _getKeyInfo(combination, action);
    self2._callbacks[info.key] = self2._callbacks[info.key] || [];
    _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);
    self2._callbacks[info.key][sequenceName ? "unshift" : "push"]({
      callback,
      modifiers: info.modifiers,
      action: info.action,
      seq: sequenceName,
      level,
      combo: combination
    });
  }
  self2._bindMultiple = function(combinations, callback, action) {
    for (var i = 0; i < combinations.length; ++i) {
      _bindSingle(combinations[i], callback, action);
    }
  };
  self2.enable = function() {
    _addEvent(targetElement, "keypress", _handleKeyEvent);
    _addEvent(targetElement, "keydown", _handleKeyEvent);
    _addEvent(targetElement, "keyup", _handleKeyEvent);
  };
  self2.disable = function() {
    _removeEvent(targetElement, "keypress", _handleKeyEvent);
    _removeEvent(targetElement, "keydown", _handleKeyEvent);
    _removeEvent(targetElement, "keyup", _handleKeyEvent);
  };
  self2.enable();
}
Mousetrap.prototype.bind = function(keys2, callback, action) {
  var self2 = this;
  keys2 = keys2 instanceof Array ? keys2 : [keys2];
  self2._bindMultiple.call(self2, keys2, callback, action);
  return self2;
};
Mousetrap.prototype.unbind = function(keys2, action) {
  var self2 = this;
  return self2.bind.call(self2, keys2, function() {
  }, action);
};
Mousetrap.prototype.trigger = function(keys2, action) {
  var self2 = this;
  if (self2._directMap[keys2 + ":" + action]) {
    self2._directMap[keys2 + ":" + action]({}, keys2);
  }
  return self2;
};
Mousetrap.prototype.reset = function() {
  var self2 = this;
  self2._callbacks = {};
  self2._directMap = {};
  return self2;
};
Mousetrap.prototype.stopCallback = function(e, element) {
  var self2 = this;
  if ((" " + element.className + " ").indexOf(" mousetrap ") > -1) {
    return false;
  }
  if (_belongsTo(element, self2.target)) {
    return false;
  }
  return element.tagName == "INPUT" || element.tagName == "SELECT" || element.tagName == "TEXTAREA" || element.isContentEditable;
};
Mousetrap.prototype.handleKey = function() {
  var self2 = this;
  return self2._handleKey.apply(self2, arguments);
};
Mousetrap.addKeycodes = function(object) {
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      _MAP[key] = object[key];
    }
  }
  _REVERSE_MAP = null;
};
Mousetrap.init = function() {
  var documentMousetrap = Mousetrap(document);
  for (var method in documentMousetrap) {
    if (method.charAt(0) !== "_") {
      Mousetrap[method] = function(method2) {
        return function() {
          return documentMousetrap[method2].apply(documentMousetrap, arguments);
        };
      }(method);
    }
  }
};

// node_modules/imba/src/imba/events/hotkey.imba
function iter$__8(a) {
  let v;
  return a ? (v = a.toIterable) ? v.call(a) : a : a;
}
function extend$__8(target, ext) {
  const descriptors = Object.getOwnPropertyDescriptors(ext);
  delete descriptors.constructor;
  Object.defineProperties(target, descriptors);
  return target;
}
var $293 = Symbol.for("#__initor__");
var $302 = Symbol.for("#__inited__");
var $121 = Symbol.for("#__hooks__");
var $217 = Symbol.for("#updateHotKeys");
var $311 = Symbol.for("#inInput");
var $411 = Symbol.for("#inEditable");
var $68 = Symbol.for("#hotkeyTarget");
var $77 = Symbol.for("#hotkeyCombos");
var $87 = Symbol.for("#extendType");
var $135 = Symbol.for("#combos");
var $146 = Symbol.for("#target");
var $157 = Symbol.for("#hotkeyHandlers");
var $194 = Symbol.for("#defaultPrevented");
var $218 = Symbol.for("#visit");
var $244 = Symbol.for("#key");
var isApple;
try {
  isApple = (globalThis.navigator.platform || "").match(/iPhone|iPod|iPad|Mac/);
} catch (e) {
}
function use_events_hotkey() {
  return true;
}
var Globals = {esc: true};
var HotkeyEvent = class extends CustomEvent2 {
  \u03B1focus(expr) {
    let el = this.target;
    let doc = el.ownerDocument;
    if (expr) {
      el = el.querySelector(expr) || el.closest(expr) || doc.querySelector(expr);
    }
    ;
    if (el == doc.body) {
      if (doc.activeElement != doc.body) {
        doc.activeElement.blur();
      }
      ;
    } else {
      el.focus();
    }
    ;
    return true;
  }
  \u03B1repeat() {
    return true;
  }
};
var stopCallback = function(e, el, combo) {
  if (el.tagName == "INPUT" && (combo == "down" || combo == "up")) {
    return false;
  }
  ;
  if (el.tagName == "INPUT" || el.tagName == "SELECT" || el.tagName == "TEXTAREA") {
    if (Globals[combo]) {
      e[$311] = true;
      e[$411] = true;
      return false;
    }
    ;
    return true;
  }
  ;
  if (el.contentEditable && (el.contentEditable == "true" || el.contentEditable == "plaintext-only")) {
    if (Globals[combo]) {
      e[$411] = true;
      return false;
    }
    ;
    return true;
  }
  ;
  return false;
};
var hotkeys = new class HotKeyManager {
  constructor() {
    this.combos = {"*": {}};
    this.identifiers = {};
    this.labels = {};
    this.handler = this.handle.bind(this);
    this.mousetrap = null;
    this.hothandler = this.handle.bind(this);
  }
  trigger(combo) {
    var _a, _b;
    return (_b = (_a = this.mousetrap) == null ? void 0 : _a.trigger) == null ? void 0 : _b.call(_a, combo);
  }
  register(key, mods = {}) {
    if (!this.mousetrap) {
      this.mousetrap = Mousetrap(globalThis.document);
      this.mousetrap.stopCallback = stopCallback;
    }
    ;
    if (!this.combos[key]) {
      this.combos[key] = true;
      this.mousetrap.bind(key, this.handler);
    }
    ;
    if (mods.capture || mods.force) {
      Globals[key] = true;
    }
    ;
    return this;
  }
  comboIdentifier(combo) {
    var $59;
    return ($59 = this.identifiers)[combo] || ($59[combo] = combo.replace(/\+/g, "_").replace(/\ /g, "-").replace(/\*/g, "all").replace(/\|/g, " "));
  }
  humanize(combo, platform = "auto") {
    return humanize(combo, platform);
  }
  htmlify(combo, platform = "auto") {
    return htmlify(combo, platform);
  }
  matchCombo(str) {
    return true;
  }
  handle(e, combo) {
    var _a;
    let source = e.target && e.target[$68] || e.target || globalThis.document.body;
    let targets = Array.from(globalThis.document.querySelectorAll("[data-hotkey]"));
    let root = source.ownerDocument;
    let group = source;
    while (group && group != root) {
      if (group.hotkeys === true) {
        break;
      }
      ;
      group = group.parentNode;
    }
    ;
    targets = targets.reverse().filter(function(el) {
      let combos = el[$77];
      if (!(combos && (combos[combo] || combos["*"]))) {
        return false;
      }
      ;
      let par = el;
      while (par && par != root) {
        if (par.hotkeys === false) {
          return false;
        }
        ;
        par = par.parentNode;
      }
      ;
      return true;
    });
    if (!targets.length) {
      return;
    }
    ;
    let detail = {combo, originalEvent: e, targets};
    let event = new CustomEvent2("hotkey", {bubbles: true, detail});
    event[$87](HotkeyEvent);
    event.originalEvent = e;
    event.hotkey = combo;
    source.dispatchEvent(event);
    let handlers = [];
    for (let $97 = 0, $106 = iter$__8(targets), $173 = $106.length; $97 < $173; $97++) {
      let receiver = $106[$97];
      for (let $1110 = 0, $127 = iter$__8(receiver[$157]), $165 = $127.length; $1110 < $165; $1110++) {
        let handler = $127[$1110];
        if (handler[$135][combo] || handler[$135]["*"]) {
          if (!e[$411] || (handler.capture\u03A6 || handler.params.force)) {
            let el = handler[$146];
            if (group.contains(el) || el.contains(group) || handler.global\u03A6) {
              handlers.push(handler);
            }
            ;
          }
          ;
        }
        ;
      }
      ;
    }
    ;
    for (let i = 0, $185 = iter$__8(handlers), $208 = $185.length; i < $208; i++) {
      let handler = $185[i];
      if (!e.repeat || handler.params.repeat) {
        handler.handleEvent(event);
      }
      ;
      if (!handler.passive\u03A6 || event[$194]) {
        (_a = e == null ? void 0 : e.preventDefault) == null ? void 0 : _a.call(e);
      }
      ;
      if (!handler.passive\u03A6) {
        break;
      }
      ;
    }
    ;
    return this;
  }
}();
var DefaultHandler = function(e, state2) {
  let el = state2.element;
  if (el instanceof Element) {
    if (el.matches("input,textarea,select,option")) {
      el.focus();
    } else {
      el.click();
    }
    ;
  }
  ;
  return;
};
DefaultHandler.passive = true;
var Extend$Element$af2 = class {
  on$hotkey(mods, scope, handler, o) {
    var self2 = this;
    this[$157] || (this[$157] = []);
    this[$157].push(handler);
    handler[$146] = this;
    mods.$_ || (mods.$_ = [DefaultHandler]);
    mods[$218] = function() {
      return self2[$217]();
    };
    this[$217]();
    return handler;
  }
  [$217]() {
    let all = {};
    for (let $226 = 0, $235 = iter$__8(this[$157]), $282 = $235.length; $226 < $282; $226++) {
      let handler = $235[$226];
      let mods = handler.params;
      let key = mods.options[0];
      if (handler[$244] != key ? (handler[$244] = key, true) : false) {
        handler[$135] = {};
        for (let $255 = 0, $265 = iter$__8(key.split("|")), $273 = $265.length; $255 < $273; $255++) {
          let combo = $265[$255];
          hotkeys.register(combo, mods);
          handler[$135][combo] = true;
        }
        ;
      }
      ;
      Object.assign(all, handler[$135]);
    }
    ;
    this[$77] = all;
    this.dataset.hotkey = Object.keys(all).join(" ");
    return this;
  }
};
extend$__8(Element.prototype, Extend$Element$af2.prototype);

// app/client.imba
var import_lodash = __toModule(require_lodash());

// package.json
var version = "0.1.37";

// node_modules/dexie/dist/modern/dexie.mjs
var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : globalThis;
var keys = Object.keys;
var isArray2 = Array.isArray;
if (typeof Promise !== "undefined" && !_global.Promise) {
  _global.Promise = Promise;
}
function extend(obj, extension) {
  if (typeof extension !== "object")
    return obj;
  keys(extension).forEach(function(key) {
    obj[key] = extension[key];
  });
  return obj;
}
var getProto = Object.getPrototypeOf;
var _hasOwn = {}.hasOwnProperty;
function hasOwn(obj, prop) {
  return _hasOwn.call(obj, prop);
}
function props(proto, extension) {
  if (typeof extension === "function")
    extension = extension(getProto(proto));
  (typeof Reflect === "undefined" ? keys : Reflect.ownKeys)(extension).forEach((key) => {
    setProp(proto, key, extension[key]);
  });
}
var defineProperty = Object.defineProperty;
function setProp(obj, prop, functionOrGetSet, options) {
  defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === "function" ? {get: functionOrGetSet.get, set: functionOrGetSet.set, configurable: true} : {value: functionOrGetSet, configurable: true, writable: true}, options));
}
function derive(Child) {
  return {
    from: function(Parent) {
      Child.prototype = Object.create(Parent.prototype);
      setProp(Child.prototype, "constructor", Child);
      return {
        extend: props.bind(null, Child.prototype)
      };
    }
  };
}
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
function getPropertyDescriptor(obj, prop) {
  const pd = getOwnPropertyDescriptor(obj, prop);
  let proto;
  return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
}
var _slice = [].slice;
function slice2(args, start, end) {
  return _slice.call(args, start, end);
}
function override(origFunc, overridedFactory) {
  return overridedFactory(origFunc);
}
function assert(b) {
  if (!b)
    throw new Error("Assertion Failed");
}
function asap$1(fn) {
  if (_global.setImmediate)
    setImmediate(fn);
  else
    setTimeout(fn, 0);
}
function arrayToObject(array, extractor) {
  return array.reduce((result, item, i) => {
    var nameAndValue = extractor(item, i);
    if (nameAndValue)
      result[nameAndValue[0]] = nameAndValue[1];
    return result;
  }, {});
}
function tryCatch(fn, onerror, args) {
  try {
    fn.apply(null, args);
  } catch (ex) {
    onerror && onerror(ex);
  }
}
function getByKeyPath(obj, keyPath) {
  if (hasOwn(obj, keyPath))
    return obj[keyPath];
  if (!keyPath)
    return obj;
  if (typeof keyPath !== "string") {
    var rv = [];
    for (var i = 0, l = keyPath.length; i < l; ++i) {
      var val = getByKeyPath(obj, keyPath[i]);
      rv.push(val);
    }
    return rv;
  }
  var period = keyPath.indexOf(".");
  if (period !== -1) {
    var innerObj = obj[keyPath.substr(0, period)];
    return innerObj === void 0 ? void 0 : getByKeyPath(innerObj, keyPath.substr(period + 1));
  }
  return void 0;
}
function setByKeyPath(obj, keyPath, value) {
  if (!obj || keyPath === void 0)
    return;
  if ("isFrozen" in Object && Object.isFrozen(obj))
    return;
  if (typeof keyPath !== "string" && "length" in keyPath) {
    assert(typeof value !== "string" && "length" in value);
    for (var i = 0, l = keyPath.length; i < l; ++i) {
      setByKeyPath(obj, keyPath[i], value[i]);
    }
  } else {
    var period = keyPath.indexOf(".");
    if (period !== -1) {
      var currentKeyPath = keyPath.substr(0, period);
      var remainingKeyPath = keyPath.substr(period + 1);
      if (remainingKeyPath === "")
        if (value === void 0) {
          if (isArray2(obj) && !isNaN(parseInt(currentKeyPath)))
            obj.splice(currentKeyPath, 1);
          else
            delete obj[currentKeyPath];
        } else
          obj[currentKeyPath] = value;
      else {
        var innerObj = obj[currentKeyPath];
        if (!innerObj || !hasOwn(obj, currentKeyPath))
          innerObj = obj[currentKeyPath] = {};
        setByKeyPath(innerObj, remainingKeyPath, value);
      }
    } else {
      if (value === void 0) {
        if (isArray2(obj) && !isNaN(parseInt(keyPath)))
          obj.splice(keyPath, 1);
        else
          delete obj[keyPath];
      } else
        obj[keyPath] = value;
    }
  }
}
function delByKeyPath(obj, keyPath) {
  if (typeof keyPath === "string")
    setByKeyPath(obj, keyPath, void 0);
  else if ("length" in keyPath)
    [].map.call(keyPath, function(kp) {
      setByKeyPath(obj, kp, void 0);
    });
}
function shallowClone(obj) {
  var rv = {};
  for (var m in obj) {
    if (hasOwn(obj, m))
      rv[m] = obj[m];
  }
  return rv;
}
var concat2 = [].concat;
function flatten(a) {
  return concat2.apply([], a);
}
var intrinsicTypeNames = "Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(flatten([8, 16, 32, 64].map((num) => ["Int", "Uint", "Float"].map((t) => t + num + "Array")))).filter((t) => _global[t]);
var intrinsicTypes = intrinsicTypeNames.map((t) => _global[t]);
arrayToObject(intrinsicTypeNames, (x) => [x, true]);
var circularRefs = null;
function deepClone(any) {
  circularRefs = typeof WeakMap !== "undefined" && new WeakMap();
  const rv = innerDeepClone(any);
  circularRefs = null;
  return rv;
}
function innerDeepClone(any) {
  if (!any || typeof any !== "object")
    return any;
  let rv = circularRefs && circularRefs.get(any);
  if (rv)
    return rv;
  if (isArray2(any)) {
    rv = [];
    circularRefs && circularRefs.set(any, rv);
    for (var i = 0, l = any.length; i < l; ++i) {
      rv.push(innerDeepClone(any[i]));
    }
  } else if (intrinsicTypes.indexOf(any.constructor) >= 0) {
    rv = any;
  } else {
    const proto = getProto(any);
    rv = proto === Object.prototype ? {} : Object.create(proto);
    circularRefs && circularRefs.set(any, rv);
    for (var prop in any) {
      if (hasOwn(any, prop)) {
        rv[prop] = innerDeepClone(any[prop]);
      }
    }
  }
  return rv;
}
var {toString: toString3} = {};
function toStringTag(o) {
  return toString3.call(o).slice(8, -1);
}
var iteratorSymbol = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
var getIteratorOf = typeof iteratorSymbol === "symbol" ? function(x) {
  var i;
  return x != null && (i = x[iteratorSymbol]) && i.apply(x);
} : function() {
  return null;
};
var NO_CHAR_ARRAY = {};
function getArrayOf(arrayLike) {
  var i, a, x, it;
  if (arguments.length === 1) {
    if (isArray2(arrayLike))
      return arrayLike.slice();
    if (this === NO_CHAR_ARRAY && typeof arrayLike === "string")
      return [arrayLike];
    if (it = getIteratorOf(arrayLike)) {
      a = [];
      while (x = it.next(), !x.done)
        a.push(x.value);
      return a;
    }
    if (arrayLike == null)
      return [arrayLike];
    i = arrayLike.length;
    if (typeof i === "number") {
      a = new Array(i);
      while (i--)
        a[i] = arrayLike[i];
      return a;
    }
    return [arrayLike];
  }
  i = arguments.length;
  a = new Array(i);
  while (i--)
    a[i] = arguments[i];
  return a;
}
var isAsyncFunction = typeof Symbol !== "undefined" ? (fn) => fn[Symbol.toStringTag] === "AsyncFunction" : () => false;
var debug = typeof location !== "undefined" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
function setDebug(value, filter) {
  debug = value;
  libraryFilter = filter;
}
var libraryFilter = () => true;
var NEEDS_THROW_FOR_STACK = !new Error("").stack;
function getErrorWithStack() {
  if (NEEDS_THROW_FOR_STACK)
    try {
      getErrorWithStack.arguments;
      throw new Error();
    } catch (e) {
      return e;
    }
  return new Error();
}
function prettyStack(exception, numIgnoredFrames) {
  var stack = exception.stack;
  if (!stack)
    return "";
  numIgnoredFrames = numIgnoredFrames || 0;
  if (stack.indexOf(exception.name) === 0)
    numIgnoredFrames += (exception.name + exception.message).split("\n").length;
  return stack.split("\n").slice(numIgnoredFrames).filter(libraryFilter).map((frame) => "\n" + frame).join("");
}
var dexieErrorNames = [
  "Modify",
  "Bulk",
  "OpenFailed",
  "VersionChange",
  "Schema",
  "Upgrade",
  "InvalidTable",
  "MissingAPI",
  "NoSuchDatabase",
  "InvalidArgument",
  "SubTransaction",
  "Unsupported",
  "Internal",
  "DatabaseClosed",
  "PrematureCommit",
  "ForeignAwait"
];
var idbDomErrorNames = [
  "Unknown",
  "Constraint",
  "Data",
  "TransactionInactive",
  "ReadOnly",
  "Version",
  "NotFound",
  "InvalidState",
  "InvalidAccess",
  "Abort",
  "Timeout",
  "QuotaExceeded",
  "Syntax",
  "DataClone"
];
var errorList = dexieErrorNames.concat(idbDomErrorNames);
var defaultTexts = {
  VersionChanged: "Database version changed by other database connection",
  DatabaseClosed: "Database has been closed",
  Abort: "Transaction aborted",
  TransactionInactive: "Transaction has already completed or failed",
  MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
};
function DexieError(name, msg) {
  this._e = getErrorWithStack();
  this.name = name;
  this.message = msg;
}
derive(DexieError).from(Error).extend({
  stack: {
    get: function() {
      return this._stack || (this._stack = this.name + ": " + this.message + prettyStack(this._e, 2));
    }
  },
  toString: function() {
    return this.name + ": " + this.message;
  }
});
function getMultiErrorMessage(msg, failures) {
  return msg + ". Errors: " + Object.keys(failures).map((key) => failures[key].toString()).filter((v, i, s) => s.indexOf(v) === i).join("\n");
}
function ModifyError(msg, failures, successCount, failedKeys) {
  this._e = getErrorWithStack();
  this.failures = failures;
  this.failedKeys = failedKeys;
  this.successCount = successCount;
  this.message = getMultiErrorMessage(msg, failures);
}
derive(ModifyError).from(DexieError);
function BulkError(msg, failures) {
  this._e = getErrorWithStack();
  this.name = "BulkError";
  this.failures = Object.keys(failures).map((pos) => failures[pos]);
  this.failuresByPos = failures;
  this.message = getMultiErrorMessage(msg, failures);
}
derive(BulkError).from(DexieError);
var errnames = errorList.reduce((obj, name) => (obj[name] = name + "Error", obj), {});
var BaseException = DexieError;
var exceptions = errorList.reduce((obj, name) => {
  var fullName = name + "Error";
  function DexieError2(msgOrInner, inner) {
    this._e = getErrorWithStack();
    this.name = fullName;
    if (!msgOrInner) {
      this.message = defaultTexts[name] || fullName;
      this.inner = null;
    } else if (typeof msgOrInner === "string") {
      this.message = `${msgOrInner}${!inner ? "" : "\n " + inner}`;
      this.inner = inner || null;
    } else if (typeof msgOrInner === "object") {
      this.message = `${msgOrInner.name} ${msgOrInner.message}`;
      this.inner = msgOrInner;
    }
  }
  derive(DexieError2).from(BaseException);
  obj[name] = DexieError2;
  return obj;
}, {});
exceptions.Syntax = SyntaxError;
exceptions.Type = TypeError;
exceptions.Range = RangeError;
var exceptionMap = idbDomErrorNames.reduce((obj, name) => {
  obj[name + "Error"] = exceptions[name];
  return obj;
}, {});
function mapError(domError, message) {
  if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name])
    return domError;
  var rv = new exceptionMap[domError.name](message || domError.message, domError);
  if ("stack" in domError) {
    setProp(rv, "stack", {get: function() {
      return this.inner.stack;
    }});
  }
  return rv;
}
var fullNameExceptions = errorList.reduce((obj, name) => {
  if (["Syntax", "Type", "Range"].indexOf(name) === -1)
    obj[name + "Error"] = exceptions[name];
  return obj;
}, {});
fullNameExceptions.ModifyError = ModifyError;
fullNameExceptions.DexieError = DexieError;
fullNameExceptions.BulkError = BulkError;
function nop() {
}
function mirror(val) {
  return val;
}
function pureFunctionChain(f1, f2) {
  if (f1 == null || f1 === mirror)
    return f2;
  return function(val) {
    return f2(f1(val));
  };
}
function callBoth(on1, on2) {
  return function() {
    on1.apply(this, arguments);
    on2.apply(this, arguments);
  };
}
function hookCreatingChain(f1, f2) {
  if (f1 === nop)
    return f2;
  return function() {
    var res = f1.apply(this, arguments);
    if (res !== void 0)
      arguments[0] = res;
    var onsuccess = this.onsuccess, onerror = this.onerror;
    this.onsuccess = null;
    this.onerror = null;
    var res2 = f2.apply(this, arguments);
    if (onsuccess)
      this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror)
      this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    return res2 !== void 0 ? res2 : res;
  };
}
function hookDeletingChain(f1, f2) {
  if (f1 === nop)
    return f2;
  return function() {
    f1.apply(this, arguments);
    var onsuccess = this.onsuccess, onerror = this.onerror;
    this.onsuccess = this.onerror = null;
    f2.apply(this, arguments);
    if (onsuccess)
      this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror)
      this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
  };
}
function hookUpdatingChain(f1, f2) {
  if (f1 === nop)
    return f2;
  return function(modifications) {
    var res = f1.apply(this, arguments);
    extend(modifications, res);
    var onsuccess = this.onsuccess, onerror = this.onerror;
    this.onsuccess = null;
    this.onerror = null;
    var res2 = f2.apply(this, arguments);
    if (onsuccess)
      this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror)
      this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    return res === void 0 ? res2 === void 0 ? void 0 : res2 : extend(res, res2);
  };
}
function reverseStoppableEventChain(f1, f2) {
  if (f1 === nop)
    return f2;
  return function() {
    if (f2.apply(this, arguments) === false)
      return false;
    return f1.apply(this, arguments);
  };
}
function promisableChain(f1, f2) {
  if (f1 === nop)
    return f2;
  return function() {
    var res = f1.apply(this, arguments);
    if (res && typeof res.then === "function") {
      var thiz = this, i = arguments.length, args = new Array(i);
      while (i--)
        args[i] = arguments[i];
      return res.then(function() {
        return f2.apply(thiz, args);
      });
    }
    return f2.apply(this, arguments);
  };
}
var INTERNAL = {};
var LONG_STACKS_CLIP_LIMIT = 100;
var MAX_LONG_STACKS = 20;
var ZONE_ECHO_LIMIT = 100;
var [resolvedNativePromise, nativePromiseProto, resolvedGlobalPromise] = typeof Promise === "undefined" ? [] : (() => {
  let globalP = Promise.resolve();
  if (typeof crypto === "undefined" || !crypto.subtle)
    return [globalP, getProto(globalP), globalP];
  const nativeP = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
  return [
    nativeP,
    getProto(nativeP),
    globalP
  ];
})();
var nativePromiseThen = nativePromiseProto && nativePromiseProto.then;
var NativePromise = resolvedNativePromise && resolvedNativePromise.constructor;
var patchGlobalPromise = !!resolvedGlobalPromise;
var stack_being_generated = false;
var schedulePhysicalTick = resolvedGlobalPromise ? () => {
  resolvedGlobalPromise.then(physicalTick);
} : _global.setImmediate ? setImmediate.bind(null, physicalTick) : _global.MutationObserver ? () => {
  var hiddenDiv = document.createElement("div");
  new MutationObserver(() => {
    physicalTick();
    hiddenDiv = null;
  }).observe(hiddenDiv, {attributes: true});
  hiddenDiv.setAttribute("i", "1");
} : () => {
  setTimeout(physicalTick, 0);
};
var asap = function(callback, args) {
  microtickQueue.push([callback, args]);
  if (needsNewPhysicalTick) {
    schedulePhysicalTick();
    needsNewPhysicalTick = false;
  }
};
var isOutsideMicroTick = true;
var needsNewPhysicalTick = true;
var unhandledErrors = [];
var rejectingErrors = [];
var currentFulfiller = null;
var rejectionMapper = mirror;
var globalPSD = {
  id: "global",
  global: true,
  ref: 0,
  unhandleds: [],
  onunhandled: globalError,
  pgp: false,
  env: {},
  finalize: function() {
    this.unhandleds.forEach((uh) => {
      try {
        globalError(uh[0], uh[1]);
      } catch (e) {
      }
    });
  }
};
var PSD = globalPSD;
var microtickQueue = [];
var numScheduledCalls = 0;
var tickFinalizers = [];
function DexiePromise(fn) {
  if (typeof this !== "object")
    throw new TypeError("Promises must be constructed via new");
  this._listeners = [];
  this.onuncatched = nop;
  this._lib = false;
  var psd = this._PSD = PSD;
  if (debug) {
    this._stackHolder = getErrorWithStack();
    this._prev = null;
    this._numPrev = 0;
  }
  if (typeof fn !== "function") {
    if (fn !== INTERNAL)
      throw new TypeError("Not a function");
    this._state = arguments[1];
    this._value = arguments[2];
    if (this._state === false)
      handleRejection(this, this._value);
    return;
  }
  this._state = null;
  this._value = null;
  ++psd.ref;
  executePromiseTask(this, fn);
}
var thenProp = {
  get: function() {
    var psd = PSD, microTaskId = totalEchoes;
    function then(onFulfilled, onRejected) {
      var possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes);
      const cleanup = possibleAwait && !decrementExpectedAwaits();
      var rv = new DexiePromise((resolve, reject) => {
        propagateToListener(this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait, cleanup), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait, cleanup), resolve, reject, psd));
      });
      debug && linkToPreviousPromise(rv, this);
      return rv;
    }
    then.prototype = INTERNAL;
    return then;
  },
  set: function(value) {
    setProp(this, "then", value && value.prototype === INTERNAL ? thenProp : {
      get: function() {
        return value;
      },
      set: thenProp.set
    });
  }
};
props(DexiePromise.prototype, {
  then: thenProp,
  _then: function(onFulfilled, onRejected) {
    propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
  },
  catch: function(onRejected) {
    if (arguments.length === 1)
      return this.then(null, onRejected);
    var type2 = arguments[0], handler = arguments[1];
    return typeof type2 === "function" ? this.then(null, (err) => err instanceof type2 ? handler(err) : PromiseReject(err)) : this.then(null, (err) => err && err.name === type2 ? handler(err) : PromiseReject(err));
  },
  finally: function(onFinally) {
    return this.then((value) => {
      onFinally();
      return value;
    }, (err) => {
      onFinally();
      return PromiseReject(err);
    });
  },
  stack: {
    get: function() {
      if (this._stack)
        return this._stack;
      try {
        stack_being_generated = true;
        var stacks = getStack(this, [], MAX_LONG_STACKS);
        var stack = stacks.join("\nFrom previous: ");
        if (this._state !== null)
          this._stack = stack;
        return stack;
      } finally {
        stack_being_generated = false;
      }
    }
  },
  timeout: function(ms, msg) {
    return ms < Infinity ? new DexiePromise((resolve, reject) => {
      var handle = setTimeout(() => reject(new exceptions.Timeout(msg)), ms);
      this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
    }) : this;
  }
});
if (typeof Symbol !== "undefined" && Symbol.toStringTag)
  setProp(DexiePromise.prototype, Symbol.toStringTag, "Dexie.Promise");
globalPSD.env = snapShot();
function Listener(onFulfilled, onRejected, resolve, reject, zone) {
  this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
  this.onRejected = typeof onRejected === "function" ? onRejected : null;
  this.resolve = resolve;
  this.reject = reject;
  this.psd = zone;
}
props(DexiePromise, {
  all: function() {
    var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise(function(resolve, reject) {
      if (values.length === 0)
        resolve([]);
      var remaining = values.length;
      values.forEach((a, i) => DexiePromise.resolve(a).then((x) => {
        values[i] = x;
        if (!--remaining)
          resolve(values);
      }, reject));
    });
  },
  resolve: (value) => {
    if (value instanceof DexiePromise)
      return value;
    if (value && typeof value.then === "function")
      return new DexiePromise((resolve, reject) => {
        value.then(resolve, reject);
      });
    var rv = new DexiePromise(INTERNAL, true, value);
    linkToPreviousPromise(rv, currentFulfiller);
    return rv;
  },
  reject: PromiseReject,
  race: function() {
    var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise((resolve, reject) => {
      values.map((value) => DexiePromise.resolve(value).then(resolve, reject));
    });
  },
  PSD: {
    get: () => PSD,
    set: (value) => PSD = value
  },
  totalEchoes: {get: () => totalEchoes},
  newPSD: newScope,
  usePSD,
  scheduler: {
    get: () => asap,
    set: (value) => {
      asap = value;
    }
  },
  rejectionMapper: {
    get: () => rejectionMapper,
    set: (value) => {
      rejectionMapper = value;
    }
  },
  follow: (fn, zoneProps) => {
    return new DexiePromise((resolve, reject) => {
      return newScope((resolve2, reject2) => {
        var psd = PSD;
        psd.unhandleds = [];
        psd.onunhandled = reject2;
        psd.finalize = callBoth(function() {
          run_at_end_of_this_or_next_physical_tick(() => {
            this.unhandleds.length === 0 ? resolve2() : reject2(this.unhandleds[0]);
          });
        }, psd.finalize);
        fn();
      }, zoneProps, resolve, reject);
    });
  }
});
if (NativePromise) {
  if (NativePromise.allSettled)
    setProp(DexiePromise, "allSettled", function() {
      const possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
      return new DexiePromise((resolve) => {
        if (possiblePromises.length === 0)
          resolve([]);
        let remaining = possiblePromises.length;
        const results = new Array(remaining);
        possiblePromises.forEach((p3, i) => DexiePromise.resolve(p3).then((value) => results[i] = {status: "fulfilled", value}, (reason) => results[i] = {status: "rejected", reason}).then(() => --remaining || resolve(results)));
      });
    });
  if (NativePromise.any && typeof AggregateError !== "undefined")
    setProp(DexiePromise, "any", function() {
      const possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
      return new DexiePromise((resolve, reject) => {
        if (possiblePromises.length === 0)
          reject(new AggregateError([]));
        let remaining = possiblePromises.length;
        const failures = new Array(remaining);
        possiblePromises.forEach((p3, i) => DexiePromise.resolve(p3).then((value) => resolve(value), (failure) => {
          failures[i] = failure;
          if (!--remaining)
            reject(new AggregateError(failures));
        }));
      });
    });
}
function executePromiseTask(promise, fn) {
  try {
    fn((value) => {
      if (promise._state !== null)
        return;
      if (value === promise)
        throw new TypeError("A promise cannot be resolved with itself.");
      var shouldExecuteTick = promise._lib && beginMicroTickScope();
      if (value && typeof value.then === "function") {
        executePromiseTask(promise, (resolve, reject) => {
          value instanceof DexiePromise ? value._then(resolve, reject) : value.then(resolve, reject);
        });
      } else {
        promise._state = true;
        promise._value = value;
        propagateAllListeners(promise);
      }
      if (shouldExecuteTick)
        endMicroTickScope();
    }, handleRejection.bind(null, promise));
  } catch (ex) {
    handleRejection(promise, ex);
  }
}
function handleRejection(promise, reason) {
  rejectingErrors.push(reason);
  if (promise._state !== null)
    return;
  var shouldExecuteTick = promise._lib && beginMicroTickScope();
  reason = rejectionMapper(reason);
  promise._state = false;
  promise._value = reason;
  debug && reason !== null && typeof reason === "object" && !reason._promise && tryCatch(() => {
    var origProp = getPropertyDescriptor(reason, "stack");
    reason._promise = promise;
    setProp(reason, "stack", {
      get: () => stack_being_generated ? origProp && (origProp.get ? origProp.get.apply(reason) : origProp.value) : promise.stack
    });
  });
  addPossiblyUnhandledError(promise);
  propagateAllListeners(promise);
  if (shouldExecuteTick)
    endMicroTickScope();
}
function propagateAllListeners(promise) {
  var listeners = promise._listeners;
  promise._listeners = [];
  for (var i = 0, len = listeners.length; i < len; ++i) {
    propagateToListener(promise, listeners[i]);
  }
  var psd = promise._PSD;
  --psd.ref || psd.finalize();
  if (numScheduledCalls === 0) {
    ++numScheduledCalls;
    asap(() => {
      if (--numScheduledCalls === 0)
        finalizePhysicalTick();
    }, []);
  }
}
function propagateToListener(promise, listener) {
  if (promise._state === null) {
    promise._listeners.push(listener);
    return;
  }
  var cb = promise._state ? listener.onFulfilled : listener.onRejected;
  if (cb === null) {
    return (promise._state ? listener.resolve : listener.reject)(promise._value);
  }
  ++listener.psd.ref;
  ++numScheduledCalls;
  asap(callListener, [cb, promise, listener]);
}
function callListener(cb, promise, listener) {
  try {
    currentFulfiller = promise;
    var ret, value = promise._value;
    if (promise._state) {
      ret = cb(value);
    } else {
      if (rejectingErrors.length)
        rejectingErrors = [];
      ret = cb(value);
      if (rejectingErrors.indexOf(value) === -1)
        markErrorAsHandled(promise);
    }
    listener.resolve(ret);
  } catch (e) {
    listener.reject(e);
  } finally {
    currentFulfiller = null;
    if (--numScheduledCalls === 0)
      finalizePhysicalTick();
    --listener.psd.ref || listener.psd.finalize();
  }
}
function getStack(promise, stacks, limit) {
  if (stacks.length === limit)
    return stacks;
  var stack = "";
  if (promise._state === false) {
    var failure = promise._value, errorName, message;
    if (failure != null) {
      errorName = failure.name || "Error";
      message = failure.message || failure;
      stack = prettyStack(failure, 0);
    } else {
      errorName = failure;
      message = "";
    }
    stacks.push(errorName + (message ? ": " + message : "") + stack);
  }
  if (debug) {
    stack = prettyStack(promise._stackHolder, 2);
    if (stack && stacks.indexOf(stack) === -1)
      stacks.push(stack);
    if (promise._prev)
      getStack(promise._prev, stacks, limit);
  }
  return stacks;
}
function linkToPreviousPromise(promise, prev) {
  var numPrev = prev ? prev._numPrev + 1 : 0;
  if (numPrev < LONG_STACKS_CLIP_LIMIT) {
    promise._prev = prev;
    promise._numPrev = numPrev;
  }
}
function physicalTick() {
  beginMicroTickScope() && endMicroTickScope();
}
function beginMicroTickScope() {
  var wasRootExec = isOutsideMicroTick;
  isOutsideMicroTick = false;
  needsNewPhysicalTick = false;
  return wasRootExec;
}
function endMicroTickScope() {
  var callbacks, i, l;
  do {
    while (microtickQueue.length > 0) {
      callbacks = microtickQueue;
      microtickQueue = [];
      l = callbacks.length;
      for (i = 0; i < l; ++i) {
        var item = callbacks[i];
        item[0].apply(null, item[1]);
      }
    }
  } while (microtickQueue.length > 0);
  isOutsideMicroTick = true;
  needsNewPhysicalTick = true;
}
function finalizePhysicalTick() {
  var unhandledErrs = unhandledErrors;
  unhandledErrors = [];
  unhandledErrs.forEach((p3) => {
    p3._PSD.onunhandled.call(null, p3._value, p3);
  });
  var finalizers = tickFinalizers.slice(0);
  var i = finalizers.length;
  while (i)
    finalizers[--i]();
}
function run_at_end_of_this_or_next_physical_tick(fn) {
  function finalizer() {
    fn();
    tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
  }
  tickFinalizers.push(finalizer);
  ++numScheduledCalls;
  asap(() => {
    if (--numScheduledCalls === 0)
      finalizePhysicalTick();
  }, []);
}
function addPossiblyUnhandledError(promise) {
  if (!unhandledErrors.some((p3) => p3._value === promise._value))
    unhandledErrors.push(promise);
}
function markErrorAsHandled(promise) {
  var i = unhandledErrors.length;
  while (i)
    if (unhandledErrors[--i]._value === promise._value) {
      unhandledErrors.splice(i, 1);
      return;
    }
}
function PromiseReject(reason) {
  return new DexiePromise(INTERNAL, false, reason);
}
function wrap(fn, errorCatcher) {
  var psd = PSD;
  return function() {
    var wasRootExec = beginMicroTickScope(), outerScope = PSD;
    try {
      switchToZone(psd, true);
      return fn.apply(this, arguments);
    } catch (e) {
      errorCatcher && errorCatcher(e);
    } finally {
      switchToZone(outerScope, false);
      if (wasRootExec)
        endMicroTickScope();
    }
  };
}
var task = {awaits: 0, echoes: 0, id: 0};
var taskCounter = 0;
var zoneStack = [];
var zoneEchoes = 0;
var totalEchoes = 0;
var zone_id_counter = 0;
function newScope(fn, props2, a1, a2) {
  var parent = PSD, psd = Object.create(parent);
  psd.parent = parent;
  psd.ref = 0;
  psd.global = false;
  psd.id = ++zone_id_counter;
  var globalEnv = globalPSD.env;
  psd.env = patchGlobalPromise ? {
    Promise: DexiePromise,
    PromiseProp: {value: DexiePromise, configurable: true, writable: true},
    all: DexiePromise.all,
    race: DexiePromise.race,
    allSettled: DexiePromise.allSettled,
    any: DexiePromise.any,
    resolve: DexiePromise.resolve,
    reject: DexiePromise.reject,
    nthen: getPatchedPromiseThen(globalEnv.nthen, psd),
    gthen: getPatchedPromiseThen(globalEnv.gthen, psd)
  } : {};
  if (props2)
    extend(psd, props2);
  ++parent.ref;
  psd.finalize = function() {
    --this.parent.ref || this.parent.finalize();
  };
  var rv = usePSD(psd, fn, a1, a2);
  if (psd.ref === 0)
    psd.finalize();
  return rv;
}
function incrementExpectedAwaits() {
  if (!task.id)
    task.id = ++taskCounter;
  ++task.awaits;
  task.echoes += ZONE_ECHO_LIMIT;
  return task.id;
}
function decrementExpectedAwaits() {
  if (!task.awaits)
    return false;
  if (--task.awaits === 0)
    task.id = 0;
  task.echoes = task.awaits * ZONE_ECHO_LIMIT;
  return true;
}
if (("" + nativePromiseThen).indexOf("[native code]") === -1) {
  incrementExpectedAwaits = decrementExpectedAwaits = nop;
}
function onPossibleParallellAsync(possiblePromise) {
  if (task.echoes && possiblePromise && possiblePromise.constructor === NativePromise) {
    incrementExpectedAwaits();
    return possiblePromise.then((x) => {
      decrementExpectedAwaits();
      return x;
    }, (e) => {
      decrementExpectedAwaits();
      return rejection(e);
    });
  }
  return possiblePromise;
}
function zoneEnterEcho(targetZone) {
  ++totalEchoes;
  if (!task.echoes || --task.echoes === 0) {
    task.echoes = task.id = 0;
  }
  zoneStack.push(PSD);
  switchToZone(targetZone, true);
}
function zoneLeaveEcho() {
  var zone = zoneStack[zoneStack.length - 1];
  zoneStack.pop();
  switchToZone(zone, false);
}
function switchToZone(targetZone, bEnteringZone) {
  var currentZone = PSD;
  if (bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (!--zoneEchoes || targetZone !== PSD)) {
    enqueueNativeMicroTask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho);
  }
  if (targetZone === PSD)
    return;
  PSD = targetZone;
  if (currentZone === globalPSD)
    globalPSD.env = snapShot();
  if (patchGlobalPromise) {
    var GlobalPromise = globalPSD.env.Promise;
    var targetEnv = targetZone.env;
    nativePromiseProto.then = targetEnv.nthen;
    GlobalPromise.prototype.then = targetEnv.gthen;
    if (currentZone.global || targetZone.global) {
      Object.defineProperty(_global, "Promise", targetEnv.PromiseProp);
      GlobalPromise.all = targetEnv.all;
      GlobalPromise.race = targetEnv.race;
      GlobalPromise.resolve = targetEnv.resolve;
      GlobalPromise.reject = targetEnv.reject;
      if (targetEnv.allSettled)
        GlobalPromise.allSettled = targetEnv.allSettled;
      if (targetEnv.any)
        GlobalPromise.any = targetEnv.any;
    }
  }
}
function snapShot() {
  var GlobalPromise = _global.Promise;
  return patchGlobalPromise ? {
    Promise: GlobalPromise,
    PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
    all: GlobalPromise.all,
    race: GlobalPromise.race,
    allSettled: GlobalPromise.allSettled,
    any: GlobalPromise.any,
    resolve: GlobalPromise.resolve,
    reject: GlobalPromise.reject,
    nthen: nativePromiseProto.then,
    gthen: GlobalPromise.prototype.then
  } : {};
}
function usePSD(psd, fn, a1, a2, a3) {
  var outerScope = PSD;
  try {
    switchToZone(psd, true);
    return fn(a1, a2, a3);
  } finally {
    switchToZone(outerScope, false);
  }
}
function enqueueNativeMicroTask(job) {
  nativePromiseThen.call(resolvedNativePromise, job);
}
function nativeAwaitCompatibleWrap(fn, zone, possibleAwait, cleanup) {
  return typeof fn !== "function" ? fn : function() {
    var outerZone = PSD;
    if (possibleAwait)
      incrementExpectedAwaits();
    switchToZone(zone, true);
    try {
      return fn.apply(this, arguments);
    } finally {
      switchToZone(outerZone, false);
      if (cleanup)
        enqueueNativeMicroTask(decrementExpectedAwaits);
    }
  };
}
function getPatchedPromiseThen(origThen, zone) {
  return function(onResolved, onRejected) {
    return origThen.call(this, nativeAwaitCompatibleWrap(onResolved, zone), nativeAwaitCompatibleWrap(onRejected, zone));
  };
}
var UNHANDLEDREJECTION = "unhandledrejection";
function globalError(err, promise) {
  var rv;
  try {
    rv = promise.onuncatched(err);
  } catch (e) {
  }
  if (rv !== false)
    try {
      var event, eventData = {promise, reason: err};
      if (_global.document && document.createEvent) {
        event = document.createEvent("Event");
        event.initEvent(UNHANDLEDREJECTION, true, true);
        extend(event, eventData);
      } else if (_global.CustomEvent) {
        event = new CustomEvent(UNHANDLEDREJECTION, {detail: eventData});
        extend(event, eventData);
      }
      if (event && _global.dispatchEvent) {
        dispatchEvent(event);
        if (!_global.PromiseRejectionEvent && _global.onunhandledrejection)
          try {
            _global.onunhandledrejection(event);
          } catch (_2) {
          }
      }
      if (debug && event && !event.defaultPrevented) {
        console.warn(`Unhandled rejection: ${err.stack || err}`);
      }
    } catch (e) {
    }
}
var rejection = DexiePromise.reject;
function tempTransaction(db2, mode, storeNames, fn) {
  if (!db2.idbdb || !db2._state.openComplete && (!PSD.letThrough && !db2._vip)) {
    if (db2._state.openComplete) {
      return rejection(new exceptions.DatabaseClosed(db2._state.dbOpenError));
    }
    if (!db2._state.isBeingOpened) {
      if (!db2._options.autoOpen)
        return rejection(new exceptions.DatabaseClosed());
      db2.open().catch(nop);
    }
    return db2._state.dbReadyPromise.then(() => tempTransaction(db2, mode, storeNames, fn));
  } else {
    var trans = db2._createTransaction(mode, storeNames, db2._dbSchema);
    try {
      trans.create();
      db2._state.PR1398_maxLoop = 3;
    } catch (ex) {
      if (ex.name === errnames.InvalidState && db2.isOpen() && --db2._state.PR1398_maxLoop > 0) {
        console.warn("Dexie: Need to reopen db");
        db2._close();
        return db2.open().then(() => tempTransaction(db2, mode, storeNames, fn));
      }
      return rejection(ex);
    }
    return trans._promise(mode, (resolve, reject) => {
      return newScope(() => {
        PSD.trans = trans;
        return fn(resolve, reject, trans);
      });
    }).then((result) => {
      return trans._completion.then(() => result);
    });
  }
}
var DEXIE_VERSION = "3.2.2";
var maxString = String.fromCharCode(65535);
var minKey = -Infinity;
var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
var STRING_EXPECTED = "String expected.";
var connections = [];
var isIEOrEdge = typeof navigator !== "undefined" && /(MSIE|Trident|Edge)/.test(navigator.userAgent);
var hasIEDeleteObjectStoreBug = isIEOrEdge;
var hangsOnDeleteLargeKeyRange = isIEOrEdge;
var dexieStackFrameFilter = (frame) => !/(dexie\.js|dexie\.min\.js)/.test(frame);
var DBNAMES_DB = "__dbnames";
var READONLY = "readonly";
var READWRITE = "readwrite";
function combine(filter1, filter2) {
  return filter1 ? filter2 ? function() {
    return filter1.apply(this, arguments) && filter2.apply(this, arguments);
  } : filter1 : filter2;
}
var AnyRange = {
  type: 3,
  lower: -Infinity,
  lowerOpen: false,
  upper: [[]],
  upperOpen: false
};
function workaroundForUndefinedPrimKey(keyPath) {
  return typeof keyPath === "string" && !/\./.test(keyPath) ? (obj) => {
    if (obj[keyPath] === void 0 && keyPath in obj) {
      obj = deepClone(obj);
      delete obj[keyPath];
    }
    return obj;
  } : (obj) => obj;
}
var Table = class {
  _trans(mode, fn, writeLocked) {
    const trans = this._tx || PSD.trans;
    const tableName = this.name;
    function checkTableInTransaction(resolve, reject, trans2) {
      if (!trans2.schema[tableName])
        throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
      return fn(trans2.idbtrans, trans2);
    }
    const wasRootExec = beginMicroTickScope();
    try {
      return trans && trans.db === this.db ? trans === PSD.trans ? trans._promise(mode, checkTableInTransaction, writeLocked) : newScope(() => trans._promise(mode, checkTableInTransaction, writeLocked), {trans, transless: PSD.transless || PSD}) : tempTransaction(this.db, mode, [this.name], checkTableInTransaction);
    } finally {
      if (wasRootExec)
        endMicroTickScope();
    }
  }
  get(keyOrCrit, cb) {
    if (keyOrCrit && keyOrCrit.constructor === Object)
      return this.where(keyOrCrit).first(cb);
    return this._trans("readonly", (trans) => {
      return this.core.get({trans, key: keyOrCrit}).then((res) => this.hook.reading.fire(res));
    }).then(cb);
  }
  where(indexOrCrit) {
    if (typeof indexOrCrit === "string")
      return new this.db.WhereClause(this, indexOrCrit);
    if (isArray2(indexOrCrit))
      return new this.db.WhereClause(this, `[${indexOrCrit.join("+")}]`);
    const keyPaths = keys(indexOrCrit);
    if (keyPaths.length === 1)
      return this.where(keyPaths[0]).equals(indexOrCrit[keyPaths[0]]);
    const compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter((ix) => ix.compound && keyPaths.every((keyPath) => ix.keyPath.indexOf(keyPath) >= 0) && ix.keyPath.every((keyPath) => keyPaths.indexOf(keyPath) >= 0))[0];
    if (compoundIndex && this.db._maxKey !== maxString)
      return this.where(compoundIndex.name).equals(compoundIndex.keyPath.map((kp) => indexOrCrit[kp]));
    if (!compoundIndex && debug)
      console.warn(`The query ${JSON.stringify(indexOrCrit)} on ${this.name} would benefit of a compound index [${keyPaths.join("+")}]`);
    const {idxByName} = this.schema;
    const idb = this.db._deps.indexedDB;
    function equals2(a, b) {
      try {
        return idb.cmp(a, b) === 0;
      } catch (e) {
        return false;
      }
    }
    const [idx, filterFunction] = keyPaths.reduce(([prevIndex, prevFilterFn], keyPath) => {
      const index = idxByName[keyPath];
      const value = indexOrCrit[keyPath];
      return [
        prevIndex || index,
        prevIndex || !index ? combine(prevFilterFn, index && index.multi ? (x) => {
          const prop = getByKeyPath(x, keyPath);
          return isArray2(prop) && prop.some((item) => equals2(value, item));
        } : (x) => equals2(value, getByKeyPath(x, keyPath))) : prevFilterFn
      ];
    }, [null, null]);
    return idx ? this.where(idx.name).equals(indexOrCrit[idx.keyPath]).filter(filterFunction) : compoundIndex ? this.filter(filterFunction) : this.where(keyPaths).equals("");
  }
  filter(filterFunction) {
    return this.toCollection().and(filterFunction);
  }
  count(thenShortcut) {
    return this.toCollection().count(thenShortcut);
  }
  offset(offset) {
    return this.toCollection().offset(offset);
  }
  limit(numRows) {
    return this.toCollection().limit(numRows);
  }
  each(callback) {
    return this.toCollection().each(callback);
  }
  toArray(thenShortcut) {
    return this.toCollection().toArray(thenShortcut);
  }
  toCollection() {
    return new this.db.Collection(new this.db.WhereClause(this));
  }
  orderBy(index) {
    return new this.db.Collection(new this.db.WhereClause(this, isArray2(index) ? `[${index.join("+")}]` : index));
  }
  reverse() {
    return this.toCollection().reverse();
  }
  mapToClass(constructor) {
    this.schema.mappedClass = constructor;
    const readHook = (obj) => {
      if (!obj)
        return obj;
      const res = Object.create(constructor.prototype);
      for (var m in obj)
        if (hasOwn(obj, m))
          try {
            res[m] = obj[m];
          } catch (_2) {
          }
      return res;
    };
    if (this.schema.readHook) {
      this.hook.reading.unsubscribe(this.schema.readHook);
    }
    this.schema.readHook = readHook;
    this.hook("reading", readHook);
    return constructor;
  }
  defineClass() {
    function Class(content) {
      extend(this, content);
    }
    return this.mapToClass(Class);
  }
  add(obj, key) {
    const {auto, keyPath} = this.schema.primKey;
    let objToAdd = obj;
    if (keyPath && auto) {
      objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
    }
    return this._trans("readwrite", (trans) => {
      return this.core.mutate({trans, type: "add", keys: key != null ? [key] : null, values: [objToAdd]});
    }).then((res) => res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult).then((lastResult) => {
      if (keyPath) {
        try {
          setByKeyPath(obj, keyPath, lastResult);
        } catch (_2) {
        }
      }
      return lastResult;
    });
  }
  update(keyOrObject, modifications) {
    if (typeof keyOrObject === "object" && !isArray2(keyOrObject)) {
      const key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
      if (key === void 0)
        return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
      try {
        if (typeof modifications !== "function") {
          keys(modifications).forEach((keyPath) => {
            setByKeyPath(keyOrObject, keyPath, modifications[keyPath]);
          });
        } else {
          modifications(keyOrObject, {value: keyOrObject, primKey: key});
        }
      } catch (_a) {
      }
      return this.where(":id").equals(key).modify(modifications);
    } else {
      return this.where(":id").equals(keyOrObject).modify(modifications);
    }
  }
  put(obj, key) {
    const {auto, keyPath} = this.schema.primKey;
    let objToAdd = obj;
    if (keyPath && auto) {
      objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
    }
    return this._trans("readwrite", (trans) => this.core.mutate({trans, type: "put", values: [objToAdd], keys: key != null ? [key] : null})).then((res) => res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult).then((lastResult) => {
      if (keyPath) {
        try {
          setByKeyPath(obj, keyPath, lastResult);
        } catch (_2) {
        }
      }
      return lastResult;
    });
  }
  delete(key) {
    return this._trans("readwrite", (trans) => this.core.mutate({trans, type: "delete", keys: [key]})).then((res) => res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0);
  }
  clear() {
    return this._trans("readwrite", (trans) => this.core.mutate({trans, type: "deleteRange", range: AnyRange})).then((res) => res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0);
  }
  bulkGet(keys2) {
    return this._trans("readonly", (trans) => {
      return this.core.getMany({
        keys: keys2,
        trans
      }).then((result) => result.map((res) => this.hook.reading.fire(res)));
    });
  }
  bulkAdd(objects, keysOrOptions, options) {
    const keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
    options = options || (keys2 ? void 0 : keysOrOptions);
    const wantResults = options ? options.allKeys : void 0;
    return this._trans("readwrite", (trans) => {
      const {auto, keyPath} = this.schema.primKey;
      if (keyPath && keys2)
        throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
      if (keys2 && keys2.length !== objects.length)
        throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
      const numObjects = objects.length;
      let objectsToAdd = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
      return this.core.mutate({trans, type: "add", keys: keys2, values: objectsToAdd, wantResults}).then(({numFailures, results, lastResult, failures}) => {
        const result = wantResults ? results : lastResult;
        if (numFailures === 0)
          return result;
        throw new BulkError(`${this.name}.bulkAdd(): ${numFailures} of ${numObjects} operations failed`, failures);
      });
    });
  }
  bulkPut(objects, keysOrOptions, options) {
    const keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
    options = options || (keys2 ? void 0 : keysOrOptions);
    const wantResults = options ? options.allKeys : void 0;
    return this._trans("readwrite", (trans) => {
      const {auto, keyPath} = this.schema.primKey;
      if (keyPath && keys2)
        throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
      if (keys2 && keys2.length !== objects.length)
        throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
      const numObjects = objects.length;
      let objectsToPut = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
      return this.core.mutate({trans, type: "put", keys: keys2, values: objectsToPut, wantResults}).then(({numFailures, results, lastResult, failures}) => {
        const result = wantResults ? results : lastResult;
        if (numFailures === 0)
          return result;
        throw new BulkError(`${this.name}.bulkPut(): ${numFailures} of ${numObjects} operations failed`, failures);
      });
    });
  }
  bulkDelete(keys2) {
    const numKeys = keys2.length;
    return this._trans("readwrite", (trans) => {
      return this.core.mutate({trans, type: "delete", keys: keys2});
    }).then(({numFailures, lastResult, failures}) => {
      if (numFailures === 0)
        return lastResult;
      throw new BulkError(`${this.name}.bulkDelete(): ${numFailures} of ${numKeys} operations failed`, failures);
    });
  }
};
function Events(ctx) {
  var evs = {};
  var rv = function(eventName, subscriber) {
    if (subscriber) {
      var i2 = arguments.length, args = new Array(i2 - 1);
      while (--i2)
        args[i2 - 1] = arguments[i2];
      evs[eventName].subscribe.apply(null, args);
      return ctx;
    } else if (typeof eventName === "string") {
      return evs[eventName];
    }
  };
  rv.addEventType = add;
  for (var i = 1, l = arguments.length; i < l; ++i) {
    add(arguments[i]);
  }
  return rv;
  function add(eventName, chainFunction, defaultFunction) {
    if (typeof eventName === "object")
      return addConfiguredEvents(eventName);
    if (!chainFunction)
      chainFunction = reverseStoppableEventChain;
    if (!defaultFunction)
      defaultFunction = nop;
    var context = {
      subscribers: [],
      fire: defaultFunction,
      subscribe: function(cb) {
        if (context.subscribers.indexOf(cb) === -1) {
          context.subscribers.push(cb);
          context.fire = chainFunction(context.fire, cb);
        }
      },
      unsubscribe: function(cb) {
        context.subscribers = context.subscribers.filter(function(fn) {
          return fn !== cb;
        });
        context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
      }
    };
    evs[eventName] = rv[eventName] = context;
    return context;
  }
  function addConfiguredEvents(cfg2) {
    keys(cfg2).forEach(function(eventName) {
      var args = cfg2[eventName];
      if (isArray2(args)) {
        add(eventName, cfg2[eventName][0], cfg2[eventName][1]);
      } else if (args === "asap") {
        var context = add(eventName, mirror, function fire() {
          var i2 = arguments.length, args2 = new Array(i2);
          while (i2--)
            args2[i2] = arguments[i2];
          context.subscribers.forEach(function(fn) {
            asap$1(function fireEvent() {
              fn.apply(null, args2);
            });
          });
        });
      } else
        throw new exceptions.InvalidArgument("Invalid event config");
    });
  }
}
function makeClassConstructor(prototype, constructor) {
  derive(constructor).from({prototype});
  return constructor;
}
function createTableConstructor(db2) {
  return makeClassConstructor(Table.prototype, function Table2(name, tableSchema, trans) {
    this.db = db2;
    this._tx = trans;
    this.name = name;
    this.schema = tableSchema;
    this.hook = db2._allTables[name] ? db2._allTables[name].hook : Events(null, {
      creating: [hookCreatingChain, nop],
      reading: [pureFunctionChain, mirror],
      updating: [hookUpdatingChain, nop],
      deleting: [hookDeletingChain, nop]
    });
  });
}
function isPlainKeyRange(ctx, ignoreLimitFilter) {
  return !(ctx.filter || ctx.algorithm || ctx.or) && (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
}
function addFilter(ctx, fn) {
  ctx.filter = combine(ctx.filter, fn);
}
function addReplayFilter(ctx, factory, isLimitFilter) {
  var curr = ctx.replayFilter;
  ctx.replayFilter = curr ? () => combine(curr(), factory()) : factory;
  ctx.justLimit = isLimitFilter && !curr;
}
function addMatchFilter(ctx, fn) {
  ctx.isMatch = combine(ctx.isMatch, fn);
}
function getIndexOrStore(ctx, coreSchema) {
  if (ctx.isPrimKey)
    return coreSchema.primaryKey;
  const index = coreSchema.getIndexByKeyPath(ctx.index);
  if (!index)
    throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + coreSchema.name + " is not indexed");
  return index;
}
function openCursor(ctx, coreTable, trans) {
  const index = getIndexOrStore(ctx, coreTable.schema);
  return coreTable.openCursor({
    trans,
    values: !ctx.keysOnly,
    reverse: ctx.dir === "prev",
    unique: !!ctx.unique,
    query: {
      index,
      range: ctx.range
    }
  });
}
function iter(ctx, fn, coreTrans, coreTable) {
  const filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
  if (!ctx.or) {
    return iterate(openCursor(ctx, coreTable, coreTrans), combine(ctx.algorithm, filter), fn, !ctx.keysOnly && ctx.valueMapper);
  } else {
    const set = {};
    const union = (item, cursor, advance) => {
      if (!filter || filter(cursor, advance, (result) => cursor.stop(result), (err) => cursor.fail(err))) {
        var primaryKey = cursor.primaryKey;
        var key = "" + primaryKey;
        if (key === "[object ArrayBuffer]")
          key = "" + new Uint8Array(primaryKey);
        if (!hasOwn(set, key)) {
          set[key] = true;
          fn(item, cursor, advance);
        }
      }
    };
    return Promise.all([
      ctx.or._iterate(union, coreTrans),
      iterate(openCursor(ctx, coreTable, coreTrans), ctx.algorithm, union, !ctx.keysOnly && ctx.valueMapper)
    ]);
  }
}
function iterate(cursorPromise, filter, fn, valueMapper) {
  var mappedFn = valueMapper ? (x, c, a) => fn(valueMapper(x), c, a) : fn;
  var wrappedFn = wrap(mappedFn);
  return cursorPromise.then((cursor) => {
    if (cursor) {
      return cursor.start(() => {
        var c = () => cursor.continue();
        if (!filter || filter(cursor, (advancer) => c = advancer, (val) => {
          cursor.stop(val);
          c = nop;
        }, (e) => {
          cursor.fail(e);
          c = nop;
        }))
          wrappedFn(cursor.value, cursor, (advancer) => c = advancer);
        c();
      });
    }
  });
}
function cmp(a, b) {
  try {
    const ta = type(a);
    const tb = type(b);
    if (ta !== tb) {
      if (ta === "Array")
        return 1;
      if (tb === "Array")
        return -1;
      if (ta === "binary")
        return 1;
      if (tb === "binary")
        return -1;
      if (ta === "string")
        return 1;
      if (tb === "string")
        return -1;
      if (ta === "Date")
        return 1;
      if (tb !== "Date")
        return NaN;
      return -1;
    }
    switch (ta) {
      case "number":
      case "Date":
      case "string":
        return a > b ? 1 : a < b ? -1 : 0;
      case "binary": {
        return compareUint8Arrays(getUint8Array(a), getUint8Array(b));
      }
      case "Array":
        return compareArrays(a, b);
    }
  } catch (_a) {
  }
  return NaN;
}
function compareArrays(a, b) {
  const al = a.length;
  const bl = b.length;
  const l = al < bl ? al : bl;
  for (let i = 0; i < l; ++i) {
    const res = cmp(a[i], b[i]);
    if (res !== 0)
      return res;
  }
  return al === bl ? 0 : al < bl ? -1 : 1;
}
function compareUint8Arrays(a, b) {
  const al = a.length;
  const bl = b.length;
  const l = al < bl ? al : bl;
  for (let i = 0; i < l; ++i) {
    if (a[i] !== b[i])
      return a[i] < b[i] ? -1 : 1;
  }
  return al === bl ? 0 : al < bl ? -1 : 1;
}
function type(x) {
  const t = typeof x;
  if (t !== "object")
    return t;
  if (ArrayBuffer.isView(x))
    return "binary";
  const tsTag = toStringTag(x);
  return tsTag === "ArrayBuffer" ? "binary" : tsTag;
}
function getUint8Array(a) {
  if (a instanceof Uint8Array)
    return a;
  if (ArrayBuffer.isView(a))
    return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
  return new Uint8Array(a);
}
var Collection = class {
  _read(fn, cb) {
    var ctx = this._ctx;
    return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readonly", fn).then(cb);
  }
  _write(fn) {
    var ctx = this._ctx;
    return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readwrite", fn, "locked");
  }
  _addAlgorithm(fn) {
    var ctx = this._ctx;
    ctx.algorithm = combine(ctx.algorithm, fn);
  }
  _iterate(fn, coreTrans) {
    return iter(this._ctx, fn, coreTrans, this._ctx.table.core);
  }
  clone(props2) {
    var rv = Object.create(this.constructor.prototype), ctx = Object.create(this._ctx);
    if (props2)
      extend(ctx, props2);
    rv._ctx = ctx;
    return rv;
  }
  raw() {
    this._ctx.valueMapper = null;
    return this;
  }
  each(fn) {
    var ctx = this._ctx;
    return this._read((trans) => iter(ctx, fn, trans, ctx.table.core));
  }
  count(cb) {
    return this._read((trans) => {
      const ctx = this._ctx;
      const coreTable = ctx.table.core;
      if (isPlainKeyRange(ctx, true)) {
        return coreTable.count({
          trans,
          query: {
            index: getIndexOrStore(ctx, coreTable.schema),
            range: ctx.range
          }
        }).then((count2) => Math.min(count2, ctx.limit));
      } else {
        var count = 0;
        return iter(ctx, () => {
          ++count;
          return false;
        }, trans, coreTable).then(() => count);
      }
    }).then(cb);
  }
  sortBy(keyPath, cb) {
    const parts = keyPath.split(".").reverse(), lastPart = parts[0], lastIndex = parts.length - 1;
    function getval(obj, i) {
      if (i)
        return getval(obj[parts[i]], i - 1);
      return obj[lastPart];
    }
    var order = this._ctx.dir === "next" ? 1 : -1;
    function sorter(a, b) {
      var aVal = getval(a, lastIndex), bVal = getval(b, lastIndex);
      return aVal < bVal ? -order : aVal > bVal ? order : 0;
    }
    return this.toArray(function(a) {
      return a.sort(sorter);
    }).then(cb);
  }
  toArray(cb) {
    return this._read((trans) => {
      var ctx = this._ctx;
      if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
        const {valueMapper} = ctx;
        const index = getIndexOrStore(ctx, ctx.table.core.schema);
        return ctx.table.core.query({
          trans,
          limit: ctx.limit,
          values: true,
          query: {
            index,
            range: ctx.range
          }
        }).then(({result}) => valueMapper ? result.map(valueMapper) : result);
      } else {
        const a = [];
        return iter(ctx, (item) => a.push(item), trans, ctx.table.core).then(() => a);
      }
    }, cb);
  }
  offset(offset) {
    var ctx = this._ctx;
    if (offset <= 0)
      return this;
    ctx.offset += offset;
    if (isPlainKeyRange(ctx)) {
      addReplayFilter(ctx, () => {
        var offsetLeft = offset;
        return (cursor, advance) => {
          if (offsetLeft === 0)
            return true;
          if (offsetLeft === 1) {
            --offsetLeft;
            return false;
          }
          advance(() => {
            cursor.advance(offsetLeft);
            offsetLeft = 0;
          });
          return false;
        };
      });
    } else {
      addReplayFilter(ctx, () => {
        var offsetLeft = offset;
        return () => --offsetLeft < 0;
      });
    }
    return this;
  }
  limit(numRows) {
    this._ctx.limit = Math.min(this._ctx.limit, numRows);
    addReplayFilter(this._ctx, () => {
      var rowsLeft = numRows;
      return function(cursor, advance, resolve) {
        if (--rowsLeft <= 0)
          advance(resolve);
        return rowsLeft >= 0;
      };
    }, true);
    return this;
  }
  until(filterFunction, bIncludeStopEntry) {
    addFilter(this._ctx, function(cursor, advance, resolve) {
      if (filterFunction(cursor.value)) {
        advance(resolve);
        return bIncludeStopEntry;
      } else {
        return true;
      }
    });
    return this;
  }
  first(cb) {
    return this.limit(1).toArray(function(a) {
      return a[0];
    }).then(cb);
  }
  last(cb) {
    return this.reverse().first(cb);
  }
  filter(filterFunction) {
    addFilter(this._ctx, function(cursor) {
      return filterFunction(cursor.value);
    });
    addMatchFilter(this._ctx, filterFunction);
    return this;
  }
  and(filter) {
    return this.filter(filter);
  }
  or(indexName) {
    return new this.db.WhereClause(this._ctx.table, indexName, this);
  }
  reverse() {
    this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev";
    if (this._ondirectionchange)
      this._ondirectionchange(this._ctx.dir);
    return this;
  }
  desc() {
    return this.reverse();
  }
  eachKey(cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    return this.each(function(val, cursor) {
      cb(cursor.key, cursor);
    });
  }
  eachUniqueKey(cb) {
    this._ctx.unique = "unique";
    return this.eachKey(cb);
  }
  eachPrimaryKey(cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    return this.each(function(val, cursor) {
      cb(cursor.primaryKey, cursor);
    });
  }
  keys(cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    var a = [];
    return this.each(function(item, cursor) {
      a.push(cursor.key);
    }).then(function() {
      return a;
    }).then(cb);
  }
  primaryKeys(cb) {
    var ctx = this._ctx;
    if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
      return this._read((trans) => {
        var index = getIndexOrStore(ctx, ctx.table.core.schema);
        return ctx.table.core.query({
          trans,
          values: false,
          limit: ctx.limit,
          query: {
            index,
            range: ctx.range
          }
        });
      }).then(({result}) => result).then(cb);
    }
    ctx.keysOnly = !ctx.isMatch;
    var a = [];
    return this.each(function(item, cursor) {
      a.push(cursor.primaryKey);
    }).then(function() {
      return a;
    }).then(cb);
  }
  uniqueKeys(cb) {
    this._ctx.unique = "unique";
    return this.keys(cb);
  }
  firstKey(cb) {
    return this.limit(1).keys(function(a) {
      return a[0];
    }).then(cb);
  }
  lastKey(cb) {
    return this.reverse().firstKey(cb);
  }
  distinct() {
    var ctx = this._ctx, idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
    if (!idx || !idx.multi)
      return this;
    var set = {};
    addFilter(this._ctx, function(cursor) {
      var strKey = cursor.primaryKey.toString();
      var found = hasOwn(set, strKey);
      set[strKey] = true;
      return !found;
    });
    return this;
  }
  modify(changes) {
    var ctx = this._ctx;
    return this._write((trans) => {
      var modifyer;
      if (typeof changes === "function") {
        modifyer = changes;
      } else {
        var keyPaths = keys(changes);
        var numKeys = keyPaths.length;
        modifyer = function(item) {
          var anythingModified = false;
          for (var i = 0; i < numKeys; ++i) {
            var keyPath = keyPaths[i], val = changes[keyPath];
            if (getByKeyPath(item, keyPath) !== val) {
              setByKeyPath(item, keyPath, val);
              anythingModified = true;
            }
          }
          return anythingModified;
        };
      }
      const coreTable = ctx.table.core;
      const {outbound, extractKey} = coreTable.schema.primaryKey;
      const limit = this.db._options.modifyChunkSize || 200;
      const totalFailures = [];
      let successCount = 0;
      const failedKeys = [];
      const applyMutateResult = (expectedCount, res) => {
        const {failures, numFailures} = res;
        successCount += expectedCount - numFailures;
        for (let pos of keys(failures)) {
          totalFailures.push(failures[pos]);
        }
      };
      return this.clone().primaryKeys().then((keys2) => {
        const nextChunk = (offset) => {
          const count = Math.min(limit, keys2.length - offset);
          return coreTable.getMany({
            trans,
            keys: keys2.slice(offset, offset + count),
            cache: "immutable"
          }).then((values) => {
            const addValues = [];
            const putValues = [];
            const putKeys = outbound ? [] : null;
            const deleteKeys = [];
            for (let i = 0; i < count; ++i) {
              const origValue = values[i];
              const ctx2 = {
                value: deepClone(origValue),
                primKey: keys2[offset + i]
              };
              if (modifyer.call(ctx2, ctx2.value, ctx2) !== false) {
                if (ctx2.value == null) {
                  deleteKeys.push(keys2[offset + i]);
                } else if (!outbound && cmp(extractKey(origValue), extractKey(ctx2.value)) !== 0) {
                  deleteKeys.push(keys2[offset + i]);
                  addValues.push(ctx2.value);
                } else {
                  putValues.push(ctx2.value);
                  if (outbound)
                    putKeys.push(keys2[offset + i]);
                }
              }
            }
            const criteria = isPlainKeyRange(ctx) && ctx.limit === Infinity && (typeof changes !== "function" || changes === deleteCallback) && {
              index: ctx.index,
              range: ctx.range
            };
            return Promise.resolve(addValues.length > 0 && coreTable.mutate({trans, type: "add", values: addValues}).then((res) => {
              for (let pos in res.failures) {
                deleteKeys.splice(parseInt(pos), 1);
              }
              applyMutateResult(addValues.length, res);
            })).then(() => (putValues.length > 0 || criteria && typeof changes === "object") && coreTable.mutate({
              trans,
              type: "put",
              keys: putKeys,
              values: putValues,
              criteria,
              changeSpec: typeof changes !== "function" && changes
            }).then((res) => applyMutateResult(putValues.length, res))).then(() => (deleteKeys.length > 0 || criteria && changes === deleteCallback) && coreTable.mutate({
              trans,
              type: "delete",
              keys: deleteKeys,
              criteria
            }).then((res) => applyMutateResult(deleteKeys.length, res))).then(() => {
              return keys2.length > offset + count && nextChunk(offset + limit);
            });
          });
        };
        return nextChunk(0).then(() => {
          if (totalFailures.length > 0)
            throw new ModifyError("Error modifying one or more objects", totalFailures, successCount, failedKeys);
          return keys2.length;
        });
      });
    });
  }
  delete() {
    var ctx = this._ctx, range = ctx.range;
    if (isPlainKeyRange(ctx) && (ctx.isPrimKey && !hangsOnDeleteLargeKeyRange || range.type === 3)) {
      return this._write((trans) => {
        const {primaryKey} = ctx.table.core.schema;
        const coreRange = range;
        return ctx.table.core.count({trans, query: {index: primaryKey, range: coreRange}}).then((count) => {
          return ctx.table.core.mutate({trans, type: "deleteRange", range: coreRange}).then(({failures, lastResult, results, numFailures}) => {
            if (numFailures)
              throw new ModifyError("Could not delete some values", Object.keys(failures).map((pos) => failures[pos]), count - numFailures);
            return count - numFailures;
          });
        });
      });
    }
    return this.modify(deleteCallback);
  }
};
var deleteCallback = (value, ctx) => ctx.value = null;
function createCollectionConstructor(db2) {
  return makeClassConstructor(Collection.prototype, function Collection2(whereClause, keyRangeGenerator) {
    this.db = db2;
    let keyRange = AnyRange, error = null;
    if (keyRangeGenerator)
      try {
        keyRange = keyRangeGenerator();
      } catch (ex) {
        error = ex;
      }
    const whereCtx = whereClause._ctx;
    const table = whereCtx.table;
    const readingHook = table.hook.reading.fire;
    this._ctx = {
      table,
      index: whereCtx.index,
      isPrimKey: !whereCtx.index || table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name,
      range: keyRange,
      keysOnly: false,
      dir: "next",
      unique: "",
      algorithm: null,
      filter: null,
      replayFilter: null,
      justLimit: true,
      isMatch: null,
      offset: 0,
      limit: Infinity,
      error,
      or: whereCtx.or,
      valueMapper: readingHook !== mirror ? readingHook : null
    };
  });
}
function simpleCompare(a, b) {
  return a < b ? -1 : a === b ? 0 : 1;
}
function simpleCompareReverse(a, b) {
  return a > b ? -1 : a === b ? 0 : 1;
}
function fail(collectionOrWhereClause, err, T) {
  var collection = collectionOrWhereClause instanceof WhereClause ? new collectionOrWhereClause.Collection(collectionOrWhereClause) : collectionOrWhereClause;
  collection._ctx.error = T ? new T(err) : new TypeError(err);
  return collection;
}
function emptyCollection(whereClause) {
  return new whereClause.Collection(whereClause, () => rangeEqual("")).limit(0);
}
function upperFactory(dir) {
  return dir === "next" ? (s) => s.toUpperCase() : (s) => s.toLowerCase();
}
function lowerFactory(dir) {
  return dir === "next" ? (s) => s.toLowerCase() : (s) => s.toUpperCase();
}
function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp2, dir) {
  var length = Math.min(key.length, lowerNeedle.length);
  var llp = -1;
  for (var i = 0; i < length; ++i) {
    var lwrKeyChar = lowerKey[i];
    if (lwrKeyChar !== lowerNeedle[i]) {
      if (cmp2(key[i], upperNeedle[i]) < 0)
        return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
      if (cmp2(key[i], lowerNeedle[i]) < 0)
        return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
      if (llp >= 0)
        return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
      return null;
    }
    if (cmp2(key[i], lwrKeyChar) < 0)
      llp = i;
  }
  if (length < lowerNeedle.length && dir === "next")
    return key + upperNeedle.substr(key.length);
  if (length < key.length && dir === "prev")
    return key.substr(0, upperNeedle.length);
  return llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1);
}
function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
  var upper, lower, compare3, upperNeedles, lowerNeedles, direction, nextKeySuffix, needlesLen = needles.length;
  if (!needles.every((s) => typeof s === "string")) {
    return fail(whereClause, STRING_EXPECTED);
  }
  function initDirection(dir) {
    upper = upperFactory(dir);
    lower = lowerFactory(dir);
    compare3 = dir === "next" ? simpleCompare : simpleCompareReverse;
    var needleBounds = needles.map(function(needle) {
      return {lower: lower(needle), upper: upper(needle)};
    }).sort(function(a, b) {
      return compare3(a.lower, b.lower);
    });
    upperNeedles = needleBounds.map(function(nb) {
      return nb.upper;
    });
    lowerNeedles = needleBounds.map(function(nb) {
      return nb.lower;
    });
    direction = dir;
    nextKeySuffix = dir === "next" ? "" : suffix;
  }
  initDirection("next");
  var c = new whereClause.Collection(whereClause, () => createRange(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix));
  c._ondirectionchange = function(direction2) {
    initDirection(direction2);
  };
  var firstPossibleNeedle = 0;
  c._addAlgorithm(function(cursor, advance, resolve) {
    var key = cursor.key;
    if (typeof key !== "string")
      return false;
    var lowerKey = lower(key);
    if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
      return true;
    } else {
      var lowestPossibleCasing = null;
      for (var i = firstPossibleNeedle; i < needlesLen; ++i) {
        var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare3, direction);
        if (casing === null && lowestPossibleCasing === null)
          firstPossibleNeedle = i + 1;
        else if (lowestPossibleCasing === null || compare3(lowestPossibleCasing, casing) > 0) {
          lowestPossibleCasing = casing;
        }
      }
      if (lowestPossibleCasing !== null) {
        advance(function() {
          cursor.continue(lowestPossibleCasing + nextKeySuffix);
        });
      } else {
        advance(resolve);
      }
      return false;
    }
  });
  return c;
}
function createRange(lower, upper, lowerOpen, upperOpen) {
  return {
    type: 2,
    lower,
    upper,
    lowerOpen,
    upperOpen
  };
}
function rangeEqual(value) {
  return {
    type: 1,
    lower: value,
    upper: value
  };
}
var WhereClause = class {
  get Collection() {
    return this._ctx.table.db.Collection;
  }
  between(lower, upper, includeLower, includeUpper) {
    includeLower = includeLower !== false;
    includeUpper = includeUpper === true;
    try {
      if (this._cmp(lower, upper) > 0 || this._cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper))
        return emptyCollection(this);
      return new this.Collection(this, () => createRange(lower, upper, !includeLower, !includeUpper));
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
  }
  equals(value) {
    if (value == null)
      return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => rangeEqual(value));
  }
  above(value) {
    if (value == null)
      return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => createRange(value, void 0, true));
  }
  aboveOrEqual(value) {
    if (value == null)
      return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => createRange(value, void 0, false));
  }
  below(value) {
    if (value == null)
      return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => createRange(void 0, value, false, true));
  }
  belowOrEqual(value) {
    if (value == null)
      return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => createRange(void 0, value));
  }
  startsWith(str) {
    if (typeof str !== "string")
      return fail(this, STRING_EXPECTED);
    return this.between(str, str + maxString, true, true);
  }
  startsWithIgnoreCase(str) {
    if (str === "")
      return this.startsWith(str);
    return addIgnoreCaseAlgorithm(this, (x, a) => x.indexOf(a[0]) === 0, [str], maxString);
  }
  equalsIgnoreCase(str) {
    return addIgnoreCaseAlgorithm(this, (x, a) => x === a[0], [str], "");
  }
  anyOfIgnoreCase() {
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0)
      return emptyCollection(this);
    return addIgnoreCaseAlgorithm(this, (x, a) => a.indexOf(x) !== -1, set, "");
  }
  startsWithAnyOfIgnoreCase() {
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0)
      return emptyCollection(this);
    return addIgnoreCaseAlgorithm(this, (x, a) => a.some((n) => x.indexOf(n) === 0), set, maxString);
  }
  anyOf() {
    const set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    let compare3 = this._cmp;
    try {
      set.sort(compare3);
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    if (set.length === 0)
      return emptyCollection(this);
    const c = new this.Collection(this, () => createRange(set[0], set[set.length - 1]));
    c._ondirectionchange = (direction) => {
      compare3 = direction === "next" ? this._ascending : this._descending;
      set.sort(compare3);
    };
    let i = 0;
    c._addAlgorithm((cursor, advance, resolve) => {
      const key = cursor.key;
      while (compare3(key, set[i]) > 0) {
        ++i;
        if (i === set.length) {
          advance(resolve);
          return false;
        }
      }
      if (compare3(key, set[i]) === 0) {
        return true;
      } else {
        advance(() => {
          cursor.continue(set[i]);
        });
        return false;
      }
    });
    return c;
  }
  notEqual(value) {
    return this.inAnyRange([[minKey, value], [value, this.db._maxKey]], {includeLowers: false, includeUppers: false});
  }
  noneOf() {
    const set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0)
      return new this.Collection(this);
    try {
      set.sort(this._ascending);
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    const ranges = set.reduce((res, val) => res ? res.concat([[res[res.length - 1][1], val]]) : [[minKey, val]], null);
    ranges.push([set[set.length - 1], this.db._maxKey]);
    return this.inAnyRange(ranges, {includeLowers: false, includeUppers: false});
  }
  inAnyRange(ranges, options) {
    const cmp2 = this._cmp, ascending = this._ascending, descending = this._descending, min = this._min, max = this._max;
    if (ranges.length === 0)
      return emptyCollection(this);
    if (!ranges.every((range) => range[0] !== void 0 && range[1] !== void 0 && ascending(range[0], range[1]) <= 0)) {
      return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
    }
    const includeLowers = !options || options.includeLowers !== false;
    const includeUppers = options && options.includeUppers === true;
    function addRange2(ranges2, newRange) {
      let i = 0, l = ranges2.length;
      for (; i < l; ++i) {
        const range = ranges2[i];
        if (cmp2(newRange[0], range[1]) < 0 && cmp2(newRange[1], range[0]) > 0) {
          range[0] = min(range[0], newRange[0]);
          range[1] = max(range[1], newRange[1]);
          break;
        }
      }
      if (i === l)
        ranges2.push(newRange);
      return ranges2;
    }
    let sortDirection = ascending;
    function rangeSorter(a, b) {
      return sortDirection(a[0], b[0]);
    }
    let set;
    try {
      set = ranges.reduce(addRange2, []);
      set.sort(rangeSorter);
    } catch (ex) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    let rangePos = 0;
    const keyIsBeyondCurrentEntry = includeUppers ? (key) => ascending(key, set[rangePos][1]) > 0 : (key) => ascending(key, set[rangePos][1]) >= 0;
    const keyIsBeforeCurrentEntry = includeLowers ? (key) => descending(key, set[rangePos][0]) > 0 : (key) => descending(key, set[rangePos][0]) >= 0;
    function keyWithinCurrentRange(key) {
      return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
    }
    let checkKey = keyIsBeyondCurrentEntry;
    const c = new this.Collection(this, () => createRange(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers));
    c._ondirectionchange = (direction) => {
      if (direction === "next") {
        checkKey = keyIsBeyondCurrentEntry;
        sortDirection = ascending;
      } else {
        checkKey = keyIsBeforeCurrentEntry;
        sortDirection = descending;
      }
      set.sort(rangeSorter);
    };
    c._addAlgorithm((cursor, advance, resolve) => {
      var key = cursor.key;
      while (checkKey(key)) {
        ++rangePos;
        if (rangePos === set.length) {
          advance(resolve);
          return false;
        }
      }
      if (keyWithinCurrentRange(key)) {
        return true;
      } else if (this._cmp(key, set[rangePos][1]) === 0 || this._cmp(key, set[rangePos][0]) === 0) {
        return false;
      } else {
        advance(() => {
          if (sortDirection === ascending)
            cursor.continue(set[rangePos][0]);
          else
            cursor.continue(set[rangePos][1]);
        });
        return false;
      }
    });
    return c;
  }
  startsWithAnyOf() {
    const set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (!set.every((s) => typeof s === "string")) {
      return fail(this, "startsWithAnyOf() only works with strings");
    }
    if (set.length === 0)
      return emptyCollection(this);
    return this.inAnyRange(set.map((str) => [str, str + maxString]));
  }
};
function createWhereClauseConstructor(db2) {
  return makeClassConstructor(WhereClause.prototype, function WhereClause2(table, index, orCollection) {
    this.db = db2;
    this._ctx = {
      table,
      index: index === ":id" ? null : index,
      or: orCollection
    };
    const indexedDB2 = db2._deps.indexedDB;
    if (!indexedDB2)
      throw new exceptions.MissingAPI();
    this._cmp = this._ascending = indexedDB2.cmp.bind(indexedDB2);
    this._descending = (a, b) => indexedDB2.cmp(b, a);
    this._max = (a, b) => indexedDB2.cmp(a, b) > 0 ? a : b;
    this._min = (a, b) => indexedDB2.cmp(a, b) < 0 ? a : b;
    this._IDBKeyRange = db2._deps.IDBKeyRange;
  });
}
function eventRejectHandler(reject) {
  return wrap(function(event) {
    preventDefault(event);
    reject(event.target.error);
    return false;
  });
}
function preventDefault(event) {
  if (event.stopPropagation)
    event.stopPropagation();
  if (event.preventDefault)
    event.preventDefault();
}
var DEXIE_STORAGE_MUTATED_EVENT_NAME = "storagemutated";
var STORAGE_MUTATED_DOM_EVENT_NAME = "x-storagemutated-1";
var globalEvents = Events(null, DEXIE_STORAGE_MUTATED_EVENT_NAME);
var Transaction = class {
  _lock() {
    assert(!PSD.global);
    ++this._reculock;
    if (this._reculock === 1 && !PSD.global)
      PSD.lockOwnerFor = this;
    return this;
  }
  _unlock() {
    assert(!PSD.global);
    if (--this._reculock === 0) {
      if (!PSD.global)
        PSD.lockOwnerFor = null;
      while (this._blockedFuncs.length > 0 && !this._locked()) {
        var fnAndPSD = this._blockedFuncs.shift();
        try {
          usePSD(fnAndPSD[1], fnAndPSD[0]);
        } catch (e) {
        }
      }
    }
    return this;
  }
  _locked() {
    return this._reculock && PSD.lockOwnerFor !== this;
  }
  create(idbtrans) {
    if (!this.mode)
      return this;
    const idbdb = this.db.idbdb;
    const dbOpenError = this.db._state.dbOpenError;
    assert(!this.idbtrans);
    if (!idbtrans && !idbdb) {
      switch (dbOpenError && dbOpenError.name) {
        case "DatabaseClosedError":
          throw new exceptions.DatabaseClosed(dbOpenError);
        case "MissingAPIError":
          throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
        default:
          throw new exceptions.OpenFailed(dbOpenError);
      }
    }
    if (!this.active)
      throw new exceptions.TransactionInactive();
    assert(this._completion._state === null);
    idbtrans = this.idbtrans = idbtrans || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, {durability: this.chromeTransactionDurability}) : idbdb.transaction(this.storeNames, this.mode, {durability: this.chromeTransactionDurability}));
    idbtrans.onerror = wrap((ev) => {
      preventDefault(ev);
      this._reject(idbtrans.error);
    });
    idbtrans.onabort = wrap((ev) => {
      preventDefault(ev);
      this.active && this._reject(new exceptions.Abort(idbtrans.error));
      this.active = false;
      this.on("abort").fire(ev);
    });
    idbtrans.oncomplete = wrap(() => {
      this.active = false;
      this._resolve();
      if ("mutatedParts" in idbtrans) {
        globalEvents.storagemutated.fire(idbtrans["mutatedParts"]);
      }
    });
    return this;
  }
  _promise(mode, fn, bWriteLock) {
    if (mode === "readwrite" && this.mode !== "readwrite")
      return rejection(new exceptions.ReadOnly("Transaction is readonly"));
    if (!this.active)
      return rejection(new exceptions.TransactionInactive());
    if (this._locked()) {
      return new DexiePromise((resolve, reject) => {
        this._blockedFuncs.push([() => {
          this._promise(mode, fn, bWriteLock).then(resolve, reject);
        }, PSD]);
      });
    } else if (bWriteLock) {
      return newScope(() => {
        var p4 = new DexiePromise((resolve, reject) => {
          this._lock();
          const rv = fn(resolve, reject, this);
          if (rv && rv.then)
            rv.then(resolve, reject);
        });
        p4.finally(() => this._unlock());
        p4._lib = true;
        return p4;
      });
    } else {
      var p3 = new DexiePromise((resolve, reject) => {
        var rv = fn(resolve, reject, this);
        if (rv && rv.then)
          rv.then(resolve, reject);
      });
      p3._lib = true;
      return p3;
    }
  }
  _root() {
    return this.parent ? this.parent._root() : this;
  }
  waitFor(promiseLike) {
    var root = this._root();
    const promise = DexiePromise.resolve(promiseLike);
    if (root._waitingFor) {
      root._waitingFor = root._waitingFor.then(() => promise);
    } else {
      root._waitingFor = promise;
      root._waitingQueue = [];
      var store = root.idbtrans.objectStore(root.storeNames[0]);
      (function spin() {
        ++root._spinCount;
        while (root._waitingQueue.length)
          root._waitingQueue.shift()();
        if (root._waitingFor)
          store.get(-Infinity).onsuccess = spin;
      })();
    }
    var currentWaitPromise = root._waitingFor;
    return new DexiePromise((resolve, reject) => {
      promise.then((res) => root._waitingQueue.push(wrap(resolve.bind(null, res))), (err) => root._waitingQueue.push(wrap(reject.bind(null, err)))).finally(() => {
        if (root._waitingFor === currentWaitPromise) {
          root._waitingFor = null;
        }
      });
    });
  }
  abort() {
    if (this.active) {
      this.active = false;
      if (this.idbtrans)
        this.idbtrans.abort();
      this._reject(new exceptions.Abort());
    }
  }
  table(tableName) {
    const memoizedTables = this._memoizedTables || (this._memoizedTables = {});
    if (hasOwn(memoizedTables, tableName))
      return memoizedTables[tableName];
    const tableSchema = this.schema[tableName];
    if (!tableSchema) {
      throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
    }
    const transactionBoundTable = new this.db.Table(tableName, tableSchema, this);
    transactionBoundTable.core = this.db.core.table(tableName);
    memoizedTables[tableName] = transactionBoundTable;
    return transactionBoundTable;
  }
};
function createTransactionConstructor(db2) {
  return makeClassConstructor(Transaction.prototype, function Transaction2(mode, storeNames, dbschema, chromeTransactionDurability, parent) {
    this.db = db2;
    this.mode = mode;
    this.storeNames = storeNames;
    this.schema = dbschema;
    this.chromeTransactionDurability = chromeTransactionDurability;
    this.idbtrans = null;
    this.on = Events(this, "complete", "error", "abort");
    this.parent = parent || null;
    this.active = true;
    this._reculock = 0;
    this._blockedFuncs = [];
    this._resolve = null;
    this._reject = null;
    this._waitingFor = null;
    this._waitingQueue = null;
    this._spinCount = 0;
    this._completion = new DexiePromise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
    this._completion.then(() => {
      this.active = false;
      this.on.complete.fire();
    }, (e) => {
      var wasActive = this.active;
      this.active = false;
      this.on.error.fire(e);
      this.parent ? this.parent._reject(e) : wasActive && this.idbtrans && this.idbtrans.abort();
      return rejection(e);
    });
  });
}
function createIndexSpec(name, keyPath, unique, multi, auto, compound, isPrimKey) {
  return {
    name,
    keyPath,
    unique,
    multi,
    auto,
    compound,
    src: (unique && !isPrimKey ? "&" : "") + (multi ? "*" : "") + (auto ? "++" : "") + nameFromKeyPath(keyPath)
  };
}
function nameFromKeyPath(keyPath) {
  return typeof keyPath === "string" ? keyPath : keyPath ? "[" + [].join.call(keyPath, "+") + "]" : "";
}
function createTableSchema(name, primKey, indexes) {
  return {
    name,
    primKey,
    indexes,
    mappedClass: null,
    idxByName: arrayToObject(indexes, (index) => [index.name, index])
  };
}
function safariMultiStoreFix(storeNames) {
  return storeNames.length === 1 ? storeNames[0] : storeNames;
}
var getMaxKey = (IdbKeyRange) => {
  try {
    IdbKeyRange.only([[]]);
    getMaxKey = () => [[]];
    return [[]];
  } catch (e) {
    getMaxKey = () => maxString;
    return maxString;
  }
};
function getKeyExtractor(keyPath) {
  if (keyPath == null) {
    return () => void 0;
  } else if (typeof keyPath === "string") {
    return getSinglePathKeyExtractor(keyPath);
  } else {
    return (obj) => getByKeyPath(obj, keyPath);
  }
}
function getSinglePathKeyExtractor(keyPath) {
  const split = keyPath.split(".");
  if (split.length === 1) {
    return (obj) => obj[keyPath];
  } else {
    return (obj) => getByKeyPath(obj, keyPath);
  }
}
function arrayify(arrayLike) {
  return [].slice.call(arrayLike);
}
var _id_counter = 0;
function getKeyPathAlias(keyPath) {
  return keyPath == null ? ":id" : typeof keyPath === "string" ? keyPath : `[${keyPath.join("+")}]`;
}
function createDBCore(db2, IdbKeyRange, tmpTrans) {
  function extractSchema(db3, trans) {
    const tables2 = arrayify(db3.objectStoreNames);
    return {
      schema: {
        name: db3.name,
        tables: tables2.map((table) => trans.objectStore(table)).map((store) => {
          const {keyPath, autoIncrement} = store;
          const compound = isArray2(keyPath);
          const outbound = keyPath == null;
          const indexByKeyPath = {};
          const result = {
            name: store.name,
            primaryKey: {
              name: null,
              isPrimaryKey: true,
              outbound,
              compound,
              keyPath,
              autoIncrement,
              unique: true,
              extractKey: getKeyExtractor(keyPath)
            },
            indexes: arrayify(store.indexNames).map((indexName) => store.index(indexName)).map((index) => {
              const {name, unique, multiEntry, keyPath: keyPath2} = index;
              const compound2 = isArray2(keyPath2);
              const result2 = {
                name,
                compound: compound2,
                keyPath: keyPath2,
                unique,
                multiEntry,
                extractKey: getKeyExtractor(keyPath2)
              };
              indexByKeyPath[getKeyPathAlias(keyPath2)] = result2;
              return result2;
            }),
            getIndexByKeyPath: (keyPath2) => indexByKeyPath[getKeyPathAlias(keyPath2)]
          };
          indexByKeyPath[":id"] = result.primaryKey;
          if (keyPath != null) {
            indexByKeyPath[getKeyPathAlias(keyPath)] = result.primaryKey;
          }
          return result;
        })
      },
      hasGetAll: tables2.length > 0 && "getAll" in trans.objectStore(tables2[0]) && !(typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
    };
  }
  function makeIDBKeyRange(range) {
    if (range.type === 3)
      return null;
    if (range.type === 4)
      throw new Error("Cannot convert never type to IDBKeyRange");
    const {lower, upper, lowerOpen, upperOpen} = range;
    const idbRange = lower === void 0 ? upper === void 0 ? null : IdbKeyRange.upperBound(upper, !!upperOpen) : upper === void 0 ? IdbKeyRange.lowerBound(lower, !!lowerOpen) : IdbKeyRange.bound(lower, upper, !!lowerOpen, !!upperOpen);
    return idbRange;
  }
  function createDbCoreTable(tableSchema) {
    const tableName = tableSchema.name;
    function mutate({trans, type: type2, keys: keys2, values, range}) {
      return new Promise((resolve, reject) => {
        resolve = wrap(resolve);
        const store = trans.objectStore(tableName);
        const outbound = store.keyPath == null;
        const isAddOrPut = type2 === "put" || type2 === "add";
        if (!isAddOrPut && type2 !== "delete" && type2 !== "deleteRange")
          throw new Error("Invalid operation type: " + type2);
        const {length} = keys2 || values || {length: 1};
        if (keys2 && values && keys2.length !== values.length) {
          throw new Error("Given keys array must have same length as given values array.");
        }
        if (length === 0)
          return resolve({numFailures: 0, failures: {}, results: [], lastResult: void 0});
        let req;
        const reqs = [];
        const failures = [];
        let numFailures = 0;
        const errorHandler = (event) => {
          ++numFailures;
          preventDefault(event);
        };
        if (type2 === "deleteRange") {
          if (range.type === 4)
            return resolve({numFailures, failures, results: [], lastResult: void 0});
          if (range.type === 3)
            reqs.push(req = store.clear());
          else
            reqs.push(req = store.delete(makeIDBKeyRange(range)));
        } else {
          const [args1, args2] = isAddOrPut ? outbound ? [values, keys2] : [values, null] : [keys2, null];
          if (isAddOrPut) {
            for (let i = 0; i < length; ++i) {
              reqs.push(req = args2 && args2[i] !== void 0 ? store[type2](args1[i], args2[i]) : store[type2](args1[i]));
              req.onerror = errorHandler;
            }
          } else {
            for (let i = 0; i < length; ++i) {
              reqs.push(req = store[type2](args1[i]));
              req.onerror = errorHandler;
            }
          }
        }
        const done = (event) => {
          const lastResult = event.target.result;
          reqs.forEach((req2, i) => req2.error != null && (failures[i] = req2.error));
          resolve({
            numFailures,
            failures,
            results: type2 === "delete" ? keys2 : reqs.map((req2) => req2.result),
            lastResult
          });
        };
        req.onerror = (event) => {
          errorHandler(event);
          done(event);
        };
        req.onsuccess = done;
      });
    }
    function openCursor2({trans, values, query: query2, reverse, unique}) {
      return new Promise((resolve, reject) => {
        resolve = wrap(resolve);
        const {index, range} = query2;
        const store = trans.objectStore(tableName);
        const source = index.isPrimaryKey ? store : store.index(index.name);
        const direction = reverse ? unique ? "prevunique" : "prev" : unique ? "nextunique" : "next";
        const req = values || !("openKeyCursor" in source) ? source.openCursor(makeIDBKeyRange(range), direction) : source.openKeyCursor(makeIDBKeyRange(range), direction);
        req.onerror = eventRejectHandler(reject);
        req.onsuccess = wrap((ev) => {
          const cursor = req.result;
          if (!cursor) {
            resolve(null);
            return;
          }
          cursor.___id = ++_id_counter;
          cursor.done = false;
          const _cursorContinue = cursor.continue.bind(cursor);
          let _cursorContinuePrimaryKey = cursor.continuePrimaryKey;
          if (_cursorContinuePrimaryKey)
            _cursorContinuePrimaryKey = _cursorContinuePrimaryKey.bind(cursor);
          const _cursorAdvance = cursor.advance.bind(cursor);
          const doThrowCursorIsNotStarted = () => {
            throw new Error("Cursor not started");
          };
          const doThrowCursorIsStopped = () => {
            throw new Error("Cursor not stopped");
          };
          cursor.trans = trans;
          cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsNotStarted;
          cursor.fail = wrap(reject);
          cursor.next = function() {
            let gotOne = 1;
            return this.start(() => gotOne-- ? this.continue() : this.stop()).then(() => this);
          };
          cursor.start = (callback) => {
            const iterationPromise = new Promise((resolveIteration, rejectIteration) => {
              resolveIteration = wrap(resolveIteration);
              req.onerror = eventRejectHandler(rejectIteration);
              cursor.fail = rejectIteration;
              cursor.stop = (value) => {
                cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsStopped;
                resolveIteration(value);
              };
            });
            const guardedCallback = () => {
              if (req.result) {
                try {
                  callback();
                } catch (err) {
                  cursor.fail(err);
                }
              } else {
                cursor.done = true;
                cursor.start = () => {
                  throw new Error("Cursor behind last entry");
                };
                cursor.stop();
              }
            };
            req.onsuccess = wrap((ev2) => {
              req.onsuccess = guardedCallback;
              guardedCallback();
            });
            cursor.continue = _cursorContinue;
            cursor.continuePrimaryKey = _cursorContinuePrimaryKey;
            cursor.advance = _cursorAdvance;
            guardedCallback();
            return iterationPromise;
          };
          resolve(cursor);
        }, reject);
      });
    }
    function query(hasGetAll2) {
      return (request) => {
        return new Promise((resolve, reject) => {
          resolve = wrap(resolve);
          const {trans, values, limit, query: query2} = request;
          const nonInfinitLimit = limit === Infinity ? void 0 : limit;
          const {index, range} = query2;
          const store = trans.objectStore(tableName);
          const source = index.isPrimaryKey ? store : store.index(index.name);
          const idbKeyRange = makeIDBKeyRange(range);
          if (limit === 0)
            return resolve({result: []});
          if (hasGetAll2) {
            const req = values ? source.getAll(idbKeyRange, nonInfinitLimit) : source.getAllKeys(idbKeyRange, nonInfinitLimit);
            req.onsuccess = (event) => resolve({result: event.target.result});
            req.onerror = eventRejectHandler(reject);
          } else {
            let count = 0;
            const req = values || !("openKeyCursor" in source) ? source.openCursor(idbKeyRange) : source.openKeyCursor(idbKeyRange);
            const result = [];
            req.onsuccess = (event) => {
              const cursor = req.result;
              if (!cursor)
                return resolve({result});
              result.push(values ? cursor.value : cursor.primaryKey);
              if (++count === limit)
                return resolve({result});
              cursor.continue();
            };
            req.onerror = eventRejectHandler(reject);
          }
        });
      };
    }
    return {
      name: tableName,
      schema: tableSchema,
      mutate,
      getMany({trans, keys: keys2}) {
        return new Promise((resolve, reject) => {
          resolve = wrap(resolve);
          const store = trans.objectStore(tableName);
          const length = keys2.length;
          const result = new Array(length);
          let keyCount = 0;
          let callbackCount = 0;
          let req;
          const successHandler = (event) => {
            const req2 = event.target;
            if ((result[req2._pos] = req2.result) != null)
              ;
            if (++callbackCount === keyCount)
              resolve(result);
          };
          const errorHandler = eventRejectHandler(reject);
          for (let i = 0; i < length; ++i) {
            const key = keys2[i];
            if (key != null) {
              req = store.get(keys2[i]);
              req._pos = i;
              req.onsuccess = successHandler;
              req.onerror = errorHandler;
              ++keyCount;
            }
          }
          if (keyCount === 0)
            resolve(result);
        });
      },
      get({trans, key}) {
        return new Promise((resolve, reject) => {
          resolve = wrap(resolve);
          const store = trans.objectStore(tableName);
          const req = store.get(key);
          req.onsuccess = (event) => resolve(event.target.result);
          req.onerror = eventRejectHandler(reject);
        });
      },
      query: query(hasGetAll),
      openCursor: openCursor2,
      count({query: query2, trans}) {
        const {index, range} = query2;
        return new Promise((resolve, reject) => {
          const store = trans.objectStore(tableName);
          const source = index.isPrimaryKey ? store : store.index(index.name);
          const idbKeyRange = makeIDBKeyRange(range);
          const req = idbKeyRange ? source.count(idbKeyRange) : source.count();
          req.onsuccess = wrap((ev) => resolve(ev.target.result));
          req.onerror = eventRejectHandler(reject);
        });
      }
    };
  }
  const {schema, hasGetAll} = extractSchema(db2, tmpTrans);
  const tables = schema.tables.map((tableSchema) => createDbCoreTable(tableSchema));
  const tableMap = {};
  tables.forEach((table) => tableMap[table.name] = table);
  return {
    stack: "dbcore",
    transaction: db2.transaction.bind(db2),
    table(name) {
      const result = tableMap[name];
      if (!result)
        throw new Error(`Table '${name}' not found`);
      return tableMap[name];
    },
    MIN_KEY: -Infinity,
    MAX_KEY: getMaxKey(IdbKeyRange),
    schema
  };
}
function createMiddlewareStack(stackImpl, middlewares) {
  return middlewares.reduce((down, {create}) => __assign(__assign({}, down), create(down)), stackImpl);
}
function createMiddlewareStacks(middlewares, idbdb, {IDBKeyRange, indexedDB: indexedDB2}, tmpTrans) {
  const dbcore = createMiddlewareStack(createDBCore(idbdb, IDBKeyRange, tmpTrans), middlewares.dbcore);
  return {
    dbcore
  };
}
function generateMiddlewareStacks({_novip: db2}, tmpTrans) {
  const idbdb = tmpTrans.db;
  const stacks = createMiddlewareStacks(db2._middlewares, idbdb, db2._deps, tmpTrans);
  db2.core = stacks.dbcore;
  db2.tables.forEach((table) => {
    const tableName = table.name;
    if (db2.core.schema.tables.some((tbl) => tbl.name === tableName)) {
      table.core = db2.core.table(tableName);
      if (db2[tableName] instanceof db2.Table) {
        db2[tableName].core = table.core;
      }
    }
  });
}
function setApiOnPlace({_novip: db2}, objs, tableNames, dbschema) {
  tableNames.forEach((tableName) => {
    const schema = dbschema[tableName];
    objs.forEach((obj) => {
      const propDesc = getPropertyDescriptor(obj, tableName);
      if (!propDesc || "value" in propDesc && propDesc.value === void 0) {
        if (obj === db2.Transaction.prototype || obj instanceof db2.Transaction) {
          setProp(obj, tableName, {
            get() {
              return this.table(tableName);
            },
            set(value) {
              defineProperty(this, tableName, {value, writable: true, configurable: true, enumerable: true});
            }
          });
        } else {
          obj[tableName] = new db2.Table(tableName, schema);
        }
      }
    });
  });
}
function removeTablesApi({_novip: db2}, objs) {
  objs.forEach((obj) => {
    for (let key in obj) {
      if (obj[key] instanceof db2.Table)
        delete obj[key];
    }
  });
}
function lowerVersionFirst(a, b) {
  return a._cfg.version - b._cfg.version;
}
function runUpgraders(db2, oldVersion, idbUpgradeTrans, reject) {
  const globalSchema = db2._dbSchema;
  const trans = db2._createTransaction("readwrite", db2._storeNames, globalSchema);
  trans.create(idbUpgradeTrans);
  trans._completion.catch(reject);
  const rejectTransaction = trans._reject.bind(trans);
  const transless = PSD.transless || PSD;
  newScope(() => {
    PSD.trans = trans;
    PSD.transless = transless;
    if (oldVersion === 0) {
      keys(globalSchema).forEach((tableName) => {
        createTable(idbUpgradeTrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
      });
      generateMiddlewareStacks(db2, idbUpgradeTrans);
      DexiePromise.follow(() => db2.on.populate.fire(trans)).catch(rejectTransaction);
    } else
      updateTablesAndIndexes(db2, oldVersion, trans, idbUpgradeTrans).catch(rejectTransaction);
  });
}
function updateTablesAndIndexes({_novip: db2}, oldVersion, trans, idbUpgradeTrans) {
  const queue = [];
  const versions = db2._versions;
  let globalSchema = db2._dbSchema = buildGlobalSchema(db2, db2.idbdb, idbUpgradeTrans);
  let anyContentUpgraderHasRun = false;
  const versToRun = versions.filter((v) => v._cfg.version >= oldVersion);
  versToRun.forEach((version2) => {
    queue.push(() => {
      const oldSchema = globalSchema;
      const newSchema = version2._cfg.dbschema;
      adjustToExistingIndexNames(db2, oldSchema, idbUpgradeTrans);
      adjustToExistingIndexNames(db2, newSchema, idbUpgradeTrans);
      globalSchema = db2._dbSchema = newSchema;
      const diff = getSchemaDiff(oldSchema, newSchema);
      diff.add.forEach((tuple) => {
        createTable(idbUpgradeTrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
      });
      diff.change.forEach((change) => {
        if (change.recreate) {
          throw new exceptions.Upgrade("Not yet support for changing primary key");
        } else {
          const store = idbUpgradeTrans.objectStore(change.name);
          change.add.forEach((idx) => addIndex(store, idx));
          change.change.forEach((idx) => {
            store.deleteIndex(idx.name);
            addIndex(store, idx);
          });
          change.del.forEach((idxName) => store.deleteIndex(idxName));
        }
      });
      const contentUpgrade = version2._cfg.contentUpgrade;
      if (contentUpgrade && version2._cfg.version > oldVersion) {
        generateMiddlewareStacks(db2, idbUpgradeTrans);
        trans._memoizedTables = {};
        anyContentUpgraderHasRun = true;
        let upgradeSchema = shallowClone(newSchema);
        diff.del.forEach((table) => {
          upgradeSchema[table] = oldSchema[table];
        });
        removeTablesApi(db2, [db2.Transaction.prototype]);
        setApiOnPlace(db2, [db2.Transaction.prototype], keys(upgradeSchema), upgradeSchema);
        trans.schema = upgradeSchema;
        const contentUpgradeIsAsync = isAsyncFunction(contentUpgrade);
        if (contentUpgradeIsAsync) {
          incrementExpectedAwaits();
        }
        let returnValue;
        const promiseFollowed = DexiePromise.follow(() => {
          returnValue = contentUpgrade(trans);
          if (returnValue) {
            if (contentUpgradeIsAsync) {
              var decrementor = decrementExpectedAwaits.bind(null, null);
              returnValue.then(decrementor, decrementor);
            }
          }
        });
        return returnValue && typeof returnValue.then === "function" ? DexiePromise.resolve(returnValue) : promiseFollowed.then(() => returnValue);
      }
    });
    queue.push((idbtrans) => {
      if (!anyContentUpgraderHasRun || !hasIEDeleteObjectStoreBug) {
        const newSchema = version2._cfg.dbschema;
        deleteRemovedTables(newSchema, idbtrans);
      }
      removeTablesApi(db2, [db2.Transaction.prototype]);
      setApiOnPlace(db2, [db2.Transaction.prototype], db2._storeNames, db2._dbSchema);
      trans.schema = db2._dbSchema;
    });
  });
  function runQueue() {
    return queue.length ? DexiePromise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) : DexiePromise.resolve();
  }
  return runQueue().then(() => {
    createMissingTables(globalSchema, idbUpgradeTrans);
  });
}
function getSchemaDiff(oldSchema, newSchema) {
  const diff = {
    del: [],
    add: [],
    change: []
  };
  let table;
  for (table in oldSchema) {
    if (!newSchema[table])
      diff.del.push(table);
  }
  for (table in newSchema) {
    const oldDef = oldSchema[table], newDef = newSchema[table];
    if (!oldDef) {
      diff.add.push([table, newDef]);
    } else {
      const change = {
        name: table,
        def: newDef,
        recreate: false,
        del: [],
        add: [],
        change: []
      };
      if ("" + (oldDef.primKey.keyPath || "") !== "" + (newDef.primKey.keyPath || "") || oldDef.primKey.auto !== newDef.primKey.auto && !isIEOrEdge) {
        change.recreate = true;
        diff.change.push(change);
      } else {
        const oldIndexes = oldDef.idxByName;
        const newIndexes = newDef.idxByName;
        let idxName;
        for (idxName in oldIndexes) {
          if (!newIndexes[idxName])
            change.del.push(idxName);
        }
        for (idxName in newIndexes) {
          const oldIdx = oldIndexes[idxName], newIdx = newIndexes[idxName];
          if (!oldIdx)
            change.add.push(newIdx);
          else if (oldIdx.src !== newIdx.src)
            change.change.push(newIdx);
        }
        if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
          diff.change.push(change);
        }
      }
    }
  }
  return diff;
}
function createTable(idbtrans, tableName, primKey, indexes) {
  const store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? {keyPath: primKey.keyPath, autoIncrement: primKey.auto} : {autoIncrement: primKey.auto});
  indexes.forEach((idx) => addIndex(store, idx));
  return store;
}
function createMissingTables(newSchema, idbtrans) {
  keys(newSchema).forEach((tableName) => {
    if (!idbtrans.db.objectStoreNames.contains(tableName)) {
      createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
    }
  });
}
function deleteRemovedTables(newSchema, idbtrans) {
  [].slice.call(idbtrans.db.objectStoreNames).forEach((storeName) => newSchema[storeName] == null && idbtrans.db.deleteObjectStore(storeName));
}
function addIndex(store, idx) {
  store.createIndex(idx.name, idx.keyPath, {unique: idx.unique, multiEntry: idx.multi});
}
function buildGlobalSchema(db2, idbdb, tmpTrans) {
  const globalSchema = {};
  const dbStoreNames = slice2(idbdb.objectStoreNames, 0);
  dbStoreNames.forEach((storeName) => {
    const store = tmpTrans.objectStore(storeName);
    let keyPath = store.keyPath;
    const primKey = createIndexSpec(nameFromKeyPath(keyPath), keyPath || "", false, false, !!store.autoIncrement, keyPath && typeof keyPath !== "string", true);
    const indexes = [];
    for (let j = 0; j < store.indexNames.length; ++j) {
      const idbindex = store.index(store.indexNames[j]);
      keyPath = idbindex.keyPath;
      var index = createIndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== "string", false);
      indexes.push(index);
    }
    globalSchema[storeName] = createTableSchema(storeName, primKey, indexes);
  });
  return globalSchema;
}
function readGlobalSchema({_novip: db2}, idbdb, tmpTrans) {
  db2.verno = idbdb.version / 10;
  const globalSchema = db2._dbSchema = buildGlobalSchema(db2, idbdb, tmpTrans);
  db2._storeNames = slice2(idbdb.objectStoreNames, 0);
  setApiOnPlace(db2, [db2._allTables], keys(globalSchema), globalSchema);
}
function verifyInstalledSchema(db2, tmpTrans) {
  const installedSchema = buildGlobalSchema(db2, db2.idbdb, tmpTrans);
  const diff = getSchemaDiff(installedSchema, db2._dbSchema);
  return !(diff.add.length || diff.change.some((ch) => ch.add.length || ch.change.length));
}
function adjustToExistingIndexNames({_novip: db2}, schema, idbtrans) {
  const storeNames = idbtrans.db.objectStoreNames;
  for (let i = 0; i < storeNames.length; ++i) {
    const storeName = storeNames[i];
    const store = idbtrans.objectStore(storeName);
    db2._hasGetAll = "getAll" in store;
    for (let j = 0; j < store.indexNames.length; ++j) {
      const indexName = store.indexNames[j];
      const keyPath = store.index(indexName).keyPath;
      const dexieName = typeof keyPath === "string" ? keyPath : "[" + slice2(keyPath).join("+") + "]";
      if (schema[storeName]) {
        const indexSpec = schema[storeName].idxByName[dexieName];
        if (indexSpec) {
          indexSpec.name = indexName;
          delete schema[storeName].idxByName[dexieName];
          schema[storeName].idxByName[indexName] = indexSpec;
        }
      }
    }
  }
  if (typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
    db2._hasGetAll = false;
  }
}
function parseIndexSyntax(primKeyAndIndexes) {
  return primKeyAndIndexes.split(",").map((index, indexNum) => {
    index = index.trim();
    const name = index.replace(/([&*]|\+\+)/g, "");
    const keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split("+") : name;
    return createIndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray2(keyPath), indexNum === 0);
  });
}
var Version = class {
  _parseStoresSpec(stores, outSchema) {
    keys(stores).forEach((tableName) => {
      if (stores[tableName] !== null) {
        var indexes = parseIndexSyntax(stores[tableName]);
        var primKey = indexes.shift();
        if (primKey.multi)
          throw new exceptions.Schema("Primary key cannot be multi-valued");
        indexes.forEach((idx) => {
          if (idx.auto)
            throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
          if (!idx.keyPath)
            throw new exceptions.Schema("Index must have a name and cannot be an empty string");
        });
        outSchema[tableName] = createTableSchema(tableName, primKey, indexes);
      }
    });
  }
  stores(stores) {
    const db2 = this.db;
    this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;
    const versions = db2._versions;
    const storesSpec = {};
    let dbschema = {};
    versions.forEach((version2) => {
      extend(storesSpec, version2._cfg.storesSource);
      dbschema = version2._cfg.dbschema = {};
      version2._parseStoresSpec(storesSpec, dbschema);
    });
    db2._dbSchema = dbschema;
    removeTablesApi(db2, [db2._allTables, db2, db2.Transaction.prototype]);
    setApiOnPlace(db2, [db2._allTables, db2, db2.Transaction.prototype, this._cfg.tables], keys(dbschema), dbschema);
    db2._storeNames = keys(dbschema);
    return this;
  }
  upgrade(upgradeFunction) {
    this._cfg.contentUpgrade = promisableChain(this._cfg.contentUpgrade || nop, upgradeFunction);
    return this;
  }
};
function createVersionConstructor(db2) {
  return makeClassConstructor(Version.prototype, function Version2(versionNumber) {
    this.db = db2;
    this._cfg = {
      version: versionNumber,
      storesSource: null,
      dbschema: {},
      tables: {},
      contentUpgrade: null
    };
  });
}
function getDbNamesTable(indexedDB2, IDBKeyRange) {
  let dbNamesDB = indexedDB2["_dbNamesDB"];
  if (!dbNamesDB) {
    dbNamesDB = indexedDB2["_dbNamesDB"] = new Dexie$1(DBNAMES_DB, {
      addons: [],
      indexedDB: indexedDB2,
      IDBKeyRange
    });
    dbNamesDB.version(1).stores({dbnames: "name"});
  }
  return dbNamesDB.table("dbnames");
}
function hasDatabasesNative(indexedDB2) {
  return indexedDB2 && typeof indexedDB2.databases === "function";
}
function getDatabaseNames({indexedDB: indexedDB2, IDBKeyRange}) {
  return hasDatabasesNative(indexedDB2) ? Promise.resolve(indexedDB2.databases()).then((infos) => infos.map((info) => info.name).filter((name) => name !== DBNAMES_DB)) : getDbNamesTable(indexedDB2, IDBKeyRange).toCollection().primaryKeys();
}
function _onDatabaseCreated({indexedDB: indexedDB2, IDBKeyRange}, name) {
  !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).put({name}).catch(nop);
}
function _onDatabaseDeleted({indexedDB: indexedDB2, IDBKeyRange}, name) {
  !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).delete(name).catch(nop);
}
function vip(fn) {
  return newScope(function() {
    PSD.letThrough = true;
    return fn();
  });
}
function idbReady() {
  var isSafari2 = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
  if (!isSafari2 || !indexedDB.databases)
    return Promise.resolve();
  var intervalId;
  return new Promise(function(resolve) {
    var tryIdb = function() {
      return indexedDB.databases().finally(resolve);
    };
    intervalId = setInterval(tryIdb, 100);
    tryIdb();
  }).finally(function() {
    return clearInterval(intervalId);
  });
}
function dexieOpen(db2) {
  const state2 = db2._state;
  const {indexedDB: indexedDB2} = db2._deps;
  if (state2.isBeingOpened || db2.idbdb)
    return state2.dbReadyPromise.then(() => state2.dbOpenError ? rejection(state2.dbOpenError) : db2);
  debug && (state2.openCanceller._stackHolder = getErrorWithStack());
  state2.isBeingOpened = true;
  state2.dbOpenError = null;
  state2.openComplete = false;
  const openCanceller = state2.openCanceller;
  function throwIfCancelled() {
    if (state2.openCanceller !== openCanceller)
      throw new exceptions.DatabaseClosed("db.open() was cancelled");
  }
  let resolveDbReady = state2.dbReadyResolve, upgradeTransaction = null, wasCreated = false;
  return DexiePromise.race([openCanceller, (typeof navigator === "undefined" ? DexiePromise.resolve() : idbReady()).then(() => new DexiePromise((resolve, reject) => {
    throwIfCancelled();
    if (!indexedDB2)
      throw new exceptions.MissingAPI();
    const dbName = db2.name;
    const req = state2.autoSchema ? indexedDB2.open(dbName) : indexedDB2.open(dbName, Math.round(db2.verno * 10));
    if (!req)
      throw new exceptions.MissingAPI();
    req.onerror = eventRejectHandler(reject);
    req.onblocked = wrap(db2._fireOnBlocked);
    req.onupgradeneeded = wrap((e) => {
      upgradeTransaction = req.transaction;
      if (state2.autoSchema && !db2._options.allowEmptyDB) {
        req.onerror = preventDefault;
        upgradeTransaction.abort();
        req.result.close();
        const delreq = indexedDB2.deleteDatabase(dbName);
        delreq.onsuccess = delreq.onerror = wrap(() => {
          reject(new exceptions.NoSuchDatabase(`Database ${dbName} doesnt exist`));
        });
      } else {
        upgradeTransaction.onerror = eventRejectHandler(reject);
        var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion;
        wasCreated = oldVer < 1;
        db2._novip.idbdb = req.result;
        runUpgraders(db2, oldVer / 10, upgradeTransaction, reject);
      }
    }, reject);
    req.onsuccess = wrap(() => {
      upgradeTransaction = null;
      const idbdb = db2._novip.idbdb = req.result;
      const objectStoreNames = slice2(idbdb.objectStoreNames);
      if (objectStoreNames.length > 0)
        try {
          const tmpTrans = idbdb.transaction(safariMultiStoreFix(objectStoreNames), "readonly");
          if (state2.autoSchema)
            readGlobalSchema(db2, idbdb, tmpTrans);
          else {
            adjustToExistingIndexNames(db2, db2._dbSchema, tmpTrans);
            if (!verifyInstalledSchema(db2, tmpTrans)) {
              console.warn(`Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.`);
            }
          }
          generateMiddlewareStacks(db2, tmpTrans);
        } catch (e) {
        }
      connections.push(db2);
      idbdb.onversionchange = wrap((ev) => {
        state2.vcFired = true;
        db2.on("versionchange").fire(ev);
      });
      idbdb.onclose = wrap((ev) => {
        db2.on("close").fire(ev);
      });
      if (wasCreated)
        _onDatabaseCreated(db2._deps, dbName);
      resolve();
    }, reject);
  }))]).then(() => {
    throwIfCancelled();
    state2.onReadyBeingFired = [];
    return DexiePromise.resolve(vip(() => db2.on.ready.fire(db2.vip))).then(function fireRemainders() {
      if (state2.onReadyBeingFired.length > 0) {
        let remainders = state2.onReadyBeingFired.reduce(promisableChain, nop);
        state2.onReadyBeingFired = [];
        return DexiePromise.resolve(vip(() => remainders(db2.vip))).then(fireRemainders);
      }
    });
  }).finally(() => {
    state2.onReadyBeingFired = null;
    state2.isBeingOpened = false;
  }).then(() => {
    return db2;
  }).catch((err) => {
    state2.dbOpenError = err;
    try {
      upgradeTransaction && upgradeTransaction.abort();
    } catch (_a) {
    }
    if (openCanceller === state2.openCanceller) {
      db2._close();
    }
    return rejection(err);
  }).finally(() => {
    state2.openComplete = true;
    resolveDbReady();
  });
}
function awaitIterator(iterator) {
  var callNext = (result) => iterator.next(result), doThrow = (error) => iterator.throw(error), onSuccess = step(callNext), onError = step(doThrow);
  function step(getNext) {
    return (val) => {
      var next = getNext(val), value = next.value;
      return next.done ? value : !value || typeof value.then !== "function" ? isArray2(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) : value.then(onSuccess, onError);
    };
  }
  return step(callNext)();
}
function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
  var i = arguments.length;
  if (i < 2)
    throw new exceptions.InvalidArgument("Too few arguments");
  var args = new Array(i - 1);
  while (--i)
    args[i - 1] = arguments[i];
  scopeFunc = args.pop();
  var tables = flatten(args);
  return [mode, tables, scopeFunc];
}
function enterTransactionScope(db2, mode, storeNames, parentTransaction, scopeFunc) {
  return DexiePromise.resolve().then(() => {
    const transless = PSD.transless || PSD;
    const trans = db2._createTransaction(mode, storeNames, db2._dbSchema, parentTransaction);
    const zoneProps = {
      trans,
      transless
    };
    if (parentTransaction) {
      trans.idbtrans = parentTransaction.idbtrans;
    } else {
      try {
        trans.create();
        db2._state.PR1398_maxLoop = 3;
      } catch (ex) {
        if (ex.name === errnames.InvalidState && db2.isOpen() && --db2._state.PR1398_maxLoop > 0) {
          console.warn("Dexie: Need to reopen db");
          db2._close();
          return db2.open().then(() => enterTransactionScope(db2, mode, storeNames, null, scopeFunc));
        }
        return rejection(ex);
      }
    }
    const scopeFuncIsAsync = isAsyncFunction(scopeFunc);
    if (scopeFuncIsAsync) {
      incrementExpectedAwaits();
    }
    let returnValue;
    const promiseFollowed = DexiePromise.follow(() => {
      returnValue = scopeFunc.call(trans, trans);
      if (returnValue) {
        if (scopeFuncIsAsync) {
          var decrementor = decrementExpectedAwaits.bind(null, null);
          returnValue.then(decrementor, decrementor);
        } else if (typeof returnValue.next === "function" && typeof returnValue.throw === "function") {
          returnValue = awaitIterator(returnValue);
        }
      }
    }, zoneProps);
    return (returnValue && typeof returnValue.then === "function" ? DexiePromise.resolve(returnValue).then((x) => trans.active ? x : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))) : promiseFollowed.then(() => returnValue)).then((x) => {
      if (parentTransaction)
        trans._resolve();
      return trans._completion.then(() => x);
    }).catch((e) => {
      trans._reject(e);
      return rejection(e);
    });
  });
}
function pad(a, value, count) {
  const result = isArray2(a) ? a.slice() : [a];
  for (let i = 0; i < count; ++i)
    result.push(value);
  return result;
}
function createVirtualIndexMiddleware(down) {
  return __assign(__assign({}, down), {
    table(tableName) {
      const table = down.table(tableName);
      const {schema} = table;
      const indexLookup = {};
      const allVirtualIndexes = [];
      function addVirtualIndexes(keyPath, keyTail, lowLevelIndex) {
        const keyPathAlias = getKeyPathAlias(keyPath);
        const indexList = indexLookup[keyPathAlias] = indexLookup[keyPathAlias] || [];
        const keyLength = keyPath == null ? 0 : typeof keyPath === "string" ? 1 : keyPath.length;
        const isVirtual = keyTail > 0;
        const virtualIndex = __assign(__assign({}, lowLevelIndex), {
          isVirtual,
          keyTail,
          keyLength,
          extractKey: getKeyExtractor(keyPath),
          unique: !isVirtual && lowLevelIndex.unique
        });
        indexList.push(virtualIndex);
        if (!virtualIndex.isPrimaryKey) {
          allVirtualIndexes.push(virtualIndex);
        }
        if (keyLength > 1) {
          const virtualKeyPath = keyLength === 2 ? keyPath[0] : keyPath.slice(0, keyLength - 1);
          addVirtualIndexes(virtualKeyPath, keyTail + 1, lowLevelIndex);
        }
        indexList.sort((a, b) => a.keyTail - b.keyTail);
        return virtualIndex;
      }
      const primaryKey = addVirtualIndexes(schema.primaryKey.keyPath, 0, schema.primaryKey);
      indexLookup[":id"] = [primaryKey];
      for (const index of schema.indexes) {
        addVirtualIndexes(index.keyPath, 0, index);
      }
      function findBestIndex(keyPath) {
        const result2 = indexLookup[getKeyPathAlias(keyPath)];
        return result2 && result2[0];
      }
      function translateRange(range, keyTail) {
        return {
          type: range.type === 1 ? 2 : range.type,
          lower: pad(range.lower, range.lowerOpen ? down.MAX_KEY : down.MIN_KEY, keyTail),
          lowerOpen: true,
          upper: pad(range.upper, range.upperOpen ? down.MIN_KEY : down.MAX_KEY, keyTail),
          upperOpen: true
        };
      }
      function translateRequest(req) {
        const index = req.query.index;
        return index.isVirtual ? __assign(__assign({}, req), {
          query: {
            index,
            range: translateRange(req.query.range, index.keyTail)
          }
        }) : req;
      }
      const result = __assign(__assign({}, table), {
        schema: __assign(__assign({}, schema), {
          primaryKey,
          indexes: allVirtualIndexes,
          getIndexByKeyPath: findBestIndex
        }),
        count(req) {
          return table.count(translateRequest(req));
        },
        query(req) {
          return table.query(translateRequest(req));
        },
        openCursor(req) {
          const {keyTail, isVirtual, keyLength} = req.query.index;
          if (!isVirtual)
            return table.openCursor(req);
          function createVirtualCursor(cursor) {
            function _continue(key) {
              key != null ? cursor.continue(pad(key, req.reverse ? down.MAX_KEY : down.MIN_KEY, keyTail)) : req.unique ? cursor.continue(cursor.key.slice(0, keyLength).concat(req.reverse ? down.MIN_KEY : down.MAX_KEY, keyTail)) : cursor.continue();
            }
            const virtualCursor = Object.create(cursor, {
              continue: {value: _continue},
              continuePrimaryKey: {
                value(key, primaryKey2) {
                  cursor.continuePrimaryKey(pad(key, down.MAX_KEY, keyTail), primaryKey2);
                }
              },
              primaryKey: {
                get() {
                  return cursor.primaryKey;
                }
              },
              key: {
                get() {
                  const key = cursor.key;
                  return keyLength === 1 ? key[0] : key.slice(0, keyLength);
                }
              },
              value: {
                get() {
                  return cursor.value;
                }
              }
            });
            return virtualCursor;
          }
          return table.openCursor(translateRequest(req)).then((cursor) => cursor && createVirtualCursor(cursor));
        }
      });
      return result;
    }
  });
}
var virtualIndexMiddleware = {
  stack: "dbcore",
  name: "VirtualIndexMiddleware",
  level: 1,
  create: createVirtualIndexMiddleware
};
function getObjectDiff(a, b, rv, prfx) {
  rv = rv || {};
  prfx = prfx || "";
  keys(a).forEach((prop) => {
    if (!hasOwn(b, prop)) {
      rv[prfx + prop] = void 0;
    } else {
      var ap = a[prop], bp = b[prop];
      if (typeof ap === "object" && typeof bp === "object" && ap && bp) {
        const apTypeName = toStringTag(ap);
        const bpTypeName = toStringTag(bp);
        if (apTypeName !== bpTypeName) {
          rv[prfx + prop] = b[prop];
        } else if (apTypeName === "Object") {
          getObjectDiff(ap, bp, rv, prfx + prop + ".");
        } else if (ap !== bp) {
          rv[prfx + prop] = b[prop];
        }
      } else if (ap !== bp)
        rv[prfx + prop] = b[prop];
    }
  });
  keys(b).forEach((prop) => {
    if (!hasOwn(a, prop)) {
      rv[prfx + prop] = b[prop];
    }
  });
  return rv;
}
function getEffectiveKeys(primaryKey, req) {
  if (req.type === "delete")
    return req.keys;
  return req.keys || req.values.map(primaryKey.extractKey);
}
var hooksMiddleware = {
  stack: "dbcore",
  name: "HooksMiddleware",
  level: 2,
  create: (downCore) => __assign(__assign({}, downCore), {
    table(tableName) {
      const downTable = downCore.table(tableName);
      const {primaryKey} = downTable.schema;
      const tableMiddleware = __assign(__assign({}, downTable), {
        mutate(req) {
          const dxTrans = PSD.trans;
          const {deleting, creating, updating} = dxTrans.table(tableName).hook;
          switch (req.type) {
            case "add":
              if (creating.fire === nop)
                break;
              return dxTrans._promise("readwrite", () => addPutOrDelete(req), true);
            case "put":
              if (creating.fire === nop && updating.fire === nop)
                break;
              return dxTrans._promise("readwrite", () => addPutOrDelete(req), true);
            case "delete":
              if (deleting.fire === nop)
                break;
              return dxTrans._promise("readwrite", () => addPutOrDelete(req), true);
            case "deleteRange":
              if (deleting.fire === nop)
                break;
              return dxTrans._promise("readwrite", () => deleteRange(req), true);
          }
          return downTable.mutate(req);
          function addPutOrDelete(req2) {
            const dxTrans2 = PSD.trans;
            const keys2 = req2.keys || getEffectiveKeys(primaryKey, req2);
            if (!keys2)
              throw new Error("Keys missing");
            req2 = req2.type === "add" || req2.type === "put" ? __assign(__assign({}, req2), {keys: keys2}) : __assign({}, req2);
            if (req2.type !== "delete")
              req2.values = [...req2.values];
            if (req2.keys)
              req2.keys = [...req2.keys];
            return getExistingValues(downTable, req2, keys2).then((existingValues) => {
              const contexts = keys2.map((key, i) => {
                const existingValue = existingValues[i];
                const ctx = {onerror: null, onsuccess: null};
                if (req2.type === "delete") {
                  deleting.fire.call(ctx, key, existingValue, dxTrans2);
                } else if (req2.type === "add" || existingValue === void 0) {
                  const generatedPrimaryKey = creating.fire.call(ctx, key, req2.values[i], dxTrans2);
                  if (key == null && generatedPrimaryKey != null) {
                    key = generatedPrimaryKey;
                    req2.keys[i] = key;
                    if (!primaryKey.outbound) {
                      setByKeyPath(req2.values[i], primaryKey.keyPath, key);
                    }
                  }
                } else {
                  const objectDiff = getObjectDiff(existingValue, req2.values[i]);
                  const additionalChanges = updating.fire.call(ctx, objectDiff, key, existingValue, dxTrans2);
                  if (additionalChanges) {
                    const requestedValue = req2.values[i];
                    Object.keys(additionalChanges).forEach((keyPath) => {
                      if (hasOwn(requestedValue, keyPath)) {
                        requestedValue[keyPath] = additionalChanges[keyPath];
                      } else {
                        setByKeyPath(requestedValue, keyPath, additionalChanges[keyPath]);
                      }
                    });
                  }
                }
                return ctx;
              });
              return downTable.mutate(req2).then(({failures, results, numFailures, lastResult}) => {
                for (let i = 0; i < keys2.length; ++i) {
                  const primKey = results ? results[i] : keys2[i];
                  const ctx = contexts[i];
                  if (primKey == null) {
                    ctx.onerror && ctx.onerror(failures[i]);
                  } else {
                    ctx.onsuccess && ctx.onsuccess(req2.type === "put" && existingValues[i] ? req2.values[i] : primKey);
                  }
                }
                return {failures, results, numFailures, lastResult};
              }).catch((error) => {
                contexts.forEach((ctx) => ctx.onerror && ctx.onerror(error));
                return Promise.reject(error);
              });
            });
          }
          function deleteRange(req2) {
            return deleteNextChunk(req2.trans, req2.range, 1e4);
          }
          function deleteNextChunk(trans, range, limit) {
            return downTable.query({trans, values: false, query: {index: primaryKey, range}, limit}).then(({result}) => {
              return addPutOrDelete({type: "delete", keys: result, trans}).then((res) => {
                if (res.numFailures > 0)
                  return Promise.reject(res.failures[0]);
                if (result.length < limit) {
                  return {failures: [], numFailures: 0, lastResult: void 0};
                } else {
                  return deleteNextChunk(trans, __assign(__assign({}, range), {lower: result[result.length - 1], lowerOpen: true}), limit);
                }
              });
            });
          }
        }
      });
      return tableMiddleware;
    }
  })
};
function getExistingValues(table, req, effectiveKeys) {
  return req.type === "add" ? Promise.resolve([]) : table.getMany({trans: req.trans, keys: effectiveKeys, cache: "immutable"});
}
function getFromTransactionCache(keys2, cache2, clone) {
  try {
    if (!cache2)
      return null;
    if (cache2.keys.length < keys2.length)
      return null;
    const result = [];
    for (let i = 0, j = 0; i < cache2.keys.length && j < keys2.length; ++i) {
      if (cmp(cache2.keys[i], keys2[j]) !== 0)
        continue;
      result.push(clone ? deepClone(cache2.values[i]) : cache2.values[i]);
      ++j;
    }
    return result.length === keys2.length ? result : null;
  } catch (_a) {
    return null;
  }
}
var cacheExistingValuesMiddleware = {
  stack: "dbcore",
  level: -1,
  create: (core) => {
    return {
      table: (tableName) => {
        const table = core.table(tableName);
        return __assign(__assign({}, table), {
          getMany: (req) => {
            if (!req.cache) {
              return table.getMany(req);
            }
            const cachedResult = getFromTransactionCache(req.keys, req.trans["_cache"], req.cache === "clone");
            if (cachedResult) {
              return DexiePromise.resolve(cachedResult);
            }
            return table.getMany(req).then((res) => {
              req.trans["_cache"] = {
                keys: req.keys,
                values: req.cache === "clone" ? deepClone(res) : res
              };
              return res;
            });
          },
          mutate: (req) => {
            if (req.type !== "add")
              req.trans["_cache"] = null;
            return table.mutate(req);
          }
        });
      }
    };
  }
};
function isEmptyRange(node) {
  return !("from" in node);
}
var RangeSet = function(fromOrTree, to) {
  if (this) {
    extend(this, arguments.length ? {d: 1, from: fromOrTree, to: arguments.length > 1 ? to : fromOrTree} : {d: 0});
  } else {
    const rv = new RangeSet();
    if (fromOrTree && "d" in fromOrTree) {
      extend(rv, fromOrTree);
    }
    return rv;
  }
};
props(RangeSet.prototype, {
  add(rangeSet) {
    mergeRanges(this, rangeSet);
    return this;
  },
  addKey(key) {
    addRange(this, key, key);
    return this;
  },
  addKeys(keys2) {
    keys2.forEach((key) => addRange(this, key, key));
    return this;
  },
  [iteratorSymbol]() {
    return getRangeSetIterator(this);
  }
});
function addRange(target, from2, to) {
  const diff = cmp(from2, to);
  if (isNaN(diff))
    return;
  if (diff > 0)
    throw RangeError();
  if (isEmptyRange(target))
    return extend(target, {from: from2, to, d: 1});
  const left = target.l;
  const right = target.r;
  if (cmp(to, target.from) < 0) {
    left ? addRange(left, from2, to) : target.l = {from: from2, to, d: 1, l: null, r: null};
    return rebalance(target);
  }
  if (cmp(from2, target.to) > 0) {
    right ? addRange(right, from2, to) : target.r = {from: from2, to, d: 1, l: null, r: null};
    return rebalance(target);
  }
  if (cmp(from2, target.from) < 0) {
    target.from = from2;
    target.l = null;
    target.d = right ? right.d + 1 : 1;
  }
  if (cmp(to, target.to) > 0) {
    target.to = to;
    target.r = null;
    target.d = target.l ? target.l.d + 1 : 1;
  }
  const rightWasCutOff = !target.r;
  if (left && !target.l) {
    mergeRanges(target, left);
  }
  if (right && rightWasCutOff) {
    mergeRanges(target, right);
  }
}
function mergeRanges(target, newSet) {
  function _addRangeSet(target2, {from: from2, to, l, r}) {
    addRange(target2, from2, to);
    if (l)
      _addRangeSet(target2, l);
    if (r)
      _addRangeSet(target2, r);
  }
  if (!isEmptyRange(newSet))
    _addRangeSet(target, newSet);
}
function rangesOverlap(rangeSet1, rangeSet2) {
  const i1 = getRangeSetIterator(rangeSet2);
  let nextResult1 = i1.next();
  if (nextResult1.done)
    return false;
  let a = nextResult1.value;
  const i2 = getRangeSetIterator(rangeSet1);
  let nextResult2 = i2.next(a.from);
  let b = nextResult2.value;
  while (!nextResult1.done && !nextResult2.done) {
    if (cmp(b.from, a.to) <= 0 && cmp(b.to, a.from) >= 0)
      return true;
    cmp(a.from, b.from) < 0 ? a = (nextResult1 = i1.next(b.from)).value : b = (nextResult2 = i2.next(a.from)).value;
  }
  return false;
}
function getRangeSetIterator(node) {
  let state2 = isEmptyRange(node) ? null : {s: 0, n: node};
  return {
    next(key) {
      const keyProvided = arguments.length > 0;
      while (state2) {
        switch (state2.s) {
          case 0:
            state2.s = 1;
            if (keyProvided) {
              while (state2.n.l && cmp(key, state2.n.from) < 0)
                state2 = {up: state2, n: state2.n.l, s: 1};
            } else {
              while (state2.n.l)
                state2 = {up: state2, n: state2.n.l, s: 1};
            }
          case 1:
            state2.s = 2;
            if (!keyProvided || cmp(key, state2.n.to) <= 0)
              return {value: state2.n, done: false};
          case 2:
            if (state2.n.r) {
              state2.s = 3;
              state2 = {up: state2, n: state2.n.r, s: 0};
              continue;
            }
          case 3:
            state2 = state2.up;
        }
      }
      return {done: true};
    }
  };
}
function rebalance(target) {
  var _a, _b;
  const diff = (((_a = target.r) === null || _a === void 0 ? void 0 : _a.d) || 0) - (((_b = target.l) === null || _b === void 0 ? void 0 : _b.d) || 0);
  const r = diff > 1 ? "r" : diff < -1 ? "l" : "";
  if (r) {
    const l = r === "r" ? "l" : "r";
    const rootClone = __assign({}, target);
    const oldRootRight = target[r];
    target.from = oldRootRight.from;
    target.to = oldRootRight.to;
    target[r] = oldRootRight[r];
    rootClone[r] = oldRootRight[l];
    target[l] = rootClone;
    rootClone.d = computeDepth(rootClone);
  }
  target.d = computeDepth(target);
}
function computeDepth({r, l}) {
  return (r ? l ? Math.max(r.d, l.d) : r.d : l ? l.d : 0) + 1;
}
var observabilityMiddleware = {
  stack: "dbcore",
  level: 0,
  create: (core) => {
    const dbName = core.schema.name;
    const FULL_RANGE = new RangeSet(core.MIN_KEY, core.MAX_KEY);
    return __assign(__assign({}, core), {
      table: (tableName) => {
        const table = core.table(tableName);
        const {schema} = table;
        const {primaryKey} = schema;
        const {extractKey, outbound} = primaryKey;
        const tableClone = __assign(__assign({}, table), {
          mutate: (req) => {
            const trans = req.trans;
            const mutatedParts = trans.mutatedParts || (trans.mutatedParts = {});
            const getRangeSet = (indexName) => {
              const part = `idb://${dbName}/${tableName}/${indexName}`;
              return mutatedParts[part] || (mutatedParts[part] = new RangeSet());
            };
            const pkRangeSet = getRangeSet("");
            const delsRangeSet = getRangeSet(":dels");
            const {type: type2} = req;
            let [keys2, newObjs] = req.type === "deleteRange" ? [req.range] : req.type === "delete" ? [req.keys] : req.values.length < 50 ? [[], req.values] : [];
            const oldCache = req.trans["_cache"];
            return table.mutate(req).then((res) => {
              if (isArray2(keys2)) {
                if (type2 !== "delete")
                  keys2 = res.results;
                pkRangeSet.addKeys(keys2);
                const oldObjs = getFromTransactionCache(keys2, oldCache);
                if (!oldObjs && type2 !== "add") {
                  delsRangeSet.addKeys(keys2);
                }
                if (oldObjs || newObjs) {
                  trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs);
                }
              } else if (keys2) {
                const range = {from: keys2.lower, to: keys2.upper};
                delsRangeSet.add(range);
                pkRangeSet.add(range);
              } else {
                pkRangeSet.add(FULL_RANGE);
                delsRangeSet.add(FULL_RANGE);
                schema.indexes.forEach((idx) => getRangeSet(idx.name).add(FULL_RANGE));
              }
              return res;
            });
          }
        });
        const getRange = ({query: {index, range}}) => {
          var _a, _b;
          return [
            index,
            new RangeSet((_a = range.lower) !== null && _a !== void 0 ? _a : core.MIN_KEY, (_b = range.upper) !== null && _b !== void 0 ? _b : core.MAX_KEY)
          ];
        };
        const readSubscribers = {
          get: (req) => [primaryKey, new RangeSet(req.key)],
          getMany: (req) => [primaryKey, new RangeSet().addKeys(req.keys)],
          count: getRange,
          query: getRange,
          openCursor: getRange
        };
        keys(readSubscribers).forEach((method) => {
          tableClone[method] = function(req) {
            const {subscr} = PSD;
            if (subscr) {
              const getRangeSet = (indexName) => {
                const part = `idb://${dbName}/${tableName}/${indexName}`;
                return subscr[part] || (subscr[part] = new RangeSet());
              };
              const pkRangeSet = getRangeSet("");
              const delsRangeSet = getRangeSet(":dels");
              const [queriedIndex, queriedRanges] = readSubscribers[method](req);
              getRangeSet(queriedIndex.name || "").add(queriedRanges);
              if (!queriedIndex.isPrimaryKey) {
                if (method === "count") {
                  delsRangeSet.add(FULL_RANGE);
                } else {
                  const keysPromise = method === "query" && outbound && req.values && table.query(__assign(__assign({}, req), {
                    values: false
                  }));
                  return table[method].apply(this, arguments).then((res) => {
                    if (method === "query") {
                      if (outbound && req.values) {
                        return keysPromise.then(({result: resultingKeys}) => {
                          pkRangeSet.addKeys(resultingKeys);
                          return res;
                        });
                      }
                      const pKeys = req.values ? res.result.map(extractKey) : res.result;
                      if (req.values) {
                        pkRangeSet.addKeys(pKeys);
                      } else {
                        delsRangeSet.addKeys(pKeys);
                      }
                    } else if (method === "openCursor") {
                      const cursor = res;
                      const wantValues = req.values;
                      return cursor && Object.create(cursor, {
                        key: {
                          get() {
                            delsRangeSet.addKey(cursor.primaryKey);
                            return cursor.key;
                          }
                        },
                        primaryKey: {
                          get() {
                            const pkey = cursor.primaryKey;
                            delsRangeSet.addKey(pkey);
                            return pkey;
                          }
                        },
                        value: {
                          get() {
                            wantValues && pkRangeSet.addKey(cursor.primaryKey);
                            return cursor.value;
                          }
                        }
                      });
                    }
                    return res;
                  });
                }
              }
            }
            return table[method].apply(this, arguments);
          };
        });
        return tableClone;
      }
    });
  }
};
function trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs) {
  function addAffectedIndex(ix) {
    const rangeSet = getRangeSet(ix.name || "");
    function extractKey(obj) {
      return obj != null ? ix.extractKey(obj) : null;
    }
    const addKeyOrKeys = (key) => ix.multiEntry && isArray2(key) ? key.forEach((key2) => rangeSet.addKey(key2)) : rangeSet.addKey(key);
    (oldObjs || newObjs).forEach((_2, i) => {
      const oldKey = oldObjs && extractKey(oldObjs[i]);
      const newKey = newObjs && extractKey(newObjs[i]);
      if (cmp(oldKey, newKey) !== 0) {
        if (oldKey != null)
          addKeyOrKeys(oldKey);
        if (newKey != null)
          addKeyOrKeys(newKey);
      }
    });
  }
  schema.indexes.forEach(addAffectedIndex);
}
var Dexie$1 = class {
  constructor(name, options) {
    this._middlewares = {};
    this.verno = 0;
    const deps = Dexie$1.dependencies;
    this._options = options = __assign({
      addons: Dexie$1.addons,
      autoOpen: true,
      indexedDB: deps.indexedDB,
      IDBKeyRange: deps.IDBKeyRange
    }, options);
    this._deps = {
      indexedDB: options.indexedDB,
      IDBKeyRange: options.IDBKeyRange
    };
    const {addons} = options;
    this._dbSchema = {};
    this._versions = [];
    this._storeNames = [];
    this._allTables = {};
    this.idbdb = null;
    this._novip = this;
    const state2 = {
      dbOpenError: null,
      isBeingOpened: false,
      onReadyBeingFired: null,
      openComplete: false,
      dbReadyResolve: nop,
      dbReadyPromise: null,
      cancelOpen: nop,
      openCanceller: null,
      autoSchema: true,
      PR1398_maxLoop: 3
    };
    state2.dbReadyPromise = new DexiePromise((resolve) => {
      state2.dbReadyResolve = resolve;
    });
    state2.openCanceller = new DexiePromise((_2, reject) => {
      state2.cancelOpen = reject;
    });
    this._state = state2;
    this.name = name;
    this.on = Events(this, "populate", "blocked", "versionchange", "close", {ready: [promisableChain, nop]});
    this.on.ready.subscribe = override(this.on.ready.subscribe, (subscribe) => {
      return (subscriber, bSticky) => {
        Dexie$1.vip(() => {
          const state3 = this._state;
          if (state3.openComplete) {
            if (!state3.dbOpenError)
              DexiePromise.resolve().then(subscriber);
            if (bSticky)
              subscribe(subscriber);
          } else if (state3.onReadyBeingFired) {
            state3.onReadyBeingFired.push(subscriber);
            if (bSticky)
              subscribe(subscriber);
          } else {
            subscribe(subscriber);
            const db2 = this;
            if (!bSticky)
              subscribe(function unsubscribe() {
                db2.on.ready.unsubscribe(subscriber);
                db2.on.ready.unsubscribe(unsubscribe);
              });
          }
        });
      };
    });
    this.Collection = createCollectionConstructor(this);
    this.Table = createTableConstructor(this);
    this.Transaction = createTransactionConstructor(this);
    this.Version = createVersionConstructor(this);
    this.WhereClause = createWhereClauseConstructor(this);
    this.on("versionchange", (ev) => {
      if (ev.newVersion > 0)
        console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`);
      else
        console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`);
      this.close();
    });
    this.on("blocked", (ev) => {
      if (!ev.newVersion || ev.newVersion < ev.oldVersion)
        console.warn(`Dexie.delete('${this.name}') was blocked`);
      else
        console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${ev.oldVersion / 10}`);
    });
    this._maxKey = getMaxKey(options.IDBKeyRange);
    this._createTransaction = (mode, storeNames, dbschema, parentTransaction) => new this.Transaction(mode, storeNames, dbschema, this._options.chromeTransactionDurability, parentTransaction);
    this._fireOnBlocked = (ev) => {
      this.on("blocked").fire(ev);
      connections.filter((c) => c.name === this.name && c !== this && !c._state.vcFired).map((c) => c.on("versionchange").fire(ev));
    };
    this.use(virtualIndexMiddleware);
    this.use(hooksMiddleware);
    this.use(observabilityMiddleware);
    this.use(cacheExistingValuesMiddleware);
    this.vip = Object.create(this, {_vip: {value: true}});
    addons.forEach((addon) => addon(this));
  }
  version(versionNumber) {
    if (isNaN(versionNumber) || versionNumber < 0.1)
      throw new exceptions.Type(`Given version is not a positive number`);
    versionNumber = Math.round(versionNumber * 10) / 10;
    if (this.idbdb || this._state.isBeingOpened)
      throw new exceptions.Schema("Cannot add version when database is open");
    this.verno = Math.max(this.verno, versionNumber);
    const versions = this._versions;
    var versionInstance = versions.filter((v) => v._cfg.version === versionNumber)[0];
    if (versionInstance)
      return versionInstance;
    versionInstance = new this.Version(versionNumber);
    versions.push(versionInstance);
    versions.sort(lowerVersionFirst);
    versionInstance.stores({});
    this._state.autoSchema = false;
    return versionInstance;
  }
  _whenReady(fn) {
    return this.idbdb && (this._state.openComplete || PSD.letThrough || this._vip) ? fn() : new DexiePromise((resolve, reject) => {
      if (this._state.openComplete) {
        return reject(new exceptions.DatabaseClosed(this._state.dbOpenError));
      }
      if (!this._state.isBeingOpened) {
        if (!this._options.autoOpen) {
          reject(new exceptions.DatabaseClosed());
          return;
        }
        this.open().catch(nop);
      }
      this._state.dbReadyPromise.then(resolve, reject);
    }).then(fn);
  }
  use({stack, create, level, name}) {
    if (name)
      this.unuse({stack, name});
    const middlewares = this._middlewares[stack] || (this._middlewares[stack] = []);
    middlewares.push({stack, create, level: level == null ? 10 : level, name});
    middlewares.sort((a, b) => a.level - b.level);
    return this;
  }
  unuse({stack, name, create}) {
    if (stack && this._middlewares[stack]) {
      this._middlewares[stack] = this._middlewares[stack].filter((mw) => create ? mw.create !== create : name ? mw.name !== name : false);
    }
    return this;
  }
  open() {
    return dexieOpen(this);
  }
  _close() {
    const state2 = this._state;
    const idx = connections.indexOf(this);
    if (idx >= 0)
      connections.splice(idx, 1);
    if (this.idbdb) {
      try {
        this.idbdb.close();
      } catch (e) {
      }
      this._novip.idbdb = null;
    }
    state2.dbReadyPromise = new DexiePromise((resolve) => {
      state2.dbReadyResolve = resolve;
    });
    state2.openCanceller = new DexiePromise((_2, reject) => {
      state2.cancelOpen = reject;
    });
  }
  close() {
    this._close();
    const state2 = this._state;
    this._options.autoOpen = false;
    state2.dbOpenError = new exceptions.DatabaseClosed();
    if (state2.isBeingOpened)
      state2.cancelOpen(state2.dbOpenError);
  }
  delete() {
    const hasArguments = arguments.length > 0;
    const state2 = this._state;
    return new DexiePromise((resolve, reject) => {
      const doDelete = () => {
        this.close();
        var req = this._deps.indexedDB.deleteDatabase(this.name);
        req.onsuccess = wrap(() => {
          _onDatabaseDeleted(this._deps, this.name);
          resolve();
        });
        req.onerror = eventRejectHandler(reject);
        req.onblocked = this._fireOnBlocked;
      };
      if (hasArguments)
        throw new exceptions.InvalidArgument("Arguments not allowed in db.delete()");
      if (state2.isBeingOpened) {
        state2.dbReadyPromise.then(doDelete);
      } else {
        doDelete();
      }
    });
  }
  backendDB() {
    return this.idbdb;
  }
  isOpen() {
    return this.idbdb !== null;
  }
  hasBeenClosed() {
    const dbOpenError = this._state.dbOpenError;
    return dbOpenError && dbOpenError.name === "DatabaseClosed";
  }
  hasFailed() {
    return this._state.dbOpenError !== null;
  }
  dynamicallyOpened() {
    return this._state.autoSchema;
  }
  get tables() {
    return keys(this._allTables).map((name) => this._allTables[name]);
  }
  transaction() {
    const args = extractTransactionArgs.apply(this, arguments);
    return this._transaction.apply(this, args);
  }
  _transaction(mode, tables, scopeFunc) {
    let parentTransaction = PSD.trans;
    if (!parentTransaction || parentTransaction.db !== this || mode.indexOf("!") !== -1)
      parentTransaction = null;
    const onlyIfCompatible = mode.indexOf("?") !== -1;
    mode = mode.replace("!", "").replace("?", "");
    let idbMode, storeNames;
    try {
      storeNames = tables.map((table) => {
        var storeName = table instanceof this.Table ? table.name : table;
        if (typeof storeName !== "string")
          throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
        return storeName;
      });
      if (mode == "r" || mode === READONLY)
        idbMode = READONLY;
      else if (mode == "rw" || mode == READWRITE)
        idbMode = READWRITE;
      else
        throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);
      if (parentTransaction) {
        if (parentTransaction.mode === READONLY && idbMode === READWRITE) {
          if (onlyIfCompatible) {
            parentTransaction = null;
          } else
            throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
        }
        if (parentTransaction) {
          storeNames.forEach((storeName) => {
            if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
              if (onlyIfCompatible) {
                parentTransaction = null;
              } else
                throw new exceptions.SubTransaction("Table " + storeName + " not included in parent transaction.");
            }
          });
        }
        if (onlyIfCompatible && parentTransaction && !parentTransaction.active) {
          parentTransaction = null;
        }
      }
    } catch (e) {
      return parentTransaction ? parentTransaction._promise(null, (_2, reject) => {
        reject(e);
      }) : rejection(e);
    }
    const enterTransaction = enterTransactionScope.bind(null, this, idbMode, storeNames, parentTransaction, scopeFunc);
    return parentTransaction ? parentTransaction._promise(idbMode, enterTransaction, "lock") : PSD.trans ? usePSD(PSD.transless, () => this._whenReady(enterTransaction)) : this._whenReady(enterTransaction);
  }
  table(tableName) {
    if (!hasOwn(this._allTables, tableName)) {
      throw new exceptions.InvalidTable(`Table ${tableName} does not exist`);
    }
    return this._allTables[tableName];
  }
};
var symbolObservable = typeof Symbol !== "undefined" && "observable" in Symbol ? Symbol.observable : "@@observable";
var Observable = class {
  constructor(subscribe) {
    this._subscribe = subscribe;
  }
  subscribe(x, error, complete) {
    return this._subscribe(!x || typeof x === "function" ? {next: x, error, complete} : x);
  }
  [symbolObservable]() {
    return this;
  }
};
function extendObservabilitySet(target, newSet) {
  keys(newSet).forEach((part) => {
    const rangeSet = target[part] || (target[part] = new RangeSet());
    mergeRanges(rangeSet, newSet[part]);
  });
  return target;
}
function liveQuery(querier) {
  return new Observable((observer) => {
    const scopeFuncIsAsync = isAsyncFunction(querier);
    function execute(subscr) {
      if (scopeFuncIsAsync) {
        incrementExpectedAwaits();
      }
      const exec = () => newScope(querier, {subscr, trans: null});
      const rv = PSD.trans ? usePSD(PSD.transless, exec) : exec();
      if (scopeFuncIsAsync) {
        rv.then(decrementExpectedAwaits, decrementExpectedAwaits);
      }
      return rv;
    }
    let closed = false;
    let accumMuts = {};
    let currentObs = {};
    const subscription = {
      get closed() {
        return closed;
      },
      unsubscribe: () => {
        closed = true;
        globalEvents.storagemutated.unsubscribe(mutationListener);
      }
    };
    observer.start && observer.start(subscription);
    let querying = false, startedListening = false;
    function shouldNotify() {
      return keys(currentObs).some((key) => accumMuts[key] && rangesOverlap(accumMuts[key], currentObs[key]));
    }
    const mutationListener = (parts) => {
      extendObservabilitySet(accumMuts, parts);
      if (shouldNotify()) {
        doQuery();
      }
    };
    const doQuery = () => {
      if (querying || closed)
        return;
      accumMuts = {};
      const subscr = {};
      const ret = execute(subscr);
      if (!startedListening) {
        globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, mutationListener);
        startedListening = true;
      }
      querying = true;
      Promise.resolve(ret).then((result) => {
        querying = false;
        if (closed)
          return;
        if (shouldNotify()) {
          doQuery();
        } else {
          accumMuts = {};
          currentObs = subscr;
          observer.next && observer.next(result);
        }
      }, (err) => {
        querying = false;
        observer.error && observer.error(err);
        subscription.unsubscribe();
      });
    };
    doQuery();
    return subscription;
  });
}
var domDeps;
try {
  domDeps = {
    indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
    IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
  };
} catch (e) {
  domDeps = {indexedDB: null, IDBKeyRange: null};
}
var Dexie = Dexie$1;
props(Dexie, __assign(__assign({}, fullNameExceptions), {
  delete(databaseName) {
    const db2 = new Dexie(databaseName, {addons: []});
    return db2.delete();
  },
  exists(name) {
    return new Dexie(name, {addons: []}).open().then((db2) => {
      db2.close();
      return true;
    }).catch("NoSuchDatabaseError", () => false);
  },
  getDatabaseNames(cb) {
    try {
      return getDatabaseNames(Dexie.dependencies).then(cb);
    } catch (_a) {
      return rejection(new exceptions.MissingAPI());
    }
  },
  defineClass() {
    function Class(content) {
      extend(this, content);
    }
    return Class;
  },
  ignoreTransaction(scopeFunc) {
    return PSD.trans ? usePSD(PSD.transless, scopeFunc) : scopeFunc();
  },
  vip,
  async: function(generatorFn) {
    return function() {
      try {
        var rv = awaitIterator(generatorFn.apply(this, arguments));
        if (!rv || typeof rv.then !== "function")
          return DexiePromise.resolve(rv);
        return rv;
      } catch (e) {
        return rejection(e);
      }
    };
  },
  spawn: function(generatorFn, args, thiz) {
    try {
      var rv = awaitIterator(generatorFn.apply(thiz, args || []));
      if (!rv || typeof rv.then !== "function")
        return DexiePromise.resolve(rv);
      return rv;
    } catch (e) {
      return rejection(e);
    }
  },
  currentTransaction: {
    get: () => PSD.trans || null
  },
  waitFor: function(promiseOrFunction, optionalTimeout) {
    const promise = DexiePromise.resolve(typeof promiseOrFunction === "function" ? Dexie.ignoreTransaction(promiseOrFunction) : promiseOrFunction).timeout(optionalTimeout || 6e4);
    return PSD.trans ? PSD.trans.waitFor(promise) : promise;
  },
  Promise: DexiePromise,
  debug: {
    get: () => debug,
    set: (value) => {
      setDebug(value, value === "dexie" ? () => true : dexieStackFrameFilter);
    }
  },
  derive,
  extend,
  props,
  override,
  Events,
  on: globalEvents,
  liveQuery,
  extendObservabilitySet,
  getByKeyPath,
  setByKeyPath,
  delByKeyPath,
  shallowClone,
  deepClone,
  getObjectDiff,
  cmp,
  asap: asap$1,
  minKey,
  addons: [],
  connections,
  errnames,
  dependencies: domDeps,
  semVer: DEXIE_VERSION,
  version: DEXIE_VERSION.split(".").map((n) => parseInt(n)).reduce((p3, c, i) => p3 + c / Math.pow(10, i * 2))
}));
Dexie.maxKey = getMaxKey(Dexie.dependencies.IDBKeyRange);
if (typeof dispatchEvent !== "undefined" && typeof addEventListener !== "undefined") {
  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, (updatedParts) => {
    if (!propagatingLocally) {
      let event;
      if (isIEOrEdge) {
        event = document.createEvent("CustomEvent");
        event.initCustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, true, true, updatedParts);
      } else {
        event = new CustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, {
          detail: updatedParts
        });
      }
      propagatingLocally = true;
      dispatchEvent(event);
      propagatingLocally = false;
    }
  });
  addEventListener(STORAGE_MUTATED_DOM_EVENT_NAME, ({detail}) => {
    if (!propagatingLocally) {
      propagateLocally(detail);
    }
  });
}
function propagateLocally(updateParts) {
  let wasMe = propagatingLocally;
  try {
    propagatingLocally = true;
    globalEvents.storagemutated.fire(updateParts);
  } finally {
    propagatingLocally = wasMe;
  }
}
var propagatingLocally = false;
if (typeof BroadcastChannel !== "undefined") {
  const bc = new BroadcastChannel(STORAGE_MUTATED_DOM_EVENT_NAME);
  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, (changedParts) => {
    if (!propagatingLocally) {
      bc.postMessage(changedParts);
    }
  });
  bc.onmessage = (ev) => {
    if (ev.data)
      propagateLocally(ev.data);
  };
} else if (typeof self !== "undefined" && typeof navigator !== "undefined") {
  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, (changedParts) => {
    try {
      if (!propagatingLocally) {
        if (typeof localStorage !== "undefined") {
          localStorage.setItem(STORAGE_MUTATED_DOM_EVENT_NAME, JSON.stringify({
            trig: Math.random(),
            changedParts
          }));
        }
        if (typeof self["clients"] === "object") {
          [...self["clients"].matchAll({includeUncontrolled: true})].forEach((client) => client.postMessage({
            type: STORAGE_MUTATED_DOM_EVENT_NAME,
            changedParts
          }));
        }
      }
    } catch (_a) {
    }
  });
  if (typeof addEventListener !== "undefined") {
    addEventListener("storage", (ev) => {
      if (ev.key === STORAGE_MUTATED_DOM_EVENT_NAME) {
        const data = JSON.parse(ev.newValue);
        if (data)
          propagateLocally(data.changedParts);
      }
    });
  }
  const swContainer = self.document && navigator.serviceWorker;
  if (swContainer) {
    swContainer.addEventListener("message", propagateMessageLocally);
  }
}
function propagateMessageLocally({data}) {
  if (data && data.type === STORAGE_MUTATED_DOM_EVENT_NAME) {
    propagateLocally(data.changedParts);
  }
}
DexiePromise.rejectionMapper = mapError;
setDebug(debug, dexieStackFrameFilter);

// node_modules/dexie-export-import/dist/dexie-export-import.mjs
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _2 = {label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: []}, f, y, t, g;
  return g = {next: verb(0), throw: verb(1), return: verb(2)}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_2)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _2.label++;
            return {value: op[1], done: false};
          case 5:
            _2.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t = _2.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t[1]) {
              _2.label = t[1];
              t = op;
              break;
            }
            if (t && _2.label < t[2]) {
              _2.label = t[2];
              _2.ops.push(op);
              break;
            }
            if (t[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return {value: op[0] ? op[1] : void 0, done: true};
  }
}
function getSchemaString(table) {
  var primKeyAndIndexes = [table.schema.primKey].concat(table.schema.indexes);
  return primKeyAndIndexes.map(function(index) {
    return index.src;
  }).join(",");
}
function extractDbSchema(exportedDb) {
  var schema = {};
  for (var _i = 0, _a = exportedDb.tables; _i < _a.length; _i++) {
    var table = _a[_i];
    schema[table.name] = table.schema;
  }
  return schema;
}
function readBlobAsync(blob, type2) {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader();
    reader.onabort = function(ev) {
      return reject(new Error("file read aborted"));
    };
    reader.onerror = function(ev) {
      return reject(ev.target.error);
    };
    reader.onload = function(ev) {
      return resolve(ev.target.result);
    };
    if (type2 === "binary")
      reader.readAsArrayBuffer(blob);
    else
      reader.readAsText(blob);
  });
}
function readBlobSync(blob, type2) {
  if (typeof FileReaderSync === "undefined") {
    throw new Error("FileReaderSync missing. Reading blobs synchronously requires code to run from within a web worker. Use TSON.encapsulateAsync() to do it from the main thread.");
  }
  var reader = new FileReaderSync();
  var data = type2 === "binary" ? reader.readAsArrayBuffer(blob) : reader.readAsText(blob);
  return data;
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn, module) {
  return module = {exports: {}}, fn(module, module.exports), module.exports;
}
var typeson = createCommonjsModule(function(module, exports) {
  !function(e, n) {
    module.exports = n();
  }(commonjsGlobal, function() {
    var e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
      return typeof e2;
    } : function(e2) {
      return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
    }, n = function() {
      return function(e2, n2) {
        if (Array.isArray(e2))
          return e2;
        if (Symbol.iterator in Object(e2))
          return function sliceIterator(e3, n3) {
            var t2 = [], r2 = true, i2 = false, o2 = void 0;
            try {
              for (var s2, c2 = e3[Symbol.iterator](); !(r2 = (s2 = c2.next()).done) && (t2.push(s2.value), !n3 || t2.length !== n3); r2 = true)
                ;
            } catch (e4) {
              i2 = true, o2 = e4;
            } finally {
              try {
                !r2 && c2.return && c2.return();
              } finally {
                if (i2)
                  throw o2;
              }
            }
            return t2;
          }(e2, n2);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(), t = function(e2) {
      if (Array.isArray(e2)) {
        for (var n2 = 0, t2 = Array(e2.length); n2 < e2.length; n2++)
          t2[n2] = e2[n2];
        return t2;
      }
      return Array.from(e2);
    }, r = Object.keys, i = Array.isArray, o = {}.toString, s = Object.getPrototypeOf, c = {}.hasOwnProperty, a = c.toString, u = ["type", "replaced", "iterateIn", "iterateUnsetNumeric"];
    function isThenable(e2, n2) {
      return Typeson.isObject(e2) && typeof e2.then == "function" && (!n2 || typeof e2.catch == "function");
    }
    function toStringTag2(e2) {
      return o.call(e2).slice(8, -1);
    }
    function hasConstructorOf(n2, t2) {
      if (!n2 || (n2 === void 0 ? "undefined" : e(n2)) !== "object")
        return false;
      var r2 = s(n2);
      if (!r2)
        return false;
      var i2 = c.call(r2, "constructor") && r2.constructor;
      return typeof i2 != "function" ? t2 === null : typeof i2 == "function" && t2 !== null && a.call(i2) === a.call(t2);
    }
    function isPlainObject(e2) {
      return !(!e2 || toStringTag2(e2) !== "Object") && (!s(e2) || hasConstructorOf(e2, Object));
    }
    function isObject(n2) {
      return n2 && (n2 === void 0 ? "undefined" : e(n2)) === "object";
    }
    function Typeson(o2) {
      var s2 = [], c2 = [], a2 = {}, y = this.types = {}, p3 = this.stringify = function(e2, n2, t2, r2) {
        r2 = Object.assign({}, o2, r2, {stringification: true});
        var s3 = l(e2, null, r2);
        return i(s3) ? JSON.stringify(s3[0], n2, t2) : s3.then(function(e3) {
          return JSON.stringify(e3, n2, t2);
        });
      };
      this.stringifySync = function(e2, n2, t2, r2) {
        return p3(e2, n2, t2, Object.assign({}, {throwOnBadSyncType: true}, r2, {sync: true}));
      }, this.stringifyAsync = function(e2, n2, t2, r2) {
        return p3(e2, n2, t2, Object.assign({}, {throwOnBadSyncType: true}, r2, {sync: false}));
      };
      var f = this.parse = function(e2, n2, t2) {
        return t2 = Object.assign({}, o2, t2, {parse: true}), h(JSON.parse(e2, n2), t2);
      };
      this.parseSync = function(e2, n2, t2) {
        return f(e2, n2, Object.assign({}, {throwOnBadSyncType: true}, t2, {sync: true}));
      }, this.parseAsync = function(e2, n2, t2) {
        return f(e2, n2, Object.assign({}, {throwOnBadSyncType: true}, t2, {sync: false}));
      }, this.specialTypeNames = function(e2, n2) {
        var t2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return t2.returnTypeNames = true, this.encapsulate(e2, n2, t2);
      }, this.rootTypeName = function(e2, n2) {
        var t2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return t2.iterateNone = true, this.encapsulate(e2, n2, t2);
      };
      var l = this.encapsulate = function(y2, p4, f2) {
        var l2 = (f2 = Object.assign({sync: true}, o2, f2)).sync, h2 = {}, v = [], d = [], b = [], O = !(f2 && "cyclic" in f2) || f2.cyclic, m = f2.encapsulateObserver, T = _encapsulate("", y2, O, p4 || {}, b);
        function finish(e2) {
          var n2 = Object.values(h2);
          if (f2.iterateNone)
            return n2.length ? n2[0] : Typeson.getJSONType(e2);
          if (n2.length) {
            if (f2.returnTypeNames)
              return [].concat(t(new Set(n2)));
            e2 && isPlainObject(e2) && !e2.hasOwnProperty("$types") ? e2.$types = h2 : e2 = {$: e2, $types: {$: h2}};
          } else
            isObject(e2) && e2.hasOwnProperty("$types") && (e2 = {$: e2, $types: true});
          return !f2.returnTypeNames && e2;
        }
        return b.length ? l2 && f2.throwOnBadSyncType ? function() {
          throw new TypeError("Sync method requested but async result obtained");
        }() : Promise.resolve(function checkPromises(e2, t2) {
          return Promise.all(t2.map(function(e3) {
            return e3[1].p;
          })).then(function(r2) {
            return Promise.all(r2.map(function(r3) {
              var i2 = [], o3 = t2.splice(0, 1)[0], s3 = n(o3, 7), c3 = s3[0], a3 = s3[2], u2 = s3[3], y3 = s3[4], p5 = s3[5], f3 = s3[6], l3 = _encapsulate(c3, r3, a3, u2, i2, true, f3), h3 = hasConstructorOf(l3, TypesonPromise);
              return c3 && h3 ? l3.p.then(function(n2) {
                return y3[p5] = n2, checkPromises(e2, i2);
              }) : (c3 ? y3[p5] = l3 : e2 = h3 ? l3.p : l3, checkPromises(e2, i2));
            }));
          }).then(function() {
            return e2;
          });
        }(T, b)).then(finish) : !l2 && f2.throwOnBadSyncType ? function() {
          throw new TypeError("Async method requested but sync result obtained");
        }() : f2.stringification && l2 ? [finish(T)] : l2 ? finish(T) : Promise.resolve(finish(T));
        function _adaptBuiltinStateObjectProperties(e2, n2, t2) {
          Object.assign(e2, n2);
          var r2 = u.map(function(n3) {
            var t3 = e2[n3];
            return delete e2[n3], t3;
          });
          t2(), u.forEach(function(n3, t3) {
            e2[n3] = r2[t3];
          });
        }
        function _encapsulate(n2, t2, o3, c3, a3, u2, y3) {
          var p5 = void 0, l3 = {}, b2 = t2 === void 0 ? "undefined" : e(t2), O2 = m ? function(e2) {
            var r2 = y3 || c3.type || Typeson.getJSONType(t2);
            m(Object.assign(e2 || l3, {keypath: n2, value: t2, cyclic: o3, stateObj: c3, promisesData: a3, resolvingTypesonPromise: u2, awaitingTypesonPromise: hasConstructorOf(t2, TypesonPromise)}, r2 !== void 0 ? {type: r2} : {}));
          } : null;
          if (b2 in {string: 1, boolean: 1, number: 1, undefined: 1})
            return t2 === void 0 || b2 === "number" && (isNaN(t2) || t2 === -1 / 0 || t2 === 1 / 0) ? (p5 = replace(n2, t2, c3, a3, false, u2, O2)) !== t2 && (l3 = {replaced: p5}) : p5 = t2, O2 && O2(), p5;
          if (t2 === null)
            return O2 && O2(), t2;
          if (o3 && !c3.iterateIn && !c3.iterateUnsetNumeric) {
            var T2 = v.indexOf(t2);
            if (!(T2 < 0))
              return h2[n2] = "#", O2 && O2({cyclicKeypath: d[T2]}), "#" + d[T2];
            o3 === true && (v.push(t2), d.push(n2));
          }
          var g = isPlainObject(t2), P = i(t2), j = (g || P) && (!s2.length || c3.replaced) || c3.iterateIn ? t2 : replace(n2, t2, c3, a3, g || P, null, O2), S = void 0;
          if (j !== t2 ? (p5 = j, l3 = {replaced: j}) : P || c3.iterateIn === "array" ? (S = new Array(t2.length), l3 = {clone: S}) : g || c3.iterateIn === "object" ? l3 = {clone: S = {}} : n2 === "" && hasConstructorOf(t2, TypesonPromise) ? (a3.push([n2, t2, o3, c3, void 0, void 0, c3.type]), p5 = t2) : p5 = t2, O2 && O2(), f2.iterateNone)
            return S || p5;
          if (!S)
            return p5;
          if (c3.iterateIn) {
            var w = function _loop(e2) {
              var r2 = {ownKeys: t2.hasOwnProperty(e2)};
              _adaptBuiltinStateObjectProperties(c3, r2, function() {
                var r3 = n2 + (n2 ? "." : "") + escapeKeyPathComponent(e2), i2 = _encapsulate(r3, t2[e2], !!o3, c3, a3, u2);
                hasConstructorOf(i2, TypesonPromise) ? a3.push([r3, i2, !!o3, c3, S, e2, c3.type]) : i2 !== void 0 && (S[e2] = i2);
              });
            };
            for (var A in t2)
              w(A);
            O2 && O2({endIterateIn: true, end: true});
          } else
            r(t2).forEach(function(e2) {
              var r2 = n2 + (n2 ? "." : "") + escapeKeyPathComponent(e2);
              _adaptBuiltinStateObjectProperties(c3, {ownKeys: true}, function() {
                var n3 = _encapsulate(r2, t2[e2], !!o3, c3, a3, u2);
                hasConstructorOf(n3, TypesonPromise) ? a3.push([r2, n3, !!o3, c3, S, e2, c3.type]) : n3 !== void 0 && (S[e2] = n3);
              });
            }), O2 && O2({endIterateOwn: true, end: true});
          if (c3.iterateUnsetNumeric) {
            for (var C = t2.length, N = function _loop2(e2) {
              if (!(e2 in t2)) {
                var r2 = n2 + (n2 ? "." : "") + e2;
                _adaptBuiltinStateObjectProperties(c3, {ownKeys: false}, function() {
                  var n3 = _encapsulate(r2, void 0, !!o3, c3, a3, u2);
                  hasConstructorOf(n3, TypesonPromise) ? a3.push([r2, n3, !!o3, c3, S, e2, c3.type]) : n3 !== void 0 && (S[e2] = n3);
                });
              }
            }, B = 0; B < C; B++)
              N(B);
            O2 && O2({endIterateUnsetNumeric: true, end: true});
          }
          return S;
        }
        function replace(e2, n2, t2, r2, i2, o3, u2) {
          for (var y3 = i2 ? s2 : c2, p5 = y3.length; p5--; ) {
            var f3 = y3[p5];
            if (f3.test(n2, t2)) {
              var v2 = f3.type;
              if (a2[v2]) {
                var d2 = h2[e2];
                h2[e2] = d2 ? [v2].concat(d2) : v2;
              }
              return Object.assign(t2, {type: v2, replaced: true}), !l2 && f3.replaceAsync || f3.replace ? (u2 && u2({replacing: true}), _encapsulate(e2, f3[l2 || !f3.replaceAsync ? "replace" : "replaceAsync"](n2, t2), O && "readonly", t2, r2, o3, v2)) : (u2 && u2({typeDetected: true}), _encapsulate(e2, n2, O && "readonly", t2, r2, o3, v2));
            }
          }
          return n2;
        }
      };
      this.encapsulateSync = function(e2, n2, t2) {
        return l(e2, n2, Object.assign({}, {throwOnBadSyncType: true}, t2, {sync: true}));
      }, this.encapsulateAsync = function(e2, n2, t2) {
        return l(e2, n2, Object.assign({}, {throwOnBadSyncType: true}, t2, {sync: false}));
      };
      var h = this.revive = function(e2, t2) {
        var s3 = (t2 = Object.assign({sync: true}, o2, t2)).sync, c3 = e2 && e2.$types, u2 = true;
        if (!c3)
          return e2;
        if (c3 === true)
          return e2.$;
        c3.$ && isPlainObject(c3.$) && (e2 = e2.$, c3 = c3.$, u2 = false);
        var y2 = [], p4 = {}, f2 = function _revive(e3, t3, o3, s4, f3, l2) {
          if (u2 && e3 === "$types")
            return;
          var h2 = c3[e3];
          if (i(t3) || isPlainObject(t3)) {
            var v = i(t3) ? new Array(t3.length) : {};
            for (r(t3).forEach(function(n2) {
              var r2 = _revive(e3 + (e3 ? "." : "") + escapeKeyPathComponent(n2), t3[n2], o3 || v, s4, v, n2);
              hasConstructorOf(r2, Undefined) ? v[n2] = void 0 : r2 !== void 0 && (v[n2] = r2);
            }), t3 = v; y2.length; ) {
              var d = n(y2[0], 4), b = d[0], O = d[1], m = d[2], T = d[3], g = getByKeyPath2(b, O);
              if (hasConstructorOf(g, Undefined))
                m[T] = void 0;
              else {
                if (g === void 0)
                  break;
                m[T] = g;
              }
              y2.splice(0, 1);
            }
          }
          if (!h2)
            return t3;
          if (h2 === "#") {
            var P = getByKeyPath2(o3, t3.substr(1));
            return P === void 0 && y2.push([o3, t3.substr(1), f3, l2]), P;
          }
          var j = s4.sync;
          return [].concat(h2).reduce(function(e4, n2) {
            var t4 = a2[n2];
            if (!t4)
              throw new Error("Unregistered type: " + n2);
            return t4[j && t4.revive ? "revive" : !j && t4.reviveAsync ? "reviveAsync" : "revive"](e4, p4);
          }, t3);
        }("", e2, null, t2);
        return isThenable(f2 = hasConstructorOf(f2, Undefined) ? void 0 : f2) ? s3 && t2.throwOnBadSyncType ? function() {
          throw new TypeError("Sync method requested but async result obtained");
        }() : f2 : !s3 && t2.throwOnBadSyncType ? function() {
          throw new TypeError("Async method requested but sync result obtained");
        }() : s3 ? f2 : Promise.resolve(f2);
      };
      this.reviveSync = function(e2, n2) {
        return h(e2, Object.assign({}, {throwOnBadSyncType: true}, n2, {sync: true}));
      }, this.reviveAsync = function(e2, n2) {
        return h(e2, Object.assign({}, {throwOnBadSyncType: true}, n2, {sync: false}));
      }, this.register = function(e2, n2) {
        return n2 = n2 || {}, [].concat(e2).forEach(function R(e3) {
          if (i(e3))
            return e3.map(R);
          e3 && r(e3).forEach(function(t2) {
            if (t2 === "#")
              throw new TypeError("# cannot be used as a type name as it is reserved for cyclic objects");
            if (Typeson.JSON_TYPES.includes(t2))
              throw new TypeError("Plain JSON object types are reserved as type names");
            var r2 = e3[t2], o3 = r2.testPlainObjects ? s2 : c2, u2 = o3.filter(function(e4) {
              return e4.type === t2;
            });
            if (u2.length && (o3.splice(o3.indexOf(u2[0]), 1), delete a2[t2], delete y[t2]), r2) {
              if (typeof r2 == "function") {
                var p4 = r2;
                r2 = {test: function test(e4) {
                  return e4 && e4.constructor === p4;
                }, replace: function replace(e4) {
                  return assign({}, e4);
                }, revive: function revive(e4) {
                  return assign(Object.create(p4.prototype), e4);
                }};
              } else
                i(r2) && (r2 = {test: r2[0], replace: r2[1], revive: r2[2]});
              var f2 = {type: t2, test: r2.test.bind(r2)};
              r2.replace && (f2.replace = r2.replace.bind(r2)), r2.replaceAsync && (f2.replaceAsync = r2.replaceAsync.bind(r2));
              var l2 = typeof n2.fallback == "number" ? n2.fallback : n2.fallback ? 0 : 1 / 0;
              if (r2.testPlainObjects ? s2.splice(l2, 0, f2) : c2.splice(l2, 0, f2), r2.revive || r2.reviveAsync) {
                var h2 = {};
                r2.revive && (h2.revive = r2.revive.bind(r2)), r2.reviveAsync && (h2.reviveAsync = r2.reviveAsync.bind(r2)), a2[t2] = h2;
              }
              y[t2] = r2;
            }
          });
        }), this;
      };
    }
    function assign(e2, n2) {
      return r(n2).map(function(t2) {
        e2[t2] = n2[t2];
      }), e2;
    }
    function escapeKeyPathComponent(e2) {
      return e2.replace(/~/g, "~0").replace(/\./g, "~1");
    }
    function unescapeKeyPathComponent(e2) {
      return e2.replace(/~1/g, ".").replace(/~0/g, "~");
    }
    function getByKeyPath2(e2, n2) {
      if (n2 === "")
        return e2;
      var t2 = n2.indexOf(".");
      if (t2 > -1) {
        var r2 = e2[unescapeKeyPathComponent(n2.substr(0, t2))];
        return r2 === void 0 ? void 0 : getByKeyPath2(r2, n2.substr(t2 + 1));
      }
      return e2[unescapeKeyPathComponent(n2)];
    }
    function Undefined() {
    }
    function TypesonPromise(e2) {
      this.p = new Promise(e2);
    }
    return TypesonPromise.prototype.then = function(e2, n2) {
      var t2 = this;
      return new TypesonPromise(function(r2, i2) {
        t2.p.then(function(n3) {
          r2(e2 ? e2(n3) : n3);
        }, function(e3) {
          t2.p.catch(function(e4) {
            return n2 ? n2(e4) : Promise.reject(e4);
          }).then(r2, i2);
        });
      });
    }, TypesonPromise.prototype.catch = function(e2) {
      return this.then(null, e2);
    }, TypesonPromise.resolve = function(e2) {
      return new TypesonPromise(function(n2) {
        n2(e2);
      });
    }, TypesonPromise.reject = function(e2) {
      return new TypesonPromise(function(n2, t2) {
        t2(e2);
      });
    }, ["all", "race"].map(function(e2) {
      TypesonPromise[e2] = function(n2) {
        return new TypesonPromise(function(t2, r2) {
          Promise[e2](n2.map(function(e3) {
            return e3.p;
          })).then(t2, r2);
        });
      };
    }), Typeson.Undefined = Undefined, Typeson.Promise = TypesonPromise, Typeson.isThenable = isThenable, Typeson.toStringTag = toStringTag2, Typeson.hasConstructorOf = hasConstructorOf, Typeson.isObject = isObject, Typeson.isPlainObject = isPlainObject, Typeson.isUserObject = function isUserObject(e2) {
      if (!e2 || toStringTag2(e2) !== "Object")
        return false;
      var n2 = s(e2);
      return !n2 || hasConstructorOf(e2, Object) || isUserObject(n2);
    }, Typeson.escapeKeyPathComponent = escapeKeyPathComponent, Typeson.unescapeKeyPathComponent = unescapeKeyPathComponent, Typeson.getByKeyPath = getByKeyPath2, Typeson.getJSONType = function(n2) {
      return n2 === null ? "null" : i(n2) ? "array" : n2 === void 0 ? "undefined" : e(n2);
    }, Typeson.JSON_TYPES = ["null", "boolean", "number", "string", "array", "object"], Typeson;
  });
});
var structuredCloning = createCommonjsModule(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    var e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
      return typeof e2;
    } : function(e2) {
      return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
    }, t = function() {
      return function(e2, t2) {
        if (Array.isArray(e2))
          return e2;
        if (Symbol.iterator in Object(e2))
          return function sliceIterator(e3, t3) {
            var n2 = [], r2 = true, i2 = false, o2 = void 0;
            try {
              for (var s2, a2 = e3[Symbol.iterator](); !(r2 = (s2 = a2.next()).done) && (n2.push(s2.value), !t3 || n2.length !== t3); r2 = true)
                ;
            } catch (e4) {
              i2 = true, o2 = e4;
            } finally {
              try {
                !r2 && a2.return && a2.return();
              } finally {
                if (i2)
                  throw o2;
              }
            }
            return n2;
          }(e2, t2);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(), n = function(e2) {
      if (Array.isArray(e2)) {
        for (var t2 = 0, n2 = Array(e2.length); t2 < e2.length; t2++)
          n2[t2] = e2[t2];
        return n2;
      }
      return Array.from(e2);
    }, r = Object.keys, i = Array.isArray, o = {}.toString, s = Object.getPrototypeOf, a = {}.hasOwnProperty, c = a.toString, u = ["type", "replaced", "iterateIn", "iterateUnsetNumeric"];
    function isThenable(e2, t2) {
      return Typeson.isObject(e2) && typeof e2.then == "function" && (!t2 || typeof e2.catch == "function");
    }
    function toStringTag2(e2) {
      return o.call(e2).slice(8, -1);
    }
    function hasConstructorOf(t2, n2) {
      if (!t2 || (t2 === void 0 ? "undefined" : e(t2)) !== "object")
        return false;
      var r2 = s(t2);
      if (!r2)
        return false;
      var i2 = a.call(r2, "constructor") && r2.constructor;
      return typeof i2 != "function" ? n2 === null : typeof i2 == "function" && n2 !== null && c.call(i2) === c.call(n2);
    }
    function isPlainObject(e2) {
      return !(!e2 || toStringTag2(e2) !== "Object") && (!s(e2) || hasConstructorOf(e2, Object));
    }
    function isObject(t2) {
      return t2 && (t2 === void 0 ? "undefined" : e(t2)) === "object";
    }
    function Typeson(o2) {
      var s2 = [], a2 = [], c2 = {}, f2 = this.types = {}, p4 = this.stringify = function(e2, t2, n2, r2) {
        r2 = Object.assign({}, o2, r2, {stringification: true});
        var s3 = y2(e2, null, r2);
        return i(s3) ? JSON.stringify(s3[0], t2, n2) : s3.then(function(e3) {
          return JSON.stringify(e3, t2, n2);
        });
      };
      this.stringifySync = function(e2, t2, n2, r2) {
        return p4(e2, t2, n2, Object.assign({}, {throwOnBadSyncType: true}, r2, {sync: true}));
      }, this.stringifyAsync = function(e2, t2, n2, r2) {
        return p4(e2, t2, n2, Object.assign({}, {throwOnBadSyncType: true}, r2, {sync: false}));
      };
      var l2 = this.parse = function(e2, t2, n2) {
        return n2 = Object.assign({}, o2, n2, {parse: true}), v2(JSON.parse(e2, t2), n2);
      };
      this.parseSync = function(e2, t2, n2) {
        return l2(e2, t2, Object.assign({}, {throwOnBadSyncType: true}, n2, {sync: true}));
      }, this.parseAsync = function(e2, t2, n2) {
        return l2(e2, t2, Object.assign({}, {throwOnBadSyncType: true}, n2, {sync: false}));
      }, this.specialTypeNames = function(e2, t2) {
        var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return n2.returnTypeNames = true, this.encapsulate(e2, t2, n2);
      }, this.rootTypeName = function(e2, t2) {
        var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return n2.iterateNone = true, this.encapsulate(e2, t2, n2);
      };
      var y2 = this.encapsulate = function(f3, p5, l3) {
        var y3 = (l3 = Object.assign({sync: true}, o2, l3)).sync, v3 = {}, d2 = [], h2 = [], g2 = [], b2 = !(l3 && "cyclic" in l3) || l3.cyclic, m2 = l3.encapsulateObserver, T2 = _encapsulate("", f3, b2, p5 || {}, g2);
        function finish(e2) {
          var t2 = Object.values(v3);
          if (l3.iterateNone)
            return t2.length ? t2[0] : Typeson.getJSONType(e2);
          if (t2.length) {
            if (l3.returnTypeNames)
              return [].concat(n(new Set(t2)));
            e2 && isPlainObject(e2) && !e2.hasOwnProperty("$types") ? e2.$types = v3 : e2 = {$: e2, $types: {$: v3}};
          } else
            isObject(e2) && e2.hasOwnProperty("$types") && (e2 = {$: e2, $types: true});
          return !l3.returnTypeNames && e2;
        }
        return g2.length ? y3 && l3.throwOnBadSyncType ? function() {
          throw new TypeError("Sync method requested but async result obtained");
        }() : Promise.resolve(function checkPromises(e2, n2) {
          return Promise.all(n2.map(function(e3) {
            return e3[1].p;
          })).then(function(r2) {
            return Promise.all(r2.map(function(r3) {
              var i2 = [], o3 = n2.splice(0, 1)[0], s3 = t(o3, 7), a3 = s3[0], c3 = s3[2], u2 = s3[3], f4 = s3[4], p6 = s3[5], l4 = s3[6], y4 = _encapsulate(a3, r3, c3, u2, i2, true, l4), v4 = hasConstructorOf(y4, TypesonPromise);
              return a3 && v4 ? y4.p.then(function(t2) {
                return f4[p6] = t2, checkPromises(e2, i2);
              }) : (a3 ? f4[p6] = y4 : e2 = v4 ? y4.p : y4, checkPromises(e2, i2));
            }));
          }).then(function() {
            return e2;
          });
        }(T2, g2)).then(finish) : !y3 && l3.throwOnBadSyncType ? function() {
          throw new TypeError("Async method requested but sync result obtained");
        }() : l3.stringification && y3 ? [finish(T2)] : y3 ? finish(T2) : Promise.resolve(finish(T2));
        function _adaptBuiltinStateObjectProperties(e2, t2, n2) {
          Object.assign(e2, t2);
          var r2 = u.map(function(t3) {
            var n3 = e2[t3];
            return delete e2[t3], n3;
          });
          n2(), u.forEach(function(t3, n3) {
            e2[t3] = r2[n3];
          });
        }
        function _encapsulate(t2, n2, o3, a3, c3, u2, f4) {
          var p6 = void 0, y4 = {}, g3 = n2 === void 0 ? "undefined" : e(n2), b3 = m2 ? function(e2) {
            var r2 = f4 || a3.type || Typeson.getJSONType(n2);
            m2(Object.assign(e2 || y4, {keypath: t2, value: n2, cyclic: o3, stateObj: a3, promisesData: c3, resolvingTypesonPromise: u2, awaitingTypesonPromise: hasConstructorOf(n2, TypesonPromise)}, r2 !== void 0 ? {type: r2} : {}));
          } : null;
          if (g3 in {string: 1, boolean: 1, number: 1, undefined: 1})
            return n2 === void 0 || g3 === "number" && (isNaN(n2) || n2 === -1 / 0 || n2 === 1 / 0) ? (p6 = replace(t2, n2, a3, c3, false, u2, b3)) !== n2 && (y4 = {replaced: p6}) : p6 = n2, b3 && b3(), p6;
          if (n2 === null)
            return b3 && b3(), n2;
          if (o3 && !a3.iterateIn && !a3.iterateUnsetNumeric) {
            var T3 = d2.indexOf(n2);
            if (!(T3 < 0))
              return v3[t2] = "#", b3 && b3({cyclicKeypath: h2[T3]}), "#" + h2[T3];
            o3 === true && (d2.push(n2), h2.push(t2));
          }
          var O2 = isPlainObject(n2), w2 = i(n2), S2 = (O2 || w2) && (!s2.length || a3.replaced) || a3.iterateIn ? n2 : replace(t2, n2, a3, c3, O2 || w2, null, b3), P2 = void 0;
          if (S2 !== n2 ? (p6 = S2, y4 = {replaced: S2}) : w2 || a3.iterateIn === "array" ? (P2 = new Array(n2.length), y4 = {clone: P2}) : O2 || a3.iterateIn === "object" ? y4 = {clone: P2 = {}} : t2 === "" && hasConstructorOf(n2, TypesonPromise) ? (c3.push([t2, n2, o3, a3, void 0, void 0, a3.type]), p6 = n2) : p6 = n2, b3 && b3(), l3.iterateNone)
            return P2 || p6;
          if (!P2)
            return p6;
          if (a3.iterateIn) {
            var j2 = function _loop(e2) {
              var r2 = {ownKeys: n2.hasOwnProperty(e2)};
              _adaptBuiltinStateObjectProperties(a3, r2, function() {
                var r3 = t2 + (t2 ? "." : "") + escapeKeyPathComponent(e2), i2 = _encapsulate(r3, n2[e2], !!o3, a3, c3, u2);
                hasConstructorOf(i2, TypesonPromise) ? c3.push([r3, i2, !!o3, a3, P2, e2, a3.type]) : i2 !== void 0 && (P2[e2] = i2);
              });
            };
            for (var A2 in n2)
              j2(A2);
            b3 && b3({endIterateIn: true, end: true});
          } else
            r(n2).forEach(function(e2) {
              var r2 = t2 + (t2 ? "." : "") + escapeKeyPathComponent(e2);
              _adaptBuiltinStateObjectProperties(a3, {ownKeys: true}, function() {
                var t3 = _encapsulate(r2, n2[e2], !!o3, a3, c3, u2);
                hasConstructorOf(t3, TypesonPromise) ? c3.push([r2, t3, !!o3, a3, P2, e2, a3.type]) : t3 !== void 0 && (P2[e2] = t3);
              });
            }), b3 && b3({endIterateOwn: true, end: true});
          if (a3.iterateUnsetNumeric) {
            for (var C2 = n2.length, N2 = function _loop2(e2) {
              if (!(e2 in n2)) {
                var r2 = t2 + (t2 ? "." : "") + e2;
                _adaptBuiltinStateObjectProperties(a3, {ownKeys: false}, function() {
                  var t3 = _encapsulate(r2, void 0, !!o3, a3, c3, u2);
                  hasConstructorOf(t3, TypesonPromise) ? c3.push([r2, t3, !!o3, a3, P2, e2, a3.type]) : t3 !== void 0 && (P2[e2] = t3);
                });
              }
            }, B = 0; B < C2; B++)
              N2(B);
            b3 && b3({endIterateUnsetNumeric: true, end: true});
          }
          return P2;
        }
        function replace(e2, t2, n2, r2, i2, o3, u2) {
          for (var f4 = i2 ? s2 : a2, p6 = f4.length; p6--; ) {
            var l4 = f4[p6];
            if (l4.test(t2, n2)) {
              var d3 = l4.type;
              if (c2[d3]) {
                var h3 = v3[e2];
                v3[e2] = h3 ? [d3].concat(h3) : d3;
              }
              return Object.assign(n2, {type: d3, replaced: true}), !y3 && l4.replaceAsync || l4.replace ? (u2 && u2({replacing: true}), _encapsulate(e2, l4[y3 || !l4.replaceAsync ? "replace" : "replaceAsync"](t2, n2), b2 && "readonly", n2, r2, o3, d3)) : (u2 && u2({typeDetected: true}), _encapsulate(e2, t2, b2 && "readonly", n2, r2, o3, d3));
            }
          }
          return t2;
        }
      };
      this.encapsulateSync = function(e2, t2, n2) {
        return y2(e2, t2, Object.assign({}, {throwOnBadSyncType: true}, n2, {sync: true}));
      }, this.encapsulateAsync = function(e2, t2, n2) {
        return y2(e2, t2, Object.assign({}, {throwOnBadSyncType: true}, n2, {sync: false}));
      };
      var v2 = this.revive = function(e2, n2) {
        var s3 = (n2 = Object.assign({sync: true}, o2, n2)).sync, a3 = e2 && e2.$types, u2 = true;
        if (!a3)
          return e2;
        if (a3 === true)
          return e2.$;
        a3.$ && isPlainObject(a3.$) && (e2 = e2.$, a3 = a3.$, u2 = false);
        var f3 = [], p5 = {}, l3 = function _revive(e3, n3, o3, s4, l4, y3) {
          if (u2 && e3 === "$types")
            return;
          var v3 = a3[e3];
          if (i(n3) || isPlainObject(n3)) {
            var d2 = i(n3) ? new Array(n3.length) : {};
            for (r(n3).forEach(function(t2) {
              var r2 = _revive(e3 + (e3 ? "." : "") + escapeKeyPathComponent(t2), n3[t2], o3 || d2, s4, d2, t2);
              hasConstructorOf(r2, Undefined) ? d2[t2] = void 0 : r2 !== void 0 && (d2[t2] = r2);
            }), n3 = d2; f3.length; ) {
              var h2 = t(f3[0], 4), g2 = h2[0], b2 = h2[1], m2 = h2[2], T2 = h2[3], O2 = getByKeyPath2(g2, b2);
              if (hasConstructorOf(O2, Undefined))
                m2[T2] = void 0;
              else {
                if (O2 === void 0)
                  break;
                m2[T2] = O2;
              }
              f3.splice(0, 1);
            }
          }
          if (!v3)
            return n3;
          if (v3 === "#") {
            var w2 = getByKeyPath2(o3, n3.substr(1));
            return w2 === void 0 && f3.push([o3, n3.substr(1), l4, y3]), w2;
          }
          var S2 = s4.sync;
          return [].concat(v3).reduce(function(e4, t2) {
            var n4 = c2[t2];
            if (!n4)
              throw new Error("Unregistered type: " + t2);
            return n4[S2 && n4.revive ? "revive" : !S2 && n4.reviveAsync ? "reviveAsync" : "revive"](e4, p5);
          }, n3);
        }("", e2, null, n2);
        return isThenable(l3 = hasConstructorOf(l3, Undefined) ? void 0 : l3) ? s3 && n2.throwOnBadSyncType ? function() {
          throw new TypeError("Sync method requested but async result obtained");
        }() : l3 : !s3 && n2.throwOnBadSyncType ? function() {
          throw new TypeError("Async method requested but sync result obtained");
        }() : s3 ? l3 : Promise.resolve(l3);
      };
      this.reviveSync = function(e2, t2) {
        return v2(e2, Object.assign({}, {throwOnBadSyncType: true}, t2, {sync: true}));
      }, this.reviveAsync = function(e2, t2) {
        return v2(e2, Object.assign({}, {throwOnBadSyncType: true}, t2, {sync: false}));
      }, this.register = function(e2, t2) {
        return t2 = t2 || {}, [].concat(e2).forEach(function R(e3) {
          if (i(e3))
            return e3.map(R);
          e3 && r(e3).forEach(function(n2) {
            if (n2 === "#")
              throw new TypeError("# cannot be used as a type name as it is reserved for cyclic objects");
            if (Typeson.JSON_TYPES.includes(n2))
              throw new TypeError("Plain JSON object types are reserved as type names");
            var r2 = e3[n2], o3 = r2.testPlainObjects ? s2 : a2, u2 = o3.filter(function(e4) {
              return e4.type === n2;
            });
            if (u2.length && (o3.splice(o3.indexOf(u2[0]), 1), delete c2[n2], delete f2[n2]), r2) {
              if (typeof r2 == "function") {
                var p5 = r2;
                r2 = {test: function test(e4) {
                  return e4 && e4.constructor === p5;
                }, replace: function replace(e4) {
                  return assign({}, e4);
                }, revive: function revive(e4) {
                  return assign(Object.create(p5.prototype), e4);
                }};
              } else
                i(r2) && (r2 = {test: r2[0], replace: r2[1], revive: r2[2]});
              var l3 = {type: n2, test: r2.test.bind(r2)};
              r2.replace && (l3.replace = r2.replace.bind(r2)), r2.replaceAsync && (l3.replaceAsync = r2.replaceAsync.bind(r2));
              var y3 = typeof t2.fallback == "number" ? t2.fallback : t2.fallback ? 0 : 1 / 0;
              if (r2.testPlainObjects ? s2.splice(y3, 0, l3) : a2.splice(y3, 0, l3), r2.revive || r2.reviveAsync) {
                var v3 = {};
                r2.revive && (v3.revive = r2.revive.bind(r2)), r2.reviveAsync && (v3.reviveAsync = r2.reviveAsync.bind(r2)), c2[n2] = v3;
              }
              f2[n2] = r2;
            }
          });
        }), this;
      };
    }
    function assign(e2, t2) {
      return r(t2).map(function(n2) {
        e2[n2] = t2[n2];
      }), e2;
    }
    function escapeKeyPathComponent(e2) {
      return e2.replace(/~/g, "~0").replace(/\./g, "~1");
    }
    function unescapeKeyPathComponent(e2) {
      return e2.replace(/~1/g, ".").replace(/~0/g, "~");
    }
    function getByKeyPath2(e2, t2) {
      if (t2 === "")
        return e2;
      var n2 = t2.indexOf(".");
      if (n2 > -1) {
        var r2 = e2[unescapeKeyPathComponent(t2.substr(0, n2))];
        return r2 === void 0 ? void 0 : getByKeyPath2(r2, t2.substr(n2 + 1));
      }
      return e2[unescapeKeyPathComponent(t2)];
    }
    function Undefined() {
    }
    function TypesonPromise(e2) {
      this.p = new Promise(e2);
    }
    TypesonPromise.prototype.then = function(e2, t2) {
      var n2 = this;
      return new TypesonPromise(function(r2, i2) {
        n2.p.then(function(t3) {
          r2(e2 ? e2(t3) : t3);
        }, function(e3) {
          n2.p.catch(function(e4) {
            return t2 ? t2(e4) : Promise.reject(e4);
          }).then(r2, i2);
        });
      });
    }, TypesonPromise.prototype.catch = function(e2) {
      return this.then(null, e2);
    }, TypesonPromise.resolve = function(e2) {
      return new TypesonPromise(function(t2) {
        t2(e2);
      });
    }, TypesonPromise.reject = function(e2) {
      return new TypesonPromise(function(t2, n2) {
        n2(e2);
      });
    }, ["all", "race"].map(function(e2) {
      TypesonPromise[e2] = function(t2) {
        return new TypesonPromise(function(n2, r2) {
          Promise[e2](t2.map(function(e3) {
            return e3.p;
          })).then(n2, r2);
        });
      };
    }), Typeson.Undefined = Undefined, Typeson.Promise = TypesonPromise, Typeson.isThenable = isThenable, Typeson.toStringTag = toStringTag2, Typeson.hasConstructorOf = hasConstructorOf, Typeson.isObject = isObject, Typeson.isPlainObject = isPlainObject, Typeson.isUserObject = function isUserObject(e2) {
      if (!e2 || toStringTag2(e2) !== "Object")
        return false;
      var t2 = s(e2);
      return !t2 || hasConstructorOf(e2, Object) || isUserObject(t2);
    }, Typeson.escapeKeyPathComponent = escapeKeyPathComponent, Typeson.unescapeKeyPathComponent = unescapeKeyPathComponent, Typeson.getByKeyPath = getByKeyPath2, Typeson.getJSONType = function(t2) {
      return t2 === null ? "null" : i(t2) ? "array" : t2 === void 0 ? "undefined" : e(t2);
    }, Typeson.JSON_TYPES = ["null", "boolean", "number", "string", "array", "object"];
    for (var f = {userObject: {test: function test(e2, t2) {
      return Typeson.isUserObject(e2);
    }, replace: function replace(e2) {
      return Object.assign({}, e2);
    }, revive: function revive(e2) {
      return e2;
    }}}, p3 = [[{sparseArrays: {testPlainObjects: true, test: function test(e2) {
      return Array.isArray(e2);
    }, replace: function replace(e2, t2) {
      return t2.iterateUnsetNumeric = true, e2;
    }}}, {sparseUndefined: {test: function test(e2, t2) {
      return e2 === void 0 && t2.ownKeys === false;
    }, replace: function replace(e2) {
      return null;
    }, revive: function revive(e2) {
    }}}], {undef: {test: function test(e2, t2) {
      return e2 === void 0 && (t2.ownKeys || !("ownKeys" in t2));
    }, replace: function replace(e2) {
      return null;
    }, revive: function revive(e2) {
      return new Typeson.Undefined();
    }}}], l = {StringObject: {test: function test(t2) {
      return Typeson.toStringTag(t2) === "String" && (t2 === void 0 ? "undefined" : e(t2)) === "object";
    }, replace: function replace(e2) {
      return String(e2);
    }, revive: function revive(e2) {
      return new String(e2);
    }}, BooleanObject: {test: function test(t2) {
      return Typeson.toStringTag(t2) === "Boolean" && (t2 === void 0 ? "undefined" : e(t2)) === "object";
    }, replace: function replace(e2) {
      return Boolean(e2);
    }, revive: function revive(e2) {
      return new Boolean(e2);
    }}, NumberObject: {test: function test(t2) {
      return Typeson.toStringTag(t2) === "Number" && (t2 === void 0 ? "undefined" : e(t2)) === "object";
    }, replace: function replace(e2) {
      return Number(e2);
    }, revive: function revive(e2) {
      return new Number(e2);
    }}}, y = [{nan: {test: function test(e2) {
      return typeof e2 == "number" && isNaN(e2);
    }, replace: function replace(e2) {
      return "NaN";
    }, revive: function revive(e2) {
      return NaN;
    }}}, {infinity: {test: function test(e2) {
      return e2 === 1 / 0;
    }, replace: function replace(e2) {
      return "Infinity";
    }, revive: function revive(e2) {
      return 1 / 0;
    }}}, {negativeInfinity: {test: function test(e2) {
      return e2 === -1 / 0;
    }, replace: function replace(e2) {
      return "-Infinity";
    }, revive: function revive(e2) {
      return -1 / 0;
    }}}], v = {date: {test: function test(e2) {
      return Typeson.toStringTag(e2) === "Date";
    }, replace: function replace(e2) {
      var t2 = e2.getTime();
      return isNaN(t2) ? "NaN" : t2;
    }, revive: function revive(e2) {
      return e2 === "NaN" ? new Date(NaN) : new Date(e2);
    }}}, d = {regexp: {test: function test(e2) {
      return Typeson.toStringTag(e2) === "RegExp";
    }, replace: function replace(e2) {
      return {source: e2.source, flags: (e2.global ? "g" : "") + (e2.ignoreCase ? "i" : "") + (e2.multiline ? "m" : "") + (e2.sticky ? "y" : "") + (e2.unicode ? "u" : "")};
    }, revive: function revive(e2) {
      var t2 = e2.source, n2 = e2.flags;
      return new RegExp(t2, n2);
    }}}, h = {map: {test: function test(e2) {
      return Typeson.toStringTag(e2) === "Map";
    }, replace: function replace(e2) {
      return Array.from(e2.entries());
    }, revive: function revive(e2) {
      return new Map(e2);
    }}}, g = {set: {test: function test(e2) {
      return Typeson.toStringTag(e2) === "Set";
    }, replace: function replace(e2) {
      return Array.from(e2.values());
    }, revive: function revive(e2) {
      return new Set(e2);
    }}}, b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", m = new Uint8Array(256), T = 0; T < b.length; T++)
      m[b.charCodeAt(T)] = T;
    var O = function encode3(e2, t2, n2) {
      for (var r2 = new Uint8Array(e2, t2, n2), i2 = r2.length, o2 = "", s2 = 0; s2 < i2; s2 += 3)
        o2 += b[r2[s2] >> 2], o2 += b[(3 & r2[s2]) << 4 | r2[s2 + 1] >> 4], o2 += b[(15 & r2[s2 + 1]) << 2 | r2[s2 + 2] >> 6], o2 += b[63 & r2[s2 + 2]];
      return i2 % 3 == 2 ? o2 = o2.substring(0, o2.length - 1) + "=" : i2 % 3 == 1 && (o2 = o2.substring(0, o2.length - 2) + "=="), o2;
    }, w = function decode3(e2) {
      var t2 = e2.length, n2 = 0.75 * e2.length, r2 = 0, i2 = void 0, o2 = void 0, s2 = void 0, a2 = void 0;
      e2[e2.length - 1] === "=" && (n2--, e2[e2.length - 2] === "=" && n2--);
      for (var c2 = new ArrayBuffer(n2), u2 = new Uint8Array(c2), f2 = 0; f2 < t2; f2 += 4)
        i2 = m[e2.charCodeAt(f2)], o2 = m[e2.charCodeAt(f2 + 1)], s2 = m[e2.charCodeAt(f2 + 2)], a2 = m[e2.charCodeAt(f2 + 3)], u2[r2++] = i2 << 2 | o2 >> 4, u2[r2++] = (15 & o2) << 4 | s2 >> 2, u2[r2++] = (3 & s2) << 6 | 63 & a2;
      return c2;
    }, S = {arraybuffer: {test: function test(e2) {
      return Typeson.toStringTag(e2) === "ArrayBuffer";
    }, replace: function replace(e2, t2) {
      t2.buffers || (t2.buffers = []);
      var n2 = t2.buffers.indexOf(e2);
      return n2 > -1 ? {index: n2} : (t2.buffers.push(e2), O(e2));
    }, revive: function revive(t2, n2) {
      if (n2.buffers || (n2.buffers = []), (t2 === void 0 ? "undefined" : e(t2)) === "object")
        return n2.buffers[t2.index];
      var r2 = w(t2);
      return n2.buffers.push(r2), r2;
    }}}, P = typeof self == "undefined" ? commonjsGlobal : self, j = {};
    ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"].forEach(function(e2) {
      var t2 = e2, n2 = P[t2];
      n2 && (j[e2.toLowerCase()] = {test: function test(e3) {
        return Typeson.toStringTag(e3) === t2;
      }, replace: function replace(e3, t3) {
        var n3 = e3.buffer, r2 = e3.byteOffset, i2 = e3.length;
        t3.buffers || (t3.buffers = []);
        var o2 = t3.buffers.indexOf(n3);
        return o2 > -1 ? {index: o2, byteOffset: r2, length: i2} : (t3.buffers.push(n3), {encoded: O(n3), byteOffset: r2, length: i2});
      }, revive: function revive(e3, t3) {
        t3.buffers || (t3.buffers = []);
        var r2 = e3.byteOffset, i2 = e3.length, o2 = e3.encoded, s2 = e3.index, a2 = void 0;
        return "index" in e3 ? a2 = t3.buffers[s2] : (a2 = w(o2), t3.buffers.push(a2)), new n2(a2, r2, i2);
      }});
    });
    var A = {dataview: {test: function test(e2) {
      return Typeson.toStringTag(e2) === "DataView";
    }, replace: function replace(e2, t2) {
      var n2 = e2.buffer, r2 = e2.byteOffset, i2 = e2.byteLength;
      t2.buffers || (t2.buffers = []);
      var o2 = t2.buffers.indexOf(n2);
      return o2 > -1 ? {index: o2, byteOffset: r2, byteLength: i2} : (t2.buffers.push(n2), {encoded: O(n2), byteOffset: r2, byteLength: i2});
    }, revive: function revive(e2, t2) {
      t2.buffers || (t2.buffers = []);
      var n2 = e2.byteOffset, r2 = e2.byteLength, i2 = e2.encoded, o2 = e2.index, s2 = void 0;
      return "index" in e2 ? s2 = t2.buffers[o2] : (s2 = w(i2), t2.buffers.push(s2)), new DataView(s2, n2, r2);
    }}}, C = {IntlCollator: {test: function test(e2) {
      return Typeson.hasConstructorOf(e2, Intl.Collator);
    }, replace: function replace(e2) {
      return e2.resolvedOptions();
    }, revive: function revive(e2) {
      return new Intl.Collator(e2.locale, e2);
    }}, IntlDateTimeFormat: {test: function test(e2) {
      return Typeson.hasConstructorOf(e2, Intl.DateTimeFormat);
    }, replace: function replace(e2) {
      return e2.resolvedOptions();
    }, revive: function revive(e2) {
      return new Intl.DateTimeFormat(e2.locale, e2);
    }}, IntlNumberFormat: {test: function test(e2) {
      return Typeson.hasConstructorOf(e2, Intl.NumberFormat);
    }, replace: function replace(e2) {
      return e2.resolvedOptions();
    }, revive: function revive(e2) {
      return new Intl.NumberFormat(e2.locale, e2);
    }}};
    function string2arraybuffer(e2) {
      for (var t2 = new Uint16Array(e2.length), n2 = 0; n2 < e2.length; n2++)
        t2[n2] = e2.charCodeAt(n2);
      return t2.buffer;
    }
    var N = {file: {test: function test(e2) {
      return Typeson.toStringTag(e2) === "File";
    }, replace: function replace(e2) {
      var t2 = new XMLHttpRequest();
      if (t2.open("GET", URL.createObjectURL(e2), false), typeof TextEncoder != "undefined" && t2.overrideMimeType("text/plain; charset=utf-16le"), t2.status !== 200 && t2.status !== 0)
        throw new Error("Bad Blob access: " + t2.status);
      return t2.send(), {type: e2.type, stringContents: t2.responseText, name: e2.name, lastModified: e2.lastModified};
    }, revive: function revive(e2) {
      var t2 = e2.name, n2 = e2.type, r2 = e2.stringContents, i2 = e2.lastModified, o2 = string2arraybuffer(r2);
      return new File([o2], t2, {type: n2, lastModified: i2});
    }, replaceAsync: function replaceAsync(e2) {
      return new Typeson.Promise(function(t2, n2) {
        if (e2.isClosed)
          n2(new Error("The File is closed"));
        else {
          var r2 = new FileReader();
          r2.addEventListener("load", function() {
            t2({type: e2.type, stringContents: r2.result, name: e2.name, lastModified: e2.lastModified});
          }), r2.addEventListener("error", function() {
            n2(r2.error);
          }), r2.readAsText(e2, "UTF-16");
        }
      });
    }}};
    return [f, p3, l, y, v, d, {imagedata: {test: function test(e2) {
      return Typeson.toStringTag(e2) === "ImageData";
    }, replace: function replace(e2) {
      return {array: Array.from(e2.data), width: e2.width, height: e2.height};
    }, revive: function revive(e2) {
      return new ImageData(new Uint8ClampedArray(e2.array), e2.width, e2.height);
    }}}, {imagebitmap: {test: function test(e2) {
      return Typeson.toStringTag(e2) === "ImageBitmap" || e2 && e2.dataset && e2.dataset.toStringTag === "ImageBitmap";
    }, replace: function replace(e2) {
      var t2 = document.createElement("canvas");
      return t2.getContext("2d").drawImage(e2, 0, 0), t2.toDataURL();
    }, revive: function revive(e2) {
      var t2 = document.createElement("canvas"), n2 = t2.getContext("2d"), r2 = document.createElement("img");
      return r2.onload = function() {
        n2.drawImage(r2, 0, 0);
      }, r2.src = e2, t2;
    }, reviveAsync: function reviveAsync(e2) {
      var t2 = document.createElement("canvas"), n2 = t2.getContext("2d"), r2 = document.createElement("img");
      return r2.onload = function() {
        n2.drawImage(r2, 0, 0);
      }, r2.src = e2, createImageBitmap(t2);
    }}}, N, {file: N.file, filelist: {test: function test(e2) {
      return Typeson.toStringTag(e2) === "FileList";
    }, replace: function replace(e2) {
      for (var t2 = [], n2 = 0; n2 < e2.length; n2++)
        t2[n2] = e2.item(n2);
      return t2;
    }, revive: function revive(e2) {
      function FileList() {
        this._files = arguments[0], this.length = this._files.length;
      }
      return FileList.prototype.item = function(e3) {
        return this._files[e3];
      }, FileList.prototype[Symbol.toStringTag] = "FileList", new FileList(e2);
    }}}, {blob: {test: function test(e2) {
      return Typeson.toStringTag(e2) === "Blob";
    }, replace: function replace(e2) {
      var t2 = new XMLHttpRequest();
      if (t2.open("GET", URL.createObjectURL(e2), false), typeof TextEncoder != "undefined" && t2.overrideMimeType("text/plain; charset=utf-16le"), t2.status !== 200 && t2.status !== 0)
        throw new Error("Bad Blob access: " + t2.status);
      return t2.send(), {type: e2.type, stringContents: t2.responseText};
    }, revive: function revive(e2) {
      var t2 = e2.type, n2 = e2.stringContents;
      return new Blob([string2arraybuffer(n2)], {type: t2});
    }, replaceAsync: function replaceAsync(e2) {
      return new Typeson.Promise(function(t2, n2) {
        if (e2.isClosed)
          n2(new Error("The Blob is closed"));
        else {
          var r2 = new FileReader();
          r2.addEventListener("load", function() {
            t2({type: e2.type, stringContents: r2.result});
          }), r2.addEventListener("error", function() {
            n2(r2.error);
          }), r2.readAsText(e2, "UTF-16");
        }
      });
    }}}].concat(typeof Map == "function" ? h : [], typeof Set == "function" ? g : [], typeof ArrayBuffer == "function" ? S : [], typeof Uint8Array == "function" ? j : [], typeof DataView == "function" ? A : [], typeof Intl != "undefined" ? C : []);
  });
});
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup2 = new Uint8Array(256);
for (var i = 0; i < chars.length; i++) {
  lookup2[chars.charCodeAt(i)] = i;
}
var encode = function encode2(arraybuffer, byteOffset, length) {
  if (length === null || length === void 0) {
    length = arraybuffer.byteLength;
  }
  var bytes = new Uint8Array(arraybuffer, byteOffset || 0, length);
  var len = bytes.length;
  var base64 = "";
  for (var _i = 0; _i < len; _i += 3) {
    base64 += chars[bytes[_i] >> 2];
    base64 += chars[(bytes[_i] & 3) << 4 | bytes[_i + 1] >> 4];
    base64 += chars[(bytes[_i + 1] & 15) << 2 | bytes[_i + 2] >> 6];
    base64 += chars[bytes[_i + 2] & 63];
  }
  if (len % 3 === 2) {
    base64 = base64.substring(0, base64.length - 1) + "=";
  } else if (len % 3 === 1) {
    base64 = base64.substring(0, base64.length - 2) + "==";
  }
  return base64;
};
var decode = function decode2(base64) {
  var len = base64.length;
  var bufferLength = base64.length * 0.75;
  var p3 = 0;
  var encoded1, encoded2, encoded3, encoded4;
  if (base64[base64.length - 1] === "=") {
    bufferLength--;
    if (base64[base64.length - 2] === "=") {
      bufferLength--;
    }
  }
  var arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
  for (var _i2 = 0; _i2 < len; _i2 += 4) {
    encoded1 = lookup2[base64.charCodeAt(_i2)];
    encoded2 = lookup2[base64.charCodeAt(_i2 + 1)];
    encoded3 = lookup2[base64.charCodeAt(_i2 + 2)];
    encoded4 = lookup2[base64.charCodeAt(_i2 + 3)];
    bytes[p3++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p3++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p3++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};
var _global2 = typeof self === "undefined" ? globalThis : self;
var exportObj = {};
[
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Uint16Array",
  "Int32Array",
  "Uint32Array",
  "Float32Array",
  "Float64Array"
].forEach(function(typeName) {
  var arrType = typeName;
  var TypedArray = _global2[arrType];
  if (TypedArray) {
    exportObj[typeName.toLowerCase() + "2"] = {
      test: function(x) {
        return typeson.toStringTag(x) === arrType;
      },
      replace: function(_a) {
        var buffer = _a.buffer, byteOffset = _a.byteOffset, length = _a.length;
        return {
          buffer,
          byteOffset,
          length
        };
      },
      revive: function(b64Obj) {
        var buffer = b64Obj.buffer, byteOffset = b64Obj.byteOffset, length = b64Obj.length;
        return new TypedArray(buffer, byteOffset, length);
      }
    };
  }
});
var arrayBuffer = {
  arraybuffer: {
    test: function(x) {
      return typeson.toStringTag(x) === "ArrayBuffer";
    },
    replace: function(b) {
      return encode(b, 0, b.byteLength);
    },
    revive: function(b64) {
      var buffer = decode(b64);
      return buffer;
    }
  }
};
var TSON = new typeson().register(structuredCloning);
var readBlobsSynchronously = "FileReaderSync" in self;
var blobsToAwait = [];
var blobsToAwaitPos = 0;
TSON.register([
  arrayBuffer,
  exportObj,
  {
    blob2: {
      test: function(x) {
        return typeson.toStringTag(x) === "Blob";
      },
      replace: function(b) {
        if (b.isClosed) {
          throw new Error("The Blob is closed");
        }
        if (readBlobsSynchronously) {
          var data = readBlobSync(b, "binary");
          var base64 = encode(data, 0, data.byteLength);
          return {
            type: b.type,
            data: base64
          };
        } else {
          blobsToAwait.push(b);
          var result = {
            type: b.type,
            data: {start: blobsToAwaitPos, end: blobsToAwaitPos + b.size}
          };
          console.log("b.size: " + b.size);
          blobsToAwaitPos += b.size;
          return result;
        }
      },
      finalize: function(b, ba) {
        b.data = encode(ba, 0, ba.byteLength);
      },
      revive: function(_a) {
        var type2 = _a.type, data = _a.data;
        return new Blob([decode(data)], {type: type2});
      }
    }
  }
]);
TSON.mustFinalize = function() {
  return blobsToAwait.length > 0;
};
TSON.finalize = function(items) {
  return __awaiter(void 0, void 0, void 0, function() {
    var allChunks, _i, items_1, item, types, arrayType, keyPath, typeName, typeSpec, b;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, readBlobAsync(new Blob(blobsToAwait), "binary")];
        case 1:
          allChunks = _a.sent();
          if (items) {
            for (_i = 0, items_1 = items; _i < items_1.length; _i++) {
              item = items_1[_i];
              if (item.$types) {
                types = item.$types;
                arrayType = types.$;
                if (arrayType)
                  types = types.$;
                for (keyPath in types) {
                  typeName = types[keyPath];
                  typeSpec = TSON.types[typeName];
                  if (typeSpec && typeSpec.finalize) {
                    b = Dexie$1.getByKeyPath(item, arrayType ? "$." + keyPath : keyPath);
                    typeSpec.finalize(b, allChunks.slice(b.start, b.end));
                  }
                }
              }
            }
          }
          blobsToAwait = [];
          return [2];
      }
    });
  });
};
var DEFAULT_ROWS_PER_CHUNK = 2e3;
function exportDB(db2, options) {
  return __awaiter(this, void 0, void 0, function() {
    function exportAll() {
      return __awaiter(this, void 0, void 0, function() {
        var tablesRowCounts, emptyExportJson, posEndDataArray, firstJsonSlice, filter, _loop_1, _i, tables_1, tableName;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, Promise.all(db2.tables.map(function(table) {
                return table.count();
              }))];
            case 1:
              tablesRowCounts = _a.sent();
              tablesRowCounts.forEach(function(rowCount, i) {
                return tables[i].rowCount = rowCount;
              });
              progress.totalRows = tablesRowCounts.reduce(function(p3, c) {
                return p3 + c;
              });
              emptyExportJson = JSON.stringify(emptyExport, void 0, prettyJson ? 2 : void 0);
              posEndDataArray = emptyExportJson.lastIndexOf("]");
              firstJsonSlice = emptyExportJson.substring(0, posEndDataArray);
              slices.push(firstJsonSlice);
              filter = options.filter;
              _loop_1 = function(tableName2) {
                var table, primKey, inbound, LIMIT, emptyTableExport, emptyTableExportJson, posEndRowsArray, lastKey, lastNumRows, mayHaveMoreRows, _loop_2, state_1;
                return __generator(this, function(_b) {
                  switch (_b.label) {
                    case 0:
                      table = db2.table(tableName2);
                      primKey = table.schema.primKey;
                      inbound = !!primKey.keyPath;
                      LIMIT = options.numRowsPerChunk || DEFAULT_ROWS_PER_CHUNK;
                      emptyTableExport = inbound ? {
                        tableName: table.name,
                        inbound: true,
                        rows: []
                      } : {
                        tableName: table.name,
                        inbound: false,
                        rows: []
                      };
                      emptyTableExportJson = JSON.stringify(emptyTableExport, void 0, prettyJson ? 2 : void 0);
                      if (prettyJson) {
                        emptyTableExportJson = emptyTableExportJson.split("\n").join("\n    ");
                      }
                      posEndRowsArray = emptyTableExportJson.lastIndexOf("]");
                      slices.push(emptyTableExportJson.substring(0, posEndRowsArray));
                      lastKey = null;
                      lastNumRows = 0;
                      mayHaveMoreRows = true;
                      _loop_2 = function() {
                        var chunkedCollection, values, filteredValues, tsonValues, json, keys2, keyvals, tsonTuples, json;
                        return __generator(this, function(_c) {
                          switch (_c.label) {
                            case 0:
                              if (progressCallback) {
                                Dexie$1.ignoreTransaction(function() {
                                  return progressCallback(progress);
                                });
                              }
                              chunkedCollection = lastKey == null ? table.limit(LIMIT) : table.where(":id").above(lastKey).limit(LIMIT);
                              return [4, chunkedCollection.toArray()];
                            case 1:
                              values = _c.sent();
                              if (values.length === 0)
                                return [2, "break"];
                              if (lastKey != null && lastNumRows > 0) {
                                slices.push(",");
                                if (prettyJson) {
                                  slices.push("\n      ");
                                }
                              }
                              mayHaveMoreRows = values.length === LIMIT;
                              if (!inbound)
                                return [3, 4];
                              filteredValues = filter ? values.filter(function(value) {
                                return filter(tableName2, value);
                              }) : values;
                              tsonValues = filteredValues.map(function(value) {
                                return TSON.encapsulate(value);
                              });
                              if (!TSON.mustFinalize())
                                return [3, 3];
                              return [4, Dexie$1.waitFor(TSON.finalize(tsonValues))];
                            case 2:
                              _c.sent();
                              _c.label = 3;
                            case 3:
                              json = JSON.stringify(tsonValues, void 0, prettyJson ? 2 : void 0);
                              if (prettyJson)
                                json = json.split("\n").join("\n      ");
                              slices.push(new Blob([json.substring(1, json.length - 1)]));
                              lastNumRows = filteredValues.length;
                              lastKey = values.length > 0 ? Dexie$1.getByKeyPath(values[values.length - 1], primKey.keyPath) : null;
                              return [3, 8];
                            case 4:
                              return [4, chunkedCollection.primaryKeys()];
                            case 5:
                              keys2 = _c.sent();
                              keyvals = keys2.map(function(key, i) {
                                return [key, values[i]];
                              });
                              if (filter)
                                keyvals = keyvals.filter(function(_a2) {
                                  var key = _a2[0], value = _a2[1];
                                  return filter(tableName2, value, key);
                                });
                              tsonTuples = keyvals.map(function(tuple) {
                                return TSON.encapsulate(tuple);
                              });
                              if (!TSON.mustFinalize())
                                return [3, 7];
                              return [4, Dexie$1.waitFor(TSON.finalize(tsonTuples))];
                            case 6:
                              _c.sent();
                              _c.label = 7;
                            case 7:
                              json = JSON.stringify(tsonTuples, void 0, prettyJson ? 2 : void 0);
                              if (prettyJson)
                                json = json.split("\n").join("\n      ");
                              slices.push(new Blob([json.substring(1, json.length - 1)]));
                              lastNumRows = keyvals.length;
                              lastKey = keys2.length > 0 ? keys2[keys2.length - 1] : null;
                              _c.label = 8;
                            case 8:
                              progress.completedRows += values.length;
                              return [2];
                          }
                        });
                      };
                      _b.label = 1;
                    case 1:
                      if (!mayHaveMoreRows)
                        return [3, 3];
                      return [5, _loop_2()];
                    case 2:
                      state_1 = _b.sent();
                      if (state_1 === "break")
                        return [3, 3];
                      return [3, 1];
                    case 3:
                      slices.push(emptyTableExportJson.substr(posEndRowsArray));
                      progress.completedTables += 1;
                      if (progress.completedTables < progress.totalTables) {
                        slices.push(",");
                      }
                      return [2];
                  }
                });
              };
              _i = 0, tables_1 = tables;
              _a.label = 2;
            case 2:
              if (!(_i < tables_1.length))
                return [3, 5];
              tableName = tables_1[_i].name;
              return [5, _loop_1(tableName)];
            case 3:
              _a.sent();
              _a.label = 4;
            case 4:
              _i++;
              return [3, 2];
            case 5:
              slices.push(emptyExportJson.substr(posEndDataArray));
              progress.done = true;
              if (progressCallback) {
                Dexie$1.ignoreTransaction(function() {
                  return progressCallback(progress);
                });
              }
              return [2];
          }
        });
      });
    }
    var slices, tables, prettyJson, emptyExport, progressCallback, progress;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          options = options || {};
          slices = [];
          tables = db2.tables.map(function(table) {
            return {
              name: table.name,
              schema: getSchemaString(table),
              rowCount: 0
            };
          });
          prettyJson = options.prettyJson;
          emptyExport = {
            formatName: "dexie",
            formatVersion: 1,
            data: {
              databaseName: db2.name,
              databaseVersion: db2.verno,
              tables,
              data: []
            }
          };
          progressCallback = options.progressCallback;
          progress = {
            done: false,
            completedRows: 0,
            completedTables: 0,
            totalRows: NaN,
            totalTables: db2.tables.length
          };
          _a.label = 1;
        case 1:
          _a.trys.push([1, , 6, 7]);
          if (!options.noTransaction)
            return [3, 3];
          return [4, exportAll()];
        case 2:
          _a.sent();
          return [3, 5];
        case 3:
          return [4, db2.transaction("r", db2.tables, exportAll)];
        case 4:
          _a.sent();
          _a.label = 5;
        case 5:
          return [3, 7];
        case 6:
          TSON.finalize();
          return [7];
        case 7:
          if (progressCallback) {
            Dexie$1.ignoreTransaction(function() {
              return progressCallback(progress);
            });
          }
          return [2, new Blob(slices, {type: "text/json"})];
      }
    });
  });
}
var VERSION = 1;
var fakeStream = {Stream: function() {
}};
var clarinet_1 = createCommonjsModule(function(module, exports) {
  (function(clarinet) {
    var env = typeof process === "object" && define_process_env_default ? define_process_env_default : self;
    clarinet.parser = function(opt) {
      return new CParser(opt);
    };
    clarinet.CParser = CParser;
    clarinet.CStream = CStream;
    clarinet.createStream = createStream;
    clarinet.MAX_BUFFER_LENGTH = 10 * 1024 * 1024;
    clarinet.DEBUG = env.CDEBUG === "debug";
    clarinet.INFO = env.CDEBUG === "debug" || env.CDEBUG === "info";
    clarinet.EVENTS = [
      "value",
      "string",
      "key",
      "openobject",
      "closeobject",
      "openarray",
      "closearray",
      "error",
      "end",
      "ready"
    ];
    var buffers = {
      textNode: void 0,
      numberNode: ""
    }, streamWraps = clarinet.EVENTS.filter(function(ev) {
      return ev !== "error" && ev !== "end";
    }), S = 0, Stream;
    clarinet.STATE = {
      BEGIN: S++,
      VALUE: S++,
      OPEN_OBJECT: S++,
      CLOSE_OBJECT: S++,
      OPEN_ARRAY: S++,
      CLOSE_ARRAY: S++,
      TEXT_ESCAPE: S++,
      STRING: S++,
      BACKSLASH: S++,
      END: S++,
      OPEN_KEY: S++,
      CLOSE_KEY: S++,
      TRUE: S++,
      TRUE2: S++,
      TRUE3: S++,
      FALSE: S++,
      FALSE2: S++,
      FALSE3: S++,
      FALSE4: S++,
      NULL: S++,
      NULL2: S++,
      NULL3: S++,
      NUMBER_DECIMAL_POINT: S++,
      NUMBER_DIGIT: S++
    };
    for (var s_ in clarinet.STATE)
      clarinet.STATE[clarinet.STATE[s_]] = s_;
    S = clarinet.STATE;
    const Char = {
      tab: 9,
      lineFeed: 10,
      carriageReturn: 13,
      space: 32,
      doubleQuote: 34,
      plus: 43,
      comma: 44,
      minus: 45,
      period: 46,
      _0: 48,
      _9: 57,
      colon: 58,
      E: 69,
      openBracket: 91,
      backslash: 92,
      closeBracket: 93,
      a: 97,
      b: 98,
      e: 101,
      f: 102,
      l: 108,
      n: 110,
      r: 114,
      s: 115,
      t: 116,
      u: 117,
      openBrace: 123,
      closeBrace: 125
    };
    if (!Object.create) {
      Object.create = function(o) {
        function f() {
          this["__proto__"] = o;
        }
        f.prototype = o;
        return new f();
      };
    }
    if (!Object.getPrototypeOf) {
      Object.getPrototypeOf = function(o) {
        return o["__proto__"];
      };
    }
    if (!Object.keys) {
      Object.keys = function(o) {
        var a = [];
        for (var i in o)
          if (o.hasOwnProperty(i))
            a.push(i);
        return a;
      };
    }
    function checkBufferLength(parser) {
      var maxAllowed = Math.max(clarinet.MAX_BUFFER_LENGTH, 10), maxActual = 0;
      for (var buffer in buffers) {
        var len = parser[buffer] === void 0 ? 0 : parser[buffer].length;
        if (len > maxAllowed) {
          switch (buffer) {
            case "text":
              closeText(parser);
              break;
            default:
              error(parser, "Max buffer length exceeded: " + buffer);
          }
        }
        maxActual = Math.max(maxActual, len);
      }
      parser.bufferCheckPosition = clarinet.MAX_BUFFER_LENGTH - maxActual + parser.position;
    }
    function clearBuffers(parser) {
      for (var buffer in buffers) {
        parser[buffer] = buffers[buffer];
      }
    }
    var stringTokenPattern = /[\\"\n]/g;
    function CParser(opt) {
      if (!(this instanceof CParser))
        return new CParser(opt);
      var parser = this;
      clearBuffers(parser);
      parser.bufferCheckPosition = clarinet.MAX_BUFFER_LENGTH;
      parser.q = parser.c = parser.p = "";
      parser.opt = opt || {};
      parser.closed = parser.closedRoot = parser.sawRoot = false;
      parser.tag = parser.error = null;
      parser.state = S.BEGIN;
      parser.stack = new Array();
      parser.position = parser.column = 0;
      parser.line = 1;
      parser.slashed = false;
      parser.unicodeI = 0;
      parser.unicodeS = null;
      parser.depth = 0;
      emit2(parser, "onready");
    }
    CParser.prototype = {
      end: function() {
        end(this);
      },
      write: write3,
      resume: function() {
        this.error = null;
        return this;
      },
      close: function() {
        return this.write(null);
      }
    };
    try {
      Stream = fakeStream.Stream;
    } catch (ex) {
      Stream = function() {
      };
    }
    function createStream(opt) {
      return new CStream(opt);
    }
    function CStream(opt) {
      if (!(this instanceof CStream))
        return new CStream(opt);
      this._parser = new CParser(opt);
      this.writable = true;
      this.readable = true;
      this.bytes_remaining = 0;
      this.bytes_in_sequence = 0;
      this.temp_buffs = {"2": new Buffer2(2), "3": new Buffer2(3), "4": new Buffer2(4)};
      this.string = "";
      var me = this;
      Stream.apply(me);
      this._parser.onend = function() {
        me.emit("end");
      };
      this._parser.onerror = function(er) {
        me.emit("error", er);
        me._parser.error = null;
      };
      streamWraps.forEach(function(ev) {
        Object.defineProperty(me, "on" + ev, {
          get: function() {
            return me._parser["on" + ev];
          },
          set: function(h) {
            if (!h) {
              me.removeAllListeners(ev);
              me._parser["on" + ev] = h;
              return h;
            }
            me.on(ev, h);
          },
          enumerable: true,
          configurable: false
        });
      });
    }
    CStream.prototype = Object.create(Stream.prototype, {constructor: {value: CStream}});
    CStream.prototype.write = function(data) {
      data = new Buffer2(data);
      for (var i = 0; i < data.length; i++) {
        var n = data[i];
        if (this.bytes_remaining > 0) {
          for (var j = 0; j < this.bytes_remaining; j++) {
            this.temp_buffs[this.bytes_in_sequence][this.bytes_in_sequence - this.bytes_remaining + j] = data[j];
          }
          this.string = this.temp_buffs[this.bytes_in_sequence].toString();
          this.bytes_in_sequence = this.bytes_remaining = 0;
          i = i + j - 1;
          this._parser.write(this.string);
          this.emit("data", this.string);
          continue;
        }
        if (this.bytes_remaining === 0 && n >= 128) {
          if (n >= 194 && n <= 223)
            this.bytes_in_sequence = 2;
          if (n >= 224 && n <= 239)
            this.bytes_in_sequence = 3;
          if (n >= 240 && n <= 244)
            this.bytes_in_sequence = 4;
          if (this.bytes_in_sequence + i > data.length) {
            for (var k = 0; k <= data.length - 1 - i; k++) {
              this.temp_buffs[this.bytes_in_sequence][k] = data[i + k];
            }
            this.bytes_remaining = i + this.bytes_in_sequence - data.length;
            return true;
          } else {
            this.string = data.slice(i, i + this.bytes_in_sequence).toString();
            i = i + this.bytes_in_sequence - 1;
            this._parser.write(this.string);
            this.emit("data", this.string);
            continue;
          }
        }
        for (var p3 = i; p3 < data.length; p3++) {
          if (data[p3] >= 128)
            break;
        }
        this.string = data.slice(i, p3).toString();
        this._parser.write(this.string);
        this.emit("data", this.string);
        i = p3 - 1;
        continue;
      }
    };
    CStream.prototype.end = function(chunk) {
      if (chunk && chunk.length)
        this._parser.write(chunk.toString());
      this._parser.end();
      return true;
    };
    CStream.prototype.on = function(ev, handler) {
      var me = this;
      if (!me._parser["on" + ev] && streamWraps.indexOf(ev) !== -1) {
        me._parser["on" + ev] = function() {
          var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          args.splice(0, 0, ev);
          me.emit.apply(me, args);
        };
      }
      return Stream.prototype.on.call(me, ev, handler);
    };
    CStream.prototype.destroy = function() {
      clearBuffers(this._parser);
      this.emit("close");
    };
    function emit2(parser, event, data) {
      if (clarinet.INFO)
        console.log("-- emit", event, data);
      if (parser[event])
        parser[event](data);
    }
    function emitNode(parser, event, data) {
      closeValue(parser);
      emit2(parser, event, data);
    }
    function closeValue(parser, event) {
      parser.textNode = textopts(parser.opt, parser.textNode);
      if (parser.textNode !== void 0) {
        emit2(parser, event ? event : "onvalue", parser.textNode);
      }
      parser.textNode = void 0;
    }
    function closeNumber(parser) {
      if (parser.numberNode)
        emit2(parser, "onvalue", parseFloat(parser.numberNode));
      parser.numberNode = "";
    }
    function textopts(opt, text) {
      if (text === void 0) {
        return text;
      }
      if (opt.trim)
        text = text.trim();
      if (opt.normalize)
        text = text.replace(/\s+/g, " ");
      return text;
    }
    function error(parser, er) {
      closeValue(parser);
      er += "\nLine: " + parser.line + "\nColumn: " + parser.column + "\nChar: " + parser.c;
      er = new Error(er);
      parser.error = er;
      emit2(parser, "onerror", er);
      return parser;
    }
    function end(parser) {
      if (parser.state !== S.VALUE || parser.depth !== 0)
        error(parser, "Unexpected end");
      closeValue(parser);
      parser.c = "";
      parser.closed = true;
      emit2(parser, "onend");
      CParser.call(parser, parser.opt);
      return parser;
    }
    function isWhitespace(c) {
      return c === Char.carriageReturn || c === Char.lineFeed || c === Char.space || c === Char.tab;
    }
    function write3(chunk) {
      var parser = this;
      if (this.error)
        throw this.error;
      if (parser.closed)
        return error(parser, "Cannot write after close. Assign an onready handler.");
      if (chunk === null)
        return end(parser);
      var i = 0, c = chunk.charCodeAt(0), p3 = parser.p;
      if (clarinet.DEBUG)
        console.log("write -> [" + chunk + "]");
      while (c) {
        p3 = c;
        parser.c = c = chunk.charCodeAt(i++);
        if (p3 !== c)
          parser.p = p3;
        else
          p3 = parser.p;
        if (!c)
          break;
        if (clarinet.DEBUG)
          console.log(i, c, clarinet.STATE[parser.state]);
        parser.position++;
        if (c === Char.lineFeed) {
          parser.line++;
          parser.column = 0;
        } else
          parser.column++;
        switch (parser.state) {
          case S.BEGIN:
            if (c === Char.openBrace)
              parser.state = S.OPEN_OBJECT;
            else if (c === Char.openBracket)
              parser.state = S.OPEN_ARRAY;
            else if (!isWhitespace(c))
              error(parser, "Non-whitespace before {[.");
            continue;
          case S.OPEN_KEY:
          case S.OPEN_OBJECT:
            if (isWhitespace(c))
              continue;
            if (parser.state === S.OPEN_KEY)
              parser.stack.push(S.CLOSE_KEY);
            else {
              if (c === Char.closeBrace) {
                emit2(parser, "onopenobject");
                this.depth++;
                emit2(parser, "oncloseobject");
                this.depth--;
                parser.state = parser.stack.pop() || S.VALUE;
                continue;
              } else
                parser.stack.push(S.CLOSE_OBJECT);
            }
            if (c === Char.doubleQuote)
              parser.state = S.STRING;
            else
              error(parser, 'Malformed object key should start with "');
            continue;
          case S.CLOSE_KEY:
          case S.CLOSE_OBJECT:
            if (isWhitespace(c))
              continue;
            parser.state === S.CLOSE_KEY ? "key" : "object";
            if (c === Char.colon) {
              if (parser.state === S.CLOSE_OBJECT) {
                parser.stack.push(S.CLOSE_OBJECT);
                closeValue(parser, "onopenobject");
                this.depth++;
              } else
                closeValue(parser, "onkey");
              parser.state = S.VALUE;
            } else if (c === Char.closeBrace) {
              emitNode(parser, "oncloseobject");
              this.depth--;
              parser.state = parser.stack.pop() || S.VALUE;
            } else if (c === Char.comma) {
              if (parser.state === S.CLOSE_OBJECT)
                parser.stack.push(S.CLOSE_OBJECT);
              closeValue(parser);
              parser.state = S.OPEN_KEY;
            } else
              error(parser, "Bad object");
            continue;
          case S.OPEN_ARRAY:
          case S.VALUE:
            if (isWhitespace(c))
              continue;
            if (parser.state === S.OPEN_ARRAY) {
              emit2(parser, "onopenarray");
              this.depth++;
              parser.state = S.VALUE;
              if (c === Char.closeBracket) {
                emit2(parser, "onclosearray");
                this.depth--;
                parser.state = parser.stack.pop() || S.VALUE;
                continue;
              } else {
                parser.stack.push(S.CLOSE_ARRAY);
              }
            }
            if (c === Char.doubleQuote)
              parser.state = S.STRING;
            else if (c === Char.openBrace)
              parser.state = S.OPEN_OBJECT;
            else if (c === Char.openBracket)
              parser.state = S.OPEN_ARRAY;
            else if (c === Char.t)
              parser.state = S.TRUE;
            else if (c === Char.f)
              parser.state = S.FALSE;
            else if (c === Char.n)
              parser.state = S.NULL;
            else if (c === Char.minus) {
              parser.numberNode += "-";
            } else if (Char._0 <= c && c <= Char._9) {
              parser.numberNode += String.fromCharCode(c);
              parser.state = S.NUMBER_DIGIT;
            } else
              error(parser, "Bad value");
            continue;
          case S.CLOSE_ARRAY:
            if (c === Char.comma) {
              parser.stack.push(S.CLOSE_ARRAY);
              closeValue(parser, "onvalue");
              parser.state = S.VALUE;
            } else if (c === Char.closeBracket) {
              emitNode(parser, "onclosearray");
              this.depth--;
              parser.state = parser.stack.pop() || S.VALUE;
            } else if (isWhitespace(c))
              continue;
            else
              error(parser, "Bad array");
            continue;
          case S.STRING:
            if (parser.textNode === void 0) {
              parser.textNode = "";
            }
            var starti = i - 1, slashed = parser.slashed, unicodeI = parser.unicodeI;
            STRING_BIGLOOP:
              while (true) {
                if (clarinet.DEBUG)
                  console.log(i, c, clarinet.STATE[parser.state], slashed);
                while (unicodeI > 0) {
                  parser.unicodeS += String.fromCharCode(c);
                  c = chunk.charCodeAt(i++);
                  parser.position++;
                  if (unicodeI === 4) {
                    parser.textNode += String.fromCharCode(parseInt(parser.unicodeS, 16));
                    unicodeI = 0;
                    starti = i - 1;
                  } else {
                    unicodeI++;
                  }
                  if (!c)
                    break STRING_BIGLOOP;
                }
                if (c === Char.doubleQuote && !slashed) {
                  parser.state = parser.stack.pop() || S.VALUE;
                  parser.textNode += chunk.substring(starti, i - 1);
                  parser.position += i - 1 - starti;
                  break;
                }
                if (c === Char.backslash && !slashed) {
                  slashed = true;
                  parser.textNode += chunk.substring(starti, i - 1);
                  parser.position += i - 1 - starti;
                  c = chunk.charCodeAt(i++);
                  parser.position++;
                  if (!c)
                    break;
                }
                if (slashed) {
                  slashed = false;
                  if (c === Char.n) {
                    parser.textNode += "\n";
                  } else if (c === Char.r) {
                    parser.textNode += "\r";
                  } else if (c === Char.t) {
                    parser.textNode += "	";
                  } else if (c === Char.f) {
                    parser.textNode += "\f";
                  } else if (c === Char.b) {
                    parser.textNode += "\b";
                  } else if (c === Char.u) {
                    unicodeI = 1;
                    parser.unicodeS = "";
                  } else {
                    parser.textNode += String.fromCharCode(c);
                  }
                  c = chunk.charCodeAt(i++);
                  parser.position++;
                  starti = i - 1;
                  if (!c)
                    break;
                  else
                    continue;
                }
                stringTokenPattern.lastIndex = i;
                var reResult = stringTokenPattern.exec(chunk);
                if (reResult === null) {
                  i = chunk.length + 1;
                  parser.textNode += chunk.substring(starti, i - 1);
                  parser.position += i - 1 - starti;
                  break;
                }
                i = reResult.index + 1;
                c = chunk.charCodeAt(reResult.index);
                if (!c) {
                  parser.textNode += chunk.substring(starti, i - 1);
                  parser.position += i - 1 - starti;
                  break;
                }
              }
            parser.slashed = slashed;
            parser.unicodeI = unicodeI;
            continue;
          case S.TRUE:
            if (c === Char.r)
              parser.state = S.TRUE2;
            else
              error(parser, "Invalid true started with t" + c);
            continue;
          case S.TRUE2:
            if (c === Char.u)
              parser.state = S.TRUE3;
            else
              error(parser, "Invalid true started with tr" + c);
            continue;
          case S.TRUE3:
            if (c === Char.e) {
              emit2(parser, "onvalue", true);
              parser.state = parser.stack.pop() || S.VALUE;
            } else
              error(parser, "Invalid true started with tru" + c);
            continue;
          case S.FALSE:
            if (c === Char.a)
              parser.state = S.FALSE2;
            else
              error(parser, "Invalid false started with f" + c);
            continue;
          case S.FALSE2:
            if (c === Char.l)
              parser.state = S.FALSE3;
            else
              error(parser, "Invalid false started with fa" + c);
            continue;
          case S.FALSE3:
            if (c === Char.s)
              parser.state = S.FALSE4;
            else
              error(parser, "Invalid false started with fal" + c);
            continue;
          case S.FALSE4:
            if (c === Char.e) {
              emit2(parser, "onvalue", false);
              parser.state = parser.stack.pop() || S.VALUE;
            } else
              error(parser, "Invalid false started with fals" + c);
            continue;
          case S.NULL:
            if (c === Char.u)
              parser.state = S.NULL2;
            else
              error(parser, "Invalid null started with n" + c);
            continue;
          case S.NULL2:
            if (c === Char.l)
              parser.state = S.NULL3;
            else
              error(parser, "Invalid null started with nu" + c);
            continue;
          case S.NULL3:
            if (c === Char.l) {
              emit2(parser, "onvalue", null);
              parser.state = parser.stack.pop() || S.VALUE;
            } else
              error(parser, "Invalid null started with nul" + c);
            continue;
          case S.NUMBER_DECIMAL_POINT:
            if (c === Char.period) {
              parser.numberNode += ".";
              parser.state = S.NUMBER_DIGIT;
            } else
              error(parser, "Leading zero not followed by .");
            continue;
          case S.NUMBER_DIGIT:
            if (Char._0 <= c && c <= Char._9)
              parser.numberNode += String.fromCharCode(c);
            else if (c === Char.period) {
              if (parser.numberNode.indexOf(".") !== -1)
                error(parser, "Invalid number has two dots");
              parser.numberNode += ".";
            } else if (c === Char.e || c === Char.E) {
              if (parser.numberNode.indexOf("e") !== -1 || parser.numberNode.indexOf("E") !== -1)
                error(parser, "Invalid number has two exponential");
              parser.numberNode += "e";
            } else if (c === Char.plus || c === Char.minus) {
              if (!(p3 === Char.e || p3 === Char.E))
                error(parser, "Invalid symbol in number");
              parser.numberNode += String.fromCharCode(c);
            } else {
              closeNumber(parser);
              i--;
              parser.state = parser.stack.pop() || S.VALUE;
            }
            continue;
          default:
            error(parser, "Unknown state: " + parser.state);
        }
      }
      if (parser.position >= parser.bufferCheckPosition)
        checkBufferLength(parser);
      return parser;
    }
  })(exports);
});
function JsonStream(blob) {
  var pos = 0;
  var parser = JsonParser(true);
  var rv = {
    pullAsync: function(numBytes) {
      return __awaiter(this, void 0, void 0, function() {
        var slize, jsonPart, result;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              slize = blob.slice(pos, pos + numBytes);
              pos += numBytes;
              return [4, readBlobAsync(slize, "text")];
            case 1:
              jsonPart = _a.sent();
              result = parser.write(jsonPart);
              rv.result = result || {};
              return [2, result];
          }
        });
      });
    },
    pullSync: function(numBytes) {
      var slize = blob.slice(pos, pos + numBytes);
      pos += numBytes;
      var jsonPart = readBlobSync(slize, "text");
      var result = parser.write(jsonPart);
      rv.result = result || {};
      return result;
    },
    done: function() {
      return parser.done();
    },
    eof: function() {
      return pos >= blob.size;
    },
    result: {}
  };
  return rv;
}
function JsonParser(allowPartial) {
  var parser = clarinet_1.parser();
  var level = 0;
  var result;
  var stack = [];
  var obj;
  var key;
  var done = false;
  var array = false;
  parser.onopenobject = function(newKey) {
    var newObj = {};
    newObj.incomplete = true;
    if (!result)
      result = newObj;
    if (obj) {
      stack.push([key, obj, array]);
      if (allowPartial) {
        if (array) {
          obj.push(newObj);
        } else {
          obj[key] = newObj;
        }
      }
    }
    obj = newObj;
    key = newKey;
    array = false;
    ++level;
  };
  parser.onkey = function(newKey) {
    return key = newKey;
  };
  parser.onvalue = function(value) {
    return array ? obj.push(value) : obj[key] = value;
  };
  parser.oncloseobject = function() {
    var _a;
    delete obj.incomplete;
    key = null;
    if (--level === 0) {
      done = true;
    } else {
      var completedObj = obj;
      _a = stack.pop(), key = _a[0], obj = _a[1], array = _a[2];
      if (!allowPartial) {
        if (array) {
          obj.push(completedObj);
        } else {
          obj[key] = completedObj;
        }
      }
    }
  };
  parser.onopenarray = function() {
    var newObj = [];
    newObj.incomplete = true;
    if (!result)
      result = newObj;
    if (obj) {
      stack.push([key, obj, array]);
      if (allowPartial) {
        if (array) {
          obj.push(newObj);
        } else {
          obj[key] = newObj;
        }
      }
    }
    obj = newObj;
    array = true;
    key = null;
    ++level;
  };
  parser.onclosearray = function() {
    var _a;
    delete obj.incomplete;
    key = null;
    if (--level === 0) {
      done = true;
    } else {
      var completedObj = obj;
      _a = stack.pop(), key = _a[0], obj = _a[1], array = _a[2];
      if (!allowPartial) {
        if (array) {
          obj.push(completedObj);
        } else {
          obj[key] = completedObj;
        }
      }
    }
  };
  return {
    write: function(jsonPart) {
      parser.write(jsonPart);
      return result;
    },
    done: function() {
      return done;
    }
  };
}
var DEFAULT_KILOBYTES_PER_CHUNK = 1024;
function importDB(exportedData, options) {
  return __awaiter(this, void 0, void 0, function() {
    var CHUNK_SIZE, stream, dbExport, db2;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          options = options || {};
          CHUNK_SIZE = options.chunkSizeBytes || DEFAULT_KILOBYTES_PER_CHUNK * 1024;
          return [4, loadUntilWeGotEnoughData(exportedData, CHUNK_SIZE)];
        case 1:
          stream = _a.sent();
          dbExport = stream.result.data;
          db2 = new Dexie$1(dbExport.databaseName);
          db2.version(dbExport.databaseVersion).stores(extractDbSchema(dbExport));
          return [4, importInto(db2, stream, options)];
        case 2:
          _a.sent();
          return [2, db2];
      }
    });
  });
}
function importInto(db2, exportedData, options) {
  return __awaiter(this, void 0, void 0, function() {
    function importAll() {
      return __awaiter(this, void 0, void 0, function() {
        var _loop_1, _i2, _a2, tableExport, state_1;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              _loop_1 = function(tableExport2) {
                var tableName, table2, tableSchemaStr, sourceRows, rows, i, obj, filter, filteredRows, _c, keys2, values;
                return __generator(this, function(_d) {
                  switch (_d.label) {
                    case 0:
                      if (!tableExport2.rows)
                        return [2, "break"];
                      if (!tableExport2.rows.incomplete && tableExport2.rows.length === 0)
                        return [2, "continue"];
                      if (progressCallback) {
                        Dexie$1.ignoreTransaction(function() {
                          return progressCallback(progress);
                        });
                      }
                      tableName = tableExport2.tableName;
                      table2 = db2.table(tableName);
                      tableSchemaStr = dbExport.tables.filter(function(t) {
                        return t.name === tableName;
                      })[0].schema;
                      if (!table2) {
                        if (!options.acceptMissingTables)
                          throw new Error("Exported table " + tableExport2.tableName + " is missing in installed database");
                        else
                          return [2, "continue"];
                      }
                      if (!options.acceptChangedPrimaryKey && tableSchemaStr.split(",")[0] != table2.schema.primKey.src) {
                        throw new Error("Primary key differs for table " + tableExport2.tableName + ". ");
                      }
                      sourceRows = tableExport2.rows;
                      rows = [];
                      for (i = 0; i < sourceRows.length; i++) {
                        obj = sourceRows[i];
                        if (!obj.incomplete) {
                          rows.push(TSON.revive(obj));
                        } else {
                          break;
                        }
                      }
                      filter = options.filter;
                      filteredRows = filter ? tableExport2.inbound ? rows.filter(function(value) {
                        return filter(tableName, value);
                      }) : rows.filter(function(_a3) {
                        var key = _a3[0], value = _a3[1];
                        return filter(tableName, value, key);
                      }) : rows;
                      _c = tableExport2.inbound ? [void 0, filteredRows] : [filteredRows.map(function(row) {
                        return row[0];
                      }), rows.map(function(row) {
                        return row[1];
                      })], keys2 = _c[0], values = _c[1];
                      if (!options.overwriteValues)
                        return [3, 2];
                      return [4, table2.bulkPut(values, keys2)];
                    case 1:
                      _d.sent();
                      return [3, 4];
                    case 2:
                      return [4, table2.bulkAdd(values, keys2)];
                    case 3:
                      _d.sent();
                      _d.label = 4;
                    case 4:
                      progress.completedRows += rows.length;
                      if (!rows.incomplete) {
                        progress.completedTables += 1;
                      }
                      sourceRows.splice(0, rows.length);
                      return [2];
                  }
                });
              };
              _i2 = 0, _a2 = dbExport.data;
              _b.label = 1;
            case 1:
              if (!(_i2 < _a2.length))
                return [3, 4];
              tableExport = _a2[_i2];
              return [5, _loop_1(tableExport)];
            case 2:
              state_1 = _b.sent();
              if (state_1 === "break")
                return [3, 4];
              _b.label = 3;
            case 3:
              _i2++;
              return [3, 1];
            case 4:
              while (dbExport.data.length > 0 && dbExport.data[0].rows && !dbExport.data[0].rows.incomplete) {
                dbExport.data.splice(0, 1);
              }
              if (!(!jsonStream.done() && !jsonStream.eof()))
                return [3, 8];
              if (!readBlobsSynchronously2)
                return [3, 5];
              jsonStream.pullSync(CHUNK_SIZE);
              return [3, 7];
            case 5:
              return [4, Dexie$1.waitFor(jsonStream.pullAsync(CHUNK_SIZE))];
            case 6:
              _b.sent();
              _b.label = 7;
            case 7:
              return [3, 9];
            case 8:
              return [3, 10];
            case 9:
              return [3, 0];
            case 10:
              return [2];
          }
        });
      });
    }
    var CHUNK_SIZE, jsonStream, dbExportFile, readBlobsSynchronously2, dbExport, progressCallback, progress, _i, _a, table;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          options = options || {};
          CHUNK_SIZE = options.chunkSizeBytes || DEFAULT_KILOBYTES_PER_CHUNK * 1024;
          return [4, loadUntilWeGotEnoughData(exportedData, CHUNK_SIZE)];
        case 1:
          jsonStream = _b.sent();
          dbExportFile = jsonStream.result;
          readBlobsSynchronously2 = "FileReaderSync" in self;
          dbExport = dbExportFile.data;
          if (!options.acceptNameDiff && db2.name !== dbExport.databaseName)
            throw new Error("Name differs. Current database name is " + db2.name + " but export is " + dbExport.databaseName);
          if (!options.acceptVersionDiff && db2.verno !== dbExport.databaseVersion) {
            throw new Error("Database version differs. Current database is in version " + db2.verno + " but export is " + dbExport.databaseVersion);
          }
          progressCallback = options.progressCallback;
          progress = {
            done: false,
            completedRows: 0,
            completedTables: 0,
            totalRows: dbExport.tables.reduce(function(p3, c) {
              return p3 + c.rowCount;
            }, 0),
            totalTables: dbExport.tables.length
          };
          if (progressCallback) {
            Dexie$1.ignoreTransaction(function() {
              return progressCallback(progress);
            });
          }
          if (!options.clearTablesBeforeImport)
            return [3, 5];
          _i = 0, _a = db2.tables;
          _b.label = 2;
        case 2:
          if (!(_i < _a.length))
            return [3, 5];
          table = _a[_i];
          return [4, table.clear()];
        case 3:
          _b.sent();
          _b.label = 4;
        case 4:
          _i++;
          return [3, 2];
        case 5:
          if (!options.noTransaction)
            return [3, 7];
          return [4, importAll()];
        case 6:
          _b.sent();
          return [3, 9];
        case 7:
          return [4, db2.transaction("rw", db2.tables, importAll)];
        case 8:
          _b.sent();
          _b.label = 9;
        case 9:
          progress.done = true;
          if (progressCallback) {
            Dexie$1.ignoreTransaction(function() {
              return progressCallback(progress);
            });
          }
          return [2];
      }
    });
  });
}
function loadUntilWeGotEnoughData(exportedData, CHUNK_SIZE) {
  return __awaiter(this, void 0, void 0, function() {
    var stream, dbExportFile;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          stream = "slice" in exportedData ? JsonStream(exportedData) : exportedData;
          _a.label = 1;
        case 1:
          if (!!stream.eof())
            return [3, 3];
          return [4, stream.pullAsync(CHUNK_SIZE)];
        case 2:
          _a.sent();
          if (stream.result.data && stream.result.data.data)
            return [3, 3];
          return [3, 1];
        case 3:
          dbExportFile = stream.result;
          if (!dbExportFile || dbExportFile.formatName != "dexie")
            throw new Error("Given file is not a dexie export");
          if (dbExportFile.formatVersion > VERSION) {
            throw new Error("Format version " + dbExportFile.formatVersion + " not supported");
          }
          if (!dbExportFile.data) {
            throw new Error("No data in export file");
          }
          if (!dbExportFile.data.databaseName) {
            throw new Error("Missing databaseName in export file");
          }
          if (!dbExportFile.data.databaseVersion) {
            throw new Error("Missing databaseVersion in export file");
          }
          if (!dbExportFile.data.tables) {
            throw new Error("Missing tables in export file");
          }
          return [2, stream];
      }
    });
  });
}
Dexie$1.prototype.export = function(options) {
  return exportDB(this, options);
};
Dexie$1.prototype.import = function(blob, options) {
  return importInto(this, blob, options);
};
Dexie$1.import = function(blob, options) {
  return importDB(blob, options);
};

// node_modules/nanoid/index.browser.js
var nanoid = (size = 21) => crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
  byte &= 63;
  if (byte < 36) {
    id += byte.toString(36);
  } else if (byte < 62) {
    id += (byte - 26).toString(36).toUpperCase();
  } else if (byte > 62) {
    id += "-";
  } else {
    id += "_";
  }
  return id;
}, "");

// app/utils.imba
function parse_url(url) {
  if (url === null) {
    throw "invalid url";
  }
  ;
  let get_url = function(s) {
    let url2 = new URL(s);
    if (!(url2.host && url2.href)) {
      throw _;
    }
    ;
    return url2;
  };
  try {
    return get_url(url);
  } catch (e) {
  }
  ;
  try {
    return get_url("https://" + url);
  } catch (e) {
  }
  ;
  throw "invalid url";
}

// app/db.imba
var p = console.log;
var db = new Dexie$1("fuzzyhome");
db.version(1).stores({
  links: "++id,name,link"
});
db.version(2).stores({
  links: "++id,name,url,frequency,img"
}).upgrade(function(trans) {
  p("upgrading to fuzzyhome db version 2");
  return trans.links.toCollection().modify(function(link) {
    let id = nanoid();
    let name = link.name;
    let url = link.link;
    let frequency = link.frequency;
    let img = link.img;
    return this.value = {id, name, url, frequency, img};
  });
});
db.version(3).stores({
  links: "++id,name,url,frequency,img"
}).upgrade(function(trans) {
  p("upgrading to fuzzyhome db version 3");
  return trans.links.toCollection().modify(function(link) {
    try {
      return link.url = parse_url(link.url).href;
    } catch (e) {
    }
    ;
  });
});
var db_default = db;

// node_modules/fzi/index.js
function iter$__9(a) {
  let v;
  return a ? (v = a.toIterable) ? v.call(a) : a : a;
}
var SCORE_MIN = -Infinity;
var SCORE_MAX = Infinity;
var SCORE_GAP_LEADING = -5e-3;
var SCORE_GAP_TRAILING = -5e-3;
var SCORE_GAP_INNER = -0.01;
var SCORE_MATCH_CONSECUTIVE = 1;
var SCORE_MATCH_SLASH = 0.9;
var SCORE_MATCH_WORD = 0.8;
var SCORE_MATCH_DOT = 0.6;
function fzi(arr, query, keyname = "name") {
  let needle = query.trim().toLowerCase();
  if (arr.length <= 0) {
    return [];
  }
  ;
  let scored = [];
  let M = new Array(1e5);
  let D = new Array(1e5);
  let B = new Array(1e5);
  for (let $127 = 0, $220 = iter$__9(arr), $312 = $220.length; $127 < $312; $127++) {
    let obj = $220[$127];
    if (!obj.hasOwnProperty(keyname)) {
      continue;
    }
    ;
    let haystack = obj[keyname].trim().toLowerCase();
    if (!has_match(needle, haystack)) {
      continue;
    }
    ;
    obj.fzi_score = score(needle, haystack, M, D, B);
    sorted_insert(obj, scored);
  }
  ;
  return scored;
}
function score(needle, haystack, M, D, match_bonus) {
  let n = needle.length;
  let m = haystack.length;
  if (n < 1 || m < 1) {
    return SCORE_MIN;
  }
  ;
  if (n === m) {
    return SCORE_MAX;
  }
  ;
  if (m > 1024) {
    return SCORE_MIN;
  }
  ;
  compute(needle, haystack, M, D, match_bonus);
  return M[(n - 1) * m + (m - 1)];
}
function compute(needle, haystack, M, D, match_bonus) {
  var $59, $412;
  let n = needle.length;
  let m = haystack.length;
  precompute_bonus(haystack, match_bonus);
  $412 = [];
  for (let len = n - 1, i = 0, rd = len - i; rd > 0 ? i <= len : i >= len; rd > 0 ? i++ : i--) {
    let prev_score = SCORE_MIN;
    let gap_score = i === n - 1 ? SCORE_GAP_TRAILING : SCORE_GAP_INNER;
    $59 = [];
    for (let len2 = m - 1, j = 0, rd2 = len2 - j, score1; rd2 > 0 ? j <= len2 : j >= len2; rd2 > 0 ? j++ : j--) {
      let ij = i * m + j;
      let pij = (i - 1) * m + (j - 1);
      $59.push(needle[i] === haystack[j] ? (score1 = SCORE_MIN, i === 0 ? score1 = j * SCORE_GAP_LEADING + match_bonus[j] : j > 0 && (score1 = Math.max(M[pij] + match_bonus[j], D[pij] + SCORE_MATCH_CONSECUTIVE)), D[ij] = score1, M[ij] = prev_score = Math.max(score1, prev_score + gap_score)) : (D[ij] = SCORE_MIN, M[ij] = prev_score = prev_score + gap_score));
    }
    ;
    $412.push($59);
  }
  ;
  return $412;
}
function precompute_bonus(haystack, match_bonus) {
  var $610;
  let m = haystack.length;
  let last_ch = "/";
  $610 = [];
  for (let len = m - 1, i = 0, rd = len - i; rd > 0 ? i <= len : i >= len; rd > 0 ? i++ : i--) {
    let ch = haystack[i];
    if (last_ch === "/") {
      match_bonus[i] = SCORE_MATCH_SLASH;
    } else if (last_ch === "-" || last_ch === "_" || last_ch === " ") {
      match_bonus[i] = SCORE_MATCH_WORD;
    } else if (last_ch === ".") {
      match_bonus[i] = SCORE_MATCH_DOT;
    } else {
      match_bonus[i] = 0;
    }
    ;
    $610.push(last_ch = ch);
  }
  ;
  return $610;
}
function has_match(needle, haystack) {
  let i = 0;
  let n = -1;
  let letter;
  while (letter = needle[i++]) {
    if ((n = haystack.indexOf(letter, n + 1)) === -1) {
      return false;
    }
    ;
  }
  ;
  return true;
}
function sorted_insert(elem, arr) {
  let low = 0;
  let high = arr.length;
  while (low < high) {
    let mid = low + high >>> 1;
    if (elem.fzi_score > arr[mid].fzi_score) {
      high = mid;
    } else {
      low = mid + 1;
    }
    ;
  }
  ;
  return arr.splice(low, 0, elem);
}
var fzi_default = fzi;

// app/client.imba
var import_downloadjs = __toModule(require_download());
function iter$__10(a) {
  let v;
  return a ? (v = a.toIterable) ? v.call(a) : a : a;
}
var $126 = Symbol.for("#__init__");
var $219 = Symbol.for("#__patch__");
var $105 = Symbol.for("#beforeReconcile");
var $2110 = Symbol.for("##up");
var $323 = Symbol.for("#placeChild");
var $842 = Symbol.for("#afterVisit");
var $2022 = Symbol.for("#afterReconcile");
var $136 = Symbol();
var $183 = Symbol();
var $225 = Symbol();
var $264 = Symbol();
var $294 = Symbol();
var $303 = Symbol();
var $343 = Symbol();
var $372 = Symbol();
var $40 = Symbol();
var $433 = Symbol();
var $443 = Symbol();
var $462 = Symbol();
var $492 = Symbol();
var $522 = Symbol();
var $532 = Symbol();
var $552 = Symbol();
var $58 = Symbol();
var $61 = Symbol();
var $622 = Symbol();
var $642 = Symbol();
var $662 = Symbol();
var $69 = Symbol();
var $71 = Symbol();
var $722 = Symbol();
var $742 = Symbol();
var $752 = Symbol();
var $762 = Symbol();
var $772 = Symbol();
var $78 = Symbol();
var $79 = Symbol();
var $80 = Symbol();
var $81 = Symbol();
var $822 = Symbol();
var $832 = Symbol();
var $852 = Symbol();
var $88 = Symbol();
var $89 = Symbol();
var $91 = Symbol();
var $932 = Symbol();
var $96 = Symbol();
var $98 = Symbol();
var $101 = Symbol();
var $1052 = Symbol();
var $108 = Symbol();
var $1102 = Symbol();
var $1142 = Symbol();
var $1172 = Symbol();
var $1202 = Symbol();
var $1222 = Symbol();
var $1232 = Symbol();
var $1262 = Symbol();
var $128 = Symbol();
var $129 = Symbol();
var $130 = Symbol();
var $137 = Symbol();
var $139 = Symbol();
var $141 = Symbol();
var $1422 = Symbol();
var $1432 = Symbol();
var $1462 = Symbol();
var $149 = Symbol();
var $1522 = Symbol();
var $1542 = Symbol();
var $1552 = Symbol();
var $158 = Symbol();
var $161 = Symbol();
var $1642 = Symbol();
var $166 = Symbol();
var $167 = Symbol();
var $169 = Symbol();
var $1722 = Symbol();
var $174 = Symbol();
var $178 = Symbol();
var $181 = Symbol();
var $184 = Symbol();
var $186 = Symbol();
var $187 = Symbol();
var $190 = Symbol();
var $1922 = Symbol();
var $1932 = Symbol();
var $1942 = Symbol();
var $195 = Symbol();
var $196 = Symbol();
var $197 = Symbol();
var $199 = Symbol();
var $200 = Symbol();
var $201 = Symbol();
var $2032;
var $204 = getRenderContext();
var $205 = Symbol();
var $206;
var $207;
use_events(), use_events_mouse(), use_dom_bind(), use_events_hotkey(), use_events_pointer();
var p2 = console.log;
var state = {
  query: "",
  links: [],
  scored_links: []
};
var config = {
  search_engine: {}
};
globalThis._fuzzyhome_delete_everything = function() {
  var $312, $412;
  if (!window.confirm("This will delete everything. Are you sure?")) {
    return;
  }
  ;
  indexedDB.deleteDatabase("fuzzyhome");
  $312 = localStorage.fuzzyhome_config, delete localStorage.fuzzyhome_config, $312;
  return $412 = localStorage.fuzzyhome_visited, delete localStorage.fuzzyhome_visited, $412;
};
p2("fuzzyhome version " + version);
var AppComponent = class extends Component {
  get $main\u039Einput() {
    let el = createElement("input", null, `eq_af ${this._ns_ || ""} ref--main-input`, null);
    return Object.defineProperty(this, "$main\u039Einput", {value: el}), el;
  }
  [$219]($$ = {}) {
    var $59;
    ($59 = $$.selection_index) !== void 0 && (this.selection_index = $59);
    ($59 = $$.settings_active) !== void 0 && (this.settings_active = $59);
    ($59 = $$.loading) !== void 0 && (this.loading = $59);
    ($59 = $$.fatal_error) !== void 0 && (this.fatal_error = $59);
    ($59 = $$.bang) !== void 0 && (this.bang = $59);
  }
  [$126]($$ = null) {
    var $610;
    super[$126](...arguments);
    this.selection_index = $$ && ($610 = $$.selection_index) !== void 0 ? $610 : 0;
    this.settings_active = $$ && ($610 = $$.settings_active) !== void 0 ? $610 : false;
    this.loading = $$ && ($610 = $$.loading) !== void 0 ? $610 : false;
    this.fatal_error = $$ && ($610 = $$.fatal_error) !== void 0 ? $610 : false;
    this.bang = $$ && ($610 = $$.bang) !== void 0 ? $610 : false;
  }
  get render\u03A6() {
    return this.mounted\u03A6;
  }
  async mount() {
    try {
      await this.reload_db();
      p2(state.links);
    } catch (e) {
      this.err("loading database", e);
      this.fatal_error = true;
      return;
    }
    ;
    if (!globalThis.localStorage.fuzzyhome_visited) {
      this.add_initial_links();
      globalThis.localStorage.fuzzyhome_visited = true;
    }
    ;
    return await this.load_config();
  }
  add_initial_links() {
    this.add_link({name: "click here for help", url: "github.com/familyfriendlymikey/fuzzyhome", frequency: 1});
    this.add_link({name: "google", url: "google.com"});
    this.add_link({name: "youtube", url: "youtube.com"});
    this.add_link({name: "photopea", url: "photopea.com"});
    this.add_link({name: "twitch", url: "twitch.tv"});
    this.add_link({name: "messenger", url: "messenger.com"});
    this.add_link({name: "instagram", url: "instagram.com"});
    return this.add_link({name: "localhost 3000", url: "http://localhost:3000"});
  }
  validate_config() {
    if (!(config == null ? void 0 : config.search_engine.hasOwnProperty("url"))) {
      throw "config error";
    }
    ;
    if (!(config == null ? void 0 : config.search_engine.hasOwnProperty("icon"))) {
      throw "config error";
    }
    ;
    if (!(config == null ? void 0 : config.search_engine.hasOwnProperty("frequency"))) {
      throw "config error";
    }
    ;
  }
  async reset_config() {
    p2("resetting config");
    let url = "https://www.google.com/search?q=";
    let frequency = 0;
    let icon = await this.fetch_image_as_base_64("google.com");
    config.search_engine = {url, icon, frequency};
    return this.save_config();
  }
  save_config() {
    return globalThis.localStorage.fuzzyhome_config = JSON.stringify(config);
  }
  async load_config() {
    try {
      config = JSON.parse(globalThis.localStorage.fuzzyhome_config);
      return this.validate_config();
    } catch ($710) {
      return await this.reset_config();
    }
    ;
  }
  err(s, e) {
    p2(e);
    return window.alert("Error " + s + ":\n\n" + e);
  }
  async reload_db() {
    state.links = await db_default.links.toArray();
    return this.sort_links();
  }
  get can_add() {
    if (this.loading) {
      return false;
    }
    ;
    if (this.settings_active) {
      return false;
    }
    ;
    return this.get_valid_link(state.query);
  }
  sort_links() {
    if (state.query.trim().length > 0) {
      return state.scored_links = fzi_default(state.links, state.query);
    } else {
      return state.scored_links = (0, import_lodash.orderBy)(state.links, "frequency", "desc");
    }
    ;
  }
  async increment_link_frequency(link) {
    try {
      return await db_default.links.update(link.id, {frequency: link.frequency + 1});
    } catch (e) {
      return this.err("putting link", e);
    }
    ;
  }
  toggle_settings() {
    return this.settings_active = !this.settings_active;
  }
  increment_selection_index() {
    return this.selection_index = Math.min(state.scored_links.length - 1, this.selection_index + 1);
  }
  decrement_selection_index() {
    return this.selection_index = Math.max(0, this.selection_index - 1);
  }
  increment_search_engine_frequency() {
    config.search_engine.frequency += 1;
    return this.save_config();
  }
  get encoded_search_query() {
    return "" + config.search_engine.url + window.encodeURIComponent(state.query);
  }
  get encoded_bang_query() {
    return "" + this.bang.url + window.encodeURIComponent(state.query);
  }
  use_search_engine() {
    this.increment_search_engine_frequency();
    return window.location.href = this.encoded_search_query;
  }
  fetch_image_as_base_64(host) {
    let fallback = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAH0lEQVR42mO8seXffwYqAsZRA0cNHDVw1MBRA0eqgQCDRkbJSQHxEQAAAABJRU5ErkJggg==";
    return new Promise(async function(resolve) {
      let res;
      try {
        res = await globalThis.fetch("https://icon.horse/icon/" + host);
      } catch ($810) {
        p2("Failed to get icon from icon horse.");
        resolve(fallback);
        return;
      }
      ;
      let blob = await res.blob();
      let reader = new FileReader();
      reader.onload = function() {
        return resolve(this.result);
      };
      reader.onerror = function() {
        p2("Failed to get data from reader.");
        resolve(fallback);
        return;
      };
      return reader.readAsDataURL(blob);
    });
  }
  get_valid_link(text) {
    text = text.trim();
    if (text === "") {
      return false;
    }
    ;
    let split_text = text.split(/\s+/);
    if (split_text.length < 2) {
      return false;
    }
    ;
    let url = split_text.pop();
    let name = split_text.join(" ");
    return {name, url};
  }
  async add_link({url, name, frequency = 0}) {
    name = name.trim();
    let host;
    try {
      ({href: url, host} = parse_url(url));
    } catch (e) {
      return this.err("parsing url", e);
    }
    ;
    let img = await this.fetch_image_as_base_64(host);
    let id = nanoid();
    let link = {id, name, url, frequency, img};
    try {
      await db_default.links.add(link);
      await this.reload_db();
    } catch (e) {
      this.err("adding link", e);
    }
    ;
    return commit();
  }
  async handle_click_link(link) {
    await this.increment_link_frequency(link);
    return window.location.href = link.url;
  }
  handle_click_search() {
    return this.increment_search_engine_frequency();
  }
  async handle_bang() {
    let url = this.encoded_bang_query;
    await this.increment_link_frequency(this.bang);
    return window.location.href = url;
  }
  handle_click_bang() {
    if (this.bang) {
      return this.handle_bang();
    }
    ;
  }
  async handle_return() {
    if (this.bang) {
      return this.handle_bang();
    } else if (state.scored_links.length < 1) {
      return this.use_search_engine();
    } else {
      let link = state.scored_links[this.selection_index];
      await this.increment_link_frequency(link);
      return window.location.href = link.url;
    }
    ;
  }
  handle_tab() {
    if (this.bang) {
      return this.bang = false;
    }
    ;
    if (state.scored_links.length <= 0) {
      return;
    }
    ;
    state.query = "";
    return this.bang = state.scored_links[this.selection_index];
  }
  handle_click_delete(link) {
    return this.handle_delete(link);
  }
  handle_shift_backspace() {
    if (state.scored_links.length <= 0) {
      return;
    }
    ;
    return this.handle_delete(state.scored_links[this.selection_index]);
  }
  async handle_delete(link) {
    var self2 = this;
    this.loading = true;
    let delete_link = async function() {
      if (!window.confirm("Do you really want to delete " + (link == null ? void 0 : link.name) + "?")) {
        return;
      }
      ;
      try {
        await db_default.links.delete(link.id);
      } catch (e) {
        self2.err("deleting link", e);
      }
      ;
      try {
        await self2.reload_db();
      } catch (e) {
        self2.err("reloading db after successful delete", e);
      }
      ;
      return self2.selection_index = Math.min(self2.selection_index, state.scored_links.length - 1);
    };
    await delete_link();
    return self2.loading = false;
  }
  handle_shift_return() {
    return this.handle_add();
  }
  handle_click_add() {
    return this.handle_add();
  }
  async handle_add() {
    this.loading = true;
    let link = this.get_valid_link(state.query);
    if (!link) {
      this.err("adding link", "Invalid link.");
      return;
    }
    ;
    await this.add_link(link);
    state.query = "";
    this.sort_links();
    return this.loading = false;
  }
  handle_input() {
    this.selection_index = 0;
    return this.sort_links();
  }
  async handle_click_import(e) {
    this.loading = true;
    let id_exists = function(newid) {
      return state.links.some(function({id}) {
        return newid === id;
      });
    };
    let filter = function(table, value, key) {
      return table === "links" && !id_exists(value.id);
    };
    try {
      await this.reload_db();
      await db_default.import(e.target.files[0], {filter});
      await this.reload_db();
    } catch (e2) {
      this.err("importing db", e2);
    }
    ;
    this.settings_active = false;
    return this.loading = false;
  }
  async handle_click_export() {
    this.loading = true;
    let datetime = new Date().toString().split(" ");
    let date = datetime.slice(1, 4).join("-").toLowerCase();
    let time = datetime[4].split(":").join("-");
    let filename = "fuzzyhome_" + date + "_" + time + ".json";
    const blob = await db_default.export({prettyJson: true});
    (0, import_downloadjs.default)(blob, filename, "application/json");
    this.settings_active = false;
    return this.loading = false;
  }
  async handle_click_config() {
    var self2 = this;
    this.loading = true;
    await async function() {
      let input = window.prompt("Please enter the URL of your search engine.");
      if (input === null) {
        return;
      }
      ;
      try {
        var {href: url, host} = parse_url(input);
      } catch (e) {
        return self2.err("changing search engine", e);
      }
      ;
      let icon = await self2.fetch_image_as_base_64(host);
      Object.assign(config.search_engine, {url, icon});
      return self2.save_config();
    }();
    self2.settings_active = false;
    return self2.loading = false;
  }
  handle_click_github() {
    return globalThis.location.href = "https://github.com/familyfriendlymikey/fuzzyhome";
  }
  handle_paste(e) {
    var self2 = this;
    if (state.query.length > 0) {
      return;
    }
    ;
    return globalThis.setTimeout(function() {
      return self2.use_search_engine();
    }, 0);
  }
  get pretty_date() {
    return Date().toString().split(" ").slice(0, 4).join(" ");
  }
  render() {
    var self2 = this, $1042, $147, $159, $165, $97, $1110, $127, $173 = this._ns_ || "", $198, $208, $235, $245, $255, $273, $282, $312, $332, $352, $362, $382, $392, $41, $423, $452, $472, $482, $50, $51, $542, $562, $572, $59, $60, $632, $652, $672, $682, $70, $732, $862, $872, $90, $922, $942, $952, $972, $99, $100, $1022, $1032, $106, $107, $109, $1112, $1122, $1132, $1152, $1162, $1182, $1192, $1212, $1242, $1252, $1272, $131, $1322, $1342, $1352, $1362, $138, $140, $1442, $1452, $1472, $148, $150, $151, $1532, $1562, $1572, $1592, $160, $1622, $1632, $1652, $170, $171, $1732, $175, $176, $177, $179, $180, $1822, $1832, $185, $188, $189, $191, $1982;
    $97 = this;
    $97[$105]();
    ($1110 = $127 = 1, $97[$136] === 1) || ($1110 = $127 = 0, $97[$136] = 1);
    (!$1110 || $127 & 2) && $97.flagSelf$("eq-af");
    $147 = $159 = $165 = null;
    if (this.fatal_error) {
      ($198 = $208 = 1, $147 = $97[$183]) || ($198 = $208 = 0, $97[$183] = $147 = createElement("div", null, `fatal eq_af ${$173}`, "There was an error loading the database.\nThis could be due to a user setting\ndisallowing local storage, or a random error.\nConsider refreshing.\nCheck developer console for more information."));
      $198 || ($147[$2110] = $97);
    } else {
      if (this.settings_active) {
        ($235 = $245 = 1, $147 = $97[$225]) || ($235 = $245 = 0, $97[$225] = $147 = createElement("div", null, `settings-container eq_af ${$173}`, null));
        $235 || ($147[$2110] = $97);
        ($273 = $282 = 1, $255 = $147[$264]) || ($273 = $282 = 0, $147[$264] = $255 = createElement("label", $147, `settings-button eq_af ${$173}`, null));
        $312 = this.loading || void 0, $312 === $147[$303] || ($282 |= 2, $147[$303] = $312);
        $282 & 2 && $255.flag$(`settings-button eq_af ${$173} ` + ($147[$303] ? `disabled` : ""));
        $273 || $255[$323]("IMPORT");
        ($352 = $362 = 1, $332 = $147[$343]) || ($352 = $362 = 0, $147[$343] = $332 = createElement("input", $255, `eq-aj eq_af ${$173}`, null));
        $382 = this.loading, $382 === $147[$372] || ($332.disabled = $147[$372] = $382);
        $352 || $332.on$(`change`, {$_: [function(e, $$) {
          return self2.handle_click_import(e);
        }]}, this);
        $352 || $332.on$(`click`, {$_: [function(e, $$) {
          return this.value = "";
        }]}, this);
        $352 || ($332.type = "file");
        ;
        ;
        ($41 = $423 = 1, $392 = $147[$40]) || ($41 = $423 = 0, $147[$40] = $392 = createElement("div", $147, `settings-button eq_af ${$173}`, "EXPORT"));
        $452 = self2.loading || void 0, $452 === $147[$443] || ($423 |= 2, $147[$443] = $452);
        $472 = $147[$462] || ($147[$462] = {if: [null], $_: [function(e, $$, _2) {
          return _2.handle_click_export(e);
        }, null]});
        $472.if[0] = !self2.loading;
        $472.$_[1] = self2;
        $41 || $392.on$(`click`, $472, this);
        $423 & 2 && $392.flag$(`settings-button eq_af ${$173} ` + ($147[$443] ? `disabled` : ""));
        ;
        ($50 = $51 = 1, $482 = $147[$492]) || ($50 = $51 = 0, $147[$492] = $482 = createElement("div", $147, `settings-button eq_af ${$173}`, "CONFIG"));
        $542 = self2.loading || void 0, $542 === $147[$532] || ($51 |= 2, $147[$532] = $542);
        $562 = $147[$552] || ($147[$552] = {if: [null], $_: [function(e, $$, _2) {
          return _2.handle_click_config(e);
        }, null]});
        $562.if[0] = !self2.loading;
        $562.$_[1] = self2;
        $50 || $482.on$(`click`, $562, this);
        $51 & 2 && $482.flag$(`settings-button eq_af ${$173} ` + ($147[$532] ? `disabled` : ""));
        ;
        ($59 = $60 = 1, $572 = $147[$58]) || ($59 = $60 = 0, $147[$58] = $572 = createElement("div", $147, `settings-button eq_af ${$173}`, "GITHUB"));
        $632 = self2.loading || void 0, $632 === $147[$622] || ($60 |= 2, $147[$622] = $632);
        $652 = $147[$642] || ($147[$642] = {if: [null], $_: [function(e, $$, _2) {
          return _2.handle_click_github(e);
        }, null]});
        $652.if[0] = !self2.loading;
        $652.$_[1] = self2;
        $59 || $572.on$(`click`, $652, this);
        $60 & 2 && $572.flag$(`settings-button eq_af ${$173} ` + ($147[$622] ? `disabled` : ""));
        ;
      } else {
        ($672 = $682 = 1, $147 = $97[$662]) || ($672 = $682 = 0, $97[$662] = ($147 = this.$main\u039Einput, $147[$2110] = null, $147));
        $672 || ($147[$2110] = $97);
        $70 = $147[$69] || ($147[$69] = $147.bind$("data", [null, "query"]));
        $70[0] = state;
        $70 = self2.pretty_date, $70 === $147[$71] || ($147.placeholder = $147[$71] = $70);
        $732 = $147[$722] || ($147[$722] = {options: ["return"], capture: true, $_: [function(e, $$, _2) {
          return _2.handle_return(e);
        }, null]});
        $732.$_[1] = self2;
        $672 || $147.on$(`hotkey`, $732, this);
        $732 = $147[$742] || ($147[$742] = {options: ["shift+return"], capture: true, if: [null], $_: [function(e, $$, _2) {
          return _2.handle_shift_return(e);
        }, null]});
        $732.if[0] = self2.can_add;
        $732.$_[1] = self2;
        $672 || $147.on$(`hotkey`, $732, this);
        $732 = $147[$752] || ($147[$752] = {options: ["shift+backspace"], capture: true, $_: [function(e, $$, _2) {
          return _2.handle_shift_backspace(e);
        }, null]});
        $732.$_[1] = self2;
        $672 || $147.on$(`hotkey`, $732, this);
        $732 = $147[$762] || ($147[$762] = {options: ["down"], capture: true, $_: [function(e, $$, _2) {
          return _2.increment_selection_index(e);
        }, null]});
        $732.$_[1] = self2;
        $672 || $147.on$(`hotkey`, $732, this);
        $732 = $147[$772] || ($147[$772] = {options: ["up"], capture: true, $_: [function(e, $$, _2) {
          return _2.decrement_selection_index(e);
        }, null]});
        $732.$_[1] = self2;
        $672 || $147.on$(`hotkey`, $732, this);
        $732 = $147[$78] || ($147[$78] = {options: ["tab"], capture: true, $_: [function(e, $$, _2) {
          return _2.handle_tab(e);
        }, null]});
        $732.$_[1] = self2;
        $672 || $147.on$(`hotkey`, $732, this);
        $732 = $147[$79] || ($147[$79] = {$_: [function(e, $$, _2) {
          return _2.handle_input(e);
        }, null]});
        $732.$_[1] = self2;
        $672 || $147.on$(`input`, $732, this);
        $732 = $147[$80] || ($147[$80] = {$_: [function(e, $$, _2) {
          return _2.handle_paste(e);
        }, null]});
        $732.$_[1] = self2;
        $672 || $147.on$(`paste`, $732, this);
        $672 || $147.on$(`blur`, {$_: [function(e, $$) {
          return this.focus(e);
        }]}, this);
        $70 = self2.loading || void 0, $70 === $147[$822] || ($682 |= 2, $147[$822] = $70);
        $70 = self2.loading, $70 === $147[$832] || ($147.disabled = $147[$832] = $70);
        $682 & 2 && $147.flag$(`eq_af ${this._ns_ || ""} ref--main-input ` + ($147[$822] ? `disabled` : ""));
        $672 || !$147.setup || $147.setup($682);
        $147[$842]($682);
      }
      ;
      if (state.query.trim().split(/\s+/).length < 2) {
        ($862 = $872 = 1, $159 = $97[$852]) || ($862 = $872 = 0, $97[$852] = $159 = createElement("div", null, `eq-ao middle-button eq_af ${$173}`, "..."));
        $862 || ($159[$2110] = $97);
        $90 = self2.loading || void 0, $90 === $159[$89] || ($872 |= 2, $159[$89] = $90);
        $922 = $159[$91] || ($159[$91] = {if: [null], $_: [function(e, $$, _2) {
          return _2.toggle_settings(e);
        }, null]});
        $922.if[0] = !self2.loading;
        $922.$_[1] = self2;
        $862 || $159.on$(`click`, $922, this);
        $872 & 2 && $159.flag$(`eq-ao middle-button eq_af ${$173} ` + ($159[$89] ? `disabled` : ""));
      } else if (self2.can_add) {
        ($942 = $952 = 1, $159 = $97[$932]) || ($942 = $952 = 0, $97[$932] = $159 = createElement("div", null, `middle-button eq_af ${$173}`, "+"));
        $942 || ($159[$2110] = $97);
        $972 = $159[$96] || ($159[$96] = {$_: [function(e, $$, _2) {
          return _2.handle_click_add(e);
        }, null]});
        $972.$_[1] = self2;
        $942 || $159.on$(`click`, $972, this);
      } else {
        ($99 = $100 = 1, $159 = $97[$98]) || ($99 = $100 = 0, $97[$98] = $159 = createElement("div", null, `middle-button disabled eq_af ${$173}`, "+"));
        $99 || ($159[$2110] = $97);
      }
      ;
      ($1022 = $1032 = 1, $165 = $97[$101]) || ($1022 = $1032 = 0, $97[$101] = $165 = createElement("div", null, `links eq_af ${$173}`, null));
      $1022 || ($165[$2110] = $97);
      $1042 = null;
      if (self2.bang) {
        ($106 = $107 = 1, $1042 = $165[$1052]) || ($106 = $107 = 0, $165[$1052] = $1042 = createElement("a", null, `link selected eq_af ${$173}`, null));
        $106 || ($1042[$2110] = $165);
        $109 = self2.encoded_bang_query, $109 === $1042[$108] || ($1042.href = $1042[$108] = $109);
        $1112 = $1042[$1102] || ($1042[$1102] = {$_: [function(e, $$, _2) {
          return _2.handle_click_bang(e);
        }, null]});
        $1112.$_[1] = self2;
        $106 || $1042.on$(`click`, $1112, this);
        $106 || ($1122 = createElement("div", $1042, `link-left eq_af ${$173}`, null));
        ($1152 = $1162 = 1, $1132 = $1042[$1142]) || ($1152 = $1162 = 0, $1042[$1142] = $1132 = createElement("img", $1122, `link-icon eq_af ${$173}`, null));
        $1182 = self2.bang.img, $1182 === $1042[$1172] || ($1132.src = $1042[$1172] = $1182);
        ;
        ($1192 = $1042[$1202]) || ($1042[$1202] = $1192 = createElement("div", $1122, `eq-av name eq_af ${$173}`, null));
        $1212 = self2.encoded_bang_query, $1212 === $1042[$1232] && $106 || ($1042[$1222] = $1192[$323]($1042[$1232] = $1212, 384, $1042[$1222]));
        ;
        ;
        $106 || ($1242 = createElement("div", $1042, `eq-aw link-right eq_af ${$173}`, null));
        ($1252 = $1042[$1262]) || ($1042[$1262] = $1252 = createElement("div", $1242, `frequency eq_af ${$173}`, null));
        $1272 = self2.bang.frequency, $1272 === $1042[$129] && $106 || ($1042[$128] = $1252[$323]($1042[$129] = $1272, 384, $1042[$128]));
        ;
        ;
      } else if (state.scored_links.length > 0) {
        ($1042 = $165[$130]) || ($165[$130] = $1042 = createIndexedList(0, null));
        $1042[$2110] = $165;
        $131 = 0;
        $1322 = $1042.$;
        for (let index = 0, $1332 = iter$__10(state.scored_links), $168 = $1332.length; index < $168; index++) {
          let link = $1332[index];
          ($1352 = $1362 = 1, $1342 = $1322[$131]) || ($1352 = $1362 = 0, $1322[$131] = $1342 = createElement("a", $1042, `link eq_af ${$173}`, null));
          $1352 || ($1342[$2110] = $1042);
          $138 = link.url, $138 === $1342[$137] || ($1342.href = $1342[$137] = $138);
          $140 = $1342[$139] || ($1342[$139] = {$_: [function(e, $$, _2, _3) {
            return _3.selection_index = _2;
          }, null, null]});
          $140.$_[1] = index;
          $140.$_[2] = self2;
          $1352 || $1342.on$(`pointerover`, $140, this);
          $140 = $1342[$141] || ($1342[$141] = {prevent: true, $_: [function(e, $$, _2, _3) {
            return _3.handle_click_link(_2);
          }, null, null]});
          $140.$_[1] = link;
          $140.$_[2] = self2;
          $1352 || $1342.on$(`click`, $140, this);
          $138 = index == self2.selection_index || void 0, $138 === $1342[$1432] || ($1362 |= 2, $1342[$1432] = $138);
          $1362 & 2 && $1342.flag$(`link eq_af ${$173} ` + ($1342[$1432] ? `selected` : ""));
          $1352 || ($1442 = createElement("div", $1342, `link-left eq_af ${$173}`, null));
          ($1472 = $148 = 1, $1452 = $1342[$1462]) || ($1472 = $148 = 0, $1342[$1462] = $1452 = createElement("img", $1442, `link-icon eq_af ${$173}`, null));
          $150 = link.img, $150 === $1342[$149] || ($1452.src = $1342[$149] = $150);
          ;
          ($151 = $1342[$1522]) || ($1342[$1522] = $151 = createElement("div", $1442, `name eq_af ${$173}`, null));
          $1532 = link.name, $1532 === $1342[$1552] && $1352 || ($1342[$1542] = $151[$323]($1342[$1552] = $1532, 384, $1342[$1542]));
          ;
          ;
          $1352 || ($1562 = createElement("div", $1342, `link-right eq_af ${$173}`, null));
          ($1592 = $160 = 1, $1572 = $1342[$158]) || ($1592 = $160 = 0, $1342[$158] = $1572 = createElement("div", $1562, `delete eq_af ${$173}`, "x"));
          $1622 = $1342[$161] || ($1342[$161] = {prevent: true, stop: true, $_: [function(e, $$, _2, _3) {
            return _3.handle_click_delete(_2);
          }, null, null]});
          $1622.$_[1] = link;
          $1622.$_[2] = self2;
          $1592 || $1572.on$(`click`, $1622, this);
          ;
          ($1632 = $1342[$1642]) || ($1342[$1642] = $1632 = createElement("div", $1562, `frequency eq_af ${$173}`, null));
          $1652 = link.frequency, $1652 === $1342[$167] && $1352 || ($1342[$166] = $1632[$323]($1342[$167] = $1652, 384, $1342[$166]));
          ;
          ;
          $131++;
        }
        ;
        $1042[$842]($131);
      } else {
        ($170 = $171 = 1, $1042 = $165[$169]) || ($170 = $171 = 0, $165[$169] = $1042 = createElement("a", null, `link selected eq_af ${$173}`, null));
        $170 || ($1042[$2110] = $165);
        $1732 = self2.encoded_search_query, $1732 === $1042[$1722] || ($1042.href = $1042[$1722] = $1732);
        $175 = $1042[$174] || ($1042[$174] = {$_: [function(e, $$, _2) {
          return _2.handle_click_search(e);
        }, null]});
        $175.$_[1] = self2;
        $170 || $1042.on$(`click`, $175, this);
        $170 || ($176 = createElement("div", $1042, `link-left eq_af ${$173}`, null));
        ($179 = $180 = 1, $177 = $1042[$178]) || ($179 = $180 = 0, $1042[$178] = $177 = createElement("img", $176, `link-icon eq_af ${$173}`, null));
        $1822 = config.search_engine.icon, $1822 === $1042[$181] || ($177.src = $1042[$181] = $1822);
        ;
        ($1832 = $1042[$184]) || ($1042[$184] = $1832 = createElement("div", $176, `eq-bi name eq_af ${$173}`, null));
        $185 = self2.encoded_search_query, $185 === $1042[$187] && $170 || ($1042[$186] = $1832[$323]($1042[$187] = $185, 384, $1042[$186]));
        ;
        ;
        $170 || ($188 = createElement("div", $1042, `eq-bj link-right eq_af ${$173}`, null));
        ($189 = $1042[$190]) || ($1042[$190] = $189 = createElement("div", $188, `frequency eq_af ${$173}`, null));
        $191 = config.search_engine.frequency, $191 === $1042[$1932] && $170 || ($1042[$1922] = $189[$323]($1042[$1932] = $191, 384, $1042[$1922]));
        ;
        ;
      }
      ;
      $165[$1942] = $165[$323]($1042, 0, $165[$1942]);
    }
    ;
    $97[$195] = $97[$323]($147, 0, $97[$195]);
    $97[$196] = $97[$323]($159, 0, $97[$196]);
    $97[$197] = $97[$323]($165, 0, $97[$197]);
    renderContext.context = $97[$200] || ($97[$200] = {_: $97}), $1982 = self2.$main\u039Einput.focus(), renderContext.context = null, $1982 === $97[$201] && $1110 || ($97[$199] = $97[$323]($97[$201] = $1982, 256, $97[$199]));
    $97[$2022]($127);
    return $97;
  }
};
defineTag("app", AppComponent, {});
mount((($206 = $207 = 1, $2032 = $204[$205]) || ($206 = $207 = 0, $2032 = $204[$205] = $2032 = createComponent("app", null, null, null)), $206 || ($2032[$2110] = $204._), $206 || $204.sym || !$2032.setup || $2032.setup($207), $204.sym || $2032[$842]($207), $2032));
//__FOOT__
