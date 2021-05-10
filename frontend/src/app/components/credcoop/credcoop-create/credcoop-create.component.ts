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
    nome: 'israel credcoop',
    rg: '125.989'
  }

  constructor(private clienteCredcoopService: ClienteCredcoopService,
    private router: Router) { }

  ngOnInit(): void {
    
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
