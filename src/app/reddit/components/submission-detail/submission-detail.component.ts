// import { Component, Input, OnInit } from '@angular/core';
// import * as Snoowrap from 'snoowrap';

// @Component({
//   selector: 'app-submission-detail',
//   templateUrl: './submission-detail.component.html',
//   styleUrls: ['./submission-detail.component.scss']
// })
// export class SubmissionDetailComponent implements OnInit {

//   @Input() submission: Snoowrap.Submission;
//   @Input() index: number;

//   public previewImageUrls: string[];
//   public previewImageUrl: string;
//   public utcDate: Date;

//   constructor() { }

//   ngOnInit() {
//     this.previewImageUrl = this._getImages();
//     this.utcDate = new Date(0);
//     this.utcDate.setUTCSeconds(this.submission.created_utc);
//   }
//   _getImages() {
//     let urls = [];
//     if (this.submission.preview && this.submission.preview.images) {
//       urls = this.submission.preview.images.map(image => {
//         if (image.source && image.source.url) {
//           return image.source.url;
//         }
//       })
//     }
//     return urls.length > 0 ? urls[0] : '';
//   }
//   showInfo() {
//     debugger;
//   }

// }
