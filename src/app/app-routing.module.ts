import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { APIComponent } from './components/api/api.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { CourceComponent } from './components/cource/cource.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { HomeComponent } from './components/home/home.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { MycontactComponent } from './components/mycontact/mycontact.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { PostComponent } from './components/post/post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { TaskComponent } from './components/task/task.component';
import { CrudComponent } from './crud/crud.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'Dashboard',
    component: DashboardComponent,children: [{path:'course',
  component:CourceComponent}]
  },
  {
    path: 'Myattendance',
    component: MycontactComponent,
  },
  {
    path: 'Myprofile',
    component: MyprofileComponent,
  },
  {
    path: 'Grid',
    component: ProfileComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'CheckoutForm',
    component:CheckoutFormComponent
  },
  {
    path: 'Directives',
    component:DirectivesComponent
  },
  {
    path: 'reactiveform',
    component:ReactiveFormsComponent
  },
  {
    path: 'Pipes',
    component:PipesComponent
  },
  {
    path: 'API',
    component:APIComponent
  },
  {
    path: 'Post',
    component:PostComponent
  },
  {
    path: 'Task',
    component:TaskComponent
  },
  {
    path: 'javascript',
    component:JavascriptComponent
  },
  {
    path: 'Crud',
    component:CrudComponent
  },
  {
    path: 'Login',
    component:LoginPageComponent
  },
  {
    path: 'signUp',
    component:SignUpComponent
  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}



