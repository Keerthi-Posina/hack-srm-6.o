package com.hack_srm.server.repositories;

import com.hack_srm.server.models.AdminModel;
import com.hack_srm.server.models.UserModel;
import com.hack_srm.server.models.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends JpaRepository<AdminModel, Long> {
    List<UserModel> findByRole(UserRole role);
}
