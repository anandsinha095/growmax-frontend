import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  // Import it up here
import { Router, ActivatedRoute } from '@angular/router';
import {CommoncallService} from '../commoncall/commoncall.service'
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private router: Router,
    private http: HttpClient,
    private apiCall:CommoncallService
  ) { }


  getlocalData() {
    let obj:any = {}
    obj['userId'] = localStorage.getItem('userId')
    obj['token'] = localStorage.getItem('token')
    obj['userMail'] = localStorage.getItem('userMail')
    obj['firstName'] = localStorage.getItem('firstName')
    obj['lastName'] = localStorage.getItem('lastName')
    obj['username'] = localStorage.getItem('username')
    return obj;
  }
  setLocalData(sourceData:any) {  
    localStorage.setItem('dataSource', JSON.stringify(sourceData));
    localStorage.setItem('userId', sourceData.data.user._id);
    localStorage.setItem('token', sourceData['data']['token']);
    localStorage.setItem('userMail',sourceData.data.user.email);
    localStorage.setItem('firstName', sourceData.data.user.firstName);
    localStorage.setItem('username', sourceData.data.user.username);
    localStorage.setItem('lastName',sourceData.data.user.lastName);
  }
  checkLogin() {
    if (localStorage.getItem('token')) {
      return;
    }
    else {
      this.router.navigate(['/login']);
    }
  }

  // checkLogin() {
  //   if (localStorage.getItem('token')) {
  //     return true;
  //   }
  //   else {
  //     this.router.navigate(['/login']);
  //   }
  // }
  // userInfo(data,header) {    
  //   let headers =new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  //   return this.http.get(this.apiCall.baseUrl+"user/userInfo/"+data,{ headers: { 'authorization': header }});  

  // }
  userInfo(header:any){
    return new Promise((resolve,reject)=>{
      this.apiCall.getRequestHeader("user/userInfo", header).subscribe(res=>{
        resolve(res)
      }, error=>{
       reject("Pacakges is not exist")
      })
    }) 
  }

  fetchPacakge(){
    return new Promise((resolve,reject)=>{
      this.apiCall.getRequest("public/packages").subscribe(res=>{
        resolve(res)
      }, error=>{
       reject("Pacakges is not exist")
      })
    }) 
  }

  reBuyPacakge(){
    return new Promise((resolve,reject)=>{
      this.apiCall.getRequest("public/reBuy").subscribe(res=>{
        resolve(res)
      }, error=>{
       reject("Pacakges is not exist")
      })
    }) 
  }

}
