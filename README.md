# Project base v.1.1.0

## Requirements

**Required tools:**

* node.js
* grunt.js

**Tools, and conventions used in project:**

* LESS
* BEM naming convention

## Getting started

**Instalation:**

* "npm install" - to install all dependencies
* "grunt" - run while working on project
* "grunt build" - to generate dist/ files, run before pushing files to production

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

* Module classes started width capital letter
* Utility classes started with u-
* Clesses added by javascript started with is-
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


Copyright 2015 Michał Pacek

Licensed under the Apache License, Version 2.0.
