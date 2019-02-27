import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinAreaComponent } from './coin-area.component';

describe('CoinAreaComponent', () => {
  let component: CoinAreaComponent;
  let fixture: ComponentFixture<CoinAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
