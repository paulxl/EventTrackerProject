package com.skilldistillery.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.services.VolunteerService;
import com.skilldistillery.volunteer.entities.Volunteer;

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
	

}
