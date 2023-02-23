import { NgModule, OnInit } from '@angular/core';

//primeNg
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar'



@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    TabMenuModule,
    TableModule,
    InputTextModule,
    ToolbarModule
  ]
})
export class PrimeNgModule implements OnInit{ 

constructor () {}

ngOnInit(): void {
  

  
}

}


