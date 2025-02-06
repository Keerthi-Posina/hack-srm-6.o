package com.hack_srm.server.services;

import com.hack_srm.server.dto.AuthResponseDTO;
import com.hack_srm.server.models.AdminModel;
import com.hack_srm.server.models.CCModel;
import com.hack_srm.server.models.FacultyModel;
import com.hack_srm.server.models.StudentModel;
import com.hack_srm.server.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private AdminRepo adminRepo;

    @Autowired
    private CCRepo ccRepo;

    @Autowired
    private FacultyRepo userRepo;


    @Autowired
    private StudentRepo studentRepo;

    public AuthResponseDTO loginUser(String username, String password) {
        Optional<AdminModel> admin = adminRepo.findByUsernameAndPassword(username, password);
        if (admin.isPresent()) {
            return new AuthResponseDTO("Login successful", true, admin.get());
        }

        Optional<CCModel> cc = ccRepo.findByUsernameAndPassword(username, password);
        if (cc.isPresent()) {
            return new AuthResponseDTO("Login successful", true, cc.get());
        }

        Optional<FacultyModel> faculty = userRepo.findByUsernameAndPassword(username, password);
        if (faculty.isPresent()) {
            return new AuthResponseDTO("Login successful", true, faculty.get());
        }

        Optional<StudentModel> student = studentRepo.findByUsernameAndPassword(username, password);
        if (student.isPresent()) {
            return new AuthResponseDTO("Login successful", true, student.get());
        }

        return new AuthResponseDTO("Invalid credentials", false, null);
    }

}
