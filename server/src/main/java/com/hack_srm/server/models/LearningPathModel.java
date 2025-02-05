package com.hack_srm.server.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class LearningPathModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private int steps;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private CourseModel course;

    @ManyToOne
    @JoinColumn(name = "course_outcome_id")
    private CourseOutcome courseOutcome;

    @OneToMany(mappedBy = "learningPath", cascade = CascadeType.ALL)
    private List<Content> content;

    @OneToMany(mappedBy = "learningPath")
    private List<LearningResource> resources;

}
