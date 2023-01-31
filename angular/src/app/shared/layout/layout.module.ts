import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { BtnHeaderComponent } from './header/btn-header/btn-header.component';
import { FooterComponent } from './footer/footer.component';
import { LogOutButtonComponent } from '../components/log-out-button/log-out-button.component';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
    BtnHeaderComponent,
    FooterComponent,
    LayoutComponent,
    ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
