import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Subreddit } from 'snoowrap';
import { Injectable } from '@angular/core';

@Injectable()
export class SubredditsStoreService {
  public selected$: Observable<Subreddit>
  public subreddits$: Observable<Subreddit[]>

  constructor() {
    this.selected$ = this._selected.asObservable();
    this.subreddits$ = this._subreddits.asObservable();
  }

  private _selected: BehaviorSubject<Subreddit> = new BehaviorSubject(null);
  private _subreddits: BehaviorSubject<Subreddit[]> = new BehaviorSubject([]);

  select(subreddit: Subreddit) {
    this._selected.next(subreddit);
  }

}
