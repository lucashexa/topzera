'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ":root {\n  --background-light: #ffffff;\n  --background-dark: #f7f7f7;\n  --header-light: #242425;\n  --header-dark: #000000;\n  --highlight-light: #bed6ee;\n  --highlight-dark:#335ca5;\n  --highlight-alternate: #62b4ff;\n  --accent-darkest: #333333;\n  --accent-darker: #666666;\n  --accent-dark: #adafb2;\n  --accent-medium: #c6c8c9;\n  --accent-regular: #d7d7d7;\n  --accent-light: #e5e5e5;\n  --accent-lighter: #eceeee;\n  --accent-lightest: #f2f2f2;\n  --success-dark: #118435;\n  --success-regular: #70b270;\n  --success-light: #c2f2c6;\n  --priority-lowest: #09c6a6;\n  --priority-low: #2f7ff4;\n  --priority-medium: #e9d527;\n  --priority-high: #ff8500;\n  --priority-highest: #d81a1c;\n  --priority-undefined: #fa0670;\n  --contrast-high: #9374bd;\n  --highlight-comments: #fdfa62;\n  --highlight-unsaved: #ffe3b6;\n  --danger-alternate: #af6161;\n  --error-alternate: #f7a02e;\n  --text-dark: #000000;\n  --text-light: #ffffff;\n  --link-selected: #a3628f; }\n";
styleInject(css);

var css$1 = "@font-face {\n  font-family: \"Segoe UI\";\n  src: url(\"../../../assets/fonts/Segoe UI.ttf\"); }\n\nhtml {\n  font-size: 12px; }\n\n:root {\n  --main-font: \"Segoe UI\", sans-serif;\n  --text-smallest: 1rem;\n  --text-smaller: 1.1rem;\n  --text-small: 1.2rem;\n  --text-normal: 1.3rem;\n  --text-big: 1.5rem;\n  --text-bigger: 1.7rem;\n  --text-biggest: 2.1rem;\n  --weight-normal: 400;\n  --weight-high: 800; }\n";
styleInject(css$1);

var css$2 = ".Button_ct-container__y0_P5 {\n  display: inline-block;\n  position: relative;\n  width: 100%; }\n\n.Button_ct-button__1y3T7 {\n  font-family: \"Segoe UI\", sans-serif;\n  font-size: var(--text-small);\n  padding: 0.2rem 0;\n  margin-left: 0.5rem;\n  width: calc(100% - 0.5rem);\n  box-sizing: border-box;\n  margin-right: 0;\n  margin-bottom: 0.5rem;\n  height: 100%;\n  height: 2.5rem; }\n  .Button_ct-button__1y3T7:not(.Button_ct-button--disabled__P9d8v):hover {\n    cursor: pointer; }\n  .Button_ct-button--disabled__P9d8v {\n    pointer-events: none; }\n  .Button_ct-button--secondary__2vB18 {\n    color: var(--text-dark);\n    background: var(--background-dark);\n    border: 1px solid var(--accent-dark);\n    box-shadow: 0px 1px 2px 0px var(--accent-dark); }\n    .Button_ct-button--secondary__2vB18:not(.Button_ct-button--secondary--disabled__35PKN):hover {\n      background: var(--accent-lighter);\n      border-color: var(--accent-light); }\n    .Button_ct-button--secondary--disabled__35PKN {\n      color: var(--accent-dark);\n      background: var(--accent-lighter);\n      box-shadow: none;\n      border: none; }\n  .Button_ct-button--primary__12-JR {\n    color: var(--text-light);\n    background: var(--highlight-dark);\n    border: 1px solid var(--accent-dark);\n    box-shadow: 0px 1px 2px 0px var(--accent-dark); }\n    .Button_ct-button--primary__12-JR:not(.Button_ct-button--primary--disabled__1lRkb):hover {\n      background: var(--highlight-alternate);\n      border-color: var(--accent-dark); }\n    .Button_ct-button--primary--disabled__1lRkb {\n      color: var(--accent-light);\n      background: var(--highlight-light);\n      box-shadow: none;\n      border: none; }\n  .Button_ct-button--combo__i02-g {\n    margin-right: 0;\n    width: calc(100% - 40px); }\n  .Button_ct-button--arrow__jsgrH {\n    padding: 0.2rem 0.8rem;\n    width: 40px;\n    margin-right: initial;\n    margin-left: 0;\n    width: auto; }\n  .Button_ct-button--in-list__26tjV {\n    width: 100%;\n    margin-top: 0;\n    margin-bottom: 0; }\n  .Button_ct-button__list__2YNjO {\n    position: absolute;\n    width: 100%;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    text-align: center; }\n";
var style = { "ct-container": "Button_ct-container__y0_P5", "ct-button": "Button_ct-button__1y3T7", "ct-button--disabled": "Button_ct-button--disabled__P9d8v", "ct-button--secondary": "Button_ct-button--secondary__2vB18", "ct-button--secondary--disabled": "Button_ct-button--secondary--disabled__35PKN", "ct-button--primary": "Button_ct-button--primary__12-JR", "ct-button--primary--disabled": "Button_ct-button--primary--disabled__1lRkb", "ct-button--combo": "Button_ct-button--combo__i02-g", "ct-button--arrow": "Button_ct-button--arrow__jsgrH", "ct-button--in-list": "Button_ct-button--in-list__26tjV", "ct-button__list": "Button_ct-button__list__2YNjO" };
styleInject(css$2);

var aux = function aux(props) {
  return props.children;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var setClasses = function setClasses(type, disabled, iconOnly, combo) {
    var classes = [];
    var baseClasses = [style["ct-button"], style['ct-button--' + type]];
    classes = [].concat(baseClasses);
    if (disabled) {
        var _classes;
        var disabledClasses = [style['ct-button--disabled'], style['ct-button--' + type + '--disabled']];
        classes = (_classes = classes).concat.apply(_classes, disabledClasses);
    }
    if (iconOnly) {
        var _classes2;
        var iconOnlyClasses = [style['ct-button--icon-only']];
        classes = (_classes2 = classes).concat.apply(_classes2, iconOnlyClasses);
    }
    if (combo) {
        var _classes3;
        var comboClasses = [style['ct-button--combo']];
        classes = (_classes3 = classes).concat.apply(_classes3, comboClasses);
    }
    return classes.join(" ");
};
var Button = function Button(props) {
    // const penis = useContext(EventContext)
    var children = props.children, type = props.type, disabled = props.disabled, click = props.click, combo = props.combo, list = props.list, listClick = props.listClick, iconOnly = props.iconOnly;
    var classes = setClasses(type, disabled, iconOnly, combo);
    var _useState = React.useState(false), _useState2 = slicedToArray(_useState, 2), viewList = _useState2[0], setViewList = _useState2[1];
    return React.createElement('div', { className: style["ct-container"] }, React.createElement('button', { onClick: click, className: classes }, children), combo ? React.createElement(aux, null, React.createElement('button', { onClick: function onClick() {
            setViewList(!viewList);
        }, className: classes.concat(' ' + style['ct-button--arrow']) }, 'v'), viewList ? React.createElement(aux, null, React.createElement('ul', { className: style['ct-button__list'] }, list.map(function (e) {
        return React.createElement('li', { onClick: listClick, className: classes.concat(' ' + style['ct-button--in-list']) }, e);
    }))) : null) : null);
};
Button.defaultProps = {
    type: 'secondary',
    disabled: false,
    combo: false,
    list: [],
    iconOnly: false
};
//# sourceMappingURL=Button.js.map

var css$3 = ".Input_ct-wrapper__23MYW {\n  position: relative;\n  display: inline-block;\n  width: 100%; }\n\n.Input_ct-input__2m-aR {\n  border-color: var(--accent-regular);\n  border-width: 1px;\n  padding: 0.5rem;\n  margin: 0.5rem 0 0.5rem 1rem;\n  width: calc(100% - 1rem);\n  box-sizing: border-box;\n  height: 2.5rem; }\n  .Input_ct-input__2m-aR:focus, .Input_ct-input__2m-aR:hover {\n    border-color: var(--highlight-alternate); }\n  .Input_ct-input__container__1xLRI {\n    display: inline-block; }\n  .Input_ct-input--disabled__2OLsS {\n    pointer-events: none;\n    background: var(--accent-regular); }\n  .Input_ct-input--checkbox__16rao {\n    width: 1rem; }\n  .Input_ct-input--search__icon__1C0Gd {\n    position: absolute;\n    right: 1rem;\n    top: 50%;\n    transform: translateY(-50%); }\n  .Input_ct-input__label__1KW0E {\n    margin: 0.5rem 0.5rem 0 1rem;\n    font-weight: var(--weight-normal);\n    font-family: \"Segoe UI\", sans-serif;\n    color: var(--text-dark);\n    text-transform: capitalize; }\n    .Input_ct-input__label__required-indicator__H1QEG {\n      margin-left: -0.7rem;\n      color: var(--priority-highest);\n      font-weight: 800; }\n";
var style$1 = { "ct-wrapper": "Input_ct-wrapper__23MYW", "ct-input": "Input_ct-input__2m-aR", "ct-input__container": "Input_ct-input__container__1xLRI", "ct-input--disabled": "Input_ct-input--disabled__2OLsS", "ct-input--checkbox": "Input_ct-input--checkbox__16rao", "ct-input--search__icon": "Input_ct-input--search__icon__1C0Gd", "ct-input__label": "Input_ct-input__label__1KW0E", "ct-input__label__required-indicator": "Input_ct-input__label__required-indicator__H1QEG" };
styleInject(css$3);

var setClasses$1 = function setClasses(disabled, big, type) {
    var classes = [style$1["ct-input"]];
    if (disabled) {
        var _classes;
        var disabledClasses = [style$1['ct-input--disabled']];
        classes = (_classes = classes).concat.apply(_classes, disabledClasses);
    }
    if (big) {
        var _classes2;
        var bigClasses = [style$1['ct-input--big']];
        classes = (_classes2 = classes).concat.apply(_classes2, bigClasses);
    }
    if (type === "checkbox") {
        var _classes3;
        var checkboxClasses = [style$1['ct-input--checkbox']];
        classes = (_classes3 = classes).concat.apply(_classes3, checkboxClasses);
    }
    return classes.join(" ");
};
var Input = function Input(props) {
    var type = props.type, disabled = props.disabled, change = props.change, label = props.label, required = props.required, big = props.big, value = props.value, suggestions = props.suggestions, suggestionClick = props.suggestionClick, suggestionValue = props.suggestionValue;
    var suggestionLabel = props.suggestionLabel;
    if (suggestionValue && !suggestionLabel) {
        suggestionLabel = suggestionValue;
    }
    var suggestionsId = 'suggestions' + new Date().getTime();
    var classes = setClasses$1(disabled, big, type);
    return React.createElement(aux, null, React.createElement('div', { className: style$1["ct-input__container"] }, label ? React.createElement('p', { className: style$1["ct-input__label"] }, required ? React.createElement('span', { className: style$1["ct-input__label__required-indicator"] }, '* ') : null, label) : null, React.createElement('div', { className: style$1["ct-wrapper"] }, React.createElement('input', { list: suggestionsId, value: value, onChange: change, className: classes, type: type }), type === "search" ? React.createElement('img', { className: style$1["ct-input--search__icon"], src: '', alt: '' }) : null)), React.createElement('datalist', { id: suggestionsId }, suggestions.map(function (e, i) {
        var showElement = void 0;
        showElement = {
            label: suggestionLabel,
            value: suggestionValue
        };
        return React.createElement('option', { value: e['' + showElement.value], key: i }, e['' + showElement.label]);
    })));
};
Input.defaultProps = {
    type: "text",
    disabled: false,
    required: false,
    big: false,
    suggestions: []
};
//# sourceMappingURL=Input.js.map

var css$4 = ".Text_ct-text__1X1uJ {\n  font-weight: var(--weight-normal);\n  font-family: \"Segoe UI\", sans-serif;\n  color: var(--text-dark);\n  margin-left: 1rem;\n  text-transform: none;\n  display: inline-block; }\n  .Text_ct-text--smallest__rHsKV {\n    font-size: var(--text-smallest); }\n  .Text_ct-text--smaller__1T3YS {\n    font-size: var(--text-smaller); }\n  .Text_ct-text--small__1kEpt {\n    font-size: var(--text-small); }\n  .Text_ct-text--normal__35H_j {\n    font-size: var(--text-normal); }\n  .Text_ct-text--big__3ctvw {\n    font-size: var(--text-big); }\n  .Text_ct-text--bigger__B2rsy {\n    font-size: var(--text-bigger); }\n  .Text_ct-text--biggest__1THKj {\n    font-size: var(--text-biggest); }\n  .Text_ct-text--title__1xuNJ {\n    text-transform: capitalize; }\n  .Text_ct-text--heavy__2PVYD {\n    font-weight: var(--weight-high); }\n  .Text_ct-text--priority-medium__2lJf5 {\n    font-weight: var(--weight-high); }\n  .Text_ct-text--priority-high__24OGf {\n    font-weight: var(--weight-high);\n    background: var(--priority-medium); }\n  .Text_ct-text--priority-critical__2G1Dd {\n    font-weight: var(--weight-high);\n    background: var(--priority-highest);\n    color: var(--text-light); }\n\n.Text_ct-link__2G4-N {\n  text-decoration: underline; }\n  .Text_ct-link--internal__1LAQR {\n    color: var(--text-dark); }\n  .Text_ct-link--external__DYCF3 {\n    color: var(--highlight-dark); }\n  .Text_ct-link--selected__1Os86 {\n    color: var(--link-selected); }\n";
var style$2 = { "ct-text": "Text_ct-text__1X1uJ", "ct-text--smallest": "Text_ct-text--smallest__rHsKV", "ct-text--smaller": "Text_ct-text--smaller__1T3YS", "ct-text--small": "Text_ct-text--small__1kEpt", "ct-text--normal": "Text_ct-text--normal__35H_j", "ct-text--big": "Text_ct-text--big__3ctvw", "ct-text--bigger": "Text_ct-text--bigger__B2rsy", "ct-text--biggest": "Text_ct-text--biggest__1THKj", "ct-text--title": "Text_ct-text--title__1xuNJ", "ct-text--heavy": "Text_ct-text--heavy__2PVYD", "ct-text--priority-medium": "Text_ct-text--priority-medium__2lJf5", "ct-text--priority-high": "Text_ct-text--priority-high__24OGf", "ct-text--priority-critical": "Text_ct-text--priority-critical__2G1Dd", "ct-link": "Text_ct-link__2G4-N", "ct-link--internal": "Text_ct-link--internal__1LAQR", "ct-link--external": "Text_ct-link--external__DYCF3", "ct-link--selected": "Text_ct-link--selected__1Os86" };
styleInject(css$4);

var setClasses$2 = function setClasses(size, priority, title, heavy) {
    var classes = [];
    var baseClasses = [style$2["ct-text"], style$2['ct-text--' + size]];
    classes = [].concat(baseClasses);
    if (priority) {
        var _classes;
        var priorityClasses = [style$2['ct-text--priority-' + priority]];
        classes = (_classes = classes).concat.apply(_classes, priorityClasses);
    }
    if (title) {
        var _classes2;
        var titleClasses = [style$2['ct-text--title']];
        classes = (_classes2 = classes).concat.apply(_classes2, titleClasses);
    }
    if (heavy) {
        var _classes3;
        var heavyClasses = [style$2['ct-text--heavy']];
        classes = (_classes3 = classes).concat.apply(_classes3, heavyClasses);
    }
    return classes.join(" ");
};
var Text = function Text(props) {
    var children = props.children, size = props.size, priority = props.priority, title = props.title, heavy = props.heavy;
    var classes = setClasses$2(size, priority, title, heavy);
    return React.createElement('p', { className: classes }, children);
};
Text.defaultProps = {
    size: "normal",
    title: false,
    heavy: false
};
//# sourceMappingURL=Text.js.map

var css$5 = ".Textarea_ct-wrapper__B5Ma9 {\n  position: relative;\n  display: inline-block; }\n\n.Textarea_ct-textarea__eMAtl {\n  border-color: var(--accent-regular);\n  border-width: 1px;\n  padding: 0.5rem;\n  margin: 0.5rem 0.5rem 0.5rem 1rem; }\n  .Textarea_ct-textarea__eMAtl:focus, .Textarea_ct-textarea__eMAtl:hover {\n    border-color: var(--highlight-alternate); }\n  .Textarea_ct-textarea--disabled__14t-h {\n    pointer-events: none;\n    background: var(--accent-regular); }\n  .Textarea_ct-textarea--search__icon__1hJ7Y {\n    position: absolute;\n    right: 1rem;\n    top: 50%;\n    transform: translateY(-50%); }\n  .Textarea_ct-textarea__label__3dyWE {\n    margin: 0.5rem 0.5rem 0 1rem;\n    font-weight: var(--weight-normal);\n    font-family: \"Segoe UI\", sans-serif;\n    color: var(--text-dark);\n    text-transform: capitalize; }\n    .Textarea_ct-textarea__label__required-indicator__1mcmX {\n      margin-left: -0.7rem;\n      color: var(--priority-highest);\n      font-weight: 800; }\n";
var style$3 = { "ct-wrapper": "Textarea_ct-wrapper__B5Ma9", "ct-textarea": "Textarea_ct-textarea__eMAtl", "ct-textarea--disabled": "Textarea_ct-textarea--disabled__14t-h", "ct-textarea--search__icon": "Textarea_ct-textarea--search__icon__1hJ7Y", "ct-textarea__label": "Textarea_ct-textarea__label__3dyWE", "ct-textarea__label__required-indicator": "Textarea_ct-textarea__label__required-indicator__1mcmX" };
styleInject(css$5);

var setClasses$3 = function setClasses(disabled) {
    var classes = [style$3["ct-textarea"]];
    if (disabled) {
        var _classes;
        var disabledClasses = [style$3['ct-textarea--disabled']];
        classes = (_classes = classes).concat.apply(_classes, disabledClasses);
    }
    return classes.join(" ");
};
var Textarea = function Textarea(props) {
    var disabled = props.disabled, change = props.change, required = props.required, label = props.label, rows = props.rows;
    var classes = setClasses$3(disabled);
    return React.createElement(aux, null, label ? React.createElement('p', { className: style$3["ct-textarea__label"] }, required ? React.createElement('span', { className: style$3["ct-textarea__label__required-indicator"] }, '* ') : null, label) : null, React.createElement('textarea', { className: classes, onChange: change, cols: '30', rows: rows }));
};
Textarea.defaultProps = {
    disabled: false,
    required: false,
    rows: 5
};
//# sourceMappingURL=Textarea.js.map

var css$6 = ".Dropdown_ct-wrapper__zfTHv {\n  position: relative;\n  display: inline-block;\n  width: 100%; }\n\n.Dropdown_ct-dropdown__1f_1L {\n  border-color: var(--accent-regular);\n  border-width: 1px;\n  margin: 0.5rem 0 0.5rem 1rem;\n  min-width: 7rem;\n  width: calc(100% - 1rem);\n  box-sizing: border-box;\n  height: 2.5rem; }\n  .Dropdown_ct-dropdown__1f_1L:focus, .Dropdown_ct-dropdown__1f_1L:hover {\n    border-color: var(--highlight-alternate); }\n  .Dropdown_ct-dropdown__container__3o744 {\n    display: inline-block; }\n  .Dropdown_ct-dropdown--disabled__tpjix {\n    pointer-events: none;\n    background: var(--accent-regular); }\n  .Dropdown_ct-dropdown--search__icon__1t-de {\n    position: absolute;\n    right: 1rem;\n    top: 50%;\n    transform: translateY(-50%); }\n  .Dropdown_ct-dropdown__label__1eQ_a {\n    margin: 0.5rem 0.5rem 0 1rem;\n    font-weight: var(--weight-normal);\n    font-family: \"Segoe UI\", sans-serif;\n    color: var(--text-dark);\n    text-transform: capitalize; }\n    .Dropdown_ct-dropdown__label__required-indicator__KOGNv {\n      margin-left: -0.7rem;\n      color: var(--priority-highest);\n      font-weight: 800; }\n";
var style$4 = { "ct-wrapper": "Dropdown_ct-wrapper__zfTHv", "ct-dropdown": "Dropdown_ct-dropdown__1f_1L", "ct-dropdown__container": "Dropdown_ct-dropdown__container__3o744", "ct-dropdown--disabled": "Dropdown_ct-dropdown--disabled__tpjix", "ct-dropdown--search__icon": "Dropdown_ct-dropdown--search__icon__1t-de", "ct-dropdown__label": "Dropdown_ct-dropdown__label__1eQ_a", "ct-dropdown__label__required-indicator": "Dropdown_ct-dropdown__label__required-indicator__KOGNv" };
styleInject(css$6);

var setClasses$4 = function setClasses(disabled) {
    var classes = [style$4["ct-dropdown"]];
    if (disabled) {
        var _classes;
        var disabledClasses = [style$4['ct-dropdown--disabled']];
        classes = (_classes = classes).concat.apply(_classes, disabledClasses);
    }
    return classes.join(" ");
};
var Dropdown = function Dropdown(props) {
    var label = props.label, required = props.required, disabled = props.disabled, change = props.change, options = props.options;
    var classes = setClasses$4(disabled);
    return React.createElement('div', { className: style$4["ct-dropdown__container"] }, label ? React.createElement('p', { className: style$4["ct-dropdown__label"] }, required ? React.createElement('span', { className: style$4["ct-dropdown__label__required-indicator"] }, '* ') : null, label) : null, React.createElement('select', { className: classes, onChange: change }, options.map(function (e) {
        if ((typeof e === 'undefined' ? 'undefined' : _typeof(e)) !== "object") {
            e = {
                label: e,
                value: e
            };
        }
        return React.createElement('option', { value: e.value }, e.label);
    })));
};
Dropdown.defaultProps = {
    disabled: false,
    required: false,
    options: []
};
//# sourceMappingURL=Dropdown.js.map

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var renderErr = 'Renderer Error';
var actions = {
  init: 'init'
};
var defaultColumn = {
  Cell: function Cell(_ref) {
    var _ref$cell$value = _ref.cell.value,
        value = _ref$cell$value === void 0 ? '' : _ref$cell$value;
    return value;
  },
  width: 150,
  minWidth: 0,
  maxWidth: Number.MAX_SAFE_INTEGER
};
function defaultOrderByFn(arr, funcs, dirs) {
  return [].concat(arr).sort(function (rowA, rowB) {
    for (var i = 0; i < funcs.length; i += 1) {
      var sortFn = funcs[i];
      var desc = dirs[i] === false || dirs[i] === 'desc';
      var sortInt = sortFn(rowA, rowB);

      if (sortInt !== 0) {
        return desc ? -sortInt : sortInt;
      }
    }

    return dirs[0] ? rowA.index - rowB.index : rowB.index - rowA.index;
  });
}

function mergeProps() {
  for (var _len = arguments.length, propList = new Array(_len), _key = 0; _key < _len; _key++) {
    propList[_key] = arguments[_key];
  }

  return propList.reduce(function (props, next) {
    var style = next.style,
        className = next.className,
        rest = _objectWithoutPropertiesLoose(next, ["style", "className"]);

    props = _extends$1({}, props, {}, rest);

    if (style) {
      props.style = props.style ? _extends$1({}, props.style || {}, {}, style || {}) : style;
    }

    if (className) {
      props.className = props.className ? props.className + ' ' + className : className;
    }

    if (props.className === '') {
      delete props.className;
    }

    return props;
  }, {});
}

function handlePropGetter(prevProps, userProps, meta) {
  // Handle a lambda, pass it the previous props
  if (typeof userProps === 'function') {
    return handlePropGetter({}, userProps(prevProps, meta));
  } // Handle an array, merge each item as separate props


  if (Array.isArray(userProps)) {
    return mergeProps.apply(void 0, [prevProps].concat(userProps));
  } // Handle an object by default, merge the two objects


  return mergeProps(prevProps, userProps);
}

var makePropGetter = function makePropGetter(hooks, meta) {
  if (meta === void 0) {
    meta = {};
  }

  return function (userProps) {
    if (userProps === void 0) {
      userProps = {};
    }

    return [].concat(hooks, [userProps]).reduce(function (prev, next) {
      return handlePropGetter(prev, next, _extends$1({}, meta, {
        userProps: userProps
      }));
    }, {});
  };
};
var reduceHooks = function reduceHooks(hooks, initial, meta) {
  if (meta === void 0) {
    meta = {};
  }

  return hooks.reduce(function (prev, next) {
    var nextValue = next(prev, meta);

    if (process.env.NODE_ENV !== 'production') {
      if (typeof nextValue === 'undefined') {
        console.info(next);
        throw new Error('React Table: A reducer hook ☝️ just returned undefined! This is not allowed.');
      }
    }

    return nextValue;
  }, initial);
};
var loopHooks = function loopHooks(hooks, meta) {
  if (meta === void 0) {
    meta = {};
  }

  return hooks.forEach(function (hook) {
    var nextValue = hook(meta);

    if (process.env.NODE_ENV !== 'production') {
      if (typeof nextValue !== 'undefined') {
        console.info(hook, nextValue);
        throw new Error('React Table: A loop-type hook ☝️ just returned a value! This is not allowed.');
      }
    }
  });
};
function ensurePluginOrder(plugins, befores, pluginName, afters) {
  var pluginIndex = plugins.findIndex(function (plugin) {
    return plugin.pluginName === pluginName;
  });

  if (pluginIndex === -1) {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error("The plugin \"" + pluginName + "\" was not found in the plugin list!\nThis usually means you need to need to name your plugin hook by setting the 'pluginName' property of the hook function, eg:\n\n  " + pluginName + ".pluginName = '" + pluginName + "'\n");
    }
  }

  befores.forEach(function (before) {
    var beforeIndex = plugins.findIndex(function (plugin) {
      return plugin.pluginName === before;
    });

    if (beforeIndex > -1 && beforeIndex > pluginIndex) {
      if (process.env.NODE_ENV !== 'production') {
        throw new Error("React Table: The " + pluginName + " plugin hook must be placed after the " + before + " plugin hook!");
      }
    }
  });
  afters.forEach(function (after) {
    var afterIndex = plugins.findIndex(function (plugin) {
      return plugin.pluginName === after;
    });

    if (process.env.NODE_ENV !== 'production') {
      if (afterIndex > -1 && afterIndex < pluginIndex) {
        throw new Error("React Table: The " + pluginName + " plugin hook must be placed before the " + after + " plugin hook!");
      }
    }
  });
}
function functionalUpdate(updater, old) {
  return typeof updater === 'function' ? updater(old) : updater;
}
function useGetLatest(obj) {
  var ref = React__default.useRef();
  ref.current = obj;
  return React__default.useCallback(function () {
    return ref.current;
  }, []);
} // SSR has issues with useLayoutEffect still, so use useEffect during SSR

