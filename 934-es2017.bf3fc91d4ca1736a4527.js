(self.webpackChunkglobal=self.webpackChunkglobal||[]).push([[934],{7934:function(e,t,n){"use strict";n.r(t),n.d(t,{PaymentModule:function(){return b}});var a=n(1116),i=n(1462),o=n(1522),r=n(6304),c=n(9115),d=n.n(c),s=n(8619),l=n(518),g=n(7744),Z=n(272),u=n(2893);function m(e,t){1&e&&(s.TgZ(0,"div",35),s._UZ(1,"img",36),s.qZA())}function p(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"a",37),s.NdJ("click",function(){return s.CHM(e),s.oxw().connectToMetamask()}),s._uU(1,"Connect Wallet"),s.qZA()}}function h(e,t){1&e&&(s.TgZ(0,"div",38),s.TgZ(1,"div",39),s.TgZ(2,"div",40),s.TgZ(3,"div",41),s._UZ(4,"img",42),s.TgZ(5,"h4",43),s._uU(6,"Please connect to Metamask first!"),s.qZA(),s.TgZ(7,"h5",44),s._uU(8," If not installed, please follow below link to install it."),s.qZA(),s.TgZ(9,"h4",43),s.TgZ(10,"a",45),s._uU(11,"https://metamask.io/download"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA())}function T(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"div",46),s.TgZ(1,"div",39),s.TgZ(2,"div",47),s.TgZ(3,"div",48),s._UZ(4,"img",49),s.TgZ(5,"h4",43),s._uU(6,"Please connect to Metamask first!"),s.qZA(),s.TgZ(7,"button",50),s.NdJ("click",function(){return s.CHM(e),s.oxw().connectToMetamask()}),s._uU(8,"Connect"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()}}const f=[{path:"",component:(()=>{class e{constructor(e,t,n,a,i,o){this.toastr=e,this.BlockchainService=t,this.service=n,this.router=a,this.route=i,this.apiCall=o,this.metamaskConnected=!1,this.role=!0,this.metamaskLogin=!1,this.fetchPackage()}ngOnInit(){var e=this;return(0,r.Z)(function*(){window.ethereum?(window.web3=new(d())(window.ethereum),e.metamaskConnected=!0,yield e.BlockchainService.getAccount().then(t=>{t&&(e.currentAddress=t,e.metamaskLogin=!0)}).catch(t=>{e.metamaskConnected=!0})):window.web3?(window.web3=new(d())(window.web3.currentProvider),e.metamaskConnected=!0):(e.metamaskConnected=!1,e.toastr.warning("Non-Ethereum browser detected. You should consider trying MetaMask!"))})()}connectToMetamask(){var e=this;return(0,r.Z)(function*(){yield window.ethereum.enable(),e.metamaskLogin=!0})()}fetchPackage(){var e=this;return(0,r.Z)(function*(){e.apiCall.fetchPacakge().then(t=>{t&&(e.starter=t.data.starter,e.premium=t.data.premium,e.platinum=t.data.platinum)}).catch(e=>{console.log("errr---",e)})})()}makePayment(e,t){var n=this;return(0,r.Z)(function*(){if(null==n.currentAddress)return n.metamaskLogin=!1;if(56!=(yield window.ethereum.request({method:"eth_chainId"})))return n.toastr.error("Please Select BNB Mainnet network before payment !!");n.metamaskLogin=!0,n.isLoading=!0;let a=n.route.snapshot.paramMap.get("token");return new Promise((i,o)=>{window.ethereum&&n.BlockchainService.makePayment(e).then(function(){var e=(0,r.Z)(function*(e){if(e){const o={blockHash:e.transactionHash,blockNumber:e.blockNumber,from:e.from,to:e.to,amount:e.events.Transfer.returnValues.value/1e18,paymentType:"Deposit",paymentMethod:"Crypto",packageName:t,paymentCoin:"USDT"},r=yield n.service.paymentCall(o,a);r?(localStorage.setItem("token",r.data),n.isLoading=!1,n.router.navigate(["/dashboard/"]),i(e)):(n.isLoading=!1,n.toastr.error("Something went wrong ! If your amount is deducted then  please contact to admin !!"))}});return function(t){return e.apply(this,arguments)}}()).catch(e=>{n.isLoading=!1,n.toastr.error("Something went wrong ! If your amount is deducted then  please contact to admin !!")})})})()}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(l._W),s.Y36(g.A),s.Y36(Z.t),s.Y36(o.F0),s.Y36(o.gz),s.Y36(u.v))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-payment"]],decls:125,vars:10,consts:[[1,"horizontalMenucontainer"],["class","global-loader disable-background","style","display: block;",4,"ngIf"],[1,"page",2,"background-image","url('assets/images/bg1.jpeg')"],[1,"page-main"],[1,"app-content","main-content","custom-data"],[1,"side-app"],[1,"container","main-container"],[1,"page-header"],[1,"col-md-12","text-center"],[1,"page-title"],[1,"breadcrumb-icon"],[1,"col-md-9"],[1,"col-md-3"],["class","btn btn-lg btn-danger mt-4",3,"click",4,"ngIf"],[1,"pricing-tabs","mt-7","br-7","px-5","pt-5","pb-0"],[1,"row","text-center"],[1,"col-xl-4","col-md-6"],[1,"card","plan-card","custom-height"],[1,"card-block"],[1,"pt-4","pb-4"],[1,"fa","fa-plane","plan-icon","bg-primary"],[1,"text-uppercase","font-weight-semibold","text-primary"],[1,"plan-price","padding-b-15","display-4","mb-0","font-weight-semibold","f-32"],[1,"plan-div-border"],[1,"plan-features","pb-4","mt-4","text-muted","padding-t-b-30"],["href","javascript:void(0)",1,"btn","btn-lg","btn-primary","mt-4",3,"click"],[1,"card","plan-card"],[1,"fa","fa-trophy","plan-icon","bg-info"],[1,"text-uppercase","font-weight-semibold","text-info"],["href","javascript:void(0)",1,"btn","btn-lg","btn-info","mt-4",3,"click"],[1,"fa","fa-umbrella","plan-icon","bg-secondary"],[1,"text-uppercase","font-weight-semibold","text-secondary"],["href","javascript:void(0)",1,"btn","btn-lg","btn-secondary","mt-4",3,"click"],["class","modal fade show  disable-background","style","display: block;","aria-modal","true","role","dialog",4,"ngIf"],["class","modal fade effect-slide-in-bottom show disable-background","style","display: block;","aria-modal","true","role","dialog",4,"ngIf"],[1,"global-loader","disable-background",2,"display","block"],["src","assets/images/loader.svg","alt","loader"],[1,"btn","btn-lg","btn-danger","mt-4",3,"click"],["aria-modal","true","role","dialog",1,"modal","fade","show","disable-background",2,"display","block"],["role","document",1,"modal-dialog","modal-dialog-centered","text-center"],[1,"modal-content","tx-size-sm"],[1,"modal-body","text-center","p-4"],["src","assets/images/remove.png",1,"fe","fe-x-circle","fs-100","text-danger","lh-1","mb-5","d-inline-block"],[1,"text-danger"],[1,"mg-b-20","mg-x-20"],["href","https://metamask.io/download","target","_blank"],["aria-modal","true","role","dialog",1,"modal","fade","effect-slide-in-bottom","show","disable-background",2,"display","block"],[1,"modal-content","modal-content-demo"],[1,"modal-body"],["src","assets/images/link.png",1,"fe","fe-x-circle","fs-100","text-danger","lh-1","mb-5","d-inline-block"],["aria-label","Close","type","button",1,"btn","btn-danger","pd-x-25",3,"click"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.YNc(1,m,2,0,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"div",3),s.TgZ(4,"div",4),s.TgZ(5,"div",5),s.TgZ(6,"div",6),s.TgZ(7,"div",7),s.TgZ(8,"div",8),s.TgZ(9,"h4",9),s._uU(10,"Welcome To Growmaxx."),s.qZA(),s.TgZ(11,"span",10),s._uU(12," Choose Your Package To Continue Growmax Journey"),s.qZA(),s.qZA(),s._UZ(13,"div",11),s.TgZ(14,"div",12),s.YNc(15,p,2,0,"a",13),s.qZA(),s.qZA(),s.TgZ(16,"div",14),s.TgZ(17,"div",15),s.TgZ(18,"div",16),s.TgZ(19,"div",17),s.TgZ(20,"div",18),s.TgZ(21,"div",19),s.TgZ(22,"h1"),s._UZ(23,"i",20),s.qZA(),s.TgZ(24,"h6",21),s._uU(25),s.qZA(),s.qZA(),s.TgZ(26,"div"),s.TgZ(27,"h1",22),s._uU(28),s.qZA(),s._UZ(29,"div",23),s.qZA(),s.TgZ(30,"div",24),s.TgZ(31,"p"),s._uU(32," The world of trading "),s.qZA(),s.TgZ(33,"p"),s._uU(34," History of forex"),s.qZA(),s.TgZ(35,"p"),s._uU(36," Forex terminology details "),s.qZA(),s.TgZ(37,"p"),s._uU(38," Candlesticks"),s.qZA(),s.TgZ(39,"p"),s._uU(40," Technical Indicators"),s.qZA(),s.TgZ(41,"p"),s._uU(42," Support & Resistance"),s.qZA(),s.TgZ(43,"p"),s._uU(44," Fundamental & Technical analysis"),s.qZA(),s.TgZ(45,"p"),s._uU(46," Understanding TREND & Trend lines"),s.qZA(),s.TgZ(47,"p"),s._uU(48," 20 hours basic forex online class"),s.qZA(),s.TgZ(49,"a",25),s.NdJ("click",function(){return t.makePayment(t.starter.price,t.starter.name)}),s._uU(50,"Buy Now"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(51,"div",16),s.TgZ(52,"div",26),s.TgZ(53,"div",18),s.TgZ(54,"div",19),s.TgZ(55,"h1"),s._UZ(56,"i",27),s.qZA(),s.TgZ(57,"h6",28),s._uU(58),s.qZA(),s.qZA(),s.TgZ(59,"div"),s.TgZ(60,"h1",22),s._uU(61),s.qZA(),s._UZ(62,"div",23),s.qZA(),s.TgZ(63,"div",24),s.TgZ(64,"p"),s.TgZ(65,"strong"),s._uU(66,"All Basic Course "),s.qZA(),s.qZA(),s.TgZ(67,"p"),s._uU(68," Indicators details "),s.qZA(),s.TgZ(69,"p"),s._uU(70," Candlestick structure details"),s.qZA(),s.TgZ(71,"p"),s._uU(72," Important chart patterns"),s.qZA(),s.TgZ(73,"p"),s._uU(74," Volume details "),s.qZA(),s.TgZ(75,"p"),s._uU(76," Pivot Points "),s.qZA(),s.TgZ(77,"p"),s._uU(78," Smart money concepts"),s.qZA(),s.TgZ(79,"p"),s._uU(80," Understanding Divergence"),s.qZA(),s.TgZ(81,"p"),s._uU(82," 40 hours intermediate forex online class"),s.qZA(),s.TgZ(83,"p"),s.TgZ(84,"strong"),s._uU(85,"24/7"),s.qZA(),s._uU(86," Volume details "),s.qZA(),s.TgZ(87,"a",29),s.NdJ("click",function(){return t.makePayment(t.premium.price,t.premium.name)}),s._uU(88,"Buy Now"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(89,"div",16),s.TgZ(90,"div",17),s.TgZ(91,"div",18),s.TgZ(92,"div",19),s.TgZ(93,"h1"),s._UZ(94,"i",30),s.qZA(),s.TgZ(95,"h6",31),s._uU(96),s.qZA(),s.qZA(),s.TgZ(97,"div"),s.TgZ(98,"h1",22),s._uU(99),s.qZA(),s._UZ(100,"div",23),s.qZA(),s.TgZ(101,"div",24),s.TgZ(102,"p"),s.TgZ(103,"strong"),s._uU(104,"All Basic & Intermediate Course "),s.qZA(),s.qZA(),s.TgZ(105,"p"),s._uU(106,"Supply and demand trading strategy"),s.qZA(),s.TgZ(107,"p"),s._uU(108,"Fibonacci trading details "),s.qZA(),s.TgZ(109,"p"),s._uU(110,"Elliot Wave details "),s.qZA(),s.TgZ(111,"p"),s._uU(112,"Trading strategy details"),s.qZA(),s.TgZ(113,"p"),s._uU(114,"Risk Management Plan"),s.qZA(),s.TgZ(115,"p"),s._uU(116,"Trading psychology details education"),s.qZA(),s.TgZ(117,"p"),s._uU(118,"60 hours forex online class "),s.qZA(),s.TgZ(119,"p"),s._uU(120,"Personal assistance"),s.qZA(),s.TgZ(121,"a",32),s.NdJ("click",function(){return t.makePayment(t.platinum.price,t.platinum.name)}),s._uU(122,"Buy Now"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.YNc(123,h,12,0,"div",33),s.YNc(124,T,9,0,"div",34),s.qZA(),s.qZA()),2&e&&(s.xp6(1),s.Q6J("ngIf",t.isLoading),s.xp6(14),s.Q6J("ngIf",0==t.metamaskConnected),s.xp6(10),s.hij("",t.starter.name," "),s.xp6(3),s.hij("$",t.starter.price,""),s.xp6(30),s.Oqu(t.premium.name),s.xp6(3),s.hij("$",t.premium.price,""),s.xp6(35),s.Oqu(t.platinum.name),s.xp6(3),s.hij("$",t.platinum.price,""),s.xp6(24),s.Q6J("ngIf",!t.metamaskConnected),s.xp6(1),s.Q6J("ngIf",!t.metamaskLogin&&t.metamaskConnected))},directives:[a.O5],styles:[".custom-data[_ngcontent-%COMP%]{margin-left:0!important}.global-loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;left:0;right:0;text-align:center;top:37%;margin:0 auto}.disable-background[_ngcontent-%COMP%]{position:fixed!important;top:0;left:0;background:#2d2d2d;opacity:.9;z-index:998;height:100%;width:100%}.h-472[_ngcontent-%COMP%]{height:472px}.custom-height[_ngcontent-%COMP%]{height:746px}.f-32[_ngcontent-%COMP%]{font-size:32px!important}"]}),e})()}];let A=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[o.Bz.forChild(f)],o.Bz]}),e})(),b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[a.ez,A,i.u5,i.UX,l.Rh.forRoot({timeOut:2500,preventDuplicates:!0})]]}),e})()}}]);