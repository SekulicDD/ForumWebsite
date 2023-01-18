import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadLineComponent } from './thread-line.component';

describe('ThreadLineComponent', () => {
  let component: ThreadLineComponent;
  let fixture: ComponentFixture<ThreadLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreadLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreadLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
