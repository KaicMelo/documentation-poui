import { PoModalModule, PoModule } from '@po-ui/ng-components';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';

const routes: Routes = [
  {
    path: '',
    component: ModalComponent,
  },
];

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    PoModalModule,
    RouterModule.forChild(routes),
  ]
})
export class ModalModule { }
