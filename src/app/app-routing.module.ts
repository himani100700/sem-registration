import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
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
import { DashboardComponent } from './dashboard/dashboard.component'
import { CreatestdComponent } from './createstd/createstd.component'
import { LogoutComponent } from './logout/logout.component'
import { RegisteredstdComponent } from './registeredstd/registeredstd.component';
import { CreatefacultyComponent } from './createfaculty/createfaculty.component';
import { SummaryComponent } from './summary/summary.component';
import { ClearLibDueComponent } from './clear-lib-due/clear-lib-due.component';
import { CreateLibDueComponent } from './create-lib-due/create-lib-due.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component: HomeComponent},
  {path:"student",component: StudentComponent},
  {path:"faculty",component: FacultyComponent},
  {path:"proceed",component: ProceedComponent},
  {path:"form",component: FormComponent},
  {path:"submitted",component: SubmittedComponent}, 
  {path:"facultypage",component: FacultypageComponent,
  children:[
  {path:"managestudent",component: ManagestudentComponent},
  {path:"main-nav",component: MainNavComponent},
  {path:"dashboard",component: DashboardComponent},
  {path:"createstd",component: CreatestdComponent},
  {path:"logout",component: LogoutComponent},
  {path:"registeredstd",component: RegisteredstdComponent},
  {path:"createfaculty",component: CreatefacultyComponent},
  {path:"summary",component: SummaryComponent},
  {path:"clear-lib-due",component: ClearLibDueComponent},
  {path:"create-lib-due",component: CreateLibDueComponent},
  {path:"update-student",component: UpdateStudentComponent},
  ]
},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    BrowserModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
