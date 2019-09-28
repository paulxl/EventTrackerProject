package com.skilldistillery.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.repositories.VolunteerRepository;
import com.skilldistillery.volunteer.entities.Volunteer;
@Service
public class VolunteerServiceImple implements VolunteerService {
	
	@Autowired
	private VolunteerRepository repo;

	@Override
	public List<Volunteer> findAll() {
		List<Volunteer> vol = repo.findAll();		
		return vol;
	}

	@Override
	public Optional<Volunteer> findById(int id) {
		Optional<Volunteer> vol =repo.findById(id);
		if(vol.isPresent()) {
			Volunteer vol1 = vol.get();
		}		
		return vol;
	}

	@Override
	public Optional<Volunteer> findByUserName(String username) {
		Optional<Volunteer> vol = repo.findByUsername(username);
		
		return vol;
	}

	@Override
	public List<Volunteer> findByActive(Boolean active) {
		List<Volunteer> vols = repo.findByActive(active);	
		return vols;
	}

	@Override
	public Optional<Volunteer> updateById(int id, Volunteer volunteer) {
		Optional<Volunteer> vol = repo.findById(id);
		Volunteer managedVolunteer = null;
		if(vol.isPresent()) {
			managedVolunteer.getUsername();
			managedVolunteer.getPassword();
			managedVolunteer.getFirstname();
			managedVolunteer.getLastname();
			managedVolunteer.getSize();
			managedVolunteer.getBreeds();
			managedVolunteer.getActive();
			repo.saveAndFlush(volunteer);			
		}
				
		return vol;
	}

	@Override
	public Optional<Volunteer> updateByUserName(String username, Volunteer volunteer) {
		Optional<Volunteer> vol = repo.findByUsername(username);
		Volunteer managedVolunteer = null;
		try {
			if(vol.isPresent()) {
				managedVolunteer.getUsername();
				managedVolunteer.getPassword();
				managedVolunteer.getFirstname();
				managedVolunteer.getLastname();
				managedVolunteer.getSize();
				managedVolunteer.getBreeds();
				managedVolunteer.getActive();
				repo.saveAndFlush(volunteer);			
			}
		} catch (Exception e) {		
			e.printStackTrace();
			
		}	
		return vol;
	}

	@Override
	public Optional<Volunteer> deleteById(int id) {
		Optional<Volunteer> vol = repo.findById(id);
		if(vol.isPresent()) {
			repo.deleteById(id);
		}		
		return null;
	}

	@Override
	public Volunteer createNew(Volunteer volunteer) {
				
		return repo.saveAndFlush(volunteer);
	}

}
