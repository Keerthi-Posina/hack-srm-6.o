package com.hack_srm.server.services;

import com.hack_srm.server.models.FacultyModel;
import com.hack_srm.server.models.SectionModel;

import java.util.List;
import java.util.Optional;

public interface FacultyService {
    FacultyModel createFaculty(FacultyModel faculty);
    List<FacultyModel> bulkCreateFaculties(List<FacultyModel> faculties);
    Optional<FacultyModel> getFacultyById(Long id);
    List<SectionModel> getSectionsByFaculty(Long facultyId);
}
