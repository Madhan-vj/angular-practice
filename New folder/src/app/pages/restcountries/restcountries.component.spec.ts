import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestcountriesComponent } from './restcountries.component';

describe('RestcountriesComponent', () => {
  let component: RestcountriesComponent;
  let fixture: ComponentFixture<RestcountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestcountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestcountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
