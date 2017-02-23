var require = meteorInstall({"imports":{"ui":{"layouts":{"MainLayout.html":["./template.MainLayout.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/layouts/MainLayout.html                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.MainLayout.js");                                                                  // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.MainLayout.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/layouts/template.MainLayout.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("MainLayout");                                                                                    // 2
Template["MainLayout"] = new Template("Template.MainLayout", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return HTML.Raw('<body>\n\n  <!-- Always shows a header, even in smaller screens. -->\n  <div class="demo-layout-waterfall mdl-layout mdl-js-layout box">\n  <header class="mdl-layout__header mdl-layout__header--waterfall">\n    <!-- Top row, always visible -->\n    <div class="mdl-layout__header-row ">\n\n        <div class="mdl-layout-spacer"></div>\n      <!-- Title -->\n      <span class="mdl-layout-title">Without\n      <img src="logo.png" width="60" height="60" alt="">\n       Destination</span>\n\n        <div class="mdl-layout-spacer"></div>\n\n    </div>\n    <!-- Bottom row, not visible on scroll -->\n    <div class="mdl-layout__header-row">\n      <div class="mdl-layout-spacer"></div>\n      <!-- Navigation -->\n      <nav class="mdl-navigation">\n        <a class="mdl-navigation__link hvr-hollow" href="">My trips</a>\n        <a class="mdl-navigation__link " href="">Awesome sorting</a>\n        <a class="mdl-navigation__link " href="">About me</a>\n      </nav>\n\n        <div class="mdl-layout-spacer"></div>\n    </div>\n  </header>\n    <div class="billboard">\n      <h3>“One’s destination is never a place, but always a new way of seeing things.”</h3>\n      <h5>- Henry Miller</h5>\n    </div>\n\n  <div class="row content bg">\n  </div>\n\n\n  </div>\n\n\n  </body>');
}));                                                                                                                   // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"startup":{"client":{"index.js":["./routes.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/startup/client/index.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.import('./routes.js');                                                                                          // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"routes.js":["meteor/kadira:flow-router","meteor/kadira:blaze-layout","../../ui/layouts/MainLayout.html",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/startup/client/routes.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var FlowRouter;module.import('meteor/kadira:flow-router',{"FlowRouter":function(v){FlowRouter=v}});var BlazeLayout;module.import('meteor/kadira:blaze-layout',{"BlazeLayout":function(v){BlazeLayout=v}});module.import('../../ui/layouts/MainLayout.html');
                                                                                                                       // 2
                                                                                                                       //
                                                                                                                       // 4
                                                                                                                       //
FlowRouter.route('/', {                                                                                                // 6
  name: 'Home',                                                                                                        // 7
  action: function () {                                                                                                // 8
    function action() {                                                                                                // 6
      BlazeLayout.render('MainLayout');                                                                                // 9
    }                                                                                                                  // 10
                                                                                                                       //
    return action;                                                                                                     // 6
  }()                                                                                                                  // 6
});                                                                                                                    // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}},"client":{"main.js":["/imports/startup/client",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/main.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.import('/imports/startup/client');                                                                              // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".css"]});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/settings-file-checked.generated.js                                                                       //
// This file is in bare mode and is not in its own closure.                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
MDl.settings = JSON.parse(decodeURI("%7B%22jsLib%22:%7B%22minified%22:false%7D,%22theme%22:%7B%22primary%22:%22blue_grey%22,%22accent%22:%22lime%22%7D,%22patches%22:%7B%22autoUpgrade%22:%22fullUpgrade%22%7D,%22verbose%22:false%7D"));
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/dist/material.js                                                                                         //
// This file is in bare mode and is not in its own closure.                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
;(function() {                                                                                                         // 1
"use strict";                                                                                                          // 2
                                                                                                                       // 3
/**                                                                                                                    // 4
 * @license                                                                                                            // 5
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 6
 *                                                                                                                     // 7
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 8
 * you may not use this file except in compliance with the License.                                                    // 9
 * You may obtain a copy of the License at                                                                             // 10
 *                                                                                                                     // 11
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 12
 *                                                                                                                     // 13
 * Unless required by applicable law or agreed to in writing, software                                                 // 14
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 15
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 16
 * See the License for the specific language governing permissions and                                                 // 17
 * limitations under the License.                                                                                      // 18
 */                                                                                                                    // 19
                                                                                                                       // 20
/**                                                                                                                    // 21
 * A component handler interface using the revealing module design pattern.                                            // 22
 * More details on this design pattern here:                                                                           // 23
 * https://github.com/jasonmayes/mdl-component-design-pattern                                                          // 24
 *                                                                                                                     // 25
 * @author Jason Mayes.                                                                                                // 26
 */                                                                                                                    // 27
/* exported componentHandler */                                                                                        // 28
                                                                                                                       // 29
// Pre-defining the componentHandler interface, for closure documentation and                                          // 30
// static verification.                                                                                                // 31
var componentHandler = {                                                                                               // 32
  /**                                                                                                                  // 33
   * Searches existing DOM for elements of our component type and upgrades them                                        // 34
   * if they have not already been upgraded.                                                                           // 35
   *                                                                                                                   // 36
   * @param {string=} optJsClass the programatic name of the element class we                                          // 37
   * need to create a new instance of.                                                                                 // 38
   * @param {string=} optCssClass the name of the CSS class elements of this                                           // 39
   * type will have.                                                                                                   // 40
   */                                                                                                                  // 41
  upgradeDom: function(optJsClass, optCssClass) {},                                                                    // 42
  /**                                                                                                                  // 43
   * Upgrades a specific element rather than all in the DOM.                                                           // 44
   *                                                                                                                   // 45
   * @param {!Element} element The element we wish to upgrade.                                                         // 46
   * @param {string=} optJsClass Optional name of the class we want to upgrade                                         // 47
   * the element to.                                                                                                   // 48
   */                                                                                                                  // 49
  upgradeElement: function(element, optJsClass) {},                                                                    // 50
  /**                                                                                                                  // 51
   * Upgrades a specific list of elements rather than all in the DOM.                                                  // 52
   *                                                                                                                   // 53
   * @param {!Element|!Array<!Element>|!NodeList|!HTMLCollection} elements                                             // 54
   * The elements we wish to upgrade.                                                                                  // 55
   */                                                                                                                  // 56
  upgradeElements: function(elements) {},                                                                              // 57
  /**                                                                                                                  // 58
   * Upgrades all registered components found in the current DOM. This is                                              // 59
   * automatically called on window load.                                                                              // 60
   */                                                                                                                  // 61
  upgradeAllRegistered: function() {},                                                                                 // 62
  /**                                                                                                                  // 63
   * Allows user to be alerted to any upgrades that are performed for a given                                          // 64
   * component type                                                                                                    // 65
   *                                                                                                                   // 66
   * @param {string} jsClass The class name of the MDL component we wish                                               // 67
   * to hook into for any upgrades performed.                                                                          // 68
   * @param {function(!HTMLElement)} callback The function to call upon an                                             // 69
   * upgrade. This function should expect 1 parameter - the HTMLElement which                                          // 70
   * got upgraded.                                                                                                     // 71
   */                                                                                                                  // 72
  registerUpgradedCallback: function(jsClass, callback) {},                                                            // 73
  /**                                                                                                                  // 74
   * Registers a class for future use and attempts to upgrade existing DOM.                                            // 75
   *                                                                                                                   // 76
   * @param {componentHandler.ComponentConfigPublic} config the registration configuration                             // 77
   */                                                                                                                  // 78
  register: function(config) {},                                                                                       // 79
  /**                                                                                                                  // 80
   * Downgrade either a given node, an array of nodes, or a NodeList.                                                  // 81
   *                                                                                                                   // 82
   * @param {!Node|!Array<!Node>|!NodeList} nodes                                                                      // 83
   */                                                                                                                  // 84
  downgradeElements: function(nodes) {}                                                                                // 85
};                                                                                                                     // 86
                                                                                                                       // 87
componentHandler = (function() {                                                                                       // 88
  'use strict';                                                                                                        // 89
                                                                                                                       // 90
  /** @type {!Array<componentHandler.ComponentConfig>} */                                                              // 91
  var registeredComponents_ = [];                                                                                      // 92
                                                                                                                       // 93
  /** @type {!Array<componentHandler.Component>} */                                                                    // 94
  var createdComponents_ = [];                                                                                         // 95
                                                                                                                       // 96
  var componentConfigProperty_ = 'mdlComponentConfigInternal_';                                                        // 97
                                                                                                                       // 98
  /**                                                                                                                  // 99
   * Searches registered components for a class we are interested in using.                                            // 100
   * Optionally replaces a match with passed object if specified.                                                      // 101
   *                                                                                                                   // 102
   * @param {string} name The name of a class we want to use.                                                          // 103
   * @param {componentHandler.ComponentConfig=} optReplace Optional object to replace match with.                      // 104
   * @return {!Object|boolean}                                                                                         // 105
   * @private                                                                                                          // 106
   */                                                                                                                  // 107
  function findRegisteredClass_(name, optReplace) {                                                                    // 108
    for (var i = 0; i < registeredComponents_.length; i++) {                                                           // 109
      if (registeredComponents_[i].className === name) {                                                               // 110
        if (typeof optReplace !== 'undefined') {                                                                       // 111
          registeredComponents_[i] = optReplace;                                                                       // 112
        }                                                                                                              // 113
        return registeredComponents_[i];                                                                               // 114
      }                                                                                                                // 115
    }                                                                                                                  // 116
    return false;                                                                                                      // 117
  }                                                                                                                    // 118
                                                                                                                       // 119
  /**                                                                                                                  // 120
   * Returns an array of the classNames of the upgraded classes on the element.                                        // 121
   *                                                                                                                   // 122
   * @param {!Element} element The element to fetch data from.                                                         // 123
   * @return {!Array<string>}                                                                                          // 124
   * @private                                                                                                          // 125
   */                                                                                                                  // 126
  function getUpgradedListOfElement_(element) {                                                                        // 127
    var dataUpgraded = element.getAttribute('data-upgraded');                                                          // 128
    // Use `['']` as default value to conform the `,name,name...` style.                                               // 129
    return dataUpgraded === null ? [''] : dataUpgraded.split(',');                                                     // 130
  }                                                                                                                    // 131
                                                                                                                       // 132
  /**                                                                                                                  // 133
   * Returns true if the given element has already been upgraded for the given                                         // 134
   * class.                                                                                                            // 135
   *                                                                                                                   // 136
   * @param {!Element} element The element we want to check.                                                           // 137
   * @param {string} jsClass The class to check for.                                                                   // 138
   * @returns {boolean}                                                                                                // 139
   * @private                                                                                                          // 140
   */                                                                                                                  // 141
  function isElementUpgraded_(element, jsClass) {                                                                      // 142
    var upgradedList = getUpgradedListOfElement_(element);                                                             // 143
    return upgradedList.indexOf(jsClass) !== -1;                                                                       // 144
  }                                                                                                                    // 145
                                                                                                                       // 146
  /**                                                                                                                  // 147
   * Create an event object.                                                                                           // 148
   *                                                                                                                   // 149
   * @param {string} eventType The type name of the event.                                                             // 150
   * @param {boolean} bubbles Whether the event should bubble up the DOM.                                              // 151
   * @param {boolean} cancelable Whether the event can be canceled.                                                    // 152
   * @returns {!Event}                                                                                                 // 153
   */                                                                                                                  // 154
  function createEvent_(eventType, bubbles, cancelable) {                                                              // 155
    if ('CustomEvent' in window && typeof window.CustomEvent === 'function') {                                         // 156
      return new CustomEvent(eventType, {                                                                              // 157
        bubbles: bubbles,                                                                                              // 158
        cancelable: cancelable                                                                                         // 159
      });                                                                                                              // 160
    } else {                                                                                                           // 161
      var ev = document.createEvent('Events');                                                                         // 162
      ev.initEvent(eventType, bubbles, cancelable);                                                                    // 163
      return ev;                                                                                                       // 164
    }                                                                                                                  // 165
  }                                                                                                                    // 166
                                                                                                                       // 167
  /**                                                                                                                  // 168
   * Searches existing DOM for elements of our component type and upgrades them                                        // 169
   * if they have not already been upgraded.                                                                           // 170
   *                                                                                                                   // 171
   * @param {string=} optJsClass the programatic name of the element class we                                          // 172
   * need to create a new instance of.                                                                                 // 173
   * @param {string=} optCssClass the name of the CSS class elements of this                                           // 174
   * type will have.                                                                                                   // 175
   */                                                                                                                  // 176
  function upgradeDomInternal(optJsClass, optCssClass) {                                                               // 177
    if (typeof optJsClass === 'undefined' &&                                                                           // 178
        typeof optCssClass === 'undefined') {                                                                          // 179
      for (var i = 0; i < registeredComponents_.length; i++) {                                                         // 180
        upgradeDomInternal(registeredComponents_[i].className,                                                         // 181
            registeredComponents_[i].cssClass);                                                                        // 182
      }                                                                                                                // 183
    } else {                                                                                                           // 184
      var jsClass = /** @type {string} */ (optJsClass);                                                                // 185
      if (typeof optCssClass === 'undefined') {                                                                        // 186
        var registeredClass = findRegisteredClass_(jsClass);                                                           // 187
        if (registeredClass) {                                                                                         // 188
          optCssClass = registeredClass.cssClass;                                                                      // 189
        }                                                                                                              // 190
      }                                                                                                                // 191
                                                                                                                       // 192
      var elements = document.querySelectorAll('.' + optCssClass);                                                     // 193
      for (var n = 0; n < elements.length; n++) {                                                                      // 194
        upgradeElementInternal(elements[n], jsClass);                                                                  // 195
      }                                                                                                                // 196
    }                                                                                                                  // 197
  }                                                                                                                    // 198
                                                                                                                       // 199
  /**                                                                                                                  // 200
   * Upgrades a specific element rather than all in the DOM.                                                           // 201
   *                                                                                                                   // 202
   * @param {!Element} element The element we wish to upgrade.                                                         // 203
   * @param {string=} optJsClass Optional name of the class we want to upgrade                                         // 204
   * the element to.                                                                                                   // 205
   */                                                                                                                  // 206
  function upgradeElementInternal(element, optJsClass) {                                                               // 207
    // Verify argument type.                                                                                           // 208
    if (!(typeof element === 'object' && element instanceof Element)) {                                                // 209
      throw new Error('Invalid argument provided to upgrade MDL element.');                                            // 210
    }                                                                                                                  // 211
    // Allow upgrade to be canceled by canceling emitted event.                                                        // 212
    var upgradingEv = createEvent_('mdl-componentupgrading', true, true);                                              // 213
    element.dispatchEvent(upgradingEv);                                                                                // 214
    if (upgradingEv.defaultPrevented) {                                                                                // 215
      return;                                                                                                          // 216
    }                                                                                                                  // 217
                                                                                                                       // 218
    var upgradedList = getUpgradedListOfElement_(element);                                                             // 219
    var classesToUpgrade = [];                                                                                         // 220
    // If jsClass is not provided scan the registered components to find the                                           // 221
    // ones matching the element's CSS classList.                                                                      // 222
    if (!optJsClass) {                                                                                                 // 223
      var classList = element.classList;                                                                               // 224
      registeredComponents_.forEach(function(component) {                                                              // 225
        // Match CSS & Not to be upgraded & Not upgraded.                                                              // 226
        if (classList.contains(component.cssClass) &&                                                                  // 227
            classesToUpgrade.indexOf(component) === -1 &&                                                              // 228
            !isElementUpgraded_(element, component.className)) {                                                       // 229
          classesToUpgrade.push(component);                                                                            // 230
        }                                                                                                              // 231
      });                                                                                                              // 232
    } else if (!isElementUpgraded_(element, optJsClass)) {                                                             // 233
      classesToUpgrade.push(findRegisteredClass_(optJsClass));                                                         // 234
    }                                                                                                                  // 235
                                                                                                                       // 236
    // Upgrade the element for each classes.                                                                           // 237
    for (var i = 0, n = classesToUpgrade.length, registeredClass; i < n; i++) {                                        // 238
      registeredClass = classesToUpgrade[i];                                                                           // 239
      if (registeredClass) {                                                                                           // 240
        // Mark element as upgraded.                                                                                   // 241
        upgradedList.push(registeredClass.className);                                                                  // 242
        element.setAttribute('data-upgraded', upgradedList.join(','));                                                 // 243
        var instance = new registeredClass.classConstructor(element);                                                  // 244
        instance[componentConfigProperty_] = registeredClass;                                                          // 245
        createdComponents_.push(instance);                                                                             // 246
        // Call any callbacks the user has registered with this component type.                                        // 247
        for (var j = 0, m = registeredClass.callbacks.length; j < m; j++) {                                            // 248
          registeredClass.callbacks[j](element);                                                                       // 249
        }                                                                                                              // 250
                                                                                                                       // 251
        if (registeredClass.widget) {                                                                                  // 252
          // Assign per element instance for control over API                                                          // 253
          element[registeredClass.className] = instance;                                                               // 254
        }                                                                                                              // 255
      } else {                                                                                                         // 256
        throw new Error(                                                                                               // 257
          'Unable to find a registered component for the given class.');                                               // 258
      }                                                                                                                // 259
                                                                                                                       // 260
      var upgradedEv = createEvent_('mdl-componentupgraded', true, false);                                             // 261
      element.dispatchEvent(upgradedEv);                                                                               // 262
    }                                                                                                                  // 263
  }                                                                                                                    // 264
                                                                                                                       // 265
  /**                                                                                                                  // 266
   * Upgrades a specific list of elements rather than all in the DOM.                                                  // 267
   *                                                                                                                   // 268
   * @param {!Element|!Array<!Element>|!NodeList|!HTMLCollection} elements                                             // 269
   * The elements we wish to upgrade.                                                                                  // 270
   */                                                                                                                  // 271
  function upgradeElementsInternal(elements) {                                                                         // 272
    if (!Array.isArray(elements)) {                                                                                    // 273
      if (elements instanceof Element) {                                                                               // 274
        elements = [elements];                                                                                         // 275
      } else {                                                                                                         // 276
        elements = Array.prototype.slice.call(elements);                                                               // 277
      }                                                                                                                // 278
    }                                                                                                                  // 279
    for (var i = 0, n = elements.length, element; i < n; i++) {                                                        // 280
      element = elements[i];                                                                                           // 281
      if (element instanceof HTMLElement) {                                                                            // 282
        upgradeElementInternal(element);                                                                               // 283
        if (element.children.length > 0) {                                                                             // 284
          upgradeElementsInternal(element.children);                                                                   // 285
        }                                                                                                              // 286
      }                                                                                                                // 287
    }                                                                                                                  // 288
  }                                                                                                                    // 289
                                                                                                                       // 290
  /**                                                                                                                  // 291
   * Registers a class for future use and attempts to upgrade existing DOM.                                            // 292
   *                                                                                                                   // 293
   * @param {componentHandler.ComponentConfigPublic} config                                                            // 294
   */                                                                                                                  // 295
  function registerInternal(config) {                                                                                  // 296
    // In order to support both Closure-compiled and uncompiled code accessing                                         // 297
    // this method, we need to allow for both the dot and array syntax for                                             // 298
    // property access. You'll therefore see the `foo.bar || foo['bar']`                                               // 299
    // pattern repeated across this method.                                                                            // 300
    var widgetMissing = (typeof config.widget === 'undefined' &&                                                       // 301
        typeof config['widget'] === 'undefined');                                                                      // 302
    var widget = true;                                                                                                 // 303
                                                                                                                       // 304
    if (!widgetMissing) {                                                                                              // 305
      widget = config.widget || config['widget'];                                                                      // 306
    }                                                                                                                  // 307
                                                                                                                       // 308
    var newConfig = /** @type {componentHandler.ComponentConfig} */ ({                                                 // 309
      classConstructor: config.constructor || config['constructor'],                                                   // 310
      className: config.classAsString || config['classAsString'],                                                      // 311
      cssClass: config.cssClass || config['cssClass'],                                                                 // 312
      widget: widget,                                                                                                  // 313
      callbacks: []                                                                                                    // 314
    });                                                                                                                // 315
                                                                                                                       // 316
    registeredComponents_.forEach(function(item) {                                                                     // 317
      if (item.cssClass === newConfig.cssClass) {                                                                      // 318
        throw new Error('The provided cssClass has already been registered: ' + item.cssClass);                        // 319
      }                                                                                                                // 320
      if (item.className === newConfig.className) {                                                                    // 321
        throw new Error('The provided className has already been registered');                                         // 322
      }                                                                                                                // 323
    });                                                                                                                // 324
                                                                                                                       // 325
    if (config.constructor.prototype                                                                                   // 326
        .hasOwnProperty(componentConfigProperty_)) {                                                                   // 327
      throw new Error(                                                                                                 // 328
          'MDL component classes must not have ' + componentConfigProperty_ +                                          // 329
          ' defined as a property.');                                                                                  // 330
    }                                                                                                                  // 331
                                                                                                                       // 332
    var found = findRegisteredClass_(config.classAsString, newConfig);                                                 // 333
                                                                                                                       // 334
    if (!found) {                                                                                                      // 335
      registeredComponents_.push(newConfig);                                                                           // 336
    }                                                                                                                  // 337
  }                                                                                                                    // 338
                                                                                                                       // 339
  /**                                                                                                                  // 340
   * Allows user to be alerted to any upgrades that are performed for a given                                          // 341
   * component type                                                                                                    // 342
   *                                                                                                                   // 343
   * @param {string} jsClass The class name of the MDL component we wish                                               // 344
   * to hook into for any upgrades performed.                                                                          // 345
   * @param {function(!HTMLElement)} callback The function to call upon an                                             // 346
   * upgrade. This function should expect 1 parameter - the HTMLElement which                                          // 347
   * got upgraded.                                                                                                     // 348
   */                                                                                                                  // 349
  function registerUpgradedCallbackInternal(jsClass, callback) {                                                       // 350
    var regClass = findRegisteredClass_(jsClass);                                                                      // 351
    if (regClass) {                                                                                                    // 352
      regClass.callbacks.push(callback);                                                                               // 353
    }                                                                                                                  // 354
  }                                                                                                                    // 355
                                                                                                                       // 356
  /**                                                                                                                  // 357
   * Upgrades all registered components found in the current DOM. This is                                              // 358
   * automatically called on window load.                                                                              // 359
   */                                                                                                                  // 360
  function upgradeAllRegisteredInternal() {                                                                            // 361
    for (var n = 0; n < registeredComponents_.length; n++) {                                                           // 362
      upgradeDomInternal(registeredComponents_[n].className);                                                          // 363
    }                                                                                                                  // 364
  }                                                                                                                    // 365
                                                                                                                       // 366
  /**                                                                                                                  // 367
   * Check the component for the downgrade method.                                                                     // 368
   * Execute if found.                                                                                                 // 369
   * Remove component from createdComponents list.                                                                     // 370
   *                                                                                                                   // 371
   * @param {?componentHandler.Component} component                                                                    // 372
   */                                                                                                                  // 373
  function deconstructComponentInternal(component) {                                                                   // 374
    if (component) {                                                                                                   // 375
      var componentIndex = createdComponents_.indexOf(component);                                                      // 376
      createdComponents_.splice(componentIndex, 1);                                                                    // 377
                                                                                                                       // 378
      var upgrades = component.element_.getAttribute('data-upgraded').split(',');                                      // 379
      var componentPlace = upgrades.indexOf(component[componentConfigProperty_].classAsString);                        // 380
      upgrades.splice(componentPlace, 1);                                                                              // 381
      component.element_.setAttribute('data-upgraded', upgrades.join(','));                                            // 382
                                                                                                                       // 383
      var ev = createEvent_('mdl-componentdowngraded', true, false);                                                   // 384
      component.element_.dispatchEvent(ev);                                                                            // 385
    }                                                                                                                  // 386
  }                                                                                                                    // 387
                                                                                                                       // 388
  /**                                                                                                                  // 389
   * Downgrade either a given node, an array of nodes, or a NodeList.                                                  // 390
   *                                                                                                                   // 391
   * @param {!Node|!Array<!Node>|!NodeList} nodes                                                                      // 392
   */                                                                                                                  // 393
  function downgradeNodesInternal(nodes) {                                                                             // 394
    /**                                                                                                                // 395
     * Auxiliary function to downgrade a single node.                                                                  // 396
     * @param  {!Node} node the node to be downgraded                                                                  // 397
     */                                                                                                                // 398
    var downgradeNode = function(node) {                                                                               // 399
      createdComponents_.filter(function(item) {                                                                       // 400
        return item.element_ === node;                                                                                 // 401
      }).forEach(deconstructComponentInternal);                                                                        // 402
    };                                                                                                                 // 403
    if (nodes instanceof Array || nodes instanceof NodeList) {                                                         // 404
      for (var n = 0; n < nodes.length; n++) {                                                                         // 405
        downgradeNode(nodes[n]);                                                                                       // 406
      }                                                                                                                // 407
    } else if (nodes instanceof Node) {                                                                                // 408
      downgradeNode(nodes);                                                                                            // 409
    } else {                                                                                                           // 410
      throw new Error('Invalid argument provided to downgrade MDL nodes.');                                            // 411
    }                                                                                                                  // 412
  }                                                                                                                    // 413
                                                                                                                       // 414
  // Now return the functions that should be made public with their publicly                                           // 415
  // facing names...                                                                                                   // 416
  return {                                                                                                             // 417
    upgradeDom: upgradeDomInternal,                                                                                    // 418
    upgradeElement: upgradeElementInternal,                                                                            // 419
    upgradeElements: upgradeElementsInternal,                                                                          // 420
    upgradeAllRegistered: upgradeAllRegisteredInternal,                                                                // 421
    registerUpgradedCallback: registerUpgradedCallbackInternal,                                                        // 422
    register: registerInternal,                                                                                        // 423
    downgradeElements: downgradeNodesInternal                                                                          // 424
  };                                                                                                                   // 425
})();                                                                                                                  // 426
                                                                                                                       // 427
/**                                                                                                                    // 428
 * Describes the type of a registered component type managed by                                                        // 429
 * componentHandler. Provided for benefit of the Closure compiler.                                                     // 430
 *                                                                                                                     // 431
 * @typedef {{                                                                                                         // 432
 *   constructor: Function,                                                                                            // 433
 *   classAsString: string,                                                                                            // 434
 *   cssClass: string,                                                                                                 // 435
 *   widget: (string|boolean|undefined)                                                                                // 436
 * }}                                                                                                                  // 437
 */                                                                                                                    // 438
componentHandler.ComponentConfigPublic;  // jshint ignore:line                                                         // 439
                                                                                                                       // 440
/**                                                                                                                    // 441
 * Describes the type of a registered component type managed by                                                        // 442
 * componentHandler. Provided for benefit of the Closure compiler.                                                     // 443
 *                                                                                                                     // 444
 * @typedef {{                                                                                                         // 445
 *   constructor: !Function,                                                                                           // 446
 *   className: string,                                                                                                // 447
 *   cssClass: string,                                                                                                 // 448
 *   widget: (string|boolean),                                                                                         // 449
 *   callbacks: !Array<function(!HTMLElement)>                                                                         // 450
 * }}                                                                                                                  // 451
 */                                                                                                                    // 452
componentHandler.ComponentConfig;  // jshint ignore:line                                                               // 453
                                                                                                                       // 454
/**                                                                                                                    // 455
 * Created component (i.e., upgraded element) type as managed by                                                       // 456
 * componentHandler. Provided for benefit of the Closure compiler.                                                     // 457
 *                                                                                                                     // 458
 * @typedef {{                                                                                                         // 459
 *   element_: !HTMLElement,                                                                                           // 460
 *   className: string,                                                                                                // 461
 *   classAsString: string,                                                                                            // 462
 *   cssClass: string,                                                                                                 // 463
 *   widget: string                                                                                                    // 464
 * }}                                                                                                                  // 465
 */                                                                                                                    // 466
componentHandler.Component;  // jshint ignore:line                                                                     // 467
                                                                                                                       // 468
// Export all symbols, for the benefit of Closure compiler.                                                            // 469
// No effect on uncompiled code.                                                                                       // 470
componentHandler['upgradeDom'] = componentHandler.upgradeDom;                                                          // 471
componentHandler['upgradeElement'] = componentHandler.upgradeElement;                                                  // 472
componentHandler['upgradeElements'] = componentHandler.upgradeElements;                                                // 473
componentHandler['upgradeAllRegistered'] =                                                                             // 474
    componentHandler.upgradeAllRegistered;                                                                             // 475
componentHandler['registerUpgradedCallback'] =                                                                         // 476
    componentHandler.registerUpgradedCallback;                                                                         // 477
componentHandler['register'] = componentHandler.register;                                                              // 478
componentHandler['downgradeElements'] = componentHandler.downgradeElements;                                            // 479
window.componentHandler = componentHandler;                                                                            // 480
window['componentHandler'] = componentHandler;                                                                         // 481
                                                                                                                       // 482
window.addEventListener('load', function() {                                                                           // 483
  'use strict';                                                                                                        // 484
                                                                                                                       // 485
  /**                                                                                                                  // 486
   * Performs a "Cutting the mustard" test. If the browser supports the features                                       // 487
   * tested, adds a mdl-js class to the <html> element. It then upgrades all MDL                                       // 488
   * components requiring JavaScript.                                                                                  // 489
   */                                                                                                                  // 490
  if ('classList' in document.createElement('div') &&                                                                  // 491
      'querySelector' in document &&                                                                                   // 492
      'addEventListener' in window && Array.prototype.forEach) {                                                       // 493
    document.documentElement.classList.add('mdl-js');                                                                  // 494
    componentHandler.upgradeAllRegistered();                                                                           // 495
  } else {                                                                                                             // 496
    /**                                                                                                                // 497
     * Dummy function to avoid JS errors.                                                                              // 498
     */                                                                                                                // 499
    componentHandler.upgradeElement = function() {};                                                                   // 500
    /**                                                                                                                // 501
     * Dummy function to avoid JS errors.                                                                              // 502
     */                                                                                                                // 503
    componentHandler.register = function() {};                                                                         // 504
  }                                                                                                                    // 505
});                                                                                                                    // 506
                                                                                                                       // 507
// Source: https://github.com/darius/requestAnimationFrame/blob/master/requestAnimationFrame.js                        // 508
// Adapted from https://gist.github.com/paulirish/1579671 which derived from                                           // 509
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/                                                // 510
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating                            // 511
// requestAnimationFrame polyfill by Erik Möller.                                                                      // 512
// Fixes from Paul Irish, Tino Zijdel, Andrew Mao, Klemen Slavič, Darius Bacon                                         // 513
// MIT license                                                                                                         // 514
if (!Date.now) {                                                                                                       // 515
    /**                                                                                                                // 516
     * Date.now polyfill.                                                                                              // 517
     * @return {number} the current Date                                                                               // 518
     */                                                                                                                // 519
    Date.now = function () {                                                                                           // 520
        return new Date().getTime();                                                                                   // 521
    };                                                                                                                 // 522
    Date['now'] = Date.now;                                                                                            // 523
}                                                                                                                      // 524
var vendors = [                                                                                                        // 525
    'webkit',                                                                                                          // 526
    'moz'                                                                                                              // 527
];                                                                                                                     // 528
for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {                                            // 529
    var vp = vendors[i];                                                                                               // 530
    window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];                                               // 531
    window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];   // 532
    window['requestAnimationFrame'] = window.requestAnimationFrame;                                                    // 533
    window['cancelAnimationFrame'] = window.cancelAnimationFrame;                                                      // 534
}                                                                                                                      // 535
if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
    var lastTime = 0;                                                                                                  // 537
    /**                                                                                                                // 538
     * requestAnimationFrame polyfill.                                                                                 // 539
     * @param  {!Function} callback the callback function.                                                             // 540
     */                                                                                                                // 541
    window.requestAnimationFrame = function (callback) {                                                               // 542
        var now = Date.now();                                                                                          // 543
        var nextTime = Math.max(lastTime + 16, now);                                                                   // 544
        return setTimeout(function () {                                                                                // 545
            callback(lastTime = nextTime);                                                                             // 546
        }, nextTime - now);                                                                                            // 547
    };                                                                                                                 // 548
    window.cancelAnimationFrame = clearTimeout;                                                                        // 549
    window['requestAnimationFrame'] = window.requestAnimationFrame;                                                    // 550
    window['cancelAnimationFrame'] = window.cancelAnimationFrame;                                                      // 551
}                                                                                                                      // 552
/**                                                                                                                    // 553
 * @license                                                                                                            // 554
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 555
 *                                                                                                                     // 556
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 557
 * you may not use this file except in compliance with the License.                                                    // 558
 * You may obtain a copy of the License at                                                                             // 559
 *                                                                                                                     // 560
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 561
 *                                                                                                                     // 562
 * Unless required by applicable law or agreed to in writing, software                                                 // 563
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 564
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 565
 * See the License for the specific language governing permissions and                                                 // 566
 * limitations under the License.                                                                                      // 567
 */                                                                                                                    // 568
/**                                                                                                                    // 569
   * Class constructor for Button MDL component.                                                                       // 570
   * Implements MDL component design pattern defined at:                                                               // 571
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 572
   *                                                                                                                   // 573
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 574
   */                                                                                                                  // 575
var MaterialButton = function MaterialButton(element) {                                                                // 576
    this.element_ = element;                                                                                           // 577
    // Initialize instance.                                                                                            // 578
    this.init();                                                                                                       // 579
};                                                                                                                     // 580
window['MaterialButton'] = MaterialButton;                                                                             // 581
/**                                                                                                                    // 582
   * Store constants in one place so they can be updated easily.                                                       // 583
   *                                                                                                                   // 584
   * @enum {string | number}                                                                                           // 585
   * @private                                                                                                          // 586
   */                                                                                                                  // 587
MaterialButton.prototype.Constant_ = {};                                                                               // 588
/**                                                                                                                    // 589
   * Store strings for class names defined by this component that are used in                                          // 590
   * JavaScript. This allows us to simply change it in one place should we                                             // 591
   * decide to modify at a later date.                                                                                 // 592
   *                                                                                                                   // 593
   * @enum {string}                                                                                                    // 594
   * @private                                                                                                          // 595
   */                                                                                                                  // 596
MaterialButton.prototype.CssClasses_ = {                                                                               // 597
    RIPPLE_EFFECT: 'mdl-js-ripple-effect',                                                                             // 598
    RIPPLE_CONTAINER: 'mdl-button__ripple-container',                                                                  // 599
    RIPPLE: 'mdl-ripple'                                                                                               // 600
};                                                                                                                     // 601
/**                                                                                                                    // 602
   * Handle blur of element.                                                                                           // 603
   *                                                                                                                   // 604
   * @param {Event} event The event that fired.                                                                        // 605
   * @private                                                                                                          // 606
   */                                                                                                                  // 607
MaterialButton.prototype.blurHandler_ = function (event) {                                                             // 608
    if (event) {                                                                                                       // 609
        this.element_.blur();                                                                                          // 610
    }                                                                                                                  // 611
};                                                                                                                     // 612
// Public methods.                                                                                                     // 613
/**                                                                                                                    // 614
   * Disable button.                                                                                                   // 615
   *                                                                                                                   // 616
   * @public                                                                                                           // 617
   */                                                                                                                  // 618
MaterialButton.prototype.disable = function () {                                                                       // 619
    this.element_.disabled = true;                                                                                     // 620
};                                                                                                                     // 621
MaterialButton.prototype['disable'] = MaterialButton.prototype.disable;                                                // 622
/**                                                                                                                    // 623
   * Enable button.                                                                                                    // 624
   *                                                                                                                   // 625
   * @public                                                                                                           // 626
   */                                                                                                                  // 627
MaterialButton.prototype.enable = function () {                                                                        // 628
    this.element_.disabled = false;                                                                                    // 629
};                                                                                                                     // 630
MaterialButton.prototype['enable'] = MaterialButton.prototype.enable;                                                  // 631
/**                                                                                                                    // 632
   * Initialize element.                                                                                               // 633
   */                                                                                                                  // 634
MaterialButton.prototype.init = function () {                                                                          // 635
    if (this.element_) {                                                                                               // 636
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {                                        // 637
            var rippleContainer = document.createElement('span');                                                      // 638
            rippleContainer.classList.add(this.CssClasses_.RIPPLE_CONTAINER);                                          // 639
            this.rippleElement_ = document.createElement('span');                                                      // 640
            this.rippleElement_.classList.add(this.CssClasses_.RIPPLE);                                                // 641
            rippleContainer.appendChild(this.rippleElement_);                                                          // 642
            this.boundRippleBlurHandler = this.blurHandler_.bind(this);                                                // 643
            this.rippleElement_.addEventListener('mouseup', this.boundRippleBlurHandler);                              // 644
            this.element_.appendChild(rippleContainer);                                                                // 645
        }                                                                                                              // 646
        this.boundButtonBlurHandler = this.blurHandler_.bind(this);                                                    // 647
        this.element_.addEventListener('mouseup', this.boundButtonBlurHandler);                                        // 648
        this.element_.addEventListener('mouseleave', this.boundButtonBlurHandler);                                     // 649
    }                                                                                                                  // 650
};                                                                                                                     // 651
// The component registers itself. It can assume componentHandler is available                                         // 652
// in the global scope.                                                                                                // 653
componentHandler.register({                                                                                            // 654
    constructor: MaterialButton,                                                                                       // 655
    classAsString: 'MaterialButton',                                                                                   // 656
    cssClass: 'mdl-js-button',                                                                                         // 657
    widget: true                                                                                                       // 658
});                                                                                                                    // 659
/**                                                                                                                    // 660
 * @license                                                                                                            // 661
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 662
 *                                                                                                                     // 663
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 664
 * you may not use this file except in compliance with the License.                                                    // 665
 * You may obtain a copy of the License at                                                                             // 666
 *                                                                                                                     // 667
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 668
 *                                                                                                                     // 669
 * Unless required by applicable law or agreed to in writing, software                                                 // 670
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 671
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 672
 * See the License for the specific language governing permissions and                                                 // 673
 * limitations under the License.                                                                                      // 674
 */                                                                                                                    // 675
/**                                                                                                                    // 676
   * Class constructor for Checkbox MDL component.                                                                     // 677
   * Implements MDL component design pattern defined at:                                                               // 678
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 679
   *                                                                                                                   // 680
   * @constructor                                                                                                      // 681
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 682
   */                                                                                                                  // 683
var MaterialCheckbox = function MaterialCheckbox(element) {                                                            // 684
    this.element_ = element;                                                                                           // 685
    // Initialize instance.                                                                                            // 686
    this.init();                                                                                                       // 687
};                                                                                                                     // 688
window['MaterialCheckbox'] = MaterialCheckbox;                                                                         // 689
/**                                                                                                                    // 690
   * Store constants in one place so they can be updated easily.                                                       // 691
   *                                                                                                                   // 692
   * @enum {string | number}                                                                                           // 693
   * @private                                                                                                          // 694
   */                                                                                                                  // 695
MaterialCheckbox.prototype.Constant_ = { TINY_TIMEOUT: 0.001 };                                                        // 696
/**                                                                                                                    // 697
   * Store strings for class names defined by this component that are used in                                          // 698
   * JavaScript. This allows us to simply change it in one place should we                                             // 699
   * decide to modify at a later date.                                                                                 // 700
   *                                                                                                                   // 701
   * @enum {string}                                                                                                    // 702
   * @private                                                                                                          // 703
   */                                                                                                                  // 704
MaterialCheckbox.prototype.CssClasses_ = {                                                                             // 705
    INPUT: 'mdl-checkbox__input',                                                                                      // 706
    BOX_OUTLINE: 'mdl-checkbox__box-outline',                                                                          // 707
    FOCUS_HELPER: 'mdl-checkbox__focus-helper',                                                                        // 708
    TICK_OUTLINE: 'mdl-checkbox__tick-outline',                                                                        // 709
    RIPPLE_EFFECT: 'mdl-js-ripple-effect',                                                                             // 710
    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',                                                       // 711
    RIPPLE_CONTAINER: 'mdl-checkbox__ripple-container',                                                                // 712
    RIPPLE_CENTER: 'mdl-ripple--center',                                                                               // 713
    RIPPLE: 'mdl-ripple',                                                                                              // 714
    IS_FOCUSED: 'is-focused',                                                                                          // 715
    IS_DISABLED: 'is-disabled',                                                                                        // 716
    IS_CHECKED: 'is-checked',                                                                                          // 717
    IS_UPGRADED: 'is-upgraded'                                                                                         // 718
};                                                                                                                     // 719
/**                                                                                                                    // 720
   * Handle change of state.                                                                                           // 721
   *                                                                                                                   // 722
   * @param {Event} event The event that fired.                                                                        // 723
   * @private                                                                                                          // 724
   */                                                                                                                  // 725
MaterialCheckbox.prototype.onChange_ = function (event) {                                                              // 726
    this.updateClasses_();                                                                                             // 727
};                                                                                                                     // 728
/**                                                                                                                    // 729
   * Handle focus of element.                                                                                          // 730
   *                                                                                                                   // 731
   * @param {Event} event The event that fired.                                                                        // 732
   * @private                                                                                                          // 733
   */                                                                                                                  // 734
MaterialCheckbox.prototype.onFocus_ = function (event) {                                                               // 735
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);                                                          // 736
};                                                                                                                     // 737
/**                                                                                                                    // 738
   * Handle lost focus of element.                                                                                     // 739
   *                                                                                                                   // 740
   * @param {Event} event The event that fired.                                                                        // 741
   * @private                                                                                                          // 742
   */                                                                                                                  // 743
MaterialCheckbox.prototype.onBlur_ = function (event) {                                                                // 744
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);                                                       // 745
};                                                                                                                     // 746
/**                                                                                                                    // 747
   * Handle mouseup.                                                                                                   // 748
   *                                                                                                                   // 749
   * @param {Event} event The event that fired.                                                                        // 750
   * @private                                                                                                          // 751
   */                                                                                                                  // 752
