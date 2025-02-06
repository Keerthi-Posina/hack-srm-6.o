package com.hack_srm.server.repositories;

import com.hack_srm.server.models.AdminModel;
import com.hack_srm.server.models.FacultyModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FacultyRepo extends JpaRepository<FacultyModel, Long> {
    @Query("SELECT f FROM FacultyModel f WHERE f.username = :username AND f.password = :password")
    Optional<FacultyModel> findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);

}
