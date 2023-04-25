import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { ResendMailService } from '../service/mailservice/resend-mail.service';
import { CommonService } from '../service/commonservice/common.service'
import { ToastrService } from 'ngx-toastr';
import Web3 from "web3";
declare var window: any;
declare var $: any;
@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  verifyOtpForm !: FormGroup
  submitted = false;
  role = true;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private localData: CommonService,
    private service: ResendMailService,
    private toastr: ToastrService,
    private route:ActivatedRoute,
  ) {
  }
  ngOnInit(): void {
    const web3 = window.web3;
    this.verifyOtpForm = this.formBuilder.group({
      otp: ['',[Validators.required]]
    })
  }
  async verifyOtpSubmit(){
    const token= this.route.snapshot.paramMap.get('token');
    try {
      const data = await this.service.mailconfirmation(this.verifyOtpForm.value, token)
      if(data)
       this.toastr.success('User resgistered successfully !!');
       this.router.navigate(['/payment/', token]);
    }
    catch (e) {
      this.toastr.error('Opps! Something went wrong!!!');
      this.ngOnInit();
    }
  }
}
