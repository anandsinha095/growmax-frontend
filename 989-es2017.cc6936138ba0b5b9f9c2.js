(self.webpackChunkglobal=self.webpackChunkglobal||[]).push([[989],{5989:function(e,t,r){"use strict";r.r(t),r.d(t,{RegisterModule:function(){return F}});var o=r(1116),n=r(1462),s=r(1522),i=r(6304),a=r(8619),c=r(2693),u=r(4500);let g=(()=>{class e{constructor(e,t){this.http=e,this.apiCall=t}signup(e){return new Promise((t,r)=>{this.apiCall.postRequest(e,"user/signup").subscribe(e=>{t(e),console.log(">>>>>>>>>res",e)},e=>{r(e.error.message)})})}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(c.eN),a.LFG(u.u))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=r(518);function d(e,t){1&e&&(a.TgZ(0,"div"),a._uU(1,"Please enter your First Name "),a.qZA())}function p(e,t){1&e&&(a.TgZ(0,"div"),a._uU(1,"Invalid First Name"),a.qZA())}function Z(e,t){if(1&e&&(a.TgZ(0,"div",48),a.YNc(1,d,2,0,"div",49),a.YNc(2,p,2,0,"div",49),a.qZA()),2&e){const e=a.oxw();a.xp6(1),a.Q6J("ngIf",e.registerForm.controls.firstName.errors.required),a.xp6(1),a.Q6J("ngIf",e.registerForm.controls.firstName.errors.firstName)}}function m(e,t){1&e&&(a.TgZ(0,"div"),a._uU(1,"Please enter your Last Name"),a.qZA())}function h(e,t){1&e&&(a.TgZ(0,"div"),a._uU(1,"Invalid Last Name"),a.qZA())}function f(e,t){if(1&e&&(a.TgZ(0,"div",48),a.YNc(1,m,2,0,"div",49),a.YNc(2,h,2,0,"div",49),a.qZA()),2&e){const e=a.oxw();a.xp6(1),a.Q6J("ngIf",e.registerForm.controls.lastName.errors.required),a.xp6(1),a.Q6J("ngIf",e.registerForm.controls.lastName.errors.lastName)}}function v(e,t){1&e&&(a.TgZ(0,"div"),a._uU(1,"Please enter your email id"),a.qZA())}function q(e,t){1&e&&(a.TgZ(0,"div"),a._uU(1,"Invalid email id"),a.qZA())}function A(e,t){if(1&e&&(a.TgZ(0,"div",48),a.YNc(1,v,2,0,"div",49),a.YNc(2,q,2,0,"div",49),a.qZA()),2&e){const e=a.oxw();a.xp6(1),a.Q6J("ngIf",e.registerForm.controls.email.errors.required),a.xp6(1),a.Q6J("ngIf",e.registerForm.controls.email.errors.email)}}function T(e,t){1&e&&(a.TgZ(0,"div"),a._uU(1,"Please enter your username"),a.qZA())}function U(e,t){if(1&e&&(a.TgZ(0,"div",48),a.YNc(1,T,2,0,"div",49),a.qZA()),2&e){const e=a.oxw();a.xp6(1),a.Q6J("ngIf",e.registerForm.controls.username.errors.required)}}function b(e,t){1&e&&(a.TgZ(0,"div"),a._uU(1,"Please enter your password"),a.qZA())}function x(e,t){1&e&&(a.TgZ(0,"div"),a._uU(1,"Invalid Password"),a.qZA())}function _(e,t){if(1&e&&(a.TgZ(0,"div",48),a.YNc(1,b,2,0,"div",49),a.YNc(2,x,2,0,"div",49),a.qZA()),2&e){const e=a.oxw();a.xp6(1),a.Q6J("ngIf",e.registerForm.controls.password.errors.required),a.xp6(1),a.Q6J("ngIf",e.registerForm.controls.password.errors.minlength)}}function I(e,t){1&e&&(a.TgZ(0,"div"),a._uU(1,"Please enter your Referral Code"),a.qZA())}function w(e,t){if(1&e&&(a.TgZ(0,"div",48),a.YNc(1,I,2,0,"div",49),a.qZA()),2&e){const e=a.oxw();a.xp6(1),a.Q6J("ngIf",e.registerForm.controls.referralCode.errors.required)}}function y(e,t){1&e&&(a.TgZ(0,"div"),a._uU(1,"Please accpet terms and policy"),a.qZA())}function N(e,t){if(1&e&&(a.TgZ(0,"div",48),a.YNc(1,y,2,0,"div",49),a.qZA()),2&e){const e=a.oxw();a.xp6(1),a.Q6J("ngIf",e.registerForm.controls.tnc.errors.required)}}const k=[{path:"",component:(()=>{class e{constructor(e,t,r,o){this.router=e,this.formBuilder=t,this.service=r,this.toastr=o,this.submitted=!1,this.role=!0}ngOnInit(){window,this.registerForm=this.formBuilder.group({firstName:["",[n.kI.required,n.kI.pattern("^[A-Za-zs]{1,}[.]{0,1}[A-Za-zs]{0,}$"),n.kI.maxLength(12),n.kI.minLength(2)]],lastName:["",[n.kI.required,n.kI.pattern("^[A-Za-zs]{1,}[.]{0,1}[A-Za-zs]{0,}$"),n.kI.maxLength(12),n.kI.minLength(2)]],email:["",[n.kI.required,n.kI.email,n.kI.pattern("^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$")]],password:["",[n.kI.required,n.kI.minLength(6),n.kI.maxLength(16)]],username:["",[n.kI.required]],referralCode:["",[n.kI.required]],tnc:["",[n.kI.required]]})}registerSubmit(){var e=this;return(0,i.Z)(function*(){try{if(e.submitted=!0,e.registerForm.invalid)return;const t=yield e.service.signup(e.registerForm.value);t&&(e.toastr.success("User resgistered successfully !!"),console.log(t,t),localStorage.setItem("token",t.data)),e.router.navigate(["/verify-email/",t.data])}catch(t){e.toastr.error(t),e.ngOnInit()}})()}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(s.F0),a.Y36(n.qu),a.Y36(g),a.Y36(l._W))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-register"]],decls:92,vars:8,consts:[[1,"page"],[1,"d-md-flex"],[1,"w-40","bg-style","h-100vh","page-style"],[1,"page-content"],[1,"page-single-content"],["src","assets/images/logo.svg","alt","img",1,"header-brand-img","mb-5"],[1,"card-body","text-white","py-5","px-8","text-center"],["src","assets/images/2.png","alt","img",1,"w-100","mx-auto","text-center"],[1,"w-80","page-content"],[1,"card-body","p-6"],[1,"row"],[1,"col-md-8","mx-auto","d-block"],[1,"mb-2"],[1,"text-muted"],["role","alert",1,"bg-danger-transparent-2","text-danger","px-4","py-2","br-3","mb-4"],[3,"formGroup","ngSubmit"],[1,"input-group","mb-3"],[1,"input-group-addon"],["xmlns","http://www.w3.org/2000/svg","height","24","viewBox","0 0 24 24","width","24",1,"svg-icon"],["d","M0 0h24v24H0V0z","fill","none"],["d","M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z","opacity",".3"],["cx","12","cy","8","opacity",".3","r","2"],["d","M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"],["type","text","formControlName","firstName","placeholder","Firstname",1,"form-control"],["class","error m-error",4,"ngIf"],["type","text","formControlName","lastName","placeholder","Lastname",1,"form-control"],[1,"input-group","mb-4"],["d","M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z","opacity",".3"],["d","M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"],["type","text","formControlName","email","placeholder","Enter Email",1,"form-control"],["type","text","formControlName","username","placeholder","Username",1,"form-control"],["fill","none"],["d","M0 0h24v24H0V0z"],["d","M0 0h24v24H0V0z","opacity",".87"],["d","M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z","opacity",".3"],["d","M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"],["type","password","formControlName","password","placeholder","Password",1,"form-control"],["type","text","formControlName","referralCode","placeholder","Referral ID",1,"form-control"],[1,"mb-3"],[1,"custom-control","custom-checkbox"],["type","checkbox","formControlName","tnc",1,"custom-control-input"],[1,"custom-control-label"],["href","#",1,"btn-link"],[1,"col-12"],["type","submit","role","button","href","",1,"btn","btn-lg","btn-primary","btn-block","px-4"],[1,"pt-4"],[1,"font-weight-normal","fs-16"],["routerLink","/login","href","",1,"btn-link","font-weight-normal"],[1,"error","m-error"],[4,"ngIf"]],template:function(e,t){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"div",3),a.TgZ(4,"div",4),a._UZ(5,"img",5),a.TgZ(6,"div",6),a._UZ(7,"img",7),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(8,"div",8),a.TgZ(9,"div",4),a.TgZ(10,"div",9),a.TgZ(11,"div",10),a.TgZ(12,"div",11),a.TgZ(13,"h1",12),a._uU(14,"Register"),a.qZA(),a.TgZ(15,"p",13),a._uU(16,"Create New Account"),a.qZA(),a.TgZ(17,"div",14),a._uU(18,"Please Enter Gmail ID only"),a.qZA(),a.TgZ(19,"form",15),a.NdJ("ngSubmit",function(){return t.registerSubmit()}),a.TgZ(20,"div",16),a.TgZ(21,"span",17),a.O4$(),a.TgZ(22,"svg",18),a._UZ(23,"path",19),a._UZ(24,"path",20),a._UZ(25,"circle",21),a._UZ(26,"path",22),a.qZA(),a.qZA(),a.kcU(),a._UZ(27,"input",23),a.qZA(),a.YNc(28,Z,3,2,"div",24),a.TgZ(29,"div",16),a.TgZ(30,"span",17),a.O4$(),a.TgZ(31,"svg",18),a._UZ(32,"path",19),a._UZ(33,"path",20),a._UZ(34,"circle",21),a._UZ(35,"path",22),a.qZA(),a.qZA(),a.kcU(),a._UZ(36,"input",25),a.qZA(),a.YNc(37,f,3,2,"div",24),a.TgZ(38,"div",26),a.TgZ(39,"span",17),a.O4$(),a.TgZ(40,"svg",18),a._UZ(41,"path",19),a._UZ(42,"path",27),a._UZ(43,"path",28),a.qZA(),a.qZA(),a.kcU(),a._UZ(44,"input",29),a.qZA(),a.YNc(45,A,3,2,"div",24),a.TgZ(46,"div",16),a.TgZ(47,"span",17),a.O4$(),a.TgZ(48,"svg",18),a._UZ(49,"path",19),a._UZ(50,"path",20),a._UZ(51,"circle",21),a._UZ(52,"path",22),a.qZA(),a.qZA(),a.kcU(),a._UZ(53,"input",30),a.qZA(),a.YNc(54,U,2,1,"div",24),a.TgZ(55,"div",26),a.TgZ(56,"span",17),a.O4$(),a.TgZ(57,"svg",18),a.TgZ(58,"g",31),a._UZ(59,"path",32),a._UZ(60,"path",33),a.qZA(),a._UZ(61,"path",34),a._UZ(62,"path",35),a.qZA(),a.qZA(),a.kcU(),a._UZ(63,"input",36),a.qZA(),a.YNc(64,_,3,2,"div",24),a.TgZ(65,"div",26),a.TgZ(66,"span",17),a.O4$(),a.TgZ(67,"svg",18),a.TgZ(68,"g",31),a._UZ(69,"path",32),a._UZ(70,"path",33),a.qZA(),a._UZ(71,"path",34),a._UZ(72,"path",35),a.qZA(),a.qZA(),a.kcU(),a._UZ(73,"input",37),a.qZA(),a.YNc(74,w,2,1,"div",24),a.TgZ(75,"div",38),a.TgZ(76,"label",39),a._UZ(77,"input",40),a.TgZ(78,"span",41),a._uU(79,"Agree the "),a.TgZ(80,"a",42),a._uU(81,"terms and policy"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.YNc(82,N,2,1,"div",24),a.TgZ(83,"div",10),a.TgZ(84,"div",43),a.TgZ(85,"button",44),a._uU(86," Create a new account"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(87,"div",45),a.TgZ(88,"div",46),a._uU(89,"You Already have an account "),a.TgZ(90,"a",47),a._uU(91,"Login Here"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(19),a.Q6J("formGroup",t.registerForm),a.xp6(9),a.Q6J("ngIf",t.submitted&&t.registerForm.controls.firstName.errors),a.xp6(9),a.Q6J("ngIf",t.submitted&&t.registerForm.controls.lastName.errors),a.xp6(8),a.Q6J("ngIf",t.submitted&&t.registerForm.controls.email.errors),a.xp6(9),a.Q6J("ngIf",t.submitted&&t.registerForm.controls.username.errors),a.xp6(10),a.Q6J("ngIf",t.submitted&&t.registerForm.controls.password.errors),a.xp6(10),a.Q6J("ngIf",t.submitted&&t.registerForm.controls.referralCode.errors),a.xp6(8),a.Q6J("ngIf",t.submitted&&t.registerForm.controls.tnc.errors))},directives:[n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,o.O5,n.Wl,s.yS],styles:[".custom-data[_ngcontent-%COMP%]{background:#fff;padding:20px;margin-top:10px}"]}),e})()}];let z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[s.Bz.forChild(k)],s.Bz]}),e})(),F=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[o.ez,z,n.u5,n.UX,l.Rh.forRoot({timeOut:2500,preventDuplicates:!0})]]}),e})()},4500:function(e,t,r){"use strict";r.d(t,{u:function(){return s}});var o=r(2693),n=r(8619);let s=(()=>{class e{constructor(e){this.http=e,this.baseUrl="https://growmaxxdashboard.com/api/v1/"}postRequest(e,t){return this.http.post(this.baseUrl+t,e)}postRequestHeader(e,t,r){let n=new o.WM;return n=n.set("Content-Type","multipart/form-data; charset=utf-8"),this.http.post(this.baseUrl+t,e,{headers:{Authorization:r}})}putRequestHeader(e,t,r){let n=new o.WM;return n=n.set("Content-Type","application/json; charset=utf-8"),this.http.put(this.baseUrl+t,e,{headers:{authorization:r}})}getRequest(e){return this.http.get(this.baseUrl+e)}getRequestWithoutData(e){let t=new o.WM;return t=t.set("Content-Type","application/json; charset=utf-8"),this.http.get(this.baseUrl,{headers:{authorization:e}})}getRequestHeader(e,t){let r=new o.WM;return r=r.set("Content-Type","application/json; charset=utf-8"),this.http.get(this.baseUrl+e,{headers:{authorization:t}})}DeleteRequestHeader(e,t){let r=new o.WM;return r=r.set("Content-Type","application/json; charset=utf-8"),this.http.delete(this.baseUrl+e,{headers:{authorization:t}})}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(o.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);