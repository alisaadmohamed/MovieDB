import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {


allUsers=[

{name:'ali', age:'22', gender:'male',salary:'2550',dateOfBirth:'10/10/2015'},
{name:'isra', age:'22', gender:'female',salary:'2550',dateOfBirth:'10/10/2015'},
{name:'malik', age:'22',gender:'male', salary:'2550',dateOfBirth:'10/10/2015'},
{name:'puma', age:'22',gender:'female', salary:'2550',dateOfBirth:'10/10/2015'},




]

  constructor() { }

  ngOnInit(): void {
  }

}
