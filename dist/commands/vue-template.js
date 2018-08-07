"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comp_1 = __importDefault(require("../templates/vue/comp"));
const test_1 = __importDefault(require("../templates/vue/test"));
exports.getTemplate = (type) => {
    if (type === 'comp') {
        return comp_1.default;
    }
    return test_1.default;
};
exports.default = exports.getTemplate;
