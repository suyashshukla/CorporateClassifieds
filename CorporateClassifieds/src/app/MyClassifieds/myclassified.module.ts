import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyClassifiedsComponent, ActiveComponent, HistoryComponent} from './';
import { MyCLassifiedRoutingModule } from './myclassified-routing.module';

@NgModule({
  declarations: [MyClassifiedsComponent, ActiveComponent, HistoryComponent],
  imports: [CommonModule, MyCLassifiedRoutingModule],
  bootstrap: [MyClassifiedsComponent]
})

export class MyClassifiedsModule { }
