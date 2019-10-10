import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/models/User.model';

import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor( 
    private firestore: AngularFirestore, //firebase para usar firestore
    private database: AngularFireDatabase
    ) {
     }

    addFiles(file):Boolean{
      this.database.database.ref("Material/").push(file).then(response=>{
        return true;

      }, error=>{
        return false;
      })
      return false;
    }


    addUser(data:User) {
    let id;
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("usuarios/")
            .add(data)
            .then(res => {
              console.log(res.id)
              id=res.id;
            }, err => reject(err));
        
    });
  }
  getUsers() { 
    
    return this.firestore.collection("usuarios/").snapshotChanges();
  }
 
 //esta en proceso 
  updateUser(id, user:User) {
    return this.firestore
        .collection("usuarios/")
        .doc(id)
        .set(
          { type: user.type }, 
          { merge: true });
 }
}
