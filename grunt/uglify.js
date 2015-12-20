module.exports = {

	build: {
		options: {
			banner: '/*! <%= package.name %> for <%= package.description %> ( v<%= package.version %> ) ' +
			'<%= grunt.template.today("dd-mmm-yyyy") %> */'
		},
		src: [
			"src/scripts/vendors/*.js",
			"src/scripts/helpers/*.js",
			"src/scripts/modules/*.js",
			"src/scripts/*.js"
		],
		dest: 'dist/scripts/scripts.min.js'
	}
};
