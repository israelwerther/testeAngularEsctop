import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-function-cep',
  templateUrl: './function-cep.component.html',
  styleUrls: ['./function-cep.component.css']
})
export class FunctionCepComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
