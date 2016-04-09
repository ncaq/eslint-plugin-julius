"use strict";

var rule = require("../lib/index"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("index", rule, {
    valid: [
        "var appHost = #{String $ appHost $ compileTimeAppSettings}",
        "var homeR   = @{HomeR}"
    ],

    invalid: [
    ]
});
