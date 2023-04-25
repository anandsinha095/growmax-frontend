import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { LoginService } from '../service/loginservice/login.service';
import { CommonService } from '../service/commonservice/common.service';

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
  localDataSource:any;
  username:any;
  registerForm !: FormGroup
  submitted = false;
  role = true;
  editInfo = false;
  user:any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: LoginService,
    private toastr: ToastrService,
    private localData: CommonService,
  ) {}

  async ngOnInit(){
    this.localData.checkLogin()
    this.localDataSource= this.localData.getlocalData();
    this.username=this.localDataSource['username'];
    const userInfo:any = await  this.localData.userInfo(localStorage.getItem('token'))
    this.user =  userInfo.data
    console.log(">>>>>>user", this.user);
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
      console.log("this.registerForm.value", this.registerForm.value);
      
      this.editInfo = false
      // const data:any = await this.service.signup(this.registerForm.value)
      // if(data){
      //   this.toastr.success('User resgistered successfully !!');
      //   localStorage.setItem('token', data.data.token);
      // }
      
      // // let encryptData = this.crypt.set('123456*1@#$#@$^@1ERF', this.merged['email']);
      // // let email = encryptData.toString().replace('+', 'xMl3Jk').replace('/', 'Por21Ld').replace('=', 'Ml32');
      // this.router.navigate(['/verify-email/', data.data.token]);
    }
    catch (e) {
      // this.toastr.error('Opps! Something went wrong!!!');
      // this.ngOnInit();
    }
  }

  async editProfile(status:any){
     console.log(">>>>>status",status);
     this.editInfo = true
  }
  
}
