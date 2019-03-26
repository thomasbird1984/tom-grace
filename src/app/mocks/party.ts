import {Party, PartyType} from '../partials/party/Party';

export const MOCK_PARTY: Party[] = [
  {
    id: 1,
    firstName: 'Grace',
    lastName: 'Choi',
    nickName: '',
    description: '<p>This is the brides description, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid corporis, deserunt enim excepturi facilis fugit ipsa nihil nulla officia quod rem reprehenderit sed tempore temporibus totam vel vero voluptas?',
    img: 'bridesmaid.jpg',
    type: PartyType.bride
  },
  {
    id: 2,
    firstName: 'Thomas',
    lastName: 'Bird',
    nickName: 'groomsmen.jpg',
    description: `<p>This is the grooms description, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid corporis, deserunt enim excepturi facilis fugit ipsa nihil nulla officia quod rem reprehenderit sed tempore temporibus totam vel vero voluptas?`,
    img: '',
    type: PartyType.groom
  },
  {
    id: 3,
    firstName: 'Joey',
    lastName: 'Genovese',
    nickName: '',
    description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid corporis, deserunt enim excepturi facilis fugit ipsa nihil nulla officia quod rem reprehenderit</p>',
    img: 'groomsmen.jpg',
    type: PartyType.groomsmen
  },
  {
    id: 4,
    firstName: 'Kyle',
    lastName: 'Lucas',
    nickName: '',
    description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid corporis, deserunt enim excepturi facilis fugit ipsa nihil nulla officia quod rem reprehenderit</p>',
    img: 'groomsmen.jpg',
    type: PartyType.groomsmen
  },
  {
    id: 5,
    firstName: 'Stefan',
    lastName: 'Munck',
    nickName: '',
    description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid corporis, deserunt enim excepturi facilis fugit ipsa nihil nulla officia quod rem reprehenderit</p>',
    img: 'groomsmen.jpg',
    type: PartyType.groomsmen
  },
  {
    id: 6,
    firstName: 'Lauren',
    lastName: 'G',
    nickName: '',
    description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid corporis, deserunt enim excepturi facilis fugit ipsa nihil nulla officia quod rem reprehenderit</p>',
    img: 'bridesmaid.jpg',
    type: PartyType.bridesmaid
  },
  {
    id: 7,
    firstName: 'Mandy',
    lastName: 'S',
    nickName: '',
    description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid corporis, deserunt enim excepturi facilis fugit ipsa nihil nulla officia quod rem reprehenderit</p>',
    img: 'bridesmaid.jpg',
    type: PartyType.bridesmaid
  }
];
