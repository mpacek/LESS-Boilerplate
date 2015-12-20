# Projects v.1.1.0

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
	* "npm install"
* "grunt" - run when working on project
* "grunt build" - run before pushing files to production

**Theme structure (importat files presented):**

src/
├── fonts/
├── images/
├── styles/
│   ├── vendors/
│   ├── shared/
│   |   ├── reset.less
│   |   └── variables.less
│   |   └── ...
│   ├── components/
│   ├── modules/
│   └── pages/
├── ─── print.less
├── ─── styles.less
├── scripts/
│   ├── helpers/
│   ├── ignore/
│   ├── modules/
│   ├── standalone/
│   └── vendors/
└── ─── init.js

* In production use files from dist/ ("grunt build" task updates this)
* On your local machine use files from .tmp/ ("grunt" task updates this)
* Folder Views/ contains html files

**Classes:**

* Module classes started by a capital letter
* Utility classes started with u-
* BEM like classes
	* .-type
	* &--type
	* &__child
	* ._child

**Javascript:**

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
