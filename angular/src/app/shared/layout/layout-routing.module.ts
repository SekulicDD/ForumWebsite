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
        path:'posts',
        pathMatch:'full',
        redirectTo:'posts/1',
      },
      {
        path:'posts/:catId',
        loadChildren: () => import('../../posts/posts.module').then(m => m.PostsModule)
      },
      {
        path:'post/:id',
        loadChildren: () => import('../../post-details/post-details.module').then(m => m.PostDetailsModule)
      },
      {
        path:'user',
        loadChildren: () => import('../../user/user.module').then(m => m.UserModule)
      },
      {
        path:'user/:id',
        loadChildren: () => import('../../user/user.module').then(m => m.UserModule)
      },
    ]
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

