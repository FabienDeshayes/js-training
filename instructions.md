# Instructions

This first step will be divided in two sections:
* Minimum configuration and conventions
* Basic usage of RequireJS

## Minimum configuration and conventions

### Pre-requisites

It is expected that you have Node/npm installed. Please visit [nodejs.org](http://www.nodejs.org) for instructions.

### Basic configuration

This step comes with a few files already:
* README.md: by convention the text that will appear in your git repository in many UIs (like GitHub). The entry point of the module for anyone interested.
* instructions.md: where the instructions for the current step are (this file)
* .gitignore: a file listing paths or part of paths to files that shouldn't be commited into the git repository. Usually things like your build output or your dependencies.
* .jshintrc: a configuration file for JSHint, a static code analysis tool that will help you detect potential errors in your code and will ensure certain conventions are respected. More on this might come on a later step (about build). The file here follows a certain convention but the main point of a jshintrc is to enforce a convention, no to specify which convention is the best.
* bower.json: the configuration file for Bower that list the dependencies of the current project.
* src/index.html: the index of this project.

### Bower

To pull our dependencies, we're going to use [Bower](http://www.bower.io). Bower is a package manager for the web, probably the most popular at the time of writing.

To install it, run:

```
npm install -g bower
```

### Running a webserver

The last pre-requisite for this training is to run a webserver so you can see the results of your work in your favorite browser. I would advise installing ```simple-http-server``` as it is simple and uses node.

To install it, run:

```
npm install -g simple-http-server
```

To run the webserver, just place yourself in the folder you want to expose (for example the root of this project) and call:
```
nserver
```

Then navigate to ```http://localhost:8000/src/index.html``` to check this app in your browser.

### Conventions

TODO

## Basic usage of RequireJS

TODO