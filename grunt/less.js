module.exports = {

  dev: {
    options: {
      compress: false,
      relativeUrls: false,
      banner: '/*! <%= package.name %> for <%= package.description %> ( v<%= package.version %> ) ' +
      '<%= grunt.template.today("dd-mmm-yyyy") %> */'
    },
    files: [{
      src: 'src/styles/styles.less',
      dest: '.tmp/styles/styles.css'
    }, {
      src: 'src/styles/print.less',
      dest: '.tmp/styles/print.css'
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
      src: 'src/styles/styles.less',
      dest: 'dist/styles/styles.min.css'
    }, {
      src: 'src/styles/print.less',
      dest: 'dist/styles/print.min.css'
    }]
  }
};
