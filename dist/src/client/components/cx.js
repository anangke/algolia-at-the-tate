"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cx = void 0;
function cx() {
    var classNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classNames[_i] = arguments[_i];
    }
    return classNames.filter(Boolean).join(" ");
}
exports.cx = cx;
