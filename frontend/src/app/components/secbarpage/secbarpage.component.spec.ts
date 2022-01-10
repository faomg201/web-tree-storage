import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecbarpageComponent } from './secbarpage.component';

describe('SecbarpageComponent', () => {
  let component: SecbarpageComponent;
  let fixture: ComponentFixture<SecbarpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecbarpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecbarpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
