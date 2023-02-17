import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { APIComponent } from './components/api/api.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { CourceComponent } from './components/cource/cource.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { FormValidationsComponent } from './components/form-validations/form-validations.component';
import { HomeComponent } from './components/home/home.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { MycontactComponent } from './components/mycontact/mycontact.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { PostComponent } from './components/post/post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { TaskComponent } from './components/task/task.component';
import { CrossFieldValidationsComponent } from './cross-field-validations/cross-field-validations.component';
import { CrudComponent } from './crud/crud.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { Page404Component } from './components/page404/page404.component';
import { PeopleComponent } from './components/people/people.component';
import { QueryparamsComponent } from './components/queryparams/queryparams.component';
import { ReactiveFormValidationsComponent } from './reactive-form-validations/reactive-form-validations.component';
import { RoutGuardsService } from './components/rout-guards.service';
import { RoutingComponent } from './components/routing/routing.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UsersComponent } from './components/users/users.component';
import { SenderComponent } from './sender/sender.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Dashboard',
    pathMatch: 'full',
  },
  {
    path: 'Dashboard',
    component: DashboardComponent,
    children: [{ path: 'course', component: CourceComponent }],
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
    component: ProfileComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'CheckoutForm',
    component: CheckoutFormComponent,
  },
  {
    path: 'Directives',
    component: DirectivesComponent,
  },
  {
    path: 'reactiveform',
    component: ReactiveFormsComponent,
  },
  {
    path: 'Pipes',
    component: PipesComponent,
  },
  {
    path: 'API',
    component: APIComponent,
  },
  {
    path: 'Post',
    component: PostComponent,
  },
  {
    path: 'Task',
    component: TaskComponent,
  },
  {
    path: 'javascript',
    component: JavascriptComponent,
  },
  {
    path: 'Crud',
    component: CrudComponent,
  },
  {
    path: 'Login',
    component: LoginPageComponent,
  },
  {
    path: 'signUp',
    component: SignUpComponent,
  },
  {
    path: 'Validations',
    component: CrossFieldValidationsComponent,
  },
  {
    path: 'formvalidations',
    component: FormValidationsComponent,
  },
  {
    path: 'reactive',
    component: ReactiveFormValidationsComponent,
  },
  {
    path:'routing',
    component:RoutingComponent

  },
  {
    path: 'routing/:id',
    component: RoutingComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'userInfo',
    component: UserInfoComponent,
  },
  {
     path:'people',
     component:PeopleComponent
  },
  {
    path:'queryparams',
    component:QueryparamsComponent,canActivate:[RoutGuardsService]
  },
  {
    path:'sender',
    component:SenderComponent
  },

  {
    path: '**',
    component: Page404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
