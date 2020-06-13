import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor() { }
  private newUer = new BehaviorSubject<any>({
    fname:'',
   lname: '',
  mobile: '',
   email:  '',
   address: ''
  });
  setNewUserInfo(user: any) {
    //alert(JSON.stringify(user));
    this.newUer.next(user);
  }
  getNewUserInfo() {
    return this.newUer.asObservable();
  }
}
