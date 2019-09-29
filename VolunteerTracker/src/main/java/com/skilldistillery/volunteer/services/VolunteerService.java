package com.skilldistillery.volunteer.services;

import java.util.List;


import com.skilldistillery.volunteer.entities.Volunteer;

public interface VolunteerService {
	// ------READ----------
	List<Volunteer> findAll();

	Volunteer findById(int id);

	Volunteer findByUserName(String username);

	List<Volunteer> findByActive(Boolean active);

	// ----------UPDATE----------
	Volunteer updateById(int id, Volunteer volunteer);

	Volunteer updateByUserName(String username, Volunteer volunteer);

	// ----------DELETE------------
	Volunteer deleteById(int id);

	// ---------CREATE--------------
	Volunteer createNew(Volunteer volunteer);

}
