package com.poc.employee.models;

public class Employee {
	private int id;
	private String fname;
	private String lname;
	private int age;
	private Address address = new Address();

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "Employee {id=" + id + ", fname=" + fname + ", lname=" + lname + ", age=" + age + ", address=" + address
				+ "}\n";
	}
}
