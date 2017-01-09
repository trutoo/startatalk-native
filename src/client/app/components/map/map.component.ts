import { BaseComponent, Config } from '../../frameworks/core/index';
import { ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { GoogleMapsService } from '../../frameworks/startatalk/index';
import { SVGService } from '../../frameworks/startatalk/index';

@BaseComponent({
  moduleId: module.id,
  selector: 'sd-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css']
})
export class MapComponent implements AfterViewInit {

  @ViewChild('MapView') mapView: ElementRef;

  private details = {
    name: 'Erik Hughes',
  };

  constructor(
    private googleMaps: GoogleMapsService,
    private svgService: SVGService,
  ) {
  }

  ngAfterViewInit() {
    this.googleMaps.create(this.mapView).then(($event) => {
      this.onMapReady($event);
    });

    const shape = this.svgService.createInterests('marker-interest', [
      { color: '#69D2E7', weight: 40 },
      { color: '#A7DBD8', weight: 30 },
      { color: '#E0E4CC', weight: 24 },
      { color: '#F38630', weight: 10 },
      { color: '#FA6900', weight: 8 },
    ]);
  }

  onMapReady($event) {
    // Todo
  }
}
