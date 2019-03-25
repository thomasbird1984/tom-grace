export enum PartyType {
  bride = 'bride',
  groom = 'groom',
  bridesmaid = 'bridesmaid',
  groomsmen = 'groomsmen',
}

export class Party {
  id: number;
  firstName: string;
  lastName: string;
  nickName: string;
  description?: string;
  img: string;
  type: PartyType;
}
