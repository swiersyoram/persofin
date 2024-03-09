package com.swiersyoram.persofin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;


@SpringBootApplication
public class PersofinApplication {

	public static void main(String[] args) {
		SpringApplication.run(PersofinApplication.class, args);
	}


}

class MainController {
    @GetMapping("/hello")
    public String hello() {
        return "Hello from the main classes";
    }


}
