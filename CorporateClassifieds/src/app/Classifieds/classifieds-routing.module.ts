import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClassifiedsComponent } from './Dashboard/classifieds.component';

const routes: Routes = [
  { path: '', redirectTo: '/classifieds', pathMatch: 'full' },
  { path: 'classifieds', component: ClassifiedsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClassifiedsRoutingModule { }
