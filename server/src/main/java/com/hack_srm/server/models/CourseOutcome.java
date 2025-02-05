package com.hack_srm.server.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class CourseOutcome {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Integer outcomeNum;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private CourseModel course;

    @OneToMany(mappedBy = "courseOutcome", cascade = CascadeType.ALL)
    private List<LearningPathModel> learningPaths;

}