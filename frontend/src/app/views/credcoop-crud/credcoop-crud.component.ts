import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credcoop-crud',
  templateUrl: './credcoop-crud.component.html',
  styleUrls: ['./credcoop-crud.component.css']
})
export class CredcoopCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCredcoopCreate(): void {
    this.router.navigate(['/credcoop/create'])
  } 

  navigateToCep(): void {
    this.router.navigate(['/function/cep'])
  }

}
