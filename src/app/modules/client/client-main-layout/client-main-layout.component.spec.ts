import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMainLayoutComponent } from './client-main-layout.component';

describe('ClientMainLayoutComponent', () => {
  let component: ClientMainLayoutComponent;
  let fixture: ComponentFixture<ClientMainLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientMainLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
