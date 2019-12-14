import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { ActiveComponent, HistoryComponent, CreateComponent, HomeComponent} from './';
import { MyCLassifiedRoutingModule } from './myclassified-routing.module';
import { SharedModule } from '../Shared/shared.module';
import { SliderComponent } from './Slider/slider.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppService } from '../Shared/AppService';

@NgModule({
  declarations: [ActiveComponent, HistoryComponent, CreateComponent, HomeComponent, SliderComponent],
  imports: [CommonModule, MyCLassifiedRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule, SharedModule],
  providers: [AppService],
  bootstrap: [ActiveComponent]
})

export class MyClassifiedsModule { }
