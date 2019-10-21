import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveComponent, HistoryComponent, CreateComponent, HomeComponent} from './';
import { MyCLassifiedRoutingModule } from './myclassified-routing.module';

@NgModule({
  declarations: [ActiveComponent, HistoryComponent, CreateComponent, HomeComponent],
  imports: [CommonModule, MyCLassifiedRoutingModule],
  bootstrap: [ActiveComponent]
})

export class MyClassifiedsModule { }
