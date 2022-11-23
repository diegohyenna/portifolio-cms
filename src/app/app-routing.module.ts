import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedGuard } from './guards/logged/logged.guard';
import { LoginGuard } from './guards/login/login.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'hero',
    loadChildren: () =>
      import('./pages/hero/hero.module').then((m) => m.HeroModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'project',
    loadChildren: () =>
      import('./pages/project/project.module').then((m) => m.ProjectModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
    canActivate: [LoggedGuard],
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
