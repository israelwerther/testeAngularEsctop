import { BancoService } from './../banco.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-banco-create',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css']
})
export class BancoCreateComponent implements OnInit {
  bancos = [
    {
      nomeDoBanco: '',    
    },
  ]
  constructor(private bancoService: BancoService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createBanco(): void {
    this.bancos.forEach((banco) => this.bancoService.create(banco).subscribe(() => {}))
    this.bancoService.showMessage('Banco(s) cadastrado(s)!')
    this.router.navigate(['/admin'])
  }
  

  cancel(): void {
    this.router.navigate(['/admin'])
  }

}
