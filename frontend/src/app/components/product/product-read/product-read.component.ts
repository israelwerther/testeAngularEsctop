import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] | undefined

  clientesEscTop = [
    {
      dadosPessoais: {
        nome: 'Fulano 1',
        cpf: '000.000.000-00',
        sexo: 'Masculino',
        profissao: 'Vendedor'
      },
      endereco: {
        logradouro: 'Rua sem nome',
        numero: '5',
        pontoDeReferencia: 'Ao lado da casa',
        complemento: 'Bloco 2 AP 800'
      },
      contato: {
        email: 'email@email.com',
        redesSociais: [
          {
            rede: 'Instagram',
            url: 'www.instagra.com/fulano1'
          },
          {
            rede: 'Facebook',
            url: 'www.facebook.com/fulano1'
          },
        ],
        telefones: [
          {
            numero: '(84) 9 9999-9999',
            whatsapp: true,
            ativo: true
          },
          {
            numero: '(84) 9 8888-88888',
            whatsapp: false,
            ativo: false
          },
          {
            numero: '(84) 9 7777-7777',
            whatsapp: false,
            ativo: true
          }        
        ]
      },
      financeiro: {
        salarioAtual: 1400,
        emprestimos: [
          {
            dataDoEmprestimo: '2021-05-13',
            valorDoEmprestimo: 1000,
            quantidadeDeParcelas: 10,
            valorDaParcela: 100,
            parcelas: [
              {
                valor: 100,
                paga: true,
                dataDoPagamento: '2021-05-13',
                dataVencimentoParcela: '2021-05-13'
              },
              {
                valor: 100,
                paga: false,
                dataVencimentoParcela: '2021-06-13'
              },
              {
                valor: 100,
                paga: false,
                dataVencimentoParcela: '2021-07-13'
              },
              {
                valor: 100,
                paga: false,
                dataVencimentoParcela: '2021-08-13'
              },
              {
                valor: 100,
                paga: false,
                dataVencimentoParcela: '2021-09-13'
              },
              {
                valor: 100,
                paga: false,
                dataVencimentoParcela: '2021-10-13'
              },
              {
                valor: 100,
                paga: false,
                dataVencimentoParcela: '2021-11-13'
              },
              {
                valor: 100,
                paga: false,
                dataVencimentoParcela: '2021-12-13'
              },
              {
                valor: 100,
                paga: false,
                dataVencimentoParcela: '2022-01-13'
              },
              {
                valor: 100,
                paga: false,
                dataVencimentoParcela: '2022-02-13'
              },
            ]
          }
        ]
      }
    },
    {
      dadosPessoais: {
        nome: 'Fulano 2',
        cpf: '111.111.111-11',
        sexo: 'Masculino',
        profissao: 'Programador'
      },
      endereco: {
        logradouro: 'Rua sem nome',
        numero: '50',
        pontoDeReferencia: 'Ao lado da casa',
        complemento: 'Bloco 2 AP 800'
      },
      contato: {
        email: 'email@email.com',
        redesSociais: [
          {
            rede: 'Instagram',
            url: 'www.instagram.com/fulano2'
          },
          {
            rede: 'Facebook',
            url: 'www.facebook.com/fulano2'
          },
        ],
        telefones: [
          {
            numero: '(84) 9 9999-9999',
            whatsapp: true,
            ativo: true
          },      
        ]
      },
      financeiro: {
        salarioAtual: 9999,
        emprestimos: [
          {
            dataDoEmprestimo: '2021-05-13',
            valorDoEmprestimo: 10000,
            quantidadeDeParcelas: 5,
            valorDaParcela: 2000,
            parcelas: [
              {
                valor: 2000,
                paga: true,
                dataDoPagamento: '2021-05-13',
                dataVencimentoParcela: '2021-05-13'
              },
              {
                valor: 2000,
                paga: false,
                dataVencimentoParcela: '2021-06-13'
              },
              {
                valor: 2000,
                paga: false,
                dataVencimentoParcela: '2021-07-13'
              },
              {
                valor: 2000,
                paga: false,
                dataVencimentoParcela: '2021-08-13'
              },
              {
                valor: 2000,
                paga: false,
                dataVencimentoParcela: '2021-09-13'
              }
            ]
          }
        ]
      }
    }
  ]

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

}
