import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from '.';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { environment as env } from '../../../../environments/environment';
import { SharedModule } from 'src/app/shared';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    PhotoComponent
  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(env.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    SharedModule,
    ModalModule.forRoot()
  ]
})
export class PhotoModule { }