var safeUseLayoutEffect = typeof document !== 'undefined' ? React__default.useLayoutEffect : React__default.useEffect;
function useMountedLayoutEffect(fn, deps) {
  var mountedRef = React__default.useRef(false);
  safeUseLayoutEffect(function () {
    if (mountedRef.current) {
      fn();
    }

    mountedRef.current = true; // eslint-disable-next-line
  }, deps);
}
function useConsumeHookGetter(hooks, hookName) {
  var getter = useGetLatest(hooks[hookName]);
  hooks[hookName] = undefined;
  return getter;
}
function makeRenderer(instance, column, meta) {
  if (meta === void 0) {
    meta = {};
  }

  return function (type, userProps) {
    if (userProps === void 0) {
      userProps = {};
    }

    var Comp = typeof type === 'string' ? column[type] : type;

    if (typeof Comp === 'undefined') {
      throw new Error(renderErr);
    }

    return flexRender(Comp, _extends$1({}, instance, {
      column: column
    }, meta, {}, userProps));
  };
}
function flexRender(Comp, props) {
  return isReactComponent(Comp) ? React__default.createElement(Comp, props) : Comp;
}

function isClassComponent(component) {
  return typeof component === 'function' && !!function () {
    var proto = Object.getPrototypeOf(component);
    return proto.prototype && proto.prototype.isReactComponent;
  }();
}

function isFunctionComponent(component) {
  return typeof component === 'function';
}

function isExoticComponent(component) {
  return typeof component === 'object' && typeof component.$$typeof === 'symbol' && ['react.memo', 'react.forward_ref'].includes(component.$$typeof.description);
}

function isReactComponent(component) {
  return isClassComponent(component) || isFunctionComponent(component) || isExoticComponent(component);
}

function decorateColumn(column, userDefaultColumn, parent, depth, index) {
  // Apply the userDefaultColumn
  column = _extends$1({}, defaultColumn, {}, userDefaultColumn, {}, column); // First check for string accessor

  var _column = column,
      id = _column.id,
      accessor = _column.accessor,
      Header = _column.Header;

  if (typeof accessor === 'string') {
    id = id || accessor;
    var accessorPath = accessor.split('.');

    accessor = function accessor(row) {
      return getBy(row, accessorPath);
    };
  }

  if (!id && typeof Header === 'string' && Header) {
    id = Header;
  }

  if (!id && column.columns) {
    console.error(column);
    throw new Error('A column ID (or unique "Header" value) is required!');
  }

  if (!id) {
    console.error(column);
    throw new Error('A column ID (or string accessor) is required!');
  }

  column = _extends$1({
    // Make sure there is a fallback header, just in case
    Header: function Header() {
      return React__default.createElement(React__default.Fragment, null, "\xA0");
    },
    Footer: function Footer() {
      return React__default.createElement(React__default.Fragment, null, "\xA0");
    }
  }, column, {
    // Materialize and override this stuff
    id: id,
    accessor: accessor,
    parent: parent,
    depth: depth,
    index: index
  });
  return column;
} // Build the visible columns, headers and flat column list


function decorateColumnTree(columns, defaultColumn, parent, depth) {
  if (depth === void 0) {
    depth = 0;
  }

  return columns.map(function (column, columnIndex) {
    column = decorateColumn(column, defaultColumn, parent, depth, columnIndex);

    if (column.columns) {
      column.columns = decorateColumnTree(column.columns, defaultColumn, column, depth + 1);
    }

    return column;
  });
} // Build the header groups from the bottom up

function makeHeaderGroups(flatColumns, defaultColumn) {
  var headerGroups = []; // Build each header group from the bottom up

  var buildGroup = function buildGroup(columns, depth) {
    var headerGroup = {
      headers: []
    };
    var parentColumns = []; // Do any of these columns have parents?

    var hasParents = columns.some(function (col) {
      return col.parent;
    });
    columns.forEach(function (column) {
      // Are we the first column in this group?
      var isFirst = !parentColumns.length; // What is the latest (last) parent column?

      var latestParentColumn = [].concat(parentColumns).reverse()[0]; // If the column has a parent, add it if necessary

      if (column.parent) {
        var similarParentColumns = parentColumns.filter(function (d) {
          return d.originalId === column.parent.id;
        });

        if (isFirst || latestParentColumn.originalId !== column.parent.id) {
          parentColumns.push(_extends$1({}, column.parent, {
            originalId: column.parent.id,
            id: [column.parent.id, similarParentColumns.length].join('_')
          }));
        }
      } else if (hasParents) {
        // If other columns have parents, we'll need to add a place holder if necessary
        var originalId = [column.id, 'placeholder'].join('_');

        var _similarParentColumns = parentColumns.filter(function (d) {
          return d.originalId === originalId;
        });

        var placeholderColumn = decorateColumn({
          originalId: originalId,
          id: [column.id, 'placeholder', _similarParentColumns.length].join('_'),
          placeholderOf: column
        }, defaultColumn);

        if (isFirst || latestParentColumn.originalId !== placeholderColumn.originalId) {
          parentColumns.push(placeholderColumn);
        }
      } // Establish the new headers[] relationship on the parent


      if (column.parent || hasParents) {
        latestParentColumn = [].concat(parentColumns).reverse()[0];
        latestParentColumn.headers = latestParentColumn.headers || [];

        if (!latestParentColumn.headers.includes(column)) {
          latestParentColumn.headers.push(column);
        }
      }

      column.totalHeaderCount = column.headers ? column.headers.reduce(function (sum, header) {
        return sum + header.totalHeaderCount;
      }, 0) : 1; // Leaf node columns take up at least one count

      headerGroup.headers.push(column);
    });
    headerGroups.push(headerGroup);

    if (parentColumns.length) {
      buildGroup(parentColumns);
    }
  };

  buildGroup(flatColumns);
  return headerGroups.reverse();
}
var pathObjCache = new Map();
function getBy(obj, path, def) {
  if (!path) {
    return obj;
  }

  var cacheKey = typeof path === 'function' ? path : JSON.stringify(path);

  var pathObj = pathObjCache.get(cacheKey) || function () {
    var pathObj = makePathArray(path);
    pathObjCache.set(cacheKey, pathObj);
    return pathObj;
  }();

  var val;

  try {
    val = pathObj.reduce(function (cursor, pathPart) {
      return cursor[pathPart];
    }, obj);
  } catch (e) {// continue regardless of error
  }

  return typeof val !== 'undefined' ? val : def;
}
function getFirstDefined() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  for (var i = 0; i < args.length; i += 1) {
    if (typeof args[i] !== 'undefined') {
      return args[i];
    }
  }
}
function isFunction(a) {
  if (typeof a === 'function') {
    return a;
  }
}
function flattenBy(columns, childKey) {
  var flatColumns = [];

  var recurse = function recurse(columns) {
    columns.forEach(function (d) {
      if (!d[childKey]) {
        flatColumns.push(d);
      } else {
        recurse(d[childKey]);
      }
    });
  };

  recurse(columns);
  return flatColumns;
}

