import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SummaryDayComponent } from "./summary-day.component";

describe("SummaryDayComponent", () => {
  let component: SummaryDayComponent;
  let fixture: ComponentFixture<SummaryDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryDayComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
