package com.tuitionconnect.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "tutor_profiles")
public class TutorProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String bio;
    private String subjects;
    private Integer experienceYears;
    private Double hourlyRate;
    private String location;
    private Double latitude;
    private Double longitude;
    private Boolean isVerified = false;
    private Boolean isAvailable = true;

    @Column(name = "created_at")
    private LocalDateTime createdAt;
}
