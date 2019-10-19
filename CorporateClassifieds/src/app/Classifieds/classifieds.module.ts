import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassifiedsComponent } from './Dashboard/classifieds.component';
import { ClassifiedsRoutingModule } from './classifieds-routing.module';

@NgModule({
  imports: [CommonModule, ClassifiedsRoutingModule],
  declarations: [ClassifiedsComponent],
  bootstrap: [ClassifiedsComponent]
})

export class ClassifiedsModule { }
