import { Component } from '@angular/core';
import { CepService } from '../cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent {

  constructor(private cepService: CepService) { }

  consultaCep(valor: string, form: any){
    this.cepService.buscar(valor).subscribe((dados) => this.populaForm(dados, form));
    console.log(valor, form)
  }

  populaForm(dados: any, form: any) {
    form.setValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf,   
      complemento: dados.complemento,   
    })
  }
}
