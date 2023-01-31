import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from 'src/utils/validations';

@Component({
  selector: 'app-reactive-form-validations',
  templateUrl: './reactive-form-validations.component.html',
  styleUrls: ['./reactive-form-validations.component.scss']
})
export class ReactiveFormValidationsComponent implements OnInit {

  loginForm=new FormGroup({
    firstname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    middlename:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    lastname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('/^[a-zA-Z0-9!@#$%^&*]{6,16}$/')]),
    mobilenumber:new FormControl('',[Validators.required,Validators.pattern("[0-9]{0-10}")]),
    Address:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
  
  })
  // onSubmit(){
  //   console.log(this.loginForm.value)120
  // }
  submit(){
    console.log(this.loginForm)
  }
  get firstname(){
    return this.loginForm.get('firstname')
  }
  get middlename(){
    return this.loginForm.get('middlename')
  }
  get lastname(){
    return this.loginForm.get('lastname')
  }
  get password(){
    return this.loginForm.get('password')
  }
  get mobilenumber(){
    return this.loginForm.get('mobilenumber')
  }
  get Address(){
    return this.loginForm.get('Address')
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
