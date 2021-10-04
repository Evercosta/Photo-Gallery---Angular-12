import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  create_NewPhoto(photo: any){
    return this.firestore.collection('photos').add(photo);
  }
  
  read_Photos(){
    return this.firestore.collection('photos').snapshotChanges();
  }
}
