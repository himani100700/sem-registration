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
import { UpdateFacultyComponent } from './update-faculty/update-faculty.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { FacultypopupComponent } from './facultypopup/facultypopup.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component: HomeComponent},
  {path:"student",component: StudentComponent},
  {path:"faculty",component: FacultyComponent},
  {path:"proceed",component: ProceedComponent, canActivate:[AuthGuard]},
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
  {path:"delete-student",component: DeleteStudentComponent},
  {path:"facultypopup",component: FacultypopupComponent},
  {path:"update-faculty",component: UpdateFacultyComponent},
  {path:"update-password",component: UpdatePasswordComponent},
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
