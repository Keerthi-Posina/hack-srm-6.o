package com.hack_srm.server.dto;

import com.hack_srm.server.models.FieldOfStudies;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CourseDTO {

    private Long id;
    private String name;
    private String finalGoal;
    private FieldOfStudies fieldOfStudy;
    private Long ccId;


}
