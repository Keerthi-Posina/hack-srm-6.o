package com.hack_srm.server.services;

import com.hack_srm.server.dto.CourseDTO;
import com.hack_srm.server.models.CCModel;
import com.hack_srm.server.models.CourseModel;
import com.hack_srm.server.models.FieldOfStudies;
import com.hack_srm.server.repositories.CCRepo;
import com.hack_srm.server.repositories.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseRepo courseRepo;

    @Autowired
    private CCRepo ccRepo;

    @Override
    public CourseModel createCourse(CourseDTO courseDTO) {
        CourseModel course = new CourseModel();
        course.setName(courseDTO.getName());
        course.setFinalGoal(courseDTO.getFinalGoal());
        course.setFieldOfStudy(courseDTO.getFieldOfStudy());
        course.setCoordinator(getCC(courseDTO.getCcId()));
        return courseRepo.save(course);
    }

    private CCModel getCC(Long ccId) {
        return ccRepo.findById(ccId).orElse(null);
    }

    @Override
    public List<CourseModel> bulkCreateCourses(List<CourseModel> courses) {
        return List.of();
    }

    @Override
    public Optional<CourseModel> getCourseById(Long id) {
        return Optional.empty();
    }

    @Override
    public List<CourseModel> getCoursesByFieldOfStudy(FieldOfStudies fieldOfStudy) {
        return List.of();
    }

    @Override
    public void assignCoordinator(Long courseId, Long coordinatorId) {

    }

    @Override
    public void enrollStudent(Long courseId, Long studentId) {

    }
}
