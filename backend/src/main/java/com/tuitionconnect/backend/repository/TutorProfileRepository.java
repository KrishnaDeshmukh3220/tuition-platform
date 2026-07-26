package com.tuitionconnect.backend.repository;

import com.tuitionconnect.backend.entity.TutorProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TutorProfileRepository extends JpaRepository<TutorProfile, Long> {
    List<TutorProfile> findByIsAvailableTrue();
    List<TutorProfile> findBySubjectsContainingIgnoreCase(String subject);
    List<TutorProfile> findByLocationContainingIgnoreCase(String location);
}
