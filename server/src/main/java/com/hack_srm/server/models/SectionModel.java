package com.hack_srm.server.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class SectionModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private CourseModel course;

    @ManyToOne
    @JoinColumn(name = "faculty_id")
    private FacultyModel faculty;

    @ManyToMany
    @JoinTable(
            name = "student_section",
            joinColumns = @JoinColumn(name = "section_id"),
            inverseJoinColumns = @JoinColumn(name = "student_id")
    )
    private List<StudentModel> students;

}
