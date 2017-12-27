module.exports = function(grunt) {
  "use strict";

  var examples = grunt.file.expand({
    filter: "isFile",
    cwd: "test/examples"
  }, ["*.ts"]).map(function(f) { return f.replace(".ts", ""); });

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    ts: {
      all: {
        tsconfig: "src/tsconfig.json"
      },
      core: {
        tsconfig: "src/tsconfig.core.json"
      },
      elem: {
        tsconfig: "src/tsconfig.elem.json"
      },
      anim: {
        tsconfig: "src/tsconfig.anim.json"
      },
      examples: {
        tsconfig: "test/examples/tsconfig.json"
      },
      verifyDefinitionFiles: {
        src: [
          "dist/SavageDOM.d.ts"
        ],
        tsconfig: "src/tsconfig.json"
      }
    },
    umd: {
      all: {
        src: "dist/SavageDOM.js",
        objectToExport: "SavageDOM"
      },
      core: {
        src: "dist/SavageDOM.core.js",
        objectToExport: "SavageDOM"
      },
      elem: {
        src: "dist/SavageDOM.elem.js",
        objectToExport: "SavageDOM"
      },
      anim: {
        src: "dist/SavageDOM.anim.js",
        objectToExport: "SavageDOM"
      }
    },
    concat: {
      all: {
        src: ["HEADER.txt", "dist/SavageDOM.js"],
        dest: "dist/SavageDOM.js"
      },
      core: {
        src: ["HEADER.txt", "dist/SavageDOM.core.js"],
        dest: "dist/SavageDOM.core.js"
      },
      elem: {
        src: ["HEADER.txt", "dist/SavageDOM.elem.js"],
        dest: "dist/SavageDOM.elem.js"
      },
      anim: {
        src: ["HEADER.txt", "dist/SavageDOM.anim.js"],
        dest: "dist/SavageDOM.anim.js"
      }
    },
    sed: {
      all: {
        pattern: "@VERSION",
        replacement: "<%= pkg.version %>",
        path: "dist/SavageDOM.js"
      },
      core: {
        pattern: "@VERSION",
        replacement: "<%= pkg.version %>",
        path: "dist/SavageDOM.core.js"
      },
      elem: {
        pattern: "@VERSION",
        replacement: "<%= pkg.version %>",
        path: "dist/SavageDOM.elem.js"
      },
      anim: {
        pattern: "@VERSION",
        replacement: "<%= pkg.version %>",
        path: "dist/SavageDOM.anim.js"
      }
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
        },
        src: ["src"]
      }
    },
    "compile-handlebars": {
      examples: {
        files: [{
          src: "test/examples.hbs",
          dest: "docs/examples.html"
        }],
        templateData: { 
          examples: examples
        }
      }
    },
    shell: {
      examples: {
        command: "phantomjs render-examples.js",
        options: {
          execOptions: {
            cwd: "test"
          }
        }
      }
    },
    clean: {
      tscommand: ["tscommand*.tmp.txt"],
      examples: ["docs/examples.html", "docs/examples/*"],
      docs: ["docs/*"]
    }
  });

  require("load-grunt-tasks")(grunt);

  grunt.registerTask("compile:all", ["ts:all", "umd:all", "concat:all", "sed:all", "clean:tscommand"]);
  grunt.registerTask("compile:core", ["ts:core", "umd:core", "concat:core", "sed:core", "clean:tscommand"]);
  grunt.registerTask("compile:elem", ["ts:elem", "umd:elem", "concat:elem", "sed:elem", "clean:tscommand"]);
  grunt.registerTask("compile:anim", ["ts:anim", "umd:anim", "concat:anim", "sed:anim", "clean:tscommand"]);

  grunt.registerTask("compile", ["compile:all", "compile:core", "compile:elem", "compile:anim", "clean:tscommand"]);

  grunt.registerTask("examples", ["clean:examples", "ts:examples", "shell:examples", "compile-handlebars:examples", "clean:tscommand"]);

  grunt.registerTask("docs", ["clean:docs", "typedoc:build"]);

  grunt.registerTask("lint", ["parallelize:tslint"]);

  grunt.registerTask("check", ["lint", "compile", "ts:verifyDefinitionFiles"]);

  grunt.registerTask("prepublish", ["check", "docs"]);

};