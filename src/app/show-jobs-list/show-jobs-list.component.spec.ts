import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowJobsListComponent } from './show-jobs-list.component';

describe('ShowJobsListComponent', () => {
  let component: ShowJobsListComponent;
  let fixture: ComponentFixture<ShowJobsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowJobsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowJobsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
