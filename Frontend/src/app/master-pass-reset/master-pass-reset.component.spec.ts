import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPassResetComponent } from './master-pass-reset.component';

describe('MasterPassResetComponent', () => {
  let component: MasterPassResetComponent;
  let fixture: ComponentFixture<MasterPassResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPassResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPassResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
