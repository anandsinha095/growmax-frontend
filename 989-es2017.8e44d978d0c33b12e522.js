(self.webpackChunkglobal=self.webpackChunkglobal||[]).push([[989],{5989:function(t,e,r){"use strict";r.r(e),r.d(e,{RegisterModule:function(){return h}});var o=r(1116),s=r(1462),n=r(3319),a=r(6304),i=r(8619),c=r(2693),p=r(4500);let u=(()=>{class t{constructor(t,e){this.http=t,this.apiCall=e}signup(t){return new Promise((e,r)=>{this.apiCall.postRequest(t,"user/signup").subscribe(t=>{e(t),console.log(">>>>>>>>>res",t)},t=>{console.log(">>>>>>>>>error",t),403==t.status?r("Email id Exist"):400==t.status?r("Bad request"):500==t.status&&r("Something went wrong")})})}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(c.eN),i.LFG(p.u))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=r(518);const g=[{path:"",component:(()=>{class t{constructor(t,e,r,o){this.router=t,this.formBuilder=e,this.service=r,this.toastr=o,this.submitted=!1,this.role=!0}ngOnInit(){window,this.registerForm=this.formBuilder.group({firstName:["",[s.kI.required]],lastName:["",[s.kI.required]],email:["",[s.kI.required]],password:["",[s.kI.required]],username:["",[s.kI.required]],referralCode:["",[s.kI.required]]})}registerSubmit(){var t=this;return(0,a.Z)(function*(){try{const e=yield t.service.signup(t.registerForm.value);e&&(t.toastr.success("User resgistered successfully !!"),console.log(e,e),localStorage.setItem("token",e.data)),t.router.navigate(["/verify-email/",e.data])}catch(e){t.toastr.error("Opps! Something went wrong!!!"),t.ngOnInit()}})()}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(n.F0),i.Y36(s.qu),i.Y36(u),i.Y36(l._W))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-register"]],decls:83,vars:1,consts:[[1,"page"],[1,"d-md-flex"],[1,"w-40","bg-style","h-100vh","page-style"],[1,"page-content"],[1,"page-single-content"],["src","assets/images/logo.svg","alt","img",1,"header-brand-img","mb-5"],[1,"card-body","text-white","py-5","px-8","text-center"],["src","assets/images/2.png","alt","img",1,"w-100","mx-auto","text-center"],[1,"w-80","page-content"],[1,"card-body","p-6"],[1,"row"],[1,"col-md-8","mx-auto","d-block"],[1,"mb-2"],[1,"text-muted"],[3,"formGroup","ngSubmit"],[1,"input-group","mb-3"],[1,"input-group-addon"],["xmlns","http://www.w3.org/2000/svg","height","24","viewBox","0 0 24 24","width","24",1,"svg-icon"],["d","M0 0h24v24H0V0z","fill","none"],["d","M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z","opacity",".3"],["cx","12","cy","8","opacity",".3","r","2"],["d","M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"],["type","text","formControlName","firstName","placeholder","Firstname",1,"form-control"],["type","text","formControlName","lastName","placeholder","Lastname",1,"form-control"],[1,"input-group","mb-4"],["d","M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z","opacity",".3"],["d","M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"],["type","text","formControlName","email","placeholder","Enter Email",1,"form-control"],["type","text","formControlName","username","placeholder","Username",1,"form-control"],["fill","none"],["d","M0 0h24v24H0V0z"],["d","M0 0h24v24H0V0z","opacity",".87"],["d","M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z","opacity",".3"],["d","M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"],["type","password","formControlName","password","placeholder","Password",1,"form-control"],["type","text","formControlName","referralCode","placeholder","Referral ID",1,"form-control"],[1,"mb-3"],[1,"custom-control","custom-checkbox"],["type","checkbox",1,"custom-control-input"],[1,"custom-control-label"],["href","#",1,"btn-link"],[1,"col-12"],["type","submit","role","button","href","",1,"btn","btn-lg","btn-primary","btn-block","px-4"],[1,"pt-4"],[1,"font-weight-normal","fs-16"],["routerLink","/login","href","",1,"btn-link","font-weight-normal"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.TgZ(3,"div",3),i.TgZ(4,"div",4),i._UZ(5,"img",5),i.TgZ(6,"div",6),i._UZ(7,"img",7),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(8,"div",8),i.TgZ(9,"div",4),i.TgZ(10,"div",9),i.TgZ(11,"div",10),i.TgZ(12,"div",11),i.TgZ(13,"h1",12),i._uU(14,"Register"),i.qZA(),i.TgZ(15,"p",13),i._uU(16,"Create New Account"),i.qZA(),i.TgZ(17,"form",14),i.NdJ("ngSubmit",function(){return e.registerSubmit()}),i.TgZ(18,"div",15),i.TgZ(19,"span",16),i.O4$(),i.TgZ(20,"svg",17),i._UZ(21,"path",18),i._UZ(22,"path",19),i._UZ(23,"circle",20),i._UZ(24,"path",21),i.qZA(),i.qZA(),i.kcU(),i._UZ(25,"input",22),i.qZA(),i.TgZ(26,"div",15),i.TgZ(27,"span",16),i.O4$(),i.TgZ(28,"svg",17),i._UZ(29,"path",18),i._UZ(30,"path",19),i._UZ(31,"circle",20),i._UZ(32,"path",21),i.qZA(),i.qZA(),i.kcU(),i._UZ(33,"input",23),i.qZA(),i.TgZ(34,"div",24),i.TgZ(35,"span",16),i.O4$(),i.TgZ(36,"svg",17),i._UZ(37,"path",18),i._UZ(38,"path",25),i._UZ(39,"path",26),i.qZA(),i.qZA(),i.kcU(),i._UZ(40,"input",27),i.qZA(),i.TgZ(41,"div",15),i.TgZ(42,"span",16),i.O4$(),i.TgZ(43,"svg",17),i._UZ(44,"path",18),i._UZ(45,"path",19),i._UZ(46,"circle",20),i._UZ(47,"path",21),i.qZA(),i.qZA(),i.kcU(),i._UZ(48,"input",28),i.qZA(),i.TgZ(49,"div",24),i.TgZ(50,"span",16),i.O4$(),i.TgZ(51,"svg",17),i.TgZ(52,"g",29),i._UZ(53,"path",30),i._UZ(54,"path",31),i.qZA(),i._UZ(55,"path",32),i._UZ(56,"path",33),i.qZA(),i.qZA(),i.kcU(),i._UZ(57,"input",34),i.qZA(),i.TgZ(58,"div",24),i.TgZ(59,"span",16),i.O4$(),i.TgZ(60,"svg",17),i.TgZ(61,"g",29),i._UZ(62,"path",30),i._UZ(63,"path",31),i.qZA(),i._UZ(64,"path",32),i._UZ(65,"path",33),i.qZA(),i.qZA(),i.kcU(),i._UZ(66,"input",35),i.qZA(),i.TgZ(67,"div",36),i.TgZ(68,"label",37),i._UZ(69,"input",38),i.TgZ(70,"span",39),i._uU(71,"Agree the "),i.TgZ(72,"a",40),i._uU(73,"terms and policy"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(74,"div",10),i.TgZ(75,"div",41),i.TgZ(76,"button",42),i._uU(77," Create a new account"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(78,"div",43),i.TgZ(79,"div",44),i._uU(80,"You Already have an account "),i.TgZ(81,"a",45),i._uU(82,"Login Here"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(17),i.Q6J("formGroup",e.registerForm))},directives:[s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,n.yS],styles:[".custom-data[_ngcontent-%COMP%]{background:#fff;padding:20px;margin-top:10px}"]}),t})()}];let Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[n.Bz.forChild(g)],n.Bz]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[o.ez,Z,s.u5,s.UX,l.Rh.forRoot({timeOut:2500,preventDuplicates:!0})]]}),t})()},4500:function(t,e,r){"use strict";r.d(e,{u:function(){return n}});var o=r(2693),s=r(8619);let n=(()=>{class t{constructor(t){this.http=t,this.baseUrl="http://43.205.112.88:5000/api/v1/"}postRequest(t,e){return this.http.post(this.baseUrl+e,t)}postRequestHeader(t,e,r){let s=new o.WM;return s=s.set("Content-Type","multipart/form-data; charset=utf-8"),this.http.post(this.baseUrl+e,t,{headers:{Authorization:r}})}putRequestHeader(t,e,r){let s=new o.WM;return s=s.set("Content-Type","application/json; charset=utf-8"),this.http.put(this.baseUrl+e,t,{headers:{authorization:r}})}getRequest(t){return this.http.get(this.baseUrl+t)}getRequestWithoutData(t){let e=new o.WM;return e=e.set("Content-Type","application/json; charset=utf-8"),this.http.get(this.baseUrl,{headers:{authorization:t}})}getRequestHeader(t,e){let r=new o.WM;return r=r.set("Content-Type","application/json; charset=utf-8"),this.http.get(this.baseUrl+t,{headers:{authorization:e}})}DeleteRequestHeader(t,e){let r=new o.WM;return r=r.set("Content-Type","application/json; charset=utf-8"),this.http.delete(this.baseUrl+t,{headers:{authorization:e}})}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(o.eN))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);