(self.webpackChunkglobal=self.webpackChunkglobal||[]).push([[397],{9397:function(e,t,i){"use strict";i.r(t),i.d(t,{UserWithdrawhistoryModule:function(){return u}});var a=i(1116),o=i(1462),r=i(1522),Z=i(6304),g=i(8619),d=i(518),n=i(2893),s=i(7923);function l(e,t){if(1&e&&(g.TgZ(0,"tr"),g.TgZ(1,"td"),g._uU(2),g.qZA(),g.TgZ(3,"td"),g._uU(4),g.qZA(),g.TgZ(5,"td"),g._uU(6),g.qZA(),g.TgZ(7,"td"),g._uU(8),g.qZA(),g.TgZ(9,"td",125),g._uU(10),g.qZA(),g.TgZ(11,"td",125),g._uU(12),g.qZA(),g.TgZ(13,"td"),g._uU(14),g.qZA(),g.TgZ(15,"td"),g._uU(16),g.qZA(),g.TgZ(17,"td"),g._uU(18),g.qZA(),g.TgZ(19,"td"),g._uU(20),g.qZA(),g.TgZ(21,"td"),g._uU(22),g.qZA(),g.qZA()),2&e){const e=t.$implicit,i=t.index;g.xp6(2),g.Oqu(i+1),g.xp6(2),g.Oqu(e.orderId),g.xp6(2),g.Oqu(e.type),g.xp6(2),g.Oqu(e.pair),g.xp6(2),g.hij("",e.gmtAmount," GMT"),g.xp6(2),g.AsE("",e.totalAmount.toFixed(4)," ",e.asset,""),g.xp6(2),g.Oqu(e.fee),g.xp6(2),g.Oqu(e.slippage),g.xp6(2),g.Oqu(e.orderStatus),g.xp6(2),g.Oqu(e.destination),g.xp6(2),g.Oqu(e.createdAt)}}function c(e,t){if(1&e&&(g.TgZ(0,"div",119),g.TgZ(1,"div",120),g.TgZ(2,"div",121),g.TgZ(3,"div",122),g.TgZ(4,"table",123),g.TgZ(5,"thead"),g.TgZ(6,"tr"),g.TgZ(7,"th",124),g._uU(8,"S.N"),g.qZA(),g.TgZ(9,"th",125),g._uU(10,"Order ID"),g.qZA(),g.TgZ(11,"th",125),g._uU(12,"Type"),g.qZA(),g.TgZ(13,"th",125),g._uU(14,"Pair"),g.qZA(),g.TgZ(15,"th",125),g._uU(16,"GMT Amount"),g.qZA(),g.TgZ(17,"th",125),g._uU(18,"Receive Amount"),g.qZA(),g.TgZ(19,"th",125),g._uU(20,"Fee"),g.qZA(),g.TgZ(21,"th",125),g._uU(22,"Slippage"),g.qZA(),g.TgZ(23,"th",125),g._uU(24,"Status"),g.qZA(),g.TgZ(25,"th",125),g._uU(26,"Destination"),g.qZA(),g.TgZ(27,"th",125),g._uU(28,"Created At"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(29,"tbody"),g.YNc(30,l,23,12,"tr",126),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&e){const e=g.oxw();g.xp6(30),g.Q6J("ngForOf",e.txData)}}function p(e,t){1&e&&(g.TgZ(0,"div",119),g.TgZ(1,"div",120),g.TgZ(2,"h5",127),g._uU(3,"No Histroy found "),g.qZA(),g.qZA(),g.qZA())}const v=[{path:"",component:(()=>{class e{constructor(e,t,i,a,o,r){this.router=e,this.formBuilder=t,this.route=i,this.toastr=a,this.localData=o,this.service=r,this.submitted=!1,this.role=!0}ngOnInit(){var e=this;return(0,Z.Z)(function*(){let t=e.route.snapshot.paramMap.get("id");e.localData.checkLoginAdmin();const i=yield e.localData.adminInfo(localStorage.getItem("token"));e.localDataSource=e.localData.getAdminlocalData(),e.firstName=i.data.firstName;try{const i=yield e.service.adminWithdrawHistory({userId:t},localStorage.getItem("token"));200==i.code&&(e.historyData=!0,e.txData=i.data)}catch(a){e.historyData=!1}})()}logout(){localStorage.clear(),this.router.navigate(["/super-administrator"])}}return e.\u0275fac=function(t){return new(t||e)(g.Y36(r.F0),g.Y36(o.qu),g.Y36(r.gz),g.Y36(d._W),g.Y36(n.v),g.Y36(s.U))},e.\u0275cmp=g.Xpm({type:e,selectors:[["app-userWithdrawhistory"]],decls:194,vars:4,consts:[[1,"main-body","app","sidebar-mini","light-mode","ltr"],[1,"horizontalMenucontainer"],["id","global-loader",2,"display","none"],["src","css/loader.svg","alt","loader"],[1,"page"],[1,"page-main"],[1,"app-header","header","top-header"],[1,"container-fluid","main-container"],[1,"d-flex"],[1,"dropdown","side-nav"],["data-bs-toggle","sidebar",1,"app-sidebar__toggle"],["href","javascript:void(0)",1,"open-toggle"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"header-icon"],["x1","3","y1","12","x2","21","y2","12"],["x1","3","y1","6","x2","21","y2","6"],["x1","3","y1","18","x2","21","y2","18"],["href","javascript:void(0)",1,"close-toggle"],["xmlns","http://www.w3.org/2000/svg","height","24","viewBox","0 0 24 24","width","24",1,"header-icon"],["d","M0 0h24v24H0V0z","fill","none"],["d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"],["href","",1,"header-brand"],["src","assets/images/logo.svg","alt","Grawmaxx logo",1,"header-brand-img","desktop-lgo"],["src","assets/images/logo.svg","alt","Grawmaxx logo",1,"header-brand-img","dark-logo"],["src","css/favicon.png","alt","Grawmaxx logo",1,"header-brand-img","mobile-logo"],["src","css/favicon1.png","alt","Grawmaxx logo",1,"header-brand-img","darkmobile-logo"],[1,"d-flex","order-lg-2","ms-lg-auto"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent-4","aria-controls","navbarSupportedContent-4","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","navresponsive-toggler","d-lg-none"],[1,"navbar-toggler-icon","fe","fe-more-vertical"],[1,"navbar","navbar-expand-lg","navbar-nav-right","responsive-navbar","navbar-dark","p-0"],["id","navbarSupportedContent-4",1,"collapse","navbar-collapse"],["href","javascript:void(0)","data-bs-toggle","search",1,"nav-link","nav-link-lg","d-lg-none","navsearch"],["x","1008","y","1248","viewBox","0 0 24 24","height","100%","width","100%","preserveAspectRatio","xMidYMid meet","focusable","false",1,"header-icon","search-icon"],["d","M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"],[1,"dropdown","profile-dropdown"],["href","javascript:void(0)","data-bs-toggle","dropdown",1,"nav-link","icon","leading-none"],["src","assets/images/user.png","alt","img",1,"avatar","avatar-md","brround"],[1,"dropdown-menu","dropdown-menu-end","dropdown-menu-arrow","animated"],[1,"text-center"],["href","javascript:void(0)",1,"dropdown-item","text-center","user","pb-0","font-weight-bold"],[1,"dropdown-divider"],["routerLink","/profile",1,"dropdown-item","d-flex"],["x","1008","y","1248","viewBox","0 0 24 24","height","100%","width","100%","preserveAspectRatio","xMidYMid meet","focusable","false",1,"header-icon","me-3"],["d","M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z","opacity",".3"],["cx","12","cy","8","opacity",".3","r","2"],["d","M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"],[1,"mt-1"],["routerLink","/setting",1,"dropdown-item","d-flex"],["opacity",".3","d","M19.28,8.6 L18.58,7.39 L17.31,7.9 L16.25,8.33 L15.34,7.63 C14.95,7.33 14.54,7.09 14.11,6.92 L13.05,6.49 L12.89,5.36 L12.7,4 L11.3,4 L11.11,5.35 L10.95,6.48 L9.89,6.92 C9.48,7.09 9.07,7.33 8.64,7.65 L7.74,8.33 L6.69,7.91 L5.42,7.39 L4.72,8.6 L5.8,9.44 L6.69,10.14 L6.55,11.27 C6.52,11.57 6.5,11.8 6.5,12 C6.5,12.2 6.52,12.43 6.55,12.73 L6.69,13.86 L5.8,14.56 L4.72,15.4 L5.42,16.61 L6.69,16.1 L7.75,15.67 L8.66,16.37 C9.05,16.67 9.46,16.91 9.89,17.08 L10.95,17.51 L11.11,18.64 L11.3,20 L12.69,20 L12.88,18.65 L13.04,17.52 L14.1,17.09 C14.51,16.92 14.92,16.68 15.35,16.36 L16.25,15.68 L17.29,16.1 L18.56,16.61 L19.26,15.4 L18.18,14.56 L17.29,13.86 L17.43,12.73 C17.47,12.42 17.48,12.21 17.48,12 C17.48,11.79 17.46,11.57 17.43,11.27 L17.29,10.14 L18.18,9.44 L19.28,8.6 Z M12,16 C9.79,16 8,14.21 8,12 C8,9.79 9.79,8 12,8 C14.21,8 16,9.79 16,12 C16,14.21 14.21,16 12,16 Z"],["d","M19.43,12.98 C19.47,12.66 19.5,12.34 19.5,12 C19.5,11.66 19.47,11.34 19.43,11.02 L21.54,9.37 C21.73,9.22 21.78,8.95 21.66,8.73 L19.66,5.27 C19.57,5.11 19.4,5.02 19.22,5.02 C19.16,5.02 19.1,5.03 19.05,5.05 L16.56,6.05 C16.04,5.65 15.48,5.32 14.87,5.07 L14.49,2.42 C14.46,2.18 14.25,2 14,2 L10,2 C9.75,2 9.54,2.18 9.51,2.42 L9.13,5.07 C8.52,5.32 7.96,5.66 7.44,6.05 L4.95,5.05 C4.89,5.03 4.83,5.02 4.77,5.02 C4.6,5.02 4.43,5.11 4.34,5.27 L2.34,8.73 C2.21,8.95 2.27,9.22 2.46,9.37 L4.57,11.02 C4.53,11.34 4.5,11.67 4.5,12 C4.5,12.33 4.53,12.66 4.57,12.98 L2.46,14.63 C2.27,14.78 2.22,15.05 2.34,15.27 L4.34,18.73 C4.43,18.89 4.6,18.98 4.78,18.98 C4.84,18.98 4.9,18.97 4.95,18.95 L7.44,17.95 C7.96,18.35 8.52,18.68 9.13,18.93 L9.51,21.58 C9.54,21.82 9.75,22 10,22 L14,22 C14.25,22 14.46,21.82 14.49,21.58 L14.87,18.93 C15.48,18.68 16.04,18.34 16.56,17.95 L19.05,18.95 C19.11,18.97 19.17,18.98 19.23,18.98 C19.4,18.98 19.57,18.89 19.66,18.73 L21.66,15.27 C21.78,15.05 21.73,14.78 21.54,14.63 L19.43,12.98 Z M17.45,11.27 C17.49,11.58 17.5,11.79 17.5,12 C17.5,12.21 17.48,12.43 17.45,12.73 L17.31,13.86 L18.2,14.56 L19.28,15.4 L18.58,16.61 L17.31,16.1 L16.27,15.68 L15.37,16.36 C14.94,16.68 14.53,16.92 14.12,17.09 L13.06,17.52 L12.9,18.65 L12.7,20 L11.3,20 L11.11,18.65 L10.95,17.52 L9.89,17.09 C9.46,16.91 9.06,16.68 8.66,16.38 L7.75,15.68 L6.69,16.11 L5.42,16.62 L4.72,15.41 L5.8,14.57 L6.69,13.87 L6.55,12.74 C6.52,12.43 6.5,12.2 6.5,12 C6.5,11.8 6.52,11.57 6.55,11.27 L6.69,10.14 L5.8,9.44 L4.72,8.6 L5.42,7.39 L6.69,7.9 L7.73,8.32 L8.63,7.64 C9.06,7.32 9.47,7.08 9.88,6.91 L10.94,6.48 L11.1,5.35 L11.3,4 L12.69,4 L12.88,5.35 L13.04,6.48 L14.1,6.91 C14.53,7.09 14.93,7.32 15.33,7.62 L16.24,8.32 L17.3,7.89 L18.57,7.38 L19.27,8.59 L18.2,9.44 L17.31,10.14 L17.45,11.27 Z M12,8 C9.79,8 8,9.79 8,12 C8,14.21 9.79,16 12,16 C14.21,16 16,14.21 16,12 C16,9.79 14.21,8 12,8 Z M12,14 C10.9,14 10,13.1 10,12 C10,10.9 10.9,10 12,10 C13.1,10 14,10.9 14,12 C14,13.1 13.1,14 12,14 Z"],[1,"dropdown-item","d-flex",3,"click"],["d","M0 0h24v24H0V0zm0 0h24v24H0V0z","fill","none"],["d","M6 20h12V10H6v10zm2-6h3v-3h2v3h3v2h-3v3h-2v-3H8v-2z","opacity",".3"],["d","M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10zm-7-1h2v-3h3v-2h-3v-3h-2v3H8v2h3z"],["data-bs-toggle","sidebar",1,"app-sidebar__overlay"],[1,"sticky",2,"margin-bottom","0px"],[1,"app-sidebar","sidebar-scroll","ps","ps--active-y"],[1,"main-sidebar-header","active"],["href","",1,"desktop-logo","logo-light","active"],["src","assets/images/logo.svg","alt","logo",1,"main-logo"],["href","",1,"desktop-logo","logo-dark","active"],["src","css/logo1.png","alt","logo",1,"main-logo"],["href","",1,"logo-icon","mobile-logo","icon-light","active"],["src","css/favicon.png","alt","logo"],["href","",1,"logo-icon","mobile-logo","icon-dark","active"],["src","css/favicon1.png","alt","logo"],[1,"main-sidemenu","is-expanded"],[1,"app-sidebar__user"],[1,"dropdown","user-pro-body","text-center"],[1,"user-pic"],["alt","user-img","src","assets/images/user.png",1,"avatar","avatar-xl","brround","mb-1"],[1,"user-info","text-center"],[1,"mb-1","font-weight-bold"],["id","slide-left",1,"slide-left","disabled","active","d-none"],["xmlns","http://www.w3.org/2000/svg","fill","#7b8191","width","24","height","24","viewBox","0 0 24 24"],["d","M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"],[1,"side-menu","open",2,"margin-right","0px","margin-left","0px"],[1,"slide","is-expanded"],["data-bs-toggle","slide","routerLink","/admin-dashboard",1,"side-menu__item","active","is-expanded"],["xmlns","http://www.w3.org/2000/svg","width","24","height","26","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"side-menu__icon"],["d","M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"],["points","9 22 9 12 15 12 15 22"],[1,"side-menu__label"],[1,"fa","fa-angle-right"],["data-bs-toggle","slide","routerLink","/products",1,"side-menu__item","active","is-expanded"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"side-menu__icon"],["points","12 2 2 7 12 12 22 7 12 2"],["points","2 17 12 22 22 17"],["points","2 12 12 17 22 12"],["data-bs-toggle","slide","routerLink","/users",1,"side-menu__item","active","is-expanded"],["x","3","y","3","width","7","height","7"],["x","14","y","3","width","7","height","7"],["x","14","y","14","width","7","height","7"],["x","3","y","14","width","7","height","7"],["data-bs-toggle","slide","routerLink","/withdraw-data",1,"side-menu__item","active","is-expanded"],["data-bs-toggle","slide","routerLink","/change-email",1,"side-menu__item","active","is-expanded"],["data-bs-toggle","slide","routerLink","/reset-two-fa",1,"side-menu__item","active","is-expanded"],["d","M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"],["points","3.27 6.96 12 12.01 20.73 6.96"],["x1","12","y1","22.08","x2","12","y2","12"],["id","slide-right",1,"slide-right"],["d","M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"],[1,"ps__rail-x",2,"left","0px","bottom","0px"],["tabindex","0",1,"ps__thumb-x",2,"left","0px","width","0px"],[1,"ps__rail-y",2,"top","0px","height","668px","right","0px"],["tabindex","0",1,"ps__thumb-y",2,"top","0px","height","505px"],[1,"jumps-prevent",2,"padding-top","0px"],[1,"app-content","main-content"],[1,"side-app"],[1,"page-header"],[1,"page-leftheader"],[1,"page-title"],[1,"row"],[1,"col-xl-12","col-lg-12","col-md-12"],["class","card",4,"ngIf"],[1,"footer"],[1,"container"],[1,"row","align-items-center","flex-row-reverse"],[1,"col-md-12","col-sm-12","mt-3","mt-lg-0","text-center"],["href","javascript:void(0);",1,"text-primary"],[1,"card"],[1,"card-body"],[1,""],[1,"table-responsive"],[1,"table","card-table","table-vcenter","text-nowrap","mb-0","border"],[1,"wd-lg-10p"],[1,"wd-lg-20p","text-center"],[4,"ngFor","ngForOf"],[1,"font-weight-bold"]],template:function(e,t){1&e&&(g.TgZ(0,"body",0),g.TgZ(1,"div",1),g.TgZ(2,"div",2),g._UZ(3,"img",3),g.qZA(),g.TgZ(4,"div",4),g.TgZ(5,"div",5),g.TgZ(6,"div",6),g.TgZ(7,"div",7),g.TgZ(8,"div",8),g.TgZ(9,"div",9),g.TgZ(10,"div",10),g.TgZ(11,"a",11),g.O4$(),g.TgZ(12,"svg",12),g._UZ(13,"line",13),g._UZ(14,"line",14),g._UZ(15,"line",15),g.qZA(),g.qZA(),g.kcU(),g.TgZ(16,"a",16),g.O4$(),g.TgZ(17,"svg",17),g._UZ(18,"path",18),g._UZ(19,"path",19),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.kcU(),g.TgZ(20,"a",20),g._UZ(21,"img",21),g._UZ(22,"img",22),g._UZ(23,"img",23),g._UZ(24,"img",24),g.qZA(),g.TgZ(25,"div",25),g.TgZ(26,"button",26),g._UZ(27,"span",27),g.qZA(),g.TgZ(28,"div",28),g.TgZ(29,"div",29),g.TgZ(30,"div",8),g.TgZ(31,"a",30),g.O4$(),g.TgZ(32,"svg",31),g._UZ(33,"path",18),g._UZ(34,"path",32),g.qZA(),g.qZA(),g.kcU(),g.TgZ(35,"div",33),g.TgZ(36,"a",34),g.TgZ(37,"span"),g._UZ(38,"img",35),g.qZA(),g.qZA(),g.TgZ(39,"div",36),g.TgZ(40,"div",37),g.TgZ(41,"a",38),g._uU(42),g.qZA(),g._UZ(43,"div",39),g.qZA(),g.TgZ(44,"a",40),g.O4$(),g.TgZ(45,"svg",41),g._UZ(46,"path",18),g._UZ(47,"path",42),g._UZ(48,"circle",43),g._UZ(49,"path",44),g.qZA(),g.kcU(),g.TgZ(50,"div",45),g._uU(51,"Profile"),g.qZA(),g.qZA(),g.TgZ(52,"a",46),g.O4$(),g.TgZ(53,"svg",41),g._UZ(54,"path",47),g._UZ(55,"path",48),g.qZA(),g.kcU(),g.TgZ(56,"div",45),g._uU(57,"Settings"),g.qZA(),g.qZA(),g.TgZ(58,"a",49),g.NdJ("click",function(){return t.logout()}),g.O4$(),g.TgZ(59,"svg",41),g._UZ(60,"path",50),g._UZ(61,"path",51),g._UZ(62,"path",52),g.qZA(),g.kcU(),g.TgZ(63,"div",45),g._uU(64,"Sign Out"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g._UZ(65,"div",53),g.TgZ(66,"div",54),g.TgZ(67,"aside",55),g.TgZ(68,"div",56),g.TgZ(69,"a",57),g._UZ(70,"img",58),g.qZA(),g.TgZ(71,"a",59),g._UZ(72,"img",60),g.qZA(),g.TgZ(73,"a",61),g._UZ(74,"img",62),g.qZA(),g.TgZ(75,"a",63),g._UZ(76,"img",64),g.qZA(),g.qZA(),g.TgZ(77,"div",65),g.TgZ(78,"div",66),g.TgZ(79,"div",67),g.TgZ(80,"div",68),g._UZ(81,"img",69),g.qZA(),g.TgZ(82,"div",70),g.TgZ(83,"h5",71),g._uU(84),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(85,"div",72),g.O4$(),g.TgZ(86,"svg",73),g._UZ(87,"path",74),g.qZA(),g.qZA(),g.kcU(),g.TgZ(88,"ul",75),g.TgZ(89,"li",76),g.TgZ(90,"a",77),g.O4$(),g.TgZ(91,"svg",78),g._UZ(92,"path",79),g._UZ(93,"polyline",80),g.qZA(),g.kcU(),g.TgZ(94,"span",81),g._uU(95,"Admin Dashboard"),g.qZA(),g._UZ(96,"i",82),g.qZA(),g.qZA(),g.TgZ(97,"li",76),g.TgZ(98,"a",83),g.O4$(),g.TgZ(99,"svg",84),g._UZ(100,"polygon",85),g._UZ(101,"polyline",86),g._UZ(102,"polyline",87),g.qZA(),g.kcU(),g.TgZ(103,"span",81),g._uU(104,"Packages"),g.qZA(),g._UZ(105,"i",82),g.qZA(),g.qZA(),g.TgZ(106,"li",76),g.TgZ(107,"a",88),g.O4$(),g.TgZ(108,"svg",84),g._UZ(109,"rect",89),g._UZ(110,"rect",90),g._UZ(111,"rect",91),g._UZ(112,"rect",92),g.qZA(),g.kcU(),g.TgZ(113,"span",81),g._uU(114,"Users"),g.qZA(),g._UZ(115,"i",82),g.qZA(),g.qZA(),g.TgZ(116,"li",76),g.TgZ(117,"a",93),g.O4$(),g.TgZ(118,"svg",84),g._UZ(119,"rect",89),g._UZ(120,"rect",90),g._UZ(121,"rect",91),g._UZ(122,"rect",92),g.qZA(),g.kcU(),g.TgZ(123,"span",81),g._uU(124,"Withdraw History"),g.qZA(),g._UZ(125,"i",82),g.qZA(),g.qZA(),g.TgZ(126,"li",76),g.TgZ(127,"a",93),g.O4$(),g.TgZ(128,"svg",84),g._UZ(129,"rect",89),g._UZ(130,"rect",90),g._UZ(131,"rect",91),g._UZ(132,"rect",92),g.qZA(),g.kcU(),g.TgZ(133,"span",81),g._uU(134,"Pending History"),g.qZA(),g._UZ(135,"i",82),g.qZA(),g.qZA(),g.TgZ(136,"li",76),g.TgZ(137,"a",94),g.O4$(),g.TgZ(138,"svg",84),g._UZ(139,"rect",89),g._UZ(140,"rect",90),g._UZ(141,"rect",91),g._UZ(142,"rect",92),g.qZA(),g.kcU(),g.TgZ(143,"span",81),g._uU(144,"Change Email ID"),g.qZA(),g._UZ(145,"i",82),g.qZA(),g.qZA(),g.TgZ(146,"li",76),g.TgZ(147,"a",88),g.O4$(),g.TgZ(148,"svg",84),g._UZ(149,"rect",89),g._UZ(150,"rect",90),g._UZ(151,"rect",91),g._UZ(152,"rect",92),g.qZA(),g.kcU(),g.TgZ(153,"span",81),g._uU(154,"Core To Core"),g.qZA(),g._UZ(155,"i",82),g.qZA(),g.qZA(),g.TgZ(156,"li",76),g.TgZ(157,"a",95),g.O4$(),g.TgZ(158,"svg",84),g._UZ(159,"path",96),g._UZ(160,"polyline",97),g._UZ(161,"line",98),g.qZA(),g.kcU(),g.TgZ(162,"span",81),g._uU(163,"Two-FA-Requests"),g.qZA(),g._UZ(164,"i",82),g.qZA(),g.qZA(),g.qZA(),g.TgZ(165,"div",99),g.O4$(),g.TgZ(166,"svg",73),g._UZ(167,"path",100),g.qZA(),g.qZA(),g.qZA(),g.kcU(),g.TgZ(168,"div",101),g._UZ(169,"div",102),g.qZA(),g.TgZ(170,"div",103),g._UZ(171,"div",104),g.qZA(),g.qZA(),g.qZA(),g._UZ(172,"div",105),g.TgZ(173,"div",106),g.TgZ(174,"div",107),g.TgZ(175,"div",7),g.TgZ(176,"div",108),g.TgZ(177,"div",109),g._UZ(178,"br"),g._UZ(179,"br"),g.TgZ(180,"h4",110),g._uU(181,"Withdrawal History"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(182,"div",111),g.TgZ(183,"div",112),g.YNc(184,c,31,1,"div",113),g.YNc(185,p,4,0,"div",113),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(186,"footer",114),g.TgZ(187,"div",115),g.TgZ(188,"div",116),g.TgZ(189,"div",117),g._uU(190," Copyright \xa9 2023 "),g.TgZ(191,"a",118),g._uU(192,"Growmaxx"),g.qZA(),g._uU(193,". All rights reserved. "),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&e&&(g.xp6(42),g.Oqu(t.firstName),g.xp6(42),g.Oqu(t.firstName),g.xp6(100),g.Q6J("ngIf",t.historyData),g.xp6(1),g.Q6J("ngIf",!t.historyData))},directives:[r.yS,a.O5,a.sg],styles:[".custom-data[_ngcontent-%COMP%]{background:#fff;padding:20px;margin-top:10px}"]}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g.oAB({type:e}),e.\u0275inj=g.cJS({imports:[[r.Bz.forChild(v)],r.Bz]}),e})(),u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g.oAB({type:e}),e.\u0275inj=g.cJS({imports:[[a.ez,h,o.u5,o.UX,d.Rh.forRoot({timeOut:2500,preventDuplicates:!0})]]}),e})()}}]);