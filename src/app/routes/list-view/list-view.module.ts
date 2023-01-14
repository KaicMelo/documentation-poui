import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view.component';
import { RouterModule, Routes } from '@angular/router';
import { PoListViewModule, PoInfoModule } from '@po-ui/ng-components';

const routes: Routes = [
  {
    path: '',
    component: ListViewComponent,
  },
];

@NgModule({
  declarations: [ListViewComponent],
  imports: [CommonModule, RouterModule.forChild(routes),PoListViewModule,PoInfoModule],
})
export class ListViewModule {}
