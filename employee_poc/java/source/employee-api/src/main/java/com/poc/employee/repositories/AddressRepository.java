package com.poc.employee.repositories;

import org.springframework.data.repository.CrudRepository;

import com.poc.employee.entities.AddressEntity;

public interface AddressRepository extends CrudRepository<AddressEntity, Integer> {

}
