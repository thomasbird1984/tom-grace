import {Component, Input, OnInit} from '@angular/core';
import { Party } from './Party';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent implements OnInit {
  @Input() party: Party;

  constructor() { }

  ngOnInit() {
  }

}
