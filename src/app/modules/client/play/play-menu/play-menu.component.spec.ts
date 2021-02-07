import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayMenuComponent } from './play-menu.component';

describe('PlayMenuComponent', () => {
  let component: PlayMenuComponent;
  let fixture: ComponentFixture<PlayMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
