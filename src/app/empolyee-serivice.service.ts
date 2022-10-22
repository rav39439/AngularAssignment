import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable ,  BehaviorSubject } from 'rxjs';
import { Item } from 'src/model/Employee.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpolyeeSeriviceService {


  private _firebaseCollURL ="mytest";
 // private itemsCollection: AngularFirestoreCollection<any>;
  // items: Observable<any>;
  // private itemDoc: AngularFirestoreDocument<any>;
  // item: Observable<any>;

  // items$: Observable<Item[]>;
  // nameFilter$: BehaviorSubject<string|null>;
  // rollNoFilter$: BehaviorSubject<string|null>;
  constructor(private afs: AngularFirestore) {



   }
   

   getData(){
    return this.afs.collection<any>(this._firebaseCollURL).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() ;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }));
}


addata(item:Item){
  this.afs.collection<any>(this._firebaseCollURL).add(item)
}

deleteitem(id:string){
  this.afs.doc(`mytest/${id}`).delete();
}

Edititem(id:string,item:Item){
  this.afs.doc(`mytest/${id}`).set(item);
}
}
