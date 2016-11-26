import {
  hasJSType,
  contains,
  markCoords,
  markCoordsLive,
  svgElementsAt,
} from "utils";

export function piecesAt(map, pt: Point) {
  const svg = map.element;
  const intersectedElements = svgElementsAt(pt, svg);
  return {
    generators: map.generators.filter(g =>
      contains(intersectedElements, g.element)
    ),
    sockets: map.sockets.filter(s =>
      contains(intersectedElements, s.element)
    ),
    switches: map.switches.filter(s =>
      contains(intersectedElements, s.element)
    ),
  };
}


/**
 * Returns the powerlines connectected to a Generator/Socket/Switch
 */
export function selectAttachedLines(piece: Rectangle | Switch, map): Powerline[] {
  return map.powerlines.filter(p =>
    attachedToShape(p, piece, map.element)
  );
}

export function attached(rect: Rectangle, powerline: Powerline): boolean {
    return insideRect(rect, powerline.start) || insideRect(rect, powerline.end);
}

export function attachedToShape(powerline: Powerline, shape: Rectangle | Switch, svg: SVGSVGElement) {
  return insideShape(powerline.start, shape, svg) ||
         insideShape(powerline.end, shape, svg);
}

export function insideShape(point: Point, shape: Rectangle | Switch, svg: SVGSVGElement): boolean {
  return contains(
    svgElementsAt(point, svg),
    shape.element
  );
}

export function insideRect(rect: Rectangle, point: Point): boolean {
    return rect.pos.x <= point.x &&
           point.x <= rect.pos.x + rect.width &&
           rect.pos.y <= point.y &&
           point.y <= rect.pos.y + rect.height;
}