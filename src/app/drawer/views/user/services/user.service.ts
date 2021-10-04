import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  create_NewUser(user: User){
    return this.firestore.collection('users').add(user);
  }
  /*read_Icecream: Chama o método snapshotChanges , que obterá registros e também será registrado para receber atualizações */
  read_Users(){
    return this.firestore.collection('users').snapshotChanges();
  }
  // /*update_Icecream : atualiza o registro pegando o ID e chamando o método de atualização */
  // update_Icecream(recordID,record) {
  //   this.firestore.doc('Icecreams/' + recordID).update(record);
  // }
  // /*delete_Icecream : chama o método de exclusão  ao registrar o ID*/
  // delete_Icecream(record_id) {
  //   this.firestore.doc('Icecreams/' + record_id).delete();
  // }
}
