package com.hack_srm.server.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class LearningResource {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String url;

    @ManyToOne
    @JoinColumn(name = "learning_path_id")
    private LearningPathModel learningPath;

    @ManyToOne
    @JoinColumn(name = "step_id")
    private Step step;


}