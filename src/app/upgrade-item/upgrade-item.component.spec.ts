import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeItemComponent } from './upgrade-item.component';

describe('UpgradeItemComponent', () => {
  let component: UpgradeItemComponent;
  let fixture: ComponentFixture<UpgradeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
