import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [

  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'home',
      },
      {
        path:'',
        loadChildren: () => import('../../home/home.module').then(m => m.HomeModule)
      },
    ]
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

