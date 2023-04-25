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
  selector: 'app-resetPassword',
  templateUrl: './resetPassword.component.html',
  styleUrls: ['./resetPassword.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm !: FormGroup
  submitted = false;
  role = true;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: ForgotserviceService,
    private route:ActivatedRoute,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    const web3 = window.web3;
    this.resetPasswordForm = this.formBuilder.group({
      newPassword: ['',[Validators.required]],
      confirmPassword: ['',[Validators.required]]
    })
  }
  async resetPasswordSubmit(){
    try {
      const token= this.route.snapshot.paramMap.get('token');
      const data:any = await this.service.resetPassword(this.resetPasswordForm.value, token)
      if(data){
        this.toastr.success('Password restored successfully !!');
        this.router.navigate(['/login/']);
      }
     
    }
    catch (e) {
      this.ngOnInit();
    }
  }
}
