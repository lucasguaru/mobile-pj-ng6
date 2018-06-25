import { VersoesAtivasService } from './../service/versoes-ativas.service';
import { Versao } from './../model/versao';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-versoes-app-detalhes',
  templateUrl: './versoes-app-detalhes.component.html',
  styleUrls: ['./versoes-app-detalhes.component.css']
})
export class VersoesAppDetalhesComponent implements OnInit {

  versao: Versao = {versaoPk : {cdVersaoApp: '', cdSistemaOperacional:  0}};
  versaoPk: {};
  tipoEdicao: string = 'editar';
  habilitadoOptions = [{value:'S', text: 'Sim'}, {value:'N', text: 'Não'}];
  sistemaOperacionalOptions = [{value:'1', text: 'Android'}, {value:'2', text: 'iOS'}];

  constructor(private router: Router, private route: ActivatedRoute, private versoesAtivasService: VersoesAtivasService) {
    this.route.params.subscribe(params => {

      if (params.cdVersaoApp) {        
        let versaoTemp: Versao = {versaoPk: {cdVersaoApp: params.cdVersaoApp, cdSistemaOperacional: params.cdSistemaOperacional}};
        
        this.versoesAtivasService.getVersao(versaoTemp).subscribe(data => {
          this.versao = data;
          this.versaoPk = Object.assign({}, data.versaoPk);
          this.tipoEdicao = 'editar';
        });
      } else {
        this.versao = {versaoPk: {cdVersaoApp: '', cdSistemaOperacional: 0}};
        this.tipoEdicao = 'novo';
      }
    })
  }

  ngOnInit() {
  }

  public converterSO(codigo) {
    let result = "";
    this.sistemaOperacionalOptions.forEach(opcao => {
      if (opcao.value == codigo) result = opcao.text;
    });
    return result;
  }

  public salvarVersao() {
    //salva o valor do sistema operacional devido a modelagem do banco 
    this.versao.nomeSistemaOperacional = this.converterSO(this.versao.versaoPk.cdSistemaOperacional);
    if (this.tipoEdicao === 'novo') {
      this.versoesAtivasService.salvarVersao(this.versao).subscribe(params => console.log(params));
    } else {
      this.versoesAtivasService.atualizarVersao(this.versaoPk, this.versao).subscribe(params => console.log(params));
    }
  }

  public cancelarEditar() {
    this.router.navigate(['versoesAtivas']);
  }
}
