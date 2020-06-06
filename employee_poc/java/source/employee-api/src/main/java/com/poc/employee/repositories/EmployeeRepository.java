package com.poc.employee.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.poc.employee.entities.EmployeeEntity;

public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Integer> {
}
