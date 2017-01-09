import { BaseComponent, Config } from '../../frameworks/core/index';
import { ElementRef, ViewChild } from '@angular/core';

@BaseComponent({
  moduleId: module.id,
  selector: 'sd-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.css']
})
export class AuthComponent {

  constructor(
  ) {
  }
}
