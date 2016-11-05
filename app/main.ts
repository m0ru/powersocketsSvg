// custom declarations / headers like for `svg-path-parser`
/// <reference path="declarations.d.ts"/>

// declarations/headers installed via `./node_modules/.bin/typings install <pkg>`
/// <reference path="../typings/index.d.ts"/>

// import fetch from "fetch";
import "fetch";
declare var fetch; // sadly there's no .d.ts file for fetch

import { fetchMap } from "fetch-map";
// declare var parseSvgPath: any; // no .d.ts supplied

import "wout/svg.js";
//import SVG from "jspm_packages/svg.js@2.3.6/svg.js.d.ts";

const blueprintSVG = document.getElementById("blueprint");


//To enable automatic sub-pixel offset correction when the window is resized:
//SVG.on(window, 'resize', function() { draw.spof() })

fetch("demo.svg")
.then(resp => resp.text())
//.then(resp => resp.blob())
.then(svgAsText => {
  // console.log(svgAsText);
  const draw = SVG("svgJsMount");
  console.log("Draw: ", draw);
  const svg = draw.svg(svgAsText);
  console.log("Svg: ", svg);
  // TODO the mounted svg is 0x0 of size but contains all the necessary DOM
});

fetchMap("demo.svg").then(data => {
  console.log(data);
  const backgroundDiv = document.getElementById("background");
  if(backgroundDiv) {
    backgroundDiv.appendChild(data.element);
  }
  //const map = SVG(data.element);
  //console.log('map: ', map);
});


/*
//TODO how to do collision? also: run box-collision first

[svg.js has intersections](https://github.com/amatiash/svg.intersections.js)

// <http://www.kevlindev.com/geometry/2D/intersections/index.htm>
// http://stackoverflow.com/questions/5396657/event-when-two-svg-elements-touch
// raphael js has collision detection ([source](http://stackoverflow.com/questions/12550635/how-can-i-improve-on-this-javascript-collision-detection))
//
// http://stackoverflow.com/questions/2174640/hit-testing-svg-shapes
// var nodelist = svgroot.getIntersectionList(hitrect, null);
// [working example](http://xn--dahlstrm-t4a.net/svg/interactivity/intersection/sandbox_hover.svg)
//
// [paper.js renders to canvas and has collision too](http://paperjs.org/reference/path/#getintersections-path)

//TODO: t-pieces. connector box?
window.SVG4dbg = SVG;
var svgParent = document.getElementById('background');
var draw = SVG(svgParent);
window.draw4dbg = draw;
var rect = draw.rect(100, 100).attr({ fill: '#f06' });

var draw2 = SVG(blueprintSVG);
window.draw2fordbg = draw2;
*/


/*
declare var Raphael: any; //imported in index.html


//TODO take a look at the lightweight svg.js



importing svg data

* https://github.com/wout/svg.js#import--export-svg
* https://github.com/wout/raphael-svg-import (deprecated for svg.js)


parsing path data

* https://github.com/hughsk/svg-path-parser
* https://www.npmjs.com/package/parse-svg
* https://github.com/canvg/canvg





console.log(Raphael);

// Creates canvas 320 × 200 at 10, 50
// var paper = Raphael(10, 50, 320, 200);
//
// // Creates circle at x = 50, y = 40, with radius 10
// var circle = paper.circle(50, 40, 10);
// // Sets the fill attribute of the circle to red (#f00)
// circle.attr("fill", "#f00");
//
// // Sets the stroke attribute of the circle to white
// circle.attr("stroke", "#fff");
//
 */