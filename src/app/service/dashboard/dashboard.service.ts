import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here
import { CommoncallService } from '../commoncall/commoncall.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private router: Router,
    private http: HttpClient,
    private apiCall: CommoncallService
  ) { }
  displayData(header:any) {
     return new Promise((resolve, reject) => {
       this.apiCall.getRequestHeader("dashboard/displayData", header).subscribe((res: any) => {
         if (res) {
           return resolve(res)
         }    
       }, error => {
         if (error.status) 
         return reject(error.error.message)
       });
     })
   }

   getOrder(header:any) {
    return new Promise((resolve, reject) => {
      this.apiCall.getRequestHeader("order/getOrder", header).subscribe((res: any) => {
        if (res) {
          return resolve(res)
        }    
      }, error => {
        if (error.status) 
        return reject(error.error.message)
      });
    })
  }
}
