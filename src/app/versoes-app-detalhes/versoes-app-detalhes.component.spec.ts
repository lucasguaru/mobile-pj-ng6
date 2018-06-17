import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersoesAppDetalhesComponent } from './versoes-app-detalhes.component';

describe('VersoesAppDetalhesComponent', () => {
  let component: VersoesAppDetalhesComponent;
  let fixture: ComponentFixture<VersoesAppDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersoesAppDetalhesComponent ]
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
