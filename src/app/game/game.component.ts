import {Component, Input, OnInit} from '@angular/core';
import { Items } from '../../environments/items';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  coins: number = 70;

  cpc: number = 1;
  cps: number = 1;

  storeItems = Items.storeItems;
  upgradeItems = Items.upgradeItems;
  items: any;

  startDate = new Date();
  endDate = new Date();
  decimal: any;

  coinClick() {
    this.coins += this.cpc;
  }

  buyItem(index: number) {
    if (index >= this.storeItems.length) {
      this.upgradeItems.splice(index - this.storeItems.length, 1);
    } else {
      this.storeItems[index].count += 1;
      this.cps += this.storeItems[index].cps;
      this.storeItems[index].displayedPrize = Math.ceil(this.storeItems[index].prize * 1.15);
      this.storeItems[index].prize *= 1.15;
    }
  }

  buyItemClick(itemName: string) {
    this.storeItems.forEach((item, index) => {
      if (item.name === itemName) {
        if (this.coins >= item.displayedPrize) {
          this.coins -= item.displayedPrize;

          } else {
            //this.upgradeItems[index - this.storeItems.length].count += 1;
            this.upgradeItems.splice(index - this.storeItems.length, 1);
        }
      }
    });
  }

  constructor() { }

  ngOnInit() {

    setInterval(() => {

      this.endDate = new Date();
      const seconds = (this.endDate.getTime() - this.startDate.getTime()) / 1000;

      /**
       * bevor erstes storeItem gekauft wird muss startDate refresht werden sonst bekommt man beim ersten kauf instant coins weil seconds einen hohen wert hat
        */
      if (seconds > 11) {
        this.startDate = new Date();
      }

      if (seconds * this.cps > 1) {
        this.coins += Math.floor(seconds * this.cps);
        this.decimal = ((seconds * this.cps) % 1).toFixed(3);
        if (this.decimal > 1) {
          this.coins += Math.floor(this.decimal);
          this.decimal -= Math.floor(this.decimal);
        }
        this.startDate = new Date();
      }

    }, 25);

    setInterval(() => {
      for (const item of this.storeItems) {
        if (this.coins >= item.displayedPrize) {
          item.affordable = true;
        } else {
          item.affordable = false;
        }

        if (this.coins >= item.displayedPrize * 0.8) {
          item.isShown = true;
        }
      }

      for (const item of this.upgradeItems) {
        if (this.coins >= item.prize) {
          item.affordable = true;
        } else {
          item.affordable = false;
        }

        if (this.coins >= item.prize * 0.8) {
          item.isShown = true;
        }
      }
    }, 100);
  }

}
