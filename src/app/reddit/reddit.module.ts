import { SubscriptionsListComponent } from './containers/subscriptions-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedditApiService } from './services/reddit-api.service';
import { SubscriptionItemComponent } from './components/subscription-item/subscription-item.component';

@NgModule({
  declarations: [
    SubscriptionsListComponent,
    SubscriptionItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SubscriptionsListComponent
  ],
  providers: [
    RedditApiService
  ],
})
export class RedditModule {}
