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
      apiKey: "AIzaSyAZ9x_QbhCfY9aEsqxEiYhWtfIRNGl_qeo",
      authDomain: "mynewproject-ae49a.firebaseapp.com",
      projectId: "mynewproject-ae49a",
      storageBucket: "mynewproject-ae49a.appspot.com",
      messagingSenderId: "939005557600",
      appId: "1:939005557600:web:ee766070db4bd2dadfbc05",
      measurementId: "G-YFKTT151SN"

     
    }),

    AngularFirestoreModule,
     BrowserAnimationsModule

  ],


  providers: [EmpolyeeSeriviceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