MaterialCheckbox.prototype.onMouseUp_ = function (event) {                                                             // 753
    this.blur_();                                                                                                      // 754
};                                                                                                                     // 755
/**                                                                                                                    // 756
   * Handle class updates.                                                                                             // 757
   *                                                                                                                   // 758
   * @private                                                                                                          // 759
   */                                                                                                                  // 760
MaterialCheckbox.prototype.updateClasses_ = function () {                                                              // 761
    this.checkDisabled();                                                                                              // 762
    this.checkToggleState();                                                                                           // 763
};                                                                                                                     // 764
/**                                                                                                                    // 765
   * Add blur.                                                                                                         // 766
   *                                                                                                                   // 767
   * @private                                                                                                          // 768
   */                                                                                                                  // 769
MaterialCheckbox.prototype.blur_ = function () {                                                                       // 770
    // TODO: figure out why there's a focus event being fired after our blur,                                          // 771
    // so that we can avoid this hack.                                                                                 // 772
    window.setTimeout(function () {                                                                                    // 773
        this.inputElement_.blur();                                                                                     // 774
    }.bind(this), this.Constant_.TINY_TIMEOUT);                                                                        // 775
};                                                                                                                     // 776
// Public methods.                                                                                                     // 777
/**                                                                                                                    // 778
   * Check the inputs toggle state and update display.                                                                 // 779
   *                                                                                                                   // 780
   * @public                                                                                                           // 781
   */                                                                                                                  // 782
MaterialCheckbox.prototype.checkToggleState = function () {                                                            // 783
    if (this.inputElement_.checked) {                                                                                  // 784
        this.element_.classList.add(this.CssClasses_.IS_CHECKED);                                                      // 785
    } else {                                                                                                           // 786
        this.element_.classList.remove(this.CssClasses_.IS_CHECKED);                                                   // 787
    }                                                                                                                  // 788
};                                                                                                                     // 789
MaterialCheckbox.prototype['checkToggleState'] = MaterialCheckbox.prototype.checkToggleState;                          // 790
/**                                                                                                                    // 791
   * Check the inputs disabled state and update display.                                                               // 792
   *                                                                                                                   // 793
   * @public                                                                                                           // 794
   */                                                                                                                  // 795
MaterialCheckbox.prototype.checkDisabled = function () {                                                               // 796
    if (this.inputElement_.disabled) {                                                                                 // 797
        this.element_.classList.add(this.CssClasses_.IS_DISABLED);                                                     // 798
    } else {                                                                                                           // 799
        this.element_.classList.remove(this.CssClasses_.IS_DISABLED);                                                  // 800
    }                                                                                                                  // 801
};                                                                                                                     // 802
MaterialCheckbox.prototype['checkDisabled'] = MaterialCheckbox.prototype.checkDisabled;                                // 803
/**                                                                                                                    // 804
   * Disable checkbox.                                                                                                 // 805
   *                                                                                                                   // 806
   * @public                                                                                                           // 807
   */                                                                                                                  // 808
MaterialCheckbox.prototype.disable = function () {                                                                     // 809
    this.inputElement_.disabled = true;                                                                                // 810
    this.updateClasses_();                                                                                             // 811
};                                                                                                                     // 812
MaterialCheckbox.prototype['disable'] = MaterialCheckbox.prototype.disable;                                            // 813
/**                                                                                                                    // 814
   * Enable checkbox.                                                                                                  // 815
   *                                                                                                                   // 816
   * @public                                                                                                           // 817
   */                                                                                                                  // 818
MaterialCheckbox.prototype.enable = function () {                                                                      // 819
    this.inputElement_.disabled = false;                                                                               // 820
    this.updateClasses_();                                                                                             // 821
};                                                                                                                     // 822
MaterialCheckbox.prototype['enable'] = MaterialCheckbox.prototype.enable;                                              // 823
/**                                                                                                                    // 824
   * Check checkbox.                                                                                                   // 825
   *                                                                                                                   // 826
   * @public                                                                                                           // 827
   */                                                                                                                  // 828
MaterialCheckbox.prototype.check = function () {                                                                       // 829
    this.inputElement_.checked = true;                                                                                 // 830
    this.updateClasses_();                                                                                             // 831
};                                                                                                                     // 832
MaterialCheckbox.prototype['check'] = MaterialCheckbox.prototype.check;                                                // 833
/**                                                                                                                    // 834
   * Uncheck checkbox.                                                                                                 // 835
   *                                                                                                                   // 836
   * @public                                                                                                           // 837
   */                                                                                                                  // 838
MaterialCheckbox.prototype.uncheck = function () {                                                                     // 839
    this.inputElement_.checked = false;                                                                                // 840
    this.updateClasses_();                                                                                             // 841
};                                                                                                                     // 842
MaterialCheckbox.prototype['uncheck'] = MaterialCheckbox.prototype.uncheck;                                            // 843
/**                                                                                                                    // 844
   * Initialize element.                                                                                               // 845
   */                                                                                                                  // 846
MaterialCheckbox.prototype.init = function () {                                                                        // 847
    if (this.element_) {                                                                                               // 848
        this.inputElement_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);                                // 849
        var boxOutline = document.createElement('span');                                                               // 850
        boxOutline.classList.add(this.CssClasses_.BOX_OUTLINE);                                                        // 851
        var tickContainer = document.createElement('span');                                                            // 852
        tickContainer.classList.add(this.CssClasses_.FOCUS_HELPER);                                                    // 853
        var tickOutline = document.createElement('span');                                                              // 854
        tickOutline.classList.add(this.CssClasses_.TICK_OUTLINE);                                                      // 855
        boxOutline.appendChild(tickOutline);                                                                           // 856
        this.element_.appendChild(tickContainer);                                                                      // 857
        this.element_.appendChild(boxOutline);                                                                         // 858
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {                                        // 859
            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);                                        // 860
            this.rippleContainerElement_ = document.createElement('span');                                             // 861
            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER);                             // 862
            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT);                                // 863
            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER);                                // 864
            this.boundRippleMouseUp = this.onMouseUp_.bind(this);                                                      // 865
            this.rippleContainerElement_.addEventListener('mouseup', this.boundRippleMouseUp);                         // 866
            var ripple = document.createElement('span');                                                               // 867
            ripple.classList.add(this.CssClasses_.RIPPLE);                                                             // 868
            this.rippleContainerElement_.appendChild(ripple);                                                          // 869
            this.element_.appendChild(this.rippleContainerElement_);                                                   // 870
        }                                                                                                              // 871
        this.boundInputOnChange = this.onChange_.bind(this);                                                           // 872
        this.boundInputOnFocus = this.onFocus_.bind(this);                                                             // 873
        this.boundInputOnBlur = this.onBlur_.bind(this);                                                               // 874
        this.boundElementMouseUp = this.onMouseUp_.bind(this);                                                         // 875
        this.inputElement_.addEventListener('change', this.boundInputOnChange);                                        // 876
        this.inputElement_.addEventListener('focus', this.boundInputOnFocus);                                          // 877
        this.inputElement_.addEventListener('blur', this.boundInputOnBlur);                                            // 878
        this.element_.addEventListener('mouseup', this.boundElementMouseUp);                                           // 879
        this.updateClasses_();                                                                                         // 880
        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);                                                     // 881
    }                                                                                                                  // 882
};                                                                                                                     // 883
// The component registers itself. It can assume componentHandler is available                                         // 884
// in the global scope.                                                                                                // 885
componentHandler.register({                                                                                            // 886
    constructor: MaterialCheckbox,                                                                                     // 887
    classAsString: 'MaterialCheckbox',                                                                                 // 888
    cssClass: 'mdl-js-checkbox',                                                                                       // 889
    widget: true                                                                                                       // 890
});                                                                                                                    // 891
/**                                                                                                                    // 892
 * @license                                                                                                            // 893
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 894
 *                                                                                                                     // 895
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 896
 * you may not use this file except in compliance with the License.                                                    // 897
 * You may obtain a copy of the License at                                                                             // 898
 *                                                                                                                     // 899
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 900
 *                                                                                                                     // 901
 * Unless required by applicable law or agreed to in writing, software                                                 // 902
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 903
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 904
 * See the License for the specific language governing permissions and                                                 // 905
 * limitations under the License.                                                                                      // 906
 */                                                                                                                    // 907
/**                                                                                                                    // 908
   * Class constructor for icon toggle MDL component.                                                                  // 909
   * Implements MDL component design pattern defined at:                                                               // 910
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 911
   *                                                                                                                   // 912
   * @constructor                                                                                                      // 913
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 914
   */                                                                                                                  // 915
var MaterialIconToggle = function MaterialIconToggle(element) {                                                        // 916
    this.element_ = element;                                                                                           // 917
    // Initialize instance.                                                                                            // 918
    this.init();                                                                                                       // 919
};                                                                                                                     // 920
window['MaterialIconToggle'] = MaterialIconToggle;                                                                     // 921
/**                                                                                                                    // 922
   * Store constants in one place so they can be updated easily.                                                       // 923
   *                                                                                                                   // 924
   * @enum {string | number}                                                                                           // 925
   * @private                                                                                                          // 926
   */                                                                                                                  // 927
MaterialIconToggle.prototype.Constant_ = { TINY_TIMEOUT: 0.001 };                                                      // 928
/**                                                                                                                    // 929
   * Store strings for class names defined by this component that are used in                                          // 930
   * JavaScript. This allows us to simply change it in one place should we                                             // 931
   * decide to modify at a later date.                                                                                 // 932
   *                                                                                                                   // 933
   * @enum {string}                                                                                                    // 934
   * @private                                                                                                          // 935
   */                                                                                                                  // 936
MaterialIconToggle.prototype.CssClasses_ = {                                                                           // 937
    INPUT: 'mdl-icon-toggle__input',                                                                                   // 938
    JS_RIPPLE_EFFECT: 'mdl-js-ripple-effect',                                                                          // 939
    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',                                                       // 940
    RIPPLE_CONTAINER: 'mdl-icon-toggle__ripple-container',                                                             // 941
    RIPPLE_CENTER: 'mdl-ripple--center',                                                                               // 942
    RIPPLE: 'mdl-ripple',                                                                                              // 943
    IS_FOCUSED: 'is-focused',                                                                                          // 944
    IS_DISABLED: 'is-disabled',                                                                                        // 945
    IS_CHECKED: 'is-checked'                                                                                           // 946
};                                                                                                                     // 947
/**                                                                                                                    // 948
   * Handle change of state.                                                                                           // 949
   *                                                                                                                   // 950
   * @param {Event} event The event that fired.                                                                        // 951
   * @private                                                                                                          // 952
   */                                                                                                                  // 953
MaterialIconToggle.prototype.onChange_ = function (event) {                                                            // 954
    this.updateClasses_();                                                                                             // 955
};                                                                                                                     // 956
/**                                                                                                                    // 957
   * Handle focus of element.                                                                                          // 958
   *                                                                                                                   // 959
   * @param {Event} event The event that fired.                                                                        // 960
   * @private                                                                                                          // 961
   */                                                                                                                  // 962
MaterialIconToggle.prototype.onFocus_ = function (event) {                                                             // 963
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);                                                          // 964
};                                                                                                                     // 965
/**                                                                                                                    // 966
   * Handle lost focus of element.                                                                                     // 967
   *                                                                                                                   // 968
   * @param {Event} event The event that fired.                                                                        // 969
   * @private                                                                                                          // 970
   */                                                                                                                  // 971
MaterialIconToggle.prototype.onBlur_ = function (event) {                                                              // 972
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);                                                       // 973
};                                                                                                                     // 974
/**                                                                                                                    // 975
   * Handle mouseup.                                                                                                   // 976
   *                                                                                                                   // 977
   * @param {Event} event The event that fired.                                                                        // 978
   * @private                                                                                                          // 979
   */                                                                                                                  // 980
MaterialIconToggle.prototype.onMouseUp_ = function (event) {                                                           // 981
    this.blur_();                                                                                                      // 982
};                                                                                                                     // 983
/**                                                                                                                    // 984
   * Handle class updates.                                                                                             // 985
   *                                                                                                                   // 986
   * @private                                                                                                          // 987
   */                                                                                                                  // 988
MaterialIconToggle.prototype.updateClasses_ = function () {                                                            // 989
    this.checkDisabled();                                                                                              // 990
    this.checkToggleState();                                                                                           // 991
};                                                                                                                     // 992
/**                                                                                                                    // 993
   * Add blur.                                                                                                         // 994
   *                                                                                                                   // 995
   * @private                                                                                                          // 996
   */                                                                                                                  // 997
MaterialIconToggle.prototype.blur_ = function () {                                                                     // 998
    // TODO: figure out why there's a focus event being fired after our blur,                                          // 999
    // so that we can avoid this hack.                                                                                 // 1000
    window.setTimeout(function () {                                                                                    // 1001
        this.inputElement_.blur();                                                                                     // 1002
    }.bind(this), this.Constant_.TINY_TIMEOUT);                                                                        // 1003
};                                                                                                                     // 1004
// Public methods.                                                                                                     // 1005
/**                                                                                                                    // 1006
   * Check the inputs toggle state and update display.                                                                 // 1007
   *                                                                                                                   // 1008
   * @public                                                                                                           // 1009
   */                                                                                                                  // 1010
MaterialIconToggle.prototype.checkToggleState = function () {                                                          // 1011
    if (this.inputElement_.checked) {                                                                                  // 1012
        this.element_.classList.add(this.CssClasses_.IS_CHECKED);                                                      // 1013
    } else {                                                                                                           // 1014
        this.element_.classList.remove(this.CssClasses_.IS_CHECKED);                                                   // 1015
    }                                                                                                                  // 1016
};                                                                                                                     // 1017
MaterialIconToggle.prototype['checkToggleState'] = MaterialIconToggle.prototype.checkToggleState;                      // 1018
/**                                                                                                                    // 1019
   * Check the inputs disabled state and update display.                                                               // 1020
   *                                                                                                                   // 1021
   * @public                                                                                                           // 1022
   */                                                                                                                  // 1023
