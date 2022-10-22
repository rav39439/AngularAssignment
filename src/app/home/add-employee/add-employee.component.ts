import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from 'src/model/Dialog.model';
import { FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  name:string="";
  empid:string="";
  email:string="";
action:string="add"
  constructor(
    public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {

  data.action=this.action
  }

  


  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  
  }

}
