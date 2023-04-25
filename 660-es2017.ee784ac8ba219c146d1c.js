(self.webpackChunkglobal=self.webpackChunkglobal||[]).push([[660],{5660:function(t,e,r){"use strict";r.r(e),r.d(e,{LoginModule:function(){return d}});var a=r(1116),o=r(1462),s=r(3319),n=r(6304),i=r(8619),u=r(8425),l=r(518),c=r(2893);const g=[{path:"",component:(()=>{class t{constructor(t,e,r,a,o){this.router=t,this.formBuilder=e,this.service=r,this.toastr=a,this.setLocalStoreage=o,this.submitted=!1,this.role=!0}ngOnInit(){window,this.loginForm=this.formBuilder.group({email:["",[o.kI.required]],password:["",[o.kI.required]]})}loginSubmit(){var t=this;return(0,n.Z)(function*(){try{const e=yield t.service.signInApiCall(t.loginForm.value);201==e.code?t.router.navigate(["/payment/",e.data]):200==e.code&&(t.setLocalStoreage.setLocalData(e),t.router.navigate(["/dashboard/"]))}catch(e){461==e.code&&t.router.navigate(["/verify-email/",e.data.token]),t.toastr.warning(e.message),t.ngOnInit()}})()}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(s.F0),i.Y36(o.qu),i.Y36(u.r),i.Y36(l._W),i.Y36(c.v))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-login"]],decls:46,vars:1,consts:[[1,"page"],[1,"d-md-flex"],[1,"w-40","bg-style","h-100vh","page-style"],[1,"page-content"],[1,"page-single-content"],["src","assets/images/logo.svg","alt","img",1,"header-brand-img","mb-5"],[1,"card-body","text-white","py-5","px-8","text-center"],["src","assets/images/2.png","alt","img",1,"w-100","mx-auto","text-center"],[1,"w-80","page-content"],[1,"card-body","p-6"],[1,"row"],[1,"col-md-8","mx-auto","d-block"],[1,"mb-2"],[1,"text-muted"],[3,"formGroup","ngSubmit"],[1,"input-group","mb-4"],[1,"input-group-addon"],["xmlns","http://www.w3.org/2000/svg","height","24","viewBox","0 0 24 24","width","24",1,"svg-icon"],["d","M0 0h24v24H0V0z","fill","none"],["d","M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z","opacity",".3"],["d","M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"],["type","text","formControlName","email","placeholder","Enter Email",1,"form-control"],["fill","none"],["d","M0 0h24v24H0V0z"],["d","M0 0h24v24H0V0z","opacity",".87"],["d","M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z","opacity",".3"],["d","M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"],["type","password","formControlName","password","placeholder","Password",1,"form-control"],[1,"col-12"],["routerLink","/forgot-password",1,"btn","btn-link","box-shadow-0","px-0"],["type","submit","role","button","href","",1,"btn","btn-lg","btn-primary","btn-block","px-4"],[1,"pt-4"],[1,"font-weight-normal","fs-16"],["routerLink","/register",1,"btn-link","font-weight-normal"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.TgZ(3,"div",3),i.TgZ(4,"div",4),i._UZ(5,"img",5),i.TgZ(6,"div",6),i._UZ(7,"img",7),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(8,"div",8),i.TgZ(9,"div",4),i.TgZ(10,"div",9),i.TgZ(11,"div",10),i.TgZ(12,"div",11),i.TgZ(13,"h1",12),i._uU(14,"Login"),i.qZA(),i.TgZ(15,"p",13),i._uU(16,"Sign In to your account"),i.qZA(),i.TgZ(17,"form",14),i.NdJ("ngSubmit",function(){return e.loginSubmit()}),i.TgZ(18,"div",15),i.TgZ(19,"span",16),i.O4$(),i.TgZ(20,"svg",17),i._UZ(21,"path",18),i._UZ(22,"path",19),i._UZ(23,"path",20),i.qZA(),i.qZA(),i.kcU(),i._UZ(24,"input",21),i.qZA(),i.TgZ(25,"div",15),i.TgZ(26,"span",16),i.O4$(),i.TgZ(27,"svg",17),i.TgZ(28,"g",22),i._UZ(29,"path",23),i._UZ(30,"path",24),i.qZA(),i._UZ(31,"path",25),i._UZ(32,"path",26),i.qZA(),i.qZA(),i.kcU(),i._UZ(33,"input",27),i.qZA(),i.TgZ(34,"div",10),i.TgZ(35,"div",28),i.TgZ(36,"a",29),i._uU(37,"Forgot password?"),i.qZA(),i.qZA(),i.TgZ(38,"div",28),i.TgZ(39,"button",30),i._uU(40,"Login "),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(41,"div",31),i.TgZ(42,"div",32),i._uU(43,"You Don't have an account "),i.TgZ(44,"a",33),i._uU(45,"Register Here"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(17),i.Q6J("formGroup",e.loginForm))},directives:[o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,s.yS],styles:[".custom-data[_ngcontent-%COMP%]{background:#fff;padding:20px;margin-top:10px}"]}),t})()}];let p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[s.Bz.forChild(g)],s.Bz]}),t})(),d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[a.ez,p,o.u5,o.UX,l.Rh.forRoot({timeOut:2500,preventDuplicates:!0})]]}),t})()},4500:function(t,e,r){"use strict";r.d(e,{u:function(){return s}});var a=r(2693),o=r(8619);let s=(()=>{class t{constructor(t){this.http=t,this.baseUrl="http://43.205.112.88:5000/api/v1/"}postRequest(t,e){return this.http.post(this.baseUrl+e,t)}postRequestHeader(t,e,r){let o=new a.WM;return o=o.set("Content-Type","multipart/form-data; charset=utf-8"),this.http.post(this.baseUrl+e,t,{headers:{Authorization:r}})}putRequestHeader(t,e,r){let o=new a.WM;return o=o.set("Content-Type","application/json; charset=utf-8"),this.http.put(this.baseUrl+e,t,{headers:{authorization:r}})}getRequest(t){return this.http.get(this.baseUrl+t)}getRequestWithoutData(t){let e=new a.WM;return e=e.set("Content-Type","application/json; charset=utf-8"),this.http.get(this.baseUrl,{headers:{authorization:t}})}getRequestHeader(t,e){let r=new a.WM;return r=r.set("Content-Type","application/json; charset=utf-8"),this.http.get(this.baseUrl+t,{headers:{authorization:e}})}DeleteRequestHeader(t,e){let r=new a.WM;return r=r.set("Content-Type","application/json; charset=utf-8"),this.http.delete(this.baseUrl+t,{headers:{authorization:e}})}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(a.eN))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},2893:function(t,e,r){"use strict";r.d(e,{v:function(){return i}});var a=r(8619),o=r(3319),s=r(2693),n=r(4500);let i=(()=>{class t{constructor(t,e,r){this.router=t,this.http=e,this.apiCall=r}getlocalData(){let t={};return t.userId=localStorage.getItem("userId"),t.token=localStorage.getItem("token"),t.userMail=localStorage.getItem("userMail"),t.firstName=localStorage.getItem("firstName"),t.lastName=localStorage.getItem("lastName"),t.username=localStorage.getItem("username"),t}setLocalData(t){localStorage.setItem("dataSource",JSON.stringify(t)),localStorage.setItem("userId",t.data.user._id),localStorage.setItem("token",t.data.token),localStorage.setItem("userMail",t.data.user.email),localStorage.setItem("firstName",t.data.user.firstName),localStorage.setItem("username",t.data.user.username),localStorage.setItem("lastName",t.data.user.lastName)}checkLogin(){localStorage.getItem("token")||this.router.navigate(["/login"])}userInfo(t){return new Promise((e,r)=>{this.apiCall.getRequestHeader("user/userInfo",t).subscribe(t=>{e(t)},t=>{r("user is not exist")})})}fetchPacakge(){return new Promise((t,e)=>{this.apiCall.getRequest("public/packages").subscribe(e=>{t(e)},t=>{e("Pacakges is not exist")})})}reBuyPacakge(){return new Promise((t,e)=>{this.apiCall.getRequest("public/reBuy").subscribe(e=>{t(e)},t=>{e("rebuy is not exist")})})}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(o.F0),a.LFG(s.eN),a.LFG(n.u))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);