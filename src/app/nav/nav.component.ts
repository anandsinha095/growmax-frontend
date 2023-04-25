import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import{CommonService} from '../service/commonservice/common.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  localDataSource:any;
  userFirstName:any;
  userLastName:any;
  constructor(
    private localdata:CommonService,
    private router:Router,
  ) { }

  ngOnInit() {
    this.localDataSource= this.localdata.getlocalData();
    this.userFirstName=this.localDataSource['firstName']
    this.userLastName=this.localDataSource['lastName']
  }
  
  logout(){    
    localStorage.clear();
    this.router.navigate(['/login']);
    }
  

}
