import { Routes } from '@angular/router';
import { AuthComponent } from './presentation/pages/auth/auth.component';
import { DashboardComponent } from './presentation/pages/dashboard/dashboard.component';
import { authGuard } from './infra/guard/auth.guard';
import { StockComponent } from './presentation/pages/stock/stock.component';
import { FournisseurComponent } from './presentation/pages/fournisseur/fournisseur.component';
import { UtilisateurComponent } from './presentation/pages/utilisateur/utilisateur.component';
import { CommandeComponent } from './presentation/pages/commande/commande.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: AuthComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    data: { roles: ['admin', 'manager', 'user'] }, // parents peuvent tout voir

    children: [
      {
        path: 'stock',
        component: StockComponent,
        canActivate: [authGuard],
        data: { roles: ['manager'] }
      },
      {
        path: 'fournisseur',
        component: FournisseurComponent,
        canActivate: [authGuard],
        data: { roles: ['user', 'admin'] }
      },
      {
        path: 'utilisateur',
        component: UtilisateurComponent,
        canActivate: [authGuard],
        data: { roles: ['admin'] }
      },
      {
        path: '', redirectTo: 'utilisateur', pathMatch: 'full'
      }
    ]
  },

  { path: '**', redirectTo: 'login' }
];

