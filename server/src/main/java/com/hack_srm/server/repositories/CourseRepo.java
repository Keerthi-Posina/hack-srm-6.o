package com.hack_srm.server.repositories;

import com.hack_srm.server.models.CCModel;
import com.hack_srm.server.models.CourseModel;
import com.hack_srm.server.models.FieldOfStudies;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepo extends JpaRepository<CourseModel, Long> {
    List<CourseModel> findByFieldOfStudy(FieldOfStudies fieldOfStudy);
    List<CourseModel> findByCoordinator(CCModel coordinator);
}
