module.exports = {

	build: {
		options: {
			banner: '/*! <%= package.name %> for <%= package.description %> ( v<%= package.version %> ) ' +
			'<%= grunt.template.today("dd-mmm-yyyy") %> */'
		},
		src: [
			"src/js/vendors/*.js",
			"src/js/helpers/*.js",
			"src/js/modules/*.js",
			"src/js/*.js"
		],
		dest: 'dist/js/scripts.min.js'
	}
};
