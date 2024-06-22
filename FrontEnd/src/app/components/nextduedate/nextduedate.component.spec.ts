import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextduedateComponent } from './nextduedate.component';

describe('NextduedateComponent', () => {
  let component: NextduedateComponent;
  let fixture: ComponentFixture<NextduedateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextduedateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NextduedateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
