import { Component, OnInit, VERSION, ViewChild, Input, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DeleteComponent } from '../delete/delete.component';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';
import { AddService } from '../service/add.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  @Input() text:any;
  //@Output() searchvalue =new EventEmitter();
  public breakpoint: number; // Breakpoint observer code
  public fname: string = ``;
  public lname: string = ``;
  public mobile: string = ``;
  public email: string = ``;
  public address: string = ``;
  public addCusForm: FormGroup;
  // addCusForm =new FormGroup({fname:new FormControl(),
  //   lname:new FormControl(),
  //   mobile:new FormControl(),
  //   email:new FormControl(),
  //   address:new FormControl()});
 
  wasFormChanged = false;
  updateUserInfo: any;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private add:AddService
  ) { }

  public ngOnInit(): void {
    this.add.getNewUserInfo().subscribe(info => {
      this.updateUserInfo = info;
    });
    this.addCusForm = this.fb.group({
      IdProof: null,
      firstname: [this.fname, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      lastname: [this.lname, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      email: [null, [Validators.required, Validators.email]],
      mobile:[null,[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address:[null]
    });
    this.breakpoint = window.innerWidth <= 600 ? 1 : 2; // Breakpoint observer code
  }

  public onAddCus(): void {
    //alert(this.address)
    this.add.setNewUserInfo({fname:this.fname,lname:this.lname,email:this.email,mobile:this.mobile,address:this.address})
    this.dialog.closeAll();
    this.markAsDirty(this.addCusForm);
  }

  openDialog(): void {
    console.log(this.wasFormChanged);
    if(this.addCusForm.dirty) {
      const dialogRef = this.dialog.open(DeleteComponent, {
        width: '340px',
      });
    } else {
      this.dialog.closeAll();
    }
  }

  // tslint:disable-next-line:no-any
  public onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }

  private markAsDirty(group: FormGroup): void {
    group.markAsDirty();
    // tslint:disable-next-line:forin
    for (const i in group.controls) {
      group.controls[i].markAsDirty();
    }
  }

  formChanged() {
    this.wasFormChanged = true;
  }

}