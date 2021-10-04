import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawerComponent } from './components/drawer/drawer.component';
import { HomeComponent, PhotoComponent } from './views';
import { UserComponent } from './views';

const DrawerRoutes: Routes = [
    { 
      path: '', 
      component: DrawerComponent,
      children: [
        { path: '', component: HomeComponent },
        { path: 'user', component: UserComponent },
        { path: 'photo', component: PhotoComponent }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(DrawerRoutes)],
  exports: [RouterModule]
})

export class DrawerRoutingModule {
}
