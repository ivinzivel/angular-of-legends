import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainClientLayoutComponent } from './main-client-layout.component';

describe('MainClientLayoutComponent', () => {
  let component: MainClientLayoutComponent;
  let fixture: ComponentFixture<MainClientLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainClientLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainClientLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
