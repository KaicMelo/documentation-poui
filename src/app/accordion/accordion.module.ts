import { AccordionRoutingModule } from './accordion-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { PoAccordionModule } from '@po-ui/ng-components';



@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    CommonModule,
    PoAccordionModule,
    AccordionRoutingModule
  ]
})
export class AccordionModule { }
