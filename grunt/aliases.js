module.exports = {
  'default': ['less:dev', 'autoprefixer:dev', 'processhtml:dev', 'express', 'open', 'watch'],
  'build': ['copy:build', 'uglify:build', 'less:build', 'autoprefixer:build']
};
