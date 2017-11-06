import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedditApiService } from './services/reddit-api.service';
import { PostListComponent } from './containers/posts-list/post-list.component';

@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostListComponent
  ],
  providers: [
    RedditApiService
  ],
})
export class RedditModule {}


// import {NgModule} from '@angular/core';
// import {EffectsModule} from '@ngrx/effects';
// import {StoreModule} from '@ngrx/store';

// import {CommonModule} from '@angular/common';
// import {RouterModule} from '@angular/router';
// import {RedditService} from './reddit.service';
// import {PostsReducer} from './store/posts/posts.reducer';
// import { PostsEffects } from './store/posts/posts.effects';
// import * as fromReddit from './store';
// import { CommentListComponent } from './components/comment-list/comment-list.component';
// import { CommentComponent } from './components/comment/comment.component';


// @NgModule({
//   imports: [
//     CommonModule,
//     RouterModule,
//     StoreModule.forFeature('reddit', fromReddit.reducers),
//     EffectsModule.forFeature([PostsEffects])
//   ],
//   declarations: [
//     CommentListComponent,
//     CommentComponent
//   ],
//   exports: [
//     CommentListComponent,
//     CommentComponent],
//   providers: [
//     RedditService
//   ]
// })
// export class RedditModule {
// }
