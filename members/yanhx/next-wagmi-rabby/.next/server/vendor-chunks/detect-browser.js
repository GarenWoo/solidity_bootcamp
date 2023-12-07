"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/detect-browser";
exports.ids = ["vendor-chunks/detect-browser"];
exports.modules = {

/***/ "(ssr)/./node_modules/detect-browser/index.js":
/*!**********************************************!*\
  !*** ./node_modules/detect-browser/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getNodeVersion = exports.detectOS = exports.parseUserAgent = exports.browserName = exports.detect = exports.ReactNativeInfo = exports.BotInfo = exports.SearchBotDeviceInfo = exports.NodeInfo = exports.BrowserInfo = void 0;\nvar BrowserInfo = /** @class */ (function () {\n    function BrowserInfo(name, version, os) {\n        this.name = name;\n        this.version = version;\n        this.os = os;\n        this.type = 'browser';\n    }\n    return BrowserInfo;\n}());\nexports.BrowserInfo = BrowserInfo;\nvar NodeInfo = /** @class */ (function () {\n    function NodeInfo(version) {\n        this.version = version;\n        this.type = 'node';\n        this.name = 'node';\n        this.os = process.platform;\n    }\n    return NodeInfo;\n}());\nexports.NodeInfo = NodeInfo;\nvar SearchBotDeviceInfo = /** @class */ (function () {\n    function SearchBotDeviceInfo(name, version, os, bot) {\n        this.name = name;\n        this.version = version;\n        this.os = os;\n        this.bot = bot;\n        this.type = 'bot-device';\n    }\n    return SearchBotDeviceInfo;\n}());\nexports.SearchBotDeviceInfo = SearchBotDeviceInfo;\nvar BotInfo = /** @class */ (function () {\n    function BotInfo() {\n        this.type = 'bot';\n        this.bot = true; // NOTE: deprecated test name instead\n        this.name = 'bot';\n        this.version = null;\n        this.os = null;\n    }\n    return BotInfo;\n}());\nexports.BotInfo = BotInfo;\nvar ReactNativeInfo = /** @class */ (function () {\n    function ReactNativeInfo() {\n        this.type = 'react-native';\n        this.name = 'react-native';\n        this.version = null;\n        this.os = null;\n    }\n    return ReactNativeInfo;\n}());\nexports.ReactNativeInfo = ReactNativeInfo;\n// tslint:disable-next-line:max-line-length\nvar SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;\nvar SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\\ Jeeves\\/Teoma|ia_archiver)/;\nvar REQUIRED_VERSION_PARTS = 3;\nvar userAgentRules = [\n    ['aol', /AOLShield\\/([0-9\\._]+)/],\n    ['edge', /Edge\\/([0-9\\._]+)/],\n    ['edge-ios', /EdgiOS\\/([0-9\\._]+)/],\n    ['yandexbrowser', /YaBrowser\\/([0-9\\._]+)/],\n    ['kakaotalk', /KAKAOTALK\\s([0-9\\.]+)/],\n    ['samsung', /SamsungBrowser\\/([0-9\\.]+)/],\n    ['silk', /\\bSilk\\/([0-9._-]+)\\b/],\n    ['miui', /MiuiBrowser\\/([0-9\\.]+)$/],\n    ['beaker', /BeakerBrowser\\/([0-9\\.]+)/],\n    ['edge-chromium', /EdgA?\\/([0-9\\.]+)/],\n    [\n        'chromium-webview',\n        /(?!Chrom.*OPR)wv\\).*Chrom(?:e|ium)\\/([0-9\\.]+)(:?\\s|$)/,\n    ],\n    ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\\/([0-9\\.]+)(:?\\s|$)/],\n    ['phantomjs', /PhantomJS\\/([0-9\\.]+)(:?\\s|$)/],\n    ['crios', /CriOS\\/([0-9\\.]+)(:?\\s|$)/],\n    ['firefox', /Firefox\\/([0-9\\.]+)(?:\\s|$)/],\n    ['fxios', /FxiOS\\/([0-9\\.]+)/],\n    ['opera-mini', /Opera Mini.*Version\\/([0-9\\.]+)/],\n    ['opera', /Opera\\/([0-9\\.]+)(?:\\s|$)/],\n    ['opera', /OPR\\/([0-9\\.]+)(:?\\s|$)/],\n    ['pie', /^Microsoft Pocket Internet Explorer\\/(\\d+\\.\\d+)$/],\n    ['pie', /^Mozilla\\/\\d\\.\\d+\\s\\(compatible;\\s(?:MSP?IE|MSInternet Explorer) (\\d+\\.\\d+);.*Windows CE.*\\)$/],\n    ['netfront', /^Mozilla\\/\\d\\.\\d+.*NetFront\\/(\\d.\\d)/],\n    ['ie', /Trident\\/7\\.0.*rv\\:([0-9\\.]+).*\\).*Gecko$/],\n    ['ie', /MSIE\\s([0-9\\.]+);.*Trident\\/[4-7].0/],\n    ['ie', /MSIE\\s(7\\.0)/],\n    ['bb10', /BB10;\\sTouch.*Version\\/([0-9\\.]+)/],\n    ['android', /Android\\s([0-9\\.]+)/],\n    ['ios', /Version\\/([0-9\\._]+).*Mobile.*Safari.*/],\n    ['safari', /Version\\/([0-9\\._]+).*Safari/],\n    ['facebook', /FB[AS]V\\/([0-9\\.]+)/],\n    ['instagram', /Instagram\\s([0-9\\.]+)/],\n    ['ios-webview', /AppleWebKit\\/([0-9\\.]+).*Mobile/],\n    ['ios-webview', /AppleWebKit\\/([0-9\\.]+).*Gecko\\)$/],\n    ['curl', /^curl\\/([0-9\\.]+)$/],\n    ['searchbot', SEARCHBOX_UA_REGEX],\n];\nvar operatingSystemRules = [\n    ['iOS', /iP(hone|od|ad)/],\n    ['Android OS', /Android/],\n    ['BlackBerry OS', /BlackBerry|BB10/],\n    ['Windows Mobile', /IEMobile/],\n    ['Amazon OS', /Kindle/],\n    ['Windows 3.11', /Win16/],\n    ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/],\n    ['Windows 98', /(Windows 98)|(Win98)/],\n    ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/],\n    ['Windows XP', /(Windows NT 5.1)|(Windows XP)/],\n    ['Windows Server 2003', /(Windows NT 5.2)/],\n    ['Windows Vista', /(Windows NT 6.0)/],\n    ['Windows 7', /(Windows NT 6.1)/],\n    ['Windows 8', /(Windows NT 6.2)/],\n    ['Windows 8.1', /(Windows NT 6.3)/],\n    ['Windows 10', /(Windows NT 10.0)/],\n    ['Windows ME', /Windows ME/],\n    ['Windows CE', /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],\n    ['Open BSD', /OpenBSD/],\n    ['Sun OS', /SunOS/],\n    ['Chrome OS', /CrOS/],\n    ['Linux', /(Linux)|(X11)/],\n    ['Mac OS', /(Mac_PowerPC)|(Macintosh)/],\n    ['QNX', /QNX/],\n    ['BeOS', /BeOS/],\n    ['OS/2', /OS\\/2/],\n];\nfunction detect(userAgent) {\n    if (!!userAgent) {\n        return parseUserAgent(userAgent);\n    }\n    if (typeof document === 'undefined' &&\n        typeof navigator !== 'undefined' &&\n        navigator.product === 'ReactNative') {\n        return new ReactNativeInfo();\n    }\n    if (typeof navigator !== 'undefined') {\n        return parseUserAgent(navigator.userAgent);\n    }\n    return getNodeVersion();\n}\nexports.detect = detect;\nfunction matchUserAgent(ua) {\n    // opted for using reduce here rather than Array#first with a regex.test call\n    // this is primarily because using the reduce we only perform the regex\n    // execution once rather than once for the test and for the exec again below\n    // probably something that needs to be benchmarked though\n    return (ua !== '' &&\n        userAgentRules.reduce(function (matched, _a) {\n            var browser = _a[0], regex = _a[1];\n            if (matched) {\n                return matched;\n            }\n            var uaMatch = regex.exec(ua);\n            return !!uaMatch && [browser, uaMatch];\n        }, false));\n}\nfunction browserName(ua) {\n    var data = matchUserAgent(ua);\n    return data ? data[0] : null;\n}\nexports.browserName = browserName;\nfunction parseUserAgent(ua) {\n    var matchedRule = matchUserAgent(ua);\n    if (!matchedRule) {\n        return null;\n    }\n    var name = matchedRule[0], match = matchedRule[1];\n    if (name === 'searchbot') {\n        return new BotInfo();\n    }\n    // Do not use RegExp for split operation as some browser do not support it (See: http://blog.stevenlevithan.com/archives/cross-browser-split)\n    var versionParts = match[1] && match[1].split('.').join('_').split('_').slice(0, 3);\n    if (versionParts) {\n        if (versionParts.length < REQUIRED_VERSION_PARTS) {\n            versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length), true);\n        }\n    }\n    else {\n        versionParts = [];\n    }\n    var version = versionParts.join('.');\n    var os = detectOS(ua);\n    var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);\n    if (searchBotMatch && searchBotMatch[1]) {\n        return new SearchBotDeviceInfo(name, version, os, searchBotMatch[1]);\n    }\n    return new BrowserInfo(name, version, os);\n}\nexports.parseUserAgent = parseUserAgent;\nfunction detectOS(ua) {\n    for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {\n        var _a = operatingSystemRules[ii], os = _a[0], regex = _a[1];\n        var match = regex.exec(ua);\n        if (match) {\n            return os;\n        }\n    }\n    return null;\n}\nexports.detectOS = detectOS;\nfunction getNodeVersion() {\n    var isNode = typeof process !== 'undefined' && process.version;\n    return isNode ? new NodeInfo(process.version.slice(1)) : null;\n}\nexports.getNodeVersion = getNodeVersion;\nfunction createVersionParts(count) {\n    var output = [];\n    for (var ii = 0; ii < count; ii++) {\n        output.push('0');\n    }\n    return output;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGV0ZWN0LWJyb3dzZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBLDZFQUE2RSxPQUFPO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHNCQUFzQixHQUFHLGdCQUFnQixHQUFHLHNCQUFzQixHQUFHLG1CQUFtQixHQUFHLGNBQWMsR0FBRyx1QkFBdUIsR0FBRyxlQUFlLEdBQUcsMkJBQTJCLEdBQUcsZ0JBQWdCLEdBQUcsbUJBQW1CO0FBQzVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLDRDQUE0QztBQUN6RjtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsMERBQTBELFlBQVk7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EscUJBQXFCLFlBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXdhZ21pLy4vbm9kZV9tb2R1bGVzL2RldGVjdC1icm93c2VyL2luZGV4LmpzP2MxNWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldE5vZGVWZXJzaW9uID0gZXhwb3J0cy5kZXRlY3RPUyA9IGV4cG9ydHMucGFyc2VVc2VyQWdlbnQgPSBleHBvcnRzLmJyb3dzZXJOYW1lID0gZXhwb3J0cy5kZXRlY3QgPSBleHBvcnRzLlJlYWN0TmF0aXZlSW5mbyA9IGV4cG9ydHMuQm90SW5mbyA9IGV4cG9ydHMuU2VhcmNoQm90RGV2aWNlSW5mbyA9IGV4cG9ydHMuTm9kZUluZm8gPSBleHBvcnRzLkJyb3dzZXJJbmZvID0gdm9pZCAwO1xudmFyIEJyb3dzZXJJbmZvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJyb3dzZXJJbmZvKG5hbWUsIHZlcnNpb24sIG9zKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgICAgIHRoaXMub3MgPSBvcztcbiAgICAgICAgdGhpcy50eXBlID0gJ2Jyb3dzZXInO1xuICAgIH1cbiAgICByZXR1cm4gQnJvd3NlckluZm87XG59KCkpO1xuZXhwb3J0cy5Ccm93c2VySW5mbyA9IEJyb3dzZXJJbmZvO1xudmFyIE5vZGVJbmZvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vZGVJbmZvKHZlcnNpb24pIHtcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICAgICAgdGhpcy50eXBlID0gJ25vZGUnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnbm9kZSc7XG4gICAgICAgIHRoaXMub3MgPSBwcm9jZXNzLnBsYXRmb3JtO1xuICAgIH1cbiAgICByZXR1cm4gTm9kZUluZm87XG59KCkpO1xuZXhwb3J0cy5Ob2RlSW5mbyA9IE5vZGVJbmZvO1xudmFyIFNlYXJjaEJvdERldmljZUluZm8gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VhcmNoQm90RGV2aWNlSW5mbyhuYW1lLCB2ZXJzaW9uLCBvcywgYm90KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgICAgIHRoaXMub3MgPSBvcztcbiAgICAgICAgdGhpcy5ib3QgPSBib3Q7XG4gICAgICAgIHRoaXMudHlwZSA9ICdib3QtZGV2aWNlJztcbiAgICB9XG4gICAgcmV0dXJuIFNlYXJjaEJvdERldmljZUluZm87XG59KCkpO1xuZXhwb3J0cy5TZWFyY2hCb3REZXZpY2VJbmZvID0gU2VhcmNoQm90RGV2aWNlSW5mbztcbnZhciBCb3RJbmZvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJvdEluZm8oKSB7XG4gICAgICAgIHRoaXMudHlwZSA9ICdib3QnO1xuICAgICAgICB0aGlzLmJvdCA9IHRydWU7IC8vIE5PVEU6IGRlcHJlY2F0ZWQgdGVzdCBuYW1lIGluc3RlYWRcbiAgICAgICAgdGhpcy5uYW1lID0gJ2JvdCc7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IG51bGw7XG4gICAgICAgIHRoaXMub3MgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gQm90SW5mbztcbn0oKSk7XG5leHBvcnRzLkJvdEluZm8gPSBCb3RJbmZvO1xudmFyIFJlYWN0TmF0aXZlSW5mbyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZWFjdE5hdGl2ZUluZm8oKSB7XG4gICAgICAgIHRoaXMudHlwZSA9ICdyZWFjdC1uYXRpdmUnO1xuICAgICAgICB0aGlzLm5hbWUgPSAncmVhY3QtbmF0aXZlJztcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcyA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBSZWFjdE5hdGl2ZUluZm87XG59KCkpO1xuZXhwb3J0cy5SZWFjdE5hdGl2ZUluZm8gPSBSZWFjdE5hdGl2ZUluZm87XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG52YXIgU0VBUkNIQk9YX1VBX1JFR0VYID0gL2FsZXhhfGJvdHxjcmF3bChlcnxpbmcpfGZhY2Vib29rZXh0ZXJuYWxoaXR8ZmVlZGJ1cm5lcnxnb29nbGUgd2ViIHByZXZpZXd8bmFnaW9zfHBvc3RyYW5rfHBpbmdkb218c2x1cnB8c3BpZGVyfHlhaG9vIXx5YW5kZXgvO1xudmFyIFNFQVJDSEJPVF9PU19SRUdFWCA9IC8obnVoa3xjdXJsfEdvb2dsZWJvdHxZYW1teWJvdHxPcGVuYm90fFNsdXJwfE1TTkJvdHxBc2tcXCBKZWV2ZXNcXC9UZW9tYXxpYV9hcmNoaXZlcikvO1xudmFyIFJFUVVJUkVEX1ZFUlNJT05fUEFSVFMgPSAzO1xudmFyIHVzZXJBZ2VudFJ1bGVzID0gW1xuICAgIFsnYW9sJywgL0FPTFNoaWVsZFxcLyhbMC05XFwuX10rKS9dLFxuICAgIFsnZWRnZScsIC9FZGdlXFwvKFswLTlcXC5fXSspL10sXG4gICAgWydlZGdlLWlvcycsIC9FZGdpT1NcXC8oWzAtOVxcLl9dKykvXSxcbiAgICBbJ3lhbmRleGJyb3dzZXInLCAvWWFCcm93c2VyXFwvKFswLTlcXC5fXSspL10sXG4gICAgWydrYWthb3RhbGsnLCAvS0FLQU9UQUxLXFxzKFswLTlcXC5dKykvXSxcbiAgICBbJ3NhbXN1bmcnLCAvU2Ftc3VuZ0Jyb3dzZXJcXC8oWzAtOVxcLl0rKS9dLFxuICAgIFsnc2lsaycsIC9cXGJTaWxrXFwvKFswLTkuXy1dKylcXGIvXSxcbiAgICBbJ21pdWknLCAvTWl1aUJyb3dzZXJcXC8oWzAtOVxcLl0rKSQvXSxcbiAgICBbJ2JlYWtlcicsIC9CZWFrZXJCcm93c2VyXFwvKFswLTlcXC5dKykvXSxcbiAgICBbJ2VkZ2UtY2hyb21pdW0nLCAvRWRnQT9cXC8oWzAtOVxcLl0rKS9dLFxuICAgIFtcbiAgICAgICAgJ2Nocm9taXVtLXdlYnZpZXcnLFxuICAgICAgICAvKD8hQ2hyb20uKk9QUil3dlxcKS4qQ2hyb20oPzplfGl1bSlcXC8oWzAtOVxcLl0rKSg6P1xcc3wkKS8sXG4gICAgXSxcbiAgICBbJ2Nocm9tZScsIC8oPyFDaHJvbS4qT1BSKUNocm9tKD86ZXxpdW0pXFwvKFswLTlcXC5dKykoOj9cXHN8JCkvXSxcbiAgICBbJ3BoYW50b21qcycsIC9QaGFudG9tSlNcXC8oWzAtOVxcLl0rKSg6P1xcc3wkKS9dLFxuICAgIFsnY3Jpb3MnLCAvQ3JpT1NcXC8oWzAtOVxcLl0rKSg6P1xcc3wkKS9dLFxuICAgIFsnZmlyZWZveCcsIC9GaXJlZm94XFwvKFswLTlcXC5dKykoPzpcXHN8JCkvXSxcbiAgICBbJ2Z4aW9zJywgL0Z4aU9TXFwvKFswLTlcXC5dKykvXSxcbiAgICBbJ29wZXJhLW1pbmknLCAvT3BlcmEgTWluaS4qVmVyc2lvblxcLyhbMC05XFwuXSspL10sXG4gICAgWydvcGVyYScsIC9PcGVyYVxcLyhbMC05XFwuXSspKD86XFxzfCQpL10sXG4gICAgWydvcGVyYScsIC9PUFJcXC8oWzAtOVxcLl0rKSg6P1xcc3wkKS9dLFxuICAgIFsncGllJywgL15NaWNyb3NvZnQgUG9ja2V0IEludGVybmV0IEV4cGxvcmVyXFwvKFxcZCtcXC5cXGQrKSQvXSxcbiAgICBbJ3BpZScsIC9eTW96aWxsYVxcL1xcZFxcLlxcZCtcXHNcXChjb21wYXRpYmxlO1xccyg/Ok1TUD9JRXxNU0ludGVybmV0IEV4cGxvcmVyKSAoXFxkK1xcLlxcZCspOy4qV2luZG93cyBDRS4qXFwpJC9dLFxuICAgIFsnbmV0ZnJvbnQnLCAvXk1vemlsbGFcXC9cXGRcXC5cXGQrLipOZXRGcm9udFxcLyhcXGQuXFxkKS9dLFxuICAgIFsnaWUnLCAvVHJpZGVudFxcLzdcXC4wLipydlxcOihbMC05XFwuXSspLipcXCkuKkdlY2tvJC9dLFxuICAgIFsnaWUnLCAvTVNJRVxccyhbMC05XFwuXSspOy4qVHJpZGVudFxcL1s0LTddLjAvXSxcbiAgICBbJ2llJywgL01TSUVcXHMoN1xcLjApL10sXG4gICAgWydiYjEwJywgL0JCMTA7XFxzVG91Y2guKlZlcnNpb25cXC8oWzAtOVxcLl0rKS9dLFxuICAgIFsnYW5kcm9pZCcsIC9BbmRyb2lkXFxzKFswLTlcXC5dKykvXSxcbiAgICBbJ2lvcycsIC9WZXJzaW9uXFwvKFswLTlcXC5fXSspLipNb2JpbGUuKlNhZmFyaS4qL10sXG4gICAgWydzYWZhcmknLCAvVmVyc2lvblxcLyhbMC05XFwuX10rKS4qU2FmYXJpL10sXG4gICAgWydmYWNlYm9vaycsIC9GQltBU11WXFwvKFswLTlcXC5dKykvXSxcbiAgICBbJ2luc3RhZ3JhbScsIC9JbnN0YWdyYW1cXHMoWzAtOVxcLl0rKS9dLFxuICAgIFsnaW9zLXdlYnZpZXcnLCAvQXBwbGVXZWJLaXRcXC8oWzAtOVxcLl0rKS4qTW9iaWxlL10sXG4gICAgWydpb3Mtd2VidmlldycsIC9BcHBsZVdlYktpdFxcLyhbMC05XFwuXSspLipHZWNrb1xcKSQvXSxcbiAgICBbJ2N1cmwnLCAvXmN1cmxcXC8oWzAtOVxcLl0rKSQvXSxcbiAgICBbJ3NlYXJjaGJvdCcsIFNFQVJDSEJPWF9VQV9SRUdFWF0sXG5dO1xudmFyIG9wZXJhdGluZ1N5c3RlbVJ1bGVzID0gW1xuICAgIFsnaU9TJywgL2lQKGhvbmV8b2R8YWQpL10sXG4gICAgWydBbmRyb2lkIE9TJywgL0FuZHJvaWQvXSxcbiAgICBbJ0JsYWNrQmVycnkgT1MnLCAvQmxhY2tCZXJyeXxCQjEwL10sXG4gICAgWydXaW5kb3dzIE1vYmlsZScsIC9JRU1vYmlsZS9dLFxuICAgIFsnQW1hem9uIE9TJywgL0tpbmRsZS9dLFxuICAgIFsnV2luZG93cyAzLjExJywgL1dpbjE2L10sXG4gICAgWydXaW5kb3dzIDk1JywgLyhXaW5kb3dzIDk1KXwoV2luOTUpfChXaW5kb3dzXzk1KS9dLFxuICAgIFsnV2luZG93cyA5OCcsIC8oV2luZG93cyA5OCl8KFdpbjk4KS9dLFxuICAgIFsnV2luZG93cyAyMDAwJywgLyhXaW5kb3dzIE5UIDUuMCl8KFdpbmRvd3MgMjAwMCkvXSxcbiAgICBbJ1dpbmRvd3MgWFAnLCAvKFdpbmRvd3MgTlQgNS4xKXwoV2luZG93cyBYUCkvXSxcbiAgICBbJ1dpbmRvd3MgU2VydmVyIDIwMDMnLCAvKFdpbmRvd3MgTlQgNS4yKS9dLFxuICAgIFsnV2luZG93cyBWaXN0YScsIC8oV2luZG93cyBOVCA2LjApL10sXG4gICAgWydXaW5kb3dzIDcnLCAvKFdpbmRvd3MgTlQgNi4xKS9dLFxuICAgIFsnV2luZG93cyA4JywgLyhXaW5kb3dzIE5UIDYuMikvXSxcbiAgICBbJ1dpbmRvd3MgOC4xJywgLyhXaW5kb3dzIE5UIDYuMykvXSxcbiAgICBbJ1dpbmRvd3MgMTAnLCAvKFdpbmRvd3MgTlQgMTAuMCkvXSxcbiAgICBbJ1dpbmRvd3MgTUUnLCAvV2luZG93cyBNRS9dLFxuICAgIFsnV2luZG93cyBDRScsIC9XaW5kb3dzIENFfFdpbkNFfE1pY3Jvc29mdCBQb2NrZXQgSW50ZXJuZXQgRXhwbG9yZXIvXSxcbiAgICBbJ09wZW4gQlNEJywgL09wZW5CU0QvXSxcbiAgICBbJ1N1biBPUycsIC9TdW5PUy9dLFxuICAgIFsnQ2hyb21lIE9TJywgL0NyT1MvXSxcbiAgICBbJ0xpbnV4JywgLyhMaW51eCl8KFgxMSkvXSxcbiAgICBbJ01hYyBPUycsIC8oTWFjX1Bvd2VyUEMpfChNYWNpbnRvc2gpL10sXG4gICAgWydRTlgnLCAvUU5YL10sXG4gICAgWydCZU9TJywgL0JlT1MvXSxcbiAgICBbJ09TLzInLCAvT1NcXC8yL10sXG5dO1xuZnVuY3Rpb24gZGV0ZWN0KHVzZXJBZ2VudCkge1xuICAgIGlmICghIXVzZXJBZ2VudCkge1xuICAgICAgICByZXR1cm4gcGFyc2VVc2VyQWdlbnQodXNlckFnZW50KTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWFjdE5hdGl2ZUluZm8oKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZVVzZXJBZ2VudChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldE5vZGVWZXJzaW9uKCk7XG59XG5leHBvcnRzLmRldGVjdCA9IGRldGVjdDtcbmZ1bmN0aW9uIG1hdGNoVXNlckFnZW50KHVhKSB7XG4gICAgLy8gb3B0ZWQgZm9yIHVzaW5nIHJlZHVjZSBoZXJlIHJhdGhlciB0aGFuIEFycmF5I2ZpcnN0IHdpdGggYSByZWdleC50ZXN0IGNhbGxcbiAgICAvLyB0aGlzIGlzIHByaW1hcmlseSBiZWNhdXNlIHVzaW5nIHRoZSByZWR1Y2Ugd2Ugb25seSBwZXJmb3JtIHRoZSByZWdleFxuICAgIC8vIGV4ZWN1dGlvbiBvbmNlIHJhdGhlciB0aGFuIG9uY2UgZm9yIHRoZSB0ZXN0IGFuZCBmb3IgdGhlIGV4ZWMgYWdhaW4gYmVsb3dcbiAgICAvLyBwcm9iYWJseSBzb21ldGhpbmcgdGhhdCBuZWVkcyB0byBiZSBiZW5jaG1hcmtlZCB0aG91Z2hcbiAgICByZXR1cm4gKHVhICE9PSAnJyAmJlxuICAgICAgICB1c2VyQWdlbnRSdWxlcy5yZWR1Y2UoZnVuY3Rpb24gKG1hdGNoZWQsIF9hKSB7XG4gICAgICAgICAgICB2YXIgYnJvd3NlciA9IF9hWzBdLCByZWdleCA9IF9hWzFdO1xuICAgICAgICAgICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1YU1hdGNoID0gcmVnZXguZXhlYyh1YSk7XG4gICAgICAgICAgICByZXR1cm4gISF1YU1hdGNoICYmIFticm93c2VyLCB1YU1hdGNoXTtcbiAgICAgICAgfSwgZmFsc2UpKTtcbn1cbmZ1bmN0aW9uIGJyb3dzZXJOYW1lKHVhKSB7XG4gICAgdmFyIGRhdGEgPSBtYXRjaFVzZXJBZ2VudCh1YSk7XG4gICAgcmV0dXJuIGRhdGEgPyBkYXRhWzBdIDogbnVsbDtcbn1cbmV4cG9ydHMuYnJvd3Nlck5hbWUgPSBicm93c2VyTmFtZTtcbmZ1bmN0aW9uIHBhcnNlVXNlckFnZW50KHVhKSB7XG4gICAgdmFyIG1hdGNoZWRSdWxlID0gbWF0Y2hVc2VyQWdlbnQodWEpO1xuICAgIGlmICghbWF0Y2hlZFJ1bGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBuYW1lID0gbWF0Y2hlZFJ1bGVbMF0sIG1hdGNoID0gbWF0Y2hlZFJ1bGVbMV07XG4gICAgaWYgKG5hbWUgPT09ICdzZWFyY2hib3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgQm90SW5mbygpO1xuICAgIH1cbiAgICAvLyBEbyBub3QgdXNlIFJlZ0V4cCBmb3Igc3BsaXQgb3BlcmF0aW9uIGFzIHNvbWUgYnJvd3NlciBkbyBub3Qgc3VwcG9ydCBpdCAoU2VlOiBodHRwOi8vYmxvZy5zdGV2ZW5sZXZpdGhhbi5jb20vYXJjaGl2ZXMvY3Jvc3MtYnJvd3Nlci1zcGxpdClcbiAgICB2YXIgdmVyc2lvblBhcnRzID0gbWF0Y2hbMV0gJiYgbWF0Y2hbMV0uc3BsaXQoJy4nKS5qb2luKCdfJykuc3BsaXQoJ18nKS5zbGljZSgwLCAzKTtcbiAgICBpZiAodmVyc2lvblBhcnRzKSB7XG4gICAgICAgIGlmICh2ZXJzaW9uUGFydHMubGVuZ3RoIDwgUkVRVUlSRURfVkVSU0lPTl9QQVJUUykge1xuICAgICAgICAgICAgdmVyc2lvblBhcnRzID0gX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCB2ZXJzaW9uUGFydHMsIHRydWUpLCBjcmVhdGVWZXJzaW9uUGFydHMoUkVRVUlSRURfVkVSU0lPTl9QQVJUUyAtIHZlcnNpb25QYXJ0cy5sZW5ndGgpLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmVyc2lvblBhcnRzID0gW107XG4gICAgfVxuICAgIHZhciB2ZXJzaW9uID0gdmVyc2lvblBhcnRzLmpvaW4oJy4nKTtcbiAgICB2YXIgb3MgPSBkZXRlY3RPUyh1YSk7XG4gICAgdmFyIHNlYXJjaEJvdE1hdGNoID0gU0VBUkNIQk9UX09TX1JFR0VYLmV4ZWModWEpO1xuICAgIGlmIChzZWFyY2hCb3RNYXRjaCAmJiBzZWFyY2hCb3RNYXRjaFsxXSkge1xuICAgICAgICByZXR1cm4gbmV3IFNlYXJjaEJvdERldmljZUluZm8obmFtZSwgdmVyc2lvbiwgb3MsIHNlYXJjaEJvdE1hdGNoWzFdKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBCcm93c2VySW5mbyhuYW1lLCB2ZXJzaW9uLCBvcyk7XG59XG5leHBvcnRzLnBhcnNlVXNlckFnZW50ID0gcGFyc2VVc2VyQWdlbnQ7XG5mdW5jdGlvbiBkZXRlY3RPUyh1YSkge1xuICAgIGZvciAodmFyIGlpID0gMCwgY291bnQgPSBvcGVyYXRpbmdTeXN0ZW1SdWxlcy5sZW5ndGg7IGlpIDwgY291bnQ7IGlpKyspIHtcbiAgICAgICAgdmFyIF9hID0gb3BlcmF0aW5nU3lzdGVtUnVsZXNbaWldLCBvcyA9IF9hWzBdLCByZWdleCA9IF9hWzFdO1xuICAgICAgICB2YXIgbWF0Y2ggPSByZWdleC5leGVjKHVhKTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gb3M7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnRzLmRldGVjdE9TID0gZGV0ZWN0T1M7XG5mdW5jdGlvbiBnZXROb2RlVmVyc2lvbigpIHtcbiAgICB2YXIgaXNOb2RlID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MudmVyc2lvbjtcbiAgICByZXR1cm4gaXNOb2RlID8gbmV3IE5vZGVJbmZvKHByb2Nlc3MudmVyc2lvbi5zbGljZSgxKSkgOiBudWxsO1xufVxuZXhwb3J0cy5nZXROb2RlVmVyc2lvbiA9IGdldE5vZGVWZXJzaW9uO1xuZnVuY3Rpb24gY3JlYXRlVmVyc2lvblBhcnRzKGNvdW50KSB7XG4gICAgdmFyIG91dHB1dCA9IFtdO1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBjb3VudDsgaWkrKykge1xuICAgICAgICBvdXRwdXQucHVzaCgnMCcpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/detect-browser/index.js\n");

/***/ })

};
;