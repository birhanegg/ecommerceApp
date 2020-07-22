import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { authenticationService } from '../../services/authentication.service'
import { Seller } from '../../common/seller';
import { CustomvalidationService } from '../../servicescustomvalidation.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  addForm: FormGroup;
  status: string;
  
  constructor(private router: Router,private formBuilder: FormBuilder, private authenticationService : authenticationService,private customValidator: CustomvalidationService) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get registerFormControl() {
    return this.addForm.controls;
  }

  
  onSubmit() {

    this.submitted = true;
    if (this.addForm.valid){
    
    this.authenticationService.login(this.addForm.value)
      .subscribe(data => {
        //console.log(data.token);
       // alert(data.token);
        window.localStorage.setItem('token' , data.token);
        window.localStorage.setItem('userId' , data.user._id);
        window.localStorage.setItem('userName' , data.user.name);
        
        
        //  this.authenticationService.getSellerStatusById(data.user._id).subscribe(result => { 
        //    this.status = result.status; 
        //    console.log("********sen " + this.status); 
        //   });
        // //let status = '';
        console.log("******** amir" + this.status);
        //let status = 'Pending';
        let role = data.user.role;
      
        if(role === "Buyer" || role === "buyer"){
            this.router.navigate(['product']);
        }
        else if(role=== "Seller" || role === "seller"){
            //check his status
            //if(isseleractive)
            this.authenticationService.getSellerStatusById(data.user._id).subscribe(result => { 
              this.status = result.status; 
              console.log("********sen " + this.status); 
              if(this.status === 'Active'){
                this.router.navigate(['seller']);
              }else {
                alert('Awaiting approval from Admin');
              }
             });
              
            
        }
        // else if((role=== "Seller" || role === "seller") && status === 'Pending'){
        //   alert('Awaiting Approval by Admin');
        // }
        else {
          alert('Unkown Role');
        }
      });
  
}
  }


}
