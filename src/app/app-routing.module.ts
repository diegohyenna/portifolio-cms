import { AboutEditComponent } from './about/about-edit/about-edit.component';
import { HomeComponent } from './home/home.component';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule), canActivate: [LoginGuard]
  },
  {
    path: 'hero',
    loadChildren: () => import('./hero/hero.module').then((m) => m.HeroModule), canActivate: [LoginGuard]
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule), canActivate: [LoginGuard]
  },
  {
    path: 'project',
    loadChildren: () =>
      import('./project/project.module').then((m) => m.ProjectModule), canActivate: [LoginGuard]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule), 
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
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
