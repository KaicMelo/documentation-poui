
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionItemComponent } from './accordion-item.component';
import { PoAccordionModule } from '@po-ui/ng-components';
import { AccordionItemRoutingModule } from './accordion-item-routing.module';



@NgModule({
  declarations: [AccordionItemComponent],
  imports: [
    CommonModule,
    AccordionItemRoutingModule,
    PoAccordionModule,
  ]
})
export class AccordionItemModule { }
