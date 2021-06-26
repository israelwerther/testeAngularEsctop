import { Banco } from './../banco.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BancoService } from './../banco.service';

@Component({
  selector: 'app-banco-create',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css']
})
export class BancoCreateComponent implements OnInit {

  bancos: Banco[] = [{
    nomeDoBanco: ''
  }];

  listaBancos: any[]= []

  constructor(private bancoService: BancoService, private router: Router) { }

  ngOnInit(): void {
    this.getBancos()
  }

  getBancos(): void {
    this.bancoService.getBancos().subscribe(bancos => {
      this.listaBancos = bancos
    })
  }

  createBanco(): void {
    this.bancos.forEach((banco) => this.bancoService.create(banco).subscribe(() => {}))
    this.bancoService.showMessage('Banco(s) cadastrado(s)!')
    this.router.navigate(['/admin'])
  }  

  cancel(): void {
    this.router.navigate(['/admin'])
  }

  removeBancos(id: number): void {
    // this.listaBancos.splice(id, 1)
    this.bancoService.delete(id).subscribe(response => {
      this.getBancos()
    })    
  }

}
