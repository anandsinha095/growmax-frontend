(self.webpackChunkglobal=self.webpackChunkglobal||[]).push([[104],{8104:function(t,e,r){"use strict";r.r(e),r.d(e,{VerifyModule:function(){return d}});var i=r(1116),n=r(1462),o=r(1522),s=r(6304),a=r(8619),u=r(2893),c=r(2693),l=r(4500);let p=(()=>{class t{constructor(t,e){this.http=t,this.apiCall=e}resendMail(t){return new Promise((e,r)=>{this.apiCall.postRequest(t,"user/resendMail_for_verify_email").subscribe(t=>{e(t)},t=>{400==t.status?r("Something went wrong"):462==t.status&&r("Please try After few min")})})}resendMailIP(t){return new Promise((e,r)=>{this.apiCall.postRequest(t,"user/resendMail_for_verify_IP").subscribe(t=>{e(t)},t=>{400==t.status?r("Something went wrong"):462==t.status&&r("Please try After few min")})})}mailconfirmation(t,e){return new Promise((r,i)=>{this.apiCall.postRequestHeader(t,"user/verifyEmail/",e).subscribe(t=>{r(t)},t=>{i(t.error.message)})})}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(c.eN),a.LFG(l.u))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=r(518);const f=[{path:"",component:(()=>{class t{constructor(t,e,r,i,n,o){this.router=t,this.formBuilder=e,this.localData=r,this.service=i,this.toastr=n,this.route=o,this.submitted=!1,this.role=!0}ngOnInit(){window,this.verifyOtpForm=this.formBuilder.group({otp:["",[n.kI.required]]})}verifyOtpSubmit(){var t=this;return(0,s.Z)(function*(){const e=t.route.snapshot.paramMap.get("token");try{(yield t.service.mailconfirmation(t.verifyOtpForm.value,e))&&t.toastr.success("User resgistered successfully !!"),t.router.navigate(["/payment/",e])}catch(r){t.toastr.error(r),t.ngOnInit()}})()}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(o.F0),a.Y36(n.qu),a.Y36(u.v),a.Y36(p),a.Y36(m._W),a.Y36(o.gz))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-verify"]],decls:29,vars:1,consts:[[1,"page"],[1,"page-single"],[1,"container"],[1,"row","justify-content-center"],[1,"col-md-5"],[1,"card","p-4","mb-0","mt-7","mt-md-2"],[1,"card-body"],[1,"text-center","title-style","mb-6"],[1,"mb-2"],[1,"text-muted"],[3,"formGroup","ngSubmit"],[1,"input-group","mb-4"],[1,"input-group-addon"],["xmlns","http://www.w3.org/2000/svg","height","24","viewBox","0 0 24 24","width","24",1,"svg-icon"],["d","M0 0h24v24H0V0z","fill","none"],["d","M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z","opacity",".3"],["d","M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"],["type","number","formControlName","otp","placeholder","Enter OTP",1,"form-control"],[1,"row"],[1,"col-12"],["type","submit","role","button","href","",1,"btn","btn-lg","btn-primary","btn-block","px-4"],[1,"text-center","pt-4"],[1,"font-weight-normal","fs-16"],["href","#",1,"btn-link","font-weight-normal"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"div",3),a.TgZ(4,"div",4),a.TgZ(5,"div",5),a.TgZ(6,"div",6),a.TgZ(7,"div",7),a.TgZ(8,"h1",8),a._uU(9,"Email Verification"),a.qZA(),a._UZ(10,"hr"),a.TgZ(11,"p",9),a._uU(12,"Please Check Your Email To Get OTP"),a.qZA(),a.qZA(),a.TgZ(13,"form",10),a.NdJ("ngSubmit",function(){return e.verifyOtpSubmit()}),a.TgZ(14,"div",11),a.TgZ(15,"span",12),a.O4$(),a.TgZ(16,"svg",13),a._UZ(17,"path",14),a._UZ(18,"path",15),a._UZ(19,"path",16),a.qZA(),a.qZA(),a.kcU(),a._UZ(20,"input",17),a.qZA(),a.TgZ(21,"div",18),a.TgZ(22,"div",19),a.TgZ(23,"button",20),a._uU(24," Send"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(25,"div",21),a.TgZ(26,"div",22),a.TgZ(27,"a",23),a._uU(28,"Send OTP Again"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(13),a.Q6J("formGroup",e.verifyOtpForm))},directives:[n._Y,n.JL,n.sg,n.wV,n.Fj,n.JJ,n.u],styles:[".custom-data[_ngcontent-%COMP%]{background:#fff;padding:20px;margin-top:10px}"]}),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[o.Bz.forChild(f)],o.Bz]}),t})(),d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[i.ez,g,n.u5,n.UX,m.Rh.forRoot({timeOut:2500,preventDuplicates:!0})]]}),t})()}}]);