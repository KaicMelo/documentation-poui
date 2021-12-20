import { PoModule } from '@po-ui/ng-components';
import { homeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    homeRoutingModule
  ]
})
export class HomeModule { }
