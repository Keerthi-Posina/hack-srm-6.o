package com.hack_srm.server.services;

import com.hack_srm.server.dto.CoDTO;
import com.hack_srm.server.models.CourseOutcome;

import java.util.List;

public interface CoService {

    List<CourseOutcome> getAllCourseOutcomes();
    CourseOutcome getCourseOutcomeById(Long id);
    CourseOutcome createCourseOutcome(CoDTO courseOutcome);
    CourseOutcome updateCourseOutcome(Long id, CourseOutcome updatedOutcome);
    void deleteCourseOutcome(Long id);

}
