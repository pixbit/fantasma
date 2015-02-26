'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('bower.json'),

    /**
     * Project Variables
     */
    assets: {
      prism: 'assets/_components/prism'
      ,sass: 'assets/sass'
      ,css: 'assets/css'
      ,js: 'assets/js'
    }

    ,sass: {
      dist: {
        options: {
          style: 'compact'
        },
        files: {
           '<%= assets.css %>/screen.css' : '<%= assets.sass %>/screen.scss'
           ,'<%= assets.css %>/prism-custom.css' : '<%= assets.sass %>/prism-custom.scss'
        }
      }
    }

    ,concat: {

      all_css:{
        src: [
          '<%= project.theme_css %>/normalize.css',
          '<%= project.infinitypush %>/jquery.ma.infinitypush.css',
          '<%= project.theme_css %>/minimal-playbook.css'
        ],
        dest: '<%= project.theme_css %>/minimal.css'
      }

      ,all_js:{
        src: [
          '<%= project.infinitypush %>/jquery.ma.infinitypush.js',
          '<%= project.fitvids %>/jquery.fitvids.js',
          '<%= project.theme_js %>/minimal-playbook.js'
        ],
        dest: '<%= project.theme_js %>/minimal.js'
      }

    } // concat


    ,copy: {
      prism_css: {
        src: "<%= assets.prism %>/themes/prism.css",
        dest: "<%= assets.css %>/prism.css"
      }

      ,prism_autolinker: {
        src: "<%= assets.prism %>/plugins/autolinker/prism-autolinker.css",
        dest: "<%= assets.css %>/prism-autolinker.css"
      }

      ,prism_line_numbers: {
        src: "<%= assets.prism %>/plugins/line-numbers/prism-line-numbers.css",
        dest: "<%= assets.css %>/prism-line-numbers.css"
      }

      ,prism_line_highlight: {
        src: "<%= assets.prism %>/plugins/line-highlight/prism-line-highlight.css",
        dest: "<%= assets.css %>/prism-line-highlight.css"
      }
    } // copy

    ,watch: {

      sass: {
        files: [
          '<%= project.theme_css %>/*.scss'
        ],
        tasks: [
          'sass',
          'concat:all_css'
        ],
        options: {
          livereload: true
        }
      }

      ,js:{
        files: [
          '<%= project.theme_js %>/minimal-playbook.js'
        ],
        tasks: [
          'concat:all_js'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy'); // npm install grunt-contrib-copy --save-dev
  grunt.loadNpmTasks('grunt-contrib-sass'); // npm install grunt-contrib-sass --save-dev
  grunt.loadNpmTasks('grunt-contrib-watch'); // npm install grunt-contrib-watch --save-dev
  grunt.loadNpmTasks('grunt-contrib-concat'); // npm install grunt-contrib-concat --save-dev

  grunt.registerTask('setup', [
    'copy'
    // ,'concat'
    // ,'watch'
  ]);

  grunt.registerTask('default', [
    'sass'
    // ,'concat'
    // ,'watch'
  ]);
}
