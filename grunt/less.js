module.exports = {

  dev: {
    options: {
      sourceMap: false,
    },
    files: [{expand: true, cwd: 'src/styles', src: ['*.less'], dest: '.tmp/styles', ext: '.css'}]
  },

  build: {
    options: {
      compress: true
    },
    files: [{expand: true, cwd: 'src/styles', src: ['*.less'], dest: 'dist/styles', ext: '.css'}]
  }
};
