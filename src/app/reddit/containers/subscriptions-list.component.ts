import { getSubscriptions } from './../../store/index';
import { Observable } from 'rxjs/Rx';
import { Subreddit } from 'snoowrap';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromAuth from '../../store/auth/auth.reducer';


@Component({
  selector: 'app-subscriptions-list',
  template: `
    <div>
      <app-subscription-item *ngFor="let subscription of (subscriptions | async); let i = index"
        [subreddit]="subscription" [index]="i">
        {{ subscription.title }}
      </app-subscription-item>
    </div>
  `,
  styles: [``]
})
export class SubscriptionsListComponent implements OnInit {

  public subscriptions: Observable<Subreddit[]>;

  constructor(private authStore: Store<fromAuth.State>) { }

  ngOnInit() {
    this.subscriptions = this.authStore.select(getSubscriptions)
  }
}
