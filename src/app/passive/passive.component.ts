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
  selector: 'app-passive',
  templateUrl: './passive.component.html',
  styleUrls: ['./passive.component.css']
})
export class PassiveComponent implements OnInit {

  localDataSource:any;
  username:any;
  passive:any
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
    const data:any = await this.service.passive(localStorage.getItem('token'))
    this.passive = data.data
    console.log(">>>>>>>data", data.data);
  }
}
