module.exports = {

  build: {
    files: [
      {expand: true, cwd: 'src', src: ['fonts/**/*', 'favicon.ico'], dest: 'dist'}
    ]
  }
};
