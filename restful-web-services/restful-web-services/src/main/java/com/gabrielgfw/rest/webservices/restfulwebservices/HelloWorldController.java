package com.gabrielgfw.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

// É necessário a anotação RestController para definir uma classe Controller. //
@RestController
public class HelloWorldController {
	
	// Definindo a Rota do tipo GET, assim como seu respectivo path. // 
	// @RequestMapping(method = RequestMethod.GET, path = "/hello-world"). //
	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hello World!";
	}
	
}
