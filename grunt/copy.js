module.exports = {

  build: {
    files: [
      {expand: true, cwd: 'src', src: ['!less', '!js', '!views','fonts/**', 'images/**'], dest: 'dist'}
    ]
  }
};
