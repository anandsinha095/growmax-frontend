
import { HttpClient } from '@angular/common/http';  // Import it up here
import { CommoncallService } from '../commoncall/commoncall.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EncryptService } from '../../service/encryptservice/encrypt.service';
import { CommonService } from '../../service/commonservice/common.service'
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient,
    private apiCall: CommoncallService,
    private router: Router,
    private toastr:ToastrService,
    private localData: CommonService) { }

    studentIsActive(data: any) {
    return new Promise((resolve, reject) => {
      this.apiCall.putRequestHeader(data, "student/studentIsActive", this.localData.getlocalData()['token']).subscribe((res: any) => {
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
  studentToggle(data: any) {
    return new Promise((resolve, reject) => {
      this.apiCall.putRequestHeader(data, "student/studentToggle", this.localData.getlocalData()['token']).subscribe((res: any) => {
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
