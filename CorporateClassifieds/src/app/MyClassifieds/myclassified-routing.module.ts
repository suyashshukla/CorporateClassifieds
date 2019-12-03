import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ActiveComponent, HistoryComponent, CreateComponent, HomeComponent } from './';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'active', pathMatch : 'full' },
      { path: 'active', component: ActiveComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'create', component: CreateComponent }
    ]
  },
  ]

@NgModule(
  {
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  }
)


export class MyCLassifiedRoutingModule {}
