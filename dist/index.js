Object.defineProperty(exports, '__esModule', { value: true });

var material = require('@mui/material');
var React = require('react');

/******************************************************************************
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
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var TagInput = function (props) {
    var tags = props.tags, setTags = props.setTags, _a = props.initialValue, initialValue = _a === void 0 ? "" : _a, onBlur = props.onBlur, onFocus = props.onFocus, _b = props.innerRef, innerRef = _b === void 0 ? null : _b, _c = props.inputProps, inputProps = _c === void 0 ? {} : _c, _d = props.chipProps, chipProps = _d === void 0 ? {} : _d, _e = props.allowBackspace, allowBackspace = _e === void 0 ? false : _e, _f = props.allowDuplicate, allowDuplicate = _f === void 0 ? false : _f;
    var _g = React.useState(tags), userTags = _g[0], setUserTags = _g[1];
    var _h = React.useState(initialValue), inputValue = _h[0], setInputValue = _h[1];
    React.useEffect(function () {
        setUserTags(tags);
    }, [tags]);
    var handleDelete = function (index) {
        var newArray = __spreadArray([], userTags, true);
        newArray.splice(index, 1);
        setUserTags(newArray);
        setTags(newArray);
    };
    var handleChange = function (e) {
        var value = e.target.value;
        setInputValue(value);
    };
    var handleKeyDown = function (e) {
        var value = e.target.value;
        // If the enter key is clicked on
        if (e.key === "Enter" && value) {
            var duplicate = userTags.indexOf(value.trim());
            if (!allowDuplicate && duplicate !== -1) {
                setInputValue("");
                return;
            }
            if (!value.replace(/\s/g, "").length)
                return;
            e.persist();
            var newList = __spreadArray([], userTags, true);
            newList.push(value.trim());
            setUserTags(newList);
            setTags(newList);
            setInputValue("");
        }
        // If the backspace key is clicked on
        if (!allowBackspace &&
            userTags.length &&
            !value.length &&
            e.key === "Backspace") {
            var index = userTags.length - 1;
            handleDelete(index);
        }
    };
    return (React.createElement("div", null,
        React.createElement(material.FormControl, { style: {
                gap: "10px",
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                border: "2px solid lightgray",
                padding: "4px",
                borderRadius: "4px",
            } },
            React.createElement("div", { style: {
                    gap: "6px",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                } }, userTags.map(function (item, index) { return (React.createElement(material.Chip, __assign({ key: index, size: "small", onDelete: function () { return handleDelete(index); }, label: item }, chipProps))); })),
            React.createElement(material.Input, __assign({ value: inputValue, onChange: handleChange, onKeyDown: handleKeyDown, onBlur: onBlur, onFocus: onFocus, inputRef: innerRef }, inputProps)))));
};

exports.default = TagInput;
//# sourceMappingURL=index.js.map
