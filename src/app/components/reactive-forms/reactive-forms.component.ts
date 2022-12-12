import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  //     loginform=new FormGroup({
  //       email: new FormControl('',Validators.required),
  //       password: new FormControl('')

  //     })
  //     get email(){return this.loginform.get('email')}

  //   username=new FormControl()
  //   passwordPattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$";

  //   login = new FormGroup({
  //     username:new FormControl('',Validators.required),
  //     password:new FormControl("",[Validators.required,Validators.pattern(this.passwordPattern)]),
  // })

  // showing(){
  //   console.log(this.login)

  // }

  loginform!: FormGroup;


  constructor(private toastr: ToastrService) {}
  ngOnInit(): void {
  this.patchValues()
  }

  

  patchValues() {
    this.loginform = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(2)
      ]),
      Email: new FormControl('',[
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(2)
      ])
      
    });
  }


  onSubmit() {
    this.toastr.success('checkimng');
  }
}
