import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPendingSellersComponent } from './view-pending-sellers.component';

describe('ViewPendingSellersComponent', () => {
  let component: ViewPendingSellersComponent;
  let fixture: ComponentFixture<ViewPendingSellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPendingSellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPendingSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
