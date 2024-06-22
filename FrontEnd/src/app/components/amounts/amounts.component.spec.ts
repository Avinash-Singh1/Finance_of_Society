import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountsComponent } from './amounts.component';

describe('AmountsComponent', () => {
  let component: AmountsComponent;
  let fixture: ComponentFixture<AmountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmountsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
