import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorButtonComponent } from './sponsor-button.component';

describe('SponsorButtonComponent', () => {
  let component: SponsorButtonComponent;
  let fixture: ComponentFixture<SponsorButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
