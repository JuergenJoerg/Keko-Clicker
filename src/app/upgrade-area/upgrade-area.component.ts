import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-upgrade-area',
  templateUrl: './upgrade-area.component.html',
  styleUrls: ['./upgrade-area.component.scss']
})
export class UpgradeAreaComponent implements OnInit {

  @Input()
  coins: number;

  @Input()
  items: any;

  @Output()
  buyItemOutput = new EventEmitter<string>();

  buyItem(itemName: string) {
    this.buyItemOutput.emit(itemName);
  }

  constructor() { }

  ngOnInit() {
  }

}
