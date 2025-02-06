package com.hack_srm.server.repositories;

import com.hack_srm.server.models.Content;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentRepo extends JpaRepository<Content, Long> {
    @Query("SELECT c FROM Content c WHERE c.id = :id")
    Content getContentById(long id);
}
