package com.skilldistillery.volunteer.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	@GetMapping("volunteer/{id}")
	public Volunteer getById(@PathVariable("id") Integer id) {
		Volunteer volunteer = volServ.findById(id);
		return volunteer;
		
	}
	//Volunteer findByUserName(String username);
	@GetMapping("volunteer/username/{username}")
	public Volunteer getByUsername(@PathVariable("username") String username) {
		return volServ.findByUserName(username);
	}
	//List<Volunteer> findByActive(Boolean active);
	@GetMapping("volunteer/active/{true}")
	public List<Volunteer> findActiveVolunteers(@PathVariable("true") Boolean active){
		return volServ.findByActive(active);
	}
	//Volunteer updateById(int id, Volunteer volunteer);
	@PutMapping("volunteer/{id}")
	public Volunteer updateById(@PathVariable("id") Integer id,@RequestBody Volunteer volunteer,HttpServletResponse resp) {
		try {
			volunteer=volServ.updateById(id, volunteer);
			if( volunteer !=null) {
				resp.setStatus(404);
			}
			else {
				resp.setStatus(201);
			}
		} catch (Exception e) {		
			e.printStackTrace();
			resp.setStatus(400);
		}
		return volunteer;
	}
	//Volunteer updateByUserName(String username, Volunteer volunteer);	
	@PutMapping("volunteer/username/{username}")
	public Volunteer updateByUsername(@PathVariable("username") String username,@RequestBody Volunteer volunteer, HttpServletResponse resp) {
		try {
			volunteer = volServ.updateByUserName(username, volunteer);
			if( volunteer !=null) {
				resp.setStatus(404);
			}
			else {
				resp.setStatus(201);
			}
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
		}
		return volunteer; 
	}
	//Volunteer deleteById(int id);
	@DeleteMapping("volunteer/{id}")
	public void destroyUser(@PathVariable("id") Integer id) {
		 volServ.deleteById(id);
	}
	
	//Volunteer createNew(Volunteer volunteer);
	@PostMapping("volunteer")
	public Volunteer createVolunteer(@RequestBody Volunteer volunteer) {
		volunteer= volServ.createNew(volunteer);
		return volunteer;
	}

}
