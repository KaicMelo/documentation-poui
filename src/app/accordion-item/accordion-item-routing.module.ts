import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordionItemComponent } from './accordion-item.component';

const routes: Routes = [
  {
    path: '',
    component:AccordionItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccordionItemRoutingModule {}
