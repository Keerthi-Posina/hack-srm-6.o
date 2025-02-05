package com.hack_srm.server.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LearningPathDTO {
    private String title;
    private int steps;
    private Long courseId;
}
