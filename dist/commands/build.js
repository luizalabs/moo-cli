"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mustache = __importStar(require("mustache"));
const comp_js_1 = __importDefault(require("../templates/react/comp.js"));
const func_js_1 = __importDefault(require("../templates/react/func.js"));
const test_js_1 = __importDefault(require("../templates/react/test.js"));
const write_file_1 = __importDefault(require("../utils/write-file"));
const getFileExtension = ({ vue }) => {
    return vue
        ? 'vue'
        : 'js';
};
const getTemplate = (framework, type) => {
    if (framework === 'react') {
        return type === 'comp'
            ? comp_js_1.default
            : comp_js_1.default === 'test'
                ? func_js_1.default
                : test_js_1.default;
    }
    throw new Error('could not find path');
};
exports.default = async (framework, options) => {
    const { name, test, dest, functional } = options;
    if (!dest || !name) {
        console.log('Could not create amazing stuff due to some arguments missing: either name or dest');
        return;
    }
    const type = functional
        ? 'func'
        : 'comp';
    const fileTemplate = Mustache.render(getTemplate(framework, type), options);
    write_file_1.default(fileTemplate, name, getFileExtension(options), dest);
    if (test) {
        const testTemplate = Mustache.render(getTemplate(framework, 'test'), options);
        write_file_1.default(testTemplate, name, 'test.js', dest);
    }
};
