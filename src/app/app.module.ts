import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { AuthEffects } from './core/store/auth/auth.effects';

import { CoreModule } from './core/core.module';
import { RedditModule } from './reddit/reddit.module';


import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import * as fromRootStore from './core/store/index';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    StoreModule.forRoot(fromRootStore.reducers),
    EffectsModule.forRoot([ AuthEffects]),
    RedditModule,
    AppRoutingModule,
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    {provide: RouterStateSerializer, useClass: fromRootStore.CustomRouterStateSerializer}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
