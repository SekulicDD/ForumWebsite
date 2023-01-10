import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TopicComponent } from './components/topic/topic.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [TopicComponent,HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
