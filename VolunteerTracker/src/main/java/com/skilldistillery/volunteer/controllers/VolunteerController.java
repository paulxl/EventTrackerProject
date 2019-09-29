package com.skilldistillery.volunteer.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.volunteer.entities.Volunteer;
import com.skilldistillery.volunteer.services.VolunteerService;

@RestController
@RequestMapping("api")
public class VolunteerController {
	@Autowired
	 private VolunteerService volServ;
	
	@GetMapping("ping")
	public String ping() {
	  return "pong";
	}
	//List<Volunteer> findAll();
	@GetMapping("volunteer")
	public List<Volunteer> listAllVolunteers() {
		List<Volunteer> vols = volServ.findAll();
		return vols;	
	}
	//Volunteer findById(int id);
	@GetMapping("volunteer/{volId}")
	public Volunteer getById(@PathVariable("volId") int id) {
		return volServ.findById(id);
		
	}
	//Volunteer findByUserName(String username);
	@GetMapping("volunteer/{username}")
	public Volunteer getByUsername(@PathVariable("username") String username) {
		return volServ.findByUserName(username);
	}
	//List<Volunteer> findByActive(Boolean active);
	@GetMapping("volunteer/{true}")
	public List<Volunteer> findActiveVolunteers(@PathVariable("true") Boolean active){
		return volServ.findByActive(active);
	}
	//Volunteer updateById(int id, Volunteer volunteer);
	@PostMapping("volunteer/{id}/volunteer")
	public Volunteer updateById(@PathVariable("id") int id, Volunteer volunteer) {
		return volServ.updateById(id, volunteer);
	}
	//Volunteer updateByUserName(String username, Volunteer volunteer);	
	@PostMapping("volunteer/{username}/volunteer")
	public Volunteer updateByUsername(@PathVariable("username") String username, Volunteer volunteer) {
		return volServ.updateByUserName(username, volunteer);
	}
	//Volunteer deleteById(int id);
	@DeleteMapping("volunteer/{id}")
	public void destroyUser(@PathVariable("id") int id) {
		 volServ.deleteById(id);
	}
	
	//Volunteer createNew(Volunteer volunteer);
	@PostMapping("volunteer/volunteer")
	public Volunteer createVolunteer(Volunteer volunteer) {
		return volServ.createNew(volunteer);
	}

}
