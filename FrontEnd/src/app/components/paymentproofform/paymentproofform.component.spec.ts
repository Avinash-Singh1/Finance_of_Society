import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentproofformComponent } from './paymentproofform.component';

describe('PaymentproofformComponent', () => {
  let component: PaymentproofformComponent;
  let fixture: ComponentFixture<PaymentproofformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentproofformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentproofformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
