import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostPageComponent } from './components/create-post-page/create-post-page.component';

const routes: Routes = [  {
  path: '',
  component: CreatePostPageComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostCreateRoutingModule { }
