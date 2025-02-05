package com.hack_srm.server.services;

import com.hack_srm.server.models.CourseModel;
import com.hack_srm.server.models.StudentModel;

import java.util.List;
import java.util.Optional;

public interface StudentService {
    StudentModel createStudent(StudentModel student);
    List<StudentModel> bulkCreateStudents(List<StudentModel> students);
    Optional<StudentModel> getStudentById(Long id);
    List<CourseModel> getEnrolledCourses(Long studentId);
}
