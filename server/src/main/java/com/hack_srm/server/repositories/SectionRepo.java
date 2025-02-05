package com.hack_srm.server.repositories;

import com.hack_srm.server.models.CourseModel;
import com.hack_srm.server.models.FacultyModel;
import com.hack_srm.server.models.SectionModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SectionRepo extends JpaRepository<SectionModel, Long> {
    List<SectionModel> findByCourse(CourseModel course);
    List<SectionModel> findByFaculty(FacultyModel faculty);
}
