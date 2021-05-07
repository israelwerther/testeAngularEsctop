import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credcoop-create',
  templateUrl: './credcoop-create.component.html',
  styleUrls: ['./credcoop-create.component.css']
})
export class CredcoopCreateComponent implements OnInit {
  atributoLegal = "qualquer"
  constructor() { }

  ngOnInit(): void {

  }
  fazerAlgo(): void {
    console.log('Fazendo algo')
  }

}
