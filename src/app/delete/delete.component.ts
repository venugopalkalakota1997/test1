import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatDialogRef,MatDialog} from '@angular/material';
import {AddCustomerComponent} from '../add-customer/add-customer.component';
import { AddService } from '../service/add.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
updateUserInfo: any;

constructor(private fb: FormBuilder,private add:AddService,
private dialog: MatDialog,
              private dialogRef: MatDialogRef<DeleteComponent>) {} // Closing dialog window

public cancel(): void { // To cancel the dialog window
this.dialogRef.close();
}

public cancelN(): void { 
   
  this.add.getNewUserInfo().subscribe(info => {
    this.updateUserInfo = info;
  });
  this.updateUserInfo.fname='';
  this.updateUserInfo.lname='';
  this.updateUserInfo.mobile='';
  this.updateUserInfo.email='';
  this.updateUserInfo.address='';
    this.dialog.closeAll();
}

}