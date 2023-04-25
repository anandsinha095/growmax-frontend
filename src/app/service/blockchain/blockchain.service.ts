import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { CONTRACT_ABI, BNB_TOKEN_ADDRESS } from "../../abis";
declare var window: any;
@Injectable({
  providedIn: "root",
})
export class BlockchainService {
  public network = localStorage.getItem('network');
  
  private enable: any;
  public account: any = null;
  abi: any = CONTRACT_ABI;
  contractAddress = BNB_TOKEN_ADDRESS ;
  chainId =  97;

  constructor(
    private toastr: ToastrService
    ) {}
  /* create policy by lender */
  async getAccount(): Promise<any> {
    console.log("transfer.service :: getAccount :: start");
    if (this.account == null) {
      this.account = (await new Promise((resolve, reject) => {
        window.web3.eth.getAccounts((err: any, retAccount: any) => {
          if (retAccount.length > 0) {
            this.account = retAccount[0];
            localStorage.setItem("walletToken", this.account);
            resolve(this.account);
          } else {
            // alert('transfer.service :: getAccount :: no accounts found.');
            reject("No accounts found.");
          }
          if (err != null) {
            alert("transfer.service :: getAccount :: error retrieving account");
            reject("Error retrieving account");
          }
        });
      })) as Promise<any>;
    }
    return Promise.resolve(this.account);
  }

  /********** Land Registry************* */
  async registerSeller(data:any){
    try {
      const contract = new window.web3.eth.Contract(
        this.abi,
        this.contractAddress
      );
      console.log(">>>>>>>contract", contract);
      
      let userAddress = await this.getAccount();
      return new Promise((resolve, reject) => {
        contract.methods
          .registerSeller(data.fullname, data.age, data.aadhar, data.pan, data.ownerLand, "Aadhar Doc")
          .send({
            from: userAddress.toString(),
          })
          .then((data: any) => {
            this.toastr.success("Seller Register successfully");
            resolve(data);
          })
          .catch((err: any) => {
            this.toastr.error("Something went wrong");
            reject(err);
          });
     });
    } catch (error: any) {
      console.log(error);
    }
  }
  async makePayment(amount:any){
    try {
      const contract = new window.web3.eth.Contract(
        this.abi,
        this.contractAddress
      );
      console.log("this.web3.utils.toWei(amount.toString())",  window.web3.utils.toWei((amount).toString()));
      let userAddress = await this.getAccount(); 
        return new Promise((resolve, reject) => {
          //window.web3.eth.sendTransaction({from: userAddress, to: contract, value: amount})
          contract.methods
            .transfer("0xa71E638D7ff741A99A3B7A073087d55014987430", window.web3.utils.toWei((amount).toString()))
            .send({
              from: userAddress.toString()
            })
            .then((data: any) => {
              this.toastr.success("Payment done successfully");
              resolve(data);
            })
            .catch((err: any) => {
              this.toastr.error("Something went wrong");
              reject(err);
            });
       });
      } catch (error: any) {
        console.log(error);
      }
  }

}