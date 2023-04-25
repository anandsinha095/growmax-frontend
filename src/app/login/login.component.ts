import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { LoginService } from '../service/loginservice/login.service';
import { ToastrService } from 'ngx-toastr';
import Web3 from "web3";
import { CommonService } from '../service/commonservice/common.service';
declare var window: any;
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup
  submitted = false;
  role = true;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: LoginService,
    private toastr: ToastrService,
    private setLocalStoreage: CommonService,
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
      if (data.code ==201) {
        this.router.navigate(['/payment/', data.data]);
      }
     else if (data.code ==200) {
        this.setLocalStoreage.setLocalData(data)
        this.router.navigate(['/dashboard/']);
      }    
     
      // let encryptData = this.crypt.set('123456*1@#$#@$^@1ERF', this.merged['email']);
      // let email = encryptData.toString().replace('+', 'xMl3Jk').replace('/', 'Por21Ld').replace('=', 'Ml32');
      // this.router.navigate(['/mailverify/' + email]);
    }
    catch (e:any) {
      if(e.code==461){
        this.router.navigate(['/verify-email/',e.data.token]);
      }
      this.toastr.warning(e.message);
      this.ngOnInit();
    }
  }
}
