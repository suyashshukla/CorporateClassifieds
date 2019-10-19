import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path : '', redirectTo : 'classifieds', pathMatch : 'full'},
  {path : 'classifieds', component : ClassifiedsComponent},
  {path : 'me/classifieds', component : MyClassifiedsComponent},
  {path : 'inbox', component : InboxComponent},
  {path : 'admin', component : AdminComponent}
  ];



import { AdminComponent } from './Admin';

import { ClassifiedsComponent } from './Classifieds';

import { InboxComponent } from './Inbox';

import { MyClassifiedsComponent } from './MyClassifieds';

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
