package com.poc.employee.utils;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.util.StringUtils;

import com.poc.employee.entities.AddressEntity;
import com.poc.employee.entities.EmployeeEntity;
import com.poc.employee.models.Employee;

public interface EmployeeUtils {
	public static Employee getEmployeeModel(EmployeeEntity employeeEntity) {
		Employee employee = new Employee();
		if (employeeEntity != null) {
			BeanUtils.copyProperties(employeeEntity, employee);
			if (employeeEntity.getAddress() != null) {
				BeanUtils.copyProperties(employeeEntity.getAddress(), employee.getAddress());
			}
		}
		return employee;
	}

	public static EmployeeEntity getEmployeeEntity(Employee employee) {
		EmployeeEntity employeeEntity = new EmployeeEntity();
		employeeEntity.setAddress(new AddressEntity());
		employeeEntity.getAddress().setEmployee(employeeEntity);
		if (employee != null) {
			BeanUtils.copyProperties(employee, employeeEntity);
			if (employee.getAddress() != null) {
				BeanUtils.copyProperties(employee.getAddress(), employeeEntity.getAddress());
			}
		}
		return employeeEntity;
	}

	public static boolean isValidForInsertion(Employee employee) {
		boolean valid = true;
		if (employee == null) {
			valid = false;
		}
		if (valid && employee.getId() == 0) {
			valid = false;
		}
		if (valid && StringUtils.isEmpty(employee.getFname())) {
			valid = false;
		}
		if (valid && StringUtils.isEmpty(employee.getLname())) {
			valid = false;
		}
		if (valid && employee.getAge() == 0) {
			valid = false;
		}
		if (valid && StringUtils.isEmpty(employee.getAddress().getStreet())) {
			valid = false;
		}
		if (valid && StringUtils.isEmpty(employee.getAddress().getCity())) {
			valid = false;
		}
		if (valid && StringUtils.isEmpty(employee.getAddress().getState())) {
			valid = false;
		}
		if (valid && StringUtils.isEmpty(employee.getAddress().getCountry())) {
			valid = false;
		}
		if (valid && employee.getAddress().getZip() == 0) {
			valid = false;
		}
		return valid;
	}

	public static List<Integer> getValidIdsForDeletion(List<String> ids) {
		List<Integer> validIds = new ArrayList<>();
		if (ids != null && !ids.isEmpty()) {
			validIds = ids.stream().map(id -> {
				int intId;
				try {
					intId = Integer.parseInt(id);
				} catch (Exception ex) {
					intId = 0;
				}
				return intId;
			}).filter(id -> id != null && id > 0).collect(Collectors.toList());
		}
		return validIds;
	}
}
