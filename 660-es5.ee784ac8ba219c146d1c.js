!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function n(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}(self.webpackChunkglobal=self.webpackChunkglobal||[]).push([[660],{5660:function(e,a,r){"use strict";r.r(a),r.d(a,{LoginModule:function(){return v}});var o,i,s=r(1116),u=r(1462),c=r(3319),l=r(6304),g=r(8619),p=r(8425),h=r(518),f=r(2893),d=[{path:"",component:(o=function(){function e(n,a,r,o,i){t(this,e),this.router=n,this.formBuilder=a,this.service=r,this.toastr=o,this.setLocalStoreage=i,this.submitted=!1,this.role=!0}return n(e,[{key:"ngOnInit",value:function(){window,this.loginForm=this.formBuilder.group({email:["",[u.kI.required]],password:["",[u.kI.required]]})}},{key:"loginSubmit",value:function(){var t=this;return(0,l.Z)(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.service.signInApiCall(t.loginForm.value);case 3:201==(n=e.sent).code?t.router.navigate(["/payment/",n.data]):200==n.code&&(t.setLocalStoreage.setLocalData(n),t.router.navigate(["/dashboard/"])),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),461==e.t0.code&&t.router.navigate(["/verify-email/",e.t0.data.token]),t.toastr.warning(e.t0.message),t.ngOnInit();case 10:case"end":return e.stop()}},e,null,[[0,7]])}))()}}]),e}(),o.\u0275fac=function(t){return new(t||o)(g.Y36(c.F0),g.Y36(u.qu),g.Y36(p.r),g.Y36(h._W),g.Y36(f.v))},o.\u0275cmp=g.Xpm({type:o,selectors:[["app-login"]],decls:46,vars:1,consts:[[1,"page"],[1,"d-md-flex"],[1,"w-40","bg-style","h-100vh","page-style"],[1,"page-content"],[1,"page-single-content"],["src","assets/images/logo.svg","alt","img",1,"header-brand-img","mb-5"],[1,"card-body","text-white","py-5","px-8","text-center"],["src","assets/images/2.png","alt","img",1,"w-100","mx-auto","text-center"],[1,"w-80","page-content"],[1,"card-body","p-6"],[1,"row"],[1,"col-md-8","mx-auto","d-block"],[1,"mb-2"],[1,"text-muted"],[3,"formGroup","ngSubmit"],[1,"input-group","mb-4"],[1,"input-group-addon"],["xmlns","http://www.w3.org/2000/svg","height","24","viewBox","0 0 24 24","width","24",1,"svg-icon"],["d","M0 0h24v24H0V0z","fill","none"],["d","M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z","opacity",".3"],["d","M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"],["type","text","formControlName","email","placeholder","Enter Email",1,"form-control"],["fill","none"],["d","M0 0h24v24H0V0z"],["d","M0 0h24v24H0V0z","opacity",".87"],["d","M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z","opacity",".3"],["d","M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"],["type","password","formControlName","password","placeholder","Password",1,"form-control"],[1,"col-12"],["routerLink","/forgot-password",1,"btn","btn-link","box-shadow-0","px-0"],["type","submit","role","button","href","",1,"btn","btn-lg","btn-primary","btn-block","px-4"],[1,"pt-4"],[1,"font-weight-normal","fs-16"],["routerLink","/register",1,"btn-link","font-weight-normal"]],template:function(t,e){1&t&&(g.TgZ(0,"div",0),g.TgZ(1,"div",1),g.TgZ(2,"div",2),g.TgZ(3,"div",3),g.TgZ(4,"div",4),g._UZ(5,"img",5),g.TgZ(6,"div",6),g._UZ(7,"img",7),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(8,"div",8),g.TgZ(9,"div",4),g.TgZ(10,"div",9),g.TgZ(11,"div",10),g.TgZ(12,"div",11),g.TgZ(13,"h1",12),g._uU(14,"Login"),g.qZA(),g.TgZ(15,"p",13),g._uU(16,"Sign In to your account"),g.qZA(),g.TgZ(17,"form",14),g.NdJ("ngSubmit",function(){return e.loginSubmit()}),g.TgZ(18,"div",15),g.TgZ(19,"span",16),g.O4$(),g.TgZ(20,"svg",17),g._UZ(21,"path",18),g._UZ(22,"path",19),g._UZ(23,"path",20),g.qZA(),g.qZA(),g.kcU(),g._UZ(24,"input",21),g.qZA(),g.TgZ(25,"div",15),g.TgZ(26,"span",16),g.O4$(),g.TgZ(27,"svg",17),g.TgZ(28,"g",22),g._UZ(29,"path",23),g._UZ(30,"path",24),g.qZA(),g._UZ(31,"path",25),g._UZ(32,"path",26),g.qZA(),g.qZA(),g.kcU(),g._UZ(33,"input",27),g.qZA(),g.TgZ(34,"div",10),g.TgZ(35,"div",28),g.TgZ(36,"a",29),g._uU(37,"Forgot password?"),g.qZA(),g.qZA(),g.TgZ(38,"div",28),g.TgZ(39,"button",30),g._uU(40,"Login "),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(41,"div",31),g.TgZ(42,"div",32),g._uU(43,"You Don't have an account "),g.TgZ(44,"a",33),g._uU(45,"Register Here"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&t&&(g.xp6(17),g.Q6J("formGroup",e.loginForm))},directives:[u._Y,u.JL,u.sg,u.Fj,u.JJ,u.u,c.yS],styles:[".custom-data[_ngcontent-%COMP%]{background:#fff;padding:20px;margin-top:10px}"]}),o)}],m=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g.oAB({type:e}),e.\u0275inj=g.cJS({imports:[[c.Bz.forChild(d)],c.Bz]}),e}(),v=((i=function e(){t(this,e)}).\u0275fac=function(t){return new(t||i)},i.\u0275mod=g.oAB({type:i}),i.\u0275inj=g.cJS({imports:[[s.ez,m,u.u5,u.UX,h.Rh.forRoot({timeOut:2500,preventDuplicates:!0})]]}),i)},4500:function(e,a,r){"use strict";r.d(a,{u:function(){return s}});var o=r(2693),i=r(8619),s=function(){var e=function(){function e(n){t(this,e),this.http=n,this.baseUrl="http://43.205.112.88:5000/api/v1/"}return n(e,[{key:"postRequest",value:function(t,e){return this.http.post(this.baseUrl+e,t)}},{key:"postRequestHeader",value:function(t,e,n){var a=new o.WM;return a=a.set("Content-Type","multipart/form-data; charset=utf-8"),this.http.post(this.baseUrl+e,t,{headers:{Authorization:n}})}},{key:"putRequestHeader",value:function(t,e,n){var a=new o.WM;return a=a.set("Content-Type","application/json; charset=utf-8"),this.http.put(this.baseUrl+e,t,{headers:{authorization:n}})}},{key:"getRequest",value:function(t){return this.http.get(this.baseUrl+t)}},{key:"getRequestWithoutData",value:function(t){var e=new o.WM;return e=e.set("Content-Type","application/json; charset=utf-8"),this.http.get(this.baseUrl,{headers:{authorization:t}})}},{key:"getRequestHeader",value:function(t,e){var n=new o.WM;return n=n.set("Content-Type","application/json; charset=utf-8"),this.http.get(this.baseUrl+t,{headers:{authorization:e}})}},{key:"DeleteRequestHeader",value:function(t,e){var n=new o.WM;return n=n.set("Content-Type","application/json; charset=utf-8"),this.http.delete(this.baseUrl+t,{headers:{authorization:e}})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i.LFG(o.eN))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},2893:function(e,a,r){"use strict";r.d(a,{v:function(){return c}});var o=r(8619),i=r(3319),s=r(2693),u=r(4500),c=function(){var e=function(){function e(n,a,r){t(this,e),this.router=n,this.http=a,this.apiCall=r}return n(e,[{key:"getlocalData",value:function(){var t={};return t.userId=localStorage.getItem("userId"),t.token=localStorage.getItem("token"),t.userMail=localStorage.getItem("userMail"),t.firstName=localStorage.getItem("firstName"),t.lastName=localStorage.getItem("lastName"),t.username=localStorage.getItem("username"),t}},{key:"setLocalData",value:function(t){localStorage.setItem("dataSource",JSON.stringify(t)),localStorage.setItem("userId",t.data.user._id),localStorage.setItem("token",t.data.token),localStorage.setItem("userMail",t.data.user.email),localStorage.setItem("firstName",t.data.user.firstName),localStorage.setItem("username",t.data.user.username),localStorage.setItem("lastName",t.data.user.lastName)}},{key:"checkLogin",value:function(){localStorage.getItem("token")||this.router.navigate(["/login"])}},{key:"userInfo",value:function(t){var e=this;return new Promise(function(n,a){e.apiCall.getRequestHeader("user/userInfo",t).subscribe(function(t){n(t)},function(t){a("user is not exist")})})}},{key:"fetchPacakge",value:function(){var t=this;return new Promise(function(e,n){t.apiCall.getRequest("public/packages").subscribe(function(t){e(t)},function(t){n("Pacakges is not exist")})})}},{key:"reBuyPacakge",value:function(){var t=this;return new Promise(function(e,n){t.apiCall.getRequest("public/reBuy").subscribe(function(t){e(t)},function(t){n("rebuy is not exist")})})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.LFG(i.F0),o.LFG(s.eN),o.LFG(u.u))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();