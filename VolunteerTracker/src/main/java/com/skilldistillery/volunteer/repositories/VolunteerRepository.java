package com.skilldistillery.volunteer.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


import com.skilldistillery.volunteer.entities.Volunteer;


public interface VolunteerRepository extends JpaRepository<Volunteer, Integer> {
	Optional<Volunteer> findByUsername(String username);
	List<Volunteer> findByActive(Boolean active);
	
	
	

}
