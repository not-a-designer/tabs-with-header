import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


interface Action {
  name: string;
  data?: any;
};


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  @Input('title') title: string;

  @Output('headerAction') 
  headerAction: EventEmitter<Action> = new EventEmitter<Action>();

  isAuthenticated: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSettingsClicked() {
    this.headerAction.emit({ name: 'settings' })
  }

}
