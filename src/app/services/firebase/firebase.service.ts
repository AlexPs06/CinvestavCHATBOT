import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/models/User.model';

import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  /**
   * Constructor de la clase
   * @param firestore clase de firebase para guardar datos en firestore
   * @param database clase de firebase en angular para guardar datos en database fire
   */
  constructor( 
    private firestore: AngularFirestore, //firebase para usar firestore
    private database: AngularFireDatabase
    ) {
     }

     /**
      * Funcion para guardar un archivo en firebase
      * @param file arhivo a guardar de firebase este es un json de tipo file
      */
    addFiles(file):Boolean{
      this.database.database.ref("Material").push(file).then(response=>{
        return true;

      }, error=>{
        return false;
      })
      return false;
    }


    /**
     * Función para guardar un usuario e firebase se hizo se probo pero actualmente los usuarios ya no se almacenan ahi  
     * @param data objeto tipo usuario  
     */
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
  /**
   * Función para obtener los usuarios de firebase
   */
  getUsers() { 
    
    return this.firestore.collection("usuarios/").snapshotChanges();
  }
 
 /**
  * Función para actualizar un usuario esta funcion esta en proceso 
  * @param id id del usuario a actualizar 
  * @param user usuario a actualizar 
  */ 
  updateUser(id, user:User) {
    return this.firestore
        .collection("usuarios/")
        .doc(id)
        .set(
          { type: user.type }, 
          { merge: true });
 }
}
