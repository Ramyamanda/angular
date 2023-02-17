import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { ServicesComponent } from './components/services/services.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AboutComponent } from './components/about/about.component';
import { APIComponent } from './components/api/api.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { CourceComponent } from './components/cource/cource.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { MycontactComponent } from './components/mycontact/mycontact.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { ParentComponent } from './components/parent/parent.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { PostComponent } from './components/post/post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { TaskComponent } from './components/task/task.component';
import { TestComponent } from './components/test/test.component';
import { ChildComponent } from './components/child/child.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { CrudComponent } from './crud/crud.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CrossFieldValidationsComponent } from './cross-field-validations/cross-field-validations.component';
import { FormValidationsComponent } from './components/form-validations/form-validations.component';
import { ReactiveFormValidationsComponent } from './reactive-form-validations/reactive-form-validations.component';
import { RoutingComponent } from './components/routing/routing.component';
import { UsersComponent } from './components/users/users.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { Page404Component } from './components/page404/page404.component';
import { QueryparamsComponent } from './components/queryparams/queryparams.component';
import { PeopleComponent } from './components/people/people.component';
import { RoutGuardsService } from './components/rout-guards.service';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MyprofileComponent,
    MycontactComponent,
    ProfileComponent,
    DashboardComponent,
    CourceComponent,
    FormComponent,
    ReactiveFormsComponent,
    CheckoutFormComponent,
    DirectivesComponent,
    PipesComponent,
    TestComponent,
    ParentComponent,
    ChildComponent,
    APIComponent,
    PostComponent,
    ServicesComponent,
    TaskComponent,
    JavascriptComponent,
    CrudComponent,
    StepperComponent,
    SignUpComponent,
    CrossFieldValidationsComponent,
    FormValidationsComponent,
    ReactiveFormValidationsComponent,
    RoutingComponent,
    UsersComponent,
    UserInfoComponent,
    Page404Component,
    QueryparamsComponent,
    PeopleComponent,
    SenderComponent,
    ReceiverComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    NgxPaginationModule,
   ToastrModule.forRoot(
      {
        positionClass: 'toast-top-center',
        tapToDismiss: true,
        preventDuplicates: true
      }
    ),
    
  ],
  providers: [DataService,RoutGuardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
