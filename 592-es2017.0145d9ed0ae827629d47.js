(self.webpackChunkglobal=self.webpackChunkglobal||[]).push([[592],{7923:function(e,r,t){"use strict";t.d(r,{U:function(){return u}});var s=t(8619),i=t(1522),a=t(2693),n=t(4500);let u=(()=>{class e{constructor(e,r,t){this.router=e,this.http=r,this.apiCall=t}inactiveActiveUsers(e){return new Promise((r,t)=>{this.apiCall.getRequestHeader("admin/inactiveActiveUsers",e).subscribe(e=>{r(e)},e=>{t("users is not exist")})})}adminInfo(e){return new Promise((r,t)=>{this.apiCall.getRequestHeader("admin/adminInfo",e).subscribe(e=>{r(e)},e=>{t("admin is not exist")})})}searchUser(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"admin/searchUser",r).subscribe(e=>{t(e)},e=>{s("No data found")})})}searchWithdrawHistory(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"admin/searchWithdrawHistory",r).subscribe(e=>{t(e)},e=>{s("No data found")})})}userDisplayData(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"admin/displayData",r).subscribe(e=>{t(e)},e=>{s("No data found")})})}userIsActive(e,r){return new Promise((t,s)=>{this.apiCall.putRequestHeader(e,"admin/userIsActive",r).subscribe(e=>{t(e)},e=>{s("Pacakges is not exist")})})}userCount(e){return new Promise((r,t)=>{this.apiCall.getRequestHeader("admin/userCount",e).subscribe(e=>{r(e)},e=>{t("user is not exist")})})}productCount(e){return new Promise((r,t)=>{this.apiCall.getRequestHeader("admin/productCount",e).subscribe(e=>{r(e)},e=>{t("user is not exist")})})}all24History(e){return new Promise((r,t)=>{this.apiCall.getRequestHeader("admin/all24WithdrawHistory",e).subscribe(e=>{r(e)},e=>{t("Withdraw is not exist")})})}allHistory(e){return new Promise((r,t)=>{this.apiCall.getRequestHeader("admin/allWithdrawHistory",e).subscribe(e=>{r(e)},e=>{t("Withdraw is not exist")})})}allPendingWithdrawHistory(e){return new Promise((r,t)=>{this.apiCall.getRequestHeader("admin/allPendingWithdrawHistory",e).subscribe(e=>{r(e)},e=>{t("Withdraw is not exist")})})}completedProduct(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"admin/completedProduct",r).subscribe(e=>{if(e)return t(e)},e=>{if(e.status)return s(e.error.message)})})}productDetails(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"admin/productDetails",r).subscribe(e=>{if(e)return t(e)},e=>{if(e.status)return s(e.error.message)})})}getProducts(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"admin/products",r).subscribe(e=>{if(e)return t(e)},e=>{if(e.status)return s(e.error.message)})})}adminWithdrawHistory(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"admin/withdrawWallet",r).subscribe(e=>{if(e)return t(e)},e=>{if(console.log(">>>>>>>>error.status",e.status),e.status)return s(e.error.message)})})}}return e.\u0275fac=function(r){return new(r||e)(s.LFG(i.F0),s.LFG(a.eN),s.LFG(n.u))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},2265:function(e,r,t){"use strict";t.d(r,{s:function(){return u}});var s=t(8619),i=t(1522),a=t(2693),n=t(4500);let u=(()=>{class e{constructor(e,r,t){this.router=e,this.http=r,this.apiCall=t}displayData(e){return new Promise((r,t)=>{this.apiCall.getRequestHeader("dashboard/displayData",e).subscribe(e=>{if(e)return r(e)},e=>{if(e.status)return t(e.error.message)})})}adminDisplayData(e){return new Promise((r,t)=>{this.apiCall.getRequestHeader("admin/adminDisplayData",e).subscribe(e=>{if(e)return r(e)},e=>{if(e.status)return t(e.error.message)})})}getOrder(e){return new Promise((r,t)=>{this.apiCall.getRequestHeader("order/getOrder",e).subscribe(e=>{if(e)return r(e)},e=>{if(e.status)return t(e.error.message)})})}}return e.\u0275fac=function(r){return new(r||e)(s.LFG(i.F0),s.LFG(a.eN),s.LFG(n.u))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},7439:function(e,r,t){"use strict";t.d(r,{w:function(){return o}});var s=t(8619),i=t(2693),a=t(2893),n=t(4500),u=t(518);let o=(()=>{class e{constructor(e,r,t,s){this.http=e,this.localData=r,this.apiCall=t,this.toastr=s}resetLink(e){return new Promise((r,t)=>{this.apiCall.postRequest({email:e},"user/forgotPassword").subscribe(e=>{r(e)},e=>{t(e.error.message)})})}changePassword(e,r){return new Promise((t,s)=>{this.apiCall.putRequestHeader(e,"user/changePassword",r).subscribe(e=>{t(e)},e=>{s(e.error.message)})})}resetPassword(e,r){return new Promise((t,s)=>{this.apiCall.postRequest(e,"user/resetPassword/"+r).subscribe(e=>{t(e)},e=>{if(e.status)return s(e.error)})})}contactInfoUpdate(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"user/contactInfoUpdate/",r).subscribe(e=>{t(e)},e=>{if(e.status)return s(e.error)})})}}return e.\u0275fac=function(r){return new(r||e)(s.LFG(i.eN),s.LFG(a.v),s.LFG(n.u),s.LFG(u._W))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},9586:function(e,r,t){"use strict";t.d(r,{e:function(){return n}});var s=t(8619),i=t(2693),a=t(4500);let n=(()=>{class e{constructor(e,r){this.http=e,this.apiCall=r}gauth(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"qr/generateQrCode",r).subscribe(e=>t(e),e=>{s("Something went wrong")})})}gauthVerify(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"qr/verifyQrCode",r).subscribe(e=>t(e),e=>s(e.error.message))})}gauthVerifyOtp(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"user/save_LoginLog_If_TwoFA_Enable",r).subscribe(e=>t(e),e=>{if(481==e.status)return s("Invalid OTP")})})}gauthDisable(e,r){return new Promise((t,s)=>{this.apiCall.putRequestHeader(e,"qr/disableGAuth",r).subscribe(e=>t(e),e=>{404==e.status?s("Invalid Password"):481==e.status&&s("Invalid Gauth")})})}verifyGauthCode(e,r){return new Promise((t,s)=>{this.apiCall.postRequestHeader(e,"qr/verifyGAuthCode",r).subscribe(e=>t(e),e=>s(e.error.message))})}}return e.\u0275fac=function(r){return new(r||e)(s.LFG(i.eN),s.LFG(a.u))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},8425:function(e,r,t){"use strict";t.d(r,{r:function(){return c}});var s=t(8619),i=t(2693),a=t(4500),n=t(1522);let u=(()=>{class e{constructor(){}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var o=t(2893),l=t(518);let c=(()=>{class e{constructor(e,r,t,s,i,a){this.http=e,this.apiCall=r,this.router=t,this.crypt=s,this.setLocalStoreage=i,this.toastr=a}signInApiCall(e){return new Promise((r,t)=>{this.apiCall.postRequest(e,"user/login").subscribe(e=>{r(e)},e=>{if(e.status)return t(e.error)})})}adminSignInApiCall(e){return console.log(">>>>>data",e),new Promise((r,t)=>{this.apiCall.postRequest(e,"admin/signin").subscribe(e=>{console.log(">>>>>>>>res",e),r(e)},e=>{if(e.status)return t(e.error)})})}}return e.\u0275fac=function(r){return new(r||e)(s.LFG(i.eN),s.LFG(a.u),s.LFG(n.F0),s.LFG(u),s.LFG(o.v),s.LFG(l._W))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);