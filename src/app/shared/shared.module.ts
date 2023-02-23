import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabmenuComponent } from './tabmenu/tabmenu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    TabmenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    TabmenuComponent
  ]
})
export class SharedModule { }
