import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassifiedsComponent } from './';
import { ClassifiedsRoutingModule } from './classifieds-routing.module';
import { SharedModule } from '../Shared/shared.module';
import { AppService } from '../Shared/AppService';
import { AdGridComponent } from '../Shared';

@NgModule({
  imports: [CommonModule, ClassifiedsRoutingModule, SharedModule],
  declarations: [ClassifiedsComponent],
  bootstrap: [ClassifiedsComponent,],
  providers: [AppService]
})

export class ClassifiedsModule { }
