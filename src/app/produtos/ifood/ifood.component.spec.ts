import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfoodComponent } from './ifood.component';

describe('IfoodComponent', () => {
  let component: IfoodComponent;
  let fixture: ComponentFixture<IfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
