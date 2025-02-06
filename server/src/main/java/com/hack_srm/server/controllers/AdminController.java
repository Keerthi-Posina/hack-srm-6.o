package com.hack_srm.server.controllers;

import com.hack_srm.server.dto.UserCreationDTO;
import com.hack_srm.server.models.AdminModel;
import com.hack_srm.server.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @PostMapping
    public String addAdmin(@RequestBody UserCreationDTO admin) {
        adminService.createAdmin(admin);
        return "Admin added";
    }

    @GetMapping
    public List<AdminModel> getAllAdmins() {
        return adminService.getAllAdmins();
    }

}
