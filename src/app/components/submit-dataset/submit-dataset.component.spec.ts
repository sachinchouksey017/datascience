import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitDatasetComponent } from './submit-dataset.component';

describe('SubmitDatasetComponent', () => {
  let component: SubmitDatasetComponent;
  let fixture: ComponentFixture<SubmitDatasetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitDatasetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitDatasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
