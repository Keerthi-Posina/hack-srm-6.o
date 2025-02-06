package com.hack_srm.server.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuizDTO {

    private String questionsJsonString;
    private Long id;
    private Long stepId;
    private Integer totalMarks;
    private Integer passingMarks;

}
