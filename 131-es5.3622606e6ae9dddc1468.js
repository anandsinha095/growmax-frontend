!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(self.webpackChunkglobal=self.webpackChunkglobal||[]).push([[131],{7131:function(a,i,o){"use strict";o.r(i),o.d(i,{TransactionhistoryModule:function(){return T}});var n=o(1116),r=o(1462),g=o(1522),Z=o(6304),d=o(8619),s=o(518),l=o(2893),c=o(272);function p(e,t){1&e&&(d.TgZ(0,"span"),d._uU(1," Success"),d.qZA())}function v(e,t){1&e&&(d.TgZ(0,"span"),d._uU(1,"Failed"),d.qZA())}function u(e,t){if(1&e&&(d.TgZ(0,"tr"),d.TgZ(1,"td"),d._uU(2),d.qZA(),d.TgZ(3,"td"),d._uU(4),d.qZA(),d.TgZ(5,"td"),d._uU(6),d.qZA(),d.TgZ(7,"td"),d._uU(8),d.qZA(),d.TgZ(9,"td"),d._uU(10),d.qZA(),d.TgZ(11,"td"),d.YNc(12,p,2,0,"span",129),d.YNc(13,v,2,0,"span",129),d.qZA(),d.TgZ(14,"td"),d._uU(15),d.qZA(),d.TgZ(16,"td"),d._uU(17),d.qZA(),d.TgZ(18,"td"),d._uU(19),d.qZA(),d.TgZ(20,"td"),d._uU(21),d.qZA(),d.TgZ(22,"td"),d._uU(23),d.qZA(),d.qZA()),2&e){var a=t.$implicit,i=t.index;d.xp6(2),d.Oqu(i+1),d.xp6(2),d.Oqu(a.packageName),d.xp6(2),d.Oqu(a.amount),d.xp6(2),d.Oqu(a.paymentMethod),d.xp6(2),d.Oqu(a.paymentCoin),d.xp6(2),d.Q6J("ngIf",1==a.status),d.xp6(1),d.Q6J("ngIf",0==a.status),d.xp6(2),d.Oqu(a.blockHash),d.xp6(2),d.Oqu(a.from),d.xp6(2),d.Oqu(a.to),d.xp6(2),d.Oqu(a.paymentType),d.xp6(2),d.Oqu(a.createdAt)}}var h,q,_=[{path:"",component:(h=function(){function a(t,i,o,n,r){e(this,a),this.router=t,this.formBuilder=i,this.toastr=o,this.localData=n,this.service=r,this.submitted=!1,this.role=!0}var i,o,n;return i=a,(o=[{key:"ngOnInit",value:function(){var e=this;return(0,Z.Z)(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.localData.checkLogin(),e.localDataSource=e.localData.getlocalData(),e.username=e.localDataSource.username,t.next=3,e.service.txHistory(localStorage.getItem("token"));case 3:a=t.sent,e.txData=a.data;case 5:case"end":return t.stop()}},t)}))()}},{key:"logout",value:function(){localStorage.clear(),this.router.navigate(["/login"])}}])&&t(i.prototype,o),n&&t(i,n),a}(),h.\u0275fac=function(e){return new(e||h)(d.Y36(g.F0),d.Y36(r.qu),d.Y36(s._W),d.Y36(l.v),d.Y36(c.t))},h.\u0275cmp=d.Xpm({type:h,selectors:[["app-transactionhistory"]],decls:221,vars:3,consts:[[1,"main-body","app","sidebar-mini","light-mode","ltr"],[1,"horizontalMenucontainer"],["id","global-loader",2,"display","none"],["src","css/loader.svg","alt","loader"],[1,"page"],[1,"page-main"],[1,"app-header","header","top-header"],[1,"container-fluid","main-container"],[1,"d-flex"],[1,"dropdown","side-nav"],["data-bs-toggle","sidebar",1,"app-sidebar__toggle"],["href","javascript:void(0)",1,"open-toggle"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"header-icon"],["x1","3","y1","12","x2","21","y2","12"],["x1","3","y1","6","x2","21","y2","6"],["x1","3","y1","18","x2","21","y2","18"],["href","javascript:void(0)",1,"close-toggle"],["xmlns","http://www.w3.org/2000/svg","height","24","viewBox","0 0 24 24","width","24",1,"header-icon"],["d","M0 0h24v24H0V0z","fill","none"],["d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"],["href","",1,"header-brand"],["src","assets/images/logo.svg","alt","Grawmaxx logo",1,"header-brand-img","desktop-lgo"],["src","assets/images/logo.svg","alt","Grawmaxx logo",1,"header-brand-img","dark-logo"],["src","css/favicon.png","alt","Grawmaxx logo",1,"header-brand-img","mobile-logo"],["src","css/favicon1.png","alt","Grawmaxx logo",1,"header-brand-img","darkmobile-logo"],[1,"d-flex","order-lg-2","ms-lg-auto"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent-4","aria-controls","navbarSupportedContent-4","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","navresponsive-toggler","d-lg-none"],[1,"navbar-toggler-icon","fe","fe-more-vertical"],[1,"navbar","navbar-expand-lg","navbar-nav-right","responsive-navbar","navbar-dark","p-0"],["id","navbarSupportedContent-4",1,"collapse","navbar-collapse"],["href","javascript:void(0)","data-bs-toggle","search",1,"nav-link","nav-link-lg","d-lg-none","navsearch"],["x","1008","y","1248","viewBox","0 0 24 24","height","100%","width","100%","preserveAspectRatio","xMidYMid meet","focusable","false",1,"header-icon","search-icon"],["d","M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"],[1,"dropdown","profile-dropdown"],["href","javascript:void(0)","data-bs-toggle","dropdown",1,"nav-link","icon","leading-none"],["src","assets/images/user.png","alt","img",1,"avatar","avatar-md","brround"],[1,"dropdown-menu","dropdown-menu-end","dropdown-menu-arrow","animated"],[1,"text-center"],["href","javascript:void(0)",1,"dropdown-item","text-center","user","pb-0","font-weight-bold"],[1,"dropdown-divider"],["routerLink","/profile",1,"dropdown-item","d-flex"],["x","1008","y","1248","viewBox","0 0 24 24","height","100%","width","100%","preserveAspectRatio","xMidYMid meet","focusable","false",1,"header-icon","me-3"],["d","M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z","opacity",".3"],["cx","12","cy","8","opacity",".3","r","2"],["d","M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"],[1,"mt-1"],["routerLink","/setting",1,"dropdown-item","d-flex"],["opacity",".3","d","M19.28,8.6 L18.58,7.39 L17.31,7.9 L16.25,8.33 L15.34,7.63 C14.95,7.33 14.54,7.09 14.11,6.92 L13.05,6.49 L12.89,5.36 L12.7,4 L11.3,4 L11.11,5.35 L10.95,6.48 L9.89,6.92 C9.48,7.09 9.07,7.33 8.64,7.65 L7.74,8.33 L6.69,7.91 L5.42,7.39 L4.72,8.6 L5.8,9.44 L6.69,10.14 L6.55,11.27 C6.52,11.57 6.5,11.8 6.5,12 C6.5,12.2 6.52,12.43 6.55,12.73 L6.69,13.86 L5.8,14.56 L4.72,15.4 L5.42,16.61 L6.69,16.1 L7.75,15.67 L8.66,16.37 C9.05,16.67 9.46,16.91 9.89,17.08 L10.95,17.51 L11.11,18.64 L11.3,20 L12.69,20 L12.88,18.65 L13.04,17.52 L14.1,17.09 C14.51,16.92 14.92,16.68 15.35,16.36 L16.25,15.68 L17.29,16.1 L18.56,16.61 L19.26,15.4 L18.18,14.56 L17.29,13.86 L17.43,12.73 C17.47,12.42 17.48,12.21 17.48,12 C17.48,11.79 17.46,11.57 17.43,11.27 L17.29,10.14 L18.18,9.44 L19.28,8.6 Z M12,16 C9.79,16 8,14.21 8,12 C8,9.79 9.79,8 12,8 C14.21,8 16,9.79 16,12 C16,14.21 14.21,16 12,16 Z"],["d","M19.43,12.98 C19.47,12.66 19.5,12.34 19.5,12 C19.5,11.66 19.47,11.34 19.43,11.02 L21.54,9.37 C21.73,9.22 21.78,8.95 21.66,8.73 L19.66,5.27 C19.57,5.11 19.4,5.02 19.22,5.02 C19.16,5.02 19.1,5.03 19.05,5.05 L16.56,6.05 C16.04,5.65 15.48,5.32 14.87,5.07 L14.49,2.42 C14.46,2.18 14.25,2 14,2 L10,2 C9.75,2 9.54,2.18 9.51,2.42 L9.13,5.07 C8.52,5.32 7.96,5.66 7.44,6.05 L4.95,5.05 C4.89,5.03 4.83,5.02 4.77,5.02 C4.6,5.02 4.43,5.11 4.34,5.27 L2.34,8.73 C2.21,8.95 2.27,9.22 2.46,9.37 L4.57,11.02 C4.53,11.34 4.5,11.67 4.5,12 C4.5,12.33 4.53,12.66 4.57,12.98 L2.46,14.63 C2.27,14.78 2.22,15.05 2.34,15.27 L4.34,18.73 C4.43,18.89 4.6,18.98 4.78,18.98 C4.84,18.98 4.9,18.97 4.95,18.95 L7.44,17.95 C7.96,18.35 8.52,18.68 9.13,18.93 L9.51,21.58 C9.54,21.82 9.75,22 10,22 L14,22 C14.25,22 14.46,21.82 14.49,21.58 L14.87,18.93 C15.48,18.68 16.04,18.34 16.56,17.95 L19.05,18.95 C19.11,18.97 19.17,18.98 19.23,18.98 C19.4,18.98 19.57,18.89 19.66,18.73 L21.66,15.27 C21.78,15.05 21.73,14.78 21.54,14.63 L19.43,12.98 Z M17.45,11.27 C17.49,11.58 17.5,11.79 17.5,12 C17.5,12.21 17.48,12.43 17.45,12.73 L17.31,13.86 L18.2,14.56 L19.28,15.4 L18.58,16.61 L17.31,16.1 L16.27,15.68 L15.37,16.36 C14.94,16.68 14.53,16.92 14.12,17.09 L13.06,17.52 L12.9,18.65 L12.7,20 L11.3,20 L11.11,18.65 L10.95,17.52 L9.89,17.09 C9.46,16.91 9.06,16.68 8.66,16.38 L7.75,15.68 L6.69,16.11 L5.42,16.62 L4.72,15.41 L5.8,14.57 L6.69,13.87 L6.55,12.74 C6.52,12.43 6.5,12.2 6.5,12 C6.5,11.8 6.52,11.57 6.55,11.27 L6.69,10.14 L5.8,9.44 L4.72,8.6 L5.42,7.39 L6.69,7.9 L7.73,8.32 L8.63,7.64 C9.06,7.32 9.47,7.08 9.88,6.91 L10.94,6.48 L11.1,5.35 L11.3,4 L12.69,4 L12.88,5.35 L13.04,6.48 L14.1,6.91 C14.53,7.09 14.93,7.32 15.33,7.62 L16.24,8.32 L17.3,7.89 L18.57,7.38 L19.27,8.59 L18.2,9.44 L17.31,10.14 L17.45,11.27 Z M12,8 C9.79,8 8,9.79 8,12 C8,14.21 9.79,16 12,16 C14.21,16 16,14.21 16,12 C16,9.79 14.21,8 12,8 Z M12,14 C10.9,14 10,13.1 10,12 C10,10.9 10.9,10 12,10 C13.1,10 14,10.9 14,12 C14,13.1 13.1,14 12,14 Z"],[1,"dropdown-item","d-flex",3,"click"],["d","M0 0h24v24H0V0zm0 0h24v24H0V0z","fill","none"],["d","M6 20h12V10H6v10zm2-6h3v-3h2v3h3v2h-3v3h-2v-3H8v-2z","opacity",".3"],["d","M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10zm-7-1h2v-3h3v-2h-3v-3h-2v3H8v2h3z"],["data-bs-toggle","sidebar",1,"app-sidebar__overlay"],[1,"sticky",2,"margin-bottom","0px"],[1,"app-sidebar","sidebar-scroll","ps","ps--active-y"],[1,"main-sidebar-header","active"],["href","",1,"desktop-logo","logo-light","active"],["src","assets/images/logo.svg","alt","logo",1,"main-logo"],["href","",1,"desktop-logo","logo-dark","active"],["src","css/logo1.png","alt","logo",1,"main-logo"],["href","",1,"logo-icon","mobile-logo","icon-light","active"],["src","css/favicon.png","alt","logo"],["href","",1,"logo-icon","mobile-logo","icon-dark","active"],["src","css/favicon1.png","alt","logo"],[1,"main-sidemenu","is-expanded"],[1,"app-sidebar__user"],[1,"dropdown","user-pro-body","text-center"],[1,"user-pic"],["alt","user-img","src","assets/images/user.png",1,"avatar","avatar-xl","brround","mb-1"],[1,"user-info","text-center"],[1,"mb-1","font-weight-bold"],["id","slide-left",1,"slide-left","disabled","active","d-none"],["xmlns","http://www.w3.org/2000/svg","fill","#7b8191","width","24","height","24","viewBox","0 0 24 24"],["d","M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"],[1,"side-menu","open",2,"margin-right","0px","margin-left","0px"],[1,"slide","is-expanded"],["data-bs-toggle","slide","routerLink","/dashboard",1,"side-menu__item","active","is-expanded"],["xmlns","http://www.w3.org/2000/svg","width","24","height","26","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"side-menu__icon"],["d","M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"],["points","9 22 9 12 15 12 15 22"],[1,"side-menu__label"],[1,"fa","fa-angle-right"],["data-bs-toggle","slide","routerLink","/packages",1,"side-menu__item","active","is-expanded"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"side-menu__icon"],["points","12 2 2 7 12 12 22 7 12 2"],["points","2 17 12 22 22 17"],["points","2 12 12 17 22 12"],["data-bs-toggle","slide","routerLink","/regular-package",1,"side-menu__item","active","is-expanded"],["x","3","y","3","width","7","height","7"],["x","14","y","3","width","7","height","7"],["x","14","y","14","width","7","height","7"],["x","3","y","14","width","7","height","7"],["data-bs-toggle","slide","routerLink","/minipack",1,"side-menu__item","active","is-expanded"],["data-bs-toggle","slide","routerLink","/transaction-history",1,"side-menu__item","active","is-expanded"],["d","M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"],["points","3.27 6.96 12 12.01 20.73 6.96"],["x1","12","y1","22.08","x2","12","y2","12"],["data-bs-toggle","slide","routerLink","/transfer",1,"side-menu__item","active","is-expanded"],["data-bs-toggle","slide","routerLink","/withdrawal",1,"side-menu__item","active","is-expanded"],["data-bs-toggle","slide","routerLink","/withdraw-history",1,"side-menu__item","active","is-expanded"],["id","slide-right",1,"slide-right"],["d","M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"],[1,"ps__rail-x",2,"left","0px","bottom","0px"],["tabindex","0",1,"ps__thumb-x",2,"left","0px","width","0px"],[1,"ps__rail-y",2,"top","0px","height","668px","right","0px"],["tabindex","0",1,"ps__thumb-y",2,"top","0px","height","505px"],[1,"jumps-prevent",2,"padding-top","0px"],[1,"app-content","main-content"],[1,"side-app"],[1,"page-header"],[1,"page-leftheader"],[1,"row"],[1,"col-xl-12","col-lg-12","col-md-12"],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,""],[1,"table-responsive"],[1,"table","card-table","table-vcenter","text-nowrap","mb-0","border"],[1,"wd-lg-10p"],[1,"wd-lg-20p","text-center"],[4,"ngFor","ngForOf"],[1,"footer"],[1,"container"],[1,"row","align-items-center","flex-row-reverse"],[1,"col-md-12","col-sm-12","mt-3","mt-lg-0","text-center"],["href","javascript:void(0);",1,"text-primary"],[4,"ngIf"]],template:function(e,t){1&e&&(d.TgZ(0,"body",0),d.TgZ(1,"div",1),d.TgZ(2,"div",2),d._UZ(3,"img",3),d.qZA(),d.TgZ(4,"div",4),d.TgZ(5,"div",5),d.TgZ(6,"div",6),d.TgZ(7,"div",7),d.TgZ(8,"div",8),d.TgZ(9,"div",9),d.TgZ(10,"div",10),d.TgZ(11,"a",11),d.O4$(),d.TgZ(12,"svg",12),d._UZ(13,"line",13),d._UZ(14,"line",14),d._UZ(15,"line",15),d.qZA(),d.qZA(),d.kcU(),d.TgZ(16,"a",16),d.O4$(),d.TgZ(17,"svg",17),d._UZ(18,"path",18),d._UZ(19,"path",19),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.kcU(),d.TgZ(20,"a",20),d._UZ(21,"img",21),d._UZ(22,"img",22),d._UZ(23,"img",23),d._UZ(24,"img",24),d.qZA(),d.TgZ(25,"div",25),d.TgZ(26,"button",26),d._UZ(27,"span",27),d.qZA(),d.TgZ(28,"div",28),d.TgZ(29,"div",29),d.TgZ(30,"div",8),d.TgZ(31,"a",30),d.O4$(),d.TgZ(32,"svg",31),d._UZ(33,"path",18),d._UZ(34,"path",32),d.qZA(),d.qZA(),d.kcU(),d.TgZ(35,"div",33),d.TgZ(36,"a",34),d.TgZ(37,"span"),d._UZ(38,"img",35),d.qZA(),d.qZA(),d.TgZ(39,"div",36),d.TgZ(40,"div",37),d.TgZ(41,"a",38),d._uU(42),d.qZA(),d._UZ(43,"div",39),d.qZA(),d.TgZ(44,"a",40),d.O4$(),d.TgZ(45,"svg",41),d._UZ(46,"path",18),d._UZ(47,"path",42),d._UZ(48,"circle",43),d._UZ(49,"path",44),d.qZA(),d.kcU(),d.TgZ(50,"div",45),d._uU(51,"Profile"),d.qZA(),d.qZA(),d.TgZ(52,"a",46),d.O4$(),d.TgZ(53,"svg",41),d._UZ(54,"path",47),d._UZ(55,"path",48),d.qZA(),d.kcU(),d.TgZ(56,"div",45),d._uU(57,"Settings"),d.qZA(),d.qZA(),d.TgZ(58,"a",49),d.NdJ("click",function(){return t.logout()}),d.O4$(),d.TgZ(59,"svg",41),d._UZ(60,"path",50),d._UZ(61,"path",51),d._UZ(62,"path",52),d.qZA(),d.kcU(),d.TgZ(63,"div",45),d._uU(64,"Sign Out"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d._UZ(65,"div",53),d.TgZ(66,"div",54),d.TgZ(67,"aside",55),d.TgZ(68,"div",56),d.TgZ(69,"a",57),d._UZ(70,"img",58),d.qZA(),d.TgZ(71,"a",59),d._UZ(72,"img",60),d.qZA(),d.TgZ(73,"a",61),d._UZ(74,"img",62),d.qZA(),d.TgZ(75,"a",63),d._UZ(76,"img",64),d.qZA(),d.qZA(),d.TgZ(77,"div",65),d.TgZ(78,"div",66),d.TgZ(79,"div",67),d.TgZ(80,"div",68),d._UZ(81,"img",69),d.qZA(),d.TgZ(82,"div",70),d.TgZ(83,"h5",71),d._uU(84),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(85,"div",72),d.O4$(),d.TgZ(86,"svg",73),d._UZ(87,"path",74),d.qZA(),d.qZA(),d.kcU(),d.TgZ(88,"ul",75),d.TgZ(89,"li",76),d.TgZ(90,"a",77),d.O4$(),d.TgZ(91,"svg",78),d._UZ(92,"path",79),d._UZ(93,"polyline",80),d.qZA(),d.kcU(),d.TgZ(94,"span",81),d._uU(95,"Dashboard"),d.qZA(),d._UZ(96,"i",82),d.qZA(),d.qZA(),d.TgZ(97,"li",76),d.TgZ(98,"a",83),d.O4$(),d.TgZ(99,"svg",84),d._UZ(100,"polygon",85),d._UZ(101,"polyline",86),d._UZ(102,"polyline",87),d.qZA(),d.kcU(),d.TgZ(103,"span",81),d._uU(104,"Packages"),d.qZA(),d._UZ(105,"i",82),d.qZA(),d.qZA(),d.TgZ(106,"li",76),d.TgZ(107,"a",88),d.O4$(),d.TgZ(108,"svg",84),d._UZ(109,"rect",89),d._UZ(110,"rect",90),d._UZ(111,"rect",91),d._UZ(112,"rect",92),d.qZA(),d.kcU(),d.TgZ(113,"span",81),d._uU(114,"Regular Package"),d.qZA(),d._UZ(115,"i",82),d.qZA(),d.qZA(),d.TgZ(116,"li",76),d.TgZ(117,"a",93),d.O4$(),d.TgZ(118,"svg",84),d._UZ(119,"rect",89),d._UZ(120,"rect",90),d._UZ(121,"rect",91),d._UZ(122,"rect",92),d.qZA(),d.kcU(),d.TgZ(123,"span",81),d._uU(124,"Minipack Package"),d.qZA(),d._UZ(125,"i",82),d.qZA(),d.qZA(),d.TgZ(126,"li",76),d.TgZ(127,"a",94),d.O4$(),d.TgZ(128,"svg",84),d._UZ(129,"path",95),d._UZ(130,"polyline",96),d._UZ(131,"line",97),d.qZA(),d.kcU(),d.TgZ(132,"span",81),d._uU(133,"Transaction Histroy"),d.qZA(),d._UZ(134,"i",82),d.qZA(),d.qZA(),d.TgZ(135,"li",76),d.TgZ(136,"a",98),d.O4$(),d.TgZ(137,"svg",84),d._UZ(138,"path",95),d._UZ(139,"polyline",96),d._UZ(140,"line",97),d.qZA(),d.kcU(),d.TgZ(141,"span",81),d._uU(142,"Transfer Token"),d.qZA(),d._UZ(143,"i",82),d.qZA(),d.qZA(),d.TgZ(144,"li",76),d.TgZ(145,"a",99),d.O4$(),d.TgZ(146,"svg",84),d._UZ(147,"path",95),d._UZ(148,"polyline",96),d._UZ(149,"line",97),d.qZA(),d.kcU(),d.TgZ(150,"span",81),d._uU(151,"Withdrawal"),d.qZA(),d._UZ(152,"i",82),d.qZA(),d.qZA(),d.TgZ(153,"li",76),d.TgZ(154,"a",100),d.O4$(),d.TgZ(155,"svg",84),d._UZ(156,"path",95),d._UZ(157,"polyline",96),d._UZ(158,"line",97),d.qZA(),d.kcU(),d.TgZ(159,"span",81),d._uU(160,"Withdraw History"),d.qZA(),d._UZ(161,"i",82),d.qZA(),d.qZA(),d.qZA(),d.TgZ(162,"div",101),d.O4$(),d.TgZ(163,"svg",73),d._UZ(164,"path",102),d.qZA(),d.qZA(),d.qZA(),d.kcU(),d.TgZ(165,"div",103),d._UZ(166,"div",104),d.qZA(),d.TgZ(167,"div",105),d._UZ(168,"div",106),d.qZA(),d.qZA(),d.qZA(),d._UZ(169,"div",107),d.TgZ(170,"div",108),d.TgZ(171,"div",109),d.TgZ(172,"div",7),d.TgZ(173,"div",110),d.TgZ(174,"div",111),d._UZ(175,"br"),d._UZ(176,"br"),d.qZA(),d.qZA(),d.TgZ(177,"div",112),d.TgZ(178,"div",113),d.TgZ(179,"div",114),d.TgZ(180,"div",115),d.TgZ(181,"h3",116),d._uU(182,"Transaction History "),d.qZA(),d.qZA(),d.TgZ(183,"div",117),d.TgZ(184,"div",118),d.TgZ(185,"div",119),d.TgZ(186,"table",120),d.TgZ(187,"thead"),d.TgZ(188,"tr"),d.TgZ(189,"th",121),d._uU(190,"S.N"),d.qZA(),d.TgZ(191,"th",122),d._uU(192,"Package Name"),d.qZA(),d.TgZ(193,"th",122),d._uU(194,"Amount"),d.qZA(),d.TgZ(195,"th",122),d._uU(196,"Payment Method"),d.qZA(),d.TgZ(197,"th",122),d._uU(198,"Payment Coin"),d.qZA(),d.TgZ(199,"th",122),d._uU(200,"Payment Status"),d.qZA(),d.TgZ(201,"th",122),d._uU(202,"Block Hash"),d.qZA(),d.TgZ(203,"th",122),d._uU(204,"From"),d.qZA(),d.TgZ(205,"th",122),d._uU(206,"To"),d.qZA(),d.TgZ(207,"th",122),d._uU(208,"Payment Type"),d.qZA(),d.TgZ(209,"th",122),d._uU(210,"Purchased At"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(211,"tbody"),d.YNc(212,u,24,12,"tr",123),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(213,"footer",124),d.TgZ(214,"div",125),d.TgZ(215,"div",126),d.TgZ(216,"div",127),d._uU(217," Copyright \xa9 2023 "),d.TgZ(218,"a",128),d._uU(219,"Growmaxx"),d.qZA(),d._uU(220,". All rights reserved. "),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&e&&(d.xp6(42),d.Oqu(t.username),d.xp6(42),d.Oqu(t.username),d.xp6(128),d.Q6J("ngForOf",t.txData))},directives:[g.yS,n.sg,n.O5],styles:[".custom-data[_ngcontent-%COMP%]{background:#fff;padding:20px;margin-top:10px}"]}),h)}],A=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[g.Bz.forChild(_)],g.Bz]}),t}(),T=((q=function t(){e(this,t)}).\u0275fac=function(e){return new(e||q)},q.\u0275mod=d.oAB({type:q}),q.\u0275inj=d.cJS({imports:[[n.ez,A,r.u5,r.UX,s.Rh.forRoot({timeOut:2500,preventDuplicates:!0})]]}),q)}}])}();