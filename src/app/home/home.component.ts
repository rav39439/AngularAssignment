import { Component, OnInit,Inject } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ViewChild } from '@angular/core';
import {Item} from '../../model/Employee.model'
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { DialogComponent } from './dialog/dialog.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { EmpolyeeSeriviceService } from '../empolyee-serivice.service';


interface PeriodicElement {
  name: string,
  email: string,
  empid: number
 
  
}






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //private itemsCollection: AngularFirestoreCollection<Item>;
  dataSource = new MatTableDataSource();
email: string="";
  name: string="";
empid:number=0;
mydata:PeriodicElement;


 
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
 
 //items: Observable<Item[]>;


  displayedColumns: string[] = ['empid', 'email', 'name', 'actions'];
  constructor(private dataService: EmpolyeeSeriviceService,public dialog: MatDialog) {
  //   this.itemsCollection = afs.collection<Item>('mytest');
  // this.itemsCollection.valueChanges().subscribe(countries => this.items = countries)

  //  console.log(this.items)
   
  }


  openDialog(id:string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: this.name, email:this.email,empid:this.empid},
    });

    dialogRef.afterClosed().subscribe((result:Item) => {
      if(typeof(result)!='undefined'){
        this.dataService.Edititem(id,result)

      }
     else{
      console.log("no data")
     }
    });
  }
  openDialog1(id:string): void {
    const dialogRef = this.dialog.open(DeleteEmployeeComponent, {
      width: '250px',
      data: {name: this.name, email:this.email,empid:this.empid},
    });
    dialogRef.afterClosed().subscribe(result => {
      if(typeof(result)!='undefined'){
      
        this.dataService.deleteitem(id)
      }
     else{
      console.log("no data")
     }
    });
  }
  openDialog2(): void {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      width: '250px',
      data: {name: this.name, email:this.email,empid:this.empid},
    });
    dialogRef.afterClosed().subscribe((result:Item) => {
      this.mydata=result;
      console.log(result)
      console.log(this.mydata)
      
       this.dataService.addata(this.mydata)
     
    });
  }


  addItem(title: string,description:string) {
    // Persist a document id
    // const id = this.afs.createId();
    // const item: Item = { id, title,description };
    // this.itemsCollection.doc(id).set(item);
  }

  ngOnInit(){
    this.dataService.getData().subscribe(res =>{ 
      console.log(res)
      this.dataSource.data = res
    
    
    }
      );
  }

}




