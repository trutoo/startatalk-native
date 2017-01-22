import { Component, OnInit, Input } from '@angular/core';

@Component({
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
