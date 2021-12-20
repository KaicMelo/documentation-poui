import { AccordionItemModule } from './accordion-item/accordion-item.module';
import { AccordionModule } from './accordion/accordion.module';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PoTemplatesModule,
    PoModule,
    RouterModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    AccordionModule,
    AccordionItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
