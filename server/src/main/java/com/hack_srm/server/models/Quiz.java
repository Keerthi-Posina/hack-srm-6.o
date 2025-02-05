package com.hack_srm.server.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "learning_path_id", nullable = false)
    private LearningPathModel learningPath;

    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Question> questions;

    @OneToOne
    @JoinColumn(name = "content_id", unique = true) // Ensure one-to-one with Content
    private Content content;

    private int totalMarks;
    private int passingMarks;
}
