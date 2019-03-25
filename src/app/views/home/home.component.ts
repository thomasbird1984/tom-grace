import { Component, OnInit } from '@angular/core';
import {MOCK_PARTY} from '../../mocks/party';
import {PartyType} from '../../partials/party/Party';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  party = MOCK_PARTY;
  groomsmens = _.filter(this.party, person => person.type === PartyType.groomsmen);
  bridesmaids = _.filter(this.party, person => person.type === PartyType.bridesmaid);
  groom = _.find(this.party, person => person.type === PartyType.groom);
  bride = _.find(this.party, person => person.type === PartyType.bride);

  constructor() {
  }

  ngOnInit() {
  }
}