var reOpenBracket = /\[/g;
var reCloseBracket = /\]/g;

function makePathArray(obj) {
  return flattenDeep(obj) // remove all periods in parts
  .map(function (d) {
    return String(d).replace('.', '_');
  }) // join parts using period
  .join('.') // replace brackets with periods
  .replace(reOpenBracket, '.').replace(reCloseBracket, '') // split it back out on periods
  .split('.');
}

function flattenDeep(arr, newArr) {
  if (newArr === void 0) {
    newArr = [];
  }

  if (!Array.isArray(arr)) {
    newArr.push(arr);
  } else {
    for (var i = 0; i < arr.length; i += 1) {
      flattenDeep(arr[i], newArr);
    }
  }

  return newArr;
}

var defaultCells = function defaultCells(cell) {
  return cell.filter(function (d) {
    return d.column.isVisible;
  });
};

var defaultGetHeaderProps = function defaultGetHeaderProps(props, _ref) {
  var column = _ref.column;
  return _extends$1({
    key: "header_" + column.id,
    colSpan: column.totalVisibleHeaderCount
  }, props);
};

var defaultGetFooterProps = function defaultGetFooterProps(props, _ref2) {
  var column = _ref2.column;
  return _extends$1({
    key: "footer_" + column.id,
    colSpan: column.totalVisibleHeaderCount
  }, props);
};

var defaultGetHeaderGroupProps = function defaultGetHeaderGroupProps(props, _ref3) {
  var index = _ref3.index;
  return _extends$1({
    key: "headerGroup_" + index
  }, props);
};

var defaultGetFooterGroupProps = function defaultGetFooterGroupProps(props, _ref4) {
  var index = _ref4.index;
  return _extends$1({
    key: "footerGroup_" + index
  }, props);
};

var defaultGetRowProps = function defaultGetRowProps(props, _ref5) {
  var row = _ref5.row;
  return _extends$1({
    key: "row_" + row.id
  }, props);
};

var defaultGetCellProps = function defaultGetCellProps(props, _ref6) {
  var cell = _ref6.cell;
  return _extends$1({}, props, {
    key: "cell_" + cell.row.id + "_" + cell.column.id
  });
};

function makeDefaultPluginHooks() {
  return {
    useOptions: [],
    stateReducers: [],
    useControlledState: [],
    columns: [],
    columnsDeps: [],
    flatColumns: [],
    flatColumnsDeps: [],
    headerGroups: [],
    headerGroupsDeps: [],
    useInstanceBeforeDimensions: [],
    useInstance: [],
    useRows: [],
    cells: [defaultCells],
    prepareRow: [],
    getTableProps: [],
    getTableBodyProps: [],
    getHeaderGroupProps: [defaultGetHeaderGroupProps],
    getFooterGroupProps: [defaultGetFooterGroupProps],
    getHeaderProps: [defaultGetHeaderProps],
    getFooterProps: [defaultGetFooterProps],
    getRowProps: [defaultGetRowProps],
    getCellProps: [defaultGetCellProps],
    useFinalInstance: []
  };
}

actions.resetHiddenColumns = 'resetHiddenColumns';
actions.toggleHideColumn = 'toggleHideColumn';
actions.setHiddenColumns = 'setHiddenColumns';
actions.toggleHideAllColumns = 'toggleHideAllColumns';
var useColumnVisibility = function useColumnVisibility(hooks) {
  hooks.getToggleHiddenProps = [defaultGetToggleHiddenProps];
  hooks.getToggleHideAllColumnsProps = [defaultGetToggleHideAllColumnsProps];
  hooks.stateReducers.push(reducer);
  hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions);
  hooks.headerGroupsDeps.push(function (deps, _ref) {
    var instance = _ref.instance;
    return [].concat(deps, [instance.state.hiddenColumns]);
  });
  hooks.useInstance.push(useInstance);
};
useColumnVisibility.pluginName = 'useColumnVisibility';

var defaultGetToggleHiddenProps = function defaultGetToggleHiddenProps(props, _ref2) {
  var column = _ref2.column;
  return [props, {
    onChange: function onChange(e) {
      column.toggleHidden(!e.target.checked);
    },
    style: {
      cursor: 'pointer'
    },
    checked: column.isVisible,
    title: 'Toggle Column Visible'
  }];
};

var defaultGetToggleHideAllColumnsProps = function defaultGetToggleHideAllColumnsProps(props, _ref3) {
  var instance = _ref3.instance;
  return [props, {
    onChange: function onChange(e) {
      instance.toggleHideAllColumns(!e.target.checked);
    },
    style: {
      cursor: 'pointer'
    },
    checked: !instance.allColumnsHidden && !instance.state.hiddenColumns.length,
    title: 'Toggle All Columns Hidden',
    indeterminate: !instance.allColumnsHidden && instance.state.hiddenColumns.length
  }];
};

function reducer(state, action, previousState, instance) {
  if (action.type === actions.init) {
    return _extends$1({
      hiddenColumns: []
    }, state);
  }

  if (action.type === actions.resetHiddenColumns) {
    return _extends$1({}, state, {
      hiddenColumns: instance.initialState.hiddenColumns || []
    });
  }

  if (action.type === actions.toggleHideColumn) {
    var should = typeof action.value !== 'undefined' ? action.value : !state.hiddenColumns.includes(action.columnId);
    var hiddenColumns = should ? [].concat(state.hiddenColumns, [action.columnId]) : state.hiddenColumns.filter(function (d) {
      return d !== action.columnId;
    });
    return _extends$1({}, state, {
      hiddenColumns: hiddenColumns
    });
  }

  if (action.type === actions.setHiddenColumns) {
    return _extends$1({}, state, {
      hiddenColumns: functionalUpdate(action.value, state.hiddenColumns)
    });
  }

  if (action.type === actions.toggleHideAllColumns) {
    var shouldAll = typeof action.value !== 'undefined' ? action.value : !state.hiddenColumns.length;
    return _extends$1({}, state, {
      hiddenColumns: shouldAll ? instance.flatColumns.map(function (d) {
        return d.id;
      }) : []
    });
  }
}

function useInstanceBeforeDimensions(instance) {
  var headers = instance.headers,
      hiddenColumns = instance.state.hiddenColumns;
  var isMountedRef = React__default.useRef(false);

  if (!isMountedRef.current) ;

  var handleColumn = function handleColumn(column, parentVisible) {
    column.isVisible = parentVisible && !hiddenColumns.includes(column.id);
    var totalVisibleHeaderCount = 0;

    if (column.headers && column.headers.length) {
      column.headers.forEach(function (subColumn) {
        return totalVisibleHeaderCount += handleColumn(subColumn, column.isVisible);
      });
    } else {
      totalVisibleHeaderCount = column.isVisible ? 1 : 0;
    }

    column.totalVisibleHeaderCount = totalVisibleHeaderCount;
    return totalVisibleHeaderCount;
  };

  var totalVisibleHeaderCount = 0;
  headers.forEach(function (subHeader) {
    return totalVisibleHeaderCount += handleColumn(subHeader, true);
  });
}

function useInstance(instance) {
  var flatHeaders = instance.flatHeaders,
      dispatch = instance.dispatch,
      flatColumns = instance.flatColumns,
      hiddenColumns = instance.state.hiddenColumns;
  var getInstance = useGetLatest(instance);
  var allColumnsHidden = flatColumns.length === hiddenColumns.length;
  var toggleHideColumn = React__default.useCallback(function (columnId, value) {
    return dispatch({
      type: actions.toggleHideColumn,
      columnId: columnId,
      value: value
    });
  }, [dispatch]);
  var setHiddenColumns = React__default.useCallback(function (value) {
    return dispatch({
      type: actions.setHiddenColumns,
      value: value
    });
  }, [dispatch]);
  var toggleHideAllColumns = React__default.useCallback(function (value) {
    return dispatch({
      type: actions.toggleHideAllColumns,
      value: value
    });
  }, [dispatch]); // Snapshot hook and disallow more from being added

  var getToggleHideAllColumnsPropsHooks = useConsumeHookGetter(getInstance().hooks, 'getToggleHideAllColumnsProps');
  var getToggleHideAllColumnsProps = makePropGetter(getToggleHideAllColumnsPropsHooks(), {
    instance: getInstance()
  }); // Snapshot hook and disallow more from being added

  var getToggleHiddenPropsHooks = useConsumeHookGetter(getInstance().hooks, 'getToggleHiddenProps');
  flatHeaders.forEach(function (column) {
    column.toggleHidden = function (value) {
      dispatch({
        type: actions.toggleHideColumn,
        columnId: column.id,
        value: value
      });
    };

    column.getToggleHiddenProps = makePropGetter(getToggleHiddenPropsHooks(), {
      instance: getInstance(),
      column: column
    });
  });
  Object.assign(instance, {
    allColumnsHidden: allColumnsHidden,
    toggleHideColumn: toggleHideColumn,
    setHiddenColumns: setHiddenColumns,
    toggleHideAllColumns: toggleHideAllColumns,
    getToggleHideAllColumnsProps: getToggleHideAllColumnsProps
  });
}

var defaultInitialState = {};
var defaultColumnInstance = {};

var defaultReducer = function defaultReducer(state, action, prevState) {
  return state;
};

var defaultGetSubRows = function defaultGetSubRows(row, index) {
  return row.subRows || [];
};

var defaultGetRowId = function defaultGetRowId(row, index, parent) {
  return "" + (parent ? [parent.id, index].join('.') : index);
};

var defaultUseControlledState = function defaultUseControlledState(d) {
  return d;
};

function applyDefaults(props) {
  var _props$initialState = props.initialState,
      initialState = _props$initialState === void 0 ? defaultInitialState : _props$initialState,
      _props$defaultColumn = props.defaultColumn,
      defaultColumn = _props$defaultColumn === void 0 ? defaultColumnInstance : _props$defaultColumn,
      _props$getSubRows = props.getSubRows,
      getSubRows = _props$getSubRows === void 0 ? defaultGetSubRows : _props$getSubRows,
      _props$getRowId = props.getRowId,
      getRowId = _props$getRowId === void 0 ? defaultGetRowId : _props$getRowId,
      _props$stateReducer = props.stateReducer,
      stateReducer = _props$stateReducer === void 0 ? defaultReducer : _props$stateReducer,
      _props$useControlledS = props.useControlledState,
      useControlledState = _props$useControlledS === void 0 ? defaultUseControlledState : _props$useControlledS,
      rest = _objectWithoutPropertiesLoose(props, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]);

  return _extends$1({}, rest, {
    initialState: initialState,
    defaultColumn: defaultColumn,
    getSubRows: getSubRows,
    getRowId: getRowId,
    stateReducer: stateReducer,
    useControlledState: useControlledState
  });
}

