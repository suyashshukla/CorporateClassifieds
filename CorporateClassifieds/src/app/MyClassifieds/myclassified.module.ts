import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveComponent, HistoryComponent, CreateComponent, HomeComponent} from './';
import { MyCLassifiedRoutingModule } from './myclassified-routing.module';
import { SliderComponent } from './Slider/slider.component';

@NgModule({
  declarations: [ActiveComponent, HistoryComponent, CreateComponent, HomeComponent, SliderComponent],
  imports: [CommonModule, MyCLassifiedRoutingModule],
  bootstrap: [ActiveComponent]
})

export class MyClassifiedsModule { }
