import { Component } from '@angular/core';

// app
import { LogService } from '../../../core/index';

@Component({
  moduleId: module.id,
  selector: 'sd-actionbar',
  templateUrl: 'actionbar.component.html',
  styleUrls: [
    'actionbar.component.css',
  ],
})
export class ActionBarComponent {

  private icon: any;
  private title: any;

  constructor(private log: LogService) {
    this.icon = {
      url: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/14633054_10154767919854374_986624241646303167_n.jpg?oh=c1daac5855f38e598b7fa3a9178d7c58&oe=59072303'
    };
    this.title = 'Erik Hughes';
  }

  public openLanguages(e: any): void {
    this.log.debug('openLanguages');
  }
}
