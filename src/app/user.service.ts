import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import PrivateUserDetails from './Models/PrivateUserDetails';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser=new BehaviorSubject<PrivateUserDetails>(null);
  constructor( public http:HttpClient ) { }
  currentUserService:PrivateUserDetails=new PrivateUserDetails(0,"","","", "01/01/2003"," ", " " ,-1," ")
  baseUrl=`${environment.baseUrl}`
  
  saveInStorage(user) {
    localStorage.setItem("currentName", JSON.stringify(user));
  }
  getFromStorage() {
    let u = localStorage.getItem("currentName");
    if (!u)
      return null;
    return JSON.parse(u);
  }
  removeFromStorage() {
    localStorage.removeItem("currentUser");
  }
  // public addUser(user: PrivateUserDetails) {
  //   // ~(`${this.baseUrl}/Post`);
  //   return this.http.post<PrivateUserDetails>(`${this.baseUrl}`,{
    
      public addUser(user: PrivateUserDetails) {
        // ~(`${this.baseUrl}/Post`);
        return this.http.post<PrivateUserDetails>(`${this.baseUrl}`,{
          "FirstName":user.FirstName,
           "LastName": user.LastName,
           "IdNumber": user.IdNumber,
           "DateOfBirth": "2023-02-13T20:38:26.655",
           'Genus': user.Genus,
           "HMO": user.HMO,
           "FamilyId": user.FamilyId,
          "Status": user.Status
        })
        
      }
    
    
      //   "firstName": "string",
      //   "lastName": "string",
      //   "idNumber": "string",
      //   "dateOfBirth": "2023-02-13T20:38:26.655",
      //   "genus": "string",
      //   "hmo": "string",
      //   "familyId": 0,
      //   "status": "string"
      // }
    
  


  // addUser(user:PrivateUserDetails){
  //    return this.http.post<PrivateUserDetails>(`${this.baseUrl}?u=${user}`, user)
  //   // return this.http.post<any>(this.baseUrl, user);
  // }
  // public saveUser(user: PrivateUserDetails): Observable<any> {
  //   const url = 
  //   'https://localhost:7208/api/PrivateUserDetails';
  //   return this.http.post<PrivateUserDetails>(url, user);
  // }
  // public addUser(c: PrivateUserDetails) {
  //   ~(`${this.baseUrl}/Post`);
  //   return this.http.post<PrivateUserDetails>(`${this.baseUrl}/?u=${c}`, c);
  // }
  getAllUsers(){
    return this.http.get<PrivateUserDetails[]>(`${this.baseUrl}`)
  }

}