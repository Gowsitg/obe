import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartdataComponent } from './chartdata.component';

describe('ChartdataComponent', () => {
  let component: ChartdataComponent;
  let fixture: ComponentFixture<ChartdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartdataComponent]
    });
    fixture = TestBed.createComponent(ChartdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
