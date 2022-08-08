import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'chris-codeblog-einstellungen',
  templateUrl: './einstellungen.component.html',
  styleUrls: ['./einstellungen.component.css'],
})
export class EinstellungenComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit(): void {}
}
