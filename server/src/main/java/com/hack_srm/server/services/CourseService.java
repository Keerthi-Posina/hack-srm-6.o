package com.hack_srm.server.services;

import com.hack_srm.server.dto.CourseDTO;
import com.hack_srm.server.models.CourseModel;
import com.hack_srm.server.models.FieldOfStudies;

import java.util.List;
import java.util.Optional;

public interface CourseService {

    CourseModel createCourse(CourseDTO course);
    List<CourseModel> bulkCreateCourses(List<CourseModel> courses);
    Optional<CourseModel> getCourseById(Long id);
    List<CourseModel> getCoursesByFieldOfStudy(FieldOfStudies fieldOfStudy);
    void assignCoordinator(Long courseId, Long coordinatorId);
    void enrollStudent(Long courseId, Long studentId);

}
