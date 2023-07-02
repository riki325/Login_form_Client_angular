import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import PrivateUserDetails from '../Models/PrivateUserDetails';
import { UserService } from '../user.service';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
 
  want=false;
userPassword="";
ManagerPassword="123"
isManager=false;
  arrDownload:PrivateUserDetails[]=[];
  constructor(public userService: UserService) { }

  download(){
    if(this.userPassword!=this.ManagerPassword)
    alert("הסיסמא שהקשת שגויה")
   else {
    this.isManager=true;
    this.userService.getAllUsers().subscribe((succ) => {
      this.arrDownload = succ;
      CsvString = "data:application/csv," + encodeURIComponent(CsvString);
    var anchor = document.createElement("A");
    anchor.setAttribute("href", CsvString);
    anchor.setAttribute("download", "somedata.csv");
    document.body.append(anchor);
    anchor.click();
    },
      (err) => {
        alert("התרחשה שגיאה בקבלת הנתונים");
        console.log(err)
      })
      var CsvString = "";
       this.arrDownload.map(item => {
        CsvString+=JSON.stringify(item)+",";
        CsvString += "\n";
    });
    }
  }
  IsManage(){
    this.want=true;
  }
  
 
 
 
 
  ngOnInit(): void {
   
  }
  

}
