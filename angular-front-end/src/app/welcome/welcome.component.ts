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

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    console.log('final do getWelcomeMessage')
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
    // console.log(response.message);
  }

  handleErrorResponse(error) {
    console.log(error)
    console.log(error.error)
    console.log(error.error.message)
    this.welcomeMessageFromService = error.error.message;
  }

}
