import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeAreaComponent } from './upgrade-area.component';

describe('UpgradeAreaComponent', () => {
  let component: UpgradeAreaComponent;
  let fixture: ComponentFixture<UpgradeAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
