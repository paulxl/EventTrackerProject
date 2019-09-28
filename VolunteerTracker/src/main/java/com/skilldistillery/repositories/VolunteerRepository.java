package com.skilldistillery.repositories;



import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skilldistillery.volunteer.entities.Volunteer;

@Repository
public interface VolunteerRepository extends JpaRepository<Volunteer, Integer> {
	Optional<Volunteer> findByUsername(String username);
	List<Volunteer> findByActive(Boolean active);
	Optional<Volunteer> updateByUserName(String username);
	
	

}
