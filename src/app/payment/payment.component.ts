import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { BlockchainService } from '../service/blockchain/blockchain.service';
import { PaymentService } from '../service/payment/payment.service';
import { CommonService } from '../service/commonservice/common.service'
import { ToastrService } from 'ngx-toastr';
import Web3 from "web3";
declare var window: any;
declare var $: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  ethereum: any;
  metamaskConnected: any = false
  currentAddress:any;
  role = true;
  silver:any;
  gold:any;
  daimond:any;
  platinum:any;
  constructor(
    private toastr: ToastrService,
    private BlockchainService: BlockchainService,
    private service:PaymentService,
    private router: Router,
    private route: ActivatedRoute,
    private apiCall:CommonService
  ) {
    this.fetchPackage();
  }
  async ngOnInit(){
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      this.toastr.warning("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
    this.currentAddress = await this.BlockchainService.getAccount();
  }

  async connectToMetamask() {
    await window.ethereum.enable();
    this.metamaskConnected = true;
  };
  async fetchPackage(){
    this.apiCall.fetchPacakge().then((res:any) => {
      if(res){
         this.silver = res.data.silver;
         this.gold = res.data.gold;
         this.daimond = res.data.daimond;
         this.platinum = res.data.platinum;
      }
    }).catch((err:any) => {
      console.log("errr---", err)
    })
  }

  async makePayment(data:any, name:any){
    const token= this.route.snapshot.paramMap.get('token');
    return new Promise((resolve, reject) => {     
      if (window.ethereum) {
        this.BlockchainService.makePayment(data).then((res:any) => {
          if(res){
            const payment = { blockHash : res.blockHash, blockNumber: res.blockNumber, from: res.from, to: res.to, amount: res.events.Transfer.returnValues.value/1000000000000000000, paymentType: "Deposit", paymentMethod: "Crypto", packageName: name , paymentCoin: "USDT"}
            const data:any =  this.service.paymentCall(payment, token)
            if(data){
              this.router.navigate(['/dashboard/']);
              resolve(res)
            }
          }
        }).catch((err:any) => {
          this.toastr.error("Something went wrong ! If your amount is deducted then  please contact to admin !!");
        })
      }
    })
  }
}
