"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ShellJS = __importStar(require("shelljs"));
const default_path_1 = require("./default-path");
const writeFile = (fileContent, fileName, fileExtension, path) => {
    const candidateFileName = `${fileName}.${fileExtension}`;
    const dataPath = `${path}/${fileName}`;
    ShellJS.mkdir('-p', dataPath);
    ShellJS.cd(dataPath);
    ShellJS.echo(fileContent)
        .to(`${candidateFileName}`);
    ShellJS.cd(default_path_1.projectRootPath(dataPath));
    return;
};
exports.default = writeFile;
