import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreAreaComponent } from './store-area.component';

describe('StoreAreaComponent', () => {
  let component: StoreAreaComponent;
  let fixture: ComponentFixture<StoreAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
