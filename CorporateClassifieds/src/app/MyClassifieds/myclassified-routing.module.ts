import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ActiveComponent, HistoryComponent, MyClassifiedsComponent } from './';

const routes: Routes = [
  { path: '', component: ActiveComponent },
  { path: 'active', component: ActiveComponent },
  { path: 'history', component: HistoryComponent }
]

@NgModule(
  {
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  }
)


export class MyCLassifiedRoutingModule {}
