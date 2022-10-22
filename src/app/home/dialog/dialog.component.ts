import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from 'src/model/Dialog.model';
import { FormGroup,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
 // form: FormGroup;
  name:string="";
  empid:string="";
  email:string="";
action:string="edit"
  constructor(
   // private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {

  data.action=this.action
  }

  // onformSubmit(){
  //   console.log(this.data)
    
  // }


  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  
  }

}
