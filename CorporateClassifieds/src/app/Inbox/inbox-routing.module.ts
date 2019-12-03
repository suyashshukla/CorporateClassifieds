import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InboxComponent } from './';

const routes: Routes = [{
  path: '', redirectTo: 'inbox', pathMatch : 'full'
},
  { path: 'inbox', component: InboxComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InboxRoutingModule { }
