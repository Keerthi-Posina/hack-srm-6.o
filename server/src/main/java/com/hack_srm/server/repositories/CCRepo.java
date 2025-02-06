package com.hack_srm.server.repositories;

import com.hack_srm.server.models.AdminModel;
import com.hack_srm.server.models.CCModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CCRepo extends JpaRepository<CCModel, Long> {

    @Query("SELECT c FROM CCModel c WHERE c.username = :username AND c.password = :password")
    Optional<CCModel> findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);

}
