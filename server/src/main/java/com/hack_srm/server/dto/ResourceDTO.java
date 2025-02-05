package com.hack_srm.server.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class ResourceDTO {

    private String id;
    private String name;
    private MultipartFile file;
    private String fileType;
    private Long learningPathId;

}