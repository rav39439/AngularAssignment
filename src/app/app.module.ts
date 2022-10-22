import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmpolyeeSeriviceService } from './empolyee-serivice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './home/dialog/dialog.component';
import { AddEmployeeComponent } from './home/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './home/delete-employee/delete-employee.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    AppRoutingModule,
    MatTableModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCLOm6HzkKiJ9GZn1daP2k5C8BeDSeK31I",
  authDomain: "employeedetailsapp.firebaseapp.com",
  projectId: "employeedetailsapp",
  storageBucket: "employeedetailsapp.appspot.com",
  messagingSenderId: "3665313687",
  appId: "1:3665313687:web:7e1b7137ffb3c9e4118ed2",
  measurementId: "G-C7YMVRVKM6"

     
    }),

    AngularFirestoreModule,
     BrowserAnimationsModule

  ],


  providers: [EmpolyeeSeriviceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
