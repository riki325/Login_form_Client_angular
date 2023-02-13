import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-guid',
  templateUrl: './guid.component.html',
  styleUrls: ['./guid.component.scss']
})
export class GuidComponent implements OnInit, OnDestroy {
  userName = null;
  sub: Subscription
  constructor(public userService: UserService) { }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {

    this.sub = this.userService.currentUser.subscribe(succ => {
      this.userName = succ?.FirstName + " " + succ?.LastName;
      console.log("from subscribe");

    })
  }
}
