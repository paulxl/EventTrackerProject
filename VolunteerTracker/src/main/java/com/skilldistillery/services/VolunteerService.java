package com.skilldistillery.services;

import java.util.List;
import java.util.Optional;

import com.skilldistillery.volunteer.entities.Volunteer;

public interface VolunteerService {
	// ------READ----------
	List<Volunteer> findAll();

	Optional<Volunteer> findById(int id);

	Optional<Volunteer> findByUserName(String username);

	List<Volunteer> findByActive(Boolean active);

	// ----------UPDATE----------
	Optional<Volunteer> updateById(int id, Volunteer volunteer);

	Optional<Volunteer> updateByUserName(String username, Volunteer volunteer);

	// ----------DELETE------------
	Optional<Volunteer> deleteById(int id);

	// ---------CREATE--------------
	Volunteer createNew(Volunteer volunteer);

}
