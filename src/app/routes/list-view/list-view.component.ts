import { Component, OnInit } from '@angular/core';
import { PoListViewAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  actions: Array<PoListViewAction> = [
{label:'',icon:'po-icon po-icon-more'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
