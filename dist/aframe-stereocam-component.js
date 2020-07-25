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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* global AFRAME */\n\nif (typeof AFRAME === \"undefined\") {\n  throw new Error(\n    \"Component attempted to register before AFRAME was available.\"\n  );\n}\n\n/**\n * This component should be attached to an <a-camera> entity. It hunts for a\n * THREE.PerspectiveCamera and modifies the layers it can see.\n *\n * - If 'eye' is 'left': the first layer is enabled i.e. camera.layers.enable(1)\n * - If 'eye' is 'right': the second layer is enabled i.e. camera.layers.enable(2)\n * - If 'eye' is 'both': both layers are enabled\n *\n * Why is this useful? In VR, sometimes you want to show things to one eye but\n * not the other (stereo panoramas for instance). This can be done by restricting\n * an Object3D to either layer 1 (visible to the left eye) or layer 2 (visible\n * to the right eye) [0]. Nothing wrong with this except that outside of VR the\n * camera can only see layer 0. By enabling layer 1 and/or 2, this component\n * ensures objects are visible outside of VR.\n *\n * This component is based on oscarmarinmiro's stereo component [1].\n *\n * ---\n *  [0] - This is done by THREE.js's WebXRManager\n *   https://github.com/mrdoob/three.js/blob/0950e5b6e8bceb520c154f45b5c240af45f0ed11/src/renderers/webxr/WebXRManager.js#L41\n *  [1] - https://github.com/oscarmarinmiro/aframe-stereo-component\n */\nAFRAME.registerComponent(\"stereocam\", {\n  schema: {\n    eye: { type: \"string\", default: \"left\" },\n  },\n\n  update: function (oldData) {\n    const data = this.data;\n    const el = this.el;\n\n    const camera = el.object3D.children.find(\n      (c) => c.type === \"PerspectiveCamera\"\n    );\n\n    if (!camera) {\n      console.warn(\"stereocam could not find PerspectiveCamera\");\n      return;\n    }\n\n    if (data.eye === \"both\") {\n      camera.layers.enable(1);\n      camera.layers.enable(2);\n    } else {\n      camera.layers.set(data.eye === \"left\" ? 1 : 2);\n      camera.layers.enable(0);\n    }\n  },\n});\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });