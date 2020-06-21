package com.example.demo;

import javax.servlet.http.HttpSession;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;


@Controller
@SpringBootApplication
public class CaculationTApplication {
	
	@RequestMapping("/index1/{value1}/{sachi}/{value2}")
	public String result(@PathVariable String value1,@PathVariable String sachi,@PathVariable String value2,Model model) {
		
		
		
		if(sachi=="+") {
			int res= Integer.parseInt(value1)+Integer.parseInt(value2);
			return "/result.html";
		}else if(sachi=="-"){
			int res= Integer.parseInt(value1)-Integer.parseInt(value2);
			model.addAttribute("res",res);
			System.out.println(model.getAttribute("res"));
			return "/index.html";
		}else if(sachi=="*"){
			int res= Integer.parseInt(value1)*Integer.parseInt(value2);
			model.addAttribute("res",res);
			return "/index.html";
		}else if(sachi=="/"){
			int res= Integer.parseInt(value1)/Integer.parseInt(value2);
			model.addAttribute("res",res);
			return "/index.html";
		}
	}
	
	@RequestMapping("/index1")
	public String index() {

		return "/index.html";
	}


}
