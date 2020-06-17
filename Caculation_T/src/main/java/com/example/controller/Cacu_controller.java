package com.example.controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RestController;





@Controller
@SpringBootApplication
public class Cacu_controller {
	
	@RequestMapping("/result1")
	public String index() {

		
		
		return "/result.html";
	}

	public static void main(String[] args) {
		SpringApplication.run(Cacu_controller.class, args);
	}

}
