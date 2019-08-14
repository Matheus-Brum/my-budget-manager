import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalPieChartComponent } from './global-pie-chart.component';

describe('OverviewPieChartComponent', () => {
  let component: GlobalPieChartComponent;
  let fixture: ComponentFixture<GlobalPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
