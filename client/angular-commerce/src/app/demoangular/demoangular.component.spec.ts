import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoangularComponent } from './demoangular.component';

describe('DemoangularComponent', () => {
  let component: DemoangularComponent;
  let fixture: ComponentFixture<DemoangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoangularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
