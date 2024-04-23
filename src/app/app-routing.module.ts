import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { IndexComponent } from './products/index/index.component';
import { DetailsComponent } from './products/details/details.component';
import { MainComponent } from './common/layouts/main/main.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: MainComponent,
    canActivate: [authGuard],
  },

  

  {
    path: 'products/:id',
    component: DetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
