import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form-validations',
  templateUrl: './form-validations.component.html',
  styleUrls: ['./form-validations.component.scss']
})
export class FormValidationsComponent implements OnInit {

  countryList=['India','US','UK']

    reset(userForm:NgForm){
      userForm.resetForm();
   }
   submit(data:NgForm){
     console.log(data)
   }


  constructor() { }

  ngOnInit(): void {
  }

}
