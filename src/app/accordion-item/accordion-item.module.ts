
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionItemComponent } from './accordion-item.component';
import { AccordionItemRoutingModule } from './accordion-Item-routing.module';



@NgModule({
  declarations: [AccordionItemComponent],
  imports: [
    CommonModule,
    AccordionItemRoutingModule
  ]
})
export class AccordionItemModule { }
