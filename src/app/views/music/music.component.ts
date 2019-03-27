import { Component, Input, OnInit } from '@angular/core';
import { MusicListItem } from '../../partials/music-list-item/music-list-item.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  protected musicList: MusicListItem[] | any;

  constructor(
    private api: ApiService
  ) {
    // this.api.getSongsAll().subscribe(songs => {
    //   console.log('songs', songs);
    //   this.musicList = songs;
    // });
  }

  ngOnInit() {
  }
}
