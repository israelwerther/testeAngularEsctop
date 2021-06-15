import { Banco } from './../banco.model';
import { BancoService } from './../banco.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-banco-create',
  templateUrl: './banco-create.component.html',
  styleUrls: ['./banco-create.component.css']
})
export class BancoCreateComponent implements OnInit {

  banco: Banco = {
    nomeDoBanco: '',    
  }

  constructor(private bancoService: BancoService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  createBanco(): void {
    this.bancoService.create(this.banco).subscribe(() => {
      this.bancoService.showMessage('Banco cadastrado!')
      this.router.navigate(['/admin'])
    })
  }

  cancel(): void {
    this.router.navigate(['/admin'])
  }

}
