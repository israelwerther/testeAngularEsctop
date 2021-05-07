import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credcoop-crud',
  templateUrl: './credcoop-crud.component.html',
  styleUrls: ['./credcoop-crud.component.css']
})
export class CredcoopCrudComponent implements OnInit {

  constructor(private Router: Router) { }

  ngOnInit(): void {
  }

  navigateToCredcoopCreate(): void {
    this.Router.navigate(['/credcoop/create'])
  }

}
