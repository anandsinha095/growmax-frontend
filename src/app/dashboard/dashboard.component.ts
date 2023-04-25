import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { CommonService } from '../service/commonservice/common.service'
import { Title, Meta } from '@angular/platform-browser';
import { DashboardService } from '../service/dashboard/dashboard.service';
import { ToastrService } from 'ngx-toastr';
import Web3 from "web3";
declare var window: any;
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loginForm !: FormGroup
  submitted = false;
  role = true;
  data:any
  localDataSource:any;
  username:any;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: DashboardService,
    private localData: CommonService,
    private toastr: ToastrService
  ) {}
  async ngOnInit(){
    this.localData.checkLogin()
    this.localDataSource= this.localData.getlocalData();
    this.username=this.localDataSource['username'];
    const data:any = await this.service.displayData(localStorage.getItem('token'))
    this.data = data.data
    console.log(">>>>>>>data", data.data);
  }

}
