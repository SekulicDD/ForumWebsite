import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnHeaderComponent } from './btn-header.component';

describe('BtnHeaderComponent', () => {
  let component: BtnHeaderComponent;
  let fixture: ComponentFixture<BtnHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
