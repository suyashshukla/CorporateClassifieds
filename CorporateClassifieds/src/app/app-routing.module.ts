import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'classifieds', pathMatch: 'full' },
  { path: 'classifieds', loadChildren: () => import('./Classifieds/classifieds.module').then(m => m.ClassifiedsModule) },
  { path: 'me/classifieds', loadChildren: () => import('./MyClassifieds/myclassified.module').then(m => m.MyClassifiedsModule) },
  { path: 'inbox', loadChildren: () => import('./Inbox/inbox.module').then(m => m.InboxModule) },
  { path: 'admin', loadChildren: () => import('./Admin/admin.module').then(m => m.AdminModule) }
  ];



@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
