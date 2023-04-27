!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}(self.webpackChunkglobal=self.webpackChunkglobal||[]).push([[104],{4500:function(e,r,a){"use strict";a.d(r,{u:function(){return u}});var i=a(2693),o=a(8619),u=function(){var e=function(){function e(n){t(this,e),this.http=n,this.baseUrl="http://43.205.112.88:5000/api/v1/"}return n(e,[{key:"postRequest",value:function(t,e){return this.http.post(this.baseUrl+e,t)}},{key:"postRequestHeader",value:function(t,e,n){var r=new i.WM;return r=r.set("Content-Type","multipart/form-data; charset=utf-8"),this.http.post(this.baseUrl+e,t,{headers:{Authorization:n}})}},{key:"putRequestHeader",value:function(t,e,n){var r=new i.WM;return r=r.set("Content-Type","application/json; charset=utf-8"),this.http.put(this.baseUrl+e,t,{headers:{authorization:n}})}},{key:"getRequest",value:function(t){return this.http.get(this.baseUrl+t)}},{key:"getRequestWithoutData",value:function(t){var e=new i.WM;return e=e.set("Content-Type","application/json; charset=utf-8"),this.http.get(this.baseUrl,{headers:{authorization:t}})}},{key:"getRequestHeader",value:function(t,e){var n=new i.WM;return n=n.set("Content-Type","application/json; charset=utf-8"),this.http.get(this.baseUrl+t,{headers:{authorization:e}})}},{key:"DeleteRequestHeader",value:function(t,e){var n=new i.WM;return n=n.set("Content-Type","application/json; charset=utf-8"),this.http.delete(this.baseUrl+t,{headers:{authorization:e}})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.LFG(i.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},2893:function(e,r,a){"use strict";a.d(r,{v:function(){return c}});var i=a(8619),o=a(1522),u=a(2693),s=a(4500),c=function(){var e=function(){function e(n,r,a){t(this,e),this.router=n,this.http=r,this.apiCall=a}return n(e,[{key:"getlocalData",value:function(){var t={};return t.userId=localStorage.getItem("userId"),t.token=localStorage.getItem("token"),t.userMail=localStorage.getItem("userMail"),t.firstName=localStorage.getItem("firstName"),t.lastName=localStorage.getItem("lastName"),t.username=localStorage.getItem("username"),t}},{key:"setLocalData",value:function(t){localStorage.setItem("dataSource",JSON.stringify(t)),localStorage.setItem("userId",t.data.user._id),localStorage.setItem("token",t.data.token),localStorage.setItem("userMail",t.data.user.email),localStorage.setItem("firstName",t.data.user.firstName),localStorage.setItem("username",t.data.user.username),localStorage.setItem("lastName",t.data.user.lastName)}},{key:"checkLogin",value:function(){localStorage.getItem("token")||this.router.navigate(["/login"])}},{key:"userInfo",value:function(t){var e=this;return new Promise(function(n,r){e.apiCall.getRequestHeader("user/userInfo",t).subscribe(function(t){n(t)},function(t){r("user is not exist")})})}},{key:"fetchPacakge",value:function(){var t=this;return new Promise(function(e,n){t.apiCall.getRequest("public/packages").subscribe(function(t){e(t)},function(t){n("Pacakges is not exist")})})}},{key:"reBuyPacakge",value:function(){var t=this;return new Promise(function(e,n){t.apiCall.getRequest("public/reBuy").subscribe(function(t){e(t)},function(t){n("rebuy is not exist")})})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i.LFG(o.F0),i.LFG(u.eN),i.LFG(s.u))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},8104:function(e,r,a){"use strict";a.r(r),a.d(r,{VerifyModule:function(){return b}});var i,o,u=a(1116),s=a(1462),c=a(1522),l=a(6304),f=a(8619),p=a(2893),h=a(2693),g=a(4500),m=function(){var e=function(){function e(n,r){t(this,e),this.http=n,this.apiCall=r}return n(e,[{key:"resendMail",value:function(t){var e=this;return new Promise(function(n,r){e.apiCall.postRequest(t,"user/resendMail_for_verify_email").subscribe(function(t){n(t)},function(t){400==t.status?r("Something went wrong"):462==t.status&&r("Please try After few min")})})}},{key:"resendMailIP",value:function(t){var e=this;return new Promise(function(n,r){e.apiCall.postRequest(t,"user/resendMail_for_verify_IP").subscribe(function(t){n(t)},function(t){400==t.status?r("Something went wrong"):462==t.status&&r("Please try After few min")})})}},{key:"mailconfirmation",value:function(t,e){var n=this;return new Promise(function(r,a){n.apiCall.postRequestHeader(t,"user/verifyEmail/",e).subscribe(function(t){r(t),console.log(">>>>@@@@.....",t)},function(t){400==t.status?a("Something went wrong"):406==t.status?a("Email Already verified"):401==t.status?a("IP Already Authorized"):500==t.status&&a("Something went wrong")})})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(f.LFG(h.eN),f.LFG(g.u))},e.\u0275prov=f.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),v=a(518),d=[{path:"",component:(i=function(){function e(n,r,a,i,o,u){t(this,e),this.router=n,this.formBuilder=r,this.localData=a,this.service=i,this.toastr=o,this.route=u,this.submitted=!1,this.role=!0}return n(e,[{key:"ngOnInit",value:function(){window,this.verifyOtpForm=this.formBuilder.group({otp:["",[s.kI.required]]})}},{key:"verifyOtpSubmit",value:function(){var t=this;return(0,l.Z)(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route.snapshot.paramMap.get("token"),e.prev=1,e.next=4,t.service.mailconfirmation(t.verifyOtpForm.value,n);case 4:if(e.t0=e.sent,!e.t0){e.next=7;break}t.toastr.success("User resgistered successfully !!");case 7:t.router.navigate(["/payment/",n]),e.next=13;break;case 10:e.prev=10,e.t1=e.catch(1),t.toastr.error("Opps! Something went wrong!!!"),t.ngOnInit();case 13:case"end":return e.stop()}},e,null,[[1,10]])}))()}}]),e}(),i.\u0275fac=function(t){return new(t||i)(f.Y36(c.F0),f.Y36(s.qu),f.Y36(p.v),f.Y36(m),f.Y36(v._W),f.Y36(c.gz))},i.\u0275cmp=f.Xpm({type:i,selectors:[["app-verify"]],decls:29,vars:1,consts:[[1,"page"],[1,"page-single"],[1,"container"],[1,"row","justify-content-center"],[1,"col-md-5"],[1,"card","p-4","mb-0","mt-7","mt-md-2"],[1,"card-body"],[1,"text-center","title-style","mb-6"],[1,"mb-2"],[1,"text-muted"],[3,"formGroup","ngSubmit"],[1,"input-group","mb-4"],[1,"input-group-addon"],["xmlns","http://www.w3.org/2000/svg","height","24","viewBox","0 0 24 24","width","24",1,"svg-icon"],["d","M0 0h24v24H0V0z","fill","none"],["d","M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z","opacity",".3"],["d","M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"],["type","number","formControlName","otp","placeholder","Enter OTP",1,"form-control"],[1,"row"],[1,"col-12"],["type","submit","role","button","href","",1,"btn","btn-lg","btn-primary","btn-block","px-4"],[1,"text-center","pt-4"],[1,"font-weight-normal","fs-16"],["href","#",1,"btn-link","font-weight-normal"]],template:function(t,e){1&t&&(f.TgZ(0,"div",0),f.TgZ(1,"div",1),f.TgZ(2,"div",2),f.TgZ(3,"div",3),f.TgZ(4,"div",4),f.TgZ(5,"div",5),f.TgZ(6,"div",6),f.TgZ(7,"div",7),f.TgZ(8,"h1",8),f._uU(9,"Email Verification"),f.qZA(),f._UZ(10,"hr"),f.TgZ(11,"p",9),f._uU(12,"Please Check Your Email To Get OTP"),f.qZA(),f.qZA(),f.TgZ(13,"form",10),f.NdJ("ngSubmit",function(){return e.verifyOtpSubmit()}),f.TgZ(14,"div",11),f.TgZ(15,"span",12),f.O4$(),f.TgZ(16,"svg",13),f._UZ(17,"path",14),f._UZ(18,"path",15),f._UZ(19,"path",16),f.qZA(),f.qZA(),f.kcU(),f._UZ(20,"input",17),f.qZA(),f.TgZ(21,"div",18),f.TgZ(22,"div",19),f.TgZ(23,"button",20),f._uU(24," Send"),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.TgZ(25,"div",21),f.TgZ(26,"div",22),f.TgZ(27,"a",23),f._uU(28,"Send OTP Again"),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA()),2&t&&(f.xp6(13),f.Q6J("formGroup",e.verifyOtpForm))},directives:[s._Y,s.JL,s.sg,s.wV,s.Fj,s.JJ,s.u],styles:[".custom-data[_ngcontent-%COMP%]{background:#fff;padding:20px;margin-top:10px}"]}),i)}],y=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f.oAB({type:e}),e.\u0275inj=f.cJS({imports:[[c.Bz.forChild(d)],c.Bz]}),e}(),b=((o=function e(){t(this,e)}).\u0275fac=function(t){return new(t||o)},o.\u0275mod=f.oAB({type:o}),o.\u0275inj=f.cJS({imports:[[u.ez,y,s.u5,s.UX,v.Rh.forRoot({timeOut:2500,preventDuplicates:!0})]]}),o)}}])}();