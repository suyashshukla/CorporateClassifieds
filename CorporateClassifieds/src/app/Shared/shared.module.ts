import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdGridComponent, AdListComponent, ClassifiedListComponent, ClassifiedDropDownComponent } from './'
import { AppService } from './AppService';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdGridComponent, AdListComponent, ClassifiedListComponent, ClassifiedDropDownComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [AdGridComponent, AdListComponent, ClassifiedListComponent, FormsModule, ReactiveFormsModule],
  providers: [AppService]
  
})
export class SharedModule { }
