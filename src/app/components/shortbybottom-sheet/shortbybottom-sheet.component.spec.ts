import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortbybottomSheetComponent } from './shortbybottom-sheet.component';

describe('ShortbybottomSheetComponent', () => {
  let component: ShortbybottomSheetComponent;
  let fixture: ComponentFixture<ShortbybottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortbybottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortbybottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
