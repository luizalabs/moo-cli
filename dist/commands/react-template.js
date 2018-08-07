"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comp_js_1 = __importDefault(require("../templates/react/comp.js"));
const func_js_1 = __importDefault(require("../templates/react/func.js"));
const test_js_1 = __importDefault(require("../templates/react/test.js"));
exports.getTemplate = (type) => {
    return type === 'comp'
        ? comp_js_1.default
        : type === 'test'
            ? func_js_1.default
            : test_js_1.default;
};
exports.default = exports.getTemplate;
