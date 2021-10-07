import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { DrawerComponent } from './components/drawer/drawer.component';
import { HomeComponent, PhotoComponent } from './views';
import { UserComponent } from './views';

const DrawerRoutes: Routes = [
    { 
      path: '', 
      component: DrawerComponent,
      children: [
        { 
          path: '', 
          component: HomeComponent,
          canActivate: [AuthGuard], 
        },
        { 
          path: 'user', 
          component: UserComponent,
          canActivate: [AuthGuard], 
        },
        { 
          path: 'photo', 
          component: PhotoComponent, 
          canActivate: [AuthGuard], 
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(DrawerRoutes)],
  exports: [RouterModule]
})

export class DrawerRoutingModule {
}
