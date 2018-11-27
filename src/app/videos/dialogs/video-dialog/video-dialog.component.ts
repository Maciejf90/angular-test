import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models';

export interface VideoDialogData {
  video: Video;
}

@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.scss']
})
export class VideoDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
