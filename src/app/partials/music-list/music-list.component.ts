import {Component, Input, OnInit} from '@angular/core';
import { MusicListItem } from '../music-list-item/music-list-item.component';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {
  @Input() musicList: MusicListItem[];

  constructor() { }

  ngOnInit() {
  }

}
