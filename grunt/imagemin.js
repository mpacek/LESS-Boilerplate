module.exports = {

  build: {
    options: {
      optimizationLevel: 3
    },
    files: [{expand: true, cwd: 'src/images', src: ['**/*.{png,jpg,gif}'], dest: 'dist/images'}]
  }
};
