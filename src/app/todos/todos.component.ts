import { Component, OnInit } from '@angular/core';

export class ToDo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){
    
  }

}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos = [
    new ToDo(1, "odraditi todo aplikaciju", false, new Date()),
    new ToDo(2, "odraditi diplomski", false, new Date())
]


  constructor() { }

  ngOnInit(): void {
  }

}
