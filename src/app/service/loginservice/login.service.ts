import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here
import { CommoncallService } from '../../service/commoncall/commoncall.service';
import { CommonService } from '../../service/commonservice/common.service'
import { Router, ActivatedRoute } from '@angular/router';
import { EncryptService } from '../../service/encryptservice/encrypt.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  service: any;
  userMail: any;
  userPassword:any;


  constructor(private http: HttpClient,
    private apiCall: CommoncallService,
    private router: Router,
    private crypt: EncryptService,
    private setLocalStoreage: CommonService,
    private toastr:ToastrService) { }


  signInApiCall(data:any) {
   // let email = this.encrypt(data.email)
    return new Promise((resolve, reject) => {
      this.apiCall.postRequest(data, "user/login").subscribe((res: any) => {
        resolve(res)
      }, error => {
        if (error.status) 
        return reject(error.error)
      });
    })
  }
}
