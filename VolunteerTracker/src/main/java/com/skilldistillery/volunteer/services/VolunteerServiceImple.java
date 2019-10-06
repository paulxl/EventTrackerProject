package com.skilldistillery.volunteer.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.volunteer.entities.Volunteer;
import com.skilldistillery.volunteer.repositories.VolunteerRepository;

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
	public Volunteer findById(Integer id) {
		Optional<Volunteer> volId =repo.findById(id);
		Volunteer vol = null;
		if(volId.isPresent()) {
			vol = volId.get();
		}		
		return vol;
	}
	@Override
	public Volunteer findByUsername(String username) {
		Optional<Volunteer> volUN = repo.findByUsername(username);
		Volunteer vol = null;
		if(volUN != null) {
			vol = volUN.get();
		}		
		return vol;
	}
	@Override
	public List<Volunteer> findByActive(Boolean active) {
		List<Volunteer> vols = repo.findByActive(active);	
		return vols;
	}
	@Override
	public Volunteer updateById(int id, Volunteer volunteer) {
		Volunteer vol = findById(id);

		if(vol != null) {
			vol.setUsername(volunteer.getUsername());
			vol.setPassword(volunteer.getPassword());
			vol.setFirstname(volunteer.getFirstname());
			vol.setLastname(volunteer.getLastname());
			vol.setActive(volunteer.getActive());			
			vol.setSize(volunteer.getSize());
			vol.setBreeds(volunteer.getBreeds());
		}				
		return repo.saveAndFlush(vol);
	}
	@Override
	public Volunteer updateByUsername(String username, Volunteer volunteer) {
		Volunteer vol = findByUsername(username);
		if(vol != null) {
			vol.setUsername(volunteer.getUsername());
			vol.setPassword(volunteer.getPassword());
			vol.setFirstname(volunteer.getFirstname());
			vol.setLastname(volunteer.getLastname());
			vol.setActive(volunteer.getActive());			
			vol.setSize(volunteer.getSize());
			vol.setBreeds(volunteer.getBreeds());
		}			
		return repo.saveAndFlush(vol);
	}
	@Override
	public Volunteer deleteById(int id) {
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
