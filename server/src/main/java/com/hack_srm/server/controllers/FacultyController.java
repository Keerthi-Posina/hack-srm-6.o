package com.hack_srm.server.controllers;

import com.hack_srm.server.dto.UserCreationDTO;
import com.hack_srm.server.services.FacultyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/faculty")
public class FacultyController {

    @Autowired
    private FacultyService facultyService;

    @GetMapping
    public ResponseEntity<?> getAllFaculty() {
        return ResponseEntity.ok(facultyService.getAllFaculties());
    }

    @PostMapping
    public ResponseEntity<?> createFaculty(@RequestBody UserCreationDTO facDto){
        return ResponseEntity.ok(facultyService.createFaculty(facDto));
    }

}
