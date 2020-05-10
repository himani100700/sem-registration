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

const routes: Routes = [
  // {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component: HomeComponent},
  {path:"student",component: StudentComponent},
  {path:"faculty",component: FacultyComponent},
  {path:"proceed",component: ProceedComponent},
  {path:"form",component: FormComponent},
  {path:"submitted",component: SubmittedComponent}, 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    
    MatToolbarModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
