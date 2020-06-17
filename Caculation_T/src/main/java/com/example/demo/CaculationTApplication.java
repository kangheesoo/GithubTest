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
	
	@RequestMapping("/result1/{value1}/{sachi}/{value2}")
	public String result(@PathVariable String value1,@PathVariable String sachi,@PathVariable String value2,Model model) {
		
		System.out.println(value1+"  "+sachi+"  "+value2);
		int res= Integer.parseInt(value1)+Integer.parseInt(value2);

		if(sachi.equals("+")) {
			System.out.println("덧셈");
		}else if(sachi.equals("-")){
			System.out.println("뺄셈");
			return "/index.html";
		}else if(sachi.equals("*")) {
			System.out.println("곱셈");
			return "/index.html";
		}else if(sachi.equals("/")) {
			System.out.println("나눗셈");
			return "/index.html";
		}
		
		if(sachi=="+") {
			
			return "/result.html";
		}else {
			
			System.out.println(res);
			model.addAttribute("res",res);
			System.out.println(model.getAttribute("res"));
			return "/index.html";
		}
	}
	
	@RequestMapping("/index1")
	public String index() {

		return "/index.html";
	}

	public static void main(String[] args) {
		SpringApplication.run(CaculationTApplication.class, args);
	}

}
