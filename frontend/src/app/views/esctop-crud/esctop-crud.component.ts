import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-esctop-crud',
  templateUrl: './esctop-crud.component.html',
  styleUrls: ['./esctop-crud.component.css']
})
export class EsctopCrudComponent implements OnInit {

  constructor(private Router: Router) { }

  ngOnInit(): void {
  }

  navigateToEsctopCreate(): void {
    this.Router.navigate(['/esctop/create'])
  }

}
