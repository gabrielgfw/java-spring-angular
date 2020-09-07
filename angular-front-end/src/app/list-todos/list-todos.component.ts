import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {
      id : 1,
      description : 'be a nice man'
    },
    {
      id: 2,
      description : 'learn guitar'
    },
    {
      id : 3,
      description : 'sleep well'
    }
  ]

  todo = {
    id : 1,
    description : 'be cool man'
  }

  constructor() { }

  ngOnInit() {
  }

}
