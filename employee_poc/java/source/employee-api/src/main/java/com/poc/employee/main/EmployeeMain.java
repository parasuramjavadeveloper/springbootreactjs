package com.poc.employee.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages={"com.poc.employee"})
@EnableJpaRepositories("com.poc.employee")
@EntityScan("com.poc.employee")
public class EmployeeMain extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(EmployeeMain.class);
	}
	
	public static void main(String[] args) {
		SpringApplication.run(EmployeeMain.class, args);
	}
}
