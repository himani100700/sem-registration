import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import {NgxPaginationModule} from 'ngx-pagination'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FacultyComponent } from './faculty/faculty.component';
import { ProceedComponent } from './proceed/proceed.component';
import { SubmittedComponent } from './submitted/submitted.component';
import { StudentComponent } from './student/student.component';
import { FormComponent } from './form/form.component';
import { FacultypageComponent } from './facultypage/facultypage.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ManagestudentComponent } from './managestudent/managestudent.component';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatestdComponent } from './createstd/createstd.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisteredstdComponent } from './registeredstd/registeredstd.component';
import { CreatefacultyComponent } from './createfaculty/createfaculty.component';
import { SummaryComponent } from './summary/summary.component';
import { CreateLibDueComponent } from './create-lib-due/create-lib-due.component';
import { ClearLibDueComponent } from './clear-lib-due/clear-lib-due.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { FacultypopupComponent } from './facultypopup/facultypopup.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UpdateFacultyComponent } from './update-faculty/update-faculty.component';
import { CreatestdService } from './createstd.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacultyComponent,
    ProceedComponent,
    SubmittedComponent,
    StudentComponent,
    FormComponent,
    FacultypageComponent,
    MainNavComponent,
    ManagestudentComponent,
    DashboardComponent,
    CreatestdComponent,
    LogoutComponent,
    RegisteredstdComponent,
    CreatefacultyComponent,
    SummaryComponent,
    CreateLibDueComponent,
    ClearLibDueComponent,
    UpdateStudentComponent,
    FacultypopupComponent,
    DeleteStudentComponent,
    UpdatePasswordComponent,
    UpdateFacultyComponent,
   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    NgxPaginationModule,
    MatDialogModule
  ],
  entryComponents:
[FacultypopupComponent],
  providers: [CreatestdService,AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
  
  
})
export class AppModule { }
