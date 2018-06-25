import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersoesAppComponent } from './versoes-app.component';

describe('VersoesAppComponent', () => {
  let component: VersoesAppComponent;
  let fixture: ComponentFixture<VersoesAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersoesAppComponent ],
      imports: [ RouterTestingModule , HttpClientModule ]
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
