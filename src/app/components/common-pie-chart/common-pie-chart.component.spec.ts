import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPieChartComponent } from './common-pie-chart.component';

describe('CommonPieChartComponent', () => {
  let component: CommonPieChartComponent;
  let fixture: ComponentFixture<CommonPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
