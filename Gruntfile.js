module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    ts: {
      all: {
        tsconfig: 'src/tsconfig.json'
      },
      core: {
        tsconfig: 'src/tsconfig.core.json'
      },
      elem: {
        tsconfig: 'src/tsconfig.elem.json'
      },
      anim: {
        tsconfig: 'src/tsconfig.anim.json'
      },
      verifyDefinitionFiles: {
        src: [
          "dist/SavageDOM.d.ts"
        ],
        tsconfig: 'src/tsconfig.json'
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
    uglify: {
      core: {
        files: {
          "dist/SavageDOM.core.min.js": ["dist/SavageDOM.core.js"]
        }
      },
      elem: {
        files: {
          "dist/SavageDOM.elem.min.js": ["dist/SavageDOM.elem.js"]
        }
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
          out: "./docs",
          mode: "file",
          name: "SavageDOM",
          target: 'es6'
        },
        src: ['./src/**/*.ts']
      }
    },
    
    // watch: {
    //   options: {
    //     livereload: true,
    //     spawn: false
    //   },
    //   rebuild: {
    //     tasks: ["src-compile"],
    //     files: ["src/**/*.ts"]
    //   },
    //   tests: {
    //     tasks: ["test-compile"],
    //     files: ["test/**/*.ts"]
    //   }
    // },
    // connect: {
    //   server: {
    //     options: {
    //       port: 9999,
    //       hostname: "*",
    //       base: "",
    //       livereload: true
    //     }
    //   }
    // },
    
    
    clean: {
      tscommand: ["tscommand*.tmp.txt"]
    }
  });

  require("load-grunt-tasks")(grunt);

  grunt.registerTask("compile:all", ["ts:all", "umd:all", "concat:all", "sed:all"]);
  grunt.registerTask("compile:core", ["ts:core", "umd:core", "uglify:core", "concat:core", "sed:core"]);
  grunt.registerTask("compile:elem", ["ts:elem", "umd:elem", "uglify:elem", "concat:elem", "sed:elem"]);
  grunt.registerTask("compile:anim", ["ts:anim", "umd:anim", "concat:anim", "sed:anim"]);

  grunt.registerTask("compile", ["compile:all", "compile:core", "compile:elem", "compile:anim", "clean:tscommand"]);

  grunt.registerTask("default", ["connect", "dev-compile", "watch-silent"]);

  grunt.registerTask("test", ["compile", "test-local"]);
  grunt.registerTask("test-local", ["ts:verifyDefinitionFiles", "lint"]);
  grunt.registerTask("test-sauce", ["connect", "saucelabs-mocha"]);

  grunt.registerTask("watch-silent", function() {
    grunt.log.header = function() {};
    grunt.task.run(["watch"]);
  });

  grunt.registerTask("lint", ["parallelize:tslint"]);

  grunt.registerTask("test-travis", ["compile", "test-local"]);





};