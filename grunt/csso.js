module.exports = {

  build: {
    options: {
      report: 'min'
    },
    files: [{ expand: true, cwd: 'dist/styles', src: ['*.css'], dest: 'dist/styles', ext: '.css'}]
  },
};
