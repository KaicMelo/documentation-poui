import { TableRoutingModule } from './table-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { PoFieldModule, PoInfoModule, PoTableModule, PoWidgetModule } from '@po-ui/ng-components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    PoTableModule,
    PoWidgetModule,
    PoFieldModule,
    PoInfoModule,
    FormsModule
  ]
})
export class TableModule { }
