// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ezkf8":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "e2205b50d5b4114f";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"2iQTb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _goBoard = require("./GoBoard");
var _goBoardDefault = parcelHelpers.interopDefault(_goBoard);
const goBoard = new (0, _goBoardDefault.default)();
goBoard.setBoard(5, 5);

},{"./GoBoard":"2ZAlB","@parcel/transformer-js/src/esmodule-helpers.js":"3v9tL"}],"2ZAlB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _stoneGrid = require("./StoneGrid");
var _stoneGridDefault = parcelHelpers.interopDefault(_stoneGrid);
// other.ts
globalThis.turn = "BLACK";
class GoBoard {
    stoneGrid = null;
    constructor(){
        this.boardSizeSelector = document.createElement("select");
        this.boardSizeSelector.id = "boardSizeSelector";
        this.boardSizeSelector.onchange = ()=>this.resetBoard();
        this.boardSizeSelector.appendChild(new Option("5 x 5", "5,5"));
        this.boardSizeSelector.appendChild(new Option("10 x 10", "10,10"));
        this.boardSizeSelector.appendChild(new Option("15 x 15", "15,15"));
        this.boardResetButton = document.createElement("button");
        this.boardResetButton.id = "boardResetButton";
        this.boardResetButton.innerHTML = "Reset Board";
        this.boardResetButton.style.width = "100px";
        this.boardResetButton.onclick = ()=>this.resetBoard();
        this.gameStatus = document.createElement("div");
        this.gameStatus.id = "gameStatus";
        this.boardOptions = document.createElement("div");
        this.boardOptions.classList.add("boardOptions");
        this.boardOptions.appendChild(this.boardResetButton);
        this.boardOptions.appendChild(this.boardSizeSelector);
        this.boardOptions.appendChild(this.gameStatus);
        //this.boardGrid = document.createElement('div')
        //this.boardGrid.classList.add('grid')
        this.boardContainer = document.createElement("div");
        this.boardContainer.id = "board";
        this.boardContainer.classList.add("board");
        this.currentTurn = "BLACK";
        document.getElementById("main")?.append(this.boardOptions, this.boardContainer);
    }
    setBoard(gridWidth, gridHeight) {
        this.stoneGrid = new (0, _stoneGridDefault.default)(gridWidth, gridHeight);
        this.boardContainer.append(this.stoneGrid.element);
    }
    resetBoard() {
        var child = this.boardContainer.lastElementChild;
        while(child){
            this.boardContainer.removeChild(child);
            child = this.boardContainer.lastElementChild;
        }
        let arr = this.boardSizeSelector.value.split(",").map(Number);
        this.setBoard(arr[0], arr[1]);
    }
}
exports.default = GoBoard;

},{"./StoneGrid":"6mnPV","@parcel/transformer-js/src/esmodule-helpers.js":"3v9tL"}],"6mnPV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _row = require("./Row");
var _rowDefault = parcelHelpers.interopDefault(_row);
class StoneMap {
    selectedStones = [];
    gridSize = 0;
    gridWidth = 0;
    gridHeight = 0;
    colSequence = "";
    rowSequence = "";
    constructor(gridWidth, gridHeight){
        this.gridSize = gridWidth * gridHeight;
        this.gridWidth = gridWidth;
        this.gridWidth = gridHeight;
        // Create a string sequence to compare against stone positions.
        // This will allow code to check if there is a winner (5 in a column)
        for(let i = 0; i < gridWidth; i++)this.colSequence += i + 10;
        // Same for rows
        for(let i1 = 0; i1 < gridHeight; i1++)this.rowSequence += i1 + 10;
        this.rows = Array.from({
            length: gridHeight
        }).map((_, index)=>{
            return new (0, _rowDefault.default)(index, gridWidth);
        });
        this.element = document.createElement("div");
        this.element.classList.add("stone-map");
        this.element.append(...this.rows.map((row)=>row.element));
        this.element.addEventListener("click", (event)=>{
            this.checkForWinner();
        });
    }
    checkForWinner() {
        let winner = this.checkRowsForWinner();
        if (winner !== "") {
            alert(winner);
            globalThis.endGame = true;
            const gameStatus = document.getElementById("gameStatus");
            gameStatus.innerHTML = "GAME ENDED: " + winner;
        }
        winner = this.checkColsForWinner();
        console.log("colWinner: " + winner);
        if (winner !== "") {
            alert(winner);
            globalThis.endGame = true;
            const gameStatus = document.getElementById("gameStatus");
            gameStatus.innerHTML = "GAME ENDED: " + winner;
        }
    }
    createCols() {
        for(let i = 0; i < this.gridWidth; i++)for(let i2 = 0; i2 < this.gridWidth; i2++)this.colSequence += i2 + 10;
    }
    checkColsForWinner() {
        let colArrayWhite = [];
        let colArrayBlack = [];
        let colSequence = this.colSequence;
        let gridWidth = this.gridWidth;
        let currentStone = "";
        let winner = "";
        for(let i = 10; i < gridWidth + 10; i++){
            // check each row (by column index for stones to add to array)
            this.rows.forEach(function(value) {
                // white stones
                currentStone = value.columnWhiteStones(i);
                if (currentStone !== "") colArrayWhite.push(currentStone);
                // black stones
                currentStone = value.columnBlackStones(i);
                if (currentStone !== "") colArrayBlack.push(currentStone);
            });
            // if the array length is greater than 5 and the sequence matches the column sequence
            // then we have a winner (WHITE)
            if (colArrayWhite.length >= 5) {
                if (colSequence.indexOf(colArrayWhite.join("")) >= 0) winner = "WHITE WON";
            }
            if (colArrayBlack.length >= 5) {
                if (colSequence.indexOf(colArrayBlack.join("")) >= 0) winner = "BLACK WON";
            }
        }
        return winner;
    }
    checkRowsForWinner() {
        const colSequence = this.colSequence;
        let stoneCount = 0;
        let winner = "";
        this.rows.forEach(function(value) {
            const whiteStones = value.whiteStoneIds;
            stoneCount += whiteStones.length;
            if (whiteStones.length >= 10) {
                if (colSequence.indexOf(whiteStones) >= 0) winner = "WHITE WON";
            }
            const blackStones = value.blackStoneIds;
            stoneCount += blackStones.length;
            if (blackStones.length >= 10) {
                if (colSequence.indexOf(blackStones) >= 0) winner = "BLACK WON";
            }
        });
        stoneCount = stoneCount / 2;
        if (winner == "" && stoneCount === this.gridSize) winner = "GAME IS A DRAW";
        return winner;
    }
}
exports.default = StoneMap;

},{"./Row":"2Dfne","@parcel/transformer-js/src/esmodule-helpers.js":"3v9tL"}],"2Dfne":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _stone = require("./Stone");
var _stoneDefault = parcelHelpers.interopDefault(_stone);
class Row {
    constructor(rowId, rowWidth){
        this.id = rowId;
        this.rowStones = Array.from({
            length: rowWidth
        }).map((_, index)=>{
            const stoneId = rowWidth * rowId + index;
            let newStone = new (0, _stoneDefault.default)(index, rowId);
            //this.colStones.push(newStone)
            return newStone;
        });
        this.element = document.createElement("div");
        this.element.classList.add("row");
        this.element.append(...this.rowStones.map((stone)=>stone.element));
    }
    columnWhiteStones(colId) {
        return this.rowStones.filter((stone)=>stone.colId == colId && stone.isWhite).map((stone)=>stone.rowId).toString();
    }
    columnBlackStones(colId) {
        return this.rowStones.filter((stone)=>stone.colId == colId && stone.isBlack).map((stone)=>stone.rowId).toString();
    }
    get whiteStoneIds() {
        return this.rowStones.filter((stone)=>stone.isWhite).map((stone)=>stone.colId).join("");
    }
    get blackStoneIds() {
        return this.rowStones.filter((stone)=>stone.isBlack).map((stone)=>stone.colId).join("");
    }
}
exports.default = Row;

},{"./Stone":"hYPhx","@parcel/transformer-js/src/esmodule-helpers.js":"3v9tL"}],"hYPhx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let STATUS;
(function(STATUS1) {
    STATUS1["AVAILABLE"] = "AVAILABLE";
    STATUS1["TAKEN"] = "TAKEN";
    STATUS1["WHITE"] = "WHITE";
    STATUS1["BLACK"] = "BLACK";
})(STATUS || (STATUS = {}));
class Stone {
    constructor(id, rowId, isOccupied = false){
        this.id = 10 + id + ":" + (10 + rowId);
        this.rowId = 10 + rowId;
        this.colId = 10 + id;
        this.status = STATUS.AVAILABLE;
        this.element = document.createElement("div");
        this.element.id = this.id;
        this.element.classList.add("stone");
        this.element.classList.add(this.status.toLowerCase());
        this.element.addEventListener("click", ()=>{
            this.handleClick();
        });
    //console.log("colId: " + this.colId)
    }
    handleClick() {
        if (this.status === STATUS.WHITE || this.status === STATUS.BLACK || globalThis.endGame === true) return;
        this.element.classList.remove(this.status.toLowerCase());
        this.element.classList.add(globalThis.turn.toLowerCase());
        if (globalThis.turn == "WHITE") {
            this.status = STATUS.WHITE;
            globalThis.turn = "BLACK";
        } else {
            this.status = STATUS.BLACK;
            globalThis.turn = "WHITE";
        }
        const gameStatus = document.getElementById("gameStatus");
        gameStatus.innerHTML = "ACTIVE PLAYER: " + globalThis.turn;
    }
    get isSelected() {
        return this.status === STATUS.WHITE;
    }
    get isWhite() {
        return this.status === STATUS.WHITE;
    }
    get isBlack() {
        return this.status === STATUS.BLACK;
    }
}
exports.default = Stone;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3v9tL"}],"3v9tL":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["ezkf8","2iQTb"], "2iQTb", "parcelRequire45de")

//# sourceMappingURL=index.d5b4114f.js.map
