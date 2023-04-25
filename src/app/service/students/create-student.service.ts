import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here
import { CommoncallService } from '../commoncall/commoncall.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EncryptService } from '../../service/encryptservice/encrypt.service';
import { CommonService } from '../../service/commonservice/common.service'
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class CreateStudentService {


  constructor(private http: HttpClient,
    private apiCall: CommoncallService,
    private router: Router,
    private toastr:ToastrService,
    private localData: CommonService) { }

  signupApiCall(data: any) {
    return new Promise((resolve, reject) => {
      this.apiCall.postRequestHeader(data, "student/signup", this.localData.getlocalData()['token']).subscribe((res: any) => {
        if (res.code==200) {
          this.toastr.success(res.message)
          return resolve(this.router.navigate(['/students/']))
        }    
      }, error => {
        if (error.status) 
        return reject(error.error.message)
      })
    })
  }
}
