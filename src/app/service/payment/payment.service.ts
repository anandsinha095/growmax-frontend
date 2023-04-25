import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here
import { CommoncallService } from '../../service/commoncall/commoncall.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private router: Router,
    private http: HttpClient,
    private apiCall: CommoncallService
  ) { }
  paymentCall(data:any, header:any) {
     return new Promise((resolve, reject) => {
       this.apiCall.postRequestHeader(data, "order/createOrder", header).subscribe((res: any) => {
         if (res) {
           return resolve(res)
         }    
       }, error => {
         if (error.status) 
         return reject(error.error.message)
       });
     })
   }

   txHistory(header:any) {
     return new Promise((resolve, reject) => {
       this.apiCall.getRequestHeader("order/paymentHistory", header).subscribe((res: any) => {
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

  directLeg(header:any) {
    return new Promise((resolve, reject) => {
      this.apiCall.getRequestHeader("order/directLeg", header).subscribe((res: any) => {
        if (res) {
          return resolve(res)
        }    
      }, error => {
        if (error.status) 
        return reject(error.error.message)
      });
    })
  }

  passive(header:any) {
    return new Promise((resolve, reject) => {
      this.apiCall.getRequestHeader("order/passiveIncome", header).subscribe((res: any) => {
        if (res) {
          return resolve(res)
        }    
      }, error => {
        if (error.status) 
        return reject(error.error.message)
      });
    })
  }

  community(header:any) {
    return new Promise((resolve, reject) => {
      this.apiCall.getRequestHeader("order/communityIncome", header).subscribe((res: any) => {
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
