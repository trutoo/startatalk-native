import { Component } from '@angular/core';
import { Config } from '../../shared/core/index';
import { ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { GoogleMapsService, GeoLocationService, SVGService } from '../../shared/startatalk/index';

@Component({
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

  private map: any;

  constructor(
    private geoLocation: GeoLocationService,
    private mapService: GoogleMapsService,
    private svgService: SVGService,
  ) {
  }

  ngAfterViewInit() {
    this.mapService.create(this.mapView).then(($event) => {
      this.onMapReady($event);
    });

    /*
    const shape = this.svgService.createInterests('marker-interest', [
      { color: '#69D2E7', weight: 40 },
      { color: '#A7DBD8', weight: 30 },
      { color: '#E0E4CC', weight: 24 },
      { color: '#F38630', weight: 10 },
      { color: '#FA6900', weight: 8 },
    ]);
    */
  }

  onMapReady($event) {
    this.map = $event.object;
    this.geoLocation.position.subscribe(this.onNewPosition.bind(this));
  }

  onNewPosition(position) {
    if (!position) return;
    console.log(position);
    this.map.panTo(new this.mapService.googleMaps.LatLng(
      position.coords.latitude, position.coords.longitude));
  }
}
