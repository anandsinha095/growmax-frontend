import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { LoginService } from '../service/loginservice/login.service';
import { ToastrService } from 'ngx-toastr';
import Web3 from "web3";
declare var window: any;
declare var $: any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loginForm !: FormGroup
  submitted = false;
  role = true;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: LoginService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    const web3 = window.web3;
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
    })
  }
  async loginSubmit(){
    try {
      console.log('>>>>>this.loginForm.value', this.loginForm.value);
      const data:any = await this.service.signInApiCall(this.loginForm.value)
      console.log(">>>data", data);
      
      if(data.user.paymentStatus==false){
        this.router.navigate(['/payment/']);
      }
      //  else{
      //   this.router.navigate(['/dashboard/']);
      //  }
      // let encryptData = this.crypt.set('123456*1@#$#@$^@1ERF', this.merged['email']);
      // let email = encryptData.toString().replace('+', 'xMl3Jk').replace('/', 'Por21Ld').replace('=', 'Ml32');
      // this.router.navigate(['/mailverify/' + email]);
    }
    catch (e) {
      this.toastr.error('Opps! Something went wrong!!!');
      this.ngOnInit();
    }
  }
}
