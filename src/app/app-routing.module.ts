import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'accordion',
    loadChildren: () =>
      import('./accordion/accordion.module').then((m) => m.AccordionModule)
  },
  {
    path: 'accordionItem',
    loadChildren: () =>
      import('./accordion-item/accordion-item.module').then((m) => m.AccordionItemModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
