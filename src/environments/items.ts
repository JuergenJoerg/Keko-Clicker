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
  name: string;
  prize: number;
  imgName: string;
  description: string;
  upgradeFor: number;
  affordable: boolean;
  isShown: boolean;

  constructor(name: string, prize: number, imgName: string, description: string, upgradeFor: number, isShown?: boolean) {
    this.name = name;
    this.prize = prize;
    this.imgName = imgName;
    this.description = description;
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
    new UpgradeItem('Gold Coja', 100, 'goldCoja', 'Coja x 2', 0),
    new UpgradeItem('Gold Lio', 1000, 'goldLio', 'Lio x 2', 1)
  ];

}
