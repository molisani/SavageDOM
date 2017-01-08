module.exports = function(grunt) {
  "use strict";

  const FILES_TO_COMMIT = [
    "dist/vektor.js",
    "dist/vektor.min.js",
    "dist/vektor.d.ts",
    "bower.json",
    "package.json"
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    bump: {
      options: {
        files: ["package.json", "bower.json"],
        updateConfigs: ["pkg"],
        commit: false,
        createTag: false,
        push: false,
        prereleaseName: "rc"
      }
    },
    umd: {
      all: {
        src: "dist/vektor.js",
        objectToExport: "vektor"
      }
    },
    concat: {
      header: {
        src: ["HEADER.txt", "dist/vektor.js"],
        dest: "dist/vektor.js"
      }
    },
    ts: {
      dev: {
        tsconfig: true
      },
      test: {
        src: ["test/**/*.ts"],
        out: "test/tests.js",
        options: {
          target: "es6",
          sourceMap: false,
          noImplicitAny: false,
          noImplicitThis: true,
          strictNullChecks: true,
          alwaysStrict: true,
          declaration: false,
          removeComments: false
        }
      },
      verifyDefinitionFiles: {
        src: [
          "dist/vektor.d.ts"
        ],
        tsconfig: true
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
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      rebuild: {
        tasks: ["src-compile"],
        files: ["src/**/*.ts"]
      },
      tests: {
        tasks: ["test-compile"],
        files: ["test/**/*.ts"]
      }
    },
    connect: {
      server: {
        options: {
          port: 9999,
          hostname: "*",
          base: "",
          livereload: true
        }
      }
    },
    clean: {
      tscommand: ["tscommand*.tmp.txt"]
    },
    sed: {
      versionNumber: {
        pattern: "@VERSION",
        replacement: "<%= pkg.version %>",
        path: "dist/vektor.js"
      }
    },
    gitcommit: {
      version: {
        options: {
          message: "Release version <%= pkg.version %>"
        },
        files: {
          src: FILES_TO_COMMIT
        }
      },
      built: {
        options: {
          message: "Update built files"
        },
        files: {
          src: FILES_TO_COMMIT
        }
      }
    },
    uglify: {
      main: {
        files: {
          "dist/vektor.min.js": ["dist/vektor.js"]
        }
      }
    },
    "saucelabs-mocha": {
      all: {
        options: {
          urls: ["http://127.0.0.1:9999/test/tests.html"],
          testname: "Vektor Unit Tests",
          pollInterval: 5000,
          statusCheckAttempts: 60,
          maxRetries: 1,
          browsers: [
            {
              browserName: "firefox",
              platform: "linux"
            },
            {
              browserName: "chrome",
              platform: "linux"
            },
            {
              browserName: "internet explorer",
              version: "9",
              platform: "WIN7"
            },
            {
              browserName: "safari",
              version: "8.0",
              platform: "OS X 10.10"
            }
          ]
        }
      }
    }
  });

  require("load-grunt-tasks")(grunt);

  grunt.registerTask("test-compile", ["ts:test"]);
  grunt.registerTask("src-compile", ["ts:dev", "generateJS"]);
  grunt.registerTask("dev-compile", ["src-compile", "test-compile", "clean:tscommand"]);
  grunt.registerTask("generateJS", ["umd:all", "concat:header", "sed:versionNumber"]);

  grunt.registerTask("release:patch", ["bump:patch", "dist-compile", "gitcommit:version"]);
  grunt.registerTask("release:minor", ["bump:minor", "dist-compile", "gitcommit:version"]);
  grunt.registerTask("release:major", ["bump:major", "dist-compile", "gitcommit:version"]);

  grunt.registerTask("dist-compile", ["test", "uglify"]);

  grunt.registerTask("commitjs", ["dist-compile", "gitcommit:built"]);
  grunt.registerTask("default", ["connect", "dev-compile", "watch-silent"]);

  grunt.registerTask("test", ["dev-compile", "test-local"]);
  grunt.registerTask("test-local", ["ts:verifyDefinitionFiles", "lint"]);
  grunt.registerTask("test-sauce", ["connect", "saucelabs-mocha"]);

  grunt.registerTask("watch-silent", function() {
    grunt.log.header = function() {};
    grunt.task.run(["watch"]);
  });

  grunt.registerTask("lint", ["parallelize:tslint"]);

  if (process.env.SAUCE_USERNAME) {
    grunt.registerTask("test-travis", ["dev-compile", "test-local", "test-sauce"]);
  } else {
    grunt.registerTask("test-travis", ["dev-compile", "test-local"]);
  }






};