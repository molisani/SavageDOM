module.exports = function(grunt) {
  "use strict";

  const webpackConfig = require('./webpack.config');

  var examples = grunt.file.expand({
    filter: "isFile",
    cwd: "test/examples"
  }, ["*.ts"]).map(function(f) { return f.replace(".ts", ""); });

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    ts: {
      lib: {
        tsconfig: "tsconfig.json"
      },
    },
    webpack: {
      all: webpackConfig,
    },
    concat: {
      all: {
        src: ["HEADER.txt", "dist/savagedom.js"],
        dest: "dist/savagedom.js"
      },
    },
    sed: {
      all: {
        pattern: "@VERSION",
        replacement: "<%= pkg.version %>",
        path: "dist/savagedom.js"
      },
    },
    tslint: {
      options: {
        configuration: grunt.file.readJSON("tslint.json")
      },
      all: {
        src: ["src/**/*.ts", "test/**/*.ts"]
      }
    },
    parallelize: {
      tslint: {
        all: 4
      }
    },
    typedoc: {
      build: {
        options: {
          out: "docs",
          mode: "file",
          name: "SavageDOM",
          target: "ES2015",
          project: "tsconfig.json",
          gitRevision: "master",
        },
        src: ["src"]
      }
    },
    clean: {
      tscommand: ["tscommand*.tmp.txt"],
      examples: ["docs/examples.html", "docs/examples/*"],
      docs: ["docs/*"]
    }
  });

  require("load-grunt-tasks")(grunt);

  grunt.registerTask("build", ["ts:lib", "webpack:all", "concat:all", "sed:all", "clean:tscommand"]);

  grunt.registerTask("docs", ["clean:docs", "typedoc:build"]);

  grunt.registerTask("lint", ["parallelize:tslint"]);

  grunt.registerTask("check", ["lint", "build"]);

  grunt.registerTask("prepublish", ["check", "docs"]);

};