import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { CourceComponent } from './cource/cource.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';
import { MycontactComponent } from './mycontact/mycontact.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

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
    path: 'Myleaves',
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
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}