MaterialIconToggle.prototype.checkDisabled = function () {                                                             // 1024
    if (this.inputElement_.disabled) {                                                                                 // 1025
        this.element_.classList.add(this.CssClasses_.IS_DISABLED);                                                     // 1026
    } else {                                                                                                           // 1027
        this.element_.classList.remove(this.CssClasses_.IS_DISABLED);                                                  // 1028
    }                                                                                                                  // 1029
};                                                                                                                     // 1030
MaterialIconToggle.prototype['checkDisabled'] = MaterialIconToggle.prototype.checkDisabled;                            // 1031
/**                                                                                                                    // 1032
   * Disable icon toggle.                                                                                              // 1033
   *                                                                                                                   // 1034
   * @public                                                                                                           // 1035
   */                                                                                                                  // 1036
MaterialIconToggle.prototype.disable = function () {                                                                   // 1037
    this.inputElement_.disabled = true;                                                                                // 1038
    this.updateClasses_();                                                                                             // 1039
};                                                                                                                     // 1040
MaterialIconToggle.prototype['disable'] = MaterialIconToggle.prototype.disable;                                        // 1041
/**                                                                                                                    // 1042
   * Enable icon toggle.                                                                                               // 1043
   *                                                                                                                   // 1044
   * @public                                                                                                           // 1045
   */                                                                                                                  // 1046
MaterialIconToggle.prototype.enable = function () {                                                                    // 1047
    this.inputElement_.disabled = false;                                                                               // 1048
    this.updateClasses_();                                                                                             // 1049
};                                                                                                                     // 1050
MaterialIconToggle.prototype['enable'] = MaterialIconToggle.prototype.enable;                                          // 1051
/**                                                                                                                    // 1052
   * Check icon toggle.                                                                                                // 1053
   *                                                                                                                   // 1054
   * @public                                                                                                           // 1055
   */                                                                                                                  // 1056
MaterialIconToggle.prototype.check = function () {                                                                     // 1057
    this.inputElement_.checked = true;                                                                                 // 1058
    this.updateClasses_();                                                                                             // 1059
};                                                                                                                     // 1060
MaterialIconToggle.prototype['check'] = MaterialIconToggle.prototype.check;                                            // 1061
/**                                                                                                                    // 1062
   * Uncheck icon toggle.                                                                                              // 1063
   *                                                                                                                   // 1064
   * @public                                                                                                           // 1065
   */                                                                                                                  // 1066
MaterialIconToggle.prototype.uncheck = function () {                                                                   // 1067
    this.inputElement_.checked = false;                                                                                // 1068
    this.updateClasses_();                                                                                             // 1069
};                                                                                                                     // 1070
MaterialIconToggle.prototype['uncheck'] = MaterialIconToggle.prototype.uncheck;                                        // 1071
/**                                                                                                                    // 1072
   * Initialize element.                                                                                               // 1073
   */                                                                                                                  // 1074
MaterialIconToggle.prototype.init = function () {                                                                      // 1075
    if (this.element_) {                                                                                               // 1076
        this.inputElement_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);                                // 1077
        if (this.element_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)) {                                     // 1078
            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);                                        // 1079
            this.rippleContainerElement_ = document.createElement('span');                                             // 1080
            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER);                             // 1081
            this.rippleContainerElement_.classList.add(this.CssClasses_.JS_RIPPLE_EFFECT);                             // 1082
            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER);                                // 1083
            this.boundRippleMouseUp = this.onMouseUp_.bind(this);                                                      // 1084
            this.rippleContainerElement_.addEventListener('mouseup', this.boundRippleMouseUp);                         // 1085
            var ripple = document.createElement('span');                                                               // 1086
            ripple.classList.add(this.CssClasses_.RIPPLE);                                                             // 1087
            this.rippleContainerElement_.appendChild(ripple);                                                          // 1088
            this.element_.appendChild(this.rippleContainerElement_);                                                   // 1089
        }                                                                                                              // 1090
        this.boundInputOnChange = this.onChange_.bind(this);                                                           // 1091
        this.boundInputOnFocus = this.onFocus_.bind(this);                                                             // 1092
        this.boundInputOnBlur = this.onBlur_.bind(this);                                                               // 1093
        this.boundElementOnMouseUp = this.onMouseUp_.bind(this);                                                       // 1094
        this.inputElement_.addEventListener('change', this.boundInputOnChange);                                        // 1095
        this.inputElement_.addEventListener('focus', this.boundInputOnFocus);                                          // 1096
        this.inputElement_.addEventListener('blur', this.boundInputOnBlur);                                            // 1097
        this.element_.addEventListener('mouseup', this.boundElementOnMouseUp);                                         // 1098
        this.updateClasses_();                                                                                         // 1099
        this.element_.classList.add('is-upgraded');                                                                    // 1100
    }                                                                                                                  // 1101
};                                                                                                                     // 1102
// The component registers itself. It can assume componentHandler is available                                         // 1103
// in the global scope.                                                                                                // 1104
componentHandler.register({                                                                                            // 1105
    constructor: MaterialIconToggle,                                                                                   // 1106
    classAsString: 'MaterialIconToggle',                                                                               // 1107
    cssClass: 'mdl-js-icon-toggle',                                                                                    // 1108
    widget: true                                                                                                       // 1109
});                                                                                                                    // 1110
/**                                                                                                                    // 1111
 * @license                                                                                                            // 1112
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 1113
 *                                                                                                                     // 1114
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 1115
 * you may not use this file except in compliance with the License.                                                    // 1116
 * You may obtain a copy of the License at                                                                             // 1117
 *                                                                                                                     // 1118
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 1119
 *                                                                                                                     // 1120
 * Unless required by applicable law or agreed to in writing, software                                                 // 1121
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 1122
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 1123
 * See the License for the specific language governing permissions and                                                 // 1124
 * limitations under the License.                                                                                      // 1125
 */                                                                                                                    // 1126
/**                                                                                                                    // 1127
   * Class constructor for dropdown MDL component.                                                                     // 1128
   * Implements MDL component design pattern defined at:                                                               // 1129
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 1130
   *                                                                                                                   // 1131
   * @constructor                                                                                                      // 1132
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 1133
   */                                                                                                                  // 1134
var MaterialMenu = function MaterialMenu(element) {                                                                    // 1135
    this.element_ = element;                                                                                           // 1136
    // Initialize instance.                                                                                            // 1137
    this.init();                                                                                                       // 1138
};                                                                                                                     // 1139
window['MaterialMenu'] = MaterialMenu;                                                                                 // 1140
/**                                                                                                                    // 1141
   * Store constants in one place so they can be updated easily.                                                       // 1142
   *                                                                                                                   // 1143
   * @enum {string | number}                                                                                           // 1144
   * @private                                                                                                          // 1145
   */                                                                                                                  // 1146
MaterialMenu.prototype.Constant_ = {                                                                                   // 1147
    // Total duration of the menu animation.                                                                           // 1148
    TRANSITION_DURATION_SECONDS: 0.3,                                                                                  // 1149
    // The fraction of the total duration we want to use for menu item animations.                                     // 1150
    TRANSITION_DURATION_FRACTION: 0.8,                                                                                 // 1151
    // How long the menu stays open after choosing an option (so the user can see                                      // 1152
    // the ripple).                                                                                                    // 1153
    CLOSE_TIMEOUT: 150                                                                                                 // 1154
};                                                                                                                     // 1155
/**                                                                                                                    // 1156
   * Keycodes, for code readability.                                                                                   // 1157
   *                                                                                                                   // 1158
   * @enum {number}                                                                                                    // 1159
   * @private                                                                                                          // 1160
   */                                                                                                                  // 1161
MaterialMenu.prototype.Keycodes_ = {                                                                                   // 1162
    ENTER: 13,                                                                                                         // 1163
    ESCAPE: 27,                                                                                                        // 1164
    SPACE: 32,                                                                                                         // 1165
    UP_ARROW: 38,                                                                                                      // 1166
    DOWN_ARROW: 40                                                                                                     // 1167
};                                                                                                                     // 1168
/**                                                                                                                    // 1169
   * Store strings for class names defined by this component that are used in                                          // 1170
   * JavaScript. This allows us to simply change it in one place should we                                             // 1171
   * decide to modify at a later date.                                                                                 // 1172
   *                                                                                                                   // 1173
   * @enum {string}                                                                                                    // 1174
   * @private                                                                                                          // 1175
   */                                                                                                                  // 1176
MaterialMenu.prototype.CssClasses_ = {                                                                                 // 1177
    CONTAINER: 'mdl-menu__container',                                                                                  // 1178
    OUTLINE: 'mdl-menu__outline',                                                                                      // 1179
    ITEM: 'mdl-menu__item',                                                                                            // 1180
    ITEM_RIPPLE_CONTAINER: 'mdl-menu__item-ripple-container',                                                          // 1181
    RIPPLE_EFFECT: 'mdl-js-ripple-effect',                                                                             // 1182
    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',                                                       // 1183
    RIPPLE: 'mdl-ripple',                                                                                              // 1184
    // Statuses                                                                                                        // 1185
    IS_UPGRADED: 'is-upgraded',                                                                                        // 1186
    IS_VISIBLE: 'is-visible',                                                                                          // 1187
    IS_ANIMATING: 'is-animating',                                                                                      // 1188
    // Alignment options                                                                                               // 1189
    BOTTOM_LEFT: 'mdl-menu--bottom-left',                                                                              // 1190
    // This is the default.                                                                                            // 1191
    BOTTOM_RIGHT: 'mdl-menu--bottom-right',                                                                            // 1192
    TOP_LEFT: 'mdl-menu--top-left',                                                                                    // 1193
    TOP_RIGHT: 'mdl-menu--top-right',                                                                                  // 1194
    UNALIGNED: 'mdl-menu--unaligned'                                                                                   // 1195
};                                                                                                                     // 1196
/**                                                                                                                    // 1197
   * Initialize element.                                                                                               // 1198
   */                                                                                                                  // 1199
MaterialMenu.prototype.init = function () {                                                                            // 1200
    if (this.element_) {                                                                                               // 1201
        // Create container for the menu.                                                                              // 1202
        var container = document.createElement('div');                                                                 // 1203
        container.classList.add(this.CssClasses_.CONTAINER);                                                           // 1204
        this.element_.parentElement.insertBefore(container, this.element_);                                            // 1205
        this.element_.parentElement.removeChild(this.element_);                                                        // 1206
        container.appendChild(this.element_);                                                                          // 1207
        this.container_ = container;                                                                                   // 1208
        // Create outline for the menu (shadow and background).                                                        // 1209
        var outline = document.createElement('div');                                                                   // 1210
        outline.classList.add(this.CssClasses_.OUTLINE);                                                               // 1211
        this.outline_ = outline;                                                                                       // 1212
        container.insertBefore(outline, this.element_);                                                                // 1213
        // Find the "for" element and bind events to it.                                                               // 1214
        var forElId = this.element_.getAttribute('for') || this.element_.getAttribute('data-mdl-for');                 // 1215
        var forEl = null;                                                                                              // 1216
        if (forElId) {                                                                                                 // 1217
            forEl = document.getElementById(forElId);                                                                  // 1218
            if (forEl) {                                                                                               // 1219
                this.forElement_ = forEl;                                                                              // 1220
                forEl.addEventListener('click', this.handleForClick_.bind(this));                                      // 1221
                forEl.addEventListener('keydown', this.handleForKeyboardEvent_.bind(this));                            // 1222
            }                                                                                                          // 1223
        }                                                                                                              // 1224
        var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM);                                       // 1225
        this.boundItemKeydown_ = this.handleItemKeyboardEvent_.bind(this);                                             // 1226
        this.boundItemClick_ = this.handleItemClick_.bind(this);                                                       // 1227
        for (var i = 0; i < items.length; i++) {                                                                       // 1228
            // Add a listener to each menu item.                                                                       // 1229
            items[i].addEventListener('click', this.boundItemClick_);                                                  // 1230
            // Add a tab index to each menu item.                                                                      // 1231
            items[i].tabIndex = '-1';                                                                                  // 1232
            // Add a keyboard listener to each menu item.                                                              // 1233
            items[i].addEventListener('keydown', this.boundItemKeydown_);                                              // 1234
        }                                                                                                              // 1235
        // Add ripple classes to each item, if the user has enabled ripples.                                           // 1236
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {                                        // 1237
            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);                                        // 1238
            for (i = 0; i < items.length; i++) {                                                                       // 1239
                var item = items[i];                                                                                   // 1240
                var rippleContainer = document.createElement('span');                                                  // 1241
                rippleContainer.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);                                 // 1242
                var ripple = document.createElement('span');                                                           // 1243
                ripple.classList.add(this.CssClasses_.RIPPLE);                                                         // 1244
                rippleContainer.appendChild(ripple);                                                                   // 1245
                item.appendChild(rippleContainer);                                                                     // 1246
                item.classList.add(this.CssClasses_.RIPPLE_EFFECT);                                                    // 1247
            }                                                                                                          // 1248
        }                                                                                                              // 1249
        // Copy alignment classes to the container, so the outline can use them.                                       // 1250
        if (this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT)) {                                          // 1251
            this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT);                                                 // 1252
        }                                                                                                              // 1253
        if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {                                         // 1254
            this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT);                                                // 1255
        }                                                                                                              // 1256
        if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {                                             // 1257
            this.outline_.classList.add(this.CssClasses_.TOP_LEFT);                                                    // 1258
        }                                                                                                              // 1259
        if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {                                            // 1260
            this.outline_.classList.add(this.CssClasses_.TOP_RIGHT);                                                   // 1261
        }                                                                                                              // 1262
        if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {                                            // 1263
            this.outline_.classList.add(this.CssClasses_.UNALIGNED);                                                   // 1264
        }                                                                                                              // 1265
        container.classList.add(this.CssClasses_.IS_UPGRADED);                                                         // 1266
    }                                                                                                                  // 1267
};                                                                                                                     // 1268
/**                                                                                                                    // 1269
   * Handles a click on the "for" element, by positioning the menu and then                                            // 1270
   * toggling it.                                                                                                      // 1271
   *                                                                                                                   // 1272
   * @param {Event} evt The event that fired.                                                                          // 1273
   * @private                                                                                                          // 1274
   */                                                                                                                  // 1275
MaterialMenu.prototype.handleForClick_ = function (evt) {                                                              // 1276
    if (this.element_ && this.forElement_) {                                                                           // 1277
        var rect = this.forElement_.getBoundingClientRect();                                                           // 1278
        var forRect = this.forElement_.parentElement.getBoundingClientRect();                                          // 1279
        if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {                                            // 1280
        } else if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {                                  // 1281
            // Position below the "for" element, aligned to its right.                                                 // 1282
            this.container_.style.right = forRect.right - rect.right + 'px';                                           // 1283
            this.container_.style.top = this.forElement_.offsetTop + this.forElement_.offsetHeight + 'px';             // 1284
        } else if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {                                      // 1285
            // Position above the "for" element, aligned to its left.                                                  // 1286
            this.container_.style.left = this.forElement_.offsetLeft + 'px';                                           // 1287
            this.container_.style.bottom = forRect.bottom - rect.top + 'px';                                           // 1288
        } else if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {                                     // 1289
            // Position above the "for" element, aligned to its right.                                                 // 1290
            this.container_.style.right = forRect.right - rect.right + 'px';                                           // 1291
            this.container_.style.bottom = forRect.bottom - rect.top + 'px';                                           // 1292
        } else {                                                                                                       // 1293
            // Default: position below the "for" element, aligned to its left.                                         // 1294
            this.container_.style.left = this.forElement_.offsetLeft + 'px';                                           // 1295
            this.container_.style.top = this.forElement_.offsetTop + this.forElement_.offsetHeight + 'px';             // 1296
        }                                                                                                              // 1297
    }                                                                                                                  // 1298
    this.toggle(evt);                                                                                                  // 1299
};                                                                                                                     // 1300
/**                                                                                                                    // 1301
   * Handles a keyboard event on the "for" element.                                                                    // 1302
   *                                                                                                                   // 1303
   * @param {Event} evt The event that fired.                                                                          // 1304
   * @private                                                                                                          // 1305
   */                                                                                                                  // 1306
MaterialMenu.prototype.handleForKeyboardEvent_ = function (evt) {                                                      // 1307
    if (this.element_ && this.container_ && this.forElement_) {                                                        // 1308
        var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM + ':not([disabled])');                  // 1309
        if (items && items.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {            // 1310
            if (evt.keyCode === this.Keycodes_.UP_ARROW) {                                                             // 1311
                evt.preventDefault();                                                                                  // 1312
                items[items.length - 1].focus();                                                                       // 1313
            } else if (evt.keyCode === this.Keycodes_.DOWN_ARROW) {                                                    // 1314
                evt.preventDefault();                                                                                  // 1315
                items[0].focus();                                                                                      // 1316
            }                                                                                                          // 1317
        }                                                                                                              // 1318
    }                                                                                                                  // 1319
};                                                                                                                     // 1320
/**                                                                                                                    // 1321
   * Handles a keyboard event on an item.                                                                              // 1322
   *                                                                                                                   // 1323
   * @param {Event} evt The event that fired.                                                                          // 1324
   * @private                                                                                                          // 1325
   */                                                                                                                  // 1326
MaterialMenu.prototype.handleItemKeyboardEvent_ = function (evt) {                                                     // 1327
    if (this.element_ && this.container_) {                                                                            // 1328
        var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM + ':not([disabled])');                  // 1329
        if (items && items.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {            // 1330
            var currentIndex = Array.prototype.slice.call(items).indexOf(evt.target);                                  // 1331
            if (evt.keyCode === this.Keycodes_.UP_ARROW) {                                                             // 1332
                evt.preventDefault();                                                                                  // 1333
                if (currentIndex > 0) {                                                                                // 1334
                    items[currentIndex - 1].focus();                                                                   // 1335
                } else {                                                                                               // 1336
                    items[items.length - 1].focus();                                                                   // 1337
                }                                                                                                      // 1338
            } else if (evt.keyCode === this.Keycodes_.DOWN_ARROW) {                                                    // 1339
                evt.preventDefault();                                                                                  // 1340
                if (items.length > currentIndex + 1) {                                                                 // 1341
                    items[currentIndex + 1].focus();                                                                   // 1342
                } else {                                                                                               // 1343
                    items[0].focus();                                                                                  // 1344
                }                                                                                                      // 1345
            } else if (evt.keyCode === this.Keycodes_.SPACE || evt.keyCode === this.Keycodes_.ENTER) {                 // 1346
                evt.preventDefault();                                                                                  // 1347
                // Send mousedown and mouseup to trigger ripple.                                                       // 1348
                var e = new MouseEvent('mousedown');                                                                   // 1349
                evt.target.dispatchEvent(e);                                                                           // 1350
                e = new MouseEvent('mouseup');                                                                         // 1351
                evt.target.dispatchEvent(e);                                                                           // 1352
                // Send click.                                                                                         // 1353
                evt.target.click();                                                                                    // 1354
            } else if (evt.keyCode === this.Keycodes_.ESCAPE) {                                                        // 1355
                evt.preventDefault();                                                                                  // 1356
                this.hide();                                                                                           // 1357
            }                                                                                                          // 1358
        }                                                                                                              // 1359
    }                                                                                                                  // 1360
};                                                                                                                     // 1361
/**                                                                                                                    // 1362
   * Handles a click event on an item.                                                                                 // 1363
   *                                                                                                                   // 1364
   * @param {Event} evt The event that fired.                                                                          // 1365
   * @private                                                                                                          // 1366
   */                                                                                                                  // 1367
MaterialMenu.prototype.handleItemClick_ = function (evt) {                                                             // 1368
    if (evt.target.hasAttribute('disabled')) {                                                                         // 1369
        evt.stopPropagation();                                                                                         // 1370
    } else {                                                                                                           // 1371
        // Wait some time before closing menu, so the user can see the ripple.                                         // 1372
        this.closing_ = true;                                                                                          // 1373
        window.setTimeout(function (evt) {                                                                             // 1374
            this.hide();                                                                                               // 1375
            this.closing_ = false;                                                                                     // 1376
        }.bind(this), this.Constant_.CLOSE_TIMEOUT);                                                                   // 1377
    }                                                                                                                  // 1378
};                                                                                                                     // 1379
/**                                                                                                                    // 1380
   * Calculates the initial clip (for opening the menu) or final clip (for closing                                     // 1381
   * it), and applies it. This allows us to animate from or to the correct point,                                      // 1382
   * that is, the point it's aligned to in the "for" element.                                                          // 1383
   *                                                                                                                   // 1384
   * @param {number} height Height of the clip rectangle                                                               // 1385
   * @param {number} width Width of the clip rectangle                                                                 // 1386
   * @private                                                                                                          // 1387
   */                                                                                                                  // 1388
MaterialMenu.prototype.applyClip_ = function (height, width) {                                                         // 1389
    if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {                                                // 1390
        // Do not clip.                                                                                                // 1391
        this.element_.style.clip = '';                                                                                 // 1392
    } else if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {                                      // 1393
        // Clip to the top right corner of the menu.                                                                   // 1394
        this.element_.style.clip = 'rect(0 ' + width + 'px ' + '0 ' + width + 'px)';                                   // 1395
    } else if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {                                          // 1396
        // Clip to the bottom left corner of the menu.                                                                 // 1397
        this.element_.style.clip = 'rect(' + height + 'px 0 ' + height + 'px 0)';                                      // 1398
    } else if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {                                         // 1399
        // Clip to the bottom right corner of the menu.                                                                // 1400
        this.element_.style.clip = 'rect(' + height + 'px ' + width + 'px ' + height + 'px ' + width + 'px)';          // 1401
    } else {                                                                                                           // 1402
        // Default: do not clip (same as clipping to the top left corner).                                             // 1403
        this.element_.style.clip = '';                                                                                 // 1404
    }                                                                                                                  // 1405
};                                                                                                                     // 1406
/**                                                                                                                    // 1407
   * Cleanup function to remove animation listeners.                                                                   // 1408
   *                                                                                                                   // 1409
   * @param {Event} evt                                                                                                // 1410
   * @private                                                                                                          // 1411
   */                                                                                                                  // 1412
MaterialMenu.prototype.removeAnimationEndListener_ = function (evt) {                                                  // 1413
    evt.target.classList.remove(MaterialMenu.prototype.CssClasses_.IS_ANIMATING);                                      // 1414
};                                                                                                                     // 1415
/**                                                                                                                    // 1416
   * Adds an event listener to clean up after the animation ends.                                                      // 1417
   *                                                                                                                   // 1418
   * @private                                                                                                          // 1419
   */                                                                                                                  // 1420
MaterialMenu.prototype.addAnimationEndListener_ = function () {                                                        // 1421
    this.element_.addEventListener('transitionend', this.removeAnimationEndListener_);                                 // 1422
    this.element_.addEventListener('webkitTransitionEnd', this.removeAnimationEndListener_);                           // 1423
};                                                                                                                     // 1424
/**                                                                                                                    // 1425
   * Displays the menu.                                                                                                // 1426
   *                                                                                                                   // 1427
   * @public                                                                                                           // 1428
   */                                                                                                                  // 1429
MaterialMenu.prototype.show = function (evt) {                                                                         // 1430
    if (this.element_ && this.container_ && this.outline_) {                                                           // 1431
        // Measure the inner element.                                                                                  // 1432
        var height = this.element_.getBoundingClientRect().height;                                                     // 1433
        var width = this.element_.getBoundingClientRect().width;                                                       // 1434
        // Apply the inner element's size to the container and outline.                                                // 1435
        this.container_.style.width = width + 'px';                                                                    // 1436
        this.container_.style.height = height + 'px';                                                                  // 1437
        this.outline_.style.width = width + 'px';                                                                      // 1438
        this.outline_.style.height = height + 'px';                                                                    // 1439
        var transitionDuration = this.Constant_.TRANSITION_DURATION_SECONDS * this.Constant_.TRANSITION_DURATION_FRACTION;
        // Calculate transition delays for individual menu items, so that they fade                                    // 1441
        // in one at a time.                                                                                           // 1442
        var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM);                                       // 1443
        for (var i = 0; i < items.length; i++) {                                                                       // 1444
            var itemDelay = null;                                                                                      // 1445
            if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT) || this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
                itemDelay = (height - items[i].offsetTop - items[i].offsetHeight) / height * transitionDuration + 's';
            } else {                                                                                                   // 1448
                itemDelay = items[i].offsetTop / height * transitionDuration + 's';                                    // 1449
            }                                                                                                          // 1450
            items[i].style.transitionDelay = itemDelay;                                                                // 1451
        }                                                                                                              // 1452
        // Apply the initial clip to the text before we start animating.                                               // 1453
        this.applyClip_(height, width);                                                                                // 1454
        // Wait for the next frame, turn on animation, and apply the final clip.                                       // 1455
        // Also make it visible. This triggers the transitions.                                                        // 1456
        window.requestAnimationFrame(function () {                                                                     // 1457
            this.element_.classList.add(this.CssClasses_.IS_ANIMATING);                                                // 1458
            this.element_.style.clip = 'rect(0 ' + width + 'px ' + height + 'px 0)';                                   // 1459
            this.container_.classList.add(this.CssClasses_.IS_VISIBLE);                                                // 1460
        }.bind(this));                                                                                                 // 1461
        // Clean up after the animation is complete.                                                                   // 1462
        this.addAnimationEndListener_();                                                                               // 1463
        // Add a click listener to the document, to close the menu.                                                    // 1464
        var callback = function (e) {                                                                                  // 1465
            // Check to see if the document is processing the same event that                                          // 1466
            // displayed the menu in the first place. If so, do nothing.                                               // 1467
            // Also check to see if the menu is in the process of closing itself, and                                  // 1468
            // do nothing in that case.                                                                                // 1469
            // Also check if the clicked element is a menu item                                                        // 1470
            // if so, do nothing.                                                                                      // 1471
            if (e !== evt && !this.closing_ && e.target.parentNode !== this.element_) {                                // 1472
                document.removeEventListener('click', callback);                                                       // 1473
                this.hide();                                                                                           // 1474
            }                                                                                                          // 1475
        }.bind(this);                                                                                                  // 1476
        document.addEventListener('click', callback);                                                                  // 1477
    }                                                                                                                  // 1478
};                                                                                                                     // 1479
MaterialMenu.prototype['show'] = MaterialMenu.prototype.show;                                                          // 1480
/**                                                                                                                    // 1481
   * Hides the menu.                                                                                                   // 1482
   *                                                                                                                   // 1483
   * @public                                                                                                           // 1484
   */                                                                                                                  // 1485
MaterialMenu.prototype.hide = function () {                                                                            // 1486
    if (this.element_ && this.container_ && this.outline_) {                                                           // 1487
        var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM);                                       // 1488
        // Remove all transition delays; menu items fade out concurrently.                                             // 1489
        for (var i = 0; i < items.length; i++) {                                                                       // 1490
            items[i].style.removeProperty('transition-delay');                                                         // 1491
        }                                                                                                              // 1492
        // Measure the inner element.                                                                                  // 1493
        var rect = this.element_.getBoundingClientRect();                                                              // 1494
        var height = rect.height;                                                                                      // 1495
        var width = rect.width;                                                                                        // 1496
        // Turn on animation, and apply the final clip. Also make invisible.                                           // 1497
        // This triggers the transitions.                                                                              // 1498
        this.element_.classList.add(this.CssClasses_.IS_ANIMATING);                                                    // 1499
        this.applyClip_(height, width);                                                                                // 1500
        this.container_.classList.remove(this.CssClasses_.IS_VISIBLE);                                                 // 1501
        // Clean up after the animation is complete.                                                                   // 1502
        this.addAnimationEndListener_();                                                                               // 1503
    }                                                                                                                  // 1504
};                                                                                                                     // 1505
MaterialMenu.prototype['hide'] = MaterialMenu.prototype.hide;                                                          // 1506
/**                                                                                                                    // 1507
   * Displays or hides the menu, depending on current state.                                                           // 1508
   *                                                                                                                   // 1509
   * @public                                                                                                           // 1510
   */                                                                                                                  // 1511
