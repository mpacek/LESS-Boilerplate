module.exports = {

  dev: {
    options: {
      browsers: ['last 2 versions', 'ie 9', 'iOS 7'],
      map: true
    },
    src: '.tmp/styles/*.css'
  },

  build: {
    options: {
      browsers: ['last 2 versions', 'ie 9', 'iOS 7'],
      map: false
    },
    src: 'dist/styles/*.css'
  }
};
