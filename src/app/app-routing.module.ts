import { AvatarModule } from './routes/avatar/avatar.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./routes/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'accordion',
    loadChildren: () =>
      import('./routes/accordion/accordion.module').then(
        (m) => m.AccordionModule
      ),
  },
  {
    path: 'accordionItem',
    loadChildren: () =>
      import('./routes/accordion-item/accordion-item.module').then(
        (m) => m.AccordionItemModule
      ),
  },
  {
    path: 'avatar',
    loadChildren: () =>
      import('./routes/avatar/avatar.module').then((m) => m.AvatarModule),
  },
  {
    path: 'list-view',
    loadChildren: () =>
      import('./routes/list-view/list-view.module').then((m) => m.ListViewModule),
  },
  {
    path: 'table',
    loadChildren: () =>
      import('./routes/table/table.module').then((m) => m.TableModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
