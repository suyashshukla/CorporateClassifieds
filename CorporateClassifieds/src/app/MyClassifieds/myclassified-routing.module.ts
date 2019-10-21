import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ActiveComponent, HistoryComponent} from './';

const routes: Routes = [
  { path: '', redirectTo: 'active', pathMatch : 'full' },
  { path: 'active', component: ActiveComponent},
  { path: 'history', component: HistoryComponent}
]

@NgModule(
  {
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  }
)


export class MyCLassifiedRoutingModule {}
