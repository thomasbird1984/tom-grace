import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {
  rsvp: any;
  rsvpEmail: string;
  plusOne: string;
  coming: string;
  isRsvpDisabled = false;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const userEmail = this.route.snapshot.paramMap.get('user_id');
    this.rsvp = userEmail || '';

    if (userEmail) {
      this.isRsvpDisabled = true;
      this.rsvpEmail = userEmail;
    }
  }

  toggleComing(isComing) {
    this.coming = isComing;
  }

}
