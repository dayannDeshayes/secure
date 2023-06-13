package com.demosecure.demosecure.controller;

import com.demosecure.demosecure.model.dto.BearerToken;
import com.demosecure.demosecure.model.dto.LoginDto;
import com.demosecure.demosecure.model.dto.SignUpDto;
import com.demosecure.demosecure.service.IDemoUserSecurityService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/auth")
public class LoginController {

    @Autowired
    private IDemoUserSecurityService userSecurityService;

    @PostMapping("/user/signin")
    public BearerToken authenticateUser(@RequestBody LoginDto rLoginDto) {
        return userSecurityService.authenticate(rLoginDto);
    }

    @PostMapping("/user/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignUpDto rSignUpDto) {
        return userSecurityService.register(rSignUpDto);
    }

    @PutMapping("/admin/modify")
    public void modifyUser(@RequestParam String email, @RequestParam String role) {
        userSecurityService.modify(email, role);
    }

    @PostMapping("/admin/signup")
    public ResponseEntity<?> registerUserAdmin(@RequestBody SignUpDto rSignUpDto) {
        return userSecurityService.registerAdmin(rSignUpDto);
    }
}
