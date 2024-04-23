import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/auth.component').then((m) => m.AuthComponent),
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./products/index/index.component').then((m) => m.IndexComponent),
  },

  {
    path: 'cart',
    loadComponent: () =>
      import('./cart/cart.component').then((m) => m.CartComponent),
  },

  {
    path: 'products/:id',
    loadComponent: () =>
      import('./products/details/details.component').then(
        (m) => m.DetailsComponent
      ),
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
