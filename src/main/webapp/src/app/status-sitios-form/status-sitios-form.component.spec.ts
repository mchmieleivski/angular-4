import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusSitiosFormComponent } from './status-sitios-form.component';

describe('StatusSitiosFormComponent', () => {
  let component: StatusSitiosFormComponent;
  let fixture: ComponentFixture<StatusSitiosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusSitiosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusSitiosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
