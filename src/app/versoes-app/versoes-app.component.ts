import { Versao } from './../model/versao';
import { VersoesAtivasService } from './../service/versoes-ativas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-versoes-app',
  templateUrl: './versoes-app.component.html',
  styleUrls: ['./versoes-app.component.css']
})
export class VersoesAppComponent implements OnInit {
  
  public versoes: Versao[] = null;

  constructor(private versoesAtivasService: VersoesAtivasService) {
    this.versoesAtivasService.getVersoes().subscribe((data) => {
      this.versoes = data;
    });
  }
  ngOnInit() {
  }


}
