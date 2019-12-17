import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassifiedsComponent } from './';
import { ClassifiedsRoutingModule } from './classifieds-routing.module';
import { SharedModule } from '../Shared/shared.module';
import { AppService } from '../Shared/AppService';

@NgModule({
  imports: [CommonModule, ClassifiedsRoutingModule, SharedModule],
  declarations: [ClassifiedsComponent],
  bootstrap: [ClassifiedsComponent],
  providers: [AppService]
})

export class ClassifiedsModule { }
