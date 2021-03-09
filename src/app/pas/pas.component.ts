import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './pas-menu';

@Component({
  selector: 'ngx-pas',
  templateUrl: './pas.component.html',
  styleUrls: ['./pas.component.scss']
})
export class PASComponent {

  menu = MENU_ITEMS;

}
