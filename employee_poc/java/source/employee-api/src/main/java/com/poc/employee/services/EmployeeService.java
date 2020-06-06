package com.poc.employee.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.poc.employee.entities.EmployeeEntity;
import com.poc.employee.models.Employee;
import com.poc.employee.repositories.EmployeeRepository;
import com.poc.employee.utils.EmployeeUtils;

@Service
public class EmployeeService {
	@Autowired
	private EmployeeRepository repository;

	public List<Employee> getEmployees(int id) {
		List<Employee> employees = new ArrayList<>();
		if (id > 0) {
			Optional<EmployeeEntity> employeeEntityOptional = repository.findById(id);
			employeeEntityOptional.ifPresent(employeeEntity -> employees.add(EmployeeUtils.getEmployeeModel(employeeEntity)));
		} else {
			Iterable<EmployeeEntity> employeeEntities = repository.findAll();
			if (employeeEntities != null) {
				employeeEntities
						.forEach(employeeEntity -> employees.add(EmployeeUtils.getEmployeeModel(employeeEntity)));
			}
		}
		return employees;
	}

	public String addEmployee(Employee employee) {
		String status = "FAIL";
		if (EmployeeUtils.isValidForInsertion(employee)) {
			EmployeeEntity employeeEntity = EmployeeUtils.getEmployeeEntity(employee);
			boolean exists = repository.existsById(employeeEntity.getId());
			if (!exists) {
				employeeEntity = repository.save(employeeEntity);
				if (employeeEntity != null && employeeEntity.getId() > 0) {
					status = "SUCCESS";
				}
			}
		}
		return status;
	}

	public String updateEmployee(Employee employee) {
		String status = "FAIL";
		if (EmployeeUtils.isValidForInsertion(employee)) {
			EmployeeEntity employeeEntity = EmployeeUtils.getEmployeeEntity(employee);
			Optional<EmployeeEntity> employeeEntityOptional = repository.findById(employeeEntity.getId());
			if (employeeEntityOptional.isPresent()) {
				employeeEntity.getAddress().setId(employeeEntityOptional.get().getAddress().getId());
				employeeEntity = repository.save(employeeEntity);
				if (employeeEntity != null && employeeEntity.getId() > 0) {
					status = "SUCCESS";
				}
			}
		}
		return status;
	}

	public String deleteEmployees(String StrIds) {
		String status = "FAIL";
		if(!StringUtils.isEmpty(StrIds)) {
			List<Integer> ids = EmployeeUtils.getValidIdsForDeletion(Arrays.asList(StrIds.split(",")));
			if (ids!= null && !ids.isEmpty()) {
				try {
				ids.forEach(id -> repository.deleteById(id));
				status = "SUCCESS";
				} catch (Exception ex) {
					status = "FAIL";
				}
			}
		}
		return status;
	}

}
