package com.hack_srm.server.controllers;

import com.hack_srm.server.dto.UserCreationDTO;
import com.hack_srm.server.services.CCService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cc")
public class CoordinatorController {

    @Autowired
    private CCService coordinator;

    @GetMapping
    public ResponseEntity<?> coordinator() {
        return ResponseEntity.ok(coordinator.getAllCoordinators());
    }

    @PostMapping
    public ResponseEntity<?> addCoordinator(@RequestBody UserCreationDTO ccDto) {
        return ResponseEntity.ok(coordinator.createCoordinator(ccDto));
    }

}
