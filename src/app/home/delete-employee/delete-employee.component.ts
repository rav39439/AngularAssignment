import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from 'src/model/Dialog.model';
import { FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss']
})
export class DeleteEmployeeComponent implements OnInit {

  name:string="";
  empid:string="";
  email:string="";
action:string="delete"
  constructor(
    public dialogRef: MatDialogRef<DeleteEmployeeComponent>,
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
