import { AuthGuard } from './@core/auth.guard';
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./@app/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./@app/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'chat',
    loadChildren: () =>
      import('./chatting/chating.module').then((m) => m.ChatingModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
