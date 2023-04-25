import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { BlockchainService } from '../app/service/blockchain/blockchain.service';
import Web3 from "web3";
declare var window: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Growmax';
  constructor(
    private BlockchainService: BlockchainService
  ) {}
 async ngOnInit() {
  
  }
  async network(network:any){
    localStorage.setItem('network', network);
    window.location.reload();
  }
}
