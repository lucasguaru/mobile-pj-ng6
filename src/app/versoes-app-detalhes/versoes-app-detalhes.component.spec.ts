import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersoesAppDetalhesComponent } from './versoes-app-detalhes.component';

describe('VersoesAppDetalhesComponent', () => {
  let component: VersoesAppDetalhesComponent;
  let fixture: ComponentFixture<VersoesAppDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VersoesAppDetalhesComponent ],
      imports: [ RouterTestingModule, HttpClientModule, FormsModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersoesAppDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