var useTable = function useTable(props) {
  for (var _len = arguments.length, plugins = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    plugins[_key - 1] = arguments[_key];
  }

  // Apply default props
  props = applyDefaults(props); // Add core plugins

  plugins = [useColumnVisibility].concat(plugins); // Create the table instance

  var instanceRef = React__default.useRef({}); // Create a getter for the instance (helps avoid a lot of potential memory leaks)

  var getInstance = useGetLatest(instanceRef.current); // Assign the props, plugins and hooks to the instance

  Object.assign(getInstance(), _extends$1({}, props, {
    plugins: plugins,
    hooks: makeDefaultPluginHooks()
  })); // Allow plugins to register hooks as early as possible

  plugins.filter(Boolean).forEach(function (plugin) {
    plugin(getInstance().hooks);
  });
  var getUseOptionsHooks = useConsumeHookGetter(getInstance().hooks, 'useOptions'); // Allow useOptions hooks to modify the options coming into the table

  Object.assign(getInstance(), reduceHooks(getUseOptionsHooks(), applyDefaults(props)));

  var _getInstance = getInstance(),
      data = _getInstance.data,
      userColumns = _getInstance.columns,
      initialState = _getInstance.initialState,
      defaultColumn = _getInstance.defaultColumn,
      getSubRows = _getInstance.getSubRows,
      getRowId = _getInstance.getRowId,
      stateReducer = _getInstance.stateReducer,
      useControlledState = _getInstance.useControlledState; // Snapshot hook and disallow more from being added


  var getStateReducers = useConsumeHookGetter(getInstance().hooks, 'stateReducers'); // Setup user reducer ref

  var getStateReducer = useGetLatest(stateReducer); // Build the reducer

  var reducer = React__default.useCallback(function (state, action) {
    // Detect invalid actions
    if (!action.type) {
      console.info({
        action: action
      });
      throw new Error('Unknown Action 👆');
    } // Reduce the state from all plugin reducers


    return [].concat(getStateReducers(), Array.isArray(getStateReducer()) ? getStateReducer() : [getStateReducer()]).reduce(function (s, handler) {
      return handler(s, action, state, getInstance()) || s;
    }, state);
  }, [getStateReducers, getStateReducer, getInstance]); // Start the reducer

  var _React$useReducer = React__default.useReducer(reducer, undefined, function () {
    return reducer(initialState, {
      type: actions.init
    });
  }),
      reducerState = _React$useReducer[0],
      dispatch = _React$useReducer[1]; // Snapshot hook and disallow more from being added


  var getUseControlledStateHooks = useConsumeHookGetter(getInstance().hooks, 'useControlledState'); // Allow the user to control the final state with hooks

  var state = reduceHooks([].concat(getUseControlledStateHooks(), [useControlledState]), reducerState, {
    instance: getInstance()
  });
  Object.assign(getInstance(), {
    state: state,
    dispatch: dispatch
  }); // Snapshot hook and disallow more from being added

  var getColumnsHooks = useConsumeHookGetter(getInstance().hooks, 'columns'); // Snapshot hook and disallow more from being added

  var getColumnsDepsHooks = useConsumeHookGetter(getInstance().hooks, 'columnsDeps'); // Decorate All the columns

  var columns = React__default.useMemo(function () {
    return decorateColumnTree(reduceHooks(getColumnsHooks(), userColumns, {
      instance: getInstance()
    }), defaultColumn);
  }, [defaultColumn, getColumnsHooks, getInstance, userColumns].concat(reduceHooks(getColumnsDepsHooks(), [], {
    instance: getInstance()
  })));
  getInstance().columns = columns; // Get the flat list of all columns and allow hooks to decorate
  // those columns (and trigger this memoization via deps)

  var flatColumns = React__default.useMemo(function () {
    return flattenBy(columns, 'columns');
  }, [columns]);
  getInstance().flatColumns = flatColumns; // Access the row model

  var _React$useMemo = React__default.useMemo(function () {
    var flatRows = []; // Access the row's data

    var accessRow = function accessRow(originalRow, i, depth, parent) {
      if (depth === void 0) {
        depth = 0;
      }

      // Keep the original reference around
      var original = originalRow;
      var id = getRowId(originalRow, i, parent);
      var row = {
        id: id,
        original: original,
        index: i,
        depth: depth,
        cells: [{}] // This is a dummy cell

      };
      flatRows.push(row); // Process any subRows

      var subRows = getSubRows(originalRow, i);

      if (subRows) {
        row.subRows = subRows.map(function (d, i) {
          return accessRow(d, i, depth + 1, row);
        });
      } // Override common array functions (and the dummy cell's getCellProps function)
      // to show an error if it is accessed without calling prepareRow


      var unpreparedAccessWarning = function unpreparedAccessWarning() {
        throw new Error('React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.');
      };

      row.cells.map = unpreparedAccessWarning;
      row.cells.filter = unpreparedAccessWarning;
      row.cells.forEach = unpreparedAccessWarning;
      row.cells[0].getCellProps = unpreparedAccessWarning; // Create the cells and values

      row.values = {};
      flatColumns.forEach(function (_ref) {
        var id = _ref.id,
            accessor = _ref.accessor;
        row.values[id] = accessor ? accessor(originalRow, i, {
          subRows: subRows,
          depth: depth,
          data: data
        }) : undefined;
      });
      return row;
    }; // Use the resolved data


    var accessedData = data.map(function (d, i) {
      return accessRow(d, i);
    });
    return [accessedData, flatRows];
  }, [data, flatColumns, getRowId, getSubRows]),
      rows = _React$useMemo[0],
      flatRows = _React$useMemo[1];

  getInstance().rows = rows;
  getInstance().flatRows = flatRows; // Snapshot hook and disallow more from being added

  var flatColumnsHooks = useConsumeHookGetter(getInstance().hooks, 'flatColumns'); // Snapshot hook and disallow more from being added

  var flatColumnsDepsHooks = useConsumeHookGetter(getInstance().hooks, 'flatColumnsDeps'); // Get the flat list of all columns AFTER the rows
  // have been access, and allow hooks to decorate
  // those columns (and trigger this memoization via deps)

  flatColumns = React__default.useMemo(function () {
    return reduceHooks(flatColumnsHooks(), flatColumns, {
      instance: getInstance()
    });
  }, [flatColumns, flatColumnsHooks, getInstance].concat(reduceHooks(flatColumnsDepsHooks(), [], {
    instance: getInstance()
  })));
  getInstance().flatColumns = flatColumns; // Snapshot hook and disallow more from being added

  var getHeaderGroups = useConsumeHookGetter(getInstance().hooks, 'headerGroups'); // Snapshot hook and disallow more from being added

  var getHeaderGroupsDeps = useConsumeHookGetter(getInstance().hooks, 'headerGroupsDeps'); // Make the headerGroups

  var headerGroups = React__default.useMemo(function () {
    return reduceHooks(getHeaderGroups(), makeHeaderGroups(flatColumns, defaultColumn), getInstance());
  }, [defaultColumn, flatColumns, getHeaderGroups, getInstance].concat(reduceHooks(getHeaderGroupsDeps(), [], {
    instance: getInstance()
  })));
  getInstance().headerGroups = headerGroups;
  var headers = React__default.useMemo(function () {
    return headerGroups.length ? headerGroups[0].headers : [];
  }, [headerGroups]);
  getInstance().headers = headers; // Provide a flat header list for utilities

  getInstance().flatHeaders = headerGroups.reduce(function (all, headerGroup) {
    return [].concat(all, headerGroup.headers);
  }, []); // Snapshot hook and disallow more from being added

  var getUseInstanceBeforeDimensions = useConsumeHookGetter(getInstance().hooks, 'useInstanceBeforeDimensions');
  loopHooks(getUseInstanceBeforeDimensions(), getInstance()); // Header Visibility is needed by this point

  var _calculateHeaderWidth = calculateHeaderWidths(headers),
      totalColumnsMinWidth = _calculateHeaderWidth[0],
      totalColumnsWidth = _calculateHeaderWidth[1],
      totalColumnsMaxWidth = _calculateHeaderWidth[2];

  getInstance().totalColumnsMinWidth = totalColumnsMinWidth;
  getInstance().totalColumnsWidth = totalColumnsWidth;
  getInstance().totalColumnsMaxWidth = totalColumnsMaxWidth; // Snapshot hook and disallow more from being added

  var getUseInstance = useConsumeHookGetter(getInstance().hooks, 'useInstance');
  loopHooks(getUseInstance(), getInstance()); // Snapshot hook and disallow more from being added

  var getHeaderPropsHooks = useConsumeHookGetter(getInstance().hooks, 'getHeaderProps'); // Snapshot hook and disallow more from being added

  var getFooterPropsHooks = useConsumeHookGetter(getInstance().hooks, 'getFooterProps') // Each materialized header needs to be assigned a render function and other
  // prop getter properties here.
  ;
  [].concat(getInstance().flatHeaders, getInstance().flatColumns).forEach(function (column) {
    // Give columns/headers rendering power
    column.render = makeRenderer(getInstance(), column); // Give columns/headers a default getHeaderProps

    column.getHeaderProps = makePropGetter(getHeaderPropsHooks(), {
      instance: getInstance(),
      column: column
    }); // Give columns/headers a default getFooterProps

    column.getFooterProps = makePropGetter(getFooterPropsHooks(), {
      instance: getInstance(),
      column: column
    });
  }); // Snapshot hook and disallow more from being added

  var getHeaderGroupPropsHooks = useConsumeHookGetter(getInstance().hooks, 'getHeaderGroupProps'); // Snapshot hook and disallow more from being added

  var getFooterGroupPropsHooks = useConsumeHookGetter(getInstance().hooks, 'getFooterGroupProps');
  getInstance().headerGroups = getInstance().headerGroups.filter(function (headerGroup, i) {
    // Filter out any headers and headerGroups that don't have visible columns
    headerGroup.headers = headerGroup.headers.filter(function (column) {
      var recurse = function recurse(headers) {
        return headers.filter(function (column) {
          if (column.headers) {
            return recurse(column.headers);
          }

          return column.isVisible;
        }).length;
      };

      if (column.headers) {
        return recurse(column.headers);
      }

      return column.isVisible;
    }); // Give headerGroups getRowProps

    if (headerGroup.headers.length) {
      headerGroup.getHeaderGroupProps = makePropGetter(getHeaderGroupPropsHooks(), {
        instance: getInstance(),
        headerGroup: headerGroup,
        index: i
      });
      headerGroup.getFooterGroupProps = makePropGetter(getFooterGroupPropsHooks(), {
        instance: getInstance(),
        headerGroup: headerGroup,
        index: i
      });
      return true;
    }

    return false;
  });
  getInstance().footerGroups = [].concat(getInstance().headerGroups).reverse(); // Run the rows (this could be a dangerous hook with a ton of data)
  // Snapshot hook and disallow more from being added

  var getUseRowsHooks = useConsumeHookGetter(getInstance().hooks, 'useRows');
  getInstance().rows = reduceHooks(getUseRowsHooks(), getInstance().rows, {
    instance: getInstance()
  }); // The prepareRow function is absolutely necessary and MUST be called on
  // any rows the user wishes to be displayed.
  // Snapshot hook and disallow more from being added

  var getPrepareRowHooks = useConsumeHookGetter(getInstance().hooks, 'prepareRow'); // Snapshot hook and disallow more from being added

  var getRowPropsHooks = useConsumeHookGetter(getInstance().hooks, 'getRowProps'); // Snapshot hook and disallow more from being added

  var getCellPropsHooks = useConsumeHookGetter(getInstance().hooks, 'getCellProps'); // Snapshot hook and disallow more from being added

  var cellsHooks = useConsumeHookGetter(getInstance().hooks, 'cells');
  getInstance().prepareRow = React__default.useCallback(function (row) {
    row.getRowProps = makePropGetter(getRowPropsHooks(), {
      instance: getInstance(),
      row: row
    }); // Build the visible cells for each row

    row.allCells = flatColumns.map(function (column) {
      var cell = {
        column: column,
        row: row,
        value: row.values[column.id]
      }; // Give each cell a getCellProps base

      cell.getCellProps = makePropGetter(getCellPropsHooks(), {
        instance: getInstance(),
        cell: cell
      }); // Give each cell a renderer function (supports multiple renderers)

      cell.render = makeRenderer(getInstance(), column, {
        row: row,
        cell: cell
      });
      return cell;
    });
    row.cells = reduceHooks(cellsHooks(), row.allCells, {
      instance: getInstance()
    }); // need to apply any row specific hooks (useExpanded requires this)

    loopHooks(getPrepareRowHooks(), row, {
      instance: getInstance()
    });
  }, [getRowPropsHooks, getInstance, flatColumns, cellsHooks, getPrepareRowHooks, getCellPropsHooks]); // Snapshot hook and disallow more from being added

  var getTablePropsHooks = useConsumeHookGetter(getInstance().hooks, 'getTableProps');
  getInstance().getTableProps = makePropGetter(getTablePropsHooks(), {
    instance: getInstance()
  }); // Snapshot hook and disallow more from being added

  var getTableBodyPropsHooks = useConsumeHookGetter(getInstance().hooks, 'getTableBodyProps');
  getInstance().getTableBodyProps = makePropGetter(getTableBodyPropsHooks(), {
    instance: getInstance()
  }); // Snapshot hook and disallow more from being added

  var getUseFinalInstanceHooks = useConsumeHookGetter(getInstance().hooks, 'useFinalInstance');
  loopHooks(getUseFinalInstanceHooks(), getInstance());
  return getInstance();
};

function calculateHeaderWidths(headers, left) {
  if (left === void 0) {
    left = 0;
  }

  var sumTotalMinWidth = 0;
  var sumTotalWidth = 0;
  var sumTotalMaxWidth = 0;
  headers.forEach(function (header) {
    var subHeaders = header.headers;
    header.totalLeft = left;

    if (subHeaders && subHeaders.length) {
      var _calculateHeaderWidth2 = calculateHeaderWidths(subHeaders, left),
          totalMinWidth = _calculateHeaderWidth2[0],
          totalWidth = _calculateHeaderWidth2[1],
          totalMaxWidth = _calculateHeaderWidth2[2];

      header.totalMinWidth = totalMinWidth;
      header.totalWidth = totalWidth;
      header.totalMaxWidth = totalMaxWidth;
    } else {
      header.totalMinWidth = header.minWidth;
      header.totalWidth = Math.min(Math.max(header.minWidth, header.width), header.maxWidth);
      header.totalMaxWidth = header.maxWidth;
    }

    if (header.isVisible) {
      left += header.totalWidth;
      sumTotalMinWidth += header.totalMinWidth;
      sumTotalWidth += header.totalWidth;
      sumTotalMaxWidth += header.totalMaxWidth;
    }
  });
  return [sumTotalMinWidth, sumTotalWidth, sumTotalMaxWidth];
}

actions.toggleExpanded = 'toggleExpanded';
actions.toggleAllExpanded = 'toggleAllExpanded';
actions.setExpanded = 'setExpanded';
actions.resetExpanded = 'resetExpanded';

var text = function text(rows, ids, filterValue) {
  rows = rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id];
      return String(rowValue).toLowerCase().includes(String(filterValue).toLowerCase());
    });
  });
  return rows;
};

text.autoRemove = function (val) {
  return !val;
};

var exactText = function exactText(rows, ids, filterValue) {
  return rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id];
      return rowValue !== undefined ? String(rowValue).toLowerCase() === String(filterValue).toLowerCase() : true;
    });
  });
};

exactText.autoRemove = function (val) {
  return !val;
};

var exactTextCase = function exactTextCase(rows, ids, filterValue) {
  return rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id];
      return rowValue !== undefined ? String(rowValue) === String(filterValue) : true;
    });
  });
};

exactTextCase.autoRemove = function (val) {
  return !val;
};

var includes = function includes(rows, ids, filterValue) {
  return rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id];
      return filterValue.includes(rowValue);
    });
  });
};

includes.autoRemove = function (val) {
  return !val || !val.length;
};

var includesAll = function includesAll(rows, ids, filterValue) {
  return rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id];
      return rowValue && rowValue.length && filterValue.every(function (val) {
        return rowValue.includes(val);
      });
    });
  });
};

includesAll.autoRemove = function (val) {
  return !val || !val.length;
};

var exact = function exact(rows, ids, filterValue) {
  return rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id];
      return rowValue === filterValue;
    });
  });
};

exact.autoRemove = function (val) {
  return typeof val === 'undefined';
};

var equals = function equals(rows, ids, filterValue) {
  return rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id]; // eslint-disable-next-line eqeqeq

      return rowValue == filterValue;
    });
  });
};

equals.autoRemove = function (val) {
  return val == null;
};

var between = function between(rows, ids, filterValue) {
  var _ref = filterValue || [],
      min = _ref[0],
      max = _ref[1];

  min = typeof min === 'number' ? min : -Infinity;
  max = typeof max === 'number' ? max : Infinity;

  if (min > max) {
    var temp = min;
    min = max;
    max = temp;
  }

  return rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id];
      return rowValue >= min && rowValue <= max;
    });
  });
};

between.autoRemove = function (val) {
  return !val || typeof val[0] !== 'number' && typeof val[1] !== 'number';
};

var filterTypes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  text: text,
  exactText: exactText,
  exactTextCase: exactTextCase,
  includes: includes,
  includesAll: includesAll,
  exact: exact,
  equals: equals,
  between: between
});

actions.resetFilters = 'resetFilters';
actions.setFilter = 'setFilter';
actions.setAllFilters = 'setAllFilters';

actions.resetGlobalFilter = 'resetGlobalFilter';
actions.setGlobalFilter = 'setGlobalFilter';

function sum(values, rows) {
  return values.reduce(function (sum, next) {
    return sum + next;
  }, 0);
}
function average(values, rows) {
  return Math.round(sum(values) / values.length * 100) / 100;
}
function median(values) {
  values = values.length ? values : [0];
  var min = Math.min.apply(Math, values);
  var max = Math.max.apply(Math, values);
  return (min + max) / 2;
}
function uniqueCount(values) {
  return new Set(values).size;
}
function count(values) {
  return values.length;
}

var aggregations = /*#__PURE__*/Object.freeze({
  __proto__: null,
  sum: sum,
  average: average,
  median: median,
  uniqueCount: uniqueCount,
  count: count
});

actions.resetGroupBy = 'resetGroupBy';
actions.toggleGroupBy = 'toggleGroupBy';

var reSplitAlphaNumeric = /([0-9]+)/gm; // Mixed sorting is slow, but very inclusive of many edge cases.
// It handles numbers, mixed alphanumeric combinations, and even
// null, undefined, and Infinity

var alphanumeric = function alphanumeric(rowA, rowB, columnId) {
  var a = getRowValueByColumnID(rowA, columnId);
  var b = getRowValueByColumnID(rowB, columnId); // Force to strings (or "" for unsupported types)

  a = toString(a);
  b = toString(b); // Split on number groups, but keep the delimiter
  // Then remove falsey split values

  a = a.split(reSplitAlphaNumeric).filter(Boolean);
  b = b.split(reSplitAlphaNumeric).filter(Boolean); // While

  while (a.length && b.length) {
    var aa = a.shift();
    var bb = b.shift();
    var an = parseInt(aa, 10);
    var bn = parseInt(bb, 10);
    var combo = [an, bn].sort(); // Both are string

    if (isNaN(combo[0])) {
      if (aa > bb) {
        return 1;
      }

      if (bb > aa) {
        return -1;
      }

      continue;
    } // One is a string, one is a number


    if (isNaN(combo[1])) {
      return isNaN(an) ? -1 : 1;
    } // Both are numbers


    if (an > bn) {
      return 1;
    }

    if (bn > an) {
      return -1;
    }
  }

  return a.length - b.length;
};
function datetime(rowA, rowB, columnId) {
  var a = getRowValueByColumnID(rowA, columnId);
  var b = getRowValueByColumnID(rowB, columnId);
  a = a.getTime();
  b = b.getTime();
  return compareBasic(a, b);
}
function basic(rowA, rowB, columnId) {
  var a = getRowValueByColumnID(rowA, columnId);
  var b = getRowValueByColumnID(rowB, columnId);
  return compareBasic(a, b);
} // Utils

function compareBasic(a, b) {
  return a === b ? 0 : a > b ? 1 : -1;
}

function getRowValueByColumnID(row, columnId) {
  return row.values[columnId];
}

function toString(a) {
  if (typeof a === 'number') {
    if (isNaN(a) || a === Infinity || a === -Infinity) {
      return '';
    }

    return String(a);
  }

  if (typeof a === 'string') {
    return a;
  }

  return '';
}

var sortTypes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  alphanumeric: alphanumeric,
  datetime: datetime,
  basic: basic
});

actions.resetSortBy = 'resetSortBy';
actions.toggleSortBy = 'toggleSortBy';
actions.clearSortBy = 'clearSortBy';
defaultColumn.sortType = 'alphanumeric';
defaultColumn.sortDescFirst = false;
var useSortBy = function useSortBy(hooks) {
  hooks.getSortByToggleProps = [defaultGetSortByToggleProps];
  hooks.stateReducers.push(reducer$5);
  hooks.useInstance.push(useInstance$5);
};
useSortBy.pluginName = 'useSortBy';

