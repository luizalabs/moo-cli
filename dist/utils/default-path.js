"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const shelljs_1 = require("shelljs");
const resolve = (from, to) => path.resolve(from, to);
const ROOT_PATH = resolve(process.cwd(), './');
exports.default = (to) => path.relative(ROOT_PATH, to);
exports.isFileOnCurrentDirectory = (file) => (Boolean(shelljs_1.ls('./*.json').filter((el) => el.toLowerCase().indexOf(file.toLowerCase()) !== -1).length));
exports.pathInSrc = (to) => (resolve(ROOT_PATH, `src/${to}`));
exports.projectRootPath = (currentPath) => (currentPath.split('/').reduce((acc) => path.join(acc, '..'), ''));
