export function valueOr<T>(value: T | undefined | null, deflt: T): T {
  return value? value : deflt;
}

export function hasJSType(type: string, obj: any) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

export function contains<T>( xs: T[] | Iterable<T>, x: T): boolean {
  if((<T[]>xs).indexOf) {
    // assumes that internal implementation is more optimized
    return (<T[]>xs).indexOf(x) >= 0;
  } else {
    for(const el of xs) {
      if(el === x) return true;
    }
    return false;
  }
}

export function delay(milliseconds: number): Promise<void> {
    return new Promise((resolve, reject) =>
            window.setTimeout(() => resolve(), milliseconds)
    );
}

/**
 * Draws a dark-red circle at the specified coordinates
 * using the viewBox (= pre-mounting) coordinate-system.
 */
export function markCoords(svg: SVGSVGElement, x: number, y: number) {
  //const NS = svg.getAttribute('xmlns'); ---v
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle"); // Create a path in SVG's namespace
  circle.setAttribute("cx", x.toString());
  circle.setAttribute("cy", y.toString());
  circle.setAttribute("r", "8");
  circle.style.fill = "#900";
  svg.appendChild(circle);
  // console.log(`Marked coordinates (${x}, ${y})`);
}

/**
  * @param pt the point in viewbox-coordinates (=pre-scaling coords).
  * @param svg the svg-root-element
  * adapted from source of
  * <http://xn--dahlstrm-t4a.net/svg/interactivity/intersection/sandbox_hover.svg>
  */
export function svgElementsAt(pt: Point, svg: SVGSVGElement) {
    /*
     * getIntersectionList works on viewport-coordinates
     * we need to transform the svgRects coordinats from
     * viebox (=original) to viewport (=svg after scaling)
     * coordinates.
     */
    const vbox2vportCoords = makeConverterToAbsoluteCoords(svg, svg);
    const vportPt = vbox2vportCoords(pt);

    const svgRect = svg.createSVGRect();
    svgRect.x = vportPt.x;
    svgRect.y = vportPt.y;
    svgRect.width = svgRect.height = 1;

    return svg.getIntersectionList(svgRect, svg);
}

/**
 * adapted from <http://stackoverflow.com/questions/26049488/how-to-get-absolute-coordinates-of-object-inside-a-g-group>
 * Yields a function that converts from coordinates relative to the element to
 * those relative to the svg’s root.
 */
export function makeConverterToAbsoluteCoords(svgRoot, element) {
  return function(p: Point): Point {
    const offset = svgRoot.getBoundingClientRect();
    const matrix = element.getScreenCTM();
    return {
      x: (matrix.a * p.x) + (matrix.c * p.y) + matrix.e - offset.left,
      y: (matrix.b * p.x) + (matrix.d * p.y) + matrix.f - offset.top
    };
  };
}

/**
* Sets up a mark that gets painted every 100ms if the condition
* function returns true.
* Returns a function to stop painting the mark.
*/
export function markCoordsLive(svg: SVGSVGElement, x: number, y: number, condition: () => boolean) {
  let mark = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  mark.setAttribute("cx", x.toString());
  mark.setAttribute("cy", y.toString());
  mark.setAttribute("r", "8");
  mark.style.fill = "#900";
  svg.appendChild(mark);

  const updateMark = () => {
    if(condition()) {
      mark.style.display = ""; // not "none"
    } else {
      mark.style.display = "none";
    }
  }
  const intervalId = setInterval(updateMark, 100);
  return () => {
    svg.removeChild(mark);
    clearInterval(intervalId);
  }
}

export function addClientRect(el: SVGElement, svg: SVGSVGElement) {
  const crData = el.getBoundingClientRect()
  const clientRect = document.createElementNS("http://www.w3.org/2000/svg", "rect"); // Create a path in SVG's namespace
  clientRect.setAttribute("x", crData.left.toString());
  clientRect.setAttribute("y", crData.top.toString());
  clientRect.setAttribute("height", crData.height.toString());
  clientRect.setAttribute("width", crData.width.toString());
  clientRect.style.fill = "#0000";
  clientRect.style.stroke = "#900";
  svg.appendChild(clientRect);
  console.log("Added clientRectangle ", /*clientRect,*/ crData);
}

/**
 * Tries to look up a property-path on a nested object-structure.
 * Where `obj.x.y` would throw an exception if `x` wasn't defined
 * `get(obj, ['x','y'])` would return undefined.
 * @param obj
 * @param path
 * @return {*}
 */
export function getIn(obj:any , path: string[]) {
    switch(path.length){
        case 0:
            return undefined;
        case 1:
            return obj && obj[path[0]];
        default:
            return obj && obj[path[0]] && getIn( obj[path[0]] , path.slice(1) )
    }
}

/*
 * Freezes an object recursively.
 *
 * Taken from:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 */
export function deepFreeze(obj) {

    // Retrieve the property names defined on obj
    var propNames = Object.getOwnPropertyNames(obj);

    // Freeze properties before freezing self
    propNames.forEach(function(name) {
        var prop = obj[name];

        // Freeze prop if it is an object
        if (typeof prop == 'object' && !Object.isFrozen(prop))
            deepFreeze(prop);
    });

    // Freeze self
    return Object.freeze(obj);
}
