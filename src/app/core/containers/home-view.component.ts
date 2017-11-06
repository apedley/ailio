import { Component, OnInit } from '@angular/core';
import { RedditApiService } from '../../reddit/services/reddit-api.service';
import * as Snoowrap from 'snoowrap';
// import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-home-view',
  template: `
    <app-header></app-header>
    <app-post-list></app-post-list>
  `,
  styles: [
    ''
  ]
})
export class HomeViewComponent implements OnInit {

  constructor(private redditApi: RedditApiService) { }

  ngOnInit() {
  }
}
