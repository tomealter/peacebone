module.exports = function(grunt) {
    
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
  
      sass_globbing: {
        default_options: {
          files: {
              'sass/sass-globbing/_mixins.scss': 'sass/partials/mixins/*.scss',
              'sass/sass-globbing/_variables.scss': 'sass/partials/variables/*.scss',
              'sass/sass-globbing/_base.scss': 'sass/partials/base/**/*.scss',
              'sass/sass-globbing/_layout.scss': 'sass/partials/layout/**/*.scss',
              'sass/sass-globbing/_components.scss': 'sass/partials/components/**/*.scss'
          },
          options: {
              useSingleQuotes: false,
              quiet: true
          }
        }
      },
      sass: {
        app: {
          files: [{
          expand: true,
          cwd: 'sass',
          src: ['styles.scss'],
          dest: 'css',
          ext: '.css'
          }]
        },
        options: {
          sourceMap: true,
          outputStyle: 'nested',
          includePaths: ['node_modules/breakpoint-sass/stylesheets'],
          quiet: true
        }
      },
      watch: {
        css: {
          files: 'sass/partials/**/*.scss',
          tasks: ['sass_globbing', 'sass'],
          options: {
            livereload: true,
          },
        },
      }
    });
  
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-sass-globbing');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    grunt.registerTask('default', [
      'sass_globbing',
      'sass',
      'watch'
    ]);
  
  };