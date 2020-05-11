import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { ProceedComponent } from './proceed/proceed.component';
import { FormComponent } from './form/form.component';
import { SubmittedComponent } from './submitted/submitted.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular//material/toolbar';
import 'hammerjs';
import { FacultypageComponent } from './facultypage/facultypage.component';
import { ManagestudentComponent } from './managestudent/managestudent.component';
import {MatInputModule} from '@angular/material/input';
import { MainNavComponent } from './main-nav/main-nav.component';

const routes: Routes = [
  // {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component: HomeComponent},
  {path:"student",component: StudentComponent},
  {path:"faculty",component: FacultyComponent},
  {path:"proceed",component: ProceedComponent},
  {path:"form",component: FormComponent},
  {path:"submitted",component: SubmittedComponent}, 
  {path:"managestudent",component: ManagestudentComponent},
  {path:"facultypage",component: FacultypageComponent},
  {path:"main-nav",component: MainNavComponent}

  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    
    MatToolbarModule,
    MatInputModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