var defaultGetSortByToggleProps = function defaultGetSortByToggleProps(props, _ref) {
  var instance = _ref.instance,
      column = _ref.column;
  var _instance$isMultiSort = instance.isMultiSortEvent,
      isMultiSortEvent = _instance$isMultiSort === void 0 ? function (e) {
    return e.shiftKey;
  } : _instance$isMultiSort;
  return [props, {
    onClick: column.canSort ? function (e) {
      e.persist();
      column.toggleSortBy(undefined, !instance.disableMultiSort && isMultiSortEvent(e));
    } : undefined,
    style: {
      cursor: column.canSort ? 'pointer' : undefined
    },
    title: column.canSort ? 'Toggle SortBy' : undefined
  }];
}; // Reducer


function reducer$5(state, action, previousState, instance) {
  if (action.type === actions.init) {
    return _extends$1({
      sortBy: []
    }, state);
  }

  if (action.type === actions.resetSortBy) {
    return _extends$1({}, state, {
      sortBy: instance.initialState.sortBy || []
    });
  }

  if (action.type === actions.clearSortBy) {
    var sortBy = state.sortBy;
    var newSortBy = sortBy.filter(function (d) {
      return d.id !== action.columnId;
    });
    return _extends$1({}, state, {
      sortBy: newSortBy
    });
  }

  if (action.type === actions.toggleSortBy) {
    var columnId = action.columnId,
        desc = action.desc,
        multi = action.multi;
    var flatColumns = instance.flatColumns,
        disableMultiSort = instance.disableMultiSort,
        disableSortRemove = instance.disableSortRemove,
        disableMultiRemove = instance.disableMultiRemove,
        _instance$maxMultiSor = instance.maxMultiSortColCount,
        maxMultiSortColCount = _instance$maxMultiSor === void 0 ? Number.MAX_SAFE_INTEGER : _instance$maxMultiSor;
    var _sortBy = state.sortBy; // Find the column for this columnId

    var column = flatColumns.find(function (d) {
      return d.id === columnId;
    });
    var sortDescFirst = column.sortDescFirst; // Find any existing sortBy for this column

    var existingSortBy = _sortBy.find(function (d) {
      return d.id === columnId;
    });

    var existingIndex = _sortBy.findIndex(function (d) {
      return d.id === columnId;
    });

    var hasDescDefined = typeof desc !== 'undefined' && desc !== null;
    var _newSortBy = []; // What should we do with this sort action?

    var sortAction;

    if (!disableMultiSort && multi) {
      if (existingSortBy) {
        sortAction = 'toggle';
      } else {
        sortAction = 'add';
      }
    } else {
      // Normal mode
      if (existingIndex !== _sortBy.length - 1) {
        sortAction = 'replace';
      } else if (existingSortBy) {
        sortAction = 'toggle';
      } else {
        sortAction = 'replace';
      }
    } // Handle toggle states that will remove the sortBy


    if (sortAction === 'toggle' && // Must be toggling
    !disableSortRemove && // If disableSortRemove, disable in general
    !hasDescDefined && ( // Must not be setting desc
    multi ? !disableMultiRemove : true) && ( // If multi, don't allow if disableMultiRemove
    existingSortBy && // Finally, detect if it should indeed be removed
    existingSortBy.desc && !sortDescFirst || !existingSortBy.desc && sortDescFirst)) {
      sortAction = 'remove';
    }

    if (sortAction === 'replace') {
      _newSortBy = [{
        id: columnId,
        desc: hasDescDefined ? desc : sortDescFirst
      }];
    } else if (sortAction === 'add') {
      _newSortBy = [].concat(_sortBy, [{
        id: columnId,
        desc: hasDescDefined ? desc : sortDescFirst
      }]); // Take latest n columns

      _newSortBy.splice(0, _newSortBy.length - maxMultiSortColCount);
    } else if (sortAction === 'toggle') {
      // This flips (or sets) the
      _newSortBy = _sortBy.map(function (d) {
        if (d.id === columnId) {
          return _extends$1({}, d, {
            desc: hasDescDefined ? desc : !existingSortBy.desc
          });
        }

        return d;
      });
    } else if (sortAction === 'remove') {
      _newSortBy = _sortBy.filter(function (d) {
        return d.id !== columnId;
      });
    }

    return _extends$1({}, state, {
      sortBy: _newSortBy
    });
  }
}

function useInstance$5(instance) {
  var data = instance.data,
      rows = instance.rows,
      flatColumns = instance.flatColumns,
      _instance$orderByFn = instance.orderByFn,
      orderByFn = _instance$orderByFn === void 0 ? defaultOrderByFn : _instance$orderByFn,
      userSortTypes = instance.sortTypes,
      manualSortBy = instance.manualSortBy,
      defaultCanSort = instance.defaultCanSort,
      disableSortBy = instance.disableSortBy,
      flatHeaders = instance.flatHeaders,
      sortBy = instance.state.sortBy,
      dispatch = instance.dispatch,
      plugins = instance.plugins,
      _instance$autoResetSo = instance.autoResetSortBy,
      autoResetSortBy = _instance$autoResetSo === void 0 ? true : _instance$autoResetSo;
  ensurePluginOrder(plugins, ['useFilters'], 'useSortBy', []); // Updates sorting based on a columnId, desc flag and multi flag

  var toggleSortBy = function toggleSortBy(columnId, desc, multi) {
    dispatch({
      type: actions.toggleSortBy,
      columnId: columnId,
      desc: desc,
      multi: multi
    });
  }; // use reference to avoid memory leak in #1608


  var getInstance = useGetLatest(instance);
  var getSortByTogglePropsHooks = useConsumeHookGetter(getInstance().hooks, 'getSortByToggleProps'); // Add the getSortByToggleProps method to columns and headers

  flatHeaders.forEach(function (column) {
    var accessor = column.accessor,
        defaultColumnCanSort = column.canSort,
        columnDisableSortBy = column.disableSortBy,
        id = column.id;
    var canSort = accessor ? getFirstDefined(columnDisableSortBy === true ? false : undefined, disableSortBy === true ? false : undefined, true) : getFirstDefined(defaultCanSort, defaultColumnCanSort, false);
    column.canSort = canSort;

    if (column.canSort) {
      column.toggleSortBy = function (desc, multi) {
        return toggleSortBy(column.id, desc, multi);
      };

      column.clearSortBy = function () {
        dispatch({
          type: actions.clearSortBy,
          columnId: column.id
        });
      };
    }

    column.getSortByToggleProps = makePropGetter(getSortByTogglePropsHooks(), {
      instance: getInstance(),
      column: column
    });
    var columnSort = sortBy.find(function (d) {
      return d.id === id;
    });
    column.isSorted = !!columnSort;
    column.sortedIndex = sortBy.findIndex(function (d) {
      return d.id === id;
    });
    column.isSortedDesc = column.isSorted ? columnSort.desc : undefined;
  });
  var sortedRows = React__default.useMemo(function () {
    if (manualSortBy || !sortBy.length) {
      return rows;
    } // Filter out sortBys that correspond to non existing columns


    var availableSortBy = sortBy.filter(function (sort) {
      return flatColumns.find(function (col) {
        return col.id === sort.id;
      });
    });

    var sortData = function sortData(rows) {
      // Use the orderByFn to compose multiple sortBy's together.
      // This will also perform a stable sorting using the row index
      // if needed.
      var sortedData = orderByFn(rows, availableSortBy.map(function (sort) {
        // Support custom sorting methods for each column
        var column = flatColumns.find(function (d) {
          return d.id === sort.id;
        });

        if (!column) {
          throw new Error("React-Table: Could not find a column with id: " + sort.id + " while sorting");
        }

        var sortType = column.sortType; // Look up sortBy functions in this order:
        // column function
        // column string lookup on user sortType
        // column string lookup on built-in sortType
        // default function
        // default string lookup on user sortType
        // default string lookup on built-in sortType

        var sortMethod = isFunction(sortType) || (userSortTypes || {})[sortType] || sortTypes[sortType];

        if (!sortMethod) {
          throw new Error("React-Table: Could not find a valid sortType of '" + sortType + "' for column '" + sort.id + "'.");
        } // Return the correct sortFn.
        // This function should always return in ascending order


        return function (a, b) {
          return sortMethod(a, b, sort.id);
        };
      }), // Map the directions
      availableSortBy.map(function (sort) {
        // Detect and use the sortInverted option
        var column = flatColumns.find(function (d) {
          return d.id === sort.id;
        });

        if (column && column.sortInverted) {
          return sort.desc;
        }

        return !sort.desc;
      })); // If there are sub-rows, sort them

      sortedData.forEach(function (row) {
        if (!row.subRows || row.subRows.length <= 1) {
          return;
        }

        row.subRows = sortData(row.subRows);
      });
      return sortedData;
    };

    return sortData(rows);
  }, [manualSortBy, sortBy, rows, flatColumns, orderByFn, userSortTypes]);
  var getAutoResetSortBy = useGetLatest(autoResetSortBy);
  useMountedLayoutEffect(function () {
    if (getAutoResetSortBy()) {
      dispatch({
        type: actions.resetSortBy
      });
    }
  }, [manualSortBy ? null : data]);
  Object.assign(instance, {
    preSortedRows: rows,
    sortedRows: sortedRows,
    rows: sortedRows,
    toggleSortBy: toggleSortBy
  });
}

actions.resetPage = 'resetPage';
actions.gotoPage = 'gotoPage';
actions.setPageSize = 'setPageSize';

var pluginName$1 = 'useRowSelect'; // Actions

actions.resetSelectedRows = 'resetSelectedRows';
actions.toggleAllRowsSelected = 'toggleAllRowsSelected';
actions.toggleRowSelected = 'toggleRowSelected';
var useRowSelect = function useRowSelect(hooks) {
  hooks.getToggleRowSelectedProps = [defaultGetToggleRowSelectedProps];
  hooks.getToggleAllRowsSelectedProps = [defaultGetToggleAllRowsSelectedProps];
  hooks.stateReducers.push(reducer$7);
  hooks.useRows.push(useRows);
  hooks.useInstance.push(useInstance$7);
};
useRowSelect.pluginName = pluginName$1;

var defaultGetToggleRowSelectedProps = function defaultGetToggleRowSelectedProps(props, _ref) {
  var instance = _ref.instance,
      row = _ref.row;
  var _instance$manualRowSe = instance.manualRowSelectedKey,
      manualRowSelectedKey = _instance$manualRowSe === void 0 ? 'isSelected' : _instance$manualRowSe;
  var checked = false;

  if (row.original && row.original[manualRowSelectedKey]) {
    checked = true;
  } else {
    checked = row.isSelected;
  }

  return [props, {
    onChange: function onChange(e) {
      row.toggleRowSelected(e.target.checked);
    },
    style: {
      cursor: 'pointer'
    },
    checked: checked,
    title: 'Toggle Row Selected',
    indeterminate: row.isSomeSelected
  }];
};

var defaultGetToggleAllRowsSelectedProps = function defaultGetToggleAllRowsSelectedProps(props, _ref2) {
  var instance = _ref2.instance;
  return [props, {
    onChange: function onChange(e) {
      instance.toggleAllRowsSelected(e.target.checked);
    },
    style: {
      cursor: 'pointer'
    },
    checked: instance.isAllRowsSelected,
    title: 'Toggle All Rows Selected',
    indeterminate: Boolean(!instance.isAllRowsSelected && Object.keys(instance.state.selectedRowIds).length)
  }];
};

function reducer$7(state, action, previousState, instance) {
  if (action.type === actions.init) {
    return _extends$1({
      selectedRowIds: {}
    }, state);
  }

  if (action.type === actions.resetSelectedRows) {
    return _extends$1({}, state, {
      selectedRowIds: instance.initialState.selectedRowIds || {}
    });
  }

  if (action.type === actions.toggleAllRowsSelected) {
    var selected = action.selected;
    var isAllRowsSelected = instance.isAllRowsSelected,
        flatRowsById = instance.flatRowsById;
    var selectAll = typeof selected !== 'undefined' ? selected : !isAllRowsSelected;

    if (selectAll) {
      var selectedRowIds = {};
      Object.keys(flatRowsById).forEach(function (rowId) {
        selectedRowIds[rowId] = true;
      });
      return _extends$1({}, state, {
        selectedRowIds: selectedRowIds
      });
    }

    return _extends$1({}, state, {
      selectedRowIds: {}
    });
  }

  if (action.type === actions.toggleRowSelected) {
    var id = action.id,
        _selected = action.selected;
    var flatGroupedRowsById = instance.flatGroupedRowsById; // Join the ids of deep rows
    // to make a key, then manage all of the keys
    // in a flat object

    var row = flatGroupedRowsById[id];
    var isSelected = row.isSelected;
    var shouldExist = typeof _selected !== 'undefined' ? _selected : !isSelected;

    if (isSelected === shouldExist) {
      return state;
    }

    var newSelectedRowIds = _extends$1({}, state.selectedRowIds);

    var handleRowById = function handleRowById(id) {
      var row = flatGroupedRowsById[id];

      if (!row.isGrouped) {
        if (!isSelected && shouldExist) {
          newSelectedRowIds[id] = true;
        } else if (isSelected && !shouldExist) {
          delete newSelectedRowIds[id];
        }
      }

      if (row.subRows) {
        return row.subRows.forEach(function (row) {
          return handleRowById(row.id);
        });
      }
    };

    handleRowById(id);
    return _extends$1({}, state, {
      selectedRowIds: newSelectedRowIds
    });
  }
}

function useRows(rows, _ref3) {
  var instance = _ref3.instance;
  var selectedRowIds = instance.state.selectedRowIds;
  instance.selectedFlatRows = React__default.useMemo(function () {
    var selectedFlatRows = [];
    rows.forEach(function (row) {
      var isSelected = getRowIsSelected(row, selectedRowIds);
      row.isSelected = !!isSelected;
      row.isSomeSelected = isSelected === null;

      if (isSelected) {
        selectedFlatRows.push(row);
      }
    });
    return selectedFlatRows;
  }, [rows, selectedRowIds]);
  return rows;
}

function useInstance$7(instance) {
  var data = instance.data,
      hooks = instance.hooks,
      plugins = instance.plugins,
      flatRows = instance.flatRows,
      _instance$autoResetSe = instance.autoResetSelectedRows,
      autoResetSelectedRows = _instance$autoResetSe === void 0 ? true : _instance$autoResetSe,
      selectedRowIds = instance.state.selectedRowIds,
      dispatch = instance.dispatch;
  ensurePluginOrder(plugins, ['useFilters', 'useGroupBy', 'useSortBy'], 'useRowSelect', []);

  var _React$useMemo = React__default.useMemo(function () {
    var all = {};
    var grouped = {};
    flatRows.forEach(function (row) {
      if (!row.isGrouped) {
        all[row.id] = row;
      }

      grouped[row.id] = row;
    });
    return [all, grouped];
  }, [flatRows]),
      flatRowsById = _React$useMemo[0],
      flatGroupedRowsById = _React$useMemo[1];

  var isAllRowsSelected = Boolean(Object.keys(flatRowsById).length && Object.keys(selectedRowIds).length);

  if (isAllRowsSelected) {
    if (Object.keys(flatRowsById).some(function (id) {
      return !selectedRowIds[id];
    })) {
      isAllRowsSelected = false;
    }
  }

  var getAutoResetSelectedRows = useGetLatest(autoResetSelectedRows);
  useMountedLayoutEffect(function () {
    if (getAutoResetSelectedRows()) {
      dispatch({
        type: actions.resetSelectedRows
      });
    }
  }, [dispatch, data]);

  var toggleAllRowsSelected = function toggleAllRowsSelected(selected) {
    return dispatch({
      type: actions.toggleAllRowsSelected,
      selected: selected
    });
  };

  var toggleRowSelected = function toggleRowSelected(id, selected) {
    return dispatch({
      type: actions.toggleRowSelected,
      id: id,
      selected: selected
    });
  };

  var getInstance = useGetLatest(instance);
  var getToggleAllRowsSelectedPropsHooks = useConsumeHookGetter(getInstance().hooks, 'getToggleAllRowsSelectedProps');
  var getToggleAllRowsSelectedProps = makePropGetter(getToggleAllRowsSelectedPropsHooks(), {
    instance: getInstance()
  });
  var getToggleRowSelectedPropsHooks = useConsumeHookGetter(getInstance().hooks, 'getToggleRowSelectedProps');
  hooks.prepareRow.push(function (row) {
    row.toggleRowSelected = function (set) {
      return toggleRowSelected(row.id, set);
    };

    row.getToggleRowSelectedProps = makePropGetter(getToggleRowSelectedPropsHooks(), {
      instance: getInstance(),
      row: row
    });
  });
  Object.assign(instance, {
    flatRowsById: flatRowsById,
    flatGroupedRowsById: flatGroupedRowsById,
    toggleRowSelected: toggleRowSelected,
    toggleAllRowsSelected: toggleAllRowsSelected,
    getToggleAllRowsSelectedProps: getToggleAllRowsSelectedProps,
    isAllRowsSelected: isAllRowsSelected
  });
}

