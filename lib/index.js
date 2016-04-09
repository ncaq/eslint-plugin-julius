/**
 * @fileoverview yesod shakespeare julius rulus for ESLint
 * @author ncaq <ncaq@ncaq.net>
 * @copyright 2016 ncaq <ncaq@ncaq.net>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import processors
module.exports = {
    processors: {
        ".julius": {
            preprocess: function(text) {
                return [text.replace(/[#@^_]{[^}]+}/g, '"julius_placeholder"')];
            },
            postprocess: function(messages) {
                return messages[0];
            }
        }
    }
};
