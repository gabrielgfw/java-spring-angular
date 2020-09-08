import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  retrieveAllTodos(username) {
    // Estamos requisitando um GET no endereços abaixo.
    // É esperado que o response dessa requisição seja do tipo HelloWorldBean.
    // Que nada mais é do que a classe criada logo acima, especificando o conteúdo esperado.
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
  }

  deleteTodo(username, id) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }
}
