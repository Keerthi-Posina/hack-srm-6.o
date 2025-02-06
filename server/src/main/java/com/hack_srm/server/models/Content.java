package com.hack_srm.server.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Content {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;

    @ManyToOne
    @JoinColumn(name = "learning_path_id")
    private LearningPathModel learningPath;

    @OneToMany(mappedBy = "content", cascade = CascadeType.ALL)
    private List<Step> steps;
}
