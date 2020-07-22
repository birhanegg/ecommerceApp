import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorizedProductComponent } from './categorized-product.component';

describe('CategorizedProductComponent', () => {
  let component: CategorizedProductComponent;
  let fixture: ComponentFixture<CategorizedProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorizedProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorizedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
