import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-pop-up-window',
  templateUrl: './pop-up-window.component.html',
  styleUrls: ['./pop-up-window.component.scss']
})
export class PopUpWindowComponent implements OnInit {
  constructor(public userService: UserService) { }
  ngOnInit(): void {
  }

  closePopup() {
    this.userService.isPopupOpen = false;
  }
}
