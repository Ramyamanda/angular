import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import Validation from 'src/utils/validations';


@Component({
  selector: 'app-cross-field-validations',
  templateUrl: './cross-field-validations.component.html',
  styleUrls: ['./cross-field-validations.component.scss']
})
export class CrossFieldValidationsComponent implements OnInit {
  submitted = false;
  isFormValid:boolean=false;
  password:string='';
  confirmPassword:string='';
  form: FormGroup = new FormGroup({
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }

    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    // this.submitted = true;
    // console.log(this.form.value);
    window.alert("submitted")
  }
isConfirmMatched(){
  this.isFormValid= (this.password == this.confirmPassword)
  debugger
}
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
