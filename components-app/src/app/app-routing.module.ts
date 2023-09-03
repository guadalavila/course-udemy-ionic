import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// en app-routing.module definimos las rutas principales de la aplicación.

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'alerts',
    loadChildren: () =>
      import('./pages/alerts/alerts.module').then((m) => m.AlertsPageModule),
  },

  {
    path: 'action-sheet',
    loadChildren: () =>
      import('./pages/action-sheet/action-sheet.module').then(
        (m) => m.ActionSheetPageModule
      ),
  },
  {
    path: 'avatar',
    loadChildren: () =>
      import('./pages/avatar/avatar.module').then((m) => m.AvatarPageModule),
  },
  {
    path: 'buttons',
    loadChildren: () =>
      import('./pages/buttons/buttons.module').then((m) => m.ButtonsPageModule),
  },
  {
    path: 'card',
    loadChildren: () =>
      import('./pages/card/card.module').then((m) => m.CardPageModule),
  },
  {
    path: 'check',
    loadChildren: () =>
      import('./pages/check/check.module').then((m) => m.CheckPageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
