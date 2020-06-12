
import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AddCustomerComponent} from '../add-customer/add-customer.component';
import { AddService } from '../service/add.service';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent{
  updateUserInfo: any;
  addCusForm: any;

   constructor(public dialog: MatDialog,private add:AddService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCustomerComponent,{
      width: '640px',disableClose: true 
    });
}
ngOnInit() {
  this.add.getNewUserInfo().subscribe(info => {
    this.updateUserInfo = info;
  });
}
oDialog(): void {
     const dialogRef = this.dialog.open(DeleteComponent, {
      width: '340px',
    });
}

}

