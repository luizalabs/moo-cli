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
const writeFile_1 = __importDefault(require("../utils/writeFile"));
const TEMPLATE_PATH = '../templates';
const getFileExtension = ({ vue }) => {
    return vue
        ? 'vue'
        : 'js';
};
const getTemplate = (templatePath, framework, type, append = '-comp') => {
    return require(`${templatePath}/${framework}/${type}${append}`).default;
};
exports.default = async (framework, options) => {
    const { name, test, dest } = options;
    if (!dest || !name) {
        console.log('Could not create amazing stuff due to some arguments missing: either name or dest');
        return;
    }
    const fileTemplate = Mustache.render(getTemplate(TEMPLATE_PATH, framework, 'class'), options);
    writeFile_1.default(fileTemplate, name, getFileExtension(options), dest);
    if (test) {
        const testTemplate = Mustache.render(getTemplate(TEMPLATE_PATH, framework, 'test'), options);
        writeFile_1.default(testTemplate, name, 'test.js', dest);
    }
};
