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
const default_path_1 = require("../utils/default-path");
const write_file_1 = __importDefault(require("../utils/write-file"));
const react_template_1 = __importDefault(require("./react-template"));
const vue_template_1 = __importDefault(require("./vue-template"));
const isOnRootPath = () => (default_path_1.isFileOnCurrentDirectory('package.json'));
const getFileExtension = ({ vue }) => {
    return vue
        ? 'vue'
        : 'js';
};
const getTemplate = (framework, type) => {
    if (framework === 'react') {
        return react_template_1.default(type);
    }
    if (framework === 'vue') {
        return vue_template_1.default(type);
    }
    throw new Error('could not find path');
};
const isValidBuild = (dest, name) => {
    if (!dest || !name) {
        console.log('Could not create amazing stuff due to some arguments missing: either name or dest');
        return false;
    }
    if (!isOnRootPath()) {
        console.log('Sorry! Run moo-cli on your root directoy (same place where you can find the `package.json` file)');
        return false;
    }
    return true;
};
const createComponentFile = (framework, type, name, dest, options) => {
    const fileTemplate = Mustache.render(getTemplate(framework, type), options);
    write_file_1.default(fileTemplate, name, getFileExtension(options), dest);
};
const createTestFile = (framework, name, dest, options) => {
    const testTemplate = Mustache.render(getTemplate(framework, 'test'), options);
    write_file_1.default(testTemplate, name, 'test.js', dest);
};
exports.default = async (framework, options) => {
    const { name, test, dest, functional } = options;
    if (isValidBuild(dest, name)) {
        const type = functional
            ? 'func'
            : 'comp';
        createComponentFile(framework, type, name, dest, options);
        if (test) {
            createTestFile(framework, name, dest, options);
        }
    }
};
