package com.hack_srm.server.repositories;

import com.hack_srm.server.models.AdminModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepo extends JpaRepository<AdminModel, Long> {

    @Query("SELECT a FROM AdminModel a WHERE a.username = :username AND a.password = :password")
    Optional<AdminModel> findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);

}
