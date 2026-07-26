package com.tuitionconnect.backend.dto;

import lombok.Data;

@Data
public class TutorResponse {
    private Long id;
    private String fullName;
    private String email;
    private String subjects;
    private Integer experienceYears;
    private Double hourlyRate;
    private String location;
    private Boolean isVerified;
    private Boolean isAvailable;
    private String bio;
}
