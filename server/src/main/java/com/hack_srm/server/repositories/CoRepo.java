package com.hack_srm.server.repositories;

import com.hack_srm.server.models.CourseOutcome;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoRepo extends JpaRepository<CourseOutcome, Long> {
}
