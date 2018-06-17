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

  private versao: Versao = {cdVersaoApp: '', cdSistemaOperacional:  0};
  private habilitadoOptions = [{value:'S', text: 'Sim'},{value:'N', text: 'Não'}];

  constructor(private router: Router, private route: ActivatedRoute, private versoesAtivasService: VersoesAtivasService) {
    this.route.params.subscribe(params => {

      let versaoTemp: Versao = {cdVersaoApp: params.cdVersaoApp, cdSistemaOperacional: params.cdSistemaOperacional};

      this.versoesAtivasService.getVersao(versaoTemp).subscribe(data => {
        console.log(data);
        this.versao = data;
      });
    })
  }

  ngOnInit() {
  }

  public cancelarEditar() {
    this.router.navigate(['versoesAtivas']);
  }
}
