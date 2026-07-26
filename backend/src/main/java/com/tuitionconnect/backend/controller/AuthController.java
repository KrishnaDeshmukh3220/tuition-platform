package com.tuitionconnect.backend.controller;

import com.tuitionconnect.backend.dto.AuthResponse;
import com.tuitionconnect.backend.dto.RegisterRequest;
import com.tuitionconnect.backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        String response = authService.register(request);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody Map<String, String> request) {
        AuthResponse response = authService.login(
            request.get("email"),
            request.get("password")
        );
        return ResponseEntity.ok(response);
    }
}
