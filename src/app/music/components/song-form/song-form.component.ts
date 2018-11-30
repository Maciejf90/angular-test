import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Song } from 'src/app/models';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss']
})
export class SongFormComponent implements OnInit {

  _song: Song;
  @Input()
  set song(song) {
    this._song = song;
    if (song) {
      // this.genders.
      if (this._song.genders) {
        this._song.genders.forEach(v => this.genders.push(this.fb.control('')));
      }
      this.songForm.patchValue(song);
    }
  }

  @Output()
  cancel = new EventEmitter<void>();

  @Output()
  save = new EventEmitter<Song>();

  public songForm = this.fb.group({
    title: ['', Validators.required],
    year: ['', Validators.required],
    favorite: [false, Validators.required],
    genders: this.fb.array([])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }

  onSubmit() {
    console.log('SUBMIT', this.songForm.value);
  }

  onCancel() {
    this.song = this._song;
    this.cancel.next();
  }


  get genders() {
    return this.songForm.get('genders') as FormArray;
  }

  addGender() {
    this.genders.push(this.fb.control(''));
  }

  removeGender(index: number) {
    this.genders.removeAt(index);
  }

}
