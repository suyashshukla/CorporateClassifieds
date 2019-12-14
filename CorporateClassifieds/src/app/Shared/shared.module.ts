import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdGridComponent, AdListComponent } from './'
import { AppService } from './AppService';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdGridComponent, AdListComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [AdGridComponent, AdListComponent, FormsModule, ReactiveFormsModule],
  providers: [AppService]
  
})
export class SharedModule { }
