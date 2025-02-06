package com.hack_srm.server.services;

import com.hack_srm.server.dto.UserCreationDTO;
import com.hack_srm.server.models.AdminModel;
import com.hack_srm.server.models.UserRole;
import com.hack_srm.server.repositories.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AdminServiceImplementation implements AdminService {

    @Autowired
    private AdminRepo adminRepo;

    @Override
    public AdminModel createAdmin(UserCreationDTO admin) {
       AdminModel adminModel = new AdminModel();
       adminModel.setUsername(admin.getUsername());
       adminModel.setPassword(admin.getPassword());
       adminModel.setName(admin.getName());
       adminModel.setMail(admin.getMail());
       adminModel.setPhone(admin.getPhone());
       adminModel.setRole(UserRole.ADMIN);
       return adminRepo.save(adminModel);
    }

    @Override
    public List<AdminModel> bulkCreateAdmins(List<AdminModel> admins) {
        System.out.println("WIP");
        return new ArrayList<>();
    }

    @Override
    public Optional<AdminModel> getAdminById(Long id) {
        return adminRepo.findById(id);
    }

    @Override
    public List<AdminModel> getAllAdmins() {
        return adminRepo.findAll();
    }
}
