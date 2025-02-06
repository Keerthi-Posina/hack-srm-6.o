package com.hack_srm.server.repositories;

import com.hack_srm.server.models.AdminModel;
import com.hack_srm.server.models.StudentModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentRepo extends JpaRepository<AdminModel, Long> {

    @Query("SELECT s FROM StudentModel s WHERE s.username = :username AND s.password = :password")
    Optional<StudentModel> findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);


}
