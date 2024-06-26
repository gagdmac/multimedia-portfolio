// routerConfig.ts

import { Routes } from '@angular/router';

// core components
import { HomeComponent } from './components/home/home.component';
import { MeComponent } from './components/me/me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PrototypesComponent } from './components/prototypes/prototypes.component';
import { DesignsComponent } from './components/designs/designs.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'me', component: MeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'prototypes', component: PrototypesComponent },
  { path: 'designs', component: DesignsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
export default appRoutes;