MaterialMenu.prototype.toggle = function (evt) {                                                                       // 1512
    if (this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {                                             // 1513
        this.hide();                                                                                                   // 1514
    } else {                                                                                                           // 1515
        this.show(evt);                                                                                                // 1516
    }                                                                                                                  // 1517
};                                                                                                                     // 1518
MaterialMenu.prototype['toggle'] = MaterialMenu.prototype.toggle;                                                      // 1519
// The component registers itself. It can assume componentHandler is available                                         // 1520
// in the global scope.                                                                                                // 1521
componentHandler.register({                                                                                            // 1522
    constructor: MaterialMenu,                                                                                         // 1523
    classAsString: 'MaterialMenu',                                                                                     // 1524
    cssClass: 'mdl-js-menu',                                                                                           // 1525
    widget: true                                                                                                       // 1526
});                                                                                                                    // 1527
/**                                                                                                                    // 1528
 * @license                                                                                                            // 1529
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 1530
 *                                                                                                                     // 1531
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 1532
 * you may not use this file except in compliance with the License.                                                    // 1533
 * You may obtain a copy of the License at                                                                             // 1534
 *                                                                                                                     // 1535
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 1536
 *                                                                                                                     // 1537
 * Unless required by applicable law or agreed to in writing, software                                                 // 1538
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 1539
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 1540
 * See the License for the specific language governing permissions and                                                 // 1541
 * limitations under the License.                                                                                      // 1542
 */                                                                                                                    // 1543
/**                                                                                                                    // 1544
   * Class constructor for Progress MDL component.                                                                     // 1545
   * Implements MDL component design pattern defined at:                                                               // 1546
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 1547
   *                                                                                                                   // 1548
   * @constructor                                                                                                      // 1549
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 1550
   */                                                                                                                  // 1551
var MaterialProgress = function MaterialProgress(element) {                                                            // 1552
    this.element_ = element;                                                                                           // 1553
    // Initialize instance.                                                                                            // 1554
    this.init();                                                                                                       // 1555
};                                                                                                                     // 1556
window['MaterialProgress'] = MaterialProgress;                                                                         // 1557
/**                                                                                                                    // 1558
   * Store constants in one place so they can be updated easily.                                                       // 1559
   *                                                                                                                   // 1560
   * @enum {string | number}                                                                                           // 1561
   * @private                                                                                                          // 1562
   */                                                                                                                  // 1563
MaterialProgress.prototype.Constant_ = {};                                                                             // 1564
/**                                                                                                                    // 1565
   * Store strings for class names defined by this component that are used in                                          // 1566
   * JavaScript. This allows us to simply change it in one place should we                                             // 1567
   * decide to modify at a later date.                                                                                 // 1568
   *                                                                                                                   // 1569
   * @enum {string}                                                                                                    // 1570
   * @private                                                                                                          // 1571
   */                                                                                                                  // 1572
MaterialProgress.prototype.CssClasses_ = { INDETERMINATE_CLASS: 'mdl-progress__indeterminate' };                       // 1573
/**                                                                                                                    // 1574
   * Set the current progress of the progressbar.                                                                      // 1575
   *                                                                                                                   // 1576
   * @param {number} p Percentage of the progress (0-100)                                                              // 1577
   * @public                                                                                                           // 1578
   */                                                                                                                  // 1579
MaterialProgress.prototype.setProgress = function (p) {                                                                // 1580
    if (this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)) {                                      // 1581
        return;                                                                                                        // 1582
    }                                                                                                                  // 1583
    this.progressbar_.style.width = p + '%';                                                                           // 1584
};                                                                                                                     // 1585
MaterialProgress.prototype['setProgress'] = MaterialProgress.prototype.setProgress;                                    // 1586
/**                                                                                                                    // 1587
   * Set the current progress of the buffer.                                                                           // 1588
   *                                                                                                                   // 1589
   * @param {number} p Percentage of the buffer (0-100)                                                                // 1590
   * @public                                                                                                           // 1591
   */                                                                                                                  // 1592
MaterialProgress.prototype.setBuffer = function (p) {                                                                  // 1593
    this.bufferbar_.style.width = p + '%';                                                                             // 1594
    this.auxbar_.style.width = 100 - p + '%';                                                                          // 1595
};                                                                                                                     // 1596
MaterialProgress.prototype['setBuffer'] = MaterialProgress.prototype.setBuffer;                                        // 1597
/**                                                                                                                    // 1598
   * Initialize element.                                                                                               // 1599
   */                                                                                                                  // 1600
MaterialProgress.prototype.init = function () {                                                                        // 1601
    if (this.element_) {                                                                                               // 1602
        var el = document.createElement('div');                                                                        // 1603
        el.className = 'progressbar bar bar1';                                                                         // 1604
        this.element_.appendChild(el);                                                                                 // 1605
        this.progressbar_ = el;                                                                                        // 1606
        el = document.createElement('div');                                                                            // 1607
        el.className = 'bufferbar bar bar2';                                                                           // 1608
        this.element_.appendChild(el);                                                                                 // 1609
        this.bufferbar_ = el;                                                                                          // 1610
        el = document.createElement('div');                                                                            // 1611
        el.className = 'auxbar bar bar3';                                                                              // 1612
        this.element_.appendChild(el);                                                                                 // 1613
        this.auxbar_ = el;                                                                                             // 1614
        this.progressbar_.style.width = '0%';                                                                          // 1615
        this.bufferbar_.style.width = '100%';                                                                          // 1616
        this.auxbar_.style.width = '0%';                                                                               // 1617
        this.element_.classList.add('is-upgraded');                                                                    // 1618
    }                                                                                                                  // 1619
};                                                                                                                     // 1620
// The component registers itself. It can assume componentHandler is available                                         // 1621
// in the global scope.                                                                                                // 1622
componentHandler.register({                                                                                            // 1623
    constructor: MaterialProgress,                                                                                     // 1624
    classAsString: 'MaterialProgress',                                                                                 // 1625
    cssClass: 'mdl-js-progress',                                                                                       // 1626
    widget: true                                                                                                       // 1627
});                                                                                                                    // 1628
/**                                                                                                                    // 1629
 * @license                                                                                                            // 1630
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 1631
 *                                                                                                                     // 1632
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 1633
 * you may not use this file except in compliance with the License.                                                    // 1634
 * You may obtain a copy of the License at                                                                             // 1635
 *                                                                                                                     // 1636
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 1637
 *                                                                                                                     // 1638
 * Unless required by applicable law or agreed to in writing, software                                                 // 1639
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 1640
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 1641
 * See the License for the specific language governing permissions and                                                 // 1642
 * limitations under the License.                                                                                      // 1643
 */                                                                                                                    // 1644
/**                                                                                                                    // 1645
   * Class constructor for Radio MDL component.                                                                        // 1646
   * Implements MDL component design pattern defined at:                                                               // 1647
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 1648
   *                                                                                                                   // 1649
   * @constructor                                                                                                      // 1650
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 1651
   */                                                                                                                  // 1652
var MaterialRadio = function MaterialRadio(element) {                                                                  // 1653
    this.element_ = element;                                                                                           // 1654
    // Initialize instance.                                                                                            // 1655
    this.init();                                                                                                       // 1656
};                                                                                                                     // 1657
window['MaterialRadio'] = MaterialRadio;                                                                               // 1658
/**                                                                                                                    // 1659
   * Store constants in one place so they can be updated easily.                                                       // 1660
   *                                                                                                                   // 1661
   * @enum {string | number}                                                                                           // 1662
   * @private                                                                                                          // 1663
   */                                                                                                                  // 1664
MaterialRadio.prototype.Constant_ = { TINY_TIMEOUT: 0.001 };                                                           // 1665
/**                                                                                                                    // 1666
   * Store strings for class names defined by this component that are used in                                          // 1667
   * JavaScript. This allows us to simply change it in one place should we                                             // 1668
   * decide to modify at a later date.                                                                                 // 1669
   *                                                                                                                   // 1670
   * @enum {string}                                                                                                    // 1671
   * @private                                                                                                          // 1672
   */                                                                                                                  // 1673
MaterialRadio.prototype.CssClasses_ = {                                                                                // 1674
    IS_FOCUSED: 'is-focused',                                                                                          // 1675
    IS_DISABLED: 'is-disabled',                                                                                        // 1676
    IS_CHECKED: 'is-checked',                                                                                          // 1677
    IS_UPGRADED: 'is-upgraded',                                                                                        // 1678
    JS_RADIO: 'mdl-js-radio',                                                                                          // 1679
    RADIO_BTN: 'mdl-radio__button',                                                                                    // 1680
    RADIO_OUTER_CIRCLE: 'mdl-radio__outer-circle',                                                                     // 1681
    RADIO_INNER_CIRCLE: 'mdl-radio__inner-circle',                                                                     // 1682
    RIPPLE_EFFECT: 'mdl-js-ripple-effect',                                                                             // 1683
    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',                                                       // 1684
    RIPPLE_CONTAINER: 'mdl-radio__ripple-container',                                                                   // 1685
    RIPPLE_CENTER: 'mdl-ripple--center',                                                                               // 1686
    RIPPLE: 'mdl-ripple'                                                                                               // 1687
};                                                                                                                     // 1688
/**                                                                                                                    // 1689
   * Handle change of state.                                                                                           // 1690
   *                                                                                                                   // 1691
   * @param {Event} event The event that fired.                                                                        // 1692
   * @private                                                                                                          // 1693
   */                                                                                                                  // 1694
MaterialRadio.prototype.onChange_ = function (event) {                                                                 // 1695
    // Since other radio buttons don't get change events, we need to look for                                          // 1696
    // them to update their classes.                                                                                   // 1697
    var radios = document.getElementsByClassName(this.CssClasses_.JS_RADIO);                                           // 1698
    for (var i = 0; i < radios.length; i++) {                                                                          // 1699
        var button = radios[i].querySelector('.' + this.CssClasses_.RADIO_BTN);                                        // 1700
        // Different name == different group, so no point updating those.                                              // 1701
        if (button.getAttribute('name') === this.btnElement_.getAttribute('name')) {                                   // 1702
            if (typeof radios[i]['MaterialRadio'] !== 'undefined') {                                                   // 1703
                radios[i]['MaterialRadio'].updateClasses_();                                                           // 1704
            }                                                                                                          // 1705
        }                                                                                                              // 1706
    }                                                                                                                  // 1707
};                                                                                                                     // 1708
/**                                                                                                                    // 1709
   * Handle focus.                                                                                                     // 1710
   *                                                                                                                   // 1711
   * @param {Event} event The event that fired.                                                                        // 1712
   * @private                                                                                                          // 1713
   */                                                                                                                  // 1714
MaterialRadio.prototype.onFocus_ = function (event) {                                                                  // 1715
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);                                                          // 1716
};                                                                                                                     // 1717
/**                                                                                                                    // 1718
   * Handle lost focus.                                                                                                // 1719
   *                                                                                                                   // 1720
   * @param {Event} event The event that fired.                                                                        // 1721
   * @private                                                                                                          // 1722
   */                                                                                                                  // 1723
MaterialRadio.prototype.onBlur_ = function (event) {                                                                   // 1724
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);                                                       // 1725
};                                                                                                                     // 1726
/**                                                                                                                    // 1727
   * Handle mouseup.                                                                                                   // 1728
   *                                                                                                                   // 1729
   * @param {Event} event The event that fired.                                                                        // 1730
   * @private                                                                                                          // 1731
   */                                                                                                                  // 1732
MaterialRadio.prototype.onMouseup_ = function (event) {                                                                // 1733
    this.blur_();                                                                                                      // 1734
};                                                                                                                     // 1735
/**                                                                                                                    // 1736
   * Update classes.                                                                                                   // 1737
   *                                                                                                                   // 1738
   * @private                                                                                                          // 1739
   */                                                                                                                  // 1740
MaterialRadio.prototype.updateClasses_ = function () {                                                                 // 1741
    this.checkDisabled();                                                                                              // 1742
    this.checkToggleState();                                                                                           // 1743
};                                                                                                                     // 1744
/**                                                                                                                    // 1745
   * Add blur.                                                                                                         // 1746
   *                                                                                                                   // 1747
   * @private                                                                                                          // 1748
   */                                                                                                                  // 1749
MaterialRadio.prototype.blur_ = function () {                                                                          // 1750
    // TODO: figure out why there's a focus event being fired after our blur,                                          // 1751
    // so that we can avoid this hack.                                                                                 // 1752
    window.setTimeout(function () {                                                                                    // 1753
        this.btnElement_.blur();                                                                                       // 1754
    }.bind(this), this.Constant_.TINY_TIMEOUT);                                                                        // 1755
};                                                                                                                     // 1756
// Public methods.                                                                                                     // 1757
/**                                                                                                                    // 1758
   * Check the components disabled state.                                                                              // 1759
   *                                                                                                                   // 1760
   * @public                                                                                                           // 1761
   */                                                                                                                  // 1762
MaterialRadio.prototype.checkDisabled = function () {                                                                  // 1763
    if (this.btnElement_.disabled) {                                                                                   // 1764
        this.element_.classList.add(this.CssClasses_.IS_DISABLED);                                                     // 1765
    } else {                                                                                                           // 1766
        this.element_.classList.remove(this.CssClasses_.IS_DISABLED);                                                  // 1767
    }                                                                                                                  // 1768
};                                                                                                                     // 1769
MaterialRadio.prototype['checkDisabled'] = MaterialRadio.prototype.checkDisabled;                                      // 1770
/**                                                                                                                    // 1771
   * Check the components toggled state.                                                                               // 1772
   *                                                                                                                   // 1773
   * @public                                                                                                           // 1774
   */                                                                                                                  // 1775
MaterialRadio.prototype.checkToggleState = function () {                                                               // 1776
    if (this.btnElement_.checked) {                                                                                    // 1777
        this.element_.classList.add(this.CssClasses_.IS_CHECKED);                                                      // 1778
    } else {                                                                                                           // 1779
        this.element_.classList.remove(this.CssClasses_.IS_CHECKED);                                                   // 1780
    }                                                                                                                  // 1781
};                                                                                                                     // 1782
MaterialRadio.prototype['checkToggleState'] = MaterialRadio.prototype.checkToggleState;                                // 1783
/**                                                                                                                    // 1784
   * Disable radio.                                                                                                    // 1785
   *                                                                                                                   // 1786
   * @public                                                                                                           // 1787
   */                                                                                                                  // 1788
MaterialRadio.prototype.disable = function () {                                                                        // 1789
    this.btnElement_.disabled = true;                                                                                  // 1790
    this.updateClasses_();                                                                                             // 1791
};                                                                                                                     // 1792
MaterialRadio.prototype['disable'] = MaterialRadio.prototype.disable;                                                  // 1793
/**                                                                                                                    // 1794
   * Enable radio.                                                                                                     // 1795
   *                                                                                                                   // 1796
   * @public                                                                                                           // 1797
   */                                                                                                                  // 1798
MaterialRadio.prototype.enable = function () {                                                                         // 1799
    this.btnElement_.disabled = false;                                                                                 // 1800
    this.updateClasses_();                                                                                             // 1801
};                                                                                                                     // 1802
MaterialRadio.prototype['enable'] = MaterialRadio.prototype.enable;                                                    // 1803
/**                                                                                                                    // 1804
   * Check radio.                                                                                                      // 1805
   *                                                                                                                   // 1806
   * @public                                                                                                           // 1807
   */                                                                                                                  // 1808
MaterialRadio.prototype.check = function () {                                                                          // 1809
    this.btnElement_.checked = true;                                                                                   // 1810
    this.onChange_(null);                                                                                              // 1811
};                                                                                                                     // 1812
MaterialRadio.prototype['check'] = MaterialRadio.prototype.check;                                                      // 1813
/**                                                                                                                    // 1814
   * Uncheck radio.                                                                                                    // 1815
   *                                                                                                                   // 1816
   * @public                                                                                                           // 1817
   */                                                                                                                  // 1818
MaterialRadio.prototype.uncheck = function () {                                                                        // 1819
    this.btnElement_.checked = false;                                                                                  // 1820
    this.onChange_(null);                                                                                              // 1821
};                                                                                                                     // 1822
MaterialRadio.prototype['uncheck'] = MaterialRadio.prototype.uncheck;                                                  // 1823
/**                                                                                                                    // 1824
   * Initialize element.                                                                                               // 1825
   */                                                                                                                  // 1826
MaterialRadio.prototype.init = function () {                                                                           // 1827
    if (this.element_) {                                                                                               // 1828
        this.btnElement_ = this.element_.querySelector('.' + this.CssClasses_.RADIO_BTN);                              // 1829
        this.boundChangeHandler_ = this.onChange_.bind(this);                                                          // 1830
        this.boundFocusHandler_ = this.onChange_.bind(this);                                                           // 1831
        this.boundBlurHandler_ = this.onBlur_.bind(this);                                                              // 1832
        this.boundMouseUpHandler_ = this.onMouseup_.bind(this);                                                        // 1833
        var outerCircle = document.createElement('span');                                                              // 1834
        outerCircle.classList.add(this.CssClasses_.RADIO_OUTER_CIRCLE);                                                // 1835
        var innerCircle = document.createElement('span');                                                              // 1836
        innerCircle.classList.add(this.CssClasses_.RADIO_INNER_CIRCLE);                                                // 1837
        this.element_.appendChild(outerCircle);                                                                        // 1838
        this.element_.appendChild(innerCircle);                                                                        // 1839
        var rippleContainer;                                                                                           // 1840
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {                                        // 1841
            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);                                        // 1842
            rippleContainer = document.createElement('span');                                                          // 1843
            rippleContainer.classList.add(this.CssClasses_.RIPPLE_CONTAINER);                                          // 1844
            rippleContainer.classList.add(this.CssClasses_.RIPPLE_EFFECT);                                             // 1845
            rippleContainer.classList.add(this.CssClasses_.RIPPLE_CENTER);                                             // 1846
            rippleContainer.addEventListener('mouseup', this.boundMouseUpHandler_);                                    // 1847
            var ripple = document.createElement('span');                                                               // 1848
            ripple.classList.add(this.CssClasses_.RIPPLE);                                                             // 1849
            rippleContainer.appendChild(ripple);                                                                       // 1850
            this.element_.appendChild(rippleContainer);                                                                // 1851
        }                                                                                                              // 1852
        this.btnElement_.addEventListener('change', this.boundChangeHandler_);                                         // 1853
        this.btnElement_.addEventListener('focus', this.boundFocusHandler_);                                           // 1854
        this.btnElement_.addEventListener('blur', this.boundBlurHandler_);                                             // 1855
        this.element_.addEventListener('mouseup', this.boundMouseUpHandler_);                                          // 1856
        this.updateClasses_();                                                                                         // 1857
        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);                                                     // 1858
    }                                                                                                                  // 1859
};                                                                                                                     // 1860
// The component registers itself. It can assume componentHandler is available                                         // 1861
// in the global scope.                                                                                                // 1862
componentHandler.register({                                                                                            // 1863
    constructor: MaterialRadio,                                                                                        // 1864
    classAsString: 'MaterialRadio',                                                                                    // 1865
    cssClass: 'mdl-js-radio',                                                                                          // 1866
    widget: true                                                                                                       // 1867
});                                                                                                                    // 1868
/**                                                                                                                    // 1869
 * @license                                                                                                            // 1870
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 1871
 *                                                                                                                     // 1872
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 1873
 * you may not use this file except in compliance with the License.                                                    // 1874
 * You may obtain a copy of the License at                                                                             // 1875
 *                                                                                                                     // 1876
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 1877
 *                                                                                                                     // 1878
 * Unless required by applicable law or agreed to in writing, software                                                 // 1879
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 1880
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 1881
 * See the License for the specific language governing permissions and                                                 // 1882
 * limitations under the License.                                                                                      // 1883
 */                                                                                                                    // 1884
/**                                                                                                                    // 1885
   * Class constructor for Slider MDL component.                                                                       // 1886
   * Implements MDL component design pattern defined at:                                                               // 1887
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 1888
   *                                                                                                                   // 1889
   * @constructor                                                                                                      // 1890
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 1891
   */                                                                                                                  // 1892
var MaterialSlider = function MaterialSlider(element) {                                                                // 1893
    this.element_ = element;                                                                                           // 1894
    // Browser feature detection.                                                                                      // 1895
    this.isIE_ = window.navigator.msPointerEnabled;                                                                    // 1896
    // Initialize instance.                                                                                            // 1897
    this.init();                                                                                                       // 1898
};                                                                                                                     // 1899
window['MaterialSlider'] = MaterialSlider;                                                                             // 1900
/**                                                                                                                    // 1901
   * Store constants in one place so they can be updated easily.                                                       // 1902
   *                                                                                                                   // 1903
   * @enum {string | number}                                                                                           // 1904
   * @private                                                                                                          // 1905
   */                                                                                                                  // 1906
MaterialSlider.prototype.Constant_ = {};                                                                               // 1907
/**                                                                                                                    // 1908
   * Store strings for class names defined by this component that are used in                                          // 1909
   * JavaScript. This allows us to simply change it in one place should we                                             // 1910
   * decide to modify at a later date.                                                                                 // 1911
   *                                                                                                                   // 1912
   * @enum {string}                                                                                                    // 1913
   * @private                                                                                                          // 1914
   */                                                                                                                  // 1915
MaterialSlider.prototype.CssClasses_ = {                                                                               // 1916
    IE_CONTAINER: 'mdl-slider__ie-container',                                                                          // 1917
    SLIDER_CONTAINER: 'mdl-slider__container',                                                                         // 1918
    BACKGROUND_FLEX: 'mdl-slider__background-flex',                                                                    // 1919
    BACKGROUND_LOWER: 'mdl-slider__background-lower',                                                                  // 1920
    BACKGROUND_UPPER: 'mdl-slider__background-upper',                                                                  // 1921
    IS_LOWEST_VALUE: 'is-lowest-value',                                                                                // 1922
    IS_UPGRADED: 'is-upgraded'                                                                                         // 1923
};                                                                                                                     // 1924
/**                                                                                                                    // 1925
   * Handle input on element.                                                                                          // 1926
   *                                                                                                                   // 1927
   * @param {Event} event The event that fired.                                                                        // 1928
   * @private                                                                                                          // 1929
   */                                                                                                                  // 1930
MaterialSlider.prototype.onInput_ = function (event) {                                                                 // 1931
    this.updateValueStyles_();                                                                                         // 1932
};                                                                                                                     // 1933
/**                                                                                                                    // 1934
   * Handle change on element.                                                                                         // 1935
   *                                                                                                                   // 1936
   * @param {Event} event The event that fired.                                                                        // 1937
   * @private                                                                                                          // 1938
   */                                                                                                                  // 1939
MaterialSlider.prototype.onChange_ = function (event) {                                                                // 1940
    this.updateValueStyles_();                                                                                         // 1941
};                                                                                                                     // 1942
/**                                                                                                                    // 1943
   * Handle mouseup on element.                                                                                        // 1944
   *                                                                                                                   // 1945
   * @param {Event} event The event that fired.                                                                        // 1946
   * @private                                                                                                          // 1947
   */                                                                                                                  // 1948
MaterialSlider.prototype.onMouseUp_ = function (event) {                                                               // 1949
    event.target.blur();                                                                                               // 1950
};                                                                                                                     // 1951
/**                                                                                                                    // 1952
   * Handle mousedown on container element.                                                                            // 1953
   * This handler is purpose is to not require the use to click                                                        // 1954
   * exactly on the 2px slider element, as FireFox seems to be very                                                    // 1955
   * strict about this.                                                                                                // 1956
   *                                                                                                                   // 1957
   * @param {Event} event The event that fired.                                                                        // 1958
   * @private                                                                                                          // 1959
   * @suppress {missingProperties}                                                                                     // 1960
   */                                                                                                                  // 1961
MaterialSlider.prototype.onContainerMouseDown_ = function (event) {                                                    // 1962
    // If this click is not on the parent element (but rather some child)                                              // 1963
    // ignore. It may still bubble up.                                                                                 // 1964
    if (event.target !== this.element_.parentElement) {                                                                // 1965
        return;                                                                                                        // 1966
    }                                                                                                                  // 1967
    // Discard the original event and create a new event that                                                          // 1968
    // is on the slider element.                                                                                       // 1969
    event.preventDefault();                                                                                            // 1970
    var newEvent = new MouseEvent('mousedown', {                                                                       // 1971
        target: event.target,                                                                                          // 1972
        buttons: event.buttons,                                                                                        // 1973
        clientX: event.clientX,                                                                                        // 1974
        clientY: this.element_.getBoundingClientRect().y                                                               // 1975
    });                                                                                                                // 1976
    this.element_.dispatchEvent(newEvent);                                                                             // 1977
};                                                                                                                     // 1978
/**                                                                                                                    // 1979
   * Handle updating of values.                                                                                        // 1980
   *                                                                                                                   // 1981
   * @private                                                                                                          // 1982
   */                                                                                                                  // 1983
MaterialSlider.prototype.updateValueStyles_ = function () {                                                            // 1984
    // Calculate and apply percentages to div structure behind slider.                                                 // 1985
    var fraction = (this.element_.value - this.element_.min) / (this.element_.max - this.element_.min);                // 1986
    if (fraction === 0) {                                                                                              // 1987
        this.element_.classList.add(this.CssClasses_.IS_LOWEST_VALUE);                                                 // 1988
    } else {                                                                                                           // 1989
        this.element_.classList.remove(this.CssClasses_.IS_LOWEST_VALUE);                                              // 1990
    }                                                                                                                  // 1991
    if (!this.isIE_) {                                                                                                 // 1992
        this.backgroundLower_.style.flex = fraction;                                                                   // 1993
        this.backgroundLower_.style.webkitFlex = fraction;                                                             // 1994
        this.backgroundUpper_.style.flex = 1 - fraction;                                                               // 1995
        this.backgroundUpper_.style.webkitFlex = 1 - fraction;                                                         // 1996
    }                                                                                                                  // 1997
};                                                                                                                     // 1998
// Public methods.                                                                                                     // 1999
/**                                                                                                                    // 2000
   * Disable slider.                                                                                                   // 2001
   *                                                                                                                   // 2002
   * @public                                                                                                           // 2003
   */                                                                                                                  // 2004
MaterialSlider.prototype.disable = function () {                                                                       // 2005
    this.element_.disabled = true;                                                                                     // 2006
};                                                                                                                     // 2007
MaterialSlider.prototype['disable'] = MaterialSlider.prototype.disable;                                                // 2008
/**                                                                                                                    // 2009
   * Enable slider.                                                                                                    // 2010
   *                                                                                                                   // 2011
   * @public                                                                                                           // 2012
   */                                                                                                                  // 2013
MaterialSlider.prototype.enable = function () {                                                                        // 2014
    this.element_.disabled = false;                                                                                    // 2015
};                                                                                                                     // 2016
MaterialSlider.prototype['enable'] = MaterialSlider.prototype.enable;                                                  // 2017
/**                                                                                                                    // 2018
   * Update slider value.                                                                                              // 2019
   *                                                                                                                   // 2020
   * @param {number} value The value to which to set the control (optional).                                           // 2021
   * @public                                                                                                           // 2022
   */                                                                                                                  // 2023
MaterialSlider.prototype.change = function (value) {                                                                   // 2024
    if (typeof value !== 'undefined') {                                                                                // 2025
        this.element_.value = value;                                                                                   // 2026
    }                                                                                                                  // 2027
    this.updateValueStyles_();                                                                                         // 2028
};                                                                                                                     // 2029
MaterialSlider.prototype['change'] = MaterialSlider.prototype.change;                                                  // 2030
/**                                                                                                                    // 2031
   * Initialize element.                                                                                               // 2032
   */                                                                                                                  // 2033
