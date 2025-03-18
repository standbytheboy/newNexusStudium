import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyWithUsComponent } from './study-with-us.component';

describe('StudyWithUsComponent', () => {
  let component: StudyWithUsComponent;
  let fixture: ComponentFixture<StudyWithUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyWithUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
