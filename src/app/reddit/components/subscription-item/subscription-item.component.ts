import { Component, OnInit, Input } from '@angular/core';
import { Subreddit } from 'snoowrap';

@Component({
  selector: 'app-subscription-item',
  templateUrl: './subscription-item.component.html',
  styleUrls: ['./subscription-item.component.scss']
})
export class SubscriptionItemComponent implements OnInit {
  @Input() subreddit: Subreddit;
  @Input() index: number;

  constructor() { }

  ngOnInit() {

  }

}
