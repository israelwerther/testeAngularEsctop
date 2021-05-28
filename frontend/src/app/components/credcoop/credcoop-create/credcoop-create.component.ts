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
      observacoes: ''   
    },
    dadosBancarios: [{
      banco: '',
      numeroDaOperacao: '',
      tipoDeConta: '',
      numeroDaAgencia: '',
      numeroDaconta: '',
    }],  
    referencias: [{
      nome: '',
      contato: '',
      parentesco: '',      
    }],    
  }

  constructor(private clienteCredcoopService: ClienteCredcoopService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  // adiciona um component de formulário; contato e endereços, por exemplo
  addForm(add: string): void { 
    if(add == 'addFixo') {
      this.clienteCredcoop.contato.fixo.push(
        {
          numero: '',
          ativo: true
        }
      )
    }
    else if(add == 'addCelular') {
      this.clienteCredcoop.contato.celular.push(
        {
          numero: '',
          ativo: true,
          whatsapp: false
        }
      )
    }
    else if(add == 'addEnderecoPessoal') {
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
    else if(add == 'addEnderecoTrabalho') {
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
    else if(add == 'addContaBancaria') {
      this.clienteCredcoop.dadosBancarios.push(
        {
          banco: '',
          numeroDaOperacao: '',
          tipoDeConta: '',
          numeroDaAgencia: '',
          numeroDaconta: '',
        }
      )
    }
    else if(add == 'addReferencia') {
      this.clienteCredcoop.referencias.push(
        {
          nome: '',
          contato: '',
          parentesco: '',          
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
