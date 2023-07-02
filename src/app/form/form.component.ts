import { Component, OnInit } from '@angular/core';
import PrivateUserDetails from '../Models/PrivateUserDetails';
import { UserService } from '../user.service';

import {FormControl, Validators} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']

})

export class FormComponent implements OnInit {
  childFName = new FormControl('', [Validators.required]);
  userArr: PrivateUserDetails[] = []
  user = new PrivateUserDetails(0, " ", " ", " ", "01/01/2003", " ", " ", -1, " "," ");
  child = new PrivateUserDetails(0, " ", " ", " ",  "01/01/2003", " ", " ", -1, " "," ");
  childArr: PrivateUserDetails[] ;
  
  display = false;
  index: number;
  all: PrivateUserDetails[];
  familyId = 0;
  displayWife = false;
  Married=false;

  constructor(public userService: UserService) { }

  // logIn() {
  //    this.userService.saveInStorage(this.user);
  //   this.userService.currentUser.next(this.user);

  // }
 

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((succ) => {
      this.all = succ;
      console.log(this.all)
    },
      (err) => {
        alert("התרחשה שגיאה בקבלת הנתונים");
        console.log(err)
      })
    this.user = this.userService.getFromStorage()
this.userService.currentUserService.FamilyId=this.familyId++;
  }
  save() {
    
    if(  this.userService.currentUserService.Genus=="male"&&this.Married==true)
    this.userService.currentUserService.Status="father";
    else if(this.userService.currentUserService.Genus=="fmale"&&this.Married==true)
    this.userService.currentUserService.Status="mother"
    else
    this.userService.currentUserService.Status="single";
    this.userService.addUser(this.userService.currentUserService).subscribe(
       (suc) => { console.log("הצליח") },
       (err) => {
        
        console.log(err)
    });
    console.log(this.userService.currentUserService)
  }
  getErrorMessage() {
    if (this.childFName.hasError('required')) {
      return 'You must enter a value';
    }
    return this.childFName.hasError('childFName') ? 'Not a valid childFName' : '';
  }
moreChild() {
  this.display = true;
}

addChild() {
  this.child.SpouseId=this.userService.currentUserService.SpouseId;
  this.child.Status="child";
  this.child.HMO=this.userService.currentUserService.HMO;
  this.child.FamilyId=this.userService.currentUserService.FamilyId;
  console.log(this.child)
  this.userService.addUser(this.child).subscribe((succ) => {
    console.log("succ")})
    this.child=new PrivateUserDetails(0, " ", " ", " ", null, " ", " ", -1, " "," ");
this.display = false;
}


}