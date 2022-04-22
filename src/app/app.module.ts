import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DeptserviceService } from './deptservice.service'

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DeptserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
