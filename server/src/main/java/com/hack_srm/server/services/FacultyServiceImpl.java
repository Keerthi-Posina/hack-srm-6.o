package com.hack_srm.server.services;

import com.hack_srm.server.dto.UserCreationDTO;
import com.hack_srm.server.models.FacultyModel;
import com.hack_srm.server.models.SectionModel;
import com.hack_srm.server.models.UserRole;
import com.hack_srm.server.repositories.FacultyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FacultyServiceImpl implements FacultyService {

    @Autowired
    private FacultyRepo facultyRepo;


    @Override
    public FacultyModel createFaculty(UserCreationDTO dto) {
        FacultyModel faculty = new FacultyModel();

        faculty.setName(dto.getName());
        faculty.setUsername(dto.getUsername());
        faculty.setPassword(dto.getPassword());
        faculty.setMail(dto.getMail());
        faculty.setPhone(dto.getPhone());
        faculty.setRole(UserRole.FACULTY);

        return faculty;
    }

    @Override
    public List<FacultyModel> bulkCreateFaculties(List<FacultyModel> faculties) {
        return List.of();
    }

    @Override
    public Optional<FacultyModel> getFacultyById(Long id) {
        return Optional.empty();
    }

    @Override
    public List<SectionModel> getSectionsByFaculty(Long facultyId) {
        return List.of();
    }

    @Override
    public List<FacultyModel> getAllFaculties() {
        return facultyRepo.findAll();
    }
}
