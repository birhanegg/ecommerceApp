import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainOrdersComponent } from './maintain-orders.component';

describe('MaintainOrdersComponent', () => {
  let component: MaintainOrdersComponent;
  let fixture: ComponentFixture<MaintainOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
