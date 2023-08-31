package com.test.testapp;

import com.test.testapp.model.user;
import com.test.testapp.model.userdao;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class TestappApplicationTests {
	@Autowired
	private userdao dao;



	@Test
	void addusertest() {
		user User=new user();
		User.setEmail("test@test.com");
		User.setName("Tester");
		User.setPass("Password");
		dao.save(User);
	}

}
