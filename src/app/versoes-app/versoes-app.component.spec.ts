import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersoesAppComponent } from './versoes-app.component';

describe('VersoesAppComponent', () => {
  let component: VersoesAppComponent;
  let fixture: ComponentFixture<VersoesAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersoesAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersoesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