function getRowIsSelected(row, selectedRowIds) {
  if (selectedRowIds[row.id]) {
    return true;
  }

  if (row.subRows && row.subRows.length) {
    var allChildrenSelected = true;
    var someSelected = false;
    row.subRows.forEach(function (subRow) {
      // Bail out early if we know both of these
      if (someSelected && !allChildrenSelected) {
        return;
      }

      if (getRowIsSelected(subRow, selectedRowIds)) {
        someSelected = true;
      } else {
        allChildrenSelected = false;
      }
    });
    return allChildrenSelected ? true : someSelected ? null : false;
  }

  return false;
}

actions.setRowState = 'setRowState';
actions.resetRowState = 'resetRowState';

actions.resetColumnOrder = 'resetColumnOrder';
actions.setColumnOrder = 'setColumnOrder';

defaultColumn.canResize = true; // Actions

actions.columnStartResizing = 'columnStartResizing';
actions.columnResizing = 'columnResizing';
actions.columnDoneResizing = 'columnDoneResizing';
var useResizeColumns = function useResizeColumns(hooks) {
  hooks.getResizerProps = [defaultGetResizerProps];
  hooks.getHeaderProps.push({
    style: {
      position: 'relative'
    }
  });
  hooks.stateReducers.push(reducer$a);
  hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions$1);
};

var defaultGetResizerProps = function defaultGetResizerProps(props, _ref) {
  var instance = _ref.instance,
      header = _ref.header;
  var dispatch = instance.dispatch;

  var onResizeStart = function onResizeStart(e, header) {
    var isTouchEvent = false;

    if (e.type === 'touchstart') {
      // lets not respond to multiple touches (e.g. 2 or 3 fingers)
      if (e.touches && e.touches.length > 1) {
        return;
      }

      isTouchEvent = true;
    }

    var headersToResize = getLeafHeaders(header);
    var headerIdWidths = headersToResize.map(function (d) {
      return [d.id, d.totalWidth];
    });
    var clientX = isTouchEvent ? Math.round(e.touches[0].clientX) : e.clientX;

    var dispatchMove = function dispatchMove(clientXPos) {
      dispatch({
        type: actions.columnResizing,
        clientX: clientXPos
      });
    };

    var dispatchEnd = function dispatchEnd() {
      return dispatch({
        type: actions.columnDoneResizing
      });
    };

    var handlersAndEvents = {
      mouse: {
        moveEvent: 'mousemove',
        moveHandler: function moveHandler(e) {
          return dispatchMove(e.clientX);
        },
        upEvent: 'mouseup',
        upHandler: function upHandler(e) {
          document.removeEventListener('mousemove', handlersAndEvents.mouse.moveHandler);
          document.removeEventListener('mouseup', handlersAndEvents.mouse.upHandler);
          dispatchEnd();
        }
      },
      touch: {
        moveEvent: 'touchmove',
        moveHandler: function moveHandler(e) {
          if (e.cancelable) {
            e.preventDefault();
            e.stopPropagation();
          }

          dispatchMove(e.touches[0].clientX);
          return false;
        },
        upEvent: 'touchend',
        upHandler: function upHandler(e) {
          document.removeEventListener(handlersAndEvents.touch.moveEvent, handlersAndEvents.touch.moveHandler);
          document.removeEventListener(handlersAndEvents.touch.upEvent, handlersAndEvents.touch.moveHandler);
          dispatchEnd();
        }
      }
    };
    var events = isTouchEvent ? handlersAndEvents.touch : handlersAndEvents.mouse;
    document.addEventListener(events.moveEvent, events.moveHandler, {
      passive: false
    });
    document.addEventListener(events.upEvent, events.upHandler, {
      passive: false
    });
    dispatch({
      type: actions.columnStartResizing,
      columnId: header.id,
      columnWidth: header.totalWidth,
      headerIdWidths: headerIdWidths,
      clientX: clientX
    });
  };

  return [props, {
    onMouseDown: function onMouseDown(e) {
      return e.persist() || onResizeStart(e, header);
    },
    onTouchStart: function onTouchStart(e) {
      return e.persist() || onResizeStart(e, header);
    },
    style: {
      cursor: 'ew-resize'
    },
    draggable: false
  }];
};

useResizeColumns.pluginName = 'useResizeColumns';

function reducer$a(state, action) {
  if (action.type === actions.init) {
    return _extends$1({
      columnResizing: {
        columnWidths: {}
      }
    }, state);
  }

  if (action.type === actions.columnStartResizing) {
    var clientX = action.clientX,
        columnId = action.columnId,
        columnWidth = action.columnWidth,
        headerIdWidths = action.headerIdWidths;
    return _extends$1({}, state, {
      columnResizing: _extends$1({}, state.columnResizing, {
        startX: clientX,
        headerIdWidths: headerIdWidths,
        columnWidth: columnWidth,
        isResizingColumn: columnId
      })
    });
  }

  if (action.type === actions.columnResizing) {
    var _clientX = action.clientX;
    var _state$columnResizing = state.columnResizing,
        startX = _state$columnResizing.startX,
        _columnWidth = _state$columnResizing.columnWidth,
        _headerIdWidths = _state$columnResizing.headerIdWidths;
    var deltaX = _clientX - startX;
    var percentageDeltaX = deltaX / _columnWidth;
    var newColumnWidths = {};

    _headerIdWidths.forEach(function (_ref2) {
      var headerId = _ref2[0],
          headerWidth = _ref2[1];
      newColumnWidths[headerId] = Math.max(headerWidth + headerWidth * percentageDeltaX, 0);
    });

    return _extends$1({}, state, {
      columnResizing: _extends$1({}, state.columnResizing, {
        columnWidths: _extends$1({}, state.columnResizing.columnWidths, {}, newColumnWidths)
      })
    });
  }

  if (action.type === actions.columnDoneResizing) {
    return _extends$1({}, state, {
      columnResizing: _extends$1({}, state.columnResizing, {
        startX: null,
        isResizingColumn: null
      })
    });
  }
}

var useInstanceBeforeDimensions$1 = function useInstanceBeforeDimensions(instance) {
  var flatHeaders = instance.flatHeaders,
      disableResizing = instance.disableResizing,
      columnResizing = instance.state.columnResizing;
  var getInstance = useGetLatest(instance);
  var getResizerPropsHooks = useConsumeHookGetter(getInstance().hooks, 'getResizerProps');
  flatHeaders.forEach(function (header) {
    var canResize = getFirstDefined(header.disableResizing === true ? false : undefined, disableResizing === true ? false : undefined, true);
    header.canResize = canResize;
    header.width = columnResizing.columnWidths[header.id] || header.width;
    header.isResizing = columnResizing.isResizingColumn === header.id;

    if (canResize) {
      header.getResizerProps = makePropGetter(getResizerPropsHooks(), {
        instance: getInstance(),
        header: header
      });
    }
  });
};

function getLeafHeaders(header) {
  var leafHeaders = [];

  var recurseHeader = function recurseHeader(header) {
    if (header.columns && header.columns.length) {
      header.columns.map(recurseHeader);
    }

    leafHeaders.push(header);
  };

  recurseHeader(header);
  return leafHeaders;
}
//# sourceMappingURL=index.es.js.map

var css$7 = ".Table_ct__deWD6 {\n  padding: 1rem; }\n  .Table_ct__deWD6 .Table_tbody__2IGd7 {\n    display: table-row-group;\n    vertical-align: middle;\n    border-color: inherit; }\n    .Table_ct__deWD6 .Table_tbody__2IGd7 .Table_tr__3B4mA {\n      display: table-row;\n      vertical-align: inherit;\n      border-color: inherit;\n      position: relative; }\n      .Table_ct__deWD6 .Table_tbody__2IGd7 .Table_tr__3B4mA .Table_td__1mLzK {\n        white-space: nowrap;\n        width: 50px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        position: relative;\n        display: table-cell;\n        vertical-align: inherit;\n        max-height: 25px; }\n        .Table_ct__deWD6 .Table_tbody__2IGd7 .Table_tr__3B4mA .Table_td__1mLzK div {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          position: relative; }\n          .Table_ct__deWD6 .Table_tbody__2IGd7 .Table_tr__3B4mA .Table_td__1mLzK div:before, .Table_ct__deWD6 .Table_tbody__2IGd7 .Table_tr__3B4mA .Table_td__1mLzK div:after {\n            content: \"\";\n            background-color: #666;\n            transform: rotate(45deg);\n            z-index: -1; }\n          .Table_ct__deWD6 .Table_tbody__2IGd7 .Table_tr__3B4mA .Table_td__1mLzK div:before {\n            height: 1px;\n            width: 8px;\n            position: absolute; }\n          .Table_ct__deWD6 .Table_tbody__2IGd7 .Table_tr__3B4mA .Table_td__1mLzK div:after {\n            width: 1px;\n            height: 8px;\n            position: absolute; }\n          .Table_ct__deWD6 .Table_tbody__2IGd7 .Table_tr__3B4mA .Table_td__1mLzK div label {\n            border: 1px solid #666;\n            height: 10px;\n            width: 10px;\n            border-radius: 50%; }\n            .Table_ct__deWD6 .Table_tbody__2IGd7 .Table_tr__3B4mA .Table_td__1mLzK div label input {\n              display: none; }\n  .Table_ct__deWD6 tfoot select {\n    border: solid 1px #b2b3b3;\n    background-color: #f5f6f6;\n    box-shadow: 1px 1px 1px #888888; }\n  .Table_ct__deWD6 tfoot td div {\n    margin-top: -1em;\n    display: flex; }\n  .Table_ct__deWD6 tfoot td:last-child div {\n    margin-top: 1em;\n    display: flex;\n    justify-content: center;\n    position: relative; }\n    .Table_ct__deWD6 tfoot td:last-child div:First-child:before, .Table_ct__deWD6 tfoot td:last-child div:First-child:after {\n      content: \"\";\n      background-color: #4bb165;\n      z-index: -1; }\n    .Table_ct__deWD6 tfoot td:last-child div:First-child:before {\n      height: 1px;\n      width: 9px;\n      position: absolute;\n      margin-top: 6px; }\n    .Table_ct__deWD6 tfoot td:last-child div:First-child:after {\n      margin-top: 2px;\n      width: 1px;\n      height: 9px;\n      position: absolute; }\n    .Table_ct__deWD6 tfoot td:last-child div label {\n      position: relative;\n      display: flex;\n      border: 1px solid #4bb165;\n      height: 11px;\n      width: 11px;\n      border-radius: 50%;\n      position: relative; }\n    .Table_ct__deWD6 tfoot td:last-child div select {\n      display: none; }\n  .Table_ct__deWD6 .Table_table__1DoSj {\n    display: table;\n    border-collapse: separate;\n    border-spacing: 0;\n    border: 1px solid #b2b3b3; }\n    .Table_ct__deWD6 .Table_table__1DoSj thead {\n      background-color: #d7d7d7; }\n      .Table_ct__deWD6 .Table_table__1DoSj thead .Table_tr__3B4mA {\n        display: table-row;\n        vertical-align: inherit;\n        border-color: inherit;\n        position: relative;\n        position: relative; }\n        .Table_ct__deWD6 .Table_table__1DoSj thead .Table_tr__3B4mA .Table_th__3xQiz {\n          display: table-cell;\n          vertical-align: inherit;\n          font-weight: normal;\n          border-right: 1px solid #b2b3b3;\n          border-bottom: 0px;\n          text-align: justify;\n          padding: 5px; }\n          .Table_ct__deWD6 .Table_table__1DoSj thead .Table_tr__3B4mA .Table_th__3xQiz span {\n            margin-left: 20px; }\n    .Table_ct__deWD6 .Table_table__1DoSj th,\n    .Table_ct__deWD6 .Table_table__1DoSj .Table_td__1mLzK {\n      justify-content: space-between;\n      margin: 0;\n      padding: 0.5rem;\n      border-bottom: 1px solid #b2b3b3; }\n\n.Table_resizer__3eiZE {\n  display: inline-block;\n  width: 10px;\n  height: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: translateX(50%);\n  z-index: 1;\n  touch-action: none; }\n";
var style$5 = { "ct": "Table_ct__deWD6", "tbody": "Table_tbody__2IGd7", "tr": "Table_tr__3B4mA", "td": "Table_td__1mLzK", "table": "Table_table__1DoSj", "th": "Table_th__3xQiz", "resizer": "Table_resizer__3eiZE" };
styleInject(css$7);

var arrow = "data:image/png;base64,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";

var App = function App(_ref) {
  var columns = _ref.columns,
      selectOptions = _ref.selectOptions,
      dataRows = _ref.dataRows;

  var _useState = React.useState([]),
      _useState2 = slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  console.log(selectOptions);

  React.useEffect(function () {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(json => setData(json))
    setData(dataRows);
  }, []);

  function Table(_ref2) {
    var columns = _ref2.columns,
        data = _ref2.data;


    var defaultColumn$$1 = React.useMemo(function () {
      return {
        minWidth: 90,
        width: 150,
        maxWidth: 400
      };
    }, []);

    var IndeterminateCheckbox = React.forwardRef(function (_ref3, ref) {
      var indeterminate = _ref3.indeterminate,
          rest = objectWithoutProperties(_ref3, ['indeterminate']);

      var defaultRef = React.useRef();
      var resolvedRef = ref || defaultRef;

      React.useEffect(function () {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return React.createElement('input', _extends({ type: 'checkbox', ref: resolvedRef }, rest));
    });

    var _useTable = useTable({
      columns: columns,
      data: data,
      defaultColumn: defaultColumn$$1
    }, useSortBy, useResizeColumns, useRowSelect,
    //useBlockLayout
    function (hooks) {
      selectOptions && hooks.flatColumns.push(function (columns) {
        return [].concat(toConsumableArray(columns), [{
          id: 'selection',
          Header: function Header(_ref4) {
            var getToggleAllRowsSelectedProps = _ref4.getToggleAllRowsSelectedProps;
            return React.createElement('div', null);
          },
          Cell: function Cell(_ref5) {
            var row = _ref5.row;
            return React.createElement(
              'div',
              null,
              React.createElement(
                'label',
                null,
                React.createElement(IndeterminateCheckbox, row.getToggleRowSelectedProps())
              )
            );
          },
          Footer: function Footer() {
            return React.createElement(
              'div',
              null,
              React.createElement('label', { onClick: addUser })
            );
          }
        }]);
      });
    }),
        getTableProps = _useTable.getTableProps,
        getTableBodyProps = _useTable.getTableBodyProps,
        headerGroups = _useTable.headerGroups,
        footerGroups = _useTable.footerGroups,
        rows = _useTable.rows,
        prepareRow = _useTable.prepareRow,
        selectedRowIds = _useTable.state.selectedRowIds;

    // Refactor


    var newRow = {};

    var objj = [];
    var rowToState = function rowToState(column, e, t) {

      var json = '{"' + column + '":' + e.currentTarget.value + '}';
      var obj = JSON.parse(json);

      objj.push(obj);

      newRow = objj.reduce(function (reduced, next) {
        Object.keys(next).forEach(function (key) {
          reduced[key] = next[key];
        });
        return reduced;
      });
    };

    Object.size = function (obj) {
      var size = 0,
          key;
      for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
      }
      return size;
    };

    var addUser = function addUser() {
      var count = 0;

      Object.values(newRow).forEach(function (e) {
        count++;

        if (count == Object.size(columns)) {
          setData([].concat(toConsumableArray(data), [newRow]));
        }
      });
    };

    //Removing iten from Table by ID
    var id = Object.keys(selectedRowIds).toString();

    if (id) {
      setData([].concat(toConsumableArray(data)).filter(function (_, i) {
        return i !== +id;
      }));
    }

    var downArrow = {
      transform: 'rotate(-90deg)'
    };
    var upArrow = {
      transform: 'rotate(90deg)'
    };

    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        _extends({ className: style$5['table'] }, getTableProps()),
        React.createElement(
          'thead',
          null,
          headerGroups.map(function (headerGroup) {
            return React.createElement(
              'div',
              _extends({ className: style$5['tr'] }, headerGroup.getHeaderGroupProps()),
              headerGroup.headers.map(function (column) {
                return React.createElement(
                  'div',
                  _extends({ className: style$5['th'] }, column.getHeaderProps(column.getSortByToggleProps())),
                  column.render('Header'),
                  React.createElement('div', _extends({}, column.getResizerProps(), {
                    className: style$5['resizer']
                  })),
                  React.createElement(
                    'span',
                    null,
                    column.isSorted ? column.isSortedDesc ? React.createElement('img', { src: arrow, height: 12, style: downArrow }) : React.createElement('img', { src: arrow, height: 12, style: upArrow }) : ''
                  )
                );
              })
            );
          })
        ),
        React.createElement(
          'div',
          _extends({ className: style$5['tbody'] }, getTableBodyProps()),
          rows.map(function (row, i) {
            prepareRow(row);
            return React.createElement(
              'div',
              _extends({ className: style$5['tr'] }, row.getRowProps()),
              row.cells.map(function (cell) {
                return React.createElement(
                  'div',
                  _extends({ className: style$5['td'] }, cell.getCellProps()),
                  cell.render('Cell')
                );
              })
            );
          })
        ),
        selectOptions && React.createElement(
          'tfoot',
          null,
          footerGroups.map(function (group) {
            return React.createElement(
              'tr',
              group.getFooterGroupProps(),
              group.headers.map(function (column) {
                return React.createElement(
                  'td',
                  column.getFooterProps(),
                  column.render('Footer'),
                  React.createElement(Dropdown, { required: true, options: selectOptions, change: function change(e) {
                      return rowToState(column.id, e, group.headers);
                    } })
                );
              })
            );
          })
        )
      )
    );
  }

  return React.createElement(
    'div',
    { className: style$5['ct'] },
    React.createElement(Table, { columns: columns, data: data })
  );
};

