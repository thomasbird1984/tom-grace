import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {
  rsvp: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('user_id');
    this.rsvp = userId || 'Null';
  }

}
