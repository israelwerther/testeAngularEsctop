import { ClienteCredcoop } from './../clienteCredcoop.model';
import { ClienteCredcoopService } from './../cliente-credcoop.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-credcoop-create',
  templateUrl: './credcoop-create.component.html',
  styleUrls: ['./credcoop-create.component.css']
})

export class CredcoopCreateComponent implements OnInit {
  
  clienteCredcoop: ClienteCredcoop = {
    dadosPessoais: {
      nome: '',
      cpf: '',
      rg: '',
      orgaoEmissor: '',
      dataNascimento: '',
      naturalidade: '',
      nacionalidade: '',
      estadoCivil: '',
      nomeDaMae: '',
      nomeDoPai: '',
    },
    dadosConjuge: {
      nomeConjuge: '',
      cpfConjuge: '',
      contatoConjuge: '',
    },
    enderecos: [
      {
        cep: '',
        rua: '',
        bairro: '',
        uf: '',
        cidade: '',
        numero: '',
        complemento: '',
        pontoDeReferencia: '',
      }
    ],
    contato: {
      fixo: [
        {
          numero: '',
          ativo: true
        }
      ],
      celular: [
        {
          numero: '',
          ativo: true,
          whatsapp: false
        }
      ],
      email: ''
    },
    localDeTrabalho: {
      nomeFantasia: '',
      enderecos: [
        {
          cep: '',
          rua: '',
          bairro: '',
          uf: '',
          cidade: '',
          numero: '',
          complemento: '',
          pontoDeReferencia: '',
        }
      ],
      contato: {
        fixo: [
          {
            numero: '',
            ativo: true
          }
        ],
        celular: [
          {
            numero: '',
            ativo: true,
            whatsapp: false
          }
        ],
        email: ''
      },
      empresaObservacoes: ''
    }
  }

  constructor(private clienteCredcoopService: ClienteCredcoopService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  adicionar(add: string): void { 
    if(add == 'fixo') {
      this.clienteCredcoop.contato.fixo.push(
        {
          numero: '',
          ativo: true
        }
      )
    }
    else if(add == 'celular') {
      this.clienteCredcoop.contato.celular.push(
        {
          numero: '',
          ativo: true,
          whatsapp: false
        }
      )
    }
    else if(add == 'enderecoPessoal') {
      this.clienteCredcoop.enderecos.push(
        {
          cep: '',
          rua: '',
          bairro: '',
          uf: '',
          cidade: '',
          numero: '',
          complemento: '',
          pontoDeReferencia: '',
        }
      )
    }
    else if(add == 'enderecoTrabalho') {
      this.clienteCredcoop.localDeTrabalho.enderecos.push(
        {
          cep: '',
          rua: '',
          bairro: '',
          uf: '',
          cidade: '',
          numero: '',
          complemento: '',
          pontoDeReferencia: '',
        }
      )
    }
    else if(add == 'fixoTrabalho') {
      this.clienteCredcoop.localDeTrabalho.contato.fixo.push(
        {
          numero: '',
          ativo: true
        }
      )
    }
    else if(add == 'celularTrabalho') {
      this.clienteCredcoop.localDeTrabalho.contato.celular.push(
        {
          numero: '',
          ativo: true,
          whatsapp: false
        }
      )
    }
  }

  createClienteCredcoop(): void {
    this.clienteCredcoopService.create(this.clienteCredcoop).subscribe(() => {
      this.clienteCredcoopService.showMessage('Cliente Criado com Sucesso!')
      this.router.navigate(['/credcoop'])
    })
  }

  cancel(): void {
    this.router.navigate(['/credcoop'])
  }
}
