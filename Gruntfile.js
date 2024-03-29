'use strict';

module.exports = function(grunt) {
  var path = require('path');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('amber-dev');

  // Default task.
  grunt.registerTask('default', ['amberc:all']);
  grunt.registerTask('test', ['amberc:test_runner', 'execute:test_runner', 'clean:test_runner']);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    // pkg: grunt.file.readJSON(''),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // task configuration
    amberc: {
      options: {
        amber_dir: path.join(__dirname, "bower_components", "amber"),
        library_dirs: ['src'],
        closure_jar: ''
      },
      all: {
        src: [
            'src/MyFirstAmberApp.st', // list all sources in dependency order
            'src/MyFirstAmberApp-Tests.st' // list all tests in dependency order
        ],
        amd_namespace: 'amber-myfirstamberapp',
        libraries: ['SUnit', 'Web']
      },
      test_runner: {
        src: ['node_modules/amber-dev/lib/Test.st'],
        libraries: [
          /* add dependencies packages here */
          'MyFirstAmberApp', /* add other code-to-test packages here */
          'SUnit',
          'MyFirstAmberApp-Tests' /* add other test packages here */
        ],
        main_class: 'NodeTestRunner',
        output_name: 'test_runner'
      }
    },

    execute: {
      test_runner: {
        src: ['test_runner.js']
      }
    },

    clean: {
      test_runner: ['test_runner.js']
    }
  });

};
