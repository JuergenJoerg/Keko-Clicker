class StoreItem {
  name: string;
  prize: number;
  imgName: string;
  cps: number;
  count: number;
  displayedPrize: number;
  affordable: boolean;
  isShown: boolean;

  constructor(name: string, prize: number, imgName: string, cps?: number, count?: number, isShown?: boolean) {
    this.name = name;
    this.prize = prize;
    this.imgName = imgName;
    this.cps = cps && cps || 0;
    this.count = count && count || 0;
    this.displayedPrize = prize;
    this.affordable = false;
    this.isShown = isShown && isShown || false;
  }
}

class UpgradeItem {
  id: number;
  name: string;
  prize: number;
  imgName: string;
  description: string;
  newName: string;
  ugradeNeeded: number;
  upgradeFor: number;
  affordable: boolean;
  isShown: boolean;

  constructor(id: number, name: string, prize: number, imgName: string, description: string, newName: string, upgradeNeeded: number, upgradeFor: number, isShown?: boolean) {
    this.id = id;
    this.name = name;
    this.prize = prize;
    this.imgName = imgName;
    this.description = description;
    this.newName = newName;
    this.ugradeNeeded = upgradeNeeded;
    this.upgradeFor = upgradeFor;
    this.affordable = false;
    this.isShown = isShown && isShown || false;
  }
}

export class Items {

  static storeItems = [
    new StoreItem('Coja', 10, 'Coja', 0.1, 0, true),
    new StoreItem('Lio', 100, 'Lio', 1),
    new StoreItem('Hirsch', 1100, 'Hirsch', 8),
    new StoreItem('Oli', 12000, 'Oli', 47),
    new StoreItem('Doja', 130000, 'Doja', 260),
    new StoreItem('Huffyman', 1400000, 'Huffyman', 1400),
    new StoreItem('Mittermüller', 20000000, 'Mittermüller', 7800)
  ];

  static upgradeItems = [
    new UpgradeItem(1, 'Upgrade to Gold-Coja', 100, 'goldCoja', 'doubles Coin Production', 'Gold Coja', 0, 0),
    new UpgradeItem(2, 'Upgrade to Cojus', 500, 'Cojus', 'doubles Coin Production', 'Cojus', 1, 0),
    new UpgradeItem(3, 'Upgrade to Coj', 10000, 'Coj', 'doubles Coin Production', 'Coj', 2, 0),
    new UpgradeItem(4, 'Upgrade to Gold-Lio', 1000, 'goldLio', 'doubles Coin Production', 'Gold Lio', 0, 1),
    new UpgradeItem(5, 'Upgrade to Litschus', 5000, 'Litschus', 'doubles Coin Production', 'Litschus', 1, 1),
    new UpgradeItem(6, 'Upgrade to Lio Lötkolben', 50000, 'Lio-Loetkolben', 'doubles Coin Production', 'Lio Lötkolben', 2, 1),
    new UpgradeItem(7, 'Upgrade to Hirschovitz', 11000, 'Hirschovitz', 'doubles Coin Production', 'Hirschovitz', 0, 2)
  ];

}
