package com.hack_srm.server.controllers;

import com.hack_srm.server.dto.AuthResponseDTO;
import com.hack_srm.server.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @GetMapping
    public String auth() {
       return "Lol";
    }

    @PostMapping("/login")
    public AuthResponseDTO login(@RequestParam("username") String username, @RequestParam("password") String password) {
        return authService.loginUser(username, password);
    }

}
