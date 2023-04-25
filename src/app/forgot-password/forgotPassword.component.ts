import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { ForgotserviceService } from '../service/forgotservice/forgotservice.service';
import { ToastrService } from 'ngx-toastr';
import Web3 from "web3";
declare var window: any;
declare var $: any;
@Component({
  selector: 'app-forgotPassword',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotForm !: FormGroup
  submitted = false;
  role = true;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: ForgotserviceService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    const web3 = window.web3;
    this.forgotForm = this.formBuilder.group({
      email: ['',[Validators.required]]
    })
  }
  async forgotPasswordSubmit(){
    try {
      const data:any = await this.service.resetLink(this.forgotForm.value.email)
      if(data){
        this.toastr.success('Reset password link sent to your Email ID !!');
        this.forgotForm.reset();
      }
    }
    catch (e) {
      this.toastr.error('Opps! Something went wrong!!!');
      this.ngOnInit();
    }
  }
}
