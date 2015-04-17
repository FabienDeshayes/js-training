# Instructions

This first step will be divided in two sections:
* Minimum configuration and conventions
* Basic usage of RequireJS

## Before we start

Below are the minimum configuration and some conventions we will follow on this training. Choices were made - not always because they are the best solutions (it usually depends on the context) but because it seemed like a sensible choice for the purpose of a training.

### Pre-requisites

It is expected that you have Node/npm installed. Please visit [nodejs.org](http://www.nodejs.org) for instructions.

### Basic configuration

This step comes with a few files already:
* README.md: by convention the text that will appear in your git repository in many UIs (like GitHub). The entry point of the module for anyone interested.
* instructions.md: where the instructions for the current step are (this file)
* .gitignore: a file listing paths or part of paths to files that shouldn't be commited into the git repository. Usually things like your build output or your dependencies.
* .jshintrc: a configuration file for JSHint, a static code analysis tool that will help you detect potential errors in your code and will ensure certain conventions are respected. More on this might come on a later step (about build). The file here follows a certain convention but the main point of a jshintrc is to enforce a convention, no to specify which convention is the best.
* .editoconfig: a configuration file defining some code styles that work cross-IDEs.
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

Here are some code conventions that I follow for this project:
* Use tabs
* A tab equal two spaces
* Trailing commas
* Semi-colon to separate statements

Some conventions will be enforced by the usage of the ```.editorconfig``` file.

We also want to use strict mode in all our JS files. You can read [this article](http://cjihrig.com/blog/javascripts-strict-mode-and-why-you-should-use-it/) for more information about strict mode and why we want to use it.

## Basic usage of RequireJS

Start by adding and downloading the latest RequireJS with Bower.

Once you have it in your bower_components, add a script tag to the ```index.html``` to load it. It's good practice to put the script tag at the end of the file (after the closing body tag) so that the content is loaded and visible to the user before the script gets loaded. If we placed script tags at the top, it means the user would not see anything until all the scripts were loaded, which can lead to a poor user experience.

Next use the ```data-main``` attribute on the same script tag, pointing to a file named ```main.js``` to let RequireJS know which file to load at startup. This is documented [here](http://requirejs.org/docs/start.html#add). This is optional but considered good practice as we don't want to mix html and js code in the same file. By separating it, we make our Javascript code cleaner, re-usable and testable. 

Create the ```main.js``` file that will be your application entry point. I recommend having only two things here: The RequireJS configuration and one ```require``` that will initialize your application. That initialization should be into a separated file as well to keep things clear and separated.

The ```require.config``` is the place where you specify things like paths to libraries. It gives you a lot of options but for now we will just define the ```baseUrl``` to point to the ```scripts``` folder. As a side node here, it's good practice to make sure all scripts are in a separated folder, and it can be named js, scripts, src, etc. Sometimes we also have the ```main.js``` file in that folder but as an entry point it can live at the same level as the ```index.html``` file.

The second part of your ```main.js``` file will just require a script called ```app``` and call the initialize method on it.

Now what else to do in the ```app.js``` file? Some basic Javascript off course! It's important to know how to access the DOM without any library (it's called Vanilla js). so in your ```initialize``` method of your ```app```, use the ```document``` methods to append "Hello World" to the body. The [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Node) is a great reference for all Web APIs, I would advise to always reference it (instead of W3schools).

SO if you run your app in your browser, you should now see a nice Hello World showing up on the screen.

To finish this introduction, we'll create another RequireJS module, so that we create a dependency. Let's create ```models/user.js``` and have the ```app.js``` depend on it. There are two "syntaxes" in RequireJS to declare a dependency. The first one looks like this:

```
define(['a/dependency'], function(dependency) {
	// do something with the dependency
});
```

The second one (called the CommonJS approach - more info [here](http://requirejs.org/docs/commonjs.html)):

```
define(function(require) {
	var dependency = require('a/dependency');

	// do something with the dependency
});
```

The difference is quite minimal. One fundamental thing to understand is they are both *asynchronous*. Despite the second syntax looking synchronous, it is actually not but gives the advantages of a more readable syntax (especially when you start having more than one dependency) and is useful when working with contexts (more on that at a later stage). So I would advise to always use the later syntax. Make sure to only pass one argument called ```require``` to the function for it to work.

Now that we have define our ```models/user``` dependency, create a ```getName``` function that return a name for the user and use this in our ```app.js``` to say ```Hello <user>```!

So by the end of this training you should have learn how to initialize RequireJS, separate your modules and declare a dependency.


## Resources

* [bower.io](http://bower.io/) - with basics on how to use Bower.
* [requirejs API](http://requirejs.org/docs/api.html) - the RequireJS API documentation - advised to read section §§ 1 at least (Usage)