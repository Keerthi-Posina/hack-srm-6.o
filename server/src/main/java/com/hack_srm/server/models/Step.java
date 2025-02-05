package com.hack_srm.server.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Step {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;

    @ManyToOne
    @JoinColumn(name = "content_id")
    private Content content;

    @OneToMany(mappedBy = "step", cascade = CascadeType.ALL)
    private List<LearningResource> resources;

}
