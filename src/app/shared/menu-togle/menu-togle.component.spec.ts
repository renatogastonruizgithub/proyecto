import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTogleComponent } from './menu-togle.component';

describe('MenuTogleComponent', () => {
  let component: MenuTogleComponent;
  let fixture: ComponentFixture<MenuTogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
