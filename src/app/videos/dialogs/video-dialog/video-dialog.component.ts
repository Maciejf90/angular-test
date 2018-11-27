import { Component, OnInit, Inject } from '@angular/core';
import { Video } from 'src/app/models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface VideoDialogData {
  video: Video;
  videos: Video[];
}

@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.scss']
})
export class VideoDialogComponent implements OnInit {

  url: SafeResourceUrl;

  constructor(
    public dialogRef: MatDialogRef<VideoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: VideoDialogData,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {

    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.data.video.id.videoId);

  }

  onClose(): void {
    this.dialogRef.close('button close');
  }

  onPrev(): void {

    console.log('index of prev', this.data.videos.indexOf(this.data.video)):

  }
  onNext(): void {
    console.log('index of next', this.data.videos.indexOf(this.data.video)):

  }
}
