# Projects v.0.0.1

## Requirements

**Required tools:**

* node.js
* grunt.js

**Tools, and conventions used in project:**

* LESS
* BEM naming convention
* Bootstrap

## Getting started

**Instalation:**

* Run those tasks in main folder to install all dependencies:
	* "nmp install"
* "grunt" - run when working on project
* "grunt build" - run before pushing files to production

**Theme structure (importat files presented):**

	src/
	├── fonts/
	├── images/
	├── styles/
	│   ├── vendors/
	│   |   ├── bootstrap.less
	│   |   └── ...
	│   ├── shared/
	│   |   ├── variables.less
	│   |   └── ...
	│   ├── components/
	│   ├── modules/
	│   |   └── global/
	│   |   └── ...
	│   └── pages/
	├── print.less
	└── styles.less

* In production use files from dist/ ("grunt build" task updates this)
* On your local machine use files from .tmp/ ("grunt" task updates this)
* Folder Views/ contains html files

**Classes:**

* Module classes started by a capital letter
* Utility classes started with u-
* BEM like classes
	* &--type
	* &__child

**Javascript:**

If you create a new javascript file, remember to add it to the uglify.js grunt task.
Include minified scripts.min.js just before </body> tag, with async attribute

**Comments:**

	// ------------------------------------------------
	// Section comment block
	// ------------------------------------------------ //

	// SUB-SECTION COMMENT BLOCK
	// ------------------------------------------------

	// Group comment block.
	// Ideal for multi-line
	// explanations and documentation.

	// Basic comment