MaterialSlider.prototype.init = function () {                                                                          // 2034
    if (this.element_) {                                                                                               // 2035
        if (this.isIE_) {                                                                                              // 2036
            // Since we need to specify a very large height in IE due to                                               // 2037
            // implementation limitations, we add a parent here that trims it down to                                  // 2038
            // a reasonable size.                                                                                      // 2039
            var containerIE = document.createElement('div');                                                           // 2040
            containerIE.classList.add(this.CssClasses_.IE_CONTAINER);                                                  // 2041
            this.element_.parentElement.insertBefore(containerIE, this.element_);                                      // 2042
            this.element_.parentElement.removeChild(this.element_);                                                    // 2043
            containerIE.appendChild(this.element_);                                                                    // 2044
        } else {                                                                                                       // 2045
            // For non-IE browsers, we need a div structure that sits behind the                                       // 2046
            // slider and allows us to style the left and right sides of it with                                       // 2047
            // different colors.                                                                                       // 2048
            var container = document.createElement('div');                                                             // 2049
            container.classList.add(this.CssClasses_.SLIDER_CONTAINER);                                                // 2050
            this.element_.parentElement.insertBefore(container, this.element_);                                        // 2051
            this.element_.parentElement.removeChild(this.element_);                                                    // 2052
            container.appendChild(this.element_);                                                                      // 2053
            var backgroundFlex = document.createElement('div');                                                        // 2054
            backgroundFlex.classList.add(this.CssClasses_.BACKGROUND_FLEX);                                            // 2055
            container.appendChild(backgroundFlex);                                                                     // 2056
            this.backgroundLower_ = document.createElement('div');                                                     // 2057
            this.backgroundLower_.classList.add(this.CssClasses_.BACKGROUND_LOWER);                                    // 2058
            backgroundFlex.appendChild(this.backgroundLower_);                                                         // 2059
            this.backgroundUpper_ = document.createElement('div');                                                     // 2060
            this.backgroundUpper_.classList.add(this.CssClasses_.BACKGROUND_UPPER);                                    // 2061
            backgroundFlex.appendChild(this.backgroundUpper_);                                                         // 2062
        }                                                                                                              // 2063
        this.boundInputHandler = this.onInput_.bind(this);                                                             // 2064
        this.boundChangeHandler = this.onChange_.bind(this);                                                           // 2065
        this.boundMouseUpHandler = this.onMouseUp_.bind(this);                                                         // 2066
        this.boundContainerMouseDownHandler = this.onContainerMouseDown_.bind(this);                                   // 2067
        this.element_.addEventListener('input', this.boundInputHandler);                                               // 2068
        this.element_.addEventListener('change', this.boundChangeHandler);                                             // 2069
        this.element_.addEventListener('mouseup', this.boundMouseUpHandler);                                           // 2070
        this.element_.parentElement.addEventListener('mousedown', this.boundContainerMouseDownHandler);                // 2071
        this.updateValueStyles_();                                                                                     // 2072
        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);                                                     // 2073
    }                                                                                                                  // 2074
};                                                                                                                     // 2075
// The component registers itself. It can assume componentHandler is available                                         // 2076
// in the global scope.                                                                                                // 2077
componentHandler.register({                                                                                            // 2078
    constructor: MaterialSlider,                                                                                       // 2079
    classAsString: 'MaterialSlider',                                                                                   // 2080
    cssClass: 'mdl-js-slider',                                                                                         // 2081
    widget: true                                                                                                       // 2082
});                                                                                                                    // 2083
/**                                                                                                                    // 2084
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 2085
 *                                                                                                                     // 2086
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 2087
 * you may not use this file except in compliance with the License.                                                    // 2088
 * You may obtain a copy of the License at                                                                             // 2089
 *                                                                                                                     // 2090
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 2091
 *                                                                                                                     // 2092
 * Unless required by applicable law or agreed to in writing, software                                                 // 2093
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 2094
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 2095
 * See the License for the specific language governing permissions and                                                 // 2096
 * limitations under the License.                                                                                      // 2097
 */                                                                                                                    // 2098
/**                                                                                                                    // 2099
   * Class constructor for Snackbar MDL component.                                                                     // 2100
   * Implements MDL component design pattern defined at:                                                               // 2101
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 2102
   *                                                                                                                   // 2103
   * @constructor                                                                                                      // 2104
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 2105
   */                                                                                                                  // 2106
var MaterialSnackbar = function MaterialSnackbar(element) {                                                            // 2107
    this.element_ = element;                                                                                           // 2108
    this.textElement_ = this.element_.querySelector('.' + this.cssClasses_.MESSAGE);                                   // 2109
    this.actionElement_ = this.element_.querySelector('.' + this.cssClasses_.ACTION);                                  // 2110
    if (!this.textElement_) {                                                                                          // 2111
        throw new Error('There must be a message element for a snackbar.');                                            // 2112
    }                                                                                                                  // 2113
    if (!this.actionElement_) {                                                                                        // 2114
        throw new Error('There must be an action element for a snackbar.');                                            // 2115
    }                                                                                                                  // 2116
    this.active = false;                                                                                               // 2117
    this.actionHandler_ = undefined;                                                                                   // 2118
    this.message_ = undefined;                                                                                         // 2119
    this.actionText_ = undefined;                                                                                      // 2120
    this.queuedNotifications_ = [];                                                                                    // 2121
    this.setActionHidden_(true);                                                                                       // 2122
};                                                                                                                     // 2123
window['MaterialSnackbar'] = MaterialSnackbar;                                                                         // 2124
/**                                                                                                                    // 2125
   * Store constants in one place so they can be updated easily.                                                       // 2126
   *                                                                                                                   // 2127
   * @enum {string | number}                                                                                           // 2128
   * @private                                                                                                          // 2129
   */                                                                                                                  // 2130
MaterialSnackbar.prototype.Constant_ = {                                                                               // 2131
    // The duration of the snackbar show/hide animation, in ms.                                                        // 2132
    ANIMATION_LENGTH: 250                                                                                              // 2133
};                                                                                                                     // 2134
/**                                                                                                                    // 2135
   * Store strings for class names defined by this component that are used in                                          // 2136
   * JavaScript. This allows us to simply change it in one place should we                                             // 2137
   * decide to modify at a later date.                                                                                 // 2138
   *                                                                                                                   // 2139
   * @enum {string}                                                                                                    // 2140
   * @private                                                                                                          // 2141
   */                                                                                                                  // 2142
MaterialSnackbar.prototype.cssClasses_ = {                                                                             // 2143
    SNACKBAR: 'mdl-snackbar',                                                                                          // 2144
    MESSAGE: 'mdl-snackbar__text',                                                                                     // 2145
    ACTION: 'mdl-snackbar__action',                                                                                    // 2146
    ACTIVE: 'mdl-snackbar--active'                                                                                     // 2147
};                                                                                                                     // 2148
/**                                                                                                                    // 2149
   * Display the snackbar.                                                                                             // 2150
   *                                                                                                                   // 2151
   * @private                                                                                                          // 2152
   */                                                                                                                  // 2153
MaterialSnackbar.prototype.displaySnackbar_ = function () {                                                            // 2154
    this.element_.setAttribute('aria-hidden', 'true');                                                                 // 2155
    if (this.actionHandler_) {                                                                                         // 2156
        this.actionElement_.textContent = this.actionText_;                                                            // 2157
        this.actionElement_.addEventListener('click', this.actionHandler_);                                            // 2158
        this.setActionHidden_(false);                                                                                  // 2159
    }                                                                                                                  // 2160
    this.textElement_.textContent = this.message_;                                                                     // 2161
    this.element_.classList.add(this.cssClasses_.ACTIVE);                                                              // 2162
    this.element_.setAttribute('aria-hidden', 'false');                                                                // 2163
    setTimeout(this.cleanup_.bind(this), this.timeout_);                                                               // 2164
};                                                                                                                     // 2165
/**                                                                                                                    // 2166
   * Show the snackbar.                                                                                                // 2167
   *                                                                                                                   // 2168
   * @param {Object} data The data for the notification.                                                               // 2169
   * @public                                                                                                           // 2170
   */                                                                                                                  // 2171
MaterialSnackbar.prototype.showSnackbar = function (data) {                                                            // 2172
    if (data === undefined) {                                                                                          // 2173
        throw new Error('Please provide a data object with at least a message to display.');                           // 2174
    }                                                                                                                  // 2175
    if (data['message'] === undefined) {                                                                               // 2176
        throw new Error('Please provide a message to be displayed.');                                                  // 2177
    }                                                                                                                  // 2178
    if (data['actionHandler'] && !data['actionText']) {                                                                // 2179
        throw new Error('Please provide action text with the handler.');                                               // 2180
    }                                                                                                                  // 2181
    if (this.active) {                                                                                                 // 2182
        this.queuedNotifications_.push(data);                                                                          // 2183
    } else {                                                                                                           // 2184
        this.active = true;                                                                                            // 2185
        this.message_ = data['message'];                                                                               // 2186
        if (data['timeout']) {                                                                                         // 2187
            this.timeout_ = data['timeout'];                                                                           // 2188
        } else {                                                                                                       // 2189
            this.timeout_ = 2750;                                                                                      // 2190
        }                                                                                                              // 2191
        if (data['actionHandler']) {                                                                                   // 2192
            this.actionHandler_ = data['actionHandler'];                                                               // 2193
        }                                                                                                              // 2194
        if (data['actionText']) {                                                                                      // 2195
            this.actionText_ = data['actionText'];                                                                     // 2196
        }                                                                                                              // 2197
        this.displaySnackbar_();                                                                                       // 2198
    }                                                                                                                  // 2199
};                                                                                                                     // 2200
MaterialSnackbar.prototype['showSnackbar'] = MaterialSnackbar.prototype.showSnackbar;                                  // 2201
/**                                                                                                                    // 2202
   * Check if the queue has items within it.                                                                           // 2203
   * If it does, display the next entry.                                                                               // 2204
   *                                                                                                                   // 2205
   * @private                                                                                                          // 2206
   */                                                                                                                  // 2207
MaterialSnackbar.prototype.checkQueue_ = function () {                                                                 // 2208
    if (this.queuedNotifications_.length > 0) {                                                                        // 2209
        this.showSnackbar(this.queuedNotifications_.shift());                                                          // 2210
    }                                                                                                                  // 2211
};                                                                                                                     // 2212
/**                                                                                                                    // 2213
   * Cleanup the snackbar event listeners and accessiblity attributes.                                                 // 2214
   *                                                                                                                   // 2215
   * @private                                                                                                          // 2216
   */                                                                                                                  // 2217
MaterialSnackbar.prototype.cleanup_ = function () {                                                                    // 2218
    this.element_.classList.remove(this.cssClasses_.ACTIVE);                                                           // 2219
    setTimeout(function () {                                                                                           // 2220
        this.element_.setAttribute('aria-hidden', 'true');                                                             // 2221
        this.textElement_.textContent = '';                                                                            // 2222
        if (!Boolean(this.actionElement_.getAttribute('aria-hidden'))) {                                               // 2223
            this.setActionHidden_(true);                                                                               // 2224
            this.actionElement_.textContent = '';                                                                      // 2225
            this.actionElement_.removeEventListener('click', this.actionHandler_);                                     // 2226
        }                                                                                                              // 2227
        this.actionHandler_ = undefined;                                                                               // 2228
        this.message_ = undefined;                                                                                     // 2229
        this.actionText_ = undefined;                                                                                  // 2230
        this.active = false;                                                                                           // 2231
        this.checkQueue_();                                                                                            // 2232
    }.bind(this), this.Constant_.ANIMATION_LENGTH);                                                                    // 2233
};                                                                                                                     // 2234
/**                                                                                                                    // 2235
   * Set the action handler hidden state.                                                                              // 2236
   *                                                                                                                   // 2237
   * @param {boolean} value                                                                                            // 2238
   * @private                                                                                                          // 2239
   */                                                                                                                  // 2240
MaterialSnackbar.prototype.setActionHidden_ = function (value) {                                                       // 2241
    if (value) {                                                                                                       // 2242
        this.actionElement_.setAttribute('aria-hidden', 'true');                                                       // 2243
    } else {                                                                                                           // 2244
        this.actionElement_.removeAttribute('aria-hidden');                                                            // 2245
    }                                                                                                                  // 2246
};                                                                                                                     // 2247
// The component registers itself. It can assume componentHandler is available                                         // 2248
// in the global scope.                                                                                                // 2249
componentHandler.register({                                                                                            // 2250
    constructor: MaterialSnackbar,                                                                                     // 2251
    classAsString: 'MaterialSnackbar',                                                                                 // 2252
    cssClass: 'mdl-js-snackbar',                                                                                       // 2253
    widget: true                                                                                                       // 2254
});                                                                                                                    // 2255
/**                                                                                                                    // 2256
 * @license                                                                                                            // 2257
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 2258
 *                                                                                                                     // 2259
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 2260
 * you may not use this file except in compliance with the License.                                                    // 2261
 * You may obtain a copy of the License at                                                                             // 2262
 *                                                                                                                     // 2263
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 2264
 *                                                                                                                     // 2265
 * Unless required by applicable law or agreed to in writing, software                                                 // 2266
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 2267
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 2268
 * See the License for the specific language governing permissions and                                                 // 2269
 * limitations under the License.                                                                                      // 2270
 */                                                                                                                    // 2271
/**                                                                                                                    // 2272
   * Class constructor for Spinner MDL component.                                                                      // 2273
   * Implements MDL component design pattern defined at:                                                               // 2274
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 2275
   *                                                                                                                   // 2276
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 2277
   * @constructor                                                                                                      // 2278
   */                                                                                                                  // 2279
var MaterialSpinner = function MaterialSpinner(element) {                                                              // 2280
    this.element_ = element;                                                                                           // 2281
    // Initialize instance.                                                                                            // 2282
    this.init();                                                                                                       // 2283
};                                                                                                                     // 2284
window['MaterialSpinner'] = MaterialSpinner;                                                                           // 2285
/**                                                                                                                    // 2286
   * Store constants in one place so they can be updated easily.                                                       // 2287
   *                                                                                                                   // 2288
   * @enum {string | number}                                                                                           // 2289
   * @private                                                                                                          // 2290
   */                                                                                                                  // 2291
MaterialSpinner.prototype.Constant_ = { MDL_SPINNER_LAYER_COUNT: 4 };                                                  // 2292
/**                                                                                                                    // 2293
   * Store strings for class names defined by this component that are used in                                          // 2294
   * JavaScript. This allows us to simply change it in one place should we                                             // 2295
   * decide to modify at a later date.                                                                                 // 2296
   *                                                                                                                   // 2297
   * @enum {string}                                                                                                    // 2298
   * @private                                                                                                          // 2299
   */                                                                                                                  // 2300
MaterialSpinner.prototype.CssClasses_ = {                                                                              // 2301
    MDL_SPINNER_LAYER: 'mdl-spinner__layer',                                                                           // 2302
    MDL_SPINNER_CIRCLE_CLIPPER: 'mdl-spinner__circle-clipper',                                                         // 2303
    MDL_SPINNER_CIRCLE: 'mdl-spinner__circle',                                                                         // 2304
    MDL_SPINNER_GAP_PATCH: 'mdl-spinner__gap-patch',                                                                   // 2305
    MDL_SPINNER_LEFT: 'mdl-spinner__left',                                                                             // 2306
    MDL_SPINNER_RIGHT: 'mdl-spinner__right'                                                                            // 2307
};                                                                                                                     // 2308
/**                                                                                                                    // 2309
   * Auxiliary method to create a spinner layer.                                                                       // 2310
   *                                                                                                                   // 2311
   * @param {number} index Index of the layer to be created.                                                           // 2312
   * @public                                                                                                           // 2313
   */                                                                                                                  // 2314
MaterialSpinner.prototype.createLayer = function (index) {                                                             // 2315
    var layer = document.createElement('div');                                                                         // 2316
    layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER);                                                           // 2317
    layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER + '-' + index);                                             // 2318
    var leftClipper = document.createElement('div');                                                                   // 2319
    leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);                                            // 2320
    leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);                                                      // 2321
    var gapPatch = document.createElement('div');                                                                      // 2322
    gapPatch.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);                                                    // 2323
    var rightClipper = document.createElement('div');                                                                  // 2324
    rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);                                           // 2325
    rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);                                                    // 2326
    var circleOwners = [                                                                                               // 2327
        leftClipper,                                                                                                   // 2328
        gapPatch,                                                                                                      // 2329
        rightClipper                                                                                                   // 2330
    ];                                                                                                                 // 2331
    for (var i = 0; i < circleOwners.length; i++) {                                                                    // 2332
        var circle = document.createElement('div');                                                                    // 2333
        circle.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE);                                                     // 2334
        circleOwners[i].appendChild(circle);                                                                           // 2335
    }                                                                                                                  // 2336
    layer.appendChild(leftClipper);                                                                                    // 2337
    layer.appendChild(gapPatch);                                                                                       // 2338
    layer.appendChild(rightClipper);                                                                                   // 2339
    this.element_.appendChild(layer);                                                                                  // 2340
};                                                                                                                     // 2341
MaterialSpinner.prototype['createLayer'] = MaterialSpinner.prototype.createLayer;                                      // 2342
/**                                                                                                                    // 2343
   * Stops the spinner animation.                                                                                      // 2344
   * Public method for users who need to stop the spinner for any reason.                                              // 2345
   *                                                                                                                   // 2346
   * @public                                                                                                           // 2347
   */                                                                                                                  // 2348
MaterialSpinner.prototype.stop = function () {                                                                         // 2349
    this.element_.classList.remove('is-active');                                                                       // 2350
};                                                                                                                     // 2351
MaterialSpinner.prototype['stop'] = MaterialSpinner.prototype.stop;                                                    // 2352
/**                                                                                                                    // 2353
   * Starts the spinner animation.                                                                                     // 2354
   * Public method for users who need to manually start the spinner for any reason                                     // 2355
   * (instead of just adding the 'is-active' class to their markup).                                                   // 2356
   *                                                                                                                   // 2357
   * @public                                                                                                           // 2358
   */                                                                                                                  // 2359
MaterialSpinner.prototype.start = function () {                                                                        // 2360
    this.element_.classList.add('is-active');                                                                          // 2361
};                                                                                                                     // 2362
MaterialSpinner.prototype['start'] = MaterialSpinner.prototype.start;                                                  // 2363
/**                                                                                                                    // 2364
   * Initialize element.                                                                                               // 2365
   */                                                                                                                  // 2366
MaterialSpinner.prototype.init = function () {                                                                         // 2367
    if (this.element_) {                                                                                               // 2368
        for (var i = 1; i <= this.Constant_.MDL_SPINNER_LAYER_COUNT; i++) {                                            // 2369
            this.createLayer(i);                                                                                       // 2370
        }                                                                                                              // 2371
        this.element_.classList.add('is-upgraded');                                                                    // 2372
    }                                                                                                                  // 2373
};                                                                                                                     // 2374
// The component registers itself. It can assume componentHandler is available                                         // 2375
// in the global scope.                                                                                                // 2376
componentHandler.register({                                                                                            // 2377
    constructor: MaterialSpinner,                                                                                      // 2378
    classAsString: 'MaterialSpinner',                                                                                  // 2379
    cssClass: 'mdl-js-spinner',                                                                                        // 2380
    widget: true                                                                                                       // 2381
});                                                                                                                    // 2382
/**                                                                                                                    // 2383
 * @license                                                                                                            // 2384
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 2385
 *                                                                                                                     // 2386
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 2387
 * you may not use this file except in compliance with the License.                                                    // 2388
 * You may obtain a copy of the License at                                                                             // 2389
 *                                                                                                                     // 2390
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 2391
 *                                                                                                                     // 2392
 * Unless required by applicable law or agreed to in writing, software                                                 // 2393
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 2394
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 2395
 * See the License for the specific language governing permissions and                                                 // 2396
 * limitations under the License.                                                                                      // 2397
 */                                                                                                                    // 2398
/**                                                                                                                    // 2399
   * Class constructor for Checkbox MDL component.                                                                     // 2400
   * Implements MDL component design pattern defined at:                                                               // 2401
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 2402
   *                                                                                                                   // 2403
   * @constructor                                                                                                      // 2404
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 2405
   */                                                                                                                  // 2406
var MaterialSwitch = function MaterialSwitch(element) {                                                                // 2407
    this.element_ = element;                                                                                           // 2408
    // Initialize instance.                                                                                            // 2409
    this.init();                                                                                                       // 2410
};                                                                                                                     // 2411
window['MaterialSwitch'] = MaterialSwitch;                                                                             // 2412
/**                                                                                                                    // 2413
   * Store constants in one place so they can be updated easily.                                                       // 2414
   *                                                                                                                   // 2415
   * @enum {string | number}                                                                                           // 2416
   * @private                                                                                                          // 2417
   */                                                                                                                  // 2418
MaterialSwitch.prototype.Constant_ = { TINY_TIMEOUT: 0.001 };                                                          // 2419
/**                                                                                                                    // 2420
   * Store strings for class names defined by this component that are used in                                          // 2421
   * JavaScript. This allows us to simply change it in one place should we                                             // 2422
   * decide to modify at a later date.                                                                                 // 2423
   *                                                                                                                   // 2424
   * @enum {string}                                                                                                    // 2425
   * @private                                                                                                          // 2426
   */                                                                                                                  // 2427
MaterialSwitch.prototype.CssClasses_ = {                                                                               // 2428
    INPUT: 'mdl-switch__input',                                                                                        // 2429
    TRACK: 'mdl-switch__track',                                                                                        // 2430
    THUMB: 'mdl-switch__thumb',                                                                                        // 2431
    FOCUS_HELPER: 'mdl-switch__focus-helper',                                                                          // 2432
    RIPPLE_EFFECT: 'mdl-js-ripple-effect',                                                                             // 2433
    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',                                                       // 2434
    RIPPLE_CONTAINER: 'mdl-switch__ripple-container',                                                                  // 2435
    RIPPLE_CENTER: 'mdl-ripple--center',                                                                               // 2436
    RIPPLE: 'mdl-ripple',                                                                                              // 2437
    IS_FOCUSED: 'is-focused',                                                                                          // 2438
    IS_DISABLED: 'is-disabled',                                                                                        // 2439
    IS_CHECKED: 'is-checked'                                                                                           // 2440
};                                                                                                                     // 2441
/**                                                                                                                    // 2442
   * Handle change of state.                                                                                           // 2443
   *                                                                                                                   // 2444
   * @param {Event} event The event that fired.                                                                        // 2445
   * @private                                                                                                          // 2446
   */                                                                                                                  // 2447
MaterialSwitch.prototype.onChange_ = function (event) {                                                                // 2448
    this.updateClasses_();                                                                                             // 2449
};                                                                                                                     // 2450
/**                                                                                                                    // 2451
   * Handle focus of element.                                                                                          // 2452
   *                                                                                                                   // 2453
   * @param {Event} event The event that fired.                                                                        // 2454
   * @private                                                                                                          // 2455
   */                                                                                                                  // 2456
MaterialSwitch.prototype.onFocus_ = function (event) {                                                                 // 2457
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);                                                          // 2458
};                                                                                                                     // 2459
/**                                                                                                                    // 2460
   * Handle lost focus of element.                                                                                     // 2461
   *                                                                                                                   // 2462
   * @param {Event} event The event that fired.                                                                        // 2463
   * @private                                                                                                          // 2464
   */                                                                                                                  // 2465
MaterialSwitch.prototype.onBlur_ = function (event) {                                                                  // 2466
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);                                                       // 2467
};                                                                                                                     // 2468
/**                                                                                                                    // 2469
   * Handle mouseup.                                                                                                   // 2470
   *                                                                                                                   // 2471
   * @param {Event} event The event that fired.                                                                        // 2472
   * @private                                                                                                          // 2473
   */                                                                                                                  // 2474
MaterialSwitch.prototype.onMouseUp_ = function (event) {                                                               // 2475
    this.blur_();                                                                                                      // 2476
};                                                                                                                     // 2477
/**                                                                                                                    // 2478
   * Handle class updates.                                                                                             // 2479
   *                                                                                                                   // 2480
   * @private                                                                                                          // 2481
   */                                                                                                                  // 2482
MaterialSwitch.prototype.updateClasses_ = function () {                                                                // 2483
    this.checkDisabled();                                                                                              // 2484
    this.checkToggleState();                                                                                           // 2485
};                                                                                                                     // 2486
/**                                                                                                                    // 2487
   * Add blur.                                                                                                         // 2488
   *                                                                                                                   // 2489
   * @private                                                                                                          // 2490
   */                                                                                                                  // 2491
MaterialSwitch.prototype.blur_ = function () {                                                                         // 2492
    // TODO: figure out why there's a focus event being fired after our blur,                                          // 2493
    // so that we can avoid this hack.                                                                                 // 2494
    window.setTimeout(function () {                                                                                    // 2495
        this.inputElement_.blur();                                                                                     // 2496
    }.bind(this), this.Constant_.TINY_TIMEOUT);                                                                        // 2497
};                                                                                                                     // 2498
// Public methods.                                                                                                     // 2499
/**                                                                                                                    // 2500
   * Check the components disabled state.                                                                              // 2501
   *                                                                                                                   // 2502
   * @public                                                                                                           // 2503
   */                                                                                                                  // 2504
MaterialSwitch.prototype.checkDisabled = function () {                                                                 // 2505
    if (this.inputElement_.disabled) {                                                                                 // 2506
        this.element_.classList.add(this.CssClasses_.IS_DISABLED);                                                     // 2507
    } else {                                                                                                           // 2508
        this.element_.classList.remove(this.CssClasses_.IS_DISABLED);                                                  // 2509
    }                                                                                                                  // 2510
};                                                                                                                     // 2511
MaterialSwitch.prototype['checkDisabled'] = MaterialSwitch.prototype.checkDisabled;                                    // 2512
/**                                                                                                                    // 2513
   * Check the components toggled state.                                                                               // 2514
   *                                                                                                                   // 2515
   * @public                                                                                                           // 2516
   */                                                                                                                  // 2517
MaterialSwitch.prototype.checkToggleState = function () {                                                              // 2518
    if (this.inputElement_.checked) {                                                                                  // 2519
        this.element_.classList.add(this.CssClasses_.IS_CHECKED);                                                      // 2520
    } else {                                                                                                           // 2521
        this.element_.classList.remove(this.CssClasses_.IS_CHECKED);                                                   // 2522
    }                                                                                                                  // 2523
};                                                                                                                     // 2524
MaterialSwitch.prototype['checkToggleState'] = MaterialSwitch.prototype.checkToggleState;                              // 2525
/**                                                                                                                    // 2526
   * Disable switch.                                                                                                   // 2527
   *                                                                                                                   // 2528
   * @public                                                                                                           // 2529
   */                                                                                                                  // 2530
MaterialSwitch.prototype.disable = function () {                                                                       // 2531
    this.inputElement_.disabled = true;                                                                                // 2532
    this.updateClasses_();                                                                                             // 2533
};                                                                                                                     // 2534
MaterialSwitch.prototype['disable'] = MaterialSwitch.prototype.disable;                                                // 2535
/**                                                                                                                    // 2536
   * Enable switch.                                                                                                    // 2537
   *                                                                                                                   // 2538
   * @public                                                                                                           // 2539
   */                                                                                                                  // 2540
MaterialSwitch.prototype.enable = function () {                                                                        // 2541
    this.inputElement_.disabled = false;                                                                               // 2542
    this.updateClasses_();                                                                                             // 2543
};                                                                                                                     // 2544
MaterialSwitch.prototype['enable'] = MaterialSwitch.prototype.enable;                                                  // 2545
/**                                                                                                                    // 2546
   * Activate switch.                                                                                                  // 2547
   *                                                                                                                   // 2548
   * @public                                                                                                           // 2549
   */                                                                                                                  // 2550
