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
        pathMatch:'prefix',
        redirectTo:'home',
      },
      {
        path:'home',
        loadChildren: () => import('../../home/home.module').then(m => m.HomeModule)
      },
      {
        path:'login',
        loadChildren: () => import('../../login/login.module').then(m => m.LoginModule)
      },
      {
        path:'posts/:catId',
        loadChildren: () => import('../../posts/posts.module').then(m => m.PostsModule)
      },
    ]
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

