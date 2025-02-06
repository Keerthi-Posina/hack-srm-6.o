package com.hack_srm.server.repositories;

import com.hack_srm.server.models.CourseModel;
import com.hack_srm.server.models.LearningPathModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LearningPathRepo extends JpaRepository<LearningPathModel, Long> {
    List<LearningPathModel> findByCourse(CourseModel course);

    @Query("SELECT l FROM LearningPathModel l WHERE l.id = :id")
    LearningPathModel getLearningPathModelById(@Param("id") long id);

}
