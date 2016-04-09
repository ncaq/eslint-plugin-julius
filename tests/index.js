"use strict";

var assert = require("assert");
var CLIEngine = require("eslint").CLIEngine;

var cli = new CLIEngine({
    extensions: ["julius"],
    useEslintrc: false
});

var index = require("../lib/index.js");
cli.addPlugin("eslint-plugin-julius", index);

function cliReport(code, filename) {
    it(code, function() {
        var report = cli.executeOnText(code, filename);
        assert.equal(report.errorCount, 0, JSON.stringify(report, null, 4));
    });
}

cliReport("var appHost = #{String $ appHost $ compileTimeAppSettings}", "appHost.julius");
cliReport("var homeR = @{HomeR}", "homeR.julius");
