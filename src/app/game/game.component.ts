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
  cps: number = 10000;

  storeItems = Items.storeItems;
  upgradeItems = Items.upgradeItems;

  upgradeLevels: any = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  startDate = new Date();
  endDate = new Date();
  decimal: any;

  coinClick() {
    this.coins += this.cpc;
  }

  /**
   * does item purchase; removes coins, adds cps, makes storeItems more expensive,removes upgradeItems
   * @param index
   * @param type
   */
  buyItem(index: number, type: number) {
    if (type === 2) {
      this.coins -= this.upgradeItems[index].prize;
      this.cps += this.storeItems[this.upgradeItems[index].upgradeFor].cps * this.storeItems[this.upgradeItems[index].upgradeFor].count;
      this.storeItems[this.upgradeItems[index].upgradeFor].cps *= 2;
      this.storeItems[this.upgradeItems[index].upgradeFor].imgName = this.upgradeItems[index].imgName;
      this.storeItems[this.upgradeItems[index].upgradeFor].name = this.upgradeItems[index].newName;
      this.upgradeLevels[this.upgradeItems[index].upgradeFor] += 1;
      this.upgradeItems.splice(index, 1);
    } else {
      this.coins -= this.storeItems[index].displayedPrize;
      this.storeItems[index].count += 1;
      this.cps += this.storeItems[index].cps;
      this.storeItems[index].displayedPrize = Math.ceil(this.storeItems[index].prize * 1.15);
      this.storeItems[index].prize *= 1.15;
    }
  }

  /**
   * calls buyItem function for either storeItems (type 1) or upgradeItems (type 2)
   * @param itemName
   */
  buyItemClick(itemName: string) {
    this.storeItems.forEach((item, index) => {
      if (item.name === itemName) {
        if (this.coins >= item.displayedPrize) {
            this.buyItem(index, 1);
        }
      }
    });

    this.upgradeItems.forEach((item, index) => {
      if (item.name === itemName) {
        if (this.coins >= item.prize) {
          this.buyItem(index, 2);
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

        if (this.coins >= item.prize * 0.8 && item.ugradeNeeded === this.upgradeLevels[item.upgradeFor]) {
          item.isShown = true;
        }
      }
    }, 100);
  }

}
