package com.hack_srm.server.repositories;

import com.hack_srm.server.models.Assignment;
import com.hack_srm.server.models.StudentModel;
import com.hack_srm.server.models.SubmissionModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubmissionRepo extends JpaRepository<SubmissionModel, Long> {
    List<SubmissionModel> findByAssignment(Assignment assignment);
    List<SubmissionModel> findByStudent(StudentModel student);
}
