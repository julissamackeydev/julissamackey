import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E2eFriendComponent } from './e2e-friend.component';

describe('E2eFriendComponent', () => {
  let component: E2eFriendComponent;
  let fixture: ComponentFixture<E2eFriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E2eFriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E2eFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
