import { getSidebar } from '../../store';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { RedditApiService } from '../../reddit/services/reddit-api.service';
import * as Snoowrap from 'snoowrap';
import * as fromUi from '../../store/ui/ui.reducer';
import * as UiActions from '../../store/ui/ui.actions';


import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-home-view',
  template: `
    <app-header></app-header>
    <app-subscriptions-list></app-subscriptions-list>
  `,
  styles: [
    ''
  ]
})
export class HomeViewComponent implements OnInit {
  public sidebarState: Observable<any>;

  constructor(private redditApi: RedditApiService, private uiStore: Store<fromUi.State>) { }

  ngOnInit() {
    this.sidebarState = this.uiStore.select(getSidebar);
  }
}
