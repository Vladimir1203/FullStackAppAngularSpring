import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos = [
    {id : 1, description: "odraditi todo aplikaciju"},
    {id : 2, description: "odraditi diplomski"}
]


  constructor() { }

  ngOnInit(): void {
  }

}
