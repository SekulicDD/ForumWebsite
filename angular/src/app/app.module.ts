import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import { LayoutModule } from './shared/layout/layout.module';
import { CategoriesState } from './shared/services/category/categories.state';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      CategoriesState,
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
