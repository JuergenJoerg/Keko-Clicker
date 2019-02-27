import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss']
})
export class StoreItemComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  prize: number;

  @Input()
  imgName: string;

  @Input()
  count: number;

  @Input()
  affordable: boolean;

  @Input()
  isShown: boolean;

  @Output()
  buyBtnClick = new EventEmitter<string>();

  /**
   *   to control fade-in animation from 0% to 40% opacity, that it only happens one time
   */
  fadedIn: boolean;
  onBtnClick() {
    this.buyBtnClick.emit(this.name);
  }

  constructor() { }

  ngOnInit() {

    setInterval(() => {
      if (this.isShown && this.affordable) {
        this.fadedIn = true;
      }
    }, 200);

  }

}
