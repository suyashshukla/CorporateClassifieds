import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveComponent, HistoryComponent} from './';
import { MyCLassifiedRoutingModule } from './myclassified-routing.module';

@NgModule({
  declarations: [ActiveComponent, HistoryComponent],
  imports: [CommonModule, MyCLassifiedRoutingModule],
  bootstrap: [ActiveComponent]
})

export class MyClassifiedsModule { }
