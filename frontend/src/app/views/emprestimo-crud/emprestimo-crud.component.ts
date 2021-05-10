import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emprestimo-crud',
  templateUrl: './emprestimo-crud.component.html',
  styleUrls: ['./emprestimo-crud.component.css']
})
export class EmprestimoCrudComponent implements OnInit {

  constructor(private Router: Router) { }

  ngOnInit(): void {
  }

  navigateToEmprestimoCreate(): void {
    this.Router.navigate(['/emprestimo/create'])
  }

}
