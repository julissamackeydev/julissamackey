import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CzComponent } from './cz.component';

describe('CzComponent', () => {
  let component: CzComponent;
  let fixture: ComponentFixture<CzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
