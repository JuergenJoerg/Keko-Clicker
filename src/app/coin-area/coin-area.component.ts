import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-coin-area',
  templateUrl: './coin-area.component.html',
  styleUrls: ['./coin-area.component.scss']
})
export class CoinAreaComponent implements OnInit {

  @Input()
  coins: number;

  @Input()
  cps: number;

  @Output()
  coinClickOutput = new EventEmitter<any>();

  onCoinClick() {
    this.coinClickOutput.emit();
  }

  constructor() {
  }

  ngOnInit() {
  }

}
