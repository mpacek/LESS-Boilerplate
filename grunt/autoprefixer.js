module.exports = {

  options: {
    browsers: ['last 2 versions', 'ie 9'],
    map: true
  },

  dev: {
    src: '.tmp/css/*.css'
  },

  build: {
    options: {
      map: false
    },
    src: 'dist/css/*.css'
  }
};