MaterialSwitch.prototype.on = function () {                                                                            // 2551
    this.inputElement_.checked = true;                                                                                 // 2552
    this.updateClasses_();                                                                                             // 2553
};                                                                                                                     // 2554
MaterialSwitch.prototype['on'] = MaterialSwitch.prototype.on;                                                          // 2555
/**                                                                                                                    // 2556
   * Deactivate switch.                                                                                                // 2557
   *                                                                                                                   // 2558
   * @public                                                                                                           // 2559
   */                                                                                                                  // 2560
MaterialSwitch.prototype.off = function () {                                                                           // 2561
    this.inputElement_.checked = false;                                                                                // 2562
    this.updateClasses_();                                                                                             // 2563
};                                                                                                                     // 2564
MaterialSwitch.prototype['off'] = MaterialSwitch.prototype.off;                                                        // 2565
/**                                                                                                                    // 2566
   * Initialize element.                                                                                               // 2567
   */                                                                                                                  // 2568
MaterialSwitch.prototype.init = function () {                                                                          // 2569
    if (this.element_) {                                                                                               // 2570
        this.inputElement_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);                                // 2571
        var track = document.createElement('div');                                                                     // 2572
        track.classList.add(this.CssClasses_.TRACK);                                                                   // 2573
        var thumb = document.createElement('div');                                                                     // 2574
        thumb.classList.add(this.CssClasses_.THUMB);                                                                   // 2575
        var focusHelper = document.createElement('span');                                                              // 2576
        focusHelper.classList.add(this.CssClasses_.FOCUS_HELPER);                                                      // 2577
        thumb.appendChild(focusHelper);                                                                                // 2578
        this.element_.appendChild(track);                                                                              // 2579
        this.element_.appendChild(thumb);                                                                              // 2580
        this.boundMouseUpHandler = this.onMouseUp_.bind(this);                                                         // 2581
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {                                        // 2582
            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);                                        // 2583
            this.rippleContainerElement_ = document.createElement('span');                                             // 2584
            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER);                             // 2585
            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT);                                // 2586
            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER);                                // 2587
            this.rippleContainerElement_.addEventListener('mouseup', this.boundMouseUpHandler);                        // 2588
            var ripple = document.createElement('span');                                                               // 2589
            ripple.classList.add(this.CssClasses_.RIPPLE);                                                             // 2590
            this.rippleContainerElement_.appendChild(ripple);                                                          // 2591
            this.element_.appendChild(this.rippleContainerElement_);                                                   // 2592
        }                                                                                                              // 2593
        this.boundChangeHandler = this.onChange_.bind(this);                                                           // 2594
        this.boundFocusHandler = this.onFocus_.bind(this);                                                             // 2595
        this.boundBlurHandler = this.onBlur_.bind(this);                                                               // 2596
        this.inputElement_.addEventListener('change', this.boundChangeHandler);                                        // 2597
        this.inputElement_.addEventListener('focus', this.boundFocusHandler);                                          // 2598
        this.inputElement_.addEventListener('blur', this.boundBlurHandler);                                            // 2599
        this.element_.addEventListener('mouseup', this.boundMouseUpHandler);                                           // 2600
        this.updateClasses_();                                                                                         // 2601
        this.element_.classList.add('is-upgraded');                                                                    // 2602
    }                                                                                                                  // 2603
};                                                                                                                     // 2604
// The component registers itself. It can assume componentHandler is available                                         // 2605
// in the global scope.                                                                                                // 2606
componentHandler.register({                                                                                            // 2607
    constructor: MaterialSwitch,                                                                                       // 2608
    classAsString: 'MaterialSwitch',                                                                                   // 2609
    cssClass: 'mdl-js-switch',                                                                                         // 2610
    widget: true                                                                                                       // 2611
});                                                                                                                    // 2612
/**                                                                                                                    // 2613
 * @license                                                                                                            // 2614
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 2615
 *                                                                                                                     // 2616
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 2617
 * you may not use this file except in compliance with the License.                                                    // 2618
 * You may obtain a copy of the License at                                                                             // 2619
 *                                                                                                                     // 2620
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 2621
 *                                                                                                                     // 2622
 * Unless required by applicable law or agreed to in writing, software                                                 // 2623
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 2624
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 2625
 * See the License for the specific language governing permissions and                                                 // 2626
 * limitations under the License.                                                                                      // 2627
 */                                                                                                                    // 2628
/**                                                                                                                    // 2629
   * Class constructor for Tabs MDL component.                                                                         // 2630
   * Implements MDL component design pattern defined at:                                                               // 2631
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 2632
   *                                                                                                                   // 2633
   * @constructor                                                                                                      // 2634
   * @param {Element} element The element that will be upgraded.                                                       // 2635
   */                                                                                                                  // 2636
var MaterialTabs = function MaterialTabs(element) {                                                                    // 2637
    // Stores the HTML element.                                                                                        // 2638
    this.element_ = element;                                                                                           // 2639
    // Initialize instance.                                                                                            // 2640
    this.init();                                                                                                       // 2641
};                                                                                                                     // 2642
window['MaterialTabs'] = MaterialTabs;                                                                                 // 2643
/**                                                                                                                    // 2644
   * Store constants in one place so they can be updated easily.                                                       // 2645
   *                                                                                                                   // 2646
   * @enum {string}                                                                                                    // 2647
   * @private                                                                                                          // 2648
   */                                                                                                                  // 2649
MaterialTabs.prototype.Constant_ = {};                                                                                 // 2650
/**                                                                                                                    // 2651
   * Store strings for class names defined by this component that are used in                                          // 2652
   * JavaScript. This allows us to simply change it in one place should we                                             // 2653
   * decide to modify at a later date.                                                                                 // 2654
   *                                                                                                                   // 2655
   * @enum {string}                                                                                                    // 2656
   * @private                                                                                                          // 2657
   */                                                                                                                  // 2658
MaterialTabs.prototype.CssClasses_ = {                                                                                 // 2659
    TAB_CLASS: 'mdl-tabs__tab',                                                                                        // 2660
    PANEL_CLASS: 'mdl-tabs__panel',                                                                                    // 2661
    ACTIVE_CLASS: 'is-active',                                                                                         // 2662
    UPGRADED_CLASS: 'is-upgraded',                                                                                     // 2663
    MDL_JS_RIPPLE_EFFECT: 'mdl-js-ripple-effect',                                                                      // 2664
    MDL_RIPPLE_CONTAINER: 'mdl-tabs__ripple-container',                                                                // 2665
    MDL_RIPPLE: 'mdl-ripple',                                                                                          // 2666
    MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events'                                          // 2667
};                                                                                                                     // 2668
/**                                                                                                                    // 2669
   * Handle clicks to a tabs component                                                                                 // 2670
   *                                                                                                                   // 2671
   * @private                                                                                                          // 2672
   */                                                                                                                  // 2673
MaterialTabs.prototype.initTabs_ = function () {                                                                       // 2674
    if (this.element_.classList.contains(this.CssClasses_.MDL_JS_RIPPLE_EFFECT)) {                                     // 2675
        this.element_.classList.add(this.CssClasses_.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS);                              // 2676
    }                                                                                                                  // 2677
    // Select element tabs, document panels                                                                            // 2678
    this.tabs_ = this.element_.querySelectorAll('.' + this.CssClasses_.TAB_CLASS);                                     // 2679
    this.panels_ = this.element_.querySelectorAll('.' + this.CssClasses_.PANEL_CLASS);                                 // 2680
    // Create new tabs for each tab element                                                                            // 2681
    for (var i = 0; i < this.tabs_.length; i++) {                                                                      // 2682
        new MaterialTab(this.tabs_[i], this);                                                                          // 2683
    }                                                                                                                  // 2684
    this.element_.classList.add(this.CssClasses_.UPGRADED_CLASS);                                                      // 2685
};                                                                                                                     // 2686
/**                                                                                                                    // 2687
   * Reset tab state, dropping active classes                                                                          // 2688
   *                                                                                                                   // 2689
   * @private                                                                                                          // 2690
   */                                                                                                                  // 2691
MaterialTabs.prototype.resetTabState_ = function () {                                                                  // 2692
    for (var k = 0; k < this.tabs_.length; k++) {                                                                      // 2693
        this.tabs_[k].classList.remove(this.CssClasses_.ACTIVE_CLASS);                                                 // 2694
    }                                                                                                                  // 2695
};                                                                                                                     // 2696
/**                                                                                                                    // 2697
   * Reset panel state, droping active classes                                                                         // 2698
   *                                                                                                                   // 2699
   * @private                                                                                                          // 2700
   */                                                                                                                  // 2701
MaterialTabs.prototype.resetPanelState_ = function () {                                                                // 2702
    for (var j = 0; j < this.panels_.length; j++) {                                                                    // 2703
        this.panels_[j].classList.remove(this.CssClasses_.ACTIVE_CLASS);                                               // 2704
    }                                                                                                                  // 2705
};                                                                                                                     // 2706
/**                                                                                                                    // 2707
   * Initialize element.                                                                                               // 2708
   */                                                                                                                  // 2709
MaterialTabs.prototype.init = function () {                                                                            // 2710
    if (this.element_) {                                                                                               // 2711
        this.initTabs_();                                                                                              // 2712
    }                                                                                                                  // 2713
};                                                                                                                     // 2714
/**                                                                                                                    // 2715
   * Constructor for an individual tab.                                                                                // 2716
   *                                                                                                                   // 2717
   * @constructor                                                                                                      // 2718
   * @param {Element} tab The HTML element for the tab.                                                                // 2719
   * @param {MaterialTabs} ctx The MaterialTabs object that owns the tab.                                              // 2720
   */                                                                                                                  // 2721
function MaterialTab(tab, ctx) {                                                                                       // 2722
    if (tab) {                                                                                                         // 2723
        if (ctx.element_.classList.contains(ctx.CssClasses_.MDL_JS_RIPPLE_EFFECT)) {                                   // 2724
            var rippleContainer = document.createElement('span');                                                      // 2725
            rippleContainer.classList.add(ctx.CssClasses_.MDL_RIPPLE_CONTAINER);                                       // 2726
            rippleContainer.classList.add(ctx.CssClasses_.MDL_JS_RIPPLE_EFFECT);                                       // 2727
            var ripple = document.createElement('span');                                                               // 2728
            ripple.classList.add(ctx.CssClasses_.MDL_RIPPLE);                                                          // 2729
            rippleContainer.appendChild(ripple);                                                                       // 2730
            tab.appendChild(rippleContainer);                                                                          // 2731
        }                                                                                                              // 2732
        tab.addEventListener('click', function (e) {                                                                   // 2733
            if (tab.getAttribute('href').charAt(0) === '#') {                                                          // 2734
                e.preventDefault();                                                                                    // 2735
                var href = tab.href.split('#')[1];                                                                     // 2736
                var panel = ctx.element_.querySelector('#' + href);                                                    // 2737
                ctx.resetTabState_();                                                                                  // 2738
                ctx.resetPanelState_();                                                                                // 2739
                tab.classList.add(ctx.CssClasses_.ACTIVE_CLASS);                                                       // 2740
                panel.classList.add(ctx.CssClasses_.ACTIVE_CLASS);                                                     // 2741
            }                                                                                                          // 2742
        });                                                                                                            // 2743
    }                                                                                                                  // 2744
}                                                                                                                      // 2745
// The component registers itself. It can assume componentHandler is available                                         // 2746
// in the global scope.                                                                                                // 2747
componentHandler.register({                                                                                            // 2748
    constructor: MaterialTabs,                                                                                         // 2749
    classAsString: 'MaterialTabs',                                                                                     // 2750
    cssClass: 'mdl-js-tabs'                                                                                            // 2751
});                                                                                                                    // 2752
/**                                                                                                                    // 2753
 * @license                                                                                                            // 2754
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 2755
 *                                                                                                                     // 2756
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 2757
 * you may not use this file except in compliance with the License.                                                    // 2758
 * You may obtain a copy of the License at                                                                             // 2759
 *                                                                                                                     // 2760
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 2761
 *                                                                                                                     // 2762
 * Unless required by applicable law or agreed to in writing, software                                                 // 2763
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 2764
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 2765
 * See the License for the specific language governing permissions and                                                 // 2766
 * limitations under the License.                                                                                      // 2767
 */                                                                                                                    // 2768
/**                                                                                                                    // 2769
   * Class constructor for Textfield MDL component.                                                                    // 2770
   * Implements MDL component design pattern defined at:                                                               // 2771
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 2772
   *                                                                                                                   // 2773
   * @constructor                                                                                                      // 2774
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 2775
   */                                                                                                                  // 2776
var MaterialTextfield = function MaterialTextfield(element) {                                                          // 2777
    this.element_ = element;                                                                                           // 2778
    this.maxRows = this.Constant_.NO_MAX_ROWS;                                                                         // 2779
    // Initialize instance.                                                                                            // 2780
    this.init();                                                                                                       // 2781
};                                                                                                                     // 2782
window['MaterialTextfield'] = MaterialTextfield;                                                                       // 2783
/**                                                                                                                    // 2784
   * Store constants in one place so they can be updated easily.                                                       // 2785
   *                                                                                                                   // 2786
   * @enum {string | number}                                                                                           // 2787
   * @private                                                                                                          // 2788
   */                                                                                                                  // 2789
MaterialTextfield.prototype.Constant_ = {                                                                              // 2790
    NO_MAX_ROWS: -1,                                                                                                   // 2791
    MAX_ROWS_ATTRIBUTE: 'maxrows'                                                                                      // 2792
};                                                                                                                     // 2793
/**                                                                                                                    // 2794
   * Store strings for class names defined by this component that are used in                                          // 2795
   * JavaScript. This allows us to simply change it in one place should we                                             // 2796
   * decide to modify at a later date.                                                                                 // 2797
   *                                                                                                                   // 2798
   * @enum {string}                                                                                                    // 2799
   * @private                                                                                                          // 2800
   */                                                                                                                  // 2801
MaterialTextfield.prototype.CssClasses_ = {                                                                            // 2802
    LABEL: 'mdl-textfield__label',                                                                                     // 2803
    INPUT: 'mdl-textfield__input',                                                                                     // 2804
    IS_DIRTY: 'is-dirty',                                                                                              // 2805
    IS_FOCUSED: 'is-focused',                                                                                          // 2806
    IS_DISABLED: 'is-disabled',                                                                                        // 2807
    IS_INVALID: 'is-invalid',                                                                                          // 2808
    IS_UPGRADED: 'is-upgraded',                                                                                        // 2809
    HAS_PLACEHOLDER: 'has-placeholder'                                                                                 // 2810
};                                                                                                                     // 2811
/**                                                                                                                    // 2812
   * Handle input being entered.                                                                                       // 2813
   *                                                                                                                   // 2814
   * @param {Event} event The event that fired.                                                                        // 2815
   * @private                                                                                                          // 2816
   */                                                                                                                  // 2817
MaterialTextfield.prototype.onKeyDown_ = function (event) {                                                            // 2818
    var currentRowCount = event.target.value.split('\n').length;                                                       // 2819
    if (event.keyCode === 13) {                                                                                        // 2820
        if (currentRowCount >= this.maxRows) {                                                                         // 2821
            event.preventDefault();                                                                                    // 2822
        }                                                                                                              // 2823
    }                                                                                                                  // 2824
};                                                                                                                     // 2825
/**                                                                                                                    // 2826
   * Handle focus.                                                                                                     // 2827
   *                                                                                                                   // 2828
   * @param {Event} event The event that fired.                                                                        // 2829
   * @private                                                                                                          // 2830
   */                                                                                                                  // 2831
MaterialTextfield.prototype.onFocus_ = function (event) {                                                              // 2832
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);                                                          // 2833
};                                                                                                                     // 2834
/**                                                                                                                    // 2835
   * Handle lost focus.                                                                                                // 2836
   *                                                                                                                   // 2837
   * @param {Event} event The event that fired.                                                                        // 2838
   * @private                                                                                                          // 2839
   */                                                                                                                  // 2840
MaterialTextfield.prototype.onBlur_ = function (event) {                                                               // 2841
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);                                                       // 2842
};                                                                                                                     // 2843
/**                                                                                                                    // 2844
   * Handle reset event from out side.                                                                                 // 2845
   *                                                                                                                   // 2846
   * @param {Event} event The event that fired.                                                                        // 2847
   * @private                                                                                                          // 2848
   */                                                                                                                  // 2849
MaterialTextfield.prototype.onReset_ = function (event) {                                                              // 2850
    this.updateClasses_();                                                                                             // 2851
};                                                                                                                     // 2852
/**                                                                                                                    // 2853
   * Handle class updates.                                                                                             // 2854
   *                                                                                                                   // 2855
   * @private                                                                                                          // 2856
   */                                                                                                                  // 2857
MaterialTextfield.prototype.updateClasses_ = function () {                                                             // 2858
    this.checkDisabled();                                                                                              // 2859
    this.checkValidity();                                                                                              // 2860
    this.checkDirty();                                                                                                 // 2861
    this.checkFocus();                                                                                                 // 2862
};                                                                                                                     // 2863
// Public methods.                                                                                                     // 2864
/**                                                                                                                    // 2865
   * Check the disabled state and update field accordingly.                                                            // 2866
   *                                                                                                                   // 2867
   * @public                                                                                                           // 2868
   */                                                                                                                  // 2869
MaterialTextfield.prototype.checkDisabled = function () {                                                              // 2870
    if (this.input_.disabled) {                                                                                        // 2871
        this.element_.classList.add(this.CssClasses_.IS_DISABLED);                                                     // 2872
    } else {                                                                                                           // 2873
        this.element_.classList.remove(this.CssClasses_.IS_DISABLED);                                                  // 2874
    }                                                                                                                  // 2875
};                                                                                                                     // 2876
MaterialTextfield.prototype['checkDisabled'] = MaterialTextfield.prototype.checkDisabled;                              // 2877
/**                                                                                                                    // 2878
  * Check the focus state and update field accordingly.                                                                // 2879
  *                                                                                                                    // 2880
  * @public                                                                                                            // 2881
  */                                                                                                                   // 2882
MaterialTextfield.prototype.checkFocus = function () {                                                                 // 2883
    if (Boolean(this.element_.querySelector(':focus'))) {                                                              // 2884
        this.element_.classList.add(this.CssClasses_.IS_FOCUSED);                                                      // 2885
    } else {                                                                                                           // 2886
        this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);                                                   // 2887
    }                                                                                                                  // 2888
};                                                                                                                     // 2889
MaterialTextfield.prototype['checkFocus'] = MaterialTextfield.prototype.checkFocus;                                    // 2890
/**                                                                                                                    // 2891
   * Check the validity state and update field accordingly.                                                            // 2892
   *                                                                                                                   // 2893
   * @public                                                                                                           // 2894
   */                                                                                                                  // 2895
MaterialTextfield.prototype.checkValidity = function () {                                                              // 2896
    if (this.input_.validity) {                                                                                        // 2897
        if (this.input_.validity.valid) {                                                                              // 2898
            this.element_.classList.remove(this.CssClasses_.IS_INVALID);                                               // 2899
        } else {                                                                                                       // 2900
            this.element_.classList.add(this.CssClasses_.IS_INVALID);                                                  // 2901
        }                                                                                                              // 2902
    }                                                                                                                  // 2903
};                                                                                                                     // 2904
MaterialTextfield.prototype['checkValidity'] = MaterialTextfield.prototype.checkValidity;                              // 2905
/**                                                                                                                    // 2906
   * Check the dirty state and update field accordingly.                                                               // 2907
   *                                                                                                                   // 2908
   * @public                                                                                                           // 2909
   */                                                                                                                  // 2910
MaterialTextfield.prototype.checkDirty = function () {                                                                 // 2911
    if (this.input_.value && this.input_.value.length > 0) {                                                           // 2912
        this.element_.classList.add(this.CssClasses_.IS_DIRTY);                                                        // 2913
    } else {                                                                                                           // 2914
        this.element_.classList.remove(this.CssClasses_.IS_DIRTY);                                                     // 2915
    }                                                                                                                  // 2916
};                                                                                                                     // 2917
MaterialTextfield.prototype['checkDirty'] = MaterialTextfield.prototype.checkDirty;                                    // 2918
/**                                                                                                                    // 2919
   * Disable text field.                                                                                               // 2920
   *                                                                                                                   // 2921
   * @public                                                                                                           // 2922
   */                                                                                                                  // 2923
MaterialTextfield.prototype.disable = function () {                                                                    // 2924
    this.input_.disabled = true;                                                                                       // 2925
    this.updateClasses_();                                                                                             // 2926
};                                                                                                                     // 2927
MaterialTextfield.prototype['disable'] = MaterialTextfield.prototype.disable;                                          // 2928
/**                                                                                                                    // 2929
   * Enable text field.                                                                                                // 2930
   *                                                                                                                   // 2931
   * @public                                                                                                           // 2932
   */                                                                                                                  // 2933
MaterialTextfield.prototype.enable = function () {                                                                     // 2934
    this.input_.disabled = false;                                                                                      // 2935
    this.updateClasses_();                                                                                             // 2936
};                                                                                                                     // 2937
MaterialTextfield.prototype['enable'] = MaterialTextfield.prototype.enable;                                            // 2938
/**                                                                                                                    // 2939
   * Update text field value.                                                                                          // 2940
   *                                                                                                                   // 2941
   * @param {string} value The value to which to set the control (optional).                                           // 2942
   * @public                                                                                                           // 2943
   */                                                                                                                  // 2944
MaterialTextfield.prototype.change = function (value) {                                                                // 2945
    this.input_.value = value || '';                                                                                   // 2946
    this.updateClasses_();                                                                                             // 2947
};                                                                                                                     // 2948
MaterialTextfield.prototype['change'] = MaterialTextfield.prototype.change;                                            // 2949
/**                                                                                                                    // 2950
   * Initialize element.                                                                                               // 2951
   */                                                                                                                  // 2952
MaterialTextfield.prototype.init = function () {                                                                       // 2953
    if (this.element_) {                                                                                               // 2954
        this.label_ = this.element_.querySelector('.' + this.CssClasses_.LABEL);                                       // 2955
        this.input_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);                                       // 2956
        if (this.input_) {                                                                                             // 2957
            if (this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)) {                                         // 2958
                this.maxRows = parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE), 10);              // 2959
                if (isNaN(this.maxRows)) {                                                                             // 2960
                    this.maxRows = this.Constant_.NO_MAX_ROWS;                                                         // 2961
                }                                                                                                      // 2962
            }                                                                                                          // 2963
            if (this.input_.hasAttribute('placeholder')) {                                                             // 2964
                this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER);                                         // 2965
            }                                                                                                          // 2966
            this.boundUpdateClassesHandler = this.updateClasses_.bind(this);                                           // 2967
            this.boundFocusHandler = this.onFocus_.bind(this);                                                         // 2968
            this.boundBlurHandler = this.onBlur_.bind(this);                                                           // 2969
            this.boundResetHandler = this.onReset_.bind(this);                                                         // 2970
            this.input_.addEventListener('input', this.boundUpdateClassesHandler);                                     // 2971
            this.input_.addEventListener('focus', this.boundFocusHandler);                                             // 2972
            this.input_.addEventListener('blur', this.boundBlurHandler);                                               // 2973
            this.input_.addEventListener('reset', this.boundResetHandler);                                             // 2974
            if (this.maxRows !== this.Constant_.NO_MAX_ROWS) {                                                         // 2975
                // TODO: This should handle pasting multi line text.                                                   // 2976
                // Currently doesn't.                                                                                  // 2977
                this.boundKeyDownHandler = this.onKeyDown_.bind(this);                                                 // 2978
                this.input_.addEventListener('keydown', this.boundKeyDownHandler);                                     // 2979
            }                                                                                                          // 2980
            var invalid = this.element_.classList.contains(this.CssClasses_.IS_INVALID);                               // 2981
            this.updateClasses_();                                                                                     // 2982
            this.element_.classList.add(this.CssClasses_.IS_UPGRADED);                                                 // 2983
            if (invalid) {                                                                                             // 2984
                this.element_.classList.add(this.CssClasses_.IS_INVALID);                                              // 2985
            }                                                                                                          // 2986
            if (this.input_.hasAttribute('autofocus')) {                                                               // 2987
                this.element_.focus();                                                                                 // 2988
                this.checkFocus();                                                                                     // 2989
            }                                                                                                          // 2990
        }                                                                                                              // 2991
    }                                                                                                                  // 2992
};                                                                                                                     // 2993
// The component registers itself. It can assume componentHandler is available                                         // 2994
// in the global scope.                                                                                                // 2995
componentHandler.register({                                                                                            // 2996
    constructor: MaterialTextfield,                                                                                    // 2997
    classAsString: 'MaterialTextfield',                                                                                // 2998
    cssClass: 'mdl-js-textfield',                                                                                      // 2999
    widget: true                                                                                                       // 3000
});                                                                                                                    // 3001
/**                                                                                                                    // 3002
 * @license                                                                                                            // 3003
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 3004
 *                                                                                                                     // 3005
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 3006
 * you may not use this file except in compliance with the License.                                                    // 3007
 * You may obtain a copy of the License at                                                                             // 3008
 *                                                                                                                     // 3009
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 3010
 *                                                                                                                     // 3011
 * Unless required by applicable law or agreed to in writing, software                                                 // 3012
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 3013
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 3014
 * See the License for the specific language governing permissions and                                                 // 3015
 * limitations under the License.                                                                                      // 3016
 */                                                                                                                    // 3017
/**                                                                                                                    // 3018
   * Class constructor for Tooltip MDL component.                                                                      // 3019
   * Implements MDL component design pattern defined at:                                                               // 3020
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 3021
   *                                                                                                                   // 3022
   * @constructor                                                                                                      // 3023
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 3024
   */                                                                                                                  // 3025
var MaterialTooltip = function MaterialTooltip(element) {                                                              // 3026
    this.element_ = element;                                                                                           // 3027
    // Initialize instance.                                                                                            // 3028
    this.init();                                                                                                       // 3029
};                                                                                                                     // 3030
window['MaterialTooltip'] = MaterialTooltip;                                                                           // 3031
/**                                                                                                                    // 3032
   * Store constants in one place so they can be updated easily.                                                       // 3033
   *                                                                                                                   // 3034
   * @enum {string | number}                                                                                           // 3035
   * @private                                                                                                          // 3036
   */                                                                                                                  // 3037
MaterialTooltip.prototype.Constant_ = {};                                                                              // 3038
/**                                                                                                                    // 3039
   * Store strings for class names defined by this component that are used in                                          // 3040
   * JavaScript. This allows us to simply change it in one place should we                                             // 3041
   * decide to modify at a later date.                                                                                 // 3042
   *                                                                                                                   // 3043
   * @enum {string}                                                                                                    // 3044
   * @private                                                                                                          // 3045
   */                                                                                                                  // 3046
MaterialTooltip.prototype.CssClasses_ = {                                                                              // 3047
    IS_ACTIVE: 'is-active',                                                                                            // 3048
    BOTTOM: 'mdl-tooltip--bottom',                                                                                     // 3049
    LEFT: 'mdl-tooltip--left',                                                                                         // 3050
    RIGHT: 'mdl-tooltip--right',                                                                                       // 3051
    TOP: 'mdl-tooltip--top'                                                                                            // 3052
};                                                                                                                     // 3053
/**                                                                                                                    // 3054
   * Handle mouseenter for tooltip.                                                                                    // 3055
   *                                                                                                                   // 3056
   * @param {Event} event The event that fired.                                                                        // 3057
   * @private                                                                                                          // 3058
   */                                                                                                                  // 3059
