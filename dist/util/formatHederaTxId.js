"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatHederaTxId = void 0;
const formatHederaTxId = (str) => {
    var _a;
    let txId = str.replace(`@`, `-`).trim();
    while (((_a = txId.match(/\./g)) !== null && _a !== void 0 ? _a : []).length > 2) {
        const index = txId.lastIndexOf(`.`);
        const formattedTxId = `${txId.slice(0, index)}-${txId.slice(index + 1).padStart(9, `0`)}`;
        txId = formattedTxId;
    }
    return txId;
};
exports.formatHederaTxId = formatHederaTxId;
