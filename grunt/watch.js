module.exports = {

  styles: {
    files: ['src/styles/**/*'],
    tasks: ['less:dev', 'autoprefixer:dev'],
    options: {
      livereload: true
    }
  },

  processhtml: {
    files: ['src/views/**/*.html'],
    tasks: ['processhtml:dev'],
    options: {
      livereload: true
    }
  },

  other: {
    files: [
      'src/*.{ico,png,txt,.htaccess}',
      'src/fonts/**/*',
      'src/images/**/*'
    ],
    options: {
      livereload: true
    }
  }
};
