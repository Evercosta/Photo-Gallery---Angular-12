import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './components/';
import { RouterModule } from '@angular/router';
import { SidebarjsModule } from 'ng-sidebarjs';
import { environment as env } from '../../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { 
  UserService, UserComponent, HomeComponent, PhotoModule
} from './views';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DrawerComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SidebarjsModule.forRoot(),
    AngularFireModule.initializeApp(env.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    PhotoModule
  ],
  providers: [UserService],
})
export class DrawerModule { }
