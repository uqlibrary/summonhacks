'use strict';

module.exports = function (grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // configurable paths
  var hacksConfig = {
    app: 'src',
    dist: 'dist'
  };

  try {
    hacksConfig.aws_s3 = require('./aws.json').aws_s3 || {};
    hacksConfig.invalidate_cloudfront = require('./aws.json').invalidate_cloudfront || {};
  } catch (e) {
  }

  grunt.initConfig({
    hacksConfig: hacksConfig,
    watch: {
      compass: {
        files: ['<%= hacksConfig.app %>/*.{scss,sass}'],
        tasks: ['compass']
      }
    },
    compass: {
      options: {
        sassDir: '<%= hacksConfig.app %>',
        cssDir: '<%= hacksConfig.app %>'
      },
      dist: {}
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['*.js']
    },
    clean: {
      dist: ['.tmp', '<%= hacksConfig.dist %>/*']
    },
    copy: {
      dist: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= hacksConfig.app %>',
            dest: '<%= hacksConfig.dist %>',
            src: ['*.{css,js,png,jpg,jpeg,gif,webp}', '!Gruntfile.js']
          }
        ]
      }
    },
    cssmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= hacksConfig.dist %>',
          src: '*.css',
          dest: '<%= hacksConfig.dist %>',
          ext: '.css'
        }]
      }
    },
    uglify: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= hacksConfig.dist %>',
          src: '*.js',
          dest: '<%= hacksConfig.dist %>',
          ext: '.js'
        }]
      }
    },
    invalidate_cloudfront: {
      options: {
        key: '<%= hacksConfig.invalidate_cloudfront.options.key %>',
        secret: '<%= hacksConfig.invalidate_cloudfront.options.secret %>',
        region: '<%= hacksConfig.invalidate_cloudfront.options.region %>',
        distribution: '<%= hacksConfig.invalidate_cloudfront.options.distribution %>'
      },
      production: {
        files: [{
          expand: true,
          cwd: '<%= hacksConfig.dist %>',
          src: '*.{css,js,png,jpg,jpeg,gif,webp}',
          filter: 'isFile',
          dest: '<%= hacksConfig.aws_s3.options.dest %>'
        }]
      }
    },
    aws_s3: {
      options: {
        accessKeyId: '<%= hacksConfig.aws_s3.options.accessKeyId %>',
        secretAccessKey: '<%= hacksConfig.aws_s3.options.secretAccessKey %>',
        region: '<%= hacksConfig.aws_s3.options.region %>',
        concurrency: 5 // 5 simultaneous upload
      },
      production: {
        options: {
          bucket: '<%= hacksConfig.aws_s3.options.bucket %>'
        },
        files: [{
          expand: true,
          cwd: '<%= hacksConfig.dist %>',
          src: '*.{css,js,png,jpg,jpeg,gif,webp}',
          dest: '<%= hacksConfig.aws_s3.options.dest %>'
        }]
      }
    }
  });

  grunt.registerTask('deploy', [
    'clean:dist',
    'compass:dist',
    'jshint',
    'copy',
    'uglify',
    'cssmin:dist',
    'aws_s3:production',
    'invalidate_cloudfront'
  ]);

  grunt.registerTask('default', ['jshint', 'watch']);
};