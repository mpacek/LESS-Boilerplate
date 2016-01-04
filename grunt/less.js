module.exports = {

  dev: {
    options: {
      compress: false,
      relativeUrls: false,
      banner: '/*! <%= package.name %> for <%= package.description %> ( v<%= package.version %> ) ' +
      '<%= grunt.template.today("dd-mmm-yyyy") %> */'
    },
    files: [{
      src: 'src/less/styles.less',
      dest: '.tmp/css/styles.css'
    }, {
      src: 'src/less/print.less',
      dest: '.tmp/css/print.css'
    }]
  },

  build: {
    options: {
      compress: true,
      relativeUrls: false,
      banner: '/*! <%= package.name %> for <%= package.description %> ( v<%= package.version %> ) ' +
      '<%= grunt.template.today("dd-mmm-yyyy") %> */'
    },
    files: [{
      src: 'src/less/styles.less',
      dest: 'dist/css/styles.min.css'
    }, {
      src: 'src/less/print.less',
      dest: 'dist/css/print.min.css'
    }]
  }
};
