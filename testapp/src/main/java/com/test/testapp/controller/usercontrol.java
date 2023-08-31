package com.test.testapp.controller;

import com.test.testapp.model.user;
import com.test.testapp.model.userdao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class usercontrol {
    @Autowired
    private userdao dao;
    @GetMapping("/user/get")
    public List<user> getAll(){
        return dao.getAll();
    }
    @PostMapping("/user/save")
    public void save(@RequestBody user User){
        dao.save(User);
    }
}
