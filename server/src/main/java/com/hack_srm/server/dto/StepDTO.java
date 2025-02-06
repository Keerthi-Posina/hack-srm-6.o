package com.hack_srm.server.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class StepDTO {

    private Long id;
    private String description;
    private ContentDTO content;
    private List<ResourceDTO> resources;

}
