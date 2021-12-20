import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'teste';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  readonly menus: Array<PoMenuItem> = [
    { label: 'Accordion', action: () => this.router.navigate(['/accordion']) },
    {
      label: 'Accordion Item',
      action: () => this.router.navigate(['accordionItem']),
    },
    { label: 'Avatar', action: this.onClick.bind(this) },
    { label: 'Breadcrumb', action: this.onClick.bind(this) },
    { label: 'Button', action: this.onClick.bind(this) },
    { label: 'Button Group', action: this.onClick.bind(this) },
    { label: 'Calendar', action: this.onClick.bind(this) },
    { label: 'Chart', action: this.onClick.bind(this) },
    { label: 'Checkbox', action: this.onClick.bind(this) },
    { label: 'Checkbox Group', action: this.onClick.bind(this) },
    { label: 'Code Editor', action: this.onClick.bind(this) },
    { label: 'Code Editor Register', action: this.onClick.bind(this) },
    { label: 'Combo', action: this.onClick.bind(this) },
    { label: 'Container', action: this.onClick.bind(this) },
    { label: 'Data Transform', action: this.onClick.bind(this) },
    { label: 'Datepicker', action: this.onClick.bind(this) },
    { label: 'Datepicker Range', action: this.onClick.bind(this) },
    { label: 'Decimal', action: this.onClick.bind(this) },
    { label: 'Dialog', action: this.onClick.bind(this) },
    { label: 'Disclaimer Group', action: this.onClick.bind(this) },
    { label: 'Divider', action: this.onClick.bind(this) },
    { label: 'Dropdown', action: this.onClick.bind(this) },
    { label: 'Dynamic Form', action: this.onClick.bind(this) },
    { label: 'Dynamic View', action: this.onClick.bind(this) },
    { label: 'Email', action: this.onClick.bind(this) },
    { label: 'Entity', action: this.onClick.bind(this) },
    { label: 'Event Sourcing Error Response', action: this.onClick.bind(this) },
    { label: 'Field Validate', action: this.onClick.bind(this) },
    { label: 'Gauge', action: this.onClick.bind(this) },
    { label: 'Grid', action: this.onClick.bind(this) },
    { label: 'Http Interceptor', action: this.onClick.bind(this) },
    { label: 'Http Request Interceptor', action: this.onClick.bind(this) },
    { label: 'I18n', action: this.onClick.bind(this) },
    { label: 'Info', action: this.onClick.bind(this) },
    { label: 'Input', action: this.onClick.bind(this) },
    { label: 'List View', action: this.onClick.bind(this) },
    { label: 'List View Content Template', action: this.onClick.bind(this) },
    { label: 'List View Detail Template', action: this.onClick.bind(this) },
    { label: 'Loading Overlay', action: this.onClick.bind(this) },
    { label: 'Login', action: this.onClick.bind(this) },
    { label: 'Lookup', action: this.onClick.bind(this) },
  ];

  private onClick() {
    alert('Clicked in menu item');
  }
}
