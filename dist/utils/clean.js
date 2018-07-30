"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cleanArgs(cmd) {
    const args = {};
    cmd.options.forEach((o) => {
        const key = o.long.replace(/^--/, '');
        if (typeof cmd[key] !== 'function') {
            args[key] = cmd[key];
        }
    });
    return args;
}
exports.default = cleanArgs;
