import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  vorname: string = '';
  nachname: string = '';

  constructor() { }
}
