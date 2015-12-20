module.exports = {

  build: {
    files: [
      {expand: true, cwd: 'src', src: ['!styles', '!scripts', 'fonts/**', 'images/*.svg', '*'], dest: 'dist'}
    ]
  }
};
