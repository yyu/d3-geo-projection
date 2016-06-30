import {geoProjection} from "d3-geo";
import {ginzburgPolyconicRaw} from "./ginzburgPolyconic";

export var ginzburg4Raw = ginzburgPolyconic(2.8284, -1.6988, 0.75432, -0.18071, 1.76003, -0.38914, 0.042555);

export default function() {
  return geoProjection(ginzburg4Raw);
}
