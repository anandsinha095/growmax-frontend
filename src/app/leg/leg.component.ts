import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../service/commonservice/common.service';
import { PaymentService } from '../service/payment/payment.service';
declare var window: any;
declare var $: any;
@Component({
  selector: 'app-leg',
  templateUrl: './leg.component.html',
  styleUrls: ['./leg.component.css']
})
export class LegComponent implements OnInit {

  localDataSource:any;
  username:any;
  direct:any
  loginForm !: FormGroup
  submitted = false;
  role = true;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private localData: CommonService,
    private service:PaymentService,
  ) {}
  async ngOnInit(){
    this.localData.checkLogin()
    this.localDataSource= this.localData.getlocalData();
    this.username=this.localDataSource['username'];
    const data:any = await this.service.directLeg(localStorage.getItem('token'))
    this.direct = data.data
    console.log(">>>>>>>data", data.data);
  }
}
