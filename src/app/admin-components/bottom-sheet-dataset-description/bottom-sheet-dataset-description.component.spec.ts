import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetDatasetDescriptionComponent } from './bottom-sheet-dataset-description.component';

describe('BottomSheetDatasetDescriptionComponent', () => {
  let component: BottomSheetDatasetDescriptionComponent;
  let fixture: ComponentFixture<BottomSheetDatasetDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomSheetDatasetDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetDatasetDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
