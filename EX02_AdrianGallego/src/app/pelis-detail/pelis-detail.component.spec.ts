import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelisDetailComponent } from './pelis-detail.component';

describe('PelisDetailComponent', () => {
  let component: PelisDetailComponent;
  let fixture: ComponentFixture<PelisDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PelisDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PelisDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
