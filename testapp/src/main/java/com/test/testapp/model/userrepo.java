package com.test.testapp.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userrepo extends CrudRepository<user, Integer> {
}
