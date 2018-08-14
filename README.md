# Waldorf 

![Media Ecology Project Image](/media/cropped-mep_banner511.png)

<p align="center">
    <a href="https://github.com/novomancy/waldorf/releases"><img src="https://img.shields.io/github/release/colejd/Waldorf.svg" alt="Release version"></img></a>
</p>

Waldorf is a replacement video player for HTML5 videos which allows for 
viewing, creating, and modifying user-made annotations conforming to the
[W3C Web Annotation data model](https://www.w3.org/TR/annotation-model/),
and was created for the [Media Ecology Project](https://mediaecology.dartmouth.edu/). 

This project is in a beta phase. As such, please note that it's still 
rough around the edges; documentation and clarifying information will be fleshed
out further as the project progresses.

## How to Use

The following instructions are for using this plugin with your website.
You can find the latest version of the plugin in the Releases; if you'd like to 
build the plugin yourself, see [How to Build](#how-to-build).

### Prerequisites

* [jQuery](https://jquery.com/)
* [jQuery UI](https://jqueryui.com/)

### Deployment

You will need to import the above prerequisites and the files from the latest release 
on your page.

You can then use jQuery to reference a video object, and call `annotate()` on
it; the plugin will do the rest.

Example:
```html
<script>
    $("video").annotate();
</script>
```

You can see a full example at [/testpage/](/testpage/).

### Styling

Information forthcoming.

### Known Issues

For some reason, the vertical offset of the annotations are wrong (slightly raised)
when the Chrome dev tools are open and the video is fullscreen. If anyone has an idea
why, please let us know.

## How to Build

The following instructions are for building the plugin on your own machine.


This project is written in ES6 and is transpiled by Babel and Browserify into a bundled file.


Note that this project was developed with [Visual Studio Code](https://code.visualstudio.com/). 
It is highly recommended that you also use this.

### Prerequisites

* NPM

### Installation

1. Install the dependencies with NPM.

```
npm install
```

### Building

Building is done using Grunt. You can run any of the tasks with `grunt taskName`.

Tasks:

* `build`        - Bundles the source files into [/dist/](/dist/).
* `make_release` - Builds and compresses the final product for release.
* `preview`      - Sets up live development environment with BrowserSync. Loads 
                   [/testpage/](/testpage/).

## Built With

* Grunt
* Babel
* Browserify

## Authors

* **Jonathan Cole** - *VEMILab* - [joncole.me](http://www.joncole.me)
* **John Bell** - *Dartmouth College* - [johnpbell.com](http://www.johnpbell.com)

## License

This project is licensed under the MIT License. Please see the [LICENSE.md](LICENSE.md) file for details.
