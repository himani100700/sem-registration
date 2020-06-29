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
import { AuthGuard , } from './auth.guard';
import { FacultyauthGuard , } from './facultyauth.guard';
const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component: HomeComponent},
  {path:"student",component: StudentComponent},
  {path:"faculty",component: FacultyComponent},
  {path:"proceed",component: ProceedComponent, canActivate:[AuthGuard]},
  {path:"form",component: FormComponent,canActivate:[AuthGuard]},
  {path:"submitted",component: SubmittedComponent,canActivate:[AuthGuard]}, 
  {path:"facultypage",component: FacultypageComponent,
  children:[
  {path:"managestudent",component: ManagestudentComponent, canActivate:[FacultyauthGuard]},
  {path:"main-nav",component: MainNavComponent, canActivate:[FacultyauthGuard]},
  {path:"dashboard",component: DashboardComponent, canActivate:[FacultyauthGuard]},
  {path:"createstd",component: CreatestdComponent, canActivate:[FacultyauthGuard]},
  {path:"logout",component: LogoutComponent, canActivate:[FacultyauthGuard]},
  {path:"registeredstd",component: RegisteredstdComponent, canActivate:[FacultyauthGuard]},
  {path:"createfaculty",component: CreatefacultyComponent, canActivate:[FacultyauthGuard]},
  {path:"summary",component: SummaryComponent, canActivate:[FacultyauthGuard]},
  {path:"clear-lib-due",component: ClearLibDueComponent, canActivate:[FacultyauthGuard]},
  {path:"create-lib-due",component: CreateLibDueComponent, canActivate:[FacultyauthGuard]},
  {path:"update-student",component: UpdateStudentComponent, canActivate:[FacultyauthGuard]},
  {path:"delete-student",component: DeleteStudentComponent, canActivate:[FacultyauthGuard]},
  {path:"facultypopup",component: FacultypopupComponent, canActivate:[FacultyauthGuard]},
  {path:"update-faculty",component: UpdateFacultyComponent, canActivate:[FacultyauthGuard]},
  {path:"update-password",component: UpdatePasswordComponent, canActivate:[FacultyauthGuard]},
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
