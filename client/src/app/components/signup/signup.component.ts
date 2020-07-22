







import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { authenticationService } from '../../services/authentication.service'
import { Router } from '@angular/router';
import { CustomvalidationService } from '../../servicescustomvalidation.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

  submitted = false;
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authenticationService : authenticationService, private router : Router,private customValidator: CustomvalidationService) { }

  ngOnInit(): void {

    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      role: ['', Validators.required]
    });
  }

  get registerFormControl() {
    return this.addForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.valid){
    this.authenticationService.addUser(this.addForm.value)
      .subscribe(data => {
       // console.log('waiting for approval' + this.addForm.value.role);
        if(this.addForm.value.role == 'seller'){
          alert('Seller Successfully Registered, Awaiting Approval');
          console.log('waiting for approval' + this.addForm.value.role);
          this.router.navigate(['login']); 
        }else {
          alert('User Successfully Registered, You can now log in and Start Using');
        this.router.navigate(['login']); 
        }
        // alert('User Successfully Registered, You can now log in and Start Using');
        // this.router.navigate(['login']); //login
      });
  }
  }
}
