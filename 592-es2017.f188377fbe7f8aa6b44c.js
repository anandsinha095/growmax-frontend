(self.webpackChunkglobal=self.webpackChunkglobal||[]).push([[592],{7923:function(e,r,t){"use strict";t.d(r,{U:function(){return o}});var s=t(8619),a=t(1522),i=t(2693),n=t(4500);let o=(()=>{class e{constructor(e,r,t){this.router=e,this.http=r,this.apiCall=t}inactiveActiveUsers(e){return new Promise((r,t)=>{this.apiCall.getRequestHeader("admin/inactiveActiveUsers",e).subscribe(e=>{r(e)},e=>{t("users is not exist")})})}adminInfo(e){return new Promise((r,t)=>{this.apiCall.getRequestHeader("admin/adminInfo",e).subscribe(e=>{r(e)},e=>{t("admin is not exist")})})}searchUser(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"admin/searchUser",r).subscribe(e=>{t(e)},e=>{s("No data found")})})}exportProduct(e,r){return new Promise((t,s)=>{this.apiCall.getRequestHeader("admin/exportProduct/"+e,r).subscribe(e=>{t(e)},e=>{s("No data found")})})}users(e){return new Promise((r,t)=>{this.apiCall.getRequestHeader("admin/users",e).subscribe(e=>{r(e)},e=>{t("No data found")})})}searchWithdrawHistory(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"admin/searchWithdrawHistory",r).subscribe(e=>{t(e)},e=>{s("No data found")})})}userDisplayData(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"admin/displayData",r).subscribe(e=>{t(e)},e=>{s("No data found")})})}userInfo(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"admin/userInfo",r).subscribe(e=>{t(e)},e=>{s("No data found")})})}userDirectLeg(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"admin/userLegs",r).subscribe(e=>{t(e)},e=>{s("No data found")})})}userIsActive(e,r){return new Promise((t,s)=>{this.apiCall.putRequestHeader(e,"admin/userIsActive",r).subscribe(e=>{t(e)},e=>{s("Pacakges is not exist")})})}userCount(e){return new Promise((r,t)=>{this.apiCall.getRequestHeader("admin/userCount",e).subscribe(e=>{r(e)},e=>{t("user is not exist")})})}productCount(e){return new Promise((r,t)=>{this.apiCall.getRequestHeader("admin/productCount",e).subscribe(e=>{r(e)},e=>{t("user is not exist")})})}all24History(e,r){return new Promise((t,s)=>{this.apiCall.getRequestHeader("admin/all24WithdrawHistory?page="+e,r).subscribe(e=>{t(e)},e=>{s("Withdraw is not exist")})})}allHistory(e,r){return new Promise((t,s)=>{this.apiCall.getRequestHeader("admin/allWithdrawHistory?page="+e,r).subscribe(e=>{t(e)},e=>{s("Withdraw is not exist")})})}allPendingWithdrawHistory(e,r){return new Promise((t,s)=>{this.apiCall.getRequestHeader("admin/allPendingWithdrawHistory?page="+e,r).subscribe(e=>{t(e)},e=>{s("Withdraw is not exist")})})}completedProduct(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"admin/completedProduct",r).subscribe(e=>{if(e)return t(e)},e=>{if(e.status)return s(e.error.message)})})}productDetails(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"admin/productDetails",r).subscribe(e=>{if(e)return t(e)},e=>{if(e.status)return s(e.error.message)})})}getProducts(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"admin/products",r).subscribe(e=>{if(e)return t(e)},e=>{if(e.status)return s(e.error.message)})})}adminWithdrawHistory(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"admin/withdrawWallet",r).subscribe(e=>{if(e)return t(e)},e=>{if(e.status)return s(e.error.message)})})}changeEmail(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"admin/changeEmail",r).subscribe(e=>{if(e)return t(e)},e=>{if(e.status)return s(e.error.message)})})}coreToEco(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"admin/coreToEco",r).subscribe(e=>{if(e)return t(e)},e=>{if(e.status)return s(e.error.message)})})}coreToTrade(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"admin/coreToTrade",r).subscribe(e=>{if(e)return t(e)},e=>{if(e.status)return s(e.error.message)})})}coreToCore(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"admin/coreToCore",r).subscribe(e=>{if(e)return t(e)},e=>{if(e.status)return s(e.error.message)})})}coreWalletBalance(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"admin/coreWalletBalance",r).subscribe(e=>{if(e)return t(e.data)},e=>{if(e.status)return s(e.error.message)})})}resetTwoFaList(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"admin/resetTwofaRequestList",r).subscribe(e=>{if(e)return t(e)},e=>{if(e.status)return s(e.error.message)})})}resetTwoFa(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"admin/resetTwoFa",r).subscribe(e=>{if(e)return t(e)},e=>{if(e.status)return s(e.error.message)})})}}return e.\u0275fac=function(r){return new(r||e)(s.LFG(a.F0),s.LFG(i.eN),s.LFG(n.u))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},2265:function(e,r,t){"use strict";t.d(r,{s:function(){return o}});var s=t(8619),a=t(1522),i=t(2693),n=t(4500);let o=(()=>{class e{constructor(e,r,t){this.router=e,this.http=r,this.apiCall=t}displayData(e){return new Promise((r,t)=>{this.apiCall.getRequestHeader("dashboard/displayData",e).subscribe(e=>{if(e)return r(e)},e=>{if(e.status)return t(e.error.message)})})}adminDisplayData(e){return new Promise((r,t)=>{this.apiCall.getRequestHeader("admin/adminDisplayData",e).subscribe(e=>{if(e)return r(e)},e=>{if(e.status)return t(e.error.message)})})}getOrder(e){return new Promise((r,t)=>{this.apiCall.getRequestHeader("order/getOrder",e).subscribe(e=>{if(e)return r(e)},e=>{if(e.status)return t(e.error.message)})})}}return e.\u0275fac=function(r){return new(r||e)(s.LFG(a.F0),s.LFG(i.eN),s.LFG(n.u))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},7439:function(e,r,t){"use strict";t.d(r,{w:function(){return u}});var s=t(8619),a=t(2693),i=t(2893),n=t(4500),o=t(518);let u=(()=>{class e{constructor(e,r,t,s){this.http=e,this.localData=r,this.apiCall=t,this.toastr=s}resetLink(e){return new Promise((r,t)=>{this.apiCall.postRequest({email:e},"user/forgotPassword").subscribe(e=>{r(e)},e=>{t(e.error.message)})})}changePassword(e,r){return new Promise((t,s)=>{this.apiCall.putRequestHeader(e,"user/changePassword",r).subscribe(e=>{t(e)},e=>{s(e.error.message)})})}resetPassword(e,r){return new Promise((t,s)=>{this.apiCall.postRequest(e,"user/resetPassword/"+r).subscribe(e=>{t(e)},e=>{if(e.status)return s(e.error)})})}contactInfoUpdate(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"user/contactInfoUpdate/",r).subscribe(e=>{t(e)},e=>{if(e.status)return s(e.error)})})}}return e.\u0275fac=function(r){return new(r||e)(s.LFG(a.eN),s.LFG(i.v),s.LFG(n.u),s.LFG(o._W))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},9586:function(e,r,t){"use strict";t.d(r,{e:function(){return n}});var s=t(8619),a=t(2693),i=t(4500);let n=(()=>{class e{constructor(e,r){this.http=e,this.apiCall=r}gauth(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"qr/generateQrCode",r).subscribe(e=>t(e),e=>{s("Something went wrong")})})}gauthVerify(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"qr/verifyQrCode",r).subscribe(e=>t(e),e=>s(e.error.message))})}gauthVerifyOtp(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"user/save_LoginLog_If_TwoFA_Enable",r).subscribe(e=>t(e),e=>{if(481==e.status)return s("Invalid OTP")})})}gauthDisable(e,r){return new Promise((t,s)=>{this.apiCall.putRequestHeader(e,"qr/disableGAuth",r).subscribe(e=>t(e),e=>{404==e.status?s("Invalid Password"):481==e.status&&s("Invalid Gauth")})})}verifyGauthCode(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"qr/verifyGAuthCode",r).subscribe(e=>t(e),e=>s(e.error.message))})}resetTwoFaRequest(e){return new Promise((r,t)=>{this.apiCall.getRequestHeader("qr/resetRequestForTwoFa",e).subscribe(e=>r(e),e=>t(e.error.message))})}resetTwoFaRequestStatus(e){return new Promise((r,t)=>{this.apiCall.getRequestHeader("qr/resetRequestForTwoFaStatus",e).subscribe(e=>r(e),e=>t(e.error.message))})}}return e.\u0275fac=function(r){return new(r||e)(s.LFG(a.eN),s.LFG(i.u))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},8425:function(e,r,t){"use strict";t.d(r,{r:function(){return d}});var s=t(8619),a=t(2693),i=t(4500),n=t(1522);let o=(()=>{class e{constructor(){}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var u=t(2893),l=t(518);let d=(()=>{class e{constructor(e,r,t,s,a,i){this.http=e,this.apiCall=r,this.router=t,this.crypt=s,this.setLocalStoreage=a,this.toastr=i}signInApiCall(e){return new Promise((r,t)=>{this.apiCall.postRequest(e,"user/login").subscribe(e=>{r(e)},e=>{if(e.status)return t(e.error)})})}adminSignInApiCall(e){return new Promise((r,t)=>{this.apiCall.postRequest(e,"admin/signin").subscribe(e=>{r(e)},e=>{if(e.status)return t(e.error)})})}sentOTP(){return new Promise((e,r)=>{this.apiCall.getRequest("admin/otp").subscribe(r=>{e(r)},e=>{if(e.status)return r(e.error)})})}}return e.\u0275fac=function(r){return new(r||e)(s.LFG(a.eN),s.LFG(i.u),s.LFG(n.F0),s.LFG(o),s.LFG(u.v),s.LFG(l._W))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},7105:function(e,r,t){"use strict";t.d(r,{O:function(){return o}});var s=t(6304),a=t(2693),i=t(8619),n=t(4500);let o=(()=>{class e{constructor(e,r){this.http=e,this.apiCall=r}downloadExcelFile(e,r){var t=this;return(0,s.Z)(function*(){let s=new a.WM;const i="https://growmaxxdashboard.com/api/v1/admin/exportProduct/"+e;s=s.set("Content-Type","application/json; charset=utf-8");const n={headers:{authorization:r},responseType:"blob"};return yield t.http.get(i,n).toPromise()})()}downloadExcelWithdrawFile(e,r){var t=this;return(0,s.Z)(function*(){let s=new a.WM;const i="https://growmaxxdashboard.com/api/v1/admin/exportWithdraw/"+e;s=s.set("Content-Type","application/json; charset=utf-8");const n={headers:{authorization:r},responseType:"blob"};return yield t.http.get(i,n).toPromise()})()}}return e.\u0275fac=function(r){return new(r||e)(i.LFG(a.eN),i.LFG(n.u))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);