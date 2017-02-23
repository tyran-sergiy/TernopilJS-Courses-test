//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var check = Package.check.check;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Match = Package.check.Match;

/* Package-scope variables */
var MDl;

var require = meteorInstall({"node_modules":{"meteor":{"zodiase:mdl":{"node_modules":{"webcomponents.js":{"MutationObserver.min.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/zodiase_mdl/node_modules/webcomponents.js/MutationObserver.min.js                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/**                                                                                                                   // 1
 * @license                                                                                                           // 2
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.                                               // 3
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt               // 4
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt                                   // 5
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt                         // 6
 * Code distributed by Google as part of the polymer project is also                                                  // 7
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt                             // 8
 */                                                                                                                   // 9
// @version 0.7.23                                                                                                    // 10
"undefined"==typeof WeakMap&&!function(){var e=Object.defineProperty,t=Date.now()%1e9,r=function(){this.name="__st"+(1e9*Math.random()>>>0)+(t++ +"__")};r.prototype={set:function(t,r){var i=t[this.name];return i&&i[0]===t?i[1]=r:e(t,this.name,{value:[t,r],writable:!0}),this},get:function(e){var t;return(t=e[this.name])&&t[0]===e?t[1]:void 0},"delete":function(e){var t=e[this.name];return!(!t||t[0]!==e)&&(t[0]=t[1]=void 0,!0)},has:function(e){var t=e[this.name];return!!t&&t[0]===e}},window.WeakMap=r}(),function(e){function t(e){N.push(e),O||(O=!0,b(i))}function r(e){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(e)||e}function i(){O=!1;var e=N;N=[],e.sort(function(e,t){return e.uid_-t.uid_});var t=!1;e.forEach(function(e){var r=e.takeRecords();n(e),r.length&&(e.callback_(r,e),t=!0)}),t&&i()}function n(e){e.nodes_.forEach(function(t){var r=p.get(t);r&&r.forEach(function(t){t.observer===e&&t.removeTransientObservers()})})}function a(e,t){for(var r=e;r;r=r.parentNode){var i=p.get(r);if(i)for(var n=0;n<i.length;n++){var a=i[n],s=a.options;if(r===e||s.subtree){var o=t(s);o&&a.enqueue(o)}}}}function s(e){this.callback_=e,this.nodes_=[],this.records_=[],this.uid_=++M}function o(e,t){this.type=e,this.target=t,this.addedNodes=[],this.removedNodes=[],this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null}function d(e){var t=new o(e.type,e.target);return t.addedNodes=e.addedNodes.slice(),t.removedNodes=e.removedNodes.slice(),t.previousSibling=e.previousSibling,t.nextSibling=e.nextSibling,t.attributeName=e.attributeName,t.attributeNamespace=e.attributeNamespace,t.oldValue=e.oldValue,t}function u(e,t){return D=new o(e,t)}function h(e){return w?w:(w=d(D),w.oldValue=e,w)}function c(){D=w=void 0}function v(e){return e===w||e===D}function l(e,t){return e===t?e:w&&v(e)?w:null}function f(e,t,r){this.observer=e,this.target=t,this.options=r,this.transientObservedNodes=[]}if(!e.JsMutationObserver){var b,p=new WeakMap;if(/Trident|Edge/.test(navigator.userAgent))b=setTimeout;else if(window.setImmediate)b=window.setImmediate;else{var g=[],m=String(Math.random());window.addEventListener("message",function(e){if(e.data===m){var t=g;g=[],t.forEach(function(e){e()})}}),b=function(e){g.push(e),window.postMessage(m,"*")}}var O=!1,N=[],M=0;s.prototype={observe:function(e,t){if(e=r(e),!t.childList&&!t.attributes&&!t.characterData||t.attributeOldValue&&!t.attributes||t.attributeFilter&&t.attributeFilter.length&&!t.attributes||t.characterDataOldValue&&!t.characterData)throw new SyntaxError;var i=p.get(e);i||p.set(e,i=[]);for(var n,a=0;a<i.length;a++)if(i[a].observer===this){n=i[a],n.removeListeners(),n.options=t;break}n||(n=new f(this,e,t),i.push(n),this.nodes_.push(e)),n.addListeners()},disconnect:function(){this.nodes_.forEach(function(e){for(var t=p.get(e),r=0;r<t.length;r++){var i=t[r];if(i.observer===this){i.removeListeners(),t.splice(r,1);break}}},this),this.records_=[]},takeRecords:function(){var e=this.records_;return this.records_=[],e}};var D,w;f.prototype={enqueue:function(e){var r=this.observer.records_,i=r.length;if(r.length>0){var n=r[i-1],a=l(n,e);if(a)return void(r[i-1]=a)}else t(this.observer);r[i]=e},addListeners:function(){this.addListeners_(this.target)},addListeners_:function(e){var t=this.options;t.attributes&&e.addEventListener("DOMAttrModified",this,!0),t.characterData&&e.addEventListener("DOMCharacterDataModified",this,!0),t.childList&&e.addEventListener("DOMNodeInserted",this,!0),(t.childList||t.subtree)&&e.addEventListener("DOMNodeRemoved",this,!0)},removeListeners:function(){this.removeListeners_(this.target)},removeListeners_:function(e){var t=this.options;t.attributes&&e.removeEventListener("DOMAttrModified",this,!0),t.characterData&&e.removeEventListener("DOMCharacterDataModified",this,!0),t.childList&&e.removeEventListener("DOMNodeInserted",this,!0),(t.childList||t.subtree)&&e.removeEventListener("DOMNodeRemoved",this,!0)},addTransientObserver:function(e){if(e!==this.target){this.addListeners_(e),this.transientObservedNodes.push(e);var t=p.get(e);t||p.set(e,t=[]),t.push(this)}},removeTransientObservers:function(){var e=this.transientObservedNodes;this.transientObservedNodes=[],e.forEach(function(e){this.removeListeners_(e);for(var t=p.get(e),r=0;r<t.length;r++)if(t[r]===this){t.splice(r,1);break}},this)},handleEvent:function(e){switch(e.stopImmediatePropagation(),e.type){case"DOMAttrModified":var t=e.attrName,r=e.relatedNode.namespaceURI,i=e.target,n=new u("attributes",i);n.attributeName=t,n.attributeNamespace=r;var s=e.attrChange===MutationEvent.ADDITION?null:e.prevValue;a(i,function(e){if(e.attributes&&(!e.attributeFilter||!e.attributeFilter.length||e.attributeFilter.indexOf(t)!==-1||e.attributeFilter.indexOf(r)!==-1))return e.attributeOldValue?h(s):n});break;case"DOMCharacterDataModified":var i=e.target,n=u("characterData",i),s=e.prevValue;a(i,function(e){if(e.characterData)return e.characterDataOldValue?h(s):n});break;case"DOMNodeRemoved":this.addTransientObserver(e.target);case"DOMNodeInserted":var o,d,v=e.target;"DOMNodeInserted"===e.type?(o=[v],d=[]):(o=[],d=[v]);var l=v.previousSibling,f=v.nextSibling,n=u("childList",e.target.parentNode);n.addedNodes=o,n.removedNodes=d,n.previousSibling=l,n.nextSibling=f,a(e.relatedNode,function(e){if(e.childList)return n})}c()}},e.JsMutationObserver=s,e.MutationObserver||(e.MutationObserver=s,s._isPolyfilled=!0)}}(self);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"setup.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/zodiase_mdl/setup.js                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// This file prepares variables for the rest of the package.                                                          // 1
if (typeof Package !== 'undefined') {                                                                                 // 2
  // Add an alias. "Lite" is lowercase because I think it's not at the same level at "Material Design".               // 3
  /*global MDl:true*/                                                                                                 // 4
  MDl = {};                                                                                                           // 5
}                                                                                                                     // 6
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"check.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/zodiase_mdl/check.js                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// When the document is loaded, check if MDl is correctly initialized.                                                // 1
if (Meteor.isClient) {                                                                                                // 2
  Meteor.startup(function () {                                                                                        // 3
    check(this, Match.ObjectIncluding({                                                                               // 4
      "settings": Match.Optional(Object),                                                                             // 5
      "componentHandler": Match.Optional(Object)                                                                      // 6
    }), 'Package is corrupted.');                                                                                     // 4
                                                                                                                      //
    if (!this.settings) {                                                                                             // 9
      console.warn("MDl disabled. Create a file named 'zodiase-mdl.json' at the root of the app to enable.");         // 10
    }                                                                                                                 // 11
  }.bind(MDl));                                                                                                       // 12
}                                                                                                                     // 13
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"patch":{"autoUpgrade.js":["babel-runtime/helpers/classCallCheck",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/zodiase_mdl/patch/autoUpgrade.js                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});
// This patch is used for auto-upgrading when DOM is changed by blaze.                                                // 1
// Well, maybe not just blaze.                                                                                        // 2
// But when you are manipulating the DOM by yourself, you should remember to upgrade.                                 // 3
//                                                                                                                    // 4
// Browser compatibility: check https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver                     // 5
// also http://caniuse.com/#search=MutationObserver                                                                   // 6
                                                                                                                      //
/*global MDl:true*/                                                                                                   // 8
                                                                                                                      //
if (Meteor.isClient) {                                                                                                // 10
  (function () {                                                                                                      // 10
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;                                  // 11
    var ObjectHasOwnProperty = Object.prototype.hasOwnProperty;                                                       // 12
                                                                                                                      //
    var AutoUpgrade = function () {                                                                                   // 10
      AutoUpgrade.handleMutation = function () {                                                                      // 10
        function handleMutation(mutation) {                                                                           // 10
          switch (mutation.type) {                                                                                    // 16
            case 'attributes':                                                                                        // 17
              //! Try to upgrade this element.                                                                        // 18
              break;                                                                                                  // 19
            case 'characterData':                                                                                     // 20
              // Ignore character changes.                                                                            // 21
              break;                                                                                                  // 22
            case 'childList':                                                                                         // 23
              // Upgrade the new children.                                                                            // 24
              if (mutation.addedNodes.length > 0 && mutation.target instanceof Element) {                             // 25
                MDl.componentHandler.upgradeElements(mutation.target);                                                // 26
              }                                                                                                       // 27
              break;                                                                                                  // 28
            default:                                                                                                  // 29
              throw new Error('Invalid type of mutation.');                                                           // 30
              break;                                                                                                  // 31
          }                                                                                                           // 16
        }                                                                                                             // 33
                                                                                                                      //
        return handleMutation;                                                                                        // 10
      }();                                                                                                            // 10
                                                                                                                      //
      function AutoUpgrade(MutationObserver) {                                                                        // 34
        _classCallCheck(this, AutoUpgrade);                                                                           // 34
                                                                                                                      //
        this._upgradeStyle = false;                                                                                   // 35
        this._upgradeBehavior = null;                                                                                 // 36
        this._observer = new MutationObserver(this.onMutationObserved.bind(this));                                    // 37
      }                                                                                                               // 38
                                                                                                                      //
      AutoUpgrade.prototype.onMutationObserved = function () {                                                        // 10
        function onMutationObserved(mutations, observer) {                                                            // 10
          if (this._upgradeBehavior) {                                                                                // 40
            this._upgradeBehavior(mutations, observer);                                                               // 41
          }                                                                                                           // 42
        }                                                                                                             // 43
                                                                                                                      //
        return onMutationObserved;                                                                                    // 10
      }();                                                                                                            // 10
                                                                                                                      //
      AutoUpgrade.prototype.setUpgradeStyle = function () {                                                           // 10
        function setUpgradeStyle(style) {                                                                             // 10
          if (ObjectHasOwnProperty.call(AutoUpgrade.upgradeBehaviors, style)) {                                       // 45
            this._upgradeStyle = style;                                                                               // 46
            this._upgradeBehavior = AutoUpgrade.upgradeBehaviors[style];                                              // 47
                                                                                                                      //
            if (style === 'none') {                                                                                   // 49
              this._observer.disconnect();                                                                            // 50
            } else {                                                                                                  // 51
              this._observer.observe(document.body, AutoUpgrade.observeConfig);                                       // 52
            }                                                                                                         // 53
          } else {                                                                                                    // 54
            throw new Error("Invalid upgrade style.");                                                                // 55
          }                                                                                                           // 56
        }                                                                                                             // 57
                                                                                                                      //
        return setUpgradeStyle;                                                                                       // 10
      }();                                                                                                            // 10
                                                                                                                      //
      AutoUpgrade.prototype.getUpgradeStyle = function () {                                                           // 10
        function getUpgradeStyle() {                                                                                  // 10
          return this._upgradeStyle;                                                                                  // 59
        }                                                                                                             // 60
                                                                                                                      //
        return getUpgradeStyle;                                                                                       // 10
      }();                                                                                                            // 10
                                                                                                                      //
      return AutoUpgrade;                                                                                             // 10
    }();                                                                                                              // 10
                                                                                                                      //
    AutoUpgrade.upgradeBehaviors = {                                                                                  // 62
      "fullUpgrade": function () {                                                                                    // 63
        function fullUpgrade(mutations, observer) {                                                                   // 63
          MDl.componentHandler.upgradeAllRegistered();                                                                // 64
        }                                                                                                             // 65
                                                                                                                      //
        return fullUpgrade;                                                                                           // 63
      }(),                                                                                                            // 63
      "mutationOnly": function () {                                                                                   // 66
        function mutationOnly(mutations, observer) {                                                                  // 66
          for (var i = 0, n = mutations.length; i < n; i++) {                                                         // 67
            AutoUpgrade.handleMutation(mutations[i]);                                                                 // 68
          }                                                                                                           // 69
        }                                                                                                             // 70
                                                                                                                      //
        return mutationOnly;                                                                                          // 66
      }(),                                                                                                            // 66
      "none": function () {                                                                                           // 71
        function none(mutations, observer) {}                                                                         // 71
                                                                                                                      //
        return none;                                                                                                  // 71
      }()                                                                                                             // 71
    };                                                                                                                // 62
    AutoUpgrade.observeConfig = {                                                                                     // 73
      childList: true,                                                                                                // 74
      attributes: true,                                                                                               // 75
      characterData: false,                                                                                           // 76
      subtree: true                                                                                                   // 77
      //attributeOldValue: false,                                                                                     // 78
      //characterDataOldValue: false                                                                                  // 79
      //attributeFilter: []                                                                                           // 80
    };                                                                                                                // 73
                                                                                                                      //
    Meteor.startup(function () {                                                                                      // 83
      // Check if settings is loaded.                                                                                 // 84
      if (typeof this.settings === 'undefined') {                                                                     // 85
        return;                                                                                                       // 86
      }                                                                                                               // 87
      //else                                                                                                          // 88
                                                                                                                      //
      // Read settings.                                                                                               // 90
      var upgradeStyle = this.settings.patches.autoUpgrade;                                                           // 91
      // If upgradeStyle is `false`, disable everything.                                                              // 92
      if (upgradeStyle === false) {                                                                                   // 93
        this.autoUpgrade = null;                                                                                      // 94
      } else {                                                                                                        // 95
        // If MutationObserver is not available on this platform, there's little we can do.                           // 96
        if (!MutationObserver) {                                                                                      // 97
          throw new Error("MDl AutoUpgrade doesn't support your current client environment. Please disable it.");     // 98
        } else {                                                                                                      // 99
          this.autoUpgrade = new AutoUpgrade(MutationObserver);                                                       // 100
          this.autoUpgrade.setUpgradeStyle(upgradeStyle);                                                             // 101
        }                                                                                                             // 102
      }                                                                                                               // 103
    }.bind(MDl));                                                                                                     // 104
  })();                                                                                                               // 10
}                                                                                                                     // 105
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}}}},{"extensions":[".js",".json",".scss"]});
require("./node_modules/meteor/zodiase:mdl/node_modules/webcomponents.js/MutationObserver.min.js");
require("./node_modules/meteor/zodiase:mdl/setup.js");
require("./node_modules/meteor/zodiase:mdl/check.js");
require("./node_modules/meteor/zodiase:mdl/patch/autoUpgrade.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['zodiase:mdl'] = {}, {
  MDl: MDl
});

})();
