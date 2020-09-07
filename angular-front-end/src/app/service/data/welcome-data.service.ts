import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message:string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) {

  }

  executeHelloWorldBeanService() {
    // Estamos requisitando um GET no endereços abaixo.
    // É esperado que o response dessa requisição seja do tipo HelloWorldBean.
    // Que nada mais é do que a classe criada logo acima, especificando o conteúdo esperado.
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
  }

  executeHelloWorldBeanServiceWithPathVariable(name) {
    // Estamos requisitando um GET no endereços abaixo.
    // É esperado que o response dessa requisição seja do tipo HelloWorldBean.
    // Que nada mais é do que a classe criada logo acima, especificando o conteúdo esperado.
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`)
  }

}
