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
        tsconfig: "tsconfig.json"
      },
      amd: {
        tsconfig: "tsconfig.amd.json"
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
        src: "dist/savagedom.amd.js",
        dest: "dist/savagedom.umd.js",
        objectToExport: "SavageDOM",
        template: "unit",
      },
    },
    concat: {
      all: {
        src: ["HEADER.txt", "dist/savagedom.umd.js"],
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

  grunt.registerTask("build", ["ts:amd", "umd:all", "concat:all", "sed:all", "clean:tscommand"]);

  grunt.registerTask("examples", ["clean:examples", "ts:examples", "shell:examples", "compile-handlebars:examples", "clean:tscommand"]);

  grunt.registerTask("docs", ["clean:docs", "typedoc:build"]);

  grunt.registerTask("lint", ["parallelize:tslint"]);

  grunt.registerTask("check", ["lint", "build"]);

  grunt.registerTask("prepublish", ["check", "docs"]);

};