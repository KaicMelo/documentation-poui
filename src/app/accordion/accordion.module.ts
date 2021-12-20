import { AccordionRoutingModule } from './accordion-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';



@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    CommonModule,
    AccordionRoutingModule
  ]
})
export class AccordionModule { }
