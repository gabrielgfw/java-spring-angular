import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  welcomeMessageFromService:string

  constructor(private route: ActivatedRoute,
              private service: WelcomeDataService) {}

  ngOnInit() {

    // console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }

  // Função utilizada através do botão no component do welcome.
  getWelcomeMessage() {
    // A função Subscribe, que realiza o acesso de forma assíncrona,
    // pode receber dois parâmetros:
    // O primeiro parâmetro será para tratar o response da requisição.
    // O segundo parâmetro serve para tratamento de erros.
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  // Função utilizada através do botão no component do welcome.
  getWelcomeMessageWithParameter() {
    // A função Subscribe, que realiza o acesso de forma assíncrona,
    // pode receber dois parâmetros:
    // O primeiro parâmetro será para tratar o response da requisição.
    // O segundo parâmetro serve para tratamento de erros.
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }


  // Função criada para tratar o response da requisição do botão Welcome.
  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
  }
  // Função criada para tratar erros do response.
  handleErrorResponse(error) {
    this.welcomeMessageFromService = error.error.message;
  }

}
