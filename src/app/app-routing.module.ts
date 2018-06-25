import { VersoesAppDetalhesComponent } from './versoes-app-detalhes/versoes-app-detalhes.component';
import { VersoesAppComponent } from './versoes-app/versoes-app.component';
import { DashComponent } from './dash/dash.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: DashComponent },
  { path: 'versoesAtivas', component: VersoesAppComponent },
  { path: 'versoesAtivas/:cdVersaoApp/:cdSistemaOperacional', component: VersoesAppDetalhesComponent },
  { path: 'versoesAtivas/adicionar', component: VersoesAppDetalhesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
