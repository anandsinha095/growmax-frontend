(self.webpackChunkglobal=self.webpackChunkglobal||[]).push([[934],{7934:function(e,t,n){"use strict";n.r(t),n.d(t,{PaymentModule:function(){return T}});var o=n(1116),a=n(1462),i=n(1522),c=n(6304),r=n(9115),d=n.n(r),s=n(8619),l=n(518),g=n(7744),m=n(272),u=n(2893);function p(e,t){1&e&&(s.TgZ(0,"div",28),s._UZ(1,"img",29),s.qZA())}function Z(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"a",30),s.NdJ("click",function(){return s.CHM(e),s.oxw().connectToMetamask()}),s._uU(1,"Connect Wallet"),s.qZA()}}function b(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"div",31),s.TgZ(1,"a",32),s.NdJ("click",function(){const t=s.CHM(e).$implicit;return s.oxw().makePayment(t.price,t.name)}),s._uU(2),s.qZA(),s.qZA()}if(2&e){const e=t.$implicit;s.xp6(2),s.hij("$",e.price,"")}}function f(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"div",31),s.TgZ(1,"a",32),s.NdJ("click",function(){const t=s.CHM(e).$implicit;return s.oxw().makePayment(t.price,t.name)}),s._uU(2),s.qZA(),s.qZA()}if(2&e){const e=t.$implicit;s.xp6(2),s.hij("$",e.price,"")}}function h(e,t){1&e&&(s.TgZ(0,"div",33),s.TgZ(1,"div",34),s.TgZ(2,"div",35),s.TgZ(3,"div",36),s._UZ(4,"img",37),s.TgZ(5,"h4",38),s._uU(6,"Please connect to Metamask first!"),s.qZA(),s.TgZ(7,"h5",39),s._uU(8," If not installed, please follow below link to install it."),s.qZA(),s.TgZ(9,"h4",38),s.TgZ(10,"a",40),s._uU(11,"https://metamask.io/download"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA())}function k(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"div",41),s.TgZ(1,"div",34),s.TgZ(2,"div",42),s.TgZ(3,"div",43),s._UZ(4,"img",44),s.TgZ(5,"h4",38),s._uU(6,"Please connect to Metamask first!"),s.qZA(),s.TgZ(7,"button",45),s.NdJ("click",function(){return s.CHM(e),s.oxw().connectToMetamask()}),s._uU(8,"Connect"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()}}const v=[{path:"",component:(()=>{class e{constructor(e,t,n,o,a,i){this.toastr=e,this.BlockchainService=t,this.service=n,this.router=o,this.route=a,this.apiCall=i,this.metamaskConnected=!1,this.role=!0,this.metamaskLogin=!1,this.fetchPackage()}ngOnInit(){var e=this;return(0,c.Z)(function*(){window.ethereum?(window.web3=new(d())(window.ethereum),e.metamaskConnected=!0,yield e.BlockchainService.getAccount().then(t=>{t&&(e.currentAddress=t,e.metamaskLogin=!0)}).catch(t=>{e.metamaskConnected=!0})):window.web3?(window.web3=new(d())(window.web3.currentProvider),e.metamaskConnected=!0):(e.metamaskConnected=!1,e.toastr.warning("Non-Ethereum browser detected. You should consider trying MetaMask!"))})()}connectToMetamask(){var e=this;return(0,c.Z)(function*(){yield window.ethereum.enable(),e.metamaskLogin=!0})()}fetchPackage(){var e=this;return(0,c.Z)(function*(){e.apiCall.fetchPacakge().then(t=>{t&&(e.silver=t.data.silver,e.gold=t.data.gold)}).catch(e=>{console.log("errr---",e)})})()}makePayment(e,t){var n=this;return(0,c.Z)(function*(){if(null==n.currentAddress)return n.metamaskLogin=!1;if(56!=(yield window.ethereum.request({method:"eth_chainId"})))return n.toastr.error("Please Select BNB Mainnet network before payment !!");n.metamaskLogin=!0,n.isLoading=!0;let o=n.route.snapshot.paramMap.get("token");return new Promise((a,i)=>{window.ethereum&&n.BlockchainService.makePayment(e).then(function(){var e=(0,c.Z)(function*(e){if(e){const i={blockHash:e.blockHash,blockNumber:e.blockNumber,from:e.from,to:e.to,amount:e.events.Transfer.returnValues.value/1e18,paymentType:"Deposit",paymentMethod:"Crypto",packageName:t,paymentCoin:"USDT"},c=yield n.service.paymentCall(i,o);c&&(localStorage.setItem("token",c.data),n.isLoading=!1,n.router.navigate(["/dashboard/"]),a(e))}});return function(t){return e.apply(this,arguments)}}()).catch(e=>{n.isLoading=!1,n.toastr.error("Something went wrong ! If your amount is deducted then  please contact to admin !!")})})})()}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(l._W),s.Y36(g.A),s.Y36(m.t),s.Y36(i.F0),s.Y36(i.gz),s.Y36(u.v))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-payment"]],decls:37,vars:6,consts:[[1,"horizontalMenucontainer"],["class","global-loader disable-background","style","display: block;",4,"ngIf"],[1,"page",2,"background-image","url('assets/images/bg1.jpeg')"],[1,"page-main"],[1,"app-content","main-content","custom-data"],[1,"side-app"],[1,"container","main-container"],[1,"page-header"],[1,"col-md-12","text-center"],[1,"page-title"],[1,"breadcrumb-icon"],[1,"col-md-9"],[1,"col-md-3"],["class","btn btn-lg btn-danger mt-4",3,"click",4,"ngIf"],[1,"pricing-tabs","mt-7","br-7","px-5","pt-5","pb-0"],[1,"tab-content"],[1,"tab-pane","pb-0","active","show"],[1,"row","row-sm","pricing-style01"],[1,"col-sm-6","col-xl-2"],[1,"col-sm-6","col-xl-4"],[1,"card","mg-b-20","mg-lg-b-0"],[1,"card-body","text-center","h-472"],[1,"bg-light","p-2","text-uppercase","font-weight-semibold","fs-16","br-3"],[1,"display-4","font-weight-semibold","my-4"],["class","text-center mt-6",4,"ngFor","ngForOf"],[1,"card-body","text-center"],["class","modal fade show  disable-background","style","display: block;","aria-modal","true","role","dialog",4,"ngIf"],["class","modal fade effect-slide-in-bottom show disable-background","style","display: block;","aria-modal","true","role","dialog",4,"ngIf"],[1,"global-loader","disable-background",2,"display","block"],["src","assets/images/loader.svg","alt","loader"],[1,"btn","btn-lg","btn-danger","mt-4",3,"click"],[1,"text-center","mt-6"],[1,"btn","btn-lg","btn-primary","btn-block",3,"click"],["aria-modal","true","role","dialog",1,"modal","fade","show","disable-background",2,"display","block"],["role","document",1,"modal-dialog","modal-dialog-centered","text-center"],[1,"modal-content","tx-size-sm"],[1,"modal-body","text-center","p-4"],["src","assets/images/remove.png",1,"fe","fe-x-circle","fs-100","text-danger","lh-1","mb-5","d-inline-block"],[1,"text-danger"],[1,"mg-b-20","mg-x-20"],["href","https://metamask.io/download","target","_blank"],["aria-modal","true","role","dialog",1,"modal","fade","effect-slide-in-bottom","show","disable-background",2,"display","block"],[1,"modal-content","modal-content-demo"],[1,"modal-body"],["src","assets/images/link.png",1,"fe","fe-x-circle","fs-100","text-danger","lh-1","mb-5","d-inline-block"],["aria-label","Close","type","button",1,"btn","btn-danger","pd-x-25",3,"click"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.YNc(1,p,2,0,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"div",3),s.TgZ(4,"div",4),s.TgZ(5,"div",5),s.TgZ(6,"div",6),s.TgZ(7,"div",7),s.TgZ(8,"div",8),s.TgZ(9,"h4",9),s._uU(10,"Welcome To Growmaxx."),s.qZA(),s.TgZ(11,"span",10),s._uU(12," Choose Your Package To Continue Growmax Journey"),s.qZA(),s.qZA(),s._UZ(13,"div",11),s.TgZ(14,"div",12),s.YNc(15,Z,2,0,"a",13),s.qZA(),s.qZA(),s.TgZ(16,"div",14),s.TgZ(17,"div",15),s.TgZ(18,"div",16),s.TgZ(19,"div",17),s._UZ(20,"div",18),s.TgZ(21,"div",19),s.TgZ(22,"div",20),s.TgZ(23,"div",21),s.TgZ(24,"div",22),s._uU(25,"BASIC "),s.qZA(),s._UZ(26,"div",23),s.YNc(27,b,3,1,"div",24),s.qZA(),s.qZA(),s.qZA(),s.TgZ(28,"div",19),s.TgZ(29,"div",20),s.TgZ(30,"div",25),s.TgZ(31,"div",22),s._uU(32,"MEDIUM "),s.qZA(),s._UZ(33,"div",23),s.YNc(34,f,3,1,"div",24),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.YNc(35,h,12,0,"div",26),s.YNc(36,k,9,0,"div",27),s.qZA(),s.qZA()),2&e&&(s.xp6(1),s.Q6J("ngIf",t.isLoading),s.xp6(14),s.Q6J("ngIf",0==t.metamaskConnected),s.xp6(12),s.Q6J("ngForOf",t.silver),s.xp6(7),s.Q6J("ngForOf",t.gold),s.xp6(1),s.Q6J("ngIf",!t.metamaskConnected),s.xp6(1),s.Q6J("ngIf",!t.metamaskLogin&&t.metamaskConnected))},directives:[o.O5,o.sg],styles:[".custom-data[_ngcontent-%COMP%]{margin-left:0!important}.global-loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;left:0;right:0;text-align:center;top:37%;margin:0 auto}.disable-background[_ngcontent-%COMP%]{position:fixed!important;top:0;left:0;background:#2d2d2d;opacity:.9;z-index:998;height:100%;width:100%}.h-472[_ngcontent-%COMP%]{height:472px}"]}),e})()}];let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[i.Bz.forChild(v)],i.Bz]}),e})(),T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[o.ez,w,a.u5,a.UX,l.Rh.forRoot({timeOut:2500,preventDuplicates:!0})]]}),e})()}}]);