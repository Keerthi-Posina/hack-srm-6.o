package com.hack_srm.server.repositories;

import com.hack_srm.server.models.LearningPathModel;
import com.hack_srm.server.models.LearningResource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LearningResourceRepo extends JpaRepository<LearningResource, Long> {
    List<LearningResource> findByLearningPath(LearningPathModel learningPath);

}
