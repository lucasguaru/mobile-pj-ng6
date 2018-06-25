import { environment } from './../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Versao } from './../model/versao';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VersoesAtivasService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {  }

  public getVersoes() {
    return this.http.get<Versao[]>(this.baseUrl + '/version');
  }
  public getVersao(versao: Versao) {
    return this.http.get<Versao>(this.baseUrl + '/version/' + versao.versaoPk.cdVersaoApp + "/" + versao.versaoPk.cdSistemaOperacional);
  }
  public salvarVersao(versao: Versao) {
    return this.http.post<Versao>(this.baseUrl + '/version', versao);
  }
  public atualizarVersao(versaoPk, versao: Versao) {
    return this.http.post<Versao>(this.baseUrl + '/version/' + versaoPk.cdVersaoApp + "/" + versaoPk.cdSistemaOperacional, versao);
  }
}
