import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './document/document.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { AlertComponent } from './alert/alert.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'welcome/:name',
    component: WelcomeComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: 'document',
    component: DocumentComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: 'alerts/:id',
    component: AlertComponent,
    canActivate: [RouteGuardService],
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
