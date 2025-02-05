package com.hack_srm.server.services;

import com.hack_srm.server.dto.LearningPathDTO;
import com.hack_srm.server.models.LearningPathModel;

import java.util.List;

public interface LearningPathService {

    List<LearningPathModel> getAllLearningPaths();
    LearningPathModel getLearningPathById(Long id);
    LearningPathModel createLearningPath(LearningPathDTO learningPath);
    LearningPathModel updateLearningPath(Long id, LearningPathDTO updatedPath);
    void deleteLearningPath(Long id);
}