MaterialTooltip.prototype.handleMouseEnter_ = function (event) {                                                       // 3060
    var props = event.target.getBoundingClientRect();                                                                  // 3061
    var left = props.left + props.width / 2;                                                                           // 3062
    var top = props.top + props.height / 2;                                                                            // 3063
    var marginLeft = -1 * (this.element_.offsetWidth / 2);                                                             // 3064
    var marginTop = -1 * (this.element_.offsetHeight / 2);                                                             // 3065
    if (this.element_.classList.contains(this.CssClasses_.LEFT) || this.element_.classList.contains(this.CssClasses_.RIGHT)) {
        left = props.width / 2;                                                                                        // 3067
        if (top + marginTop < 0) {                                                                                     // 3068
            this.element_.style.top = '0';                                                                             // 3069
            this.element_.style.marginTop = '0';                                                                       // 3070
        } else {                                                                                                       // 3071
            this.element_.style.top = top + 'px';                                                                      // 3072
            this.element_.style.marginTop = marginTop + 'px';                                                          // 3073
        }                                                                                                              // 3074
    } else {                                                                                                           // 3075
        if (left + marginLeft < 0) {                                                                                   // 3076
            this.element_.style.left = '0';                                                                            // 3077
            this.element_.style.marginLeft = '0';                                                                      // 3078
        } else {                                                                                                       // 3079
            this.element_.style.left = left + 'px';                                                                    // 3080
            this.element_.style.marginLeft = marginLeft + 'px';                                                        // 3081
        }                                                                                                              // 3082
    }                                                                                                                  // 3083
    if (this.element_.classList.contains(this.CssClasses_.TOP)) {                                                      // 3084
        this.element_.style.top = props.top - this.element_.offsetHeight - 10 + 'px';                                  // 3085
    } else if (this.element_.classList.contains(this.CssClasses_.RIGHT)) {                                             // 3086
        this.element_.style.left = props.left + props.width + 10 + 'px';                                               // 3087
    } else if (this.element_.classList.contains(this.CssClasses_.LEFT)) {                                              // 3088
        this.element_.style.left = props.left - this.element_.offsetWidth - 10 + 'px';                                 // 3089
    } else {                                                                                                           // 3090
        this.element_.style.top = props.top + props.height + 10 + 'px';                                                // 3091
    }                                                                                                                  // 3092
    this.element_.classList.add(this.CssClasses_.IS_ACTIVE);                                                           // 3093
};                                                                                                                     // 3094
/**                                                                                                                    // 3095
   * Hide tooltip on mouseleave or scroll                                                                              // 3096
   *                                                                                                                   // 3097
   * @private                                                                                                          // 3098
   */                                                                                                                  // 3099
MaterialTooltip.prototype.hideTooltip_ = function () {                                                                 // 3100
    this.element_.classList.remove(this.CssClasses_.IS_ACTIVE);                                                        // 3101
};                                                                                                                     // 3102
/**                                                                                                                    // 3103
   * Initialize element.                                                                                               // 3104
   */                                                                                                                  // 3105
MaterialTooltip.prototype.init = function () {                                                                         // 3106
    if (this.element_) {                                                                                               // 3107
        var forElId = this.element_.getAttribute('for') || this.element_.getAttribute('data-mdl-for');                 // 3108
        if (forElId) {                                                                                                 // 3109
            this.forElement_ = document.getElementById(forElId);                                                       // 3110
        }                                                                                                              // 3111
        if (this.forElement_) {                                                                                        // 3112
            // It's left here because it prevents accidental text selection on Android                                 // 3113
            if (!this.forElement_.hasAttribute('tabindex')) {                                                          // 3114
                this.forElement_.setAttribute('tabindex', '0');                                                        // 3115
            }                                                                                                          // 3116
            this.boundMouseEnterHandler = this.handleMouseEnter_.bind(this);                                           // 3117
            this.boundMouseLeaveAndScrollHandler = this.hideTooltip_.bind(this);                                       // 3118
            this.forElement_.addEventListener('mouseenter', this.boundMouseEnterHandler, false);                       // 3119
            this.forElement_.addEventListener('touchend', this.boundMouseEnterHandler, false);                         // 3120
            this.forElement_.addEventListener('mouseleave', this.boundMouseLeaveAndScrollHandler, false);              // 3121
            window.addEventListener('scroll', this.boundMouseLeaveAndScrollHandler, true);                             // 3122
            window.addEventListener('touchstart', this.boundMouseLeaveAndScrollHandler);                               // 3123
        }                                                                                                              // 3124
    }                                                                                                                  // 3125
};                                                                                                                     // 3126
// The component registers itself. It can assume componentHandler is available                                         // 3127
// in the global scope.                                                                                                // 3128
componentHandler.register({                                                                                            // 3129
    constructor: MaterialTooltip,                                                                                      // 3130
    classAsString: 'MaterialTooltip',                                                                                  // 3131
    cssClass: 'mdl-tooltip'                                                                                            // 3132
});                                                                                                                    // 3133
/**                                                                                                                    // 3134
 * @license                                                                                                            // 3135
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 3136
 *                                                                                                                     // 3137
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 3138
 * you may not use this file except in compliance with the License.                                                    // 3139
 * You may obtain a copy of the License at                                                                             // 3140
 *                                                                                                                     // 3141
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 3142
 *                                                                                                                     // 3143
 * Unless required by applicable law or agreed to in writing, software                                                 // 3144
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 3145
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 3146
 * See the License for the specific language governing permissions and                                                 // 3147
 * limitations under the License.                                                                                      // 3148
 */                                                                                                                    // 3149
/**                                                                                                                    // 3150
   * Class constructor for Layout MDL component.                                                                       // 3151
   * Implements MDL component design pattern defined at:                                                               // 3152
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 3153
   *                                                                                                                   // 3154
   * @constructor                                                                                                      // 3155
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 3156
   */                                                                                                                  // 3157
var MaterialLayout = function MaterialLayout(element) {                                                                // 3158
    this.element_ = element;                                                                                           // 3159
    // Initialize instance.                                                                                            // 3160
    this.init();                                                                                                       // 3161
};                                                                                                                     // 3162
window['MaterialLayout'] = MaterialLayout;                                                                             // 3163
/**                                                                                                                    // 3164
   * Store constants in one place so they can be updated easily.                                                       // 3165
   *                                                                                                                   // 3166
   * @enum {string | number}                                                                                           // 3167
   * @private                                                                                                          // 3168
   */                                                                                                                  // 3169
MaterialLayout.prototype.Constant_ = {                                                                                 // 3170
    MAX_WIDTH: '(max-width: 1024px)',                                                                                  // 3171
    TAB_SCROLL_PIXELS: 100,                                                                                            // 3172
    RESIZE_TIMEOUT: 100,                                                                                               // 3173
    MENU_ICON: '&#xE5D2;',                                                                                             // 3174
    CHEVRON_LEFT: 'chevron_left',                                                                                      // 3175
    CHEVRON_RIGHT: 'chevron_right'                                                                                     // 3176
};                                                                                                                     // 3177
/**                                                                                                                    // 3178
   * Keycodes, for code readability.                                                                                   // 3179
   *                                                                                                                   // 3180
   * @enum {number}                                                                                                    // 3181
   * @private                                                                                                          // 3182
   */                                                                                                                  // 3183
MaterialLayout.prototype.Keycodes_ = {                                                                                 // 3184
    ENTER: 13,                                                                                                         // 3185
    ESCAPE: 27,                                                                                                        // 3186
    SPACE: 32                                                                                                          // 3187
};                                                                                                                     // 3188
/**                                                                                                                    // 3189
   * Modes.                                                                                                            // 3190
   *                                                                                                                   // 3191
   * @enum {number}                                                                                                    // 3192
   * @private                                                                                                          // 3193
   */                                                                                                                  // 3194
MaterialLayout.prototype.Mode_ = {                                                                                     // 3195
    STANDARD: 0,                                                                                                       // 3196
    SEAMED: 1,                                                                                                         // 3197
    WATERFALL: 2,                                                                                                      // 3198
    SCROLL: 3                                                                                                          // 3199
};                                                                                                                     // 3200
/**                                                                                                                    // 3201
   * Store strings for class names defined by this component that are used in                                          // 3202
   * JavaScript. This allows us to simply change it in one place should we                                             // 3203
   * decide to modify at a later date.                                                                                 // 3204
   *                                                                                                                   // 3205
   * @enum {string}                                                                                                    // 3206
   * @private                                                                                                          // 3207
   */                                                                                                                  // 3208
MaterialLayout.prototype.CssClasses_ = {                                                                               // 3209
    CONTAINER: 'mdl-layout__container',                                                                                // 3210
    HEADER: 'mdl-layout__header',                                                                                      // 3211
    DRAWER: 'mdl-layout__drawer',                                                                                      // 3212
    CONTENT: 'mdl-layout__content',                                                                                    // 3213
    DRAWER_BTN: 'mdl-layout__drawer-button',                                                                           // 3214
    ICON: 'material-icons',                                                                                            // 3215
    JS_RIPPLE_EFFECT: 'mdl-js-ripple-effect',                                                                          // 3216
    RIPPLE_CONTAINER: 'mdl-layout__tab-ripple-container',                                                              // 3217
    RIPPLE: 'mdl-ripple',                                                                                              // 3218
    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',                                                       // 3219
    HEADER_SEAMED: 'mdl-layout__header--seamed',                                                                       // 3220
    HEADER_WATERFALL: 'mdl-layout__header--waterfall',                                                                 // 3221
    HEADER_SCROLL: 'mdl-layout__header--scroll',                                                                       // 3222
    FIXED_HEADER: 'mdl-layout--fixed-header',                                                                          // 3223
    OBFUSCATOR: 'mdl-layout__obfuscator',                                                                              // 3224
    TAB_BAR: 'mdl-layout__tab-bar',                                                                                    // 3225
    TAB_CONTAINER: 'mdl-layout__tab-bar-container',                                                                    // 3226
    TAB: 'mdl-layout__tab',                                                                                            // 3227
    TAB_BAR_BUTTON: 'mdl-layout__tab-bar-button',                                                                      // 3228
    TAB_BAR_LEFT_BUTTON: 'mdl-layout__tab-bar-left-button',                                                            // 3229
    TAB_BAR_RIGHT_BUTTON: 'mdl-layout__tab-bar-right-button',                                                          // 3230
    TAB_MANUAL_SWITCH: 'mdl-layout__tab-manual-switch',                                                                // 3231
    PANEL: 'mdl-layout__tab-panel',                                                                                    // 3232
    HAS_DRAWER: 'has-drawer',                                                                                          // 3233
    HAS_TABS: 'has-tabs',                                                                                              // 3234
    HAS_SCROLLING_HEADER: 'has-scrolling-header',                                                                      // 3235
    CASTING_SHADOW: 'is-casting-shadow',                                                                               // 3236
    IS_COMPACT: 'is-compact',                                                                                          // 3237
    IS_SMALL_SCREEN: 'is-small-screen',                                                                                // 3238
    IS_DRAWER_OPEN: 'is-visible',                                                                                      // 3239
    IS_ACTIVE: 'is-active',                                                                                            // 3240
    IS_UPGRADED: 'is-upgraded',                                                                                        // 3241
    IS_ANIMATING: 'is-animating',                                                                                      // 3242
    ON_LARGE_SCREEN: 'mdl-layout--large-screen-only',                                                                  // 3243
    ON_SMALL_SCREEN: 'mdl-layout--small-screen-only'                                                                   // 3244
};                                                                                                                     // 3245
/**                                                                                                                    // 3246
   * Handles scrolling on the content.                                                                                 // 3247
   *                                                                                                                   // 3248
   * @private                                                                                                          // 3249
   */                                                                                                                  // 3250
MaterialLayout.prototype.contentScrollHandler_ = function () {                                                         // 3251
    if (this.header_.classList.contains(this.CssClasses_.IS_ANIMATING)) {                                              // 3252
        return;                                                                                                        // 3253
    }                                                                                                                  // 3254
    var headerVisible = !this.element_.classList.contains(this.CssClasses_.IS_SMALL_SCREEN) || this.element_.classList.contains(this.CssClasses_.FIXED_HEADER);
    if (this.content_.scrollTop > 0 && !this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {                // 3256
        this.header_.classList.add(this.CssClasses_.CASTING_SHADOW);                                                   // 3257
        this.header_.classList.add(this.CssClasses_.IS_COMPACT);                                                       // 3258
        if (headerVisible) {                                                                                           // 3259
            this.header_.classList.add(this.CssClasses_.IS_ANIMATING);                                                 // 3260
        }                                                                                                              // 3261
    } else if (this.content_.scrollTop <= 0 && this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {         // 3262
        this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW);                                                // 3263
        this.header_.classList.remove(this.CssClasses_.IS_COMPACT);                                                    // 3264
        if (headerVisible) {                                                                                           // 3265
            this.header_.classList.add(this.CssClasses_.IS_ANIMATING);                                                 // 3266
        }                                                                                                              // 3267
    }                                                                                                                  // 3268
};                                                                                                                     // 3269
/**                                                                                                                    // 3270
   * Handles a keyboard event on the drawer.                                                                           // 3271
   *                                                                                                                   // 3272
   * @param {Event} evt The event that fired.                                                                          // 3273
   * @private                                                                                                          // 3274
   */                                                                                                                  // 3275
MaterialLayout.prototype.keyboardEventHandler_ = function (evt) {                                                      // 3276
    // Only react when the drawer is open.                                                                             // 3277
    if (evt.keyCode === this.Keycodes_.ESCAPE && this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)) {   // 3278
        this.toggleDrawer();                                                                                           // 3279
    }                                                                                                                  // 3280
};                                                                                                                     // 3281
/**                                                                                                                    // 3282
   * Handles changes in screen size.                                                                                   // 3283
   *                                                                                                                   // 3284
   * @private                                                                                                          // 3285
   */                                                                                                                  // 3286
MaterialLayout.prototype.screenSizeHandler_ = function () {                                                            // 3287
    if (this.screenSizeMediaQuery_.matches) {                                                                          // 3288
        this.element_.classList.add(this.CssClasses_.IS_SMALL_SCREEN);                                                 // 3289
    } else {                                                                                                           // 3290
        this.element_.classList.remove(this.CssClasses_.IS_SMALL_SCREEN);                                              // 3291
        // Collapse drawer (if any) when moving to a large screen size.                                                // 3292
        if (this.drawer_) {                                                                                            // 3293
            this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN);                                            // 3294
            this.obfuscator_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN);                                        // 3295
        }                                                                                                              // 3296
    }                                                                                                                  // 3297
};                                                                                                                     // 3298
/**                                                                                                                    // 3299
   * Handles events of drawer button.                                                                                  // 3300
   *                                                                                                                   // 3301
   * @param {Event} evt The event that fired.                                                                          // 3302
   * @private                                                                                                          // 3303
   */                                                                                                                  // 3304
MaterialLayout.prototype.drawerToggleHandler_ = function (evt) {                                                       // 3305
    if (evt && evt.type === 'keydown') {                                                                               // 3306
        if (evt.keyCode === this.Keycodes_.SPACE || evt.keyCode === this.Keycodes_.ENTER) {                            // 3307
            // prevent scrolling in drawer nav                                                                         // 3308
            evt.preventDefault();                                                                                      // 3309
        } else {                                                                                                       // 3310
            // prevent other keys                                                                                      // 3311
            return;                                                                                                    // 3312
        }                                                                                                              // 3313
    }                                                                                                                  // 3314
    this.toggleDrawer();                                                                                               // 3315
};                                                                                                                     // 3316
/**                                                                                                                    // 3317
   * Handles (un)setting the `is-animating` class                                                                      // 3318
   *                                                                                                                   // 3319
   * @private                                                                                                          // 3320
   */                                                                                                                  // 3321
MaterialLayout.prototype.headerTransitionEndHandler_ = function () {                                                   // 3322
    this.header_.classList.remove(this.CssClasses_.IS_ANIMATING);                                                      // 3323
};                                                                                                                     // 3324
/**                                                                                                                    // 3325
   * Handles expanding the header on click                                                                             // 3326
   *                                                                                                                   // 3327
   * @private                                                                                                          // 3328
   */                                                                                                                  // 3329
MaterialLayout.prototype.headerClickHandler_ = function () {                                                           // 3330
    if (this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {                                                // 3331
        this.header_.classList.remove(this.CssClasses_.IS_COMPACT);                                                    // 3332
        this.header_.classList.add(this.CssClasses_.IS_ANIMATING);                                                     // 3333
    }                                                                                                                  // 3334
};                                                                                                                     // 3335
/**                                                                                                                    // 3336
   * Reset tab state, dropping active classes                                                                          // 3337
   *                                                                                                                   // 3338
   * @private                                                                                                          // 3339
   */                                                                                                                  // 3340
MaterialLayout.prototype.resetTabState_ = function (tabBar) {                                                          // 3341
    for (var k = 0; k < tabBar.length; k++) {                                                                          // 3342
        tabBar[k].classList.remove(this.CssClasses_.IS_ACTIVE);                                                        // 3343
    }                                                                                                                  // 3344
};                                                                                                                     // 3345
/**                                                                                                                    // 3346
   * Reset panel state, droping active classes                                                                         // 3347
   *                                                                                                                   // 3348
   * @private                                                                                                          // 3349
   */                                                                                                                  // 3350
MaterialLayout.prototype.resetPanelState_ = function (panels) {                                                        // 3351
    for (var j = 0; j < panels.length; j++) {                                                                          // 3352
        panels[j].classList.remove(this.CssClasses_.IS_ACTIVE);                                                        // 3353
    }                                                                                                                  // 3354
};                                                                                                                     // 3355
/**                                                                                                                    // 3356
  * Toggle drawer state                                                                                                // 3357
  *                                                                                                                    // 3358
  * @public                                                                                                            // 3359
  */                                                                                                                   // 3360
MaterialLayout.prototype.toggleDrawer = function () {                                                                  // 3361
    var drawerButton = this.element_.querySelector('.' + this.CssClasses_.DRAWER_BTN);                                 // 3362
    this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN);                                                    // 3363
    this.obfuscator_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN);                                                // 3364
    // Set accessibility properties.                                                                                   // 3365
    if (this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)) {                                            // 3366
        this.drawer_.setAttribute('aria-hidden', 'false');                                                             // 3367
        drawerButton.setAttribute('aria-expanded', 'true');                                                            // 3368
    } else {                                                                                                           // 3369
        this.drawer_.setAttribute('aria-hidden', 'true');                                                              // 3370
        drawerButton.setAttribute('aria-expanded', 'false');                                                           // 3371
    }                                                                                                                  // 3372
};                                                                                                                     // 3373
MaterialLayout.prototype['toggleDrawer'] = MaterialLayout.prototype.toggleDrawer;                                      // 3374
/**                                                                                                                    // 3375
   * Initialize element.                                                                                               // 3376
   */                                                                                                                  // 3377
MaterialLayout.prototype.init = function () {                                                                          // 3378
    if (this.element_) {                                                                                               // 3379
        var container = document.createElement('div');                                                                 // 3380
        container.classList.add(this.CssClasses_.CONTAINER);                                                           // 3381
        var focusedElement = this.element_.querySelector(':focus');                                                    // 3382
        this.element_.parentElement.insertBefore(container, this.element_);                                            // 3383
        this.element_.parentElement.removeChild(this.element_);                                                        // 3384
        container.appendChild(this.element_);                                                                          // 3385
        if (focusedElement) {                                                                                          // 3386
            focusedElement.focus();                                                                                    // 3387
        }                                                                                                              // 3388
        var directChildren = this.element_.childNodes;                                                                 // 3389
        var numChildren = directChildren.length;                                                                       // 3390
        for (var c = 0; c < numChildren; c++) {                                                                        // 3391
            var child = directChildren[c];                                                                             // 3392
            if (child.classList && child.classList.contains(this.CssClasses_.HEADER)) {                                // 3393
                this.header_ = child;                                                                                  // 3394
            }                                                                                                          // 3395
            if (child.classList && child.classList.contains(this.CssClasses_.DRAWER)) {                                // 3396
                this.drawer_ = child;                                                                                  // 3397
            }                                                                                                          // 3398
            if (child.classList && child.classList.contains(this.CssClasses_.CONTENT)) {                               // 3399
                this.content_ = child;                                                                                 // 3400
            }                                                                                                          // 3401
        }                                                                                                              // 3402
        window.addEventListener('pageshow', function (e) {                                                             // 3403
            if (e.persisted) {                                                                                         // 3404
                // when page is loaded from back/forward cache                                                         // 3405
                // trigger repaint to let layout scroll in safari                                                      // 3406
                this.element_.style.overflowY = 'hidden';                                                              // 3407
                requestAnimationFrame(function () {                                                                    // 3408
                    this.element_.style.overflowY = '';                                                                // 3409
                }.bind(this));                                                                                         // 3410
            }                                                                                                          // 3411
        }.bind(this), false);                                                                                          // 3412
        if (this.header_) {                                                                                            // 3413
            this.tabBar_ = this.header_.querySelector('.' + this.CssClasses_.TAB_BAR);                                 // 3414
        }                                                                                                              // 3415
        var mode = this.Mode_.STANDARD;                                                                                // 3416
        if (this.header_) {                                                                                            // 3417
            if (this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED)) {                                     // 3418
                mode = this.Mode_.SEAMED;                                                                              // 3419
            } else if (this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL)) {                           // 3420
                mode = this.Mode_.WATERFALL;                                                                           // 3421
                this.header_.addEventListener('transitionend', this.headerTransitionEndHandler_.bind(this));           // 3422
                this.header_.addEventListener('click', this.headerClickHandler_.bind(this));                           // 3423
            } else if (this.header_.classList.contains(this.CssClasses_.HEADER_SCROLL)) {                              // 3424
                mode = this.Mode_.SCROLL;                                                                              // 3425
                container.classList.add(this.CssClasses_.HAS_SCROLLING_HEADER);                                        // 3426
            }                                                                                                          // 3427
            if (mode === this.Mode_.STANDARD) {                                                                        // 3428
                this.header_.classList.add(this.CssClasses_.CASTING_SHADOW);                                           // 3429
                if (this.tabBar_) {                                                                                    // 3430
                    this.tabBar_.classList.add(this.CssClasses_.CASTING_SHADOW);                                       // 3431
                }                                                                                                      // 3432
            } else if (mode === this.Mode_.SEAMED || mode === this.Mode_.SCROLL) {                                     // 3433
                this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW);                                        // 3434
                if (this.tabBar_) {                                                                                    // 3435
                    this.tabBar_.classList.remove(this.CssClasses_.CASTING_SHADOW);                                    // 3436
                }                                                                                                      // 3437
            } else if (mode === this.Mode_.WATERFALL) {                                                                // 3438
                // Add and remove shadows depending on scroll position.                                                // 3439
                // Also add/remove auxiliary class for styling of the compact version of                               // 3440
                // the header.                                                                                         // 3441
                this.content_.addEventListener('scroll', this.contentScrollHandler_.bind(this));                       // 3442
                this.contentScrollHandler_();                                                                          // 3443
            }                                                                                                          // 3444
        }                                                                                                              // 3445
        // Add drawer toggling button to our layout, if we have an openable drawer.                                    // 3446
        if (this.drawer_) {                                                                                            // 3447
            var drawerButton = this.element_.querySelector('.' + this.CssClasses_.DRAWER_BTN);                         // 3448
            if (!drawerButton) {                                                                                       // 3449
                drawerButton = document.createElement('div');                                                          // 3450
                drawerButton.setAttribute('aria-expanded', 'false');                                                   // 3451
                drawerButton.setAttribute('role', 'button');                                                           // 3452
                drawerButton.setAttribute('tabindex', '0');                                                            // 3453
                drawerButton.classList.add(this.CssClasses_.DRAWER_BTN);                                               // 3454
                var drawerButtonIcon = document.createElement('i');                                                    // 3455
                drawerButtonIcon.classList.add(this.CssClasses_.ICON);                                                 // 3456
                drawerButtonIcon.innerHTML = this.Constant_.MENU_ICON;                                                 // 3457
                drawerButton.appendChild(drawerButtonIcon);                                                            // 3458
            }                                                                                                          // 3459
            if (this.drawer_.classList.contains(this.CssClasses_.ON_LARGE_SCREEN)) {                                   // 3460
                //If drawer has ON_LARGE_SCREEN class then add it to the drawer toggle button as well.                 // 3461
                drawerButton.classList.add(this.CssClasses_.ON_LARGE_SCREEN);                                          // 3462
            } else if (this.drawer_.classList.contains(this.CssClasses_.ON_SMALL_SCREEN)) {                            // 3463
                //If drawer has ON_SMALL_SCREEN class then add it to the drawer toggle button as well.                 // 3464
                drawerButton.classList.add(this.CssClasses_.ON_SMALL_SCREEN);                                          // 3465
            }                                                                                                          // 3466
            drawerButton.addEventListener('click', this.drawerToggleHandler_.bind(this));                              // 3467
            drawerButton.addEventListener('keydown', this.drawerToggleHandler_.bind(this));                            // 3468
            // Add a class if the layout has a drawer, for altering the left padding.                                  // 3469
            // Adds the HAS_DRAWER to the elements since this.header_ may or may                                       // 3470
            // not be present.                                                                                         // 3471
            this.element_.classList.add(this.CssClasses_.HAS_DRAWER);                                                  // 3472
            // If we have a fixed header, add the button to the header rather than                                     // 3473
            // the layout.                                                                                             // 3474
            if (this.element_.classList.contains(this.CssClasses_.FIXED_HEADER)) {                                     // 3475
                this.header_.insertBefore(drawerButton, this.header_.firstChild);                                      // 3476
            } else {                                                                                                   // 3477
                this.element_.insertBefore(drawerButton, this.content_);                                               // 3478
            }                                                                                                          // 3479
            var obfuscator = document.createElement('div');                                                            // 3480
            obfuscator.classList.add(this.CssClasses_.OBFUSCATOR);                                                     // 3481
            this.element_.appendChild(obfuscator);                                                                     // 3482
            obfuscator.addEventListener('click', this.drawerToggleHandler_.bind(this));                                // 3483
            this.obfuscator_ = obfuscator;                                                                             // 3484
            this.drawer_.addEventListener('keydown', this.keyboardEventHandler_.bind(this));                           // 3485
            this.drawer_.setAttribute('aria-hidden', 'true');                                                          // 3486
        }                                                                                                              // 3487
        // Keep an eye on screen size, and add/remove auxiliary class for styling                                      // 3488
        // of small screens.                                                                                           // 3489
        this.screenSizeMediaQuery_ = window.matchMedia(this.Constant_.MAX_WIDTH);                                      // 3490
        this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this));                                    // 3491
        this.screenSizeHandler_();                                                                                     // 3492
        // Initialize tabs, if any.                                                                                    // 3493
        if (this.header_ && this.tabBar_) {                                                                            // 3494
            this.element_.classList.add(this.CssClasses_.HAS_TABS);                                                    // 3495
            var tabContainer = document.createElement('div');                                                          // 3496
            tabContainer.classList.add(this.CssClasses_.TAB_CONTAINER);                                                // 3497
            this.header_.insertBefore(tabContainer, this.tabBar_);                                                     // 3498
            this.header_.removeChild(this.tabBar_);                                                                    // 3499
            var leftButton = document.createElement('div');                                                            // 3500
            leftButton.classList.add(this.CssClasses_.TAB_BAR_BUTTON);                                                 // 3501
            leftButton.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON);                                            // 3502
            var leftButtonIcon = document.createElement('i');                                                          // 3503
            leftButtonIcon.classList.add(this.CssClasses_.ICON);                                                       // 3504
            leftButtonIcon.textContent = this.Constant_.CHEVRON_LEFT;                                                  // 3505
            leftButton.appendChild(leftButtonIcon);                                                                    // 3506
            leftButton.addEventListener('click', function () {                                                         // 3507
                this.tabBar_.scrollLeft -= this.Constant_.TAB_SCROLL_PIXELS;                                           // 3508
            }.bind(this));                                                                                             // 3509
            var rightButton = document.createElement('div');                                                           // 3510
            rightButton.classList.add(this.CssClasses_.TAB_BAR_BUTTON);                                                // 3511
            rightButton.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON);                                          // 3512
            var rightButtonIcon = document.createElement('i');                                                         // 3513
            rightButtonIcon.classList.add(this.CssClasses_.ICON);                                                      // 3514
            rightButtonIcon.textContent = this.Constant_.CHEVRON_RIGHT;                                                // 3515
            rightButton.appendChild(rightButtonIcon);                                                                  // 3516
            rightButton.addEventListener('click', function () {                                                        // 3517
                this.tabBar_.scrollLeft += this.Constant_.TAB_SCROLL_PIXELS;                                           // 3518
            }.bind(this));                                                                                             // 3519
            tabContainer.appendChild(leftButton);                                                                      // 3520
            tabContainer.appendChild(this.tabBar_);                                                                    // 3521
            tabContainer.appendChild(rightButton);                                                                     // 3522
            // Add and remove tab buttons depending on scroll position and total                                       // 3523
            // window size.                                                                                            // 3524
            var tabUpdateHandler = function () {                                                                       // 3525
                if (this.tabBar_.scrollLeft > 0) {                                                                     // 3526
                    leftButton.classList.add(this.CssClasses_.IS_ACTIVE);                                              // 3527
                } else {                                                                                               // 3528
                    leftButton.classList.remove(this.CssClasses_.IS_ACTIVE);                                           // 3529
                }                                                                                                      // 3530
                if (this.tabBar_.scrollLeft < this.tabBar_.scrollWidth - this.tabBar_.offsetWidth) {                   // 3531
                    rightButton.classList.add(this.CssClasses_.IS_ACTIVE);                                             // 3532
                } else {                                                                                               // 3533
                    rightButton.classList.remove(this.CssClasses_.IS_ACTIVE);                                          // 3534
                }                                                                                                      // 3535
            }.bind(this);                                                                                              // 3536
            this.tabBar_.addEventListener('scroll', tabUpdateHandler);                                                 // 3537
            tabUpdateHandler();                                                                                        // 3538
            // Update tabs when the window resizes.                                                                    // 3539
            var windowResizeHandler = function () {                                                                    // 3540
                // Use timeouts to make sure it doesn't happen too often.                                              // 3541
                if (this.resizeTimeoutId_) {                                                                           // 3542
                    clearTimeout(this.resizeTimeoutId_);                                                               // 3543
                }                                                                                                      // 3544
                this.resizeTimeoutId_ = setTimeout(function () {                                                       // 3545
                    tabUpdateHandler();                                                                                // 3546
                    this.resizeTimeoutId_ = null;                                                                      // 3547
                }.bind(this), this.Constant_.RESIZE_TIMEOUT);                                                          // 3548
            }.bind(this);                                                                                              // 3549
            window.addEventListener('resize', windowResizeHandler);                                                    // 3550
            if (this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)) {                                  // 3551
                this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);                                     // 3552
            }                                                                                                          // 3553
            // Select element tabs, document panels                                                                    // 3554
            var tabs = this.tabBar_.querySelectorAll('.' + this.CssClasses_.TAB);                                      // 3555
            var panels = this.content_.querySelectorAll('.' + this.CssClasses_.PANEL);                                 // 3556
            // Create new tabs for each tab element                                                                    // 3557
            for (var i = 0; i < tabs.length; i++) {                                                                    // 3558
                new MaterialLayoutTab(tabs[i], tabs, panels, this);                                                    // 3559
            }                                                                                                          // 3560
        }                                                                                                              // 3561
        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);                                                     // 3562
    }                                                                                                                  // 3563
};                                                                                                                     // 3564
/**                                                                                                                    // 3565
   * Constructor for an individual tab.                                                                                // 3566
   *                                                                                                                   // 3567
   * @constructor                                                                                                      // 3568
   * @param {HTMLElement} tab The HTML element for the tab.                                                            // 3569
   * @param {!Array<HTMLElement>} tabs Array with HTML elements for all tabs.                                          // 3570
   * @param {!Array<HTMLElement>} panels Array with HTML elements for all panels.                                      // 3571
   * @param {MaterialLayout} layout The MaterialLayout object that owns the tab.                                       // 3572
   */                                                                                                                  // 3573
