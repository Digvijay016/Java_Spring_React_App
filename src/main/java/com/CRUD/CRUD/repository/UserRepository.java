package com.CRUD.CRUD.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.CRUD.CRUD.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
