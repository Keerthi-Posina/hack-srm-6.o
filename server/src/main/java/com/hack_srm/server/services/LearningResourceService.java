package com.hack_srm.server.services;

import com.hack_srm.server.dto.ResourceDTO;
import com.hack_srm.server.models.LearningResource;

import java.util.List;

public interface LearningResourceService {

    List<LearningResource> getAllLearningResources();
    LearningResource getLearningResourceById(Long id);
    LearningResource createLearningResource(ResourceDTO resource);
    LearningResource updateLearningResource(Long id, ResourceDTO updatedResource);
    void deleteLearningResource(Long id);

}
