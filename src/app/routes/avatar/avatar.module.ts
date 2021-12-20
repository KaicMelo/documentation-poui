import { AvatarRoutingModule } from './avatar-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar.component';
import { PoAvatarModule } from '@po-ui/ng-components';



@NgModule({
  declarations: [
    AvatarComponent
  ],
  imports: [
    CommonModule,
    PoAvatarModule,
    AvatarRoutingModule
  ]
})
export class AvatarModule { }
