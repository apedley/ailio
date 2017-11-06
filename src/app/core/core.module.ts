
import { BsDropdownModule } from 'ngx-bootstrap';
import { RedditModule } from '../reddit/reddit.module';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectronService } from './services/electron.service';
import { HomeViewComponent } from './containers/home-view.component';
import { RouterModule } from '@angular/router';
import { ElectronStorageService } from './services/electron-storage.service';

@NgModule({
  declarations: [
    HomeViewComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RedditModule,
    RouterModule,
    BsDropdownModule.forRoot()
  ],
  exports: [
    HomeViewComponent
  ],
  providers: [
    ElectronService,
    ElectronStorageService
  ],
})
export class CoreModule {
  // constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  //   if (parentModule) {
  //     throw new Error('CoreModule is already loaded. Import it in the AppModule only');
  //   }
  // }
  constructor() {}
}

// @NgModule({
//   declarations: [

//   ],
//   imports: [ CommonModule ],
//   exports: [

//   ],
//   providers: [
//     ElectronService
//   ],
// })
// export class CoreModule {}
