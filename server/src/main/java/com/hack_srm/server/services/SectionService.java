package com.hack_srm.server.services;

import com.hack_srm.server.models.SectionModel;

import java.util.List;
import java.util.Optional;

public interface SectionService {

    SectionModel createSection(SectionModel section);
    List<SectionModel> bulkCreateSections(List<SectionModel> sections);
    Optional<SectionModel> getSectionById(Long id);
    List<SectionModel> getSectionsByCourse(Long courseId);
    void assignFaculty(Long sectionId, Long facultyId);

}
