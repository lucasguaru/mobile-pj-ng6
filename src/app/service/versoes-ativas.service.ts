
import { HttpClient } from '@angular/common/http';
import { Versao } from './../model/versao';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VersoesAtivasService {

  constructor(private http: HttpClient) {  }

  public getVersoes() {
    return this.http.get<Versao[]>('http://localhost:3000/version');
    /*return [
      new Versao(1001, 'Versão 1.0.0', '08/01/2018', 'Inativo'),
      new Versao(1002, 'Versão 1.0.1', '10/03/2018', 'Ativo'),
      new Versao(1003, 'Versão 1.0.2', '15/04/2018', 'Ativo'),
      new Versao(1004, 'Versão 1.0.3', '23/05/2018', 'Ativo')
    ]*/
  }
  public getVersao(versao: Versao) {
    return this.http.get<Versao>('http://localhost:3000/version/' + versao.cdVersaoApp + "/" + versao.cdSistemaOperacional);
  }
}
