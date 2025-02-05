package com.hack_srm.server.services;

import com.hack_srm.server.models.Assignment;

import java.util.List;
import java.util.Optional;

public interface AssignmentService {

    Assignment createAssignment(Assignment assignment);
    List<Assignment> bulkCreateAssignments(List<Assignment> assignments);
    Optional<Assignment> getAssignmentById(Long id);
    List<Assignment> getAssignmentsBySection(Long sectionId);

}
