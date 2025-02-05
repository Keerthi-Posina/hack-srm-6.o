package com.hack_srm.server.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class CourseModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String finalGoal;

    @Enumerated(EnumType.STRING)
    private FieldOfStudies fieldOfStudy;

    @ManyToOne
    @JoinColumn(name = "coordinator_id")
    private CCModel coordinator;

    @OneToMany(mappedBy = "course")
    private List<SectionModel> sections;

    @OneToMany(mappedBy = "course_outcomes")
    private List<CourseOutcome> cos;
}
