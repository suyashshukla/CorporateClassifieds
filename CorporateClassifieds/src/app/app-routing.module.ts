import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path : '', redirectTo : 'classifieds', pathMatch : 'full'},
  {path : 'classifieds', component : ClassifiedsComponent},
  {path : 'me/classifieds', component : MyClassifiedsComponent},
  {path : 'inbox', component : InboxComponent},
  {path : 'admin', component : AdminComponent}
  ];



import { AdminComponent } from './Admin/admin.component';

import { ClassifiedsComponent } from './Classifieds/classifieds.component';

import { InboxComponent } from './Inbox/inbox.component';

import { MyClassifiedsComponent } from './MyClassifieds/myClassifieds.component';

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
