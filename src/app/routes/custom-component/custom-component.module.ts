import { FormsModule } from '@angular/forms';
import { PoDropdownModule, PoModule } from '@po-ui/ng-components';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponentComponent } from './custom-component.component';

const routes: Routes = [
  {
    path: '',
    component: CustomComponentComponent,
  },
];

@NgModule({
  declarations: [CustomComponentComponent],
  imports: [CommonModule, PoModule, RouterModule.forChild(routes),FormsModule,PoDropdownModule],
})
export class CustomComponentModule {}
