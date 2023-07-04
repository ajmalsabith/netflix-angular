import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDeatailsComponent } from './movie-deatails.component';

describe('MovieDeatailsComponent', () => {
  let component: MovieDeatailsComponent;
  let fixture: ComponentFixture<MovieDeatailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDeatailsComponent]
    });
    fixture = TestBed.createComponent(MovieDeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
