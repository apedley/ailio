import { HomeViewComponent } from './core/containers/home-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {  path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeViewComponent
  },
  {
    path: 'r/:subreddit',
    component: HomeViewComponent
  }, {
    path: 'comments/:postId',
    component: HomeViewComponent
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
