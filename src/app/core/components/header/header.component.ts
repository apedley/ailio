import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { RedditUser } from 'snoowrap';
import { ElectronService } from '../../services/electron.service';
import { getCurrentUser } from './../../../store/index';
import * as fromAuth from '../../../store/auth/auth.reducer';
import * as AuthActions from '../../../store/auth/auth.actions';
import * as fromCore from '../../../store/index';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public currentUser: Observable<RedditUser>;

  constructor(private electron: ElectronService, private authStore: Store<fromAuth.State>) {}
  ngOnInit() {
    this.currentUser = this.authStore.select(getCurrentUser);
  }
  LogIn() {
    this.electron.openAuthWindow();
  }
  LogOut() {
    this.authStore.dispatch(new AuthActions.LogOut());
  }
}
