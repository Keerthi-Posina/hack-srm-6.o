package com.hack_srm.server.services;


import com.hack_srm.server.models.AdminModel;

import java.util.List;
import java.util.Optional;

public interface AdminService {
    AdminModel createAdmin(AdminModel admin);
    List<AdminModel> bulkCreateAdmins(List<AdminModel> admins);
    Optional<AdminModel> getAdminById(Long id);
}
