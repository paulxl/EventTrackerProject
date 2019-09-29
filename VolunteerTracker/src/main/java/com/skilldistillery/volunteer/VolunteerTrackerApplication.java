package com.skilldistillery.volunteer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("com.skilldistillery.volunteer.entities")
public class VolunteerTrackerApplication {

	public static void main(String[] args) {
		SpringApplication.run(VolunteerTrackerApplication.class, args);
	}

}
