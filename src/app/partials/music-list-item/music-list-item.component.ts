import { Component, OnInit } from '@angular/core';

export interface MusicListItem {
  id: number;
  title: string;
  img?: string;
}

@Component({
  selector: 'app-music-list-item',
  templateUrl: './music-list-item.component.html',
  styleUrls: ['./music-list-item.component.scss']
})
export class MusicListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
