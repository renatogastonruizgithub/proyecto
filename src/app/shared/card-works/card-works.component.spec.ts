import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWorksComponent } from './card-works.component';

describe('CardWorksComponent', () => {
  let component: CardWorksComponent;
  let fixture: ComponentFixture<CardWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
