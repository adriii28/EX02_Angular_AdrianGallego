import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelisViewComponent } from './pelis-view.component';

describe('PelisViewComponent', () => {
  let component: PelisViewComponent;
  let fixture: ComponentFixture<PelisViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PelisViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PelisViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
