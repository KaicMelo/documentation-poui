import { AfterContentInit, Component, ViewChild } from '@angular/core';
import { PoAccordionItemComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent implements AfterContentInit {

  @ViewChild(PoAccordionItemComponent, { static: true }) item1!: PoAccordionItemComponent;

  ngAfterContentInit() {
    this.item1.expand();
  }
}
