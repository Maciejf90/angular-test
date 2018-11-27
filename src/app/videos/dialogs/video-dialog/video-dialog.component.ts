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
    this.setVideo(this.data.video);
  }

  setVideo(video) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video.id.videoId);
    this.data.video = video;
  }

  onClose(): void {
    this.dialogRef.close('button close');
  }

  onPrev(): void {

    const index = this.data.videos.indexOf(this.data.video);
    const video = this.data.videos[index - 1];
    if (video) {
      this.setVideo(video);
    }
  }
  onNext(): void {

    const index = this.data.videos.indexOf(this.data.video);
    const video = this.data.videos[index + 1];
    if (video) {
      this.setVideo(video);
    }
  }
}
