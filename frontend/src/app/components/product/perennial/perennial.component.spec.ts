import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerennialComponent } from './perennial.component';

describe('PerennialComponent', () => {
  let component: PerennialComponent;
  let fixture: ComponentFixture<PerennialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerennialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerennialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