var css$8 = ".Form_ct-form__2UE3O {\n  padding-right: 0.5rem; }\n";
var style$6 = { "ct-form": "Form_ct-form__2UE3O" };
styleInject(css$8);

var FormContext = React.createContext({});
var ContextInformation = function ContextInformation(_ref) {
    var children = _ref.children;
    //Form starts invalid
    var _useState = React.useState(false), _useState2 = slicedToArray(_useState, 2), validateForm = _useState2[0], setValidateForm = _useState2[1];
    return React__default.createElement(FormContext.Provider, { value: {
            validateForm: validateForm,
            setValidateForm: setValidateForm
        } }, children);
};
//# sourceMappingURL=index.js.map

var verifiableTypes = ["Input", "Textarea", "Dropdown"];
var setWidth = function setWidth(width) {
    return {
        width: width
    };
};
var validateVerifiableFields = function validateVerifiableFields(fields) {
    return fields.some(function (e) {
        return e.props.required && !e.props.value;
    });
};
var Form = function Form(props) {
    var verifiableFields = [];
    var verifyElementType = function verifyElementType(e) {
        if (e.props && e.props.children) {
            getFormFields(e.props.children);
        }
        else if (e.type && verifiableTypes.some(function (string) {
            return e.type.toString().includes(string);
        })) {
            verifiableFields.push(e);
        }
    };
    var isValid = !validateVerifiableFields(verifiableFields);
    try {
        var _useContext = React.useContext(ContextInformation), setValidateForm = _useContext.setValidateForm;
        setValidateForm(isValid);
    }
    catch (error) {
        console.log(error);
    }
    var getFormFields = function getFormFields(children) {
        if (Array.isArray(children)) {
            children.map(verifyElementType);
        }
        else {
            verifyElementType(children);
        }
    };
    var children = props.children, width = props.width;
    getFormFields(children);
    var widthStyle = setWidth(width);
    return React__default.createElement('div', { style: widthStyle, className: style$6['ct-form'] }, children);
};
Form.defaultProps = {
    children: null,
    width: "100%"
};
//# sourceMappingURL=Form.js.map

var css$9 = ".FormRow_ct-form__row__3XKaq {\n  display: grid;\n  grid-auto-flow: column;\n  align-items: end; }\n  .FormRow_ct-form__row__title__2TZhv {\n    margin: 0.5rem 0.5rem 0 1rem;\n    font-weight: var(--weight-normal);\n    font-family: \"Segoe UI\", sans-serif;\n    color: var(--text-dark);\n    text-transform: capitalize; }\n";
var style$7 = { "ct-form__row": "FormRow_ct-form__row__3XKaq", "ct-form__row__title": "FormRow_ct-form__row__title__2TZhv" };
styleInject(css$9);

var setClasses$5 = function setClasses() {
    var classes = [style$7["ct-form__row"]];
    return classes.join(" ");
};
var setRatio = function setRatio(ratio) {
    var style = {
        gridAutoColumns: '1fr',
        gridTemplateColumns: ""
    };
    if (ratio) {
        var aRatio = ratio.split(":");
        var styledRatio = aRatio.join("fr ").concat("fr");
        style = {
            gridAutoColumns: "",
            gridTemplateColumns: styledRatio
        };
    }
    return style;
};
var FormRow = function FormRow(props) {
    var children = props.children, ratio = props.ratio, title = props.title;
    var viewRatio = setRatio(ratio);
    var classes = setClasses$5();
    return React.createElement(aux, null, title ? React.createElement('p', { className: style$7['ct-form__row__title'] }, title) : null, React.createElement('div', { style: viewRatio, className: classes }, children));
};
//# sourceMappingURL=FormRow.js.map

var css$a = ".Collapsible_ct-collapsible__wrapper__2gtiV {\n  padding: 1rem; }\n\n.Collapsible_ct-collapsible__toggle__1Ugif {\n  display: none; }\n  .Collapsible_ct-collapsible__toggle__label__1zJe0 {\n    font-weight: var(--weight-normal);\n    font-family: \"Segoe UI\", sans-serif;\n    color: var(--text-dark);\n    text-transform: capitalize;\n    display: block;\n    cursor: pointer;\n    border-radius: 0.5rem;\n    transition: all 0.25s ease-out; }\n    .Collapsible_ct-collapsible__toggle__label__1zJe0:before {\n      content: \" \";\n      display: inline-block;\n      border-top: 5px solid transparent;\n      border-bottom: 5px solid transparent;\n      border-left: 5px solid currentColor;\n      vertical-align: middle;\n      margin-right: 0.7rem;\n      transform: translateY(-2px);\n      transition: transform 0.2s ease-out; }\n\n.Collapsible_ct-collapsible__content__1p5gZ {\n  max-height: 0px;\n  overflow: hidden;\n  transition: max-height 0.25s ease-in-out; }\n\n.Collapsible_ct-collapsible__toggle__1Ugif:checked + .Collapsible_ct-collapsible__toggle__label__1zJe0 + .Collapsible_ct-collapsible__content__1p5gZ {\n  max-height: 100vh; }\n\n.Collapsible_ct-collapsible__toggle__1Ugif:checked + .Collapsible_ct-collapsible__toggle__label__1zJe0:before {\n  transform: rotate(90deg) translateX(-2px); }\n\n.Collapsible_ct-collapsible__toggle__1Ugif:checked + .Collapsible_ct-collapsible__toggle__label__1zJe0 {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n";
var style$8 = { "ct-collapsible__wrapper": "Collapsible_ct-collapsible__wrapper__2gtiV", "ct-collapsible__toggle": "Collapsible_ct-collapsible__toggle__1Ugif", "ct-collapsible__toggle__label": "Collapsible_ct-collapsible__toggle__label__1zJe0", "ct-collapsible__content": "Collapsible_ct-collapsible__content__1p5gZ" };
styleInject(css$a);

var Collapsible = function Collapsible(props) {
    var label = props.label, children = props.children, defaultChecked = props.defaultChecked;
    return React.createElement('div', { className: style$8["ct-collapsible__wrapper"] }, React.createElement('input', { id: 'collapsible', className: style$8["ct-collapsible__toggle"], type: 'checkbox', defaultChecked: defaultChecked }), React.createElement('label', { htmlFor: 'collapsible', className: style$8["ct-collapsible__toggle__label"] }, label), React.createElement('div', { className: style$8["ct-collapsible__content"] }, children));
};
Collapsible.defaultProps = {
    children: null,
    label: "",
    defaultChecked: false
};
//# sourceMappingURL=Collapsible.js.map

var css$b = ".Row_ct-row__2CrpP {\n  display: grid;\n  grid-auto-flow: column;\n  align-items: start;\n  position: relative;\n  overflow: auto; }\n  .Row_ct-row__title__47UXF {\n    margin: 0.5rem 0.5rem 0 1rem;\n    font-weight: var(--weight-normal);\n    font-family: \"Segoe UI\", sans-serif;\n    color: var(--text-dark);\n    text-transform: capitalize; }\n";
var style$9 = { "ct-row": "Row_ct-row__2CrpP", "ct-row__title": "Row_ct-row__title__47UXF" };
styleInject(css$b);

var setClasses$6 = function setClasses() {
    var classes = [style$9["ct-row"]];
    return classes.join(" ");
};
var setProportions = function setProportions(ratio, height) {
    var style = {
        gridAutoColumns: '1fr',
        gridTemplateColumns: "",
        height: height ? height : "100%"
    };
    if (ratio) {
        var aRatio = ratio.split(":");
        var styledRatio = aRatio.join("fr ").concat("fr");
        style = {
            gridAutoColumns: "",
            gridTemplateColumns: styledRatio,
            height: height
        };
    }
    return style;
};
var Row = function Row(props) {
    var children = props.children, ratio = props.ratio, title = props.title, height = props.height;
    var viewProportions = setProportions(ratio, height);
    var classes = setClasses$6();
    return React.createElement(aux, null, title ? React.createElement('p', { className: style$9['ct-row__title'] }, title) : null, React.createElement('div', { style: viewProportions, className: classes }, children));
};
Row.defaultProps = {
    children: null,
    height: "100%"
};
//# sourceMappingURL=Row.js.map

var css$c = ".Footer_ct-footer__3yYR9 {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background: white; }\n";
var style$a = { "ct-footer": "Footer_ct-footer__3yYR9" };
styleInject(css$c);

var Footer = function Footer(props) {
    var children = props.children;
    return React.createElement('div', { className: style$a['ct-footer'] }, children);
};
Footer.defaultProps = {
    children: null
};
//# sourceMappingURL=Footer.js.map

var css$d = ".Container_ct-container__7Ud9M {\n  max-height: 100vh;\n  position: relative; }\n";
var style$b = { "ct-container": "Container_ct-container__7Ud9M" };
styleInject(css$d);

var setProportions$1 = function setProportions(height) {
    return {
        height: height
    };
};
var Container = function Container(props) {
    var children = props.children, height = props.height;
    var proportions = setProportions$1(height);
    return React.createElement('div', { style: proportions, className: style$b['ct-container'] }, children);
};
Container.defaultProps = {
    children: null,
    height: "100vh"
};
//# sourceMappingURL=Container.js.map

var css$e = ".styles_ct-sidePanel__2Fi_D {\n  display: flex;\n  width: 58px;\n  height: 58px;\n  max-width: 58px;\n  max-height: 58px;\n  margin: 2px;\n  justify-content: center;\n  align-items: center;\n  position: relative; }\n  .styles_ct-sidePanel__2Fi_D div {\n    width: 40px;\n    height: 40px;\n    box-sizing: border-box;\n    border-radius: 50%;\n    background-color: #C5DDEE;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n    .styles_ct-sidePanel__2Fi_D div svg.styles_EventForm__1K4wT {\n      fill: #2562a5; }\n    .styles_ct-sidePanel__2Fi_D div svg.styles_CommentsAndRemark__oWcZL {\n      fill: none;\n      stroke: #2562a5;\n      stroke-linecap: round;\n      stroke-linejoin: round;\n      stroke-width: 2px; }\n    .styles_ct-sidePanel__2Fi_D div svg.styles_Attachement__PlYxT {\n      fill: none;\n      stroke: #2562a5;\n      stroke-linecap: round;\n      stroke-linejoin: round;\n      stroke-width: 1.367px; }\n    .styles_ct-sidePanel__2Fi_D div svg.styles_SuplementalInfo__3eZRL {\n      fill: #2562a5; }\n    .styles_ct-sidePanel__2Fi_D div .styles_b__obGBA {\n      fill: none;\n      stroke: #2562a5;\n      stroke-linecap: round;\n      stroke-linejoin: round;\n      stroke-width: 1.231px; }\n    .styles_ct-sidePanel__2Fi_D div svg.styles_LocationOfIntereset__32wT9 {\n      padding: 0 3px;\n      fill: #2562a5; }\n    .styles_ct-sidePanel__2Fi_D div svg.styles_InformerReturns__wDYZJ {\n      fill: #2562a5; }\n    .styles_ct-sidePanel__2Fi_D div svg.styles_Agency__2L_XN {\n      fill: #2562a5; }\n    .styles_ct-sidePanel__2Fi_D div .styles_b__obGBA,\n    .styles_ct-sidePanel__2Fi_D div .styles_c__xwQ1h {\n      fill: none; }\n    .styles_ct-sidePanel__2Fi_D div .styles_c__xwQ1h {\n      stroke: #2562a5;\n      stroke-width: 2px; }\n  .styles_ct-sidePanel--active__2M-YW {\n    background-color: #C5DDEE;\n    border-right: 5px solid #134B96; }\n    .styles_ct-sidePanel--active__2M-YW div {\n      background-color: #fff; }\n  .styles_ct-sidePanel--quantity__WvfdE h1 {\n    box-sizing: border-box;\n    z-index: 1;\n    font-family: \"Segoe UI\";\n    font-weight: Semibold;\n    position: absolute;\n    margin-top: 35px;\n    margin-left: 35px;\n    font-size: 11px;\n    background-color: #686868;\n    color: #fff;\n    padding: 2px 5px;\n    border-radius: 5px;\n    text-align: center; }\n\n.styles_ct-StackedEvents__b0fmI div {\n  background-image: url(svgs/StackedIncidentsIconPng.png);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 40px;\n  width: 42px;\n  height: 28px;\n  position: relative; }\n  .styles_ct-StackedEvents__b0fmI div h1 {\n    box-sizing: border-box;\n    z-index: 1;\n    font-family: \"Segoe UI\";\n    font-weight: bold;\n    position: absolute;\n    margin-top: 2px;\n    margin-left: 8px;\n    font-size: 13px;\n    text-align: center; }\n";
var style$c = { "ct-sidePanel": "styles_ct-sidePanel__2Fi_D", "EventForm": "styles_EventForm__1K4wT", "CommentsAndRemark": "styles_CommentsAndRemark__oWcZL", "Attachement": "styles_Attachement__PlYxT", "SuplementalInfo": "styles_SuplementalInfo__3eZRL", "b": "styles_b__obGBA", "LocationOfIntereset": "styles_LocationOfIntereset__32wT9", "InformerReturns": "styles_InformerReturns__wDYZJ", "Agency": "styles_Agency__2L_XN", "c": "styles_c__xwQ1h", "ct-sidePanel--active": "styles_ct-sidePanel--active__2M-YW", "ct-sidePanel--quantity": "styles_ct-sidePanel--quantity__WvfdE", "ct-StackedEvents": "styles_ct-StackedEvents__b0fmI" };
styleInject(css$e);

var EventFormSvg = function EventFormSvg(props) {
  return React__default.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '18', height: '22.086', viewBox: '0 0 18 22.086', className: props.css },
    React__default.createElement(
      'g',
      { transform: 'translate(-21 -118.93)' },
      React__default.createElement('path', { className: style$c['a'], d: 'M21,118.93v10.517H39V118.93Zm3.414,4.643a1.489,1.489,0,1,1,1.415-1.488A1.452,1.452,0,0,1,24.414,123.573ZM36,123.137H28a1.053,1.053,0,0,1,0-2.1h8a1.053,1.053,0,0,1,0,2.1Zm-11.586,4.642a1.489,1.489,0,1,1,1.415-1.487A1.452,1.452,0,0,1,24.414,127.779ZM36,127.344H28a1.053,1.053,0,0,1,0-2.1h8a1.053,1.053,0,0,1,0,2.1Z' }),
      React__default.createElement('path', { className: style$c['a'], d: 'M21,131.55v9.466H39V131.55Zm7.5,7.362h-5a1.053,1.053,0,0,1,0-2.1h5a1.053,1.053,0,0,1,0,2.1Zm8,0h-5a1.053,1.053,0,0,1,0-2.1h5a1.053,1.053,0,0,1,0,2.1Zm0-3.155h-13a1.053,1.053,0,0,1,0-2.1h13a1.053,1.053,0,0,1,0,2.1Z' })
    )
  );
};

