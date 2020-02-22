import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinfoComponent } from './getinfo.component';

describe('GetinfoComponent', () => {
  let component: GetinfoComponent;
  let fixture: ComponentFixture<GetinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
