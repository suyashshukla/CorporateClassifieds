import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './Dashboard/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from './AdminService';

@NgModule({
  imports: [CommonModule, AdminRoutingModule, FormsModule, HttpClientModule],
  declarations: [AdminComponent],
  bootstrap: [AdminComponent]
})

export class AdminModule { }
