import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/models';
import { MatDialog } from '@angular/material';
import { VideoDialogComponent, VideoDialogData } from '../../dialogs/video-dialog/video-dialog.component';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnInit {

  @Input()
  video: Video;

  @Input()
  videos: Video[];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  showDialog() {
    console.log('SHOW');
    const data: VideoDialogData = {
      video: this.video,
      videos: this.videos
    };
    const dialogRef = this.dialog.open(VideoDialogComponent, {
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
