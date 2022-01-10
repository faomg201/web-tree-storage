import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarpageComponent } from './barpage.component';

describe('BarpageComponent', () => {
  let component: BarpageComponent;
  let fixture: ComponentFixture<BarpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
