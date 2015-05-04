# Instructions

This step contains an implementation of the previous step. It will also deal with the following topics:
* Module pattern in Javascript
* Prototype inheritance

In this step, we will create stopwatches!

> “Time is precious, but truth is more precious than time.” 
> ― Benjamin Disraeli

## Before we start

In this step we will use jQuery to manipulate the DOM. We will not cover its usage here so please refer to the [officlal documentation](http://api.jquery.com/) for more information. Our only use of jQuery will be for DOM manipulation, so we can display our models into the view.

### JQuery

Add jQuery 2.1.3 (latest at the time of writing) to your ```bower.json``` dependencies, and run ```bower install``` to retrieve it.

Then in your ```main.js``` requireJS configuration, add a ```paths``` to specify the path to jQuery. You can use ```$``` as a name so that you can later get your hand on jQuery by doing ```require('$')```.

### Application architecture

In this step we're going to create 3 kinds of Javascript "modules":
* models, which is an a representation of the data used in your application
* views, which in our case will manipulate the DOM
* actions, which will be trigerred by user actions and will update the model as a consequence

This is an extremely simplified version of the [Facebook Flux](https://facebook.github.io/flux/docs/overview.html#content) application architecture. As we create more steps we'll try to follow this pattern more closely where applicable.

One of the main point of Flux is that it has a unidirectional flow, as in events and calls only goes one way: ```views => actions => models => views```. That makes your entire application easier to test and predictable.

## Module pattern in Javascript

TODO

## Resources

TODO