import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaComponent } from './bandeja.component';

describe('StatusSitiosComponent', () => {
  let component: BandejaComponent;
  let fixture: ComponentFixture<BandejaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandejaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
