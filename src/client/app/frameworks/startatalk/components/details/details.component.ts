import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../../../core/index';

@BaseComponent({
  moduleId: module.id,
  selector: 'sd-details',
  templateUrl: 'details.component.html',
  styleUrls: ['details.component.css']
})

export class DetailsComponent implements OnInit {

  @Input() content: any;

  constructor() {

  }

  ngOnInit() { }
}
