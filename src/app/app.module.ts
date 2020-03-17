import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FacultyComponent } from './faculty/faculty.component';
import { ProceedComponent } from './proceed/proceed.component';
import { SubmittedComponent } from './submitted/submitted.component';
import { StudentComponent } from './student/student.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacultyComponent,
    ProceedComponent,
    SubmittedComponent,
    StudentComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
