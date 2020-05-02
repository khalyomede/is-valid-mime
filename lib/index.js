'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var mimeDb = _interopDefault(require('mime-db'));

const isValidMime = (mime) => {
    if (typeof mime !== "string") {
        throw new TypeError("expected isValidMime() parameter 1 to be a string");
    }
    return mime in mimeDb;
};

module.exports = isValidMime;
