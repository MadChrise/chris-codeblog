import { Component } from '@angular/core';
import { UserService } from './_services/user.service';

@Component({
  selector: 'chris-codeblog-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'for-root';

  constructor(public userService: UserService) {
    this.userService.vorname = 'Super';
    this.userService.nachname = 'Man';
  }
}
