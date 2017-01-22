import { Injectable, Inject, NgZone, ElementRef } from '@angular/core';
import { GoogleMapsToken } from './index';
import { MapConfig } from '../utils/index';
import * as SVG from 'svg.js';
//import SVG from 'svg.js';

export interface ISVGCreate {
  path: string;
}

@Injectable()
export class SVGService {

  static PATH = {
    LINE: 'M512,256,342,256,170,256,0,256',
    CIRCLE: 'M512,256c0,141.38-114.62,256-256,256S0,397.38,0,256,114.62,0,256,0,512,114.62,512,256Z',
  };

  constructor(
  ) {

  }

  public create(id: string, params: ISVGCreate) {
    let draw = SVG(id).viewbox(0, 0, 512, 512);
    return draw.path(params.path);
  }

  public morph() {

  }

  public createInterests(id: string, colors: Array<{ color: string, weight: number }>) {
    let draw = SVG(id).viewbox(0, 0, 544, 544);
    let shape = draw.path(SVGService.PATH.CIRCLE);
    shape.move(16, 16);
    let totalWeight = colors.reduce((previousWeight, currentColor) => {
      return previousWeight + currentColor.weight;
    }, 0);
    let gradient = draw.gradient('linear', (stop) => {
      let acumulatedWeight = 0;
      colors.forEach((color) => {
        stop.at(acumulatedWeight / totalWeight, color.color);
        acumulatedWeight += color.weight;
        stop.at(acumulatedWeight / totalWeight, color.color);
      });
    });
    shape.fill('none').stroke({ color: gradient, width: 32 });
  }

  public smoothGradient() {

  }
}
