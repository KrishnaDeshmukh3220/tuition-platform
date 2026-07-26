package com.tuitionconnect.backend.controller;

import com.tuitionconnect.backend.dto.TutorResponse;
import com.tuitionconnect.backend.service.TutorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/tutors")
@CrossOrigin(origins = "http://localhost:5173")
public class TutorController {

    @Autowired
    private TutorService tutorService;

    @GetMapping
    public ResponseEntity<List<TutorResponse>> getAllTutors() {
        List<TutorResponse> tutors = tutorService.getAllTutors();
        return ResponseEntity.ok(tutors);
    }

    @GetMapping("/search")
    public ResponseEntity<List<TutorResponse>> searchTutors(
            @RequestParam(required = false) String subject,
            @RequestParam(required = false) String location) {
        List<TutorResponse> tutors = tutorService.searchTutors(subject, location);
        return ResponseEntity.ok(tutors);
    }
}
