module.exports = function(grunt) {
  "use strict";

  const webpackConfig = require('./webpack.config');

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    ts: {
      lib: {
        tsconfig: {
          tsconfig: "configs/tsconfig.lib.json",
          passThrough: true,
        },
      },
      test: {
        tsconfig: {
          tsconfig: "configs/tsconfig.test.json",
          passThrough: true,
        },
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
    replace: {
      all: {
        options: {
          patterns: [
            {
              match: "version",
              replacement: "<%= pkg.version %>",
            },
          ],
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ["dist/savagedom.js"],
            dest: "dist/"
          }
        ],
      },
    },
    mochaTest: {
      all: {
        options: {
          reporter: process.env.CI ? "tap" : "dot",
        },
        src: ["lib-test/**/*.spec.js"],
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
          project: "configs/tsconfig.lib.json",
          gitRevision: "master",
          ignoreCompilerErrors: true,
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

  grunt.registerTask("lint", ["parallelize:tslint"]);

  grunt.registerTask("build", ["ts:lib", "webpack:all", "concat:all", "replace:all", "clean:tscommand"]);

  grunt.registerTask("test", ["ts:test", "mochaTest:all"]);

  grunt.registerTask("docs", ["clean:docs", "typedoc:build"]);

  grunt.registerTask("prepublish", ["lint", "test", "build", "docs"]);

};