var CommentsAndRemarkSvg = function CommentsAndRemarkSvg(props) {
  return React__default.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '18', height: '18.84', viewBox: '0 0 18 18.84', className: props.css },
    React__default.createElement('path', { className: style$c['a'], d: 'M29.813,177.85a7.669,7.669,0,0,0-7.937,7.37,7.1,7.1,0,0,0,2.388,5.265c0,2.4-2.514,2.863-2.514,4,2.111.595,5.024-.854,6.4-2.064a8.546,8.546,0,0,0,1.668.166,7.39,7.39,0,1,0,0-14.74Z', transform: 'translate(-20.75 -176.85)' })
  );
};

var AttachementSvg = function AttachementSvg(props) {
  return React__default.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '17.458', height: '15.626', viewBox: '0 0 17.458 15.626', className: props.css },
    React__default.createElement('path', { className: style$c['a'], d: 'M580.081,352.909l-6.194,6.194a2.115,2.115,0,0,1-3.055.278c-.984-.986-.571-2.206.278-3.055l5.638-5.638c1.7-1.7,3.3-2.81,5-1.111.964.964,2.836,2.163,0,5l-6.194,6.194c-2.179,2.179-4.31,3.256-6.721.845s-1.967-5.168.657-7.792c1.532-1.531,4.674-4.391,4.674-4.391', transform: 'translate(-566.475 -348.044)' })
  );
};

var SuplementalInfoSvg = function SuplementalInfoSvg(props) {
  return React__default.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16.827', viewBox: '0 0 16 16.827', className: props.css },
    React__default.createElement(
      'g',
      { transform: 'translate(-21.75 -290.731)' },
      React__default.createElement('path', { className: style$c['a'], d: 'M37.75,301.733V293.32a2.531,2.531,0,0,0-2.462-2.589H24.212a2.531,2.531,0,0,0-2.462,2.589v11.649a2.532,2.532,0,0,0,2.462,2.589h8c.653,0,1.563-.99,2.616-2.12.148-.158.3-.32.451-.479s.305-.319.455-.474C36.809,303.378,37.75,302.421,37.75,301.733Zm-1.231,0c0,.644-.616.647-1.231.647H33.442a.633.633,0,0,0-.615.647V305c0,.574.006,1.148-.438,1.267l-8.177,0a1.264,1.264,0,0,1-1.231-1.294V293.32a1.264,1.264,0,0,1,1.231-1.3H35.288a1.264,1.264,0,0,1,1.231,1.3Z' }),
      React__default.createElement('path', { className: style$c['b'], d: 'M26.058,296.494l7.384.123' }),
      React__default.createElement('path', { className: style$c['b'], d: 'M26.058,299.791h6.154' })
    )
  );
};

var LocationOfInteresetSvg = function LocationOfInteresetSvg(props) {
  return React__default.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '18.972', viewBox: '0 0 11 18.972', className: props.css },
    React__default.createElement('path', { className: style$c['a'], d: 'M29.75,346.449a5.648,5.648,0,0,0-5.5,5.784c0,3.2,4.8,8.892,4.8,13.188h1.408c0-4.282,4.8-10.254,4.8-13.188A5.648,5.648,0,0,0,29.75,346.449Zm0,8.155A2.374,2.374,0,1,1,32,352.233,2.316,2.316,0,0,1,29.75,354.6Z', transform: 'translate(-24.25 -346.449)' })
  );
};

var InformerReturnsSvg = function InformerReturnsSvg(props) {
  return React__default.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '18', height: '18.931', viewBox: '0 0 18 18.931', className: props.css },
    React__default.createElement(
      'g',
      { transform: 'translate(-20.75 -404.312)' },
      React__default.createElement('path', { className: style$c['a'], d: 'M34.749,417.845l-1.131,1.189-2.3-2.415,1.132-1.191Z' }),
      React__default.createElement('path', { className: style$c['a'], d: 'M38.375,420.309a1.4,1.4,0,0,1,0,1.9l-.6.634a1.234,1.234,0,0,1-1.81,0l-3.235-3.4a1.4,1.4,0,0,1,0-1.905l.6-.635a1.238,1.238,0,0,1,1.811,0Z' }),
      React__default.createElement('path', { className: style$c['a'], d: 'M27.629,404.312a7.244,7.244,0,0,0,0,14.469,7.244,7.244,0,0,0,0-14.469Zm0,13.131a5.9,5.9,0,0,1,0-11.792,5.9,5.9,0,0,1,0,11.792Z' }),
      React__default.createElement('path', { className: style$c['a'], d: 'M29.039,415.128A5.1,5.1,0,0,1,24.07,409.9c0-.077.007-.152.011-.229a4.168,4.168,0,0,0-.575,2.118,3.945,3.945,0,0,0,3.842,4.041,3.7,3.7,0,0,0,2.2-.731A4.777,4.777,0,0,1,29.039,415.128Z' })
    )
  );
};

var AgencySvg = function AgencySvg(props) {
  return React__default.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '18', height: '16', viewBox: '0 0 18 16', className: props.css },
    React__default.createElement(
      'g',
      { transform: 'translate(-651 -765)' },
      React__default.createElement(
        'g',
        { transform: 'translate(-202 240.5)' },
        React__default.createElement('rect', { className: style$c['a'], width: '2', height: '3', transform: 'translate(861 535.5)' }),
        React__default.createElement('rect', { className: style$c['a'], width: '2', height: '2', transform: 'translate(858 527.5)' }),
        React__default.createElement('rect', { className: style$c['a'], width: '2', height: '2', transform: 'translate(861 527.5)' }),
        React__default.createElement('rect', { className: style$c['a'], width: '2', height: '2', transform: 'translate(864 527.5)' }),
        React__default.createElement('rect', { className: style$c['a'], width: '2', height: '2', transform: 'translate(858 530.5)' }),
        React__default.createElement('rect', { className: style$c['a'], width: '2', height: '2', transform: 'translate(861 530.5)' }),
        React__default.createElement('rect', { className: style$c['a'], width: '2', height: '2', transform: 'translate(864 530.5)' }),
        React__default.createElement('rect', { className: style$c['a'], width: '2', height: '2', transform: 'translate(858 533.5)' }),
        React__default.createElement('rect', { className: style$c['a'], width: '2', height: '2', transform: 'translate(861 533.5)' }),
        React__default.createElement('rect', { className: style$c['a'], width: '2', height: '2', transform: 'translate(864 533.5)' }),
        React__default.createElement('rect', { className: style$c['b'], width: '13.2', height: '15', transform: 'translate(855.4 524.5)' }),
        React__default.createElement('path', { className: style$c['c'], d: 'M2,0h8a2,2,0,0,1,2,2V14a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V2A2,2,0,0,1,2,0Z', transform: 'translate(856 525.5)' }),
        React__default.createElement('rect', { className: style$c['a'], width: '18', height: '2', transform: 'translate(853 538.5)' })
      )
    )
  );
};

// export const StackedEventsSvg = (props) => (
//   <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="42.286" height="28.212" viewBox="0 0 42.286 28.212"></svg>
// )

var arrowPng = "data:image/png;base64,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";

var notifyPng = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAAAAXNSR0IArs4c6QAABH5JREFUSA2tVltvVFUU/s5cCtZCRwnYUIURk2IbtVOvNKZhEu2DMU2Kib62GjThCXwh8cHYdx+MJsqDGkF/AH3QhERIW3gQwsvYJk2jQFtoa2tS6G2mM53L8fv22ecMhd6ks5J19lpr77O+8+299t7HwRbEdd0Eh3VR1cZsywYp6pxtzzmOI//RhUBJ6ih1qzLKgcmNEJ21OvmSWJynJtU/NZfDpb/u4Y+JNMYW8hiczSIfDqGx7nHsr63Cm/U1ePfZGsR3RTVc0k89RsZiv0oeAiRYgiN+oiaWsgX82HcbP1/7B4VwGPmQ47UEy9/vh0IoREI40bwHn7/8JGJVIYFoej98cJpXAVqwPg6M3ZxaxKffp3AvV7TJvaR5JSfYimkF7Pn+x1TvjOBix9NI7NkhUDFsIeiYHIn5FBl2GsUsdnVoBp99dx3ZpRyiJRfRYglVbgkRtvIjxSKqSrLLvhcvIZMroP3XCfSOp5U2Rj1vc8svA9L+ipoYn5jHmV8GkVskGAGUXIkjBbby1cpX3PcfGJdeLuB43zRSszlhaIl6ZEgMQ35BknZ3JpPHD+dSWFnKkgGZWBYe6P9nenxgBnMrJeGctBgBwy8UvfT7DUyO3d2UQcBsE6bD/y7jmyEtoxGDESJynG5ymewuXxixYN7aRM1abY/pmaG7Pkvt6XhEYFTcHJ5BfmkFEZY+wopIvJpyZbp8BnH6BReufHVyS/iiYWDl+pJOr+DKZAYd3KeUpAA7ZY1cv8MiKMJhVgdF8GFFhheHw/UI4kIrwfG6aQeGFws6wvjt1qIP2ClAlS4WphfMdMp2CeqyGsuMtsd0at5Uq1LHBNgsa/bWrNlnsiWVZDoyY/ak0jYHDAsLy4jyBDFrpSilUkwzGVMFSmkYyjD7zqyd5pEb2ZeKMbUJxWWAejTe9BTGhqdN0Zk+lVuFmL5+YJeFw4BNCVRXR+0aOlw/FkwFmcaiQWmbjdYr+ENHDq4+O+8/K+2JEtFx55+p6t/kpPFPpPYGsxEE0yuG/bLqm+vNgVzeZ5Vj+trBWkFI+kP2ghyvqduNxvbDGzN4BKYdL+3F/pi5G8eF5Z9BPYJv6XoDNY9pLf3p4j1o7kP5ugftHcj+clxX1dpnby3X7qO34kotOaWHASTyWdoDYtl2+m1vbTZaqy0yPf1BE+qe2CmcAWKYWvEZKthNnX+m7TkcOdHm3YfbYPpJ5/NofXGf8s5Tu2VIgm3BLxjj9dHJWF/j+y2oqtmBy19e5K3ACM8CT0Jb2qcfd72CttYD/kudyu075Q1iIwTtZtavWa27Z1ITuPbtFUyPzvKvTH9t5R8m89dmfqD4I2Xj8aZ9eOe9F9BweK9OyAVeGCcJdtYHU/sQoIIETbDpp5p6/vvCMCYHp3Dj6jjS/HUsEMj7awsjzJloaI1DJ9WrRw/xFSOaxiTBUtbfvCFojNpDXSXZxax7589J9/bglLu8lFvVZx29E9scYZ0RfDlOPUXtp64n6tOY+DppgvCaUxr0rmEwqb5eUy5JcdrmPHNrz/8AZ5OQKIvq+50AAAAASUVORK5CYII=";

var Generic = function Generic(props) {

  var notifyStyle = void 0,
      arrowStyle = {};

  var _props$props = props.props,
      active = _props$props.active,
      notify = _props$props.notify,
      arrow = _props$props.arrow,
      click = _props$props.click;

  console.log(props.props);
  var quantity = props.props.quantity;


  var classes = [style$c['ct-sidePanel']];

  if (active) {
    classes = classes.concat([style$c['ct-sidePanel--active']]);
  }

  if (notify) {
    notifyStyle = {
      backgroundImage: 'url(' + notifyPng + ')',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      height: '56px',
      width: '30px',
      marginTop: 'calc(38px/2)',
      zIndex: '1',
      marginLeft: '2px',
      backgroundSize: '15px'
    };
  }

  if (arrow) {
    arrowStyle = {
      backgroundColor: '#134B96',
      backgroundImage: 'url(' + arrowPng + ')',
      backgroundSize: '12px',
      backgroundPosition: 'center',
      borderRadius: '5px',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      height: '16px',
      width: '20px',
      marginTop: '5px',
      marginLeft: '35px',
      zIndex: '1'
    };
  }
  if (quantity) {
    if (quantity < 10) {
      quantity = ("0" + quantity).slice(-2);
    }
    classes = classes.concat([style$c['ct-sidePanel--quantity']]);
  }

  classes = classes.join(' ');

  return React__default.createElement(
    'div',
    null,
    quantity && React__default.createElement(
      'div',
      { className: [style$c['ct-sidePanel--quantity']] },
      React__default.createElement(
        'h1',
        null,
        quantity
      )
    ),
    arrow && React__default.createElement(
      'div',
      { style: arrowStyle, className: [style$c['ct-sidePanel--arrow']] },
      ' '
    ),
    notify && React__default.createElement(
      'div',
      { style: notifyStyle, className: [style$c['ct-sidePanel--notify']] },
      ' '
    ),
    React__default.createElement(
      'div',
      { onClick: click, className: classes },
      props.children
    )
  );
};

var EventForm = function EventForm(props) {
  return React__default.createElement(
    Generic,
    { props: props },
    React__default.createElement(
      'div',
      null,
      React__default.createElement(EventFormSvg, { css: style$c['EventForm'] })
    )
  );
};

var CommentsAndRemark = function CommentsAndRemark(props) {
  return React__default.createElement(
    Generic,
    { props: props },
    React__default.createElement(
      'div',
      null,
      React__default.createElement(CommentsAndRemarkSvg, { css: style$c['CommentsAndRemark'] })
    )
  );
};

var Attachement = function Attachement(props) {
  return React__default.createElement(
    Generic,
    { props: props },
    React__default.createElement(
      'div',
      null,
      React__default.createElement(AttachementSvg, { css: style$c['Attachement'] })
    )
  );
};

var SuplementalInfo = function SuplementalInfo(props) {
  return React__default.createElement(
    Generic,
    { props: props },
    React__default.createElement(
      'div',
      null,
      React__default.createElement(SuplementalInfoSvg, { css: style$c['SuplementalInfo'] })
    )
  );
};

var LocationOfIntereset = function LocationOfIntereset(props) {
  return React__default.createElement(
    Generic,
    { props: props },
    React__default.createElement(
      'div',
      null,
      React__default.createElement(LocationOfInteresetSvg, { css: style$c['LocationOfIntereset'] })
    )
  );
};

var InformerReturns = function InformerReturns(props) {
  return React__default.createElement(
    Generic,
    { props: props },
    React__default.createElement(
      'div',
      null,
      React__default.createElement(InformerReturnsSvg, { css: style$c['InformerReturns'] })
    )
  );
};

var Agency = function Agency(props) {
  return React__default.createElement(
    Generic,
    { props: props },
    React__default.createElement(
      'div',
      null,
      React__default.createElement(AgencySvg, { css: style$c['Agency'] })
    )
  );
};

var Background = "data:image/png;base64,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";

var StackedIncidents = function StackedIncidents(props) {

  var sectionStyle = {
    backgroundImage: 'url(' + Background + ')',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '40px',
    width: '42px',
    height: '28px',
    position: 'relative'
  };

  return React__default.createElement(
    'div',
    { style: sectionStyle, className: [style$c['ct-StackedEvents']] },
    React__default.createElement(
      'div',
      { onClick: props.click },
      React__default.createElement(
        'h1',
        null,
        props.quantity
      )
    )
  );
};

// export default EventForm

var index = {
  //components
  Button: Button,
  Input: Input,
  Text: Text,
  Textarea: Textarea,
  Dropdown: Dropdown,
  Table: App,
  //containers
  Form: Form,
  FormRow: FormRow,
  Collapsible: Collapsible,
  Row: Row,
  Footer: Footer,
  Container: Container,
  //HOC
  Aux: aux,
  //icons
  EventForm: EventForm,
  CommentsAndRemark: CommentsAndRemark,
  Attachement: Attachement,
  SuplementalInfo: SuplementalInfo,
  LocationOfIntereset: LocationOfIntereset,
  InformerReturns: InformerReturns,
  Agency: Agency,
  StackedIncidents: StackedIncidents
};

module.exports = index;
//# sourceMappingURL=index.js.map
