!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(self.webpackChunkglobal=self.webpackChunkglobal||[]).push([[403],{6403:function(n,r,i){"use strict";i.r(r),i.d(r,{VerifyModule:function(){return Z}});var o,a,u=i(1116),c=i(1462),s=i(1522),p=i(6304),f=i(8619),l=i(2893),g=i(1489),m=i(518),d=[{path:"",component:(o=function(){function n(e,r,i,o,a,u){t(this,n),this.router=e,this.formBuilder=r,this.localData=i,this.service=o,this.toastr=a,this.route=u,this.submitted=!1,this.role=!0}var r,i,o;return r=n,(i=[{key:"ngOnInit",value:function(){window,this.verifyOtpForm=this.formBuilder.group({otp:["",[c.kI.required]]})}},{key:"verifyOtpSubmit",value:function(){var t=this;return(0,p.Z)(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route.snapshot.paramMap.get("token"),e.prev=1,e.next=4,t.service.mailconfirmation(t.verifyOtpForm.value,n);case 4:if(e.t0=e.sent,!e.t0){e.next=7;break}t.toastr.success("User resgistered successfully !!");case 7:t.router.navigate(["/payment/",n]),e.next=13;break;case 10:e.prev=10,e.t1=e.catch(1),t.toastr.error(e.t1),t.ngOnInit();case 13:case"end":return e.stop()}},e,null,[[1,10]])}))()}}])&&e(r.prototype,i),o&&e(r,o),n}(),o.\u0275fac=function(t){return new(t||o)(f.Y36(s.F0),f.Y36(c.qu),f.Y36(l.v),f.Y36(g.i),f.Y36(m._W),f.Y36(s.gz))},o.\u0275cmp=f.Xpm({type:o,selectors:[["app-verify"]],decls:29,vars:1,consts:[[1,"page"],[1,"page-single"],[1,"container"],[1,"row","justify-content-center"],[1,"col-md-5"],[1,"card","p-4","mb-0","mt-7","mt-md-2"],[1,"card-body"],[1,"text-center","title-style","mb-6"],[1,"mb-2"],[1,"text-muted"],[3,"formGroup","ngSubmit"],[1,"input-group","mb-4"],[1,"input-group-addon"],["xmlns","http://www.w3.org/2000/svg","height","24","viewBox","0 0 24 24","width","24",1,"svg-icon"],["d","M0 0h24v24H0V0z","fill","none"],["d","M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z","opacity",".3"],["d","M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"],["type","number","formControlName","otp","placeholder","Enter OTP",1,"form-control"],[1,"row"],[1,"col-12"],["type","submit","role","button","href","",1,"btn","btn-lg","btn-primary","btn-block","px-4"],[1,"text-center","pt-4"],[1,"font-weight-normal","fs-16"],["href","#",1,"btn-link","font-weight-normal"]],template:function(t,e){1&t&&(f.TgZ(0,"div",0),f.TgZ(1,"div",1),f.TgZ(2,"div",2),f.TgZ(3,"div",3),f.TgZ(4,"div",4),f.TgZ(5,"div",5),f.TgZ(6,"div",6),f.TgZ(7,"div",7),f.TgZ(8,"h1",8),f._uU(9,"Email Verification"),f.qZA(),f._UZ(10,"hr"),f.TgZ(11,"p",9),f._uU(12,"Please Check Your Email To Get OTP"),f.qZA(),f.qZA(),f.TgZ(13,"form",10),f.NdJ("ngSubmit",function(){return e.verifyOtpSubmit()}),f.TgZ(14,"div",11),f.TgZ(15,"span",12),f.O4$(),f.TgZ(16,"svg",13),f._UZ(17,"path",14),f._UZ(18,"path",15),f._UZ(19,"path",16),f.qZA(),f.qZA(),f.kcU(),f._UZ(20,"input",17),f.qZA(),f.TgZ(21,"div",18),f.TgZ(22,"div",19),f.TgZ(23,"button",20),f._uU(24," Send"),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.TgZ(25,"div",21),f.TgZ(26,"div",22),f.TgZ(27,"a",23),f._uU(28,"Send OTP Again"),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA()),2&t&&(f.xp6(13),f.Q6J("formGroup",e.verifyOtpForm))},directives:[c._Y,c.JL,c.sg,c.wV,c.Fj,c.JJ,c.u],styles:[".custom-data[_ngcontent-%COMP%]{background:#fff;padding:20px;margin-top:10px}"]}),o)}],v=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f.oAB({type:e}),e.\u0275inj=f.cJS({imports:[[s.Bz.forChild(d)],s.Bz]}),e}(),Z=((a=function e(){t(this,e)}).\u0275fac=function(t){return new(t||a)},a.\u0275mod=f.oAB({type:a}),a.\u0275inj=f.cJS({imports:[[u.ez,v,c.u5,c.UX,m.Rh.forRoot({timeOut:2500,preventDuplicates:!0})]]}),a)}}])}();