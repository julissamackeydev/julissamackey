import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlumeComponent } from './flume.component';

describe('FlumeComponent', () => {
  let component: FlumeComponent;
  let fixture: ComponentFixture<FlumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
