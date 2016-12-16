import { BaseComponent, Config } from '../../frameworks/core/index';
import { ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { GoogleMapsService } from '../../frameworks/startatalk/index';

@BaseComponent({
  moduleId: module.id,
  selector: 'sd-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css']
})
export class MapComponent implements AfterViewInit {

  @ViewChild('MapView') mapView: ElementRef;

  constructor(
    private googleMaps: GoogleMapsService
  ) {
  }

  ngAfterViewInit() {
    this.googleMaps.create(this.mapView).then(($event) => {
      this.onMapReady($event);
    });
  }

  onMapReady($event) {
    // Todo
  }
}
