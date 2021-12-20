import { Component, OnInit, ViewChild } from '@angular/core';
import { PoAccordionItemComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent implements OnInit {

  @ViewChild(PoAccordionItemComponent, { static: true }) item1!: PoAccordionItemComponent;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentInit() {
    // this.item1.collapse();
  }
}
