(self.webpackChunkglobal=self.webpackChunkglobal||[]).push([[877],{2877:function(r,s,e){"use strict";e.r(s),e.d(s,{ResetPasswordModule:function(){return f}});var t=e(1116),o=e(1462),n=e(1522),a=e(6304),d=e(8619),i=e(7439),c=e(518);function l(r,s){if(1&r&&(d.TgZ(0,"div",24),d.TgZ(1,"div",25),d._uU(2," password is required! "),d.qZA(),d.TgZ(3,"div",25),d._uU(4," Password must be at least 8 characters long. "),d.qZA(),d.TgZ(5,"div",25),d._uU(6," Password cannot be more than 20 characters long. "),d.qZA(),d.TgZ(7,"div",25),d._uU(8," Password must contain at least 1 lowercase, 1 uppercase, 1 numeric & one special character. "),d.qZA(),d.qZA()),2&r){const r=d.oxw();d.xp6(1),d.Q6J("hidden",!r.resetPasswordForm.controls.newPassword.errors.required),d.xp6(2),d.Q6J("hidden",!r.resetPasswordForm.controls.newPassword.errors.minlength),d.xp6(2),d.Q6J("hidden",!r.resetPasswordForm.controls.newPassword.errors.maxlength),d.xp6(2),d.Q6J("hidden",!r.resetPasswordForm.controls.newPassword.errors.pattern)}}function u(r,s){1&r&&(d.TgZ(0,"div",28),d._uU(1,"Passwords did not match"),d.qZA())}function p(r,s){if(1&r&&(d.TgZ(0,"div",24),d.TgZ(1,"div",26),d._uU(2," Confirm password is required! "),d.qZA(),d.YNc(3,u,2,0,"div",27),d.qZA()),2&r){const r=d.oxw();let s;d.xp6(1),d.Q6J("hidden",!r.resetPasswordForm.controls.confirmPassword.errors.required),d.xp6(2),d.Q6J("ngIf",null==(s=r.resetPasswordForm.get("confirmPassword"))||null==s.errors?null:s.errors.notEquivalent)}}const g=function(r,s){return{"fa-eye-slash":r,"fa-eye":s}},m=function(r,s){return{"btn-info":r,"btn-light":s}},w=[{path:"",component:(()=>{class r{constructor(r,s,e,t,o){this.router=r,this.formBuilder=s,this.service=e,this.route=t,this.toastr=o,this.submitted=!1,this.role=!0}ngOnInit(){window,this.resetPasswordForm=this.formBuilder.group({newPassword:["",[o.kI.required,o.kI.pattern("(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$"),o.kI.minLength(8),o.kI.maxLength(20)]],confirmPassword:["",[o.kI.required,o.kI.minLength(8),o.kI.maxLength(20)]]},{validator:this.checkIfMatchingPasswords("newPassword","confirmPassword")})}checkIfMatchingPasswords(r,s){return e=>{const t=e.controls[r],o=e.controls[s];return null==o.value?o.setErrors({required:!0}):t.value!==o.value?o.setErrors({notEquivalent:!0}):void 0}}resetPasswordSubmit(){var r=this;return(0,a.Z)(function*(){try{const s=r.route.snapshot.paramMap.get("token");(yield r.service.resetPassword(r.resetPasswordForm.value,s))&&(r.toastr.success("Password restored successfully !!"),r.router.navigate(["/login/"]))}catch(s){r.toastr.error(s.message)}})()}}return r.\u0275fac=function(s){return new(s||r)(d.Y36(n.F0),d.Y36(o.qu),d.Y36(i.w),d.Y36(n.gz),d.Y36(c._W))},r.\u0275cmp=d.Xpm({type:r,selectors:[["app-resetPassword"]],decls:38,vars:16,consts:[[1,"page"],[1,"d-md-flex"],[1,"w-100","page-content"],[1,"page-single-content"],[1,"card-body","p-6"],[1,"row"],[1,"col-md-4","mx-auto","d-block"],[1,"mini-logo","text-center","my-4"],["src","https://growmaxxacademy.com/wp-content/uploads/2023/01/full_trimmed_transparent_customcolor-1.png","alt","img",1,"header-brand-img","mb-2"],[1,"sign_in_style"],[1,"auth-form","card"],[3,"formGroup","ngSubmit"],[1,"input-group","pwd_grp","mb-4"],["type","password","formControlName","newPassword","placeholder","Password",1,"form-control","pwd_input"],["x",""],[1,"fa","field-icon","pwd_eye",3,"ngClass","click"],[1,"info-password","m-error"],[1,"password_list"],[1,"fa","fa-check-circle"],["class","error matMargin",4,"ngIf"],["type","password","formControlName","confirmPassword","placeholder","Confirm Password",1,"form-control","pwd_input"],["y",""],[1,"col-12"],["type","submit","role","button",1,"btn","btn-lg","bg_gradient","btn-block","px-4",3,"disabled","ngClass"],[1,"error","matMargin"],["role","alert",1,"bg-danger-transparent-2","text-danger","px-4","py-2","br-3","mb-4",3,"hidden"],[3,"hidden"],["class","bg-danger-transparent-2 text-danger px-4 py-2 br-3 mb-4","role","alert",4,"ngIf"],["role","alert",1,"bg-danger-transparent-2","text-danger","px-4","py-2","br-3","mb-4"]],template:function(r,s){if(1&r){const r=d.EpF();d.TgZ(0,"div",0),d.TgZ(1,"div",1),d.TgZ(2,"div",2),d.TgZ(3,"div",3),d.TgZ(4,"div",4),d.TgZ(5,"div",5),d.TgZ(6,"div",6),d.TgZ(7,"div",7),d._UZ(8,"img",8),d.TgZ(9,"p",9),d._uU(10,"Forgot Password to Growmaxx Academy"),d.qZA(),d.qZA(),d.TgZ(11,"div",10),d.TgZ(12,"form",11),d.NdJ("ngSubmit",function(){return s.resetPasswordSubmit()}),d.TgZ(13,"div",12),d._UZ(14,"input",13,14),d.TgZ(16,"span",15),d.NdJ("click",function(){d.CHM(r);const s=d.MAs(15);return s.type="password"==s.type?"text":"password"}),d.qZA(),d.qZA(),d.TgZ(17,"div",16),d.TgZ(18,"ul",17),d.TgZ(19,"li"),d._UZ(20,"i",18),d._uU(21," 8-20 characters\u2014the more characters, the better "),d.qZA(),d.TgZ(22,"li"),d._UZ(23,"i",18),d._uU(24," Upper & lowercase letters "),d.qZA(),d.TgZ(25,"li"),d._UZ(26,"i",18),d._uU(27," At least 1 number "),d.qZA(),d.qZA(),d.qZA(),d.YNc(28,l,9,4,"div",19),d.TgZ(29,"div",12),d._UZ(30,"input",20,21),d.TgZ(32,"span",15),d.NdJ("click",function(){d.CHM(r);const s=d.MAs(31);return s.type="password"==s.type?"text":"password"}),d.qZA(),d.qZA(),d.YNc(33,p,4,2,"div",19),d.TgZ(34,"div",5),d.TgZ(35,"div",22),d.TgZ(36,"button",23),d._uU(37,"Reset password "),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()}if(2&r){const r=d.MAs(15),e=d.MAs(31);d.xp6(12),d.Q6J("formGroup",s.resetPasswordForm),d.xp6(4),d.Q6J("ngClass",d.WLB(7,g,"password"===r.type,"text"===r.type)),d.xp6(12),d.Q6J("ngIf",s.resetPasswordForm.controls.newPassword.errors&&(s.resetPasswordForm.controls.newPassword.dirty||s.resetPasswordForm.controls.newPassword.touched)),d.xp6(4),d.Q6J("ngClass",d.WLB(10,g,"password"===e.type,"text"===e.type)),d.xp6(1),d.Q6J("ngIf",s.resetPasswordForm.controls.confirmPassword.errors&&(s.resetPasswordForm.controls.confirmPassword.dirty||s.resetPasswordForm.controls.confirmPassword.touched)),d.xp6(3),d.Q6J("disabled",!s.resetPasswordForm.valid)("ngClass",d.WLB(13,m,!0===s.resetPasswordForm.valid,!1===s.resetPasswordForm.valid))}},directives:[o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,t.mk,t.O5],styles:[".custom-data[_ngcontent-%COMP%]{background:#fff;padding:20px;margin-top:10px}"]}),r})()}];let Z=(()=>{class r{}return r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=d.oAB({type:r}),r.\u0275inj=d.cJS({imports:[[n.Bz.forChild(w)],n.Bz]}),r})(),f=(()=>{class r{}return r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=d.oAB({type:r}),r.\u0275inj=d.cJS({imports:[[t.ez,Z,o.u5,o.UX,c.Rh.forRoot({timeOut:2500,preventDuplicates:!0})]]}),r})()}}]);