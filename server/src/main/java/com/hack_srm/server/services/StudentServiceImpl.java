package com.hack_srm.server.services;

import com.hack_srm.server.models.CourseModel;
import com.hack_srm.server.models.StudentModel;
import com.hack_srm.server.repositories.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepo studentRepo;

    @Override
    public StudentModel createStudent(StudentModel student) {
        return null;
    }

    @Override
    public List<StudentModel> bulkCreateStudents(List<StudentModel> students) {
        return List.of();
    }

    @Override
    public Optional<StudentModel> getStudentById(Long id) {
        return Optional.empty();
    }

    @Override
    public List<CourseModel> getEnrolledCourses(Long studentId) {
        return List.of();
    }
}
