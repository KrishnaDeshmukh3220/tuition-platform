package com.tuitionconnect.backend.service;

import com.tuitionconnect.backend.dto.TutorResponse;
import com.tuitionconnect.backend.entity.TutorProfile;
import com.tuitionconnect.backend.repository.TutorProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TutorService {

    @Autowired
    private TutorProfileRepository tutorProfileRepository;

    public List<TutorResponse> getAllTutors() {
        return tutorProfileRepository.findByIsAvailableTrue()
                .stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    public List<TutorResponse> searchTutors(String subject, String location) {
        List<TutorProfile> tutors;

        if (subject != null && location != null) {
            tutors = tutorProfileRepository.findBySubjectsContainingIgnoreCase(subject)
                    .stream()
                    .filter(t -> t.getLocation().toLowerCase().contains(location.toLowerCase()))
                    .collect(Collectors.toList());
        } else if (subject != null) {
            tutors = tutorProfileRepository.findBySubjectsContainingIgnoreCase(subject);
        } else if (location != null) {
            tutors = tutorProfileRepository.findByLocationContainingIgnoreCase(location);
        } else {
            tutors = tutorProfileRepository.findByIsAvailableTrue();
        }

        return tutors.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    private TutorResponse convertToDto(TutorProfile tutor) {
        TutorResponse response = new TutorResponse();
        response.setId(tutor.getId());
        response.setFullName(tutor.getUser().getFullName());
        response.setEmail(tutor.getUser().getEmail());
        response.setSubjects(tutor.getSubjects());
        response.setExperienceYears(tutor.getExperienceYears());
        response.setHourlyRate(tutor.getHourlyRate());
        response.setLocation(tutor.getLocation());
        response.setIsVerified(tutor.getIsVerified());
        response.setIsAvailable(tutor.getIsAvailable());
        response.setBio(tutor.getBio());
        return response;
    }
}
