module.exports = {

  build: {
    files: [
      {expand: true, cwd: 'src', src: ['!styles', '!scripts', '!views','fonts/**', 'images/**'], dest: 'dist'}
    ]
  }
};
