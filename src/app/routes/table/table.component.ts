import { PoSelectOption, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { TableService } from './table.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [TableService]
})
export class TableComponent implements OnInit {
  columns!: Array<PoTableColumn>;
  items!: Array<any>;
  templateDirection: any = 'right';
  horizontal: any = "horizontal";

  actions: Array<PoTableAction> = [
    {
      action: () => {},
      icon: 'po-icon-finance',
      label: 'Apply Discount',
      disabled: () => {}
    },
    { action: () => {}, icon: 'po-icon-info', label: 'Details' },
    { action: () => {}, icon: 'po-icon po-icon-delete', label: 'Remove' }
  ];

  readonly statusOptions: Array<PoSelectOption> = [
    { label: 'Delivered', value: 'delivered' },
    { label: 'Transport', value: 'transport' },
    { label: 'Production', value: 'production' },
    { label: 'Passo 1', value: 'dsa' },
    { label: 'Passo 2', value: 'dsasddd' },
    { label: 'Production', value: 'dd' },
    { label: 'Delivered', value: 'ss' },
    { label: 'Transport', value: 'aa' },
    { label: 'Production', value: 'aasd' },
    { label: 'Delivered', value: 'dsasd' },
    { label: 'Transport', value: 'fdsf' },
    { label: 'Production', value: 'fsdafsd' },
    { label: 'Delivered', value: 'fdsafdsa' },
    { label: 'Transport', value: 'fsdafdsfs' },
    { label: 'Production', value: 'fdsfsdaf' },
    { label: 'Delivered', value: 'fdsfdafsa' },
    { label: 'Transport', value: 'fdsfafsdaf' },
    { label: 'Production', value: 'fdsfsadfdsa' },
    { label: 'Delivered', value: 'fdsafsdafsa' },
    { label: 'Transport', value: 'fdsafaa' },
    { label: 'Production', value: 'asdfassfdf' },
    { label: 'Delivered', value: 'sadfasdfsa' },
    { label: 'Transport', value: 'fdsafsafdsa' },
    { label: 'Production', value: 'fdsfdsa' },
    { label: 'Delivered', value: 'fdsfadd' },
    { label: 'Transport', value: 'fdasdf' },
    { label: 'Production', value: 'asdfds' },
    { label: 'Delivered', value: 'asdfdsa' },
    { label: 'Transport', value: 'adfsf' },
    { label: 'Production', value: 'afsfsd' },
  ];

  constructor(private tableService: TableService) {}

  ngOnInit() {
    this.columns = this.tableService.getColumns();
    this.items = this.tableService.getItems();
  }

  isUndelivered(row: any, index: number) {
    return row.status !== 'delivered';
  }

}
