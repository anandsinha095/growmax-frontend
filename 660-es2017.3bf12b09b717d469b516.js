(self.webpackChunkglobal=self.webpackChunkglobal||[]).push([[660],{5660:function(t,e,r){"use strict";r.r(e),r.d(e,{LoginModule:function(){return b}});var o=r(1116),a=r(1462),n=r(3319),i=r(6304),s=r(8619),l=r(8425),u=r(518),c=r(2893);function g(t,e){1&t&&(s.TgZ(0,"div"),s._uU(1,"Please enter your email id"),s.qZA())}function d(t,e){1&t&&(s.TgZ(0,"div"),s._uU(1,"Invalid email id"),s.qZA())}function p(t,e){if(1&t&&(s.TgZ(0,"div",35),s.YNc(1,g,2,0,"div",36),s.YNc(2,d,2,0,"div",36),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngIf",t.loginForm.controls.email.errors.required),s.xp6(1),s.Q6J("ngIf",t.loginForm.controls.email.errors.email)}}function m(t,e){1&t&&(s.TgZ(0,"div"),s._uU(1,"Please enter your password"),s.qZA())}function h(t,e){1&t&&(s.TgZ(0,"div"),s._uU(1,"Invalid Password"),s.qZA())}function Z(t,e){if(1&t&&(s.TgZ(0,"div",35),s.YNc(1,m,2,0,"div",36),s.YNc(2,h,2,0,"div",36),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngIf",t.loginForm.controls.password.errors.required),s.xp6(1),s.Q6J("ngIf",t.loginForm.controls.password.errors.minlength)}}const f=[{path:"",component:(()=>{class t{constructor(t,e,r,o,a){this.router=t,this.formBuilder=e,this.service=r,this.toastr=o,this.setLocalStoreage=a,this.submitted=!1,this.role=!0}ngOnInit(){window,this.loginForm=this.formBuilder.group({email:["",[a.kI.required,a.kI.email,a.kI.pattern("^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$")]],password:["",[a.kI.required,a.kI.minLength(6),a.kI.maxLength(16)]]})}loginSubmit(){var t=this;return(0,i.Z)(function*(){try{if(t.submitted=!0,t.loginForm.invalid)return;if("@gmail.com"!=t.loginForm.value.email.slice(-10))return void t.toastr.error("Please enter Gmail ID only");const e=yield t.service.signInApiCall(t.loginForm.value);201==e.code?t.router.navigate(["/payment/",e.data]):200==e.code&&(t.setLocalStoreage.setLocalData(e),t.router.navigate(["/dashboard/"]))}catch(e){461==e.code&&t.router.navigate(["/verify-email/",e.data.token]),t.toastr.warning(e.message),t.ngOnInit()}})()}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(n.F0),s.Y36(a.qu),s.Y36(l.r),s.Y36(u._W),s.Y36(c.v))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-login"]],decls:48,vars:3,consts:[[1,"page"],[1,"d-md-flex"],[1,"w-40","bg-style","h-100vh","page-style"],[1,"page-content"],[1,"page-single-content"],["src","assets/images/logo.svg","alt","img",1,"header-brand-img","mb-5"],[1,"card-body","text-white","py-5","px-8","text-center"],["src","assets/images/2.png","alt","img",1,"w-100","mx-auto","text-center"],[1,"w-80","page-content"],[1,"card-body","p-6"],[1,"row"],[1,"col-md-8","mx-auto","d-block"],[1,"mb-2"],[1,"text-muted"],[3,"formGroup","ngSubmit"],[1,"input-group","mb-4"],[1,"input-group-addon"],["xmlns","http://www.w3.org/2000/svg","height","24","viewBox","0 0 24 24","width","24",1,"svg-icon"],["d","M0 0h24v24H0V0z","fill","none"],["d","M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z","opacity",".3"],["d","M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"],["type","text","formControlName","email","placeholder","Enter Email",1,"form-control"],["class","error m-error",4,"ngIf"],["fill","none"],["d","M0 0h24v24H0V0z"],["d","M0 0h24v24H0V0z","opacity",".87"],["d","M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z","opacity",".3"],["d","M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"],["type","password","formControlName","password","placeholder","Password",1,"form-control"],[1,"col-12"],["routerLink","/forgot-password",1,"btn","btn-link","box-shadow-0","px-0"],["type","submit","role","button",1,"btn","btn-lg","btn-primary","btn-block","px-4"],[1,"pt-4"],[1,"font-weight-normal","fs-16"],["routerLink","/register",1,"btn-link","font-weight-normal"],[1,"error","m-error"],[4,"ngIf"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"div",3),s.TgZ(4,"div",4),s._UZ(5,"img",5),s.TgZ(6,"div",6),s._UZ(7,"img",7),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(8,"div",8),s.TgZ(9,"div",4),s.TgZ(10,"div",9),s.TgZ(11,"div",10),s.TgZ(12,"div",11),s.TgZ(13,"h1",12),s._uU(14,"Login"),s.qZA(),s.TgZ(15,"p",13),s._uU(16,"Sign In to your account"),s.qZA(),s.TgZ(17,"form",14),s.NdJ("ngSubmit",function(){return e.loginSubmit()}),s.TgZ(18,"div",15),s.TgZ(19,"span",16),s.O4$(),s.TgZ(20,"svg",17),s._UZ(21,"path",18),s._UZ(22,"path",19),s._UZ(23,"path",20),s.qZA(),s.qZA(),s.kcU(),s._UZ(24,"input",21),s.qZA(),s.YNc(25,p,3,2,"div",22),s.TgZ(26,"div",15),s.TgZ(27,"span",16),s.O4$(),s.TgZ(28,"svg",17),s.TgZ(29,"g",23),s._UZ(30,"path",24),s._UZ(31,"path",25),s.qZA(),s._UZ(32,"path",26),s._UZ(33,"path",27),s.qZA(),s.qZA(),s.kcU(),s._UZ(34,"input",28),s.qZA(),s.YNc(35,Z,3,2,"div",22),s.TgZ(36,"div",10),s.TgZ(37,"div",29),s.TgZ(38,"a",30),s._uU(39,"Forgot password?"),s.qZA(),s.qZA(),s.TgZ(40,"div",29),s.TgZ(41,"button",31),s._uU(42,"Login "),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(43,"div",32),s.TgZ(44,"div",33),s._uU(45,"You Don't have an account "),s.TgZ(46,"a",34),s._uU(47,"Register Here"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(17),s.Q6J("formGroup",e.loginForm),s.xp6(8),s.Q6J("ngIf",e.submitted&&e.loginForm.controls.email.errors),s.xp6(10),s.Q6J("ngIf",e.submitted&&e.loginForm.controls.password.errors))},directives:[a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,o.O5,n.yS],styles:[".custom-data[_ngcontent-%COMP%]{background:#fff;padding:20px;margin-top:10px}"]}),t})()}];let v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[n.Bz.forChild(f)],n.Bz]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[o.ez,v,a.u5,a.UX,u.Rh.forRoot({timeOut:2500,preventDuplicates:!0})]]}),t})()},4500:function(t,e,r){"use strict";r.d(e,{u:function(){return n}});var o=r(2693),a=r(8619);let n=(()=>{class t{constructor(t){this.http=t,this.baseUrl="http://43.205.112.88:5000/api/v1/"}postRequest(t,e){return this.http.post(this.baseUrl+e,t)}postRequestHeader(t,e,r){let a=new o.WM;return a=a.set("Content-Type","multipart/form-data; charset=utf-8"),this.http.post(this.baseUrl+e,t,{headers:{Authorization:r}})}putRequestHeader(t,e,r){let a=new o.WM;return a=a.set("Content-Type","application/json; charset=utf-8"),this.http.put(this.baseUrl+e,t,{headers:{authorization:r}})}getRequest(t){return this.http.get(this.baseUrl+t)}getRequestWithoutData(t){let e=new o.WM;return e=e.set("Content-Type","application/json; charset=utf-8"),this.http.get(this.baseUrl,{headers:{authorization:t}})}getRequestHeader(t,e){let r=new o.WM;return r=r.set("Content-Type","application/json; charset=utf-8"),this.http.get(this.baseUrl+t,{headers:{authorization:e}})}DeleteRequestHeader(t,e){let r=new o.WM;return r=r.set("Content-Type","application/json; charset=utf-8"),this.http.delete(this.baseUrl+t,{headers:{authorization:e}})}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(o.eN))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},2893:function(t,e,r){"use strict";r.d(e,{v:function(){return s}});var o=r(8619),a=r(3319),n=r(2693),i=r(4500);let s=(()=>{class t{constructor(t,e,r){this.router=t,this.http=e,this.apiCall=r}getlocalData(){let t={};return t.userId=localStorage.getItem("userId"),t.token=localStorage.getItem("token"),t.userMail=localStorage.getItem("userMail"),t.firstName=localStorage.getItem("firstName"),t.lastName=localStorage.getItem("lastName"),t.username=localStorage.getItem("username"),t}setLocalData(t){localStorage.setItem("dataSource",JSON.stringify(t)),localStorage.setItem("userId",t.data.user._id),localStorage.setItem("token",t.data.token),localStorage.setItem("userMail",t.data.user.email),localStorage.setItem("firstName",t.data.user.firstName),localStorage.setItem("username",t.data.user.username),localStorage.setItem("lastName",t.data.user.lastName)}checkLogin(){localStorage.getItem("token")||this.router.navigate(["/login"])}userInfo(t){return new Promise((e,r)=>{this.apiCall.getRequestHeader("user/userInfo",t).subscribe(t=>{e(t)},t=>{r("user is not exist")})})}fetchPacakge(){return new Promise((t,e)=>{this.apiCall.getRequest("public/packages").subscribe(e=>{t(e)},t=>{e("Pacakges is not exist")})})}reBuyPacakge(){return new Promise((t,e)=>{this.apiCall.getRequest("public/reBuy").subscribe(e=>{t(e)},t=>{e("rebuy is not exist")})})}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(a.F0),o.LFG(n.eN),o.LFG(i.u))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);