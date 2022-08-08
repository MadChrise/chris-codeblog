import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  static count = 0;
  vorname: string = '';
  nachname: string = '';

  constructor() {
    UserService.count += 1;
    console.log(`UserService wurde ${UserService.count} erzeugt`);
  }
}
