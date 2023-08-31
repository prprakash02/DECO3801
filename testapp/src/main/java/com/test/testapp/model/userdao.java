package com.test.testapp.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class userdao {
    @Autowired
    private userrepo repo;
    public List<user> getAll(){
        List<user> User = new ArrayList<>();
        Streamable.of(repo.findAll()).forEach(User::add);
        return User;
    }
    public void save(user User){
        repo.save(User);
    }
}
