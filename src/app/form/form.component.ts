import { Component, OnInit } from '@angular/core';
import PrivateUserDetails from '../Models/PrivateUserDetails';
import { UserService } from '../user.service';

import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  childFName = new FormControl('', [Validators.required]);
  userArr: PrivateUserDetails[] = []
  user = new PrivateUserDetails(0, " ", " ", " ", "01/01/2003", " ", " ", -1, " ");
  child = new PrivateUserDetails(0, " ", " ", " ",  "01/01/2003", " ", " ", -1, " ");
  childArr: PrivateUserDetails[] = []
  display = false;
  index: number;
  all: PrivateUserDetails[];
  familyId = 0;
  displayWife = false;
  wifeIdNumber: string;
  constructor(public userService: UserService) { }

  logIn() {
    this.userService.saveInStorage(this.user);
    this.userService.currentUser.next(this.user);

  }
 

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
    
    this.userService.currentUserService.Status="father"
   this.userService.currentUserService.Genus == "male" ? this.userService.currentUserService.Status == "father" : this.userService.currentUserService.Status == "mother";
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
  this.child.Status="child";
  this.child.HMO=this.userService.currentUserService.HMO;
  this.child.FamilyId=this.userService.currentUserService.FamilyId;
  console.log(this.child)
  this.userService.addUser(this.child).subscribe((succ) => {
    console.log("succ")})
    this.child=new PrivateUserDetails(0, " ", " ", " ", null, " ", " ", -1, " ");
this.display = false;
}
downLoad(){
  this.userService.getAllUsers().subscribe((succ) => {
    this.all = succ;
    console.log(this.all)
  },
    (err) => {
      alert("התרחשה שגיאה בקבלת הנתונים");
      console.log(err)
    })
    var c=""
    this.all.map(i=>{c+=JSON.stringify(i)+"," ;c+="/n";})

c="data:apliction/csv,"+ encodeURIComponent(c);
var anchor=document.createElement("X");
anchor.setAttribute("href",c);
anchor.setAttribute("downLoad","somedata.csv");
document.body.append(anchor);
anchor.click();
}gi
}
