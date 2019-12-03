import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { ActiveComponent, HistoryComponent, CreateComponent, HomeComponent} from './';
import { MyCLassifiedRoutingModule } from './myclassified-routing.module';
import { Advertisement} from '../Advertisement/advertisement.component';
import { SliderComponent } from './Slider/slider.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppService } from './AppService';

@NgModule({
  declarations: [ActiveComponent, HistoryComponent, CreateComponent, HomeComponent, SliderComponent, Advertisement],
  imports: [CommonModule, MyCLassifiedRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  providers: [AppService],
  bootstrap: [ActiveComponent]
})

export class MyClassifiedsModule { }
