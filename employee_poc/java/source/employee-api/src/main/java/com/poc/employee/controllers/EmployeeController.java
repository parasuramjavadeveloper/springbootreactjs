package com.poc.employee.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.poc.employee.models.Employee;
import com.poc.employee.models.Status;
import com.poc.employee.services.EmployeeService;

@RestController
public class EmployeeController {
	@Autowired
	private EmployeeService service;

	@GetMapping("/employee")
	@CrossOrigin
	public List<Employee> getEmployees(@RequestParam(value = "id", defaultValue = "0") int id) {
		System.out.println("Received request for getEmployee() with id: " + id);
		List<Employee> employees = service.getEmployees(id);
		System.out.println("Response for getEmployee() with id: " + id + " is: " + employees);
		return employees;
	}
	
	@PostMapping(value = "/employee", consumes = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin
	public Status addEmployee(@RequestBody Employee employee) {
		System.out.println("Received request for addEmployee() with payload: " + employee);
		String status = service.addEmployee(employee);
		System.out.println("Response for addEmployee() with payload: " + employee + " is: " + status);
		return new Status(status);
	}
	
	@PutMapping(value = "/employee", consumes = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin
	public Status updateEmployee(@RequestBody Employee employee) {
		System.out.println("Received request for updateEmployee() with payload: " + employee);
		String status = service.updateEmployee(employee);
		System.out.println("Response for updateEmployee() with payload: " + employee + " is: " + status);
		return new Status(status);
	}
	
	@DeleteMapping(value = "/employee/id/{ids}")
	@CrossOrigin
	public Status deleteEmployee(@PathVariable(value = "ids") String ids) {
		System.out.println("Received request for deleteEmployee() with ids: " + ids);
		String status = service.deleteEmployees(ids);
		System.out.println("Response for deleteEmployee() with ids: " + ids + " is: " + status);
		return new Status(status);
	}
	
	@GetMapping(value = "/employee/countries", produces=MediaType.APPLICATION_PROBLEM_JSON_UTF8_VALUE)
	@CrossOrigin
	public String getCountries() {
		System.out.println("Received request for getCountries()");
		String response = new RestTemplate().getForObject("http://services.groupkt.com/country/get/all", String.class);
		System.out.println("Response for getCountries() is: " + response);
		return response;
	}
}
