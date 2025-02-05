package com.hack_srm.server.repositories;

import com.hack_srm.server.models.AdminModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CCRepo extends JpaRepository<AdminModel, Long> {
}
