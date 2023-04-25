(self.webpackChunkglobal=self.webpackChunkglobal||[]).push([[299],{6266:function(t,e,r){"use strict";r.r(e),r.d(e,{ForgotPasswordModule:function(){return p}});var o=r(1116),a=r(1462),s=r(3319),n=r(6304),i=r(8619),u=r(7439),l=r(518);const c=[{path:"",component:(()=>{class t{constructor(t,e,r,o){this.router=t,this.formBuilder=e,this.service=r,this.toastr=o,this.submitted=!1,this.role=!0}ngOnInit(){window,this.forgotForm=this.formBuilder.group({email:["",[a.kI.required]]})}forgotPasswordSubmit(){var t=this;return(0,n.Z)(function*(){try{(yield t.service.resetLink(t.forgotForm.value.email))&&(t.toastr.success("Reset password link sent to your Email ID !!"),t.forgotForm.reset())}catch(e){t.toastr.error("Opps! Something went wrong!!!"),t.ngOnInit()}})()}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(s.F0),i.Y36(a.qu),i.Y36(u.w),i.Y36(l._W))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-forgotPassword"]],decls:28,vars:1,consts:[[1,"page"],[1,"d-md-flex"],[1,"w-40","bg-style","h-100vh","page-style"],[1,"page-content"],[1,"page-single-content"],["src","assets/images/logo.svg","alt","img",1,"header-brand-img","mb-5"],[1,"card-body","text-white","py-5","px-8","text-center"],["src","assets/images/2.png","alt","img",1,"w-100","mx-auto","text-center"],[1,"w-80","page-content"],[1,"card-body","p-6"],[1,"row"],[1,"col-md-8","mx-auto","d-block"],[1,"mb-2"],[1,"text-muted"],[3,"formGroup","ngSubmit"],[1,"input-group","mb-4"],[1,"input-group-addon"],["xmlns","http://www.w3.org/2000/svg","height","24","viewBox","0 0 24 24","width","24",1,"svg-icon"],["d","M0 0h24v24H0V0z","fill","none"],["d","M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z","opacity",".3"],["d","M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"],["type","text","formControlName","email","placeholder","Enter Email",1,"form-control"],[1,"col-12"],["type","submit","role","button","href","",1,"btn","btn-lg","btn-primary","btn-block","px-4"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.TgZ(3,"div",3),i.TgZ(4,"div",4),i._UZ(5,"img",5),i.TgZ(6,"div",6),i._UZ(7,"img",7),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(8,"div",8),i.TgZ(9,"div",4),i.TgZ(10,"div",9),i.TgZ(11,"div",10),i.TgZ(12,"div",11),i.TgZ(13,"h1",12),i._uU(14,"Forgot Password"),i.qZA(),i._UZ(15,"p",13),i.TgZ(16,"form",14),i.NdJ("ngSubmit",function(){return e.forgotPasswordSubmit()}),i.TgZ(17,"div",15),i.TgZ(18,"span",16),i.O4$(),i.TgZ(19,"svg",17),i._UZ(20,"path",18),i._UZ(21,"path",19),i._UZ(22,"path",20),i.qZA(),i.qZA(),i.kcU(),i._UZ(23,"input",21),i.qZA(),i.TgZ(24,"div",10),i.TgZ(25,"div",22),i.TgZ(26,"button",23),i._uU(27," Click Here"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(16),i.Q6J("formGroup",e.forgotForm))},directives:[a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u],styles:[".custom-data[_ngcontent-%COMP%]{background:#fff;padding:20px;margin-top:10px}"]}),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[s.Bz.forChild(c)],s.Bz]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[o.ez,g,a.u5,a.UX,l.Rh.forRoot({timeOut:2500,preventDuplicates:!0})]]}),t})()},4500:function(t,e,r){"use strict";r.d(e,{u:function(){return s}});var o=r(2693),a=r(8619);let s=(()=>{class t{constructor(t){this.http=t,this.baseUrl="http://localhost:5000/api/v1/"}postRequest(t,e){return this.http.post(this.baseUrl+e,t)}postRequestHeader(t,e,r){let a=new o.WM;return a=a.set("Content-Type","multipart/form-data; charset=utf-8"),this.http.post(this.baseUrl+e,t,{headers:{Authorization:r}})}putRequestHeader(t,e,r){let a=new o.WM;return a=a.set("Content-Type","application/json; charset=utf-8"),this.http.put(this.baseUrl+e,t,{headers:{authorization:r}})}getRequest(t){return this.http.get(this.baseUrl+t)}getRequestWithoutData(t){let e=new o.WM;return e=e.set("Content-Type","application/json; charset=utf-8"),this.http.get(this.baseUrl,{headers:{authorization:t}})}getRequestHeader(t,e){let r=new o.WM;return r=r.set("Content-Type","application/json; charset=utf-8"),this.http.get(this.baseUrl+t,{headers:{authorization:e}})}DeleteRequestHeader(t,e){let r=new o.WM;return r=r.set("Content-Type","application/json; charset=utf-8"),this.http.delete(this.baseUrl+t,{headers:{authorization:e}})}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(o.eN))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},2893:function(t,e,r){"use strict";r.d(e,{v:function(){return i}});var o=r(8619),a=r(3319),s=r(2693),n=r(4500);let i=(()=>{class t{constructor(t,e,r){this.router=t,this.http=e,this.apiCall=r}getlocalData(){let t={};return t.userId=localStorage.getItem("userId"),t.token=localStorage.getItem("token"),t.userMail=localStorage.getItem("userMail"),t.firstName=localStorage.getItem("firstName"),t.lastName=localStorage.getItem("lastName"),t.username=localStorage.getItem("username"),t}setLocalData(t){localStorage.setItem("dataSource",JSON.stringify(t)),localStorage.setItem("userId",t.data.user._id),localStorage.setItem("token",t.data.token),localStorage.setItem("userMail",t.data.user.email),localStorage.setItem("firstName",t.data.user.firstName),localStorage.setItem("username",t.data.user.username),localStorage.setItem("lastName",t.data.user.lastName)}checkLogin(){localStorage.getItem("token")||this.router.navigate(["/login"])}userInfo(t){return new Promise((e,r)=>{this.apiCall.getRequestHeader("user/userInfo",t).subscribe(t=>{e(t)},t=>{r("Pacakges is not exist")})})}fetchPacakge(){return new Promise((t,e)=>{this.apiCall.getRequest("public/packages").subscribe(e=>{t(e)},t=>{e("Pacakges is not exist")})})}reBuyPacakge(){return new Promise((t,e)=>{this.apiCall.getRequest("public/reBuy").subscribe(e=>{t(e)},t=>{e("Pacakges is not exist")})})}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(a.F0),o.LFG(s.eN),o.LFG(n.u))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);