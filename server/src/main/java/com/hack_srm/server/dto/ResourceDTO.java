package com.hack_srm.server.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResourceDTO {

    private String id;
    private String name;
//    private MultipartFile file;
    private String fileType;
    private Long learningPathId;

}