function MaterialLayoutTab(tab, tabs, panels, layout) {                                                                // 3574
    /**                                                                                                                // 3575
     * Auxiliary method to programmatically select a tab in the UI.                                                    // 3576
     */                                                                                                                // 3577
    function selectTab() {                                                                                             // 3578
        var href = tab.href.split('#')[1];                                                                             // 3579
        var panel = layout.content_.querySelector('#' + href);                                                         // 3580
        layout.resetTabState_(tabs);                                                                                   // 3581
        layout.resetPanelState_(panels);                                                                               // 3582
        tab.classList.add(layout.CssClasses_.IS_ACTIVE);                                                               // 3583
        panel.classList.add(layout.CssClasses_.IS_ACTIVE);                                                             // 3584
    }                                                                                                                  // 3585
    if (layout.tabBar_.classList.contains(layout.CssClasses_.JS_RIPPLE_EFFECT)) {                                      // 3586
        var rippleContainer = document.createElement('span');                                                          // 3587
        rippleContainer.classList.add(layout.CssClasses_.RIPPLE_CONTAINER);                                            // 3588
        rippleContainer.classList.add(layout.CssClasses_.JS_RIPPLE_EFFECT);                                            // 3589
        var ripple = document.createElement('span');                                                                   // 3590
        ripple.classList.add(layout.CssClasses_.RIPPLE);                                                               // 3591
        rippleContainer.appendChild(ripple);                                                                           // 3592
        tab.appendChild(rippleContainer);                                                                              // 3593
    }                                                                                                                  // 3594
    if (!layout.tabBar_.classList.contains(layout.CssClasses_.TAB_MANUAL_SWITCH)) {                                    // 3595
        tab.addEventListener('click', function (e) {                                                                   // 3596
            if (tab.getAttribute('href').charAt(0) === '#') {                                                          // 3597
                e.preventDefault();                                                                                    // 3598
                selectTab();                                                                                           // 3599
            }                                                                                                          // 3600
        });                                                                                                            // 3601
    }                                                                                                                  // 3602
    tab.show = selectTab;                                                                                              // 3603
}                                                                                                                      // 3604
window['MaterialLayoutTab'] = MaterialLayoutTab;                                                                       // 3605
// The component registers itself. It can assume componentHandler is available                                         // 3606
// in the global scope.                                                                                                // 3607
componentHandler.register({                                                                                            // 3608
    constructor: MaterialLayout,                                                                                       // 3609
    classAsString: 'MaterialLayout',                                                                                   // 3610
    cssClass: 'mdl-js-layout'                                                                                          // 3611
});                                                                                                                    // 3612
/**                                                                                                                    // 3613
 * @license                                                                                                            // 3614
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 3615
 *                                                                                                                     // 3616
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 3617
 * you may not use this file except in compliance with the License.                                                    // 3618
 * You may obtain a copy of the License at                                                                             // 3619
 *                                                                                                                     // 3620
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 3621
 *                                                                                                                     // 3622
 * Unless required by applicable law or agreed to in writing, software                                                 // 3623
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 3624
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 3625
 * See the License for the specific language governing permissions and                                                 // 3626
 * limitations under the License.                                                                                      // 3627
 */                                                                                                                    // 3628
/**                                                                                                                    // 3629
   * Class constructor for Data Table Card MDL component.                                                              // 3630
   * Implements MDL component design pattern defined at:                                                               // 3631
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 3632
   *                                                                                                                   // 3633
   * @constructor                                                                                                      // 3634
   * @param {Element} element The element that will be upgraded.                                                       // 3635
   */                                                                                                                  // 3636
var MaterialDataTable = function MaterialDataTable(element) {                                                          // 3637
    this.element_ = element;                                                                                           // 3638
    // Initialize instance.                                                                                            // 3639
    this.init();                                                                                                       // 3640
};                                                                                                                     // 3641
window['MaterialDataTable'] = MaterialDataTable;                                                                       // 3642
/**                                                                                                                    // 3643
   * Store constants in one place so they can be updated easily.                                                       // 3644
   *                                                                                                                   // 3645
   * @enum {string | number}                                                                                           // 3646
   * @private                                                                                                          // 3647
   */                                                                                                                  // 3648
MaterialDataTable.prototype.Constant_ = {};                                                                            // 3649
/**                                                                                                                    // 3650
   * Store strings for class names defined by this component that are used in                                          // 3651
   * JavaScript. This allows us to simply change it in one place should we                                             // 3652
   * decide to modify at a later date.                                                                                 // 3653
   *                                                                                                                   // 3654
   * @enum {string}                                                                                                    // 3655
   * @private                                                                                                          // 3656
   */                                                                                                                  // 3657
MaterialDataTable.prototype.CssClasses_ = {                                                                            // 3658
    DATA_TABLE: 'mdl-data-table',                                                                                      // 3659
    SELECTABLE: 'mdl-data-table--selectable',                                                                          // 3660
    SELECT_ELEMENT: 'mdl-data-table__select',                                                                          // 3661
    IS_SELECTED: 'is-selected',                                                                                        // 3662
    IS_UPGRADED: 'is-upgraded'                                                                                         // 3663
};                                                                                                                     // 3664
/**                                                                                                                    // 3665
   * Generates and returns a function that toggles the selection state of a                                            // 3666
   * single row (or multiple rows).                                                                                    // 3667
   *                                                                                                                   // 3668
   * @param {Element} checkbox Checkbox that toggles the selection state.                                              // 3669
   * @param {Element} row Row to toggle when checkbox changes.                                                         // 3670
   * @param {(Array<Object>|NodeList)=} opt_rows Rows to toggle when checkbox changes.                                 // 3671
   * @private                                                                                                          // 3672
   */                                                                                                                  // 3673
MaterialDataTable.prototype.selectRow_ = function (checkbox, row, opt_rows) {                                          // 3674
    if (row) {                                                                                                         // 3675
        return function () {                                                                                           // 3676
            if (checkbox.checked) {                                                                                    // 3677
                row.classList.add(this.CssClasses_.IS_SELECTED);                                                       // 3678
            } else {                                                                                                   // 3679
                row.classList.remove(this.CssClasses_.IS_SELECTED);                                                    // 3680
            }                                                                                                          // 3681
        }.bind(this);                                                                                                  // 3682
    }                                                                                                                  // 3683
    if (opt_rows) {                                                                                                    // 3684
        return function () {                                                                                           // 3685
            var i;                                                                                                     // 3686
            var el;                                                                                                    // 3687
            if (checkbox.checked) {                                                                                    // 3688
                for (i = 0; i < opt_rows.length; i++) {                                                                // 3689
                    el = opt_rows[i].querySelector('td').querySelector('.mdl-checkbox');                               // 3690
                    el['MaterialCheckbox'].check();                                                                    // 3691
                    opt_rows[i].classList.add(this.CssClasses_.IS_SELECTED);                                           // 3692
                }                                                                                                      // 3693
            } else {                                                                                                   // 3694
                for (i = 0; i < opt_rows.length; i++) {                                                                // 3695
                    el = opt_rows[i].querySelector('td').querySelector('.mdl-checkbox');                               // 3696
                    el['MaterialCheckbox'].uncheck();                                                                  // 3697
                    opt_rows[i].classList.remove(this.CssClasses_.IS_SELECTED);                                        // 3698
                }                                                                                                      // 3699
            }                                                                                                          // 3700
        }.bind(this);                                                                                                  // 3701
    }                                                                                                                  // 3702
};                                                                                                                     // 3703
/**                                                                                                                    // 3704
   * Creates a checkbox for a single or or multiple rows and hooks up the                                              // 3705
   * event handling.                                                                                                   // 3706
   *                                                                                                                   // 3707
   * @param {Element} row Row to toggle when checkbox changes.                                                         // 3708
   * @param {(Array<Object>|NodeList)=} opt_rows Rows to toggle when checkbox changes.                                 // 3709
   * @private                                                                                                          // 3710
   */                                                                                                                  // 3711
MaterialDataTable.prototype.createCheckbox_ = function (row, opt_rows) {                                               // 3712
    var label = document.createElement('label');                                                                       // 3713
    var labelClasses = [                                                                                               // 3714
        'mdl-checkbox',                                                                                                // 3715
        'mdl-js-checkbox',                                                                                             // 3716
        'mdl-js-ripple-effect',                                                                                        // 3717
        this.CssClasses_.SELECT_ELEMENT                                                                                // 3718
    ];                                                                                                                 // 3719
    label.className = labelClasses.join(' ');                                                                          // 3720
    var checkbox = document.createElement('input');                                                                    // 3721
    checkbox.type = 'checkbox';                                                                                        // 3722
    checkbox.classList.add('mdl-checkbox__input');                                                                     // 3723
    if (row) {                                                                                                         // 3724
        checkbox.checked = row.classList.contains(this.CssClasses_.IS_SELECTED);                                       // 3725
        checkbox.addEventListener('change', this.selectRow_(checkbox, row));                                           // 3726
    } else if (opt_rows) {                                                                                             // 3727
        checkbox.addEventListener('change', this.selectRow_(checkbox, null, opt_rows));                                // 3728
    }                                                                                                                  // 3729
    label.appendChild(checkbox);                                                                                       // 3730
    componentHandler.upgradeElement(label, 'MaterialCheckbox');                                                        // 3731
    return label;                                                                                                      // 3732
};                                                                                                                     // 3733
/**                                                                                                                    // 3734
   * Initialize element.                                                                                               // 3735
   */                                                                                                                  // 3736
MaterialDataTable.prototype.init = function () {                                                                       // 3737
    if (this.element_) {                                                                                               // 3738
        var firstHeader = this.element_.querySelector('th');                                                           // 3739
        var bodyRows = Array.prototype.slice.call(this.element_.querySelectorAll('tbody tr'));                         // 3740
        var footRows = Array.prototype.slice.call(this.element_.querySelectorAll('tfoot tr'));                         // 3741
        var rows = bodyRows.concat(footRows);                                                                          // 3742
        if (this.element_.classList.contains(this.CssClasses_.SELECTABLE)) {                                           // 3743
            var th = document.createElement('th');                                                                     // 3744
            var headerCheckbox = this.createCheckbox_(null, rows);                                                     // 3745
            th.appendChild(headerCheckbox);                                                                            // 3746
            firstHeader.parentElement.insertBefore(th, firstHeader);                                                   // 3747
            for (var i = 0; i < rows.length; i++) {                                                                    // 3748
                var firstCell = rows[i].querySelector('td');                                                           // 3749
                if (firstCell) {                                                                                       // 3750
                    var td = document.createElement('td');                                                             // 3751
                    if (rows[i].parentNode.nodeName.toUpperCase() === 'TBODY') {                                       // 3752
                        var rowCheckbox = this.createCheckbox_(rows[i]);                                               // 3753
                        td.appendChild(rowCheckbox);                                                                   // 3754
                    }                                                                                                  // 3755
                    rows[i].insertBefore(td, firstCell);                                                               // 3756
                }                                                                                                      // 3757
            }                                                                                                          // 3758
            this.element_.classList.add(this.CssClasses_.IS_UPGRADED);                                                 // 3759
        }                                                                                                              // 3760
    }                                                                                                                  // 3761
};                                                                                                                     // 3762
// The component registers itself. It can assume componentHandler is available                                         // 3763
// in the global scope.                                                                                                // 3764
componentHandler.register({                                                                                            // 3765
    constructor: MaterialDataTable,                                                                                    // 3766
    classAsString: 'MaterialDataTable',                                                                                // 3767
    cssClass: 'mdl-js-data-table'                                                                                      // 3768
});                                                                                                                    // 3769
/**                                                                                                                    // 3770
 * @license                                                                                                            // 3771
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 3772
 *                                                                                                                     // 3773
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 3774
 * you may not use this file except in compliance with the License.                                                    // 3775
 * You may obtain a copy of the License at                                                                             // 3776
 *                                                                                                                     // 3777
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 3778
 *                                                                                                                     // 3779
 * Unless required by applicable law or agreed to in writing, software                                                 // 3780
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 3781
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 3782
 * See the License for the specific language governing permissions and                                                 // 3783
 * limitations under the License.                                                                                      // 3784
 */                                                                                                                    // 3785
/**                                                                                                                    // 3786
   * Class constructor for Ripple MDL component.                                                                       // 3787
   * Implements MDL component design pattern defined at:                                                               // 3788
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 3789
   *                                                                                                                   // 3790
   * @constructor                                                                                                      // 3791
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 3792
   */                                                                                                                  // 3793
var MaterialRipple = function MaterialRipple(element) {                                                                // 3794
    this.element_ = element;                                                                                           // 3795
    // Initialize instance.                                                                                            // 3796
    this.init();                                                                                                       // 3797
};                                                                                                                     // 3798
window['MaterialRipple'] = MaterialRipple;                                                                             // 3799
/**                                                                                                                    // 3800
   * Store constants in one place so they can be updated easily.                                                       // 3801
   *                                                                                                                   // 3802
   * @enum {string | number}                                                                                           // 3803
   * @private                                                                                                          // 3804
   */                                                                                                                  // 3805
MaterialRipple.prototype.Constant_ = {                                                                                 // 3806
    INITIAL_SCALE: 'scale(0.0001, 0.0001)',                                                                            // 3807
    INITIAL_SIZE: '1px',                                                                                               // 3808
    INITIAL_OPACITY: '0.4',                                                                                            // 3809
    FINAL_OPACITY: '0',                                                                                                // 3810
    FINAL_SCALE: ''                                                                                                    // 3811
};                                                                                                                     // 3812
/**                                                                                                                    // 3813
   * Store strings for class names defined by this component that are used in                                          // 3814
   * JavaScript. This allows us to simply change it in one place should we                                             // 3815
   * decide to modify at a later date.                                                                                 // 3816
   *                                                                                                                   // 3817
   * @enum {string}                                                                                                    // 3818
   * @private                                                                                                          // 3819
   */                                                                                                                  // 3820
MaterialRipple.prototype.CssClasses_ = {                                                                               // 3821
    RIPPLE_CENTER: 'mdl-ripple--center',                                                                               // 3822
    RIPPLE_EFFECT_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',                                                // 3823
    RIPPLE: 'mdl-ripple',                                                                                              // 3824
    IS_ANIMATING: 'is-animating',                                                                                      // 3825
    IS_VISIBLE: 'is-visible'                                                                                           // 3826
};                                                                                                                     // 3827
/**                                                                                                                    // 3828
   * Handle mouse / finger down on element.                                                                            // 3829
   *                                                                                                                   // 3830
   * @param {Event} event The event that fired.                                                                        // 3831
   * @private                                                                                                          // 3832
   */                                                                                                                  // 3833
MaterialRipple.prototype.downHandler_ = function (event) {                                                             // 3834
    if (!this.rippleElement_.style.width && !this.rippleElement_.style.height) {                                       // 3835
        var rect = this.element_.getBoundingClientRect();                                                              // 3836
        this.boundHeight = rect.height;                                                                                // 3837
        this.boundWidth = rect.width;                                                                                  // 3838
        this.rippleSize_ = Math.sqrt(rect.width * rect.width + rect.height * rect.height) * 2 + 2;                     // 3839
        this.rippleElement_.style.width = this.rippleSize_ + 'px';                                                     // 3840
        this.rippleElement_.style.height = this.rippleSize_ + 'px';                                                    // 3841
    }                                                                                                                  // 3842
    this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE);                                                    // 3843
    if (event.type === 'mousedown' && this.ignoringMouseDown_) {                                                       // 3844
        this.ignoringMouseDown_ = false;                                                                               // 3845
    } else {                                                                                                           // 3846
        if (event.type === 'touchstart') {                                                                             // 3847
            this.ignoringMouseDown_ = true;                                                                            // 3848
        }                                                                                                              // 3849
        var frameCount = this.getFrameCount();                                                                         // 3850
        if (frameCount > 0) {                                                                                          // 3851
            return;                                                                                                    // 3852
        }                                                                                                              // 3853
        this.setFrameCount(1);                                                                                         // 3854
        var bound = event.currentTarget.getBoundingClientRect();                                                       // 3855
        var x;                                                                                                         // 3856
        var y;                                                                                                         // 3857
        // Check if we are handling a keyboard click.                                                                  // 3858
        if (event.clientX === 0 && event.clientY === 0) {                                                              // 3859
            x = Math.round(bound.width / 2);                                                                           // 3860
            y = Math.round(bound.height / 2);                                                                          // 3861
        } else {                                                                                                       // 3862
            var clientX = event.clientX !== undefined ? event.clientX : event.touches[0].clientX;                      // 3863
            var clientY = event.clientY !== undefined ? event.clientY : event.touches[0].clientY;                      // 3864
            x = Math.round(clientX - bound.left);                                                                      // 3865
            y = Math.round(clientY - bound.top);                                                                       // 3866
        }                                                                                                              // 3867
        this.setRippleXY(x, y);                                                                                        // 3868
        this.setRippleStyles(true);                                                                                    // 3869
        window.requestAnimationFrame(this.animFrameHandler.bind(this));                                                // 3870
    }                                                                                                                  // 3871
};                                                                                                                     // 3872
/**                                                                                                                    // 3873
   * Handle mouse / finger up on element.                                                                              // 3874
   *                                                                                                                   // 3875
   * @param {Event} event The event that fired.                                                                        // 3876
   * @private                                                                                                          // 3877
   */                                                                                                                  // 3878
MaterialRipple.prototype.upHandler_ = function (event) {                                                               // 3879
    // Don't fire for the artificial "mouseup" generated by a double-click.                                            // 3880
    if (event && event.detail !== 2) {                                                                                 // 3881
        // Allow a repaint to occur before removing this class, so the animation                                       // 3882
        // shows for tap events, which seem to trigger a mouseup too soon after                                        // 3883
        // mousedown.                                                                                                  // 3884
        window.setTimeout(function () {                                                                                // 3885
            this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE);                                         // 3886
        }.bind(this), 0);                                                                                              // 3887
    }                                                                                                                  // 3888
};                                                                                                                     // 3889
/**                                                                                                                    // 3890
   * Initialize element.                                                                                               // 3891
   */                                                                                                                  // 3892
MaterialRipple.prototype.init = function () {                                                                          // 3893
    if (this.element_) {                                                                                               // 3894
        var recentering = this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);                            // 3895
        if (!this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)) {                         // 3896
            this.rippleElement_ = this.element_.querySelector('.' + this.CssClasses_.RIPPLE);                          // 3897
            this.frameCount_ = 0;                                                                                      // 3898
            this.rippleSize_ = 0;                                                                                      // 3899
            this.x_ = 0;                                                                                               // 3900
            this.y_ = 0;                                                                                               // 3901
            // Touch start produces a compat mouse down event, which would cause a                                     // 3902
            // second ripples. To avoid that, we use this property to ignore the first                                 // 3903
            // mouse down after a touch start.                                                                         // 3904
            this.ignoringMouseDown_ = false;                                                                           // 3905
            this.boundDownHandler = this.downHandler_.bind(this);                                                      // 3906
            this.element_.addEventListener('mousedown', this.boundDownHandler);                                        // 3907
            this.element_.addEventListener('touchstart', this.boundDownHandler);                                       // 3908
            this.boundUpHandler = this.upHandler_.bind(this);                                                          // 3909
            this.element_.addEventListener('mouseup', this.boundUpHandler);                                            // 3910
            this.element_.addEventListener('mouseleave', this.boundUpHandler);                                         // 3911
            this.element_.addEventListener('touchend', this.boundUpHandler);                                           // 3912
            this.element_.addEventListener('blur', this.boundUpHandler);                                               // 3913
            /**                                                                                                        // 3914
         * Getter for frameCount_.                                                                                     // 3915
         * @return {number} the frame count.                                                                           // 3916
         */                                                                                                            // 3917
            this.getFrameCount = function () {                                                                         // 3918
                return this.frameCount_;                                                                               // 3919
            };                                                                                                         // 3920
            /**                                                                                                        // 3921
         * Setter for frameCount_.                                                                                     // 3922
         * @param {number} fC the frame count.                                                                         // 3923
         */                                                                                                            // 3924
            this.setFrameCount = function (fC) {                                                                       // 3925
                this.frameCount_ = fC;                                                                                 // 3926
            };                                                                                                         // 3927
            /**                                                                                                        // 3928
         * Getter for rippleElement_.                                                                                  // 3929
         * @return {Element} the ripple element.                                                                       // 3930
         */                                                                                                            // 3931
            this.getRippleElement = function () {                                                                      // 3932
                return this.rippleElement_;                                                                            // 3933
            };                                                                                                         // 3934
            /**                                                                                                        // 3935
         * Sets the ripple X and Y coordinates.                                                                        // 3936
         * @param  {number} newX the new X coordinate                                                                  // 3937
         * @param  {number} newY the new Y coordinate                                                                  // 3938
         */                                                                                                            // 3939
            this.setRippleXY = function (newX, newY) {                                                                 // 3940
                this.x_ = newX;                                                                                        // 3941
                this.y_ = newY;                                                                                        // 3942
            };                                                                                                         // 3943
            /**                                                                                                        // 3944
         * Sets the ripple styles.                                                                                     // 3945
         * @param  {boolean} start whether or not this is the start frame.                                             // 3946
         */                                                                                                            // 3947
            this.setRippleStyles = function (start) {                                                                  // 3948
                if (this.rippleElement_ !== null) {                                                                    // 3949
                    var transformString;                                                                               // 3950
                    var scale;                                                                                         // 3951
                    var size;                                                                                          // 3952
                    var offset = 'translate(' + this.x_ + 'px, ' + this.y_ + 'px)';                                    // 3953
                    if (start) {                                                                                       // 3954
                        scale = this.Constant_.INITIAL_SCALE;                                                          // 3955
                        size = this.Constant_.INITIAL_SIZE;                                                            // 3956
                    } else {                                                                                           // 3957
                        scale = this.Constant_.FINAL_SCALE;                                                            // 3958
                        size = this.rippleSize_ + 'px';                                                                // 3959
                        if (recentering) {                                                                             // 3960
                            offset = 'translate(' + this.boundWidth / 2 + 'px, ' + this.boundHeight / 2 + 'px)';       // 3961
                        }                                                                                              // 3962
                    }                                                                                                  // 3963
                    transformString = 'translate(-50%, -50%) ' + offset + scale;                                       // 3964
                    this.rippleElement_.style.webkitTransform = transformString;                                       // 3965
                    this.rippleElement_.style.msTransform = transformString;                                           // 3966
                    this.rippleElement_.style.transform = transformString;                                             // 3967
                    if (start) {                                                                                       // 3968
                        this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING);                           // 3969
                    } else {                                                                                           // 3970
                        this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING);                              // 3971
                    }                                                                                                  // 3972
                }                                                                                                      // 3973
            };                                                                                                         // 3974
            /**                                                                                                        // 3975
         * Handles an animation frame.                                                                                 // 3976
         */                                                                                                            // 3977
            this.animFrameHandler = function () {                                                                      // 3978
                if (this.frameCount_-- > 0) {                                                                          // 3979
                    window.requestAnimationFrame(this.animFrameHandler.bind(this));                                    // 3980
                } else {                                                                                               // 3981
                    this.setRippleStyles(false);                                                                       // 3982
                }                                                                                                      // 3983
            };                                                                                                         // 3984
        }                                                                                                              // 3985
    }                                                                                                                  // 3986
};                                                                                                                     // 3987
// The component registers itself. It can assume componentHandler is available                                         // 3988
// in the global scope.                                                                                                // 3989
componentHandler.register({                                                                                            // 3990
    constructor: MaterialRipple,                                                                                       // 3991
    classAsString: 'MaterialRipple',                                                                                   // 3992
    cssClass: 'mdl-js-ripple-effect',                                                                                  // 3993
    widget: false                                                                                                      // 3994
});                                                                                                                    // 3995
}());                                                                                                                  // 3996
                                                                                                                       // 3997
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/attach-componentHandler.generated.js                                                                     //
// This file is in bare mode and is not in its own closure.                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
MDl.componentHandler = componentHandler;                                                                               // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


require("./client/main.js");