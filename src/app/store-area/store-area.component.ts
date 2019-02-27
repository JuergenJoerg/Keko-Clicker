import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-store-area',
  templateUrl: './store-area.component.html',
  styleUrls: ['./store-area.component.scss']
})
export class StoreAreaComponent implements OnInit {

  @Input()
  type: string;

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
