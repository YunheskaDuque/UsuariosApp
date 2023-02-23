import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-tabmenu',
  templateUrl: './tabmenu.component.html',
  styles: [ `
  li {
    cursor: pointer;
  }
`]
})
export class TabmenuComponent implements OnInit{

  items: MenuItem[] = []

  constructor() {}

  ngOnInit(): void {

    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/'},
      {label: 'Usuarios', icon: 'pi pi-fw pi-users', routerLink: 'usuarios' },
      
  ];
  
}
}

