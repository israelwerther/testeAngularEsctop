import { Emprestimo } from './../emprestimo.model';
import { EmprestimoService } from './../emprestimo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emprestimo-create',
  templateUrl: './emprestimo-create.component.html',
  styleUrls: ['./emprestimo-create.component.css']
})
export class EmprestimoCreateComponent implements OnInit {
  
  emprestimo: Emprestimo = {
    valorDoEmprestimo: '',
    quantidadeDeParcelas: '',
    dataDoEmprestimo: '',
    valorDaParcela: '',
  }  

  constructor(private emprestimoService: EmprestimoService, private router: Router) { }

  ngOnInit(): void {
  }

  createEmprestimo(): void {
    this.emprestimoService.create(this.emprestimo).subscribe(() => {
      this.emprestimoService.showMessage('Empréstimo Criado com Sucesso!');
      this.router.navigate(['/emprestimo']);
    });
  }

  cancel(): void {
    this.router.navigate(['/emprestimo']);
  }

}
