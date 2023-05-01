!function(){function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}(self.webpackChunkglobal=self.webpackChunkglobal||[]).push([[989],{5989:function(r,n,o){"use strict";o.r(n),o.d(n,{RegisterModule:function(){return H}});var i=o(1116),a=o(1462),s=o(1522),c=o(6304),u=o(8619),l=o(2693),g=o(4500),d=function(){var r=function(){function r(t,n){e(this,r),this.http=t,this.apiCall=n}return t(r,[{key:"signup",value:function(e){var r=this;return new Promise(function(t,n){r.apiCall.postRequest(e,"user/signup").subscribe(function(e){t(e),console.log(">>>>>>>>>res",e)},function(e){n(e.error.message)})})}}]),r}();return r.\u0275fac=function(e){return new(e||r)(u.LFG(l.eN),u.LFG(g.u))},r.\u0275prov=u.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r}(),p=o(518);function m(e,r){1&e&&(u.TgZ(0,"div"),u._uU(1,"Please enter your First Name "),u.qZA())}function Z(e,r){1&e&&(u.TgZ(0,"div"),u._uU(1,"Invalid First Name"),u.qZA())}function f(e,r){if(1&e&&(u.TgZ(0,"div",51),u.YNc(1,m,2,0,"div",52),u.YNc(2,Z,2,0,"div",52),u.qZA()),2&e){var t=u.oxw();u.xp6(1),u.Q6J("ngIf",t.registerForm.controls.firstName.errors.required),u.xp6(1),u.Q6J("ngIf",t.registerForm.controls.firstName.errors.firstName)}}function v(e,r){1&e&&(u.TgZ(0,"div"),u._uU(1,"Please enter your Last Name"),u.qZA())}function h(e,r){1&e&&(u.TgZ(0,"div"),u._uU(1,"Invalid Last Name"),u.qZA())}function q(e,r){if(1&e&&(u.TgZ(0,"div",51),u.YNc(1,v,2,0,"div",52),u.YNc(2,h,2,0,"div",52),u.qZA()),2&e){var t=u.oxw();u.xp6(1),u.Q6J("ngIf",t.registerForm.controls.lastName.errors.required),u.xp6(1),u.Q6J("ngIf",t.registerForm.controls.lastName.errors.lastName)}}function A(e,r){1&e&&(u.TgZ(0,"div"),u._uU(1,"Please enter your email id"),u.qZA())}function T(e,r){1&e&&(u.TgZ(0,"div"),u._uU(1,"Invalid email id"),u.qZA())}function U(e,r){if(1&e&&(u.TgZ(0,"div",51),u.YNc(1,A,2,0,"div",52),u.YNc(2,T,2,0,"div",52),u.qZA()),2&e){var t=u.oxw();u.xp6(1),u.Q6J("ngIf",t.registerForm.controls.email.errors.required),u.xp6(1),u.Q6J("ngIf",t.registerForm.controls.email.errors.email)}}function b(e,r){1&e&&(u.TgZ(0,"div"),u._uU(1,"Please enter your username"),u.qZA())}function w(e,r){if(1&e&&(u.TgZ(0,"div",51),u.YNc(1,b,2,0,"div",52),u.qZA()),2&e){var t=u.oxw();u.xp6(1),u.Q6J("ngIf",t.registerForm.controls.username.errors.required)}}function x(e,r){1&e&&(u.TgZ(0,"div"),u._uU(1,"Please enter your password"),u.qZA())}function y(e,r){1&e&&(u.TgZ(0,"div"),u._uU(1," Password must contain at minimum of eight character, atleast one lowercase, one uppercase, one numeric & one special character. "),u.qZA())}function _(e,r){if(1&e&&(u.TgZ(0,"div",51),u.YNc(1,x,2,0,"div",52),u.YNc(2,y,2,0,"div",52),u.qZA()),2&e){var t=u.oxw();u.xp6(1),u.Q6J("ngIf",t.registerForm.controls.password.errors.required),u.xp6(1),u.Q6J("ngIf",t.registerForm.controls.password.errors.pattern)}}function k(e,r){1&e&&(u.TgZ(0,"div"),u._uU(1,"Please Confirm Password"),u.qZA())}function I(e,r){1&e&&(u.TgZ(0,"div"),u._uU(1,"Password did not match"),u.qZA())}function N(e,r){if(1&e&&(u.TgZ(0,"div",51),u.YNc(1,k,2,0,"div",52),u.YNc(2,I,2,0,"div",52),u.qZA()),2&e){var t,n=u.oxw();u.xp6(1),u.Q6J("ngIf",n.registerForm.controls.confirmPassword.errors.required),u.xp6(1),u.Q6J("ngIf",null==(t=n.registerForm.get("confirmPassword"))||null==t.errors?null:t.errors.notEquivalent)}}function z(e,r){1&e&&(u.TgZ(0,"div"),u._uU(1,"Please enter your Referral Code"),u.qZA())}function F(e,r){if(1&e&&(u.TgZ(0,"div",51),u.YNc(1,z,2,0,"div",52),u.qZA()),2&e){var t=u.oxw();u.xp6(1),u.Q6J("ngIf",t.registerForm.controls.referralCode.errors.required)}}function C(e,r){1&e&&(u.TgZ(0,"div"),u._uU(1,"Please accpet terms and policy"),u.qZA())}function Y(e,r){if(1&e&&(u.TgZ(0,"div",51),u.YNc(1,C,2,0,"div",52),u.qZA()),2&e){var t=u.oxw();u.xp6(1),u.Q6J("ngIf",t.registerForm.controls.tnc.errors.required)}}var J,P,Q=[{path:"",component:(J=function(){function r(t,n,o,i){e(this,r),this.router=t,this.formBuilder=n,this.service=o,this.toastr=i,this.submitted=!1,this.role=!0}return t(r,[{key:"ngOnInit",value:function(){window,this.registerForm=this.formBuilder.group({firstName:["",[a.kI.required,a.kI.pattern("^[A-Za-zs]{1,}[.]{0,1}[A-Za-zs]{0,}$"),a.kI.maxLength(12),a.kI.minLength(2)]],lastName:["",[a.kI.required,a.kI.pattern("^[A-Za-zs]{1,}[.]{0,1}[A-Za-zs]{0,}$"),a.kI.maxLength(12),a.kI.minLength(2)]],email:["",[a.kI.required,a.kI.email,a.kI.pattern("^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$")]],password:["",[a.kI.required,a.kI.pattern("(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$")]],confirmPassword:["",[a.kI.required,a.kI.minLength(6),a.kI.maxLength(16)]],username:["",[a.kI.required]],referralCode:["",[a.kI.required]],tnc:["",[a.kI.required]]},{validator:this.checkIfMatchingPasswords("password","confirmPassword")})}},{key:"checkIfMatchingPasswords",value:function(e,r){return function(t){var n=t.controls[e],o=t.controls[r];return null==o.value?o.setErrors({required:!0}):n.value!==o.value?o.setErrors({notEquivalent:!0}):void 0}}},{key:"registerSubmit",value:function(){var e=this;return(0,c.Z)(regeneratorRuntime.mark(function r(){var t;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,e.submitted=!0,!e.registerForm.invalid){r.next=3;break}return r.abrupt("return");case 3:if("@gmail.com"==e.registerForm.value.email.slice(-10)){r.next=5;break}return r.abrupt("return",void e.toastr.error("Please enter Gmail ID only"));case 5:return r.next=7,e.service.signup(e.registerForm.value);case 7:(t=r.sent)&&(e.toastr.success("User resgistered successfully !!"),console.log(t,t),localStorage.setItem("token",t.data)),e.router.navigate(["/verify-email/",t.data]),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),e.toastr.error(r.t0),e.ngOnInit();case 14:case"end":return r.stop()}},r,null,[[0,11]])}))()}}]),r}(),J.\u0275fac=function(e){return new(e||J)(u.Y36(s.F0),u.Y36(a.qu),u.Y36(d),u.Y36(p._W))},J.\u0275cmp=u.Xpm({type:J,selectors:[["app-register"]],decls:104,vars:9,consts:[[1,"page"],[1,"d-md-flex"],[1,"w-40","bg-style","h-100vh","page-style"],[1,"page-content"],[1,"page-single-content"],["src","assets/images/logo.svg","alt","img",1,"header-brand-img","mb-5"],[1,"card-body","text-white","py-5","px-8","text-center"],["src","assets/images/2.png","alt","img",1,"w-100","mx-auto","text-center"],[1,"w-80","page-content"],[1,"card-body","p-6"],[1,"row"],[1,"col-md-8","mx-auto","d-block"],[1,"mb-2"],[1,"text-muted"],["role","alert",1,"bg-danger-transparent-2","text-danger","px-4","py-2","br-3","mb-4"],[3,"formGroup","ngSubmit"],[1,"input-group","mb-3"],[1,"input-group-addon"],["xmlns","http://www.w3.org/2000/svg","height","24","viewBox","0 0 24 24","width","24",1,"svg-icon"],["d","M0 0h24v24H0V0z","fill","none"],["d","M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z","opacity",".3"],["cx","12","cy","8","opacity",".3","r","2"],["d","M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"],["type","text","formControlName","firstName","placeholder","Firstname",1,"form-control"],["class","error m-error",4,"ngIf"],["type","text","formControlName","lastName","placeholder","Lastname",1,"form-control"],[1,"input-group","mb-4"],["d","M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z","opacity",".3"],["d","M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"],["type","text","formControlName","email","placeholder","Enter Email",1,"form-control"],["type","text","formControlName","username","placeholder","Username",1,"form-control"],["fill","none"],["d","M0 0h24v24H0V0z"],["d","M0 0h24v24H0V0z","opacity",".87"],["d","M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z","opacity",".3"],["d","M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"],["type","password","formControlName","password","placeholder","Password",1,"form-control"],["x",""],["type","password","formControlName","confirmPassword","placeholder","Confirm Password",1,"form-control"],["y",""],["type","text","formControlName","referralCode","placeholder","Referral ID",1,"form-control"],[1,"mb-3"],[1,"custom-control","custom-checkbox"],["type","checkbox","formControlName","tnc",1,"custom-control-input"],[1,"custom-control-label"],["href","#",1,"btn-link"],[1,"col-12"],["type","submit","role","button","href","",1,"btn","btn-lg","btn-primary","btn-block","px-4"],[1,"pt-4"],[1,"font-weight-normal","fs-16"],["routerLink","/login","href","",1,"btn-link","font-weight-normal"],[1,"error","m-error"],[4,"ngIf"]],template:function(e,r){1&e&&(u.TgZ(0,"div",0),u.TgZ(1,"div",1),u.TgZ(2,"div",2),u.TgZ(3,"div",3),u.TgZ(4,"div",4),u._UZ(5,"img",5),u.TgZ(6,"div",6),u._UZ(7,"img",7),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(8,"div",8),u.TgZ(9,"div",4),u.TgZ(10,"div",9),u.TgZ(11,"div",10),u.TgZ(12,"div",11),u.TgZ(13,"h1",12),u._uU(14,"Register"),u.qZA(),u.TgZ(15,"p",13),u._uU(16,"Create New Account"),u.qZA(),u.TgZ(17,"div",14),u._uU(18,"Please Enter Gmail ID only"),u.qZA(),u.TgZ(19,"form",15),u.NdJ("ngSubmit",function(){return r.registerSubmit()}),u.TgZ(20,"div",16),u.TgZ(21,"span",17),u.O4$(),u.TgZ(22,"svg",18),u._UZ(23,"path",19),u._UZ(24,"path",20),u._UZ(25,"circle",21),u._UZ(26,"path",22),u.qZA(),u.qZA(),u.kcU(),u._UZ(27,"input",23),u.qZA(),u.YNc(28,f,3,2,"div",24),u.TgZ(29,"div",16),u.TgZ(30,"span",17),u.O4$(),u.TgZ(31,"svg",18),u._UZ(32,"path",19),u._UZ(33,"path",20),u._UZ(34,"circle",21),u._UZ(35,"path",22),u.qZA(),u.qZA(),u.kcU(),u._UZ(36,"input",25),u.qZA(),u.YNc(37,q,3,2,"div",24),u.TgZ(38,"div",26),u.TgZ(39,"span",17),u.O4$(),u.TgZ(40,"svg",18),u._UZ(41,"path",19),u._UZ(42,"path",27),u._UZ(43,"path",28),u.qZA(),u.qZA(),u.kcU(),u._UZ(44,"input",29),u.qZA(),u.YNc(45,U,3,2,"div",24),u.TgZ(46,"div",16),u.TgZ(47,"span",17),u.O4$(),u.TgZ(48,"svg",18),u._UZ(49,"path",19),u._UZ(50,"path",20),u._UZ(51,"circle",21),u._UZ(52,"path",22),u.qZA(),u.qZA(),u.kcU(),u._UZ(53,"input",30),u.qZA(),u.YNc(54,w,2,1,"div",24),u.TgZ(55,"div",26),u.TgZ(56,"span",17),u.O4$(),u.TgZ(57,"svg",18),u.TgZ(58,"g",31),u._UZ(59,"path",32),u._UZ(60,"path",33),u.qZA(),u._UZ(61,"path",34),u._UZ(62,"path",35),u.qZA(),u.qZA(),u.kcU(),u._UZ(63,"input",36,37),u.qZA(),u.YNc(65,_,3,2,"div",24),u.TgZ(66,"div",26),u.TgZ(67,"span",17),u.O4$(),u.TgZ(68,"svg",18),u.TgZ(69,"g",31),u._UZ(70,"path",32),u._UZ(71,"path",33),u.qZA(),u._UZ(72,"path",34),u._UZ(73,"path",35),u.qZA(),u.qZA(),u.kcU(),u._UZ(74,"input",38,39),u.qZA(),u.YNc(76,N,3,2,"div",24),u.TgZ(77,"div",26),u.TgZ(78,"span",17),u.O4$(),u.TgZ(79,"svg",18),u.TgZ(80,"g",31),u._UZ(81,"path",32),u._UZ(82,"path",33),u.qZA(),u._UZ(83,"path",34),u._UZ(84,"path",35),u.qZA(),u.qZA(),u.kcU(),u._UZ(85,"input",40),u.qZA(),u.YNc(86,F,2,1,"div",24),u.TgZ(87,"div",41),u.TgZ(88,"label",42),u._UZ(89,"input",43),u.TgZ(90,"span",44),u._uU(91,"Agree the "),u.TgZ(92,"a",45),u._uU(93,"terms and policy"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.YNc(94,Y,2,1,"div",24),u.TgZ(95,"div",10),u.TgZ(96,"div",46),u.TgZ(97,"button",47),u._uU(98," Create a new account"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(99,"div",48),u.TgZ(100,"div",49),u._uU(101,"You Already have an account "),u.TgZ(102,"a",50),u._uU(103,"Login Here"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&e&&(u.xp6(19),u.Q6J("formGroup",r.registerForm),u.xp6(9),u.Q6J("ngIf",r.submitted&&r.registerForm.controls.firstName.errors),u.xp6(9),u.Q6J("ngIf",r.submitted&&r.registerForm.controls.lastName.errors),u.xp6(8),u.Q6J("ngIf",r.submitted&&r.registerForm.controls.email.errors),u.xp6(9),u.Q6J("ngIf",r.submitted&&r.registerForm.controls.username.errors),u.xp6(11),u.Q6J("ngIf",r.submitted&&r.registerForm.controls.password.errors),u.xp6(11),u.Q6J("ngIf",r.submitted&&r.registerForm.controls.confirmPassword.errors),u.xp6(10),u.Q6J("ngIf",r.submitted&&r.registerForm.controls.referralCode.errors),u.xp6(8),u.Q6J("ngIf",r.submitted&&r.registerForm.controls.tnc.errors))},directives:[a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,i.O5,a.Wl,s.yS],styles:[".custom-data[_ngcontent-%COMP%]{background:#fff;padding:20px;margin-top:10px}"]}),J)}],M=function(){var r=function r(){e(this,r)};return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=u.oAB({type:r}),r.\u0275inj=u.cJS({imports:[[s.Bz.forChild(Q)],s.Bz]}),r}(),H=((P=function r(){e(this,r)}).\u0275fac=function(e){return new(e||P)},P.\u0275mod=u.oAB({type:P}),P.\u0275inj=u.cJS({imports:[[i.ez,M,a.u5,a.UX,p.Rh.forRoot({timeOut:2500,preventDuplicates:!0})]]}),P)},4500:function(r,n,o){"use strict";o.d(n,{u:function(){return s}});var i=o(2693),a=o(8619),s=function(){var r=function(){function r(t){e(this,r),this.http=t,this.baseUrl="https://growmaxxdashboard.com/api/v1/"}return t(r,[{key:"postRequest",value:function(e,r){return this.http.post(this.baseUrl+r,e)}},{key:"postRequestHeader",value:function(e,r,t){var n=new i.WM;return n=n.set("Content-Type","multipart/form-data; charset=utf-8"),this.http.post(this.baseUrl+r,e,{headers:{Authorization:t}})}},{key:"putRequestHeader",value:function(e,r,t){var n=new i.WM;return n=n.set("Content-Type","application/json; charset=utf-8"),this.http.put(this.baseUrl+r,e,{headers:{authorization:t}})}},{key:"getRequest",value:function(e){return this.http.get(this.baseUrl+e)}},{key:"getRequestWithoutData",value:function(e){var r=new i.WM;return r=r.set("Content-Type","application/json; charset=utf-8"),this.http.get(this.baseUrl,{headers:{authorization:e}})}},{key:"getRequestHeader",value:function(e,r){var t=new i.WM;return t=t.set("Content-Type","application/json; charset=utf-8"),this.http.get(this.baseUrl+e,{headers:{authorization:r}})}},{key:"DeleteRequestHeader",value:function(e,r){var t=new i.WM;return t=t.set("Content-Type","application/json; charset=utf-8"),this.http.delete(this.baseUrl+e,{headers:{authorization:r}})}}]),r}();return r.\u0275fac=function(e){return new(e||r)(a.LFG(i.eN))},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r}()}}])}();