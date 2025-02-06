package com.hack_srm.server.repositories;

import com.hack_srm.server.models.Step;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface StepRepo extends JpaRepository<Step, Long> {
    @Query("SELECT s FROM Step s WHERE s.id = :id")
    Step getStepsById(@Param("id") Long id);
}
