import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { RegisterService } from '../service/registerservice/register.service';
import { ToastrService } from 'ngx-toastr';
import Web3 from "web3";
declare var window: any;
declare var $: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm !: FormGroup
  submitted = false;
  role = true;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: RegisterService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    const web3 = window.web3;
    this.registerForm = this.formBuilder.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required]],
      username: ['',[Validators.required]],
      referralCode: ['',[Validators.required]]
    })
  }
  async registerSubmit(){
    try {
      const data:any = await this.service.signup(this.registerForm.value)
      if(data){
        this.toastr.success('User resgistered successfully !!');
        localStorage.setItem('token', data.data.token);
      }
      
      // let encryptData = this.crypt.set('123456*1@#$#@$^@1ERF', this.merged['email']);
      // let email = encryptData.toString().replace('+', 'xMl3Jk').replace('/', 'Por21Ld').replace('=', 'Ml32');
      this.router.navigate(['/verify-email/', data.data.token]);
    }
    catch (e) {
      this.toastr.error('Opps! Something went wrong!!!');
      this.ngOnInit();
    }
  }
}
