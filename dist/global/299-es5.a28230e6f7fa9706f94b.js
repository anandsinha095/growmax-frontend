!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}(self.webpackChunkglobal=self.webpackChunkglobal||[]).push([[299],{6266:function(e,r,o){"use strict";o.r(r),o.d(r,{ForgotPasswordModule:function(){return m}});var a,i,s=o(1116),u=o(1462),c=o(3319),l=o(6304),f=o(8619),g=o(7439),p=o(518),h=[{path:"",component:(a=function(){function e(n,r,o,a){t(this,e),this.router=n,this.formBuilder=r,this.service=o,this.toastr=a,this.submitted=!1,this.role=!0}return n(e,[{key:"ngOnInit",value:function(){window,this.forgotForm=this.formBuilder.group({email:["",[u.kI.required]]})}},{key:"forgotPasswordSubmit",value:function(){var t=this;return(0,l.Z)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.service.resetLink(t.forgotForm.value.email);case 3:if(e.t0=e.sent,!e.t0){e.next=6;break}t.toastr.success("Reset password link sent to your Email ID !!"),t.forgotForm.reset();case 6:e.next=11;break;case 8:e.prev=8,e.t1=e.catch(0),t.toastr.error("Opps! Something went wrong!!!"),t.ngOnInit();case 11:case"end":return e.stop()}},e,null,[[0,8]])}))()}}]),e}(),a.\u0275fac=function(t){return new(t||a)(f.Y36(c.F0),f.Y36(u.qu),f.Y36(g.w),f.Y36(p._W))},a.\u0275cmp=f.Xpm({type:a,selectors:[["app-forgotPassword"]],decls:28,vars:1,consts:[[1,"page"],[1,"d-md-flex"],[1,"w-40","bg-style","h-100vh","page-style"],[1,"page-content"],[1,"page-single-content"],["src","assets/images/logo.svg","alt","img",1,"header-brand-img","mb-5"],[1,"card-body","text-white","py-5","px-8","text-center"],["src","assets/images/2.png","alt","img",1,"w-100","mx-auto","text-center"],[1,"w-80","page-content"],[1,"card-body","p-6"],[1,"row"],[1,"col-md-8","mx-auto","d-block"],[1,"mb-2"],[1,"text-muted"],[3,"formGroup","ngSubmit"],[1,"input-group","mb-4"],[1,"input-group-addon"],["xmlns","http://www.w3.org/2000/svg","height","24","viewBox","0 0 24 24","width","24",1,"svg-icon"],["d","M0 0h24v24H0V0z","fill","none"],["d","M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z","opacity",".3"],["d","M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"],["type","text","formControlName","email","placeholder","Enter Email",1,"form-control"],[1,"col-12"],["type","submit","role","button","href","",1,"btn","btn-lg","btn-primary","btn-block","px-4"]],template:function(t,e){1&t&&(f.TgZ(0,"div",0),f.TgZ(1,"div",1),f.TgZ(2,"div",2),f.TgZ(3,"div",3),f.TgZ(4,"div",4),f._UZ(5,"img",5),f.TgZ(6,"div",6),f._UZ(7,"img",7),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.TgZ(8,"div",8),f.TgZ(9,"div",4),f.TgZ(10,"div",9),f.TgZ(11,"div",10),f.TgZ(12,"div",11),f.TgZ(13,"h1",12),f._uU(14,"Forgot Password"),f.qZA(),f._UZ(15,"p",13),f.TgZ(16,"form",14),f.NdJ("ngSubmit",function(){return e.forgotPasswordSubmit()}),f.TgZ(17,"div",15),f.TgZ(18,"span",16),f.O4$(),f.TgZ(19,"svg",17),f._UZ(20,"path",18),f._UZ(21,"path",19),f._UZ(22,"path",20),f.qZA(),f.qZA(),f.kcU(),f._UZ(23,"input",21),f.qZA(),f.TgZ(24,"div",10),f.TgZ(25,"div",22),f.TgZ(26,"button",23),f._uU(27," Click Here"),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA()),2&t&&(f.xp6(16),f.Q6J("formGroup",e.forgotForm))},directives:[u._Y,u.JL,u.sg,u.Fj,u.JJ,u.u],styles:[".custom-data[_ngcontent-%COMP%]{background:#fff;padding:20px;margin-top:10px}"]}),a)}],d=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f.oAB({type:e}),e.\u0275inj=f.cJS({imports:[[c.Bz.forChild(h)],c.Bz]}),e}(),m=((i=function e(){t(this,e)}).\u0275fac=function(t){return new(t||i)},i.\u0275mod=f.oAB({type:i}),i.\u0275inj=f.cJS({imports:[[s.ez,d,u.u5,u.UX,p.Rh.forRoot({timeOut:2500,preventDuplicates:!0})]]}),i)},4500:function(e,r,o){"use strict";o.d(r,{u:function(){return s}});var a=o(2693),i=o(8619),s=function(){var e=function(){function e(n){t(this,e),this.http=n,this.baseUrl="http://localhost:5000/api/v1/"}return n(e,[{key:"postRequest",value:function(t,e){return this.http.post(this.baseUrl+e,t)}},{key:"postRequestHeader",value:function(t,e,n){var r=new a.WM;return r=r.set("Content-Type","multipart/form-data; charset=utf-8"),this.http.post(this.baseUrl+e,t,{headers:{Authorization:n}})}},{key:"putRequestHeader",value:function(t,e,n){var r=new a.WM;return r=r.set("Content-Type","application/json; charset=utf-8"),this.http.put(this.baseUrl+e,t,{headers:{authorization:n}})}},{key:"getRequest",value:function(t){return this.http.get(this.baseUrl+t)}},{key:"getRequestWithoutData",value:function(t){var e=new a.WM;return e=e.set("Content-Type","application/json; charset=utf-8"),this.http.get(this.baseUrl,{headers:{authorization:t}})}},{key:"getRequestHeader",value:function(t,e){var n=new a.WM;return n=n.set("Content-Type","application/json; charset=utf-8"),this.http.get(this.baseUrl+t,{headers:{authorization:e}})}},{key:"DeleteRequestHeader",value:function(t,e){var n=new a.WM;return n=n.set("Content-Type","application/json; charset=utf-8"),this.http.delete(this.baseUrl+t,{headers:{authorization:e}})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i.LFG(a.eN))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},2893:function(e,r,o){"use strict";o.d(r,{v:function(){return c}});var a=o(8619),i=o(3319),s=o(2693),u=o(4500),c=function(){var e=function(){function e(n,r,o){t(this,e),this.router=n,this.http=r,this.apiCall=o}return n(e,[{key:"getlocalData",value:function(){var t={};return t.userId=localStorage.getItem("userId"),t.token=localStorage.getItem("token"),t.userMail=localStorage.getItem("userMail"),t.firstName=localStorage.getItem("firstName"),t.lastName=localStorage.getItem("lastName"),t}},{key:"setLocalData",value:function(t){localStorage.setItem("dataSource",JSON.stringify(t)),localStorage.setItem("userId",t.data.user._id),localStorage.setItem("token",t.data.token),localStorage.setItem("userMail",t.data.user.email),localStorage.setItem("firstName",t.data.user.firstName),localStorage.setItem("lastName",t.data.user.lastName)}},{key:"checkLogin",value:function(){localStorage.getItem("token")||this.router.navigate(["/login"])}},{key:"userInfo",value:function(t){var e=this;return new Promise(function(n,r){e.apiCall.getRequestHeader("user/userInfo",t).subscribe(function(t){n(t)},function(t){r("Pacakges is not exist")})})}},{key:"fetchPacakge",value:function(){var t=this;return new Promise(function(e,n){t.apiCall.getRequest("public/packages").subscribe(function(t){e(t)},function(t){n("Pacakges is not exist")})})}},{key:"reBuyPacakge",value:function(){var t=this;return new Promise(function(e,n){t.apiCall.getRequest("public/reBuy").subscribe(function(t){e(t)},function(t){n("Pacakges is not exist")})})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.LFG(i.F0),a.LFG(s.eN),a.LFG(u.u))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();