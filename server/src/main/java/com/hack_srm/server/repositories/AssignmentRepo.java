package com.hack_srm.server.repositories;

import com.hack_srm.server.models.Assignment;
import com.hack_srm.server.models.SectionModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AssignmentRepo extends JpaRepository<Assignment, Integer> {
    List<Assignment> findBySection(SectionModel section);
}