import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor() { }
  private newUer = new BehaviorSubject<any>({
    fname:'VEn',
   lname: 'hh',
  mobile: '9876541230',
   email:  'qq@g',
   address: 'asdfghj'
  });
  setNewUserInfo(user: any) {
    //alert(JSON.stringify(user));
    this.newUer.next(user);
  }
  getNewUserInfo() {
    return this.newUer.asObservable();
  }
}
