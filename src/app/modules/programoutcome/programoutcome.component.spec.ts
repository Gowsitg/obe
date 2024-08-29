import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramoutcomeComponent } from './programoutcome.component';

describe('ProgramoutcomeComponent', () => {
  let component: ProgramoutcomeComponent;
  let fixture: ComponentFixture<ProgramoutcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramoutcomeComponent]
    });
    fixture = TestBed.createComponent(ProgramoutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
