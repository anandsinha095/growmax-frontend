!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(self.webpackChunkglobal=self.webpackChunkglobal||[]).push([[690],{7690:function(n,o,r){"use strict";r.r(o),r.d(o,{ContactUpdateModule:function(){return A}});var a=r(1116),i=r(1462),c=r(1522),u=r(6304),s=r(8619),d=r(7439),l=r(7799),p=r(518),m=r(2893);function g(t,e){1&t&&(s.TgZ(0,"div",22),s._UZ(1,"img",23),s.qZA())}function f(t,e){if(1&t&&(s.TgZ(0,"option",24),s._uU(1),s.qZA()),2&t){var n=e.$implicit;s.Q6J("value",n.name),s.xp6(1),s.AsE("",null==n?null:n.name," ",null==n?null:n.emoji,"")}}function b(t,e){if(1&t&&(s.TgZ(0,"div",25),s.TgZ(1,"div",26),s._uU(2," Country is required "),s.qZA(),s.qZA()),2&t){var n=s.oxw();s.xp6(1),s.Q6J("hidden",!n.contactUpdateForm.controls.country.errors.required)}}function h(t,e){if(1&t&&(s.TgZ(0,"div",25),s.TgZ(1,"div",26),s._uU(2," Contact number is required "),s.qZA(),s.TgZ(3,"div",26),s._uU(4," Contact number cannot be more than 10 digit "),s.qZA(),s.TgZ(5,"div",26),s._uU(6," Contact number Should be 10 digit "),s.qZA(),s.TgZ(7,"div",26),s._uU(8," Only Numbers allowed "),s.qZA(),s.qZA()),2&t){var n=s.oxw();s.xp6(1),s.Q6J("hidden",!n.contactUpdateForm.controls.phoneNumber.errors.required),s.xp6(2),s.Q6J("hidden",!n.contactUpdateForm.controls.phoneNumber.errors.maxlength),s.xp6(2),s.Q6J("hidden",!n.contactUpdateForm.controls.phoneNumber.errors.minlength),s.xp6(2),s.Q6J("hidden",!n.contactUpdateForm.controls.phoneNumber.errors.pattern)}}var v,Z,y=function(t){return{select_color:t}},U=function(t,e){return{"btn-info":t,"btn-light":e}},x=[{path:"",component:(v=function(){function n(e,o,r,a,i,c,u){t(this,n),this.router=e,this.formBuilder=o,this.service=r,this.route=a,this.countriess=i,this.toastr=c,this.localData=u,this.submitted=!1,this.role=!0,this.isLoading=!1}var o,r,a;return o=n,(r=[{key:"ngOnInit",value:function(){window,this.countries=this.countriess.country,this.contactUpdateForm=this.formBuilder.group({phoneNumber:["",[i.kI.required,i.kI.maxLength(10),i.kI.minLength(10),i.kI.pattern("^[0-9]{10}$")]],country:["",[i.kI.required]]})}},{key:"contactUpdateSubmit",value:function(){var t=this;return(0,u.Z)(regeneratorRuntime.mark(function e(){var n,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,n=t.route.snapshot.paramMap.get("token"),o=t.countries.find(function(e){return e.name==t.contactUpdateForm.value.country}),t.contactUpdateForm.value.countryCode=o.dial_code,e.next=6,t.service.contactInfoUpdate(t.contactUpdateForm.value,n);case 6:if(e.t0=e.sent,!e.t0){e.next=15;break}return t.toastr.success("Contact Infomation updated successfully !!"),e.next=11,t.localData.userInfo(n);case 11:t.userInfo=e.sent,console.log("this.userInfo===========>",t.userInfo.data.paymentStatus),t.isLoading=!1,0==t.userInfo.data.paymentStatus?(console.log(">>>>>>>here"),t.router.navigate(["/payment/",n])):(localStorage.setItem("token",n),t.router.navigate(["/dashboard/"]));case 15:e.next=20;break;case 17:e.prev=17,e.t1=e.catch(0),t.toastr.error(e.t1.message),t.isLoading=!1;case 20:case"end":return e.stop()}},e,null,[[0,17]])}))()}}])&&e(o.prototype,r),a&&e(o,a),n}(),v.\u0275fac=function(t){return new(t||v)(s.Y36(c.F0),s.Y36(i.qu),s.Y36(d.w),s.Y36(c.gz),s.Y36(l.N),s.Y36(p._W),s.Y36(m.v))},v.\u0275cmp=s.Xpm({type:v,selectors:[["app-contactUpdate"]],decls:28,vars:13,consts:[[1,"page"],["class","global-loader disable-background","style","display: block;",4,"ngIf"],[1,"d-md-flex"],[1,"w-100","page-content"],[1,"page-single-content"],[1,"card-body","p-6"],[1,"row"],[1,"col-md-4","mx-auto","d-block"],[1,"mini-logo","text-center","my-4"],["src","https://growmaxxacademy.com/wp-content/uploads/2023/01/full_trimmed_transparent_customcolor-1.png","alt","img",1,"header-brand-img","mb-2"],[1,"sign_in_style"],[1,"auth-form","card"],[3,"formGroup","ngSubmit"],[1,"input-group","mb-4","mt-2"],["formControlName","country",1,"form-select",3,"ngClass"],["c",""],["value","","disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],["class","error",4,"ngIf"],["type","text","formControlName","phoneNumber","placeholder","Contact Number",1,"form-control"],[1,"col-12"],["type","submit","role","button",1,"btn","btn-lg","bg_gradient","btn-block","px-4",3,"disabled","ngClass"],[1,"global-loader","disable-background",2,"display","block"],["src","assets/images/loader.svg","alt","loader"],[3,"value"],[1,"error"],["role","alert",1,"bg-danger-transparent-2","text-danger","px-4","py-2","br-3","mb-4",3,"hidden"]],template:function(t,e){if(1&t&&(s.TgZ(0,"div",0),s.YNc(1,g,2,0,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"div",3),s.TgZ(4,"div",4),s.TgZ(5,"div",5),s.TgZ(6,"div",6),s.TgZ(7,"div",7),s.TgZ(8,"div",8),s._UZ(9,"img",9),s.TgZ(10,"p",10),s._uU(11,"Please Update your Country and Contact Number to Growmaxx Academy Dashboard"),s.qZA(),s.qZA(),s.TgZ(12,"div",11),s.TgZ(13,"form",12),s.NdJ("ngSubmit",function(){return e.contactUpdateSubmit()}),s.TgZ(14,"div",13),s.TgZ(15,"select",14,15),s.TgZ(17,"option",16),s._uU(18,"Select Country"),s.qZA(),s.YNc(19,f,2,3,"option",17),s.qZA(),s.qZA(),s.YNc(20,b,3,1,"div",18),s.TgZ(21,"div",13),s._UZ(22,"input",19),s.qZA(),s.YNc(23,h,9,4,"div",18),s.TgZ(24,"div",6),s.TgZ(25,"div",20),s.TgZ(26,"button",21),s._uU(27," Submit "),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t){var n=s.MAs(16);s.xp6(1),s.Q6J("ngIf",e.isLoading),s.xp6(12),s.Q6J("formGroup",e.contactUpdateForm),s.xp6(2),s.Q6J("ngClass",s.VKq(8,y,""==n.value)),s.xp6(4),s.Q6J("ngForOf",e.countries),s.xp6(1),s.Q6J("ngIf",e.contactUpdateForm.controls.country.errors&&(e.contactUpdateForm.controls.country.dirty||e.contactUpdateForm.controls.country.touched)),s.xp6(3),s.Q6J("ngIf",e.contactUpdateForm.controls.phoneNumber.errors&&(e.contactUpdateForm.controls.phoneNumber.dirty||e.contactUpdateForm.controls.phoneNumber.touched)),s.xp6(3),s.Q6J("disabled",!e.contactUpdateForm.valid)("ngClass",s.WLB(10,U,!0===e.contactUpdateForm.valid,!1===e.contactUpdateForm.valid))}},directives:[a.O5,i._Y,i.JL,i.sg,i.EJ,i.JJ,i.u,a.mk,i.YN,i.Kr,a.sg,i.Fj],styles:[".custom-data[_ngcontent-%COMP%]{margin-left:0!important}.global-loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;left:0;right:0;text-align:center;top:37%;margin:0 auto}.disable-background[_ngcontent-%COMP%]{position:fixed!important;top:0;left:0;background:#2d2d2d;opacity:.9;z-index:998;height:100%;width:100%}"]}),v)}],q=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[c.Bz.forChild(x)],c.Bz]}),e}(),A=((Z=function e(){t(this,e)}).\u0275fac=function(t){return new(t||Z)},Z.\u0275mod=s.oAB({type:Z}),Z.\u0275inj=s.cJS({imports:[[a.ez,q,i.u5,i.UX,p.Rh.forRoot({timeOut:2500,preventDuplicates:!0})]]}),Z)}}])}();