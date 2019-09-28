package com.skilldistillery.volunteer.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	@GetMapping("volunteer")
	public List<Volunteer> listAllVolunteers() {
		List<Volunteer> vols = volServ.findAll();
		return vols;	
	}
	@GetMapping("volunteer/{volId}")
	public Volunteer getById(@PathVariable("volId") int id) {
		return volServ.findById(id);
		
	}
	

}
