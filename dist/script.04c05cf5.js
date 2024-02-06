// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/js/script.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var codeEditorBt = document.querySelector('.menu__code_editor');
var communityBt = document.querySelector('.menu__community');
var codeEditorImg = document.querySelector('.menu__code_editor__image');
var communityImg = document.querySelector('.menu__community__image');
var codeEditorSection = document.querySelector('.code_editor');
var communitySection = document.querySelector('.community');
var codeArea = document.querySelector('#code-area');
var highlightButton = document.querySelector('.code__button');
var saveButton = document.querySelector('#save-project');
var language = document.querySelector('#stack-selection');
var background = document.querySelector('#color-selector');
var projectCodeBg = document.querySelector('.code__main');
var projectName = document.querySelector('.details__form__project_name');
var projectDescription = document.querySelector('.details__form__project_description');
var community = document.querySelector('.community');
var profileName = document.querySelector('.profile__name');
var localStoragePosts = JSON.parse(localStorage.getItem('cards'));
var posts = localStorage.getItem('cards') !== null ? localStoragePosts : [];
var updateLocalStorage = function updateLocalStorage() {
  localStorage.setItem('cards', JSON.stringify(posts));
};
codeEditorBt.addEventListener('click', function () {
  codeEditorImg.setAttribute('src', 'https://github.com/HigorStos/alura_desafio-2/blob/main/src/image/code_editor_icon-on.png?raw=true');
  communityImg.setAttribute('src', 'https://github.com/HigorStos/alura_desafio-2/blob/main/src/image/community_icon-off.png?raw=true');
  communitySection.classList.remove('active-community');
  codeEditorSection.classList.add('active-code_editor');
  codeArea.removeAttribute('data-highlighted');
  codeArea.innerText = '';
  projectCodeBg.style.background = '#6BD1FF';
});
communityBt.addEventListener('click', function () {
  codeEditorImg.setAttribute('src', 'https://github.com/HigorStos/alura_desafio-2/blob/main/src/image/code_editor_icon-off.png?raw=true');
  communityImg.setAttribute('src', 'https://github.com/HigorStos/alura_desafio-2/blob/main/src/image/community_icon-on.png?raw=true');
  codeEditorSection.classList.remove('active-code_editor');
  communitySection.classList.add('active-community');
  cardsMap();
});
highlightButton.addEventListener('click', function () {
  var _codeArea$classList;
  codeArea.removeAttribute('data-highlighted');
  (_codeArea$classList = codeArea.classList).remove.apply(_codeArea$classList, _toConsumableArray(codeArea.classList));
  codeArea.classList.add('code__main__black__area');
  codeArea.classList.add("".concat(language.value));
  hljs.highlightElement(codeArea);
});
saveButton.addEventListener('click', function (e) {
  e.preventDefault();
  projectCodeBg.style.backgroundColor = background.value;
  var newPost = {
    code: codeArea.innerHTML,
    name: projectName.value,
    description: projectDescription.value,
    background: background.value,
    profile: {
      name: profileName.innerText
    },
    social: {
      comments: 0,
      likes: 0
    }
  };
  posts.push(newPost);
  updateLocalStorage();
});
function cardsMap() {
  var cardsHtml = '';
  posts.map(function (project) {
    cardsHtml += "\n      <div class=\"community__card\">\n        <div class=\"community__card__bg\" style=\"background-color: ".concat(project.background, ";\">\n          <div class=\"community__card__bg__code\">\n            <img class=\"community__card__bg__code__image\" src=\"https://raw.githubusercontent.com/HigorStos/alura_desafio-2/bdb8f540592aa0d0d3a434acbf4f3b744ec3a41f/src/image/mac_buttons.svg\" alt=\"Mac buttons\">\n            <code class=\"community__card__bg__code__area\">\n              ").concat(project.code, "\n            </code>\n          </div>\n        </div>\n        <div class=\"community__card__content\">\n          <h5 class=\"community__card__content__title\">").concat(project.name, "</h5>\n          <p class=\"community__card__content__desc\">").concat(project.description, "</p>\n        </div>\n        <div class=\"community__card__infos\">\n          <div class=\"community__card__infos__social\">\n            <div class=\"community__card__infos__social__comments\">\n              <img class=\"community__card__infos__social__comments__image\" src=\"https://github.com/HigorStos/alura_desafio-2/blob/main/src/image/comment_icon.png?raw=true\" alt=\"\xCDcone de coment\xE1rios\">\n              <span>").concat(project.social.comments, "</span>\n            </div>\n            <div class=\"community__card__infos__social__likes\">\n              <img class=\"community__card__infos__social__likes__image\" src=\"https://github.com/HigorStos/alura_desafio-2/blob/main/src/image/like_icon.png?raw=true\" alt=\"\xCDcone de likes\">\n              <span class=\"community__card__infos__social__likes__counter\">").concat(project.social.likes, "</span>\n            </div>\n          </div>\n          <div class=\"community__card__infos__profile\">\n            <img src=\"https://github.com/HigorStos/alura_desafio-2/blob/main/src/image/mr_robot.jpg?raw=true\" alt=\"Foto de perfil\">\n            <span>").concat(project.profile.name, "</span>\n          </div>\n        </div>\n      </div>\n    ");
  });
  community.innerHTML = cardsHtml;
}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60498" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/script.js"], null)
//# sourceMappingURL=/script.04c05cf5.js.map