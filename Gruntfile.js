'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('bower.json'),

    /**
     * Project Variables
     */
    assets: {
      prism: 'assets/_components/prism'
      ,menuzord: 'assets/_components/menuzord'
      ,hovereffects: 'assets/_components/HoverEffectIdeas'
      ,sass: 'assets/sass'
      ,css: 'assets/css'
      ,fonts: 'assets/fonts'
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
           ,'<%= assets.css %>/menuzord-custom.css' : '<%= assets.sass %>/menuzord-custom.scss'
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
      prism_js: {
        src: "<%= assets.prism %>/prism.js",
        dest: "<%= assets.js %>/prism.js"
      }

      ,prism_components_js: {
        expand: true,
        flatten: true,
        src: ["<%= assets.prism %>/components/*"],
        dest: "<%= assets.js %>/prism/",
        filter: 'isFile'
      }

      ,prism_plugins_js: {
        expand: true,
        flatten: true,
        src: [
          "<%= assets.prism %>/plugins/autolinker/prism-autolinker.js"
          ,"<%= assets.prism %>/plugins/line-numbers/prism-line-numbers.js"
          ,"<%= assets.prism %>/plugins/line-highlight/prism-line-highlight.js"
        ],
        dest: "<%= assets.js %>/prism/",
        filter: 'isFile'
      }

      ,prism_css: {
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

      ,menuzord_css: {
        src: "<%= assets.menuzord %>/css/menuzord.css",
        dest: "<%= assets.css %>/menuzord.css"
      }

      ,menuzord_js: {
        src: "<%= assets.menuzord %>/js/menuzord.js",
        dest: "<%= assets.js %>/menuzord.js"
      }

      ,hovereffects_css: {
        src: "<%= assets.hovereffects %>/css/set1.css",
        dest: "<%= assets.css %>/hovereffects.css"
      }
    } // copy

    ,watch: {

      sass: {
        files: [
          '**/*/*.scss'
        ],
        tasks: [
          'sass'//,
          // 'concat:all_css'
        ],
        options: {
          livereload: 35729
        }
      }

      ,hbs: {
        files: [
          '**/*/*.hbs'
        ],
        options: {
          livereload: 35729
        }
      }

      // ,js:{
      //   files: [
      //     '<%= project.theme_js %>/minimal-playbook.js'
      //   ],
      //   tasks: [
      //     'concat:all_js'
      //   ]
      // }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('setup', [
    'copy'
    // ,'concat'
    // ,'watch'
  ]);

  grunt.registerTask('default', [
    'sass'
    // ,'concat'
    ,'watch'
  ]);
